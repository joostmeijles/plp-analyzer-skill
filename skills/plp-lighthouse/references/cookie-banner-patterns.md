# Cookie Banner Dismissal Patterns

Reference for detecting and dismissing cookie consent / GDPR banners before Lighthouse audits.

## Why Dismiss Before Auditing

- Cookie banners can block content, inflating CLS scores
- Large overlay elements affect LCP (banner may be the largest paint)
- Interstitials can skew accessibility scores
- Removes layout instability caused by banner animations

## Detection Strategy (in priority order)

### 1. Smart Wait

Before trying any selector, the tool waits up to **5 seconds** for a known banner container to appear in the DOM using `waitForSelector`. This handles CMPs that inject their UI asynchronously (Cookiebot, OneTrust, Didomi). If no container appears within 5 seconds, the tool proceeds anyway (the page may simply have no banner).

### 2. Text-based Button Detection (highest reliability)

Match button text with a multilingual case-insensitive regex covering Dutch, English, German, and French:

**Dutch:** `alle cookies toestaan`, `alle cookies accepteren`, `alles toestaan`, `alles accepteren`, `cookies toestaan`, `cookies accepteren`, `accepteer alle`, `accepteer`, `accepteren`, `akkoord`, `ik ga akkoord`, `toestaan`, `instemmen`

**English:** `accept all cookies`, `accept all`, `accept cookies`, `i accept`, `agree to all`, `agree`, `i agree`, `allow all`, `allow cookies`, `allow`, `ok`, `got it`, `yes`, `continue`, `close`, `dismiss`

**German:** `alle cookies akzeptieren`, `alle akzeptieren`, `akzeptieren`, `zustimmen`, `ich stimme zu`

**French:** `tout accepter`, `accepter tout`, `j'accepte`, `accepter`

Targets: `button`, `a[role="button"]`, `input[type="button"]`

Only **visible** elements are matched (non-zero dimensions, not hidden by CSS).

### 3. Known CMP (Consent Management Platform) Selectors

| Platform | Selector | Notes |
|----------|----------|-------|
| OneTrust | `#onetrust-accept-btn-handler` | |
| OneTrust (v2) | `.onetrust-accept-btn-handler` | |
| Cookiebot | `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll` | Often in iframe |
| Cookiebot (simple) | `#CybotCookiebotDialogBodyButtonAccept` | Often in iframe |
| Quantcast | `.qc-cmp2-summary-buttons button:first-child` | |
| TrustArc | `#truste-consent-button` | |
| Didomi | `#didomi-notice-agree-button` | |
| Usercentrics | `button[data-testid="uc-accept-all-button"]` | |
| Osano | `.osano-cm-accept-all` | |
| CookieYes | `.cky-btn-accept` | |
| Complianz | `#cmplz-btn-accept-all`, `.cmplz-btn-accept` | |
| GDPR Cookie Consent (WP) | `#wt-cli-accept-all-btn` | |
| Borlabs Cookie | `#borlabs-cookie-btn-accept-all` | |
| Cookiefirst | `button[data-cookiefirst-action="accept"]` | |
| Iubenda | `#iubFooterBtn` | |

### 4. Generic Class/ID Patterns

```css
[id*="accept"][id*="cookie"]
[class*="accept"][class*="cookie"]
[id*="cookie-accept"]
[class*="cookie-accept"]
[data-testid*="accept"]
[data-cy*="accept"]
[aria-label*="Accept all" i]
[aria-label*="Accept cookies" i]
[aria-label*="Accept" i]
[aria-label*="Alle cookies" i]   /* Dutch */
[aria-label*="Accepteer" i]      /* Dutch */
[aria-label*="Toestaan" i]       /* Dutch */
button#accept
button.accept
[class*="CookieConsent"] button
[class*="cookie-banner"] button
[class*="cookie-notice"] button
[class*="consent-banner"] button
[class*="consent"] button[class*="accept"]
[class*="gdpr"] button[class*="accept"]
[role="dialog"] button:first-of-type
```

### 5. Iframe Traversal

Heuristics 2–4 are applied first to the **main frame**, then repeated for **every iframe** on the page. This handles:
- **Cookiebot** — renders its dialog inside `<iframe id="CybotCookiebotDialogIframe">` on many sites (confirmed: welkoop.nl)
- **Some OneTrust configs** — may render in a sandboxed iframe
- **Quantcast** — sometimes iframe-hosted

Result strings from iframe clicks are prefixed with `[iframe]` in the output.

## Post-click Delay

After clicking the dismiss button, wait **1000ms** before starting the audit to allow:
- Banner fade-out animations to complete
- Layout to stabilize (prevents CLS from the banner disappearing)

## Fallback Behavior

If no banner is found or dismissal fails:
- Continue with the audit — do not block on cookie banner
- Record in the URL result: `cookieBanner: "No banner detected"` or `cookieBanner: "Dismissal failed"`
- This is noted in the per-URL table in the report

## Common Edge Cases

| Scenario | Handling |
|----------|----------|
| Banner appears after scroll | Audit immediately without scroll |
| Banner has "Reject All" only | Do not click reject — just proceed (banner stays, note it) |
| Shadow DOM | JavaScript click may fail — try CSS selector via `click` tool |
| Multiple banners (stacked) | Run dismissal script twice |
| Banner reappears on reload | Re-dismiss before the performance trace (Step 3d) |
