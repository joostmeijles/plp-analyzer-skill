#!/usr/bin/env node
/**
 * lighthouse-runner.js — Puppeteer-based Lighthouse auditor with cookie banner dismissal
 *
 * For each URL:
 *   1. Launches a headless Chromium via Puppeteer
 *   2. Navigates to the URL and attempts to dismiss the cookie/GDPR consent banner
 *      using layered heuristics (text matching → known CMP selectors → generic patterns),
 *      applied to both the main frame and all iframes
 *   3. Takes a screenshot after the dismissal attempt (always) for visual verification
 *   4. Harvests cookies and injects them into Lighthouse via extraHeaders
 *   5. Runs a Lighthouse mobile performance audit using the same Chrome instance
 *   6. Saves raw Lighthouse JSON to <output-dir>/lh-<sitename>-<index>.json
 *      and the screenshot to <output-dir>/screenshot-<sitename>-<index>.png
 *
 * Usage:
 *   node lighthouse-runner.js <url1> [url2 ...] [--output-dir=temp] [--sitename=site]
 *
 * Output:
 *   JSON array of per-URL results written to stdout.
 *   Progress messages written to stderr.
 */

'use strict';

const puppeteer = require('puppeteer');
const { default: lighthouse } = require('lighthouse');
const { URL } = require('url');
const path = require('path');
const fs = require('fs');

// ── Cookie-banner heuristics ──────────────────────────────────────────────────

/**
 * Case-insensitive regex matching the start of a consent accept button label.
 * Covers English, Dutch, German, and French — the dominant languages of EU
 * e-commerce sites where GDPR banners are most prevalent.
 *
 * Ordered from most specific to most generic to avoid false positives.
 */
const TEXT_ACCEPT_RE = new RegExp(
  '^(' +
  // ── Dutch ──────────────────────────────────────────────────────────────────
  'alle cookies toestaan|' +     // Cookiebot NL (welkoop.nl)
  'alle cookies accepteren|' +
  'alles toestaan|' +
  'alles accepteren|' +
  'cookies toestaan|' +
  'cookies accepteren|' +
  'accepteer alle|' +
  'accepteer|' +
  'accepteren|' +
  'akkoord|' +
  'ik ga akkoord|' +
  'ga akkoord|' +
  'toestaan|' +
  'sta alles toe|' +
  'instemmen|' +
  // ── English ────────────────────────────────────────────────────────────────
  'accept all cookies|' +
  'accept all|' +
  'accept cookies|' +
  'i accept all|' +
  'i accept|' +
  'agree to all|' +
  'agree|' +
  'i agree|' +
  'allow all cookies|' +
  'allow all|' +
  'allow cookies|' +
  'allow|' +
  'ok, i agree|' +
  'ok|' +
  'got it|' +
  'yes, i agree|' +
  'yes|' +
  'continue|' +
  'close|' +
  'dismiss|' +
  // ── German ─────────────────────────────────────────────────────────────────
  'alle cookies akzeptieren|' +
  'alle akzeptieren|' +
  'akzeptieren|' +
  'zustimmen|' +
  'ich stimme zu|' +
  // ── French ─────────────────────────────────────────────────────────────────
  'tout accepter|' +
  'accepter tout|' +
  "j\\'accepte|" +
  'accepter' +
  ')',
  'i'
);

/**
 * Known Consent Management Platform (CMP) accept-button selectors.
 * Ordered by prevalence. These are tried in every frame (main + iframes).
 */
const KNOWN_CMP_SELECTORS = [
  // OneTrust
  '#onetrust-accept-btn-handler',
  '.onetrust-accept-btn-handler',
  // Cookiebot — renders inside <iframe id="CybotCookiebotDialogIframe"> on many sites
  '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
  '#CybotCookiebotDialogBodyButtonAccept',
  // Quantcast
  '.qc-cmp2-summary-buttons button:first-child',
  // TrustArc
  '#truste-consent-button',
  // Didomi
  '#didomi-notice-agree-button',
  // Usercentrics
  'button[data-testid="uc-accept-all-button"]',
  // Osano
  '.osano-cm-accept-all',
  // CookieYes
  '.cky-btn-accept',
  // Complianz (WordPress)
  '#cmplz-btn-accept-all',
  '.cmplz-btn-accept',
  // GDPR Cookie Consent (WordPress)
  '#wt-cli-accept-all-btn',
  // Borlabs Cookie
  '#borlabs-cookie-btn-accept-all',
  // Cookiefirst
  'button[data-cookiefirst-action="accept"]',
  // Iubenda
  '#iubFooterBtn',
  // Termly
  '#termly-code-snippet-support button[class*="accept"]',
];

/**
 * Generic attribute/class-based patterns, tried after known CMP selectors fail.
 * Also applied inside iframes.
 */
const GENERIC_SELECTORS = [
  '[id*="accept"][id*="cookie"]',
  '[class*="accept"][class*="cookie"]',
  '[id*="cookie-accept"]',
  '[class*="cookie-accept"]',
  '[data-testid*="accept"]',
  '[data-cy*="accept"]',
  '[aria-label*="Accept all" i]',
  '[aria-label*="Accept cookies" i]',
  '[aria-label*="Accept" i]',
  // Dutch aria-labels
  '[aria-label*="Alle cookies" i]',
  '[aria-label*="Accepteer" i]',
  '[aria-label*="Toestaan" i]',
  'button#accept',
  'button.accept',
  '[class*="CookieConsent"] button',
  '[class*="cookie-banner"] button',
  '[class*="cookie-notice"] button',
  '[class*="consent-banner"] button',
  '[class*="consent"] button[class*="accept"]',
  '[class*="gdpr"] button[class*="accept"]',
  '[class*="gdpr"] button[class*="agree"]',
  // Last resort: first button inside a visible dialog/overlay
  '[role="dialog"] button:first-of-type',
  '[role="alertdialog"] button:first-of-type',
];

/**
 * Selector for known CMP wrapper containers. Used to detect whether a banner
 * is present before deciding how long to wait.
 */
const BANNER_CONTAINER_SELECTORS = [
  '#CybotCookiebotDialog',
  '#CybotCookiebotDialogIframe',  // Cookiebot iframe host
  '#onetrust-consent-sdk',
  '#onetrust-banner-sdk',
  '.qc-cmp2-container',
  '#truste-consent-track',
  '#didomi-host',
  '.osano-cm-window',
  '.cky-consent-container',
  '#cmplz-cookiebanner-container',
  '[class*="cookie-banner"]',
  '[class*="cookie-notice"]',
  '[class*="consent-banner"]',
  '[class*="gdpr-banner"]',
  '[id*="cookie-banner"]',
  '[id*="cookie-notice"]',
  '[id*="gdpr"]',
  '[role="dialog"]',
  '[role="alertdialog"]',
].join(', ');

/**
 * Waits for a cookie banner container to appear in the DOM, up to `timeout` ms.
 * Falls back silently if nothing appears (banner may not exist).
 */
async function waitForBanner(page, timeout = 5000) {
  try {
    await page.waitForSelector(BANNER_CONTAINER_SELECTORS, { timeout });
  } catch {
    // No banner detected within timeout — that's fine, continue anyway
  }
}

/**
 * Attempts to dismiss a cookie/GDPR consent banner on a Puppeteer page.
 *
 * Strategy (applied first to the main frame, then to every iframe):
 *   1. Wait up to 5 s for a known banner container to appear
 *   2. Text-content matching against a multilingual accept regex
 *   3. Known CMP platform selectors
 *   4. Generic class/attribute patterns
 *
 * Returns a string describing the outcome (e.g. "Clicked: Alle cookies toestaan").
 */
async function dismissCookieBanner(page) {
  await waitForBanner(page, 5000);

  // ── Try main frame first ──────────────────────────────────────────────────
  const mainResult = await tryDismissInFrame(page);
  if (mainResult) {
    await delay(1000);
    return mainResult;
  }

  // ── Try every iframe (Cookiebot and some OneTrust configs render here) ────
  for (const frame of page.frames()) {
    if (frame === page.mainFrame()) continue;
    const frameResult = await tryDismissInFrame(frame);
    if (frameResult) {
      await delay(1000);
      return `[iframe] ${frameResult}`;
    }
  }

  return 'No cookie banner found';
}

/**
 * Runs all three heuristics against a single frame (main frame or iframe).
 * Returns a result string on the first successful click, or null if nothing found.
 *
 * @param {Frame|Page} ctx  Puppeteer Page or Frame object
 */
async function tryDismissInFrame(ctx) {
  // Heuristic 1: text-content matching (multilingual)
  const textResult = await ctx.evaluate((pattern) => {
    const re = new RegExp(pattern, 'i');
    const candidates = Array.from(
      document.querySelectorAll('button, a[role="button"], input[type="button"]')
    );
    const btn = candidates.find(el => {
      const label = (el.textContent || el.value || '').replace(/\s+/g, ' ').trim();
      if (!re.test(label)) return false;
      // Visibility check (inlined to avoid cross-context function serialisation)
      if (!el.offsetParent && el.tagName !== 'BODY') return false;
      const s = window.getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || s.opacity === '0') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    });
    if (!btn) return null;
    btn.click();
    return (btn.textContent || btn.value || '').replace(/\s+/g, ' ').trim().substring(0, 60);
  }, TEXT_ACCEPT_RE.source);

  if (textResult) return `Clicked: ${textResult}`;

  // Heuristic 2: known CMP selectors
  for (const selector of KNOWN_CMP_SELECTORS) {
    const result = await tryClickInFrame(ctx, selector);
    if (result) return result;
  }

  // Heuristic 3: generic attribute/class patterns
  for (const selector of GENERIC_SELECTORS) {
    const result = await tryClickInFrame(ctx, selector);
    if (result) return result;
  }

  return null;
}

/**
 * Tries to click the first visible element matching `selector` within a frame.
 * Returns a result string on success, null if not found or not visible.
 *
 * @param {Frame|Page} ctx
 * @param {string}     selector
 */
async function tryClickInFrame(ctx, selector) {
  try {
    const el = await ctx.$(selector);
    if (!el) return null;

    const info = await ctx.evaluate(el => {
      // Visibility check (inlined)
      if (!el.offsetParent && el.tagName !== 'BODY') return null;
      const s = window.getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || s.opacity === '0') return null;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return null;
      return (el.textContent || el.value || el.getAttribute('aria-label') || '')
        .replace(/\s+/g, ' ').trim().substring(0, 60);
    }, el);

    if (info === null) return null;

    await el.click();
    return `Clicked (${selector}): ${info}`;
  } catch {
    return null;
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ── CDN detection ────────────────────────────────────────────────────────────

/**
 * Detects the CDN/hosting provider from HTTP response headers.
 *
 * Checks vendor-specific headers in priority order (most specific first).
 * Returns a human-readable name (e.g. "Vercel", "Cloudflare") or null.
 *
 * @param {Response} response  Puppeteer HTTPResponse from page.goto()
 * @returns {string|null}
 */
function detectCdn(response) {
  if (!response) return null;
  const headers = response.headers();
  const h = (name) => (headers[name.toLowerCase()] || '').toLowerCase();
  const server = h('server');

  if (headers['x-vercel-id'] || server === 'vercel')                          return 'Vercel';
  if (headers['cf-ray'] || server.includes('cloudflare'))                     return 'Cloudflare';
  if (headers['x-amz-cf-id'] || headers['x-amz-cf-pop'])                     return 'AWS CloudFront';
  if (headers['x-nf-request-id'] || server === 'netlify')                     return 'Netlify';
  if (headers['x-akamai-request-id'] || headers['akamai-grn'] ||
      server.includes('akamaighost') || server.includes('akamai'))            return 'Akamai';
  if (h('x-served-by').includes('cache-') ||
      h('via').includes('varnish') || server.includes('fastly'))              return 'Fastly';
  if (headers['x-msedge-ref'] ||
      server.includes('ecacc') || server.includes('ecd'))                     return 'Azure CDN';
  if (headers['bunny-request-id'] || server.includes('bunnycdn'))             return 'BunnyCDN';
  if (headers['x-sucuri-id'] || headers['x-sucuri-cache'])                   return 'Sucuri';
  if (h('via').includes('google') || server.includes('gws') ||
      Object.keys(headers).some(k => k.startsWith('x-goog-')))               return 'Google Cloud CDN';
  if (server.includes('nginx') && headers['x-cache'])                        return 'nginx (CDN unknown)';

  return null;
}

// ── Frontend framework detection ──────────────────────────────────────────────

/**
 * Detects the frontend framework by inspecting JavaScript globals and DOM markers
 * that frameworks reliably inject into the page.
 *
 * Runs inside the browser context via page.evaluate().
 * Returns a human-readable name (e.g. "Next.js", "Vue.js") or null.
 *
 * @param {Page} page  Puppeteer Page (after navigation and JS execution)
 * @returns {Promise<string|null>}
 */
async function detectFramework(page) {
  return page.evaluate(() => {
    // Next.js — server-injects __NEXT_DATA__ script tag; _next/static in any script src
    if (document.getElementById('__NEXT_DATA__') ||
        document.querySelector('script[src*="/_next/static/"]') ||
        typeof window.__NEXT_DATA__ !== 'undefined') {
      return 'Next.js';
    }

    // Nuxt.js
    if (typeof window.__NUXT__ !== 'undefined' ||
        typeof window.__nuxt !== 'undefined' ||
        document.getElementById('__nuxt') ||
        document.getElementById('__layout')) {
      return 'Nuxt.js';
    }

    // Gatsby
    if (typeof window.___gatsby !== 'undefined' ||
        document.getElementById('gatsby-focus-wrapper') ||
        document.querySelector('link[as="script"][href*="gatsby-chunk"]')) {
      return 'Gatsby';
    }

    // Remix
    if (typeof window.__remixContext !== 'undefined' ||
        typeof window.__remixRouteModules !== 'undefined') {
      return 'Remix';
    }

    // SvelteKit
    if (typeof window.__sveltekit_data !== 'undefined' ||
        document.querySelector('[data-sveltekit-preload-data]')) {
      return 'SvelteKit';
    }

    // Astro
    if (document.documentElement.hasAttribute('data-astro-source-file') ||
        document.querySelector('astro-island') ||
        typeof window.Astro !== 'undefined') {
      return 'Astro';
    }

    // Angular
    if (document.querySelector('[ng-version]') ||
        typeof window.getAllAngularRootElements !== 'undefined') {
      return 'Angular';
    }

    // Shopify (before generic Vue/React — Shopify uses both)
    if (typeof window.Shopify !== 'undefined') return 'Shopify';

    // BigCommerce
    if (typeof window.BCData !== 'undefined' ||
        typeof window.bigcommerce !== 'undefined') {
      return 'BigCommerce';
    }

    // Vue.js (generic, no meta-framework matched above)
    const appEl = document.getElementById('app') || document.getElementById('__app');
    if ((appEl && typeof appEl.__vue_app__ !== 'undefined') ||
        typeof window.__vue_app__ !== 'undefined' ||
        document.querySelector('[data-v-app]')) {
      return 'Vue.js';
    }

    // React (generic)
    if (document.querySelector('[data-reactroot]') ||
        Object.keys(window).some(k => k.startsWith('__reactFiber') || k.startsWith('__reactProps'))) {
      return 'React';
    }

    return null;
  });
}

// ── Bot protection detection ──────────────────────────────────────────────────

/**
 * Detects whether the page is blocked by a bot protection / WAF system.
 *
 * Checks (in order):
 *   1. HTTP response status (403, 429, 503)
 *   2. Final URL after redirects (DataDome, Akamai redirects)
 *   3. Page title + body content fingerprints for known systems
 *
 * @param {Page}     page      Puppeteer Page (after navigation)
 * @param {Response} response  Puppeteer HTTPResponse from page.goto()
 * @returns {{ detected: boolean, system: string|null, details: string|null }}
 */
async function detectBotProtection(page, response) {
  // 1. HTTP status
  const status = response ? response.status() : null;
  if (status === 403 || status === 429 || status === 503) {
    return {
      detected: true,
      system: `HTTP ${status}`,
      details: `Server returned HTTP ${status}`,
    };
  }

  // 2. Final URL after redirects (DataDome, Akamai redirect to external challenge pages)
  const finalUrl = page.url();
  if (/captcha-delivery\.com|geo\.captcha/.test(finalUrl)) {
    return { detected: true, system: 'DataDome', details: `Redirected to: ${finalUrl}` };
  }
  if (/akamaiedge\.net\/captcha/.test(finalUrl)) {
    return { detected: true, system: 'Akamai', details: `Redirected to: ${finalUrl}` };
  }

  // 3. Page content fingerprints
  const result = await page.evaluate(() => {
    const title = (document.title || '').trim();
    const titleLc = title.toLowerCase();
    const bodyHtml = (document.body && document.body.innerHTML) || '';
    const bodyHtmlLc = bodyHtml.toLowerCase();

    // Cloudflare — challenge / IUAM page or 1020 Access Denied
    if (
      titleLc === 'just a moment...' ||
      titleLc.startsWith('just a moment') ||
      bodyHtml.includes('cf-browser-verification') ||
      bodyHtml.includes('cf_captcha_kind') ||
      bodyHtml.includes('cloudflare-challenge') ||
      bodyHtml.includes('cf_chl_form') ||
      (titleLc.includes('attention required') && bodyHtmlLc.includes('cloudflare'))
    ) {
      return { system: 'Cloudflare', details: `Title: "${title}"` };
    }

    // PerimeterX (now HUMAN Security)
    if (
      bodyHtml.includes('_pxCaptcha') ||
      bodyHtml.includes('px-block-page') ||
      bodyHtmlLc.includes('perimeterx') ||
      bodyHtml.includes('human.security')
    ) {
      return { system: 'PerimeterX/HUMAN', details: `Title: "${title}"` };
    }

    // Imperva / Incapsula
    if (bodyHtmlLc.includes('incapsula') || bodyHtml.includes('_Incap_Session_')) {
      return { system: 'Imperva/Incapsula', details: `Title: "${title}"` };
    }

    // Akamai Bot Manager
    if (bodyHtml.includes('akam-sw') || bodyHtml.includes('akamai-captcha')) {
      return { system: 'Akamai', details: `Title: "${title}"` };
    }

    // DataDome (inline injection without redirect)
    if (bodyHtmlLc.includes('datadome') && titleLc.includes('access denied')) {
      return { system: 'DataDome', details: `Title: "${title}"` };
    }

    // Generic: titles that unambiguously indicate blocking
    if (
      titleLc === 'access denied' ||
      titleLc === '403 forbidden' ||
      titleLc === '429 too many requests' ||
      titleLc === '503 service unavailable' ||
      titleLc.includes('robot check') ||
      titleLc.includes('security check') ||
      titleLc.includes('are you human') ||
      titleLc.includes('prove you are human') ||
      titleLc.includes('ddos-guard') ||
      (titleLc.includes('captcha') && !titleLc.includes('recaptcha'))
    ) {
      return { system: 'Unknown', details: `Title: "${title}"` };
    }

    return null;
  });

  if (result) {
    return { detected: true, system: result.system, details: result.details };
  }
  return { detected: false, system: null, details: null };
}

// ── Lighthouse runner ─────────────────────────────────────────────────────────

const MOBILE_EMULATION = {
  mobile: true,
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  disabled: false,
};

/**
 * Runs a Lighthouse mobile performance audit for a single URL.
 *
 * The flow:
 *   1. Open a Puppeteer page, navigate to the URL
 *   2. Dismiss the cookie banner
 *   3. Harvest cookies from the page
 *   4. Close the Puppeteer page
 *   5. Run Lighthouse (connected to the same Chrome via CDP port),
 *      injecting harvested cookies via extraHeaders so the banner
 *      does not reappear on Lighthouse's fresh navigation
 *   6. Parse and return the performance metrics
 *
 * @param {string}  url        The URL to audit
 * @param {Browser} browser    Puppeteer Browser instance
 * @param {string}  outputDir  Directory to write raw Lighthouse JSON and screenshots
 * @param {string}  sitename   Short site identifier for file naming
 * @param {number}  index      Zero-based index for file naming
 * @returns {{ cookieBanner: string, screenshotPath: string, metrics: object }}
 */
async function auditUrl(url, browser, outputDir, sitename, index) {
  const wsEndpoint = browser.wsEndpoint();
  const port = parseInt(new URL(wsEndpoint).port, 10);

  let cookieBanner = 'No cookie banner found';
  let screenshotPath = null;
  let cookieHeader = '';
  let botProtection = { detected: false, system: null, details: null };
  let cdn = null;
  let framework = null;

  const page = await browser.newPage();
  try {
    // Mimic a real browser — some CMPs (e.g. Cookiebot) suppress the banner for
    // known automation user-agents. If the banner still doesn't appear that is
    // acceptable; the screenshot below provides visual confirmation.
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    );
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'nl-NL,nl;q=0.9,en;q=0.8' });
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });

    // networkidle2 ensures async CMP scripts (Cookiebot, OneTrust) have finished injecting
    const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });

    // Detect bot protection before doing anything else with the page
    botProtection = await detectBotProtection(page, response);
    if (botProtection.detected) {
      process.stderr.write(
        `  ⚠ Bot protection detected: ${botProtection.system} — ${botProtection.details}\n`
      );
    }

    // Detect CDN from response headers and framework from page globals
    cdn = detectCdn(response);
    framework = await detectFramework(page);

    // Attempt banner dismissal (main frame + all iframes)
    cookieBanner = await dismissCookieBanner(page);

    // Always screenshot after dismissal — confirms banner state regardless of outcome
    const screenshotFile = `screenshot-${sitename}-${index}.png`;
    screenshotPath = path.join(outputDir, screenshotFile);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    process.stderr.write(`  Screenshot: ${screenshotPath}\n`);

    const cookies = await page.cookies();
    cookieHeader = cookies.map(c => `${c.name}=${c.value}`).join('; ');
  } finally {
    await page.close();
    // Give Chrome a moment to stabilise after closing the tab before Lighthouse connects
    await delay(500);
  }

  // Lighthouse audit (fresh navigation on same Chrome instance)
  const flags = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance', 'seo'],
    formFactor: 'mobile',
    screenEmulation: MOBILE_EMULATION,
    throttlingMethod: 'simulate',
    port,
    ...(cookieHeader ? { extraHeaders: { Cookie: cookieHeader } } : {}),
  };

  const runnerResult = await lighthouse(url, flags);
  const lhr = runnerResult.lhr;

  // Save raw Lighthouse JSON
  const outputPath = path.join(outputDir, `lh-${sitename}-${index}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(lhr, null, 2));

  // Extract performance metrics
  const a = lhr.audits;

  // Resource breakdown from resource-summary audit
  const resourceItems = a['resource-summary']?.details?.items || [];
  const res = (label) => resourceItems.find(i => i.label === label) || { requestCount: 0, transferSize: 0 };
  const resources = {
    total:      { requests: res('Total').requestCount,       bytes: res('Total').transferSize },
    scripts:    { requests: res('Script').requestCount,      bytes: res('Script').transferSize },
    images:     { requests: res('Image').requestCount,       bytes: res('Image').transferSize },
    css:        { requests: res('Stylesheet').requestCount,  bytes: res('Stylesheet').transferSize },
    fonts:      { requests: res('Font').requestCount,        bytes: res('Font').transferSize },
    docs:       { requests: res('Document').requestCount,    bytes: res('Document').transferSize },
    thirdParty: { requests: res('Third-party').requestCount, bytes: res('Third-party').transferSize },
    other:      { requests: res('Other').requestCount,       bytes: res('Other').transferSize },
  };

  // Individual script files from network-requests audit (sorted largest first)
  const networkItems = a['network-requests']?.details?.items || [];
  const scriptFiles = networkItems
    .filter(item => item.resourceType === 'Script' && item.transferSize > 0)
    .map(item => ({ url: item.url, bytes: item.transferSize }))
    .sort((a, b) => b.bytes - a.bytes);

  const metrics = {
    score:        Math.round(lhr.categories.performance.score * 100),
    seoScore:     lhr.categories.seo ? Math.round(lhr.categories.seo.score * 100) : null,
    fcp_ms:       Math.round(a['first-contentful-paint'].numericValue),
    si_ms:        Math.round(a['speed-index'].numericValue),
    lcp_ms:       Math.round(a['largest-contentful-paint'].numericValue),
    tbt_ms:       Math.round(a['total-blocking-time'].numericValue),
    cls:          a['cumulative-layout-shift'].numericValue,
    tti_ms:       Math.round(a['interactive'].numericValue),
    ttfb_ms:      Math.round(a['server-response-time'].numericValue),
    // INP cannot be measured in Lighthouse lab/simulated mode (no user interactions)
    inp_ms:       null,
    pageWeight_bytes: a['total-byte-weight']?.numericValue ?? null,
    resources,
    scriptFiles,
  };

  return { cookieBanner, botProtection, cdn, framework, screenshotPath, metrics };
}

// ── CLI entry point ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const urls = [];
  let outputDir = 'temp';
  let sitename = '';

  for (const arg of args) {
    if (arg.startsWith('--output-dir='))  outputDir = arg.slice('--output-dir='.length);
    else if (arg.startsWith('--sitename=')) sitename = arg.slice('--sitename='.length);
    else if (!arg.startsWith('--'))        urls.push(arg);
  }

  if (!urls.length) {
    process.stderr.write(
      'Usage: node lighthouse-runner.js <url1> [url2 ...] [--output-dir=temp] [--sitename=site]\n'
    );
    process.exit(1);
  }

  if (!sitename) {
    try {
      const host = new URL(urls[0]).hostname;
      sitename = host.replace(/^www\./, '').split('.')[0];
    } catch {
      sitename = 'unknown';
    }
  }

  fs.mkdirSync(outputDir, { recursive: true });

  process.stderr.write(`Launching browser...\n`);
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--remote-debugging-port=0', // OS assigns a free port
      // Avoid bot-detection signals that cause some CMPs to suppress the banner
      '--disable-blink-features=AutomationControlled',
    ],
  });

  const results = [];

  try {
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      process.stderr.write(`[${i + 1}/${urls.length}] Auditing: ${url}\n`);

      try {
        const { cookieBanner, botProtection, cdn, framework, screenshotPath, metrics } = await auditUrl(url, browser, outputDir, sitename, i);
        process.stderr.write(`  Cookie banner: ${cookieBanner}\n`);
        process.stderr.write(`  Bot protection: ${botProtection.detected ? `⚠ ${botProtection.system}` : 'none'}\n`);
        process.stderr.write(`  CDN: ${cdn || 'unknown'} | Framework: ${framework || 'unknown'}\n`);
        process.stderr.write(`  Score: ${metrics.score} | LCP: ${metrics.lcp_ms}ms | TBT: ${metrics.tbt_ms}ms\n`);
        results.push({ url, status: 'ok', cookieBanner, botProtection, cdn, framework, screenshotPath, lighthouse: metrics });
      } catch (err) {
        process.stderr.write(`  Error: ${err.message}\n`);
        results.push({ url, status: 'error', errorMessage: err.message, screenshotPath: null, lighthouse: null });
      }
    }
  } finally {
    await browser.close();
  }

  process.stdout.write(JSON.stringify(results, null, 2) + '\n');
}

main().catch(err => {
  process.stderr.write(`Fatal: ${err.message}\n${err.stack}\n`);
  process.exit(1);
});
