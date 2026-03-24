---
name: plp-lighthouse
description: "This skill should be used when the user asks to 'run lighthouse on PLPs', 'performance test product listing pages', 'audit PLP performance', 'lighthouse audit URLs', or 'test Core Web Vitals for PLPs'. It accepts a list of URLs — either a JSON array from the plp-finder skill or a plain list — and runs Lighthouse mobile performance audits on each one using the tools/lighthouse-runner.js Puppeteer tool."
---

# PLP Lighthouse Performance Skill

You are an agent that runs Lighthouse mobile performance audits on Product Listing Pages (PLPs) and produces a structured markdown report.

**Approach:**
1. Run `tools/lighthouse-runner.js` — a Puppeteer-based tool that, for each URL:
   - Launches a headless Chromium browser
   - Navigates to the URL and checks for bot protection / WAF blocking (Cloudflare challenge, PerimeterX, DataDome, Imperva, HTTP 403/429/503, etc.)
   - Dismisses the cookie/GDPR consent banner via layered heuristics
   - Takes a screenshot for visual verification of banner state and bot protection status
   - Harvests consent cookies and injects them into Lighthouse via `extraHeaders`
   - Runs a Lighthouse mobile audit (Performance + SEO categories) using the same Chrome instance
2. Parse the JSON output and generate a structured markdown report.

---

## Prerequisites

```bash
cd tools && npm install
```

---

## Phase 1: Input

1. Parse the URL list (JSON array from plp-finder or plain list).
2. If no URLs provided, ask the user to supply them.
3. Output directory: `reports/` (default). Temp directory: `temp/`.
4. **Extract site name** from the first URL's hostname: strip `www.`, take the first label (e.g. `www.welkoop.nl` → `welkoop`).
5. Report: "Starting Lighthouse mobile performance audit for N URLs."

---

## Phase 2: Setup

```bash
cd tools && npm install --silent
```

---

## Phase 3: Run the Puppeteer Lighthouse Tool

```bash
node tools/lighthouse-runner.js \
  "{url1}" "{url2}" ... \
  --output-dir="temp" \
  --sitename="{sitename}"
```

The tool outputs a JSON array to stdout. Each entry:

```json
{
  "url": "https://example.com/collections/shoes",
  "status": "ok",
  "cookieBanner": "Clicked: Accept all cookies",
  "botProtection": {
    "detected": false,
    "system": null,
    "details": null
  },
  "screenshotPath": "temp/screenshot-sitename-0.png",
  "lighthouse": {
    "score": 62,
    "seoScore": 85,
    "fcp_ms": 2100,
    "si_ms": 3800,
    "lcp_ms": 3200,
    "tbt_ms": 340,
    "cls": 0.08,
    "tti_ms": 5100,
    "ttfb_ms": 480,
    "inp_ms": null,
    "pageWeight_bytes": 2100000,
    "resources": {
      "total":      { "requests": 90,  "bytes": 2100000 },
      "scripts":    { "requests": 18,  "bytes": 900000  },
      "images":     { "requests": 45,  "bytes": 700000  },
      "css":        { "requests": 4,   "bytes": 120000  },
      "fonts":      { "requests": 4,   "bytes": 100000  },
      "docs":       { "requests": 2,   "bytes": 80000   },
      "thirdParty": { "requests": 30,  "bytes": 800000  },
      "other":      { "requests": 17,  "bytes": 200000  }
    },
    "scriptFiles": [
      { "url": "https://example.com/assets/vendor.js", "bytes": 520000 },
      { "url": "https://example.com/assets/app.js",    "bytes": 210000 },
      { "url": "https://cdn.example.com/analytics.js", "bytes": 85000  }
    ]
  }
}
```

**Notes:**
- `inp_ms` is always `null` and is ignored. Use `tbt_ms` as the interactivity metric in all report sections.
- `scriptFiles` contains one entry per individual JS file loaded by the page (from the Lighthouse `network-requests` audit), sorted by size descending — use this to report individual bundle sizes rather than the aggregate `resources.scripts` total.
- `botProtection.detected: true` means the Puppeteer navigation encountered a bot protection page. The Lighthouse metrics for that URL may be unreliable (reflecting the challenge page rather than the actual PLP). Flag these pages clearly in the report.
- **`botProtection` is detected on the Puppeteer pre-navigation only** (before the banner dismissal). Lighthouse does its own fresh navigation — if the tool was blocked during Lighthouse's navigation the metrics will appear anomalously low (near-zero requests, very low page weight, tiny LCP). Cross-check: if `resources.total.requests < 10` and `pageWeight_bytes < 100000` the Lighthouse run was likely also blocked.

---

## Phase 4: Aggregate Metrics

Compute across all URLs with `status: ok`:

### Performance & SEO
- Mean **Performance Score** (0–100)
- Mean **SEO Score** (0–100) — used as Discoverability Score

### Core Web Vitals
- Mean **LCP** (ms) — Good ≤ 2500, NI 2500–4000, Poor > 4000
- Mean **CLS** — Good ≤ 0.1, NI 0.1–0.25, Poor > 0.25
- Mean **TBT** (ms) — Good ≤ 200, NI 200–600, Poor > 600
- Pass rates (Good / Needs Improvement / Poor) for each metric

### Load Timing
- Mean **TTFB** (ms), **FCP** (ms), **Speed Index** (ms), **TBT** (ms)
- Thresholds: FCP Good ≤ 1800, NI 1800–3000, Poor > 3000 | SI Good ≤ 3400, NI 3400–5800, Poor > 5800 | TBT Good ≤ 200, NI 200–600, Poor > 600

### Page Weight
- Mean **page weight** in MB (from `pageWeight_bytes`)
- Mean **total requests** (from `resources.total.requests`)
- Per-page resource breakdown (scripts, images, CSS, fonts, docs, other) in KB or MB

---

## Phase 5: Write Markdown Report

Write to `{outputDirPath}/plp-lighthouse-{sitename}-{YYYY-MM-DD}.md`.

Follow the structure defined in `references/report-format.md` exactly:

The report is written in **Dutch**. Follow the section order and Dutch headings defined in `references/report-format.md` exactly:

1. **Managementsamenvatting** — fixed Dutch template (fill in sitename, mean score, mean LCP in seconds): "De website van [bedrijfsnaam] scoort momenteel een [score] op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden ([x] sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet."
2. **Samenvatting** — 3–5 Dutch sentences describing overall website health: mean performance score, mean LCP (incl. rating), mean TBT (incl. rating), mean CLS, page weight, and the most important bottleneck. If any pages had bot protection detected, mention it here.
3. **Algemene gezondheid** — median Performance Score, median SEO Score, median page weight, pages analyzed
4. **⚠ Botbeveiliging (conditional)** — include this section only if `botProtection.detected === true` for at least one URL. Table with columns: Pagina | Systeem | Details | Maatregel. Maatregel = "Resultaten mogelijk onbetrouwbaar — controleer screenshot". Add a note: "Lighthouse-metrieken voor geblokkeerde pagina's kunnen de challenge-pagina weerspiegelen in plaats van de daadwerkelijke PLP." Omit this section entirely if no bot protection was detected.
5. **Core Web Vitals** — LCP, CLS, and TBT summary table with pass rates
6. **Core Web Vitals per pagina** — one row per page: Score, LCP, CLS, TBT, Bot-check, Status. Bot-check column: ✅ for `detected: false`, ⚠ + system name for `detected: true`.
7. **Laadtijddetails** — per-page TTFB, FCP, Speed Index, TBT + median row
8. **Paginagewicht** — median page weight and requests
9. **Resourceverdeling per pagina** — per-page resource table (Total, Scripts, Images, CSS, Fonts, Docs, Other); use `resources.*` totals for all columns except Scripts — for Scripts show the aggregate count/bytes from `resources.scripts` with a note that the breakdown follows
10. **JavaScript-bestanden per pagina** — for each page, list the individual JS files from `scriptFiles` (URL shortened to filename or domain, size in KB); show top 10 per page sorted by size descending; include a column for first-party vs third-party (third-party = different origin than the audited URL)
11. **Aanbevelingen** — Hoge prioriteit and Gemiddelde prioriteit, derived from the worst metrics

After writing, print:
`Rapport opgeslagen als {filePath}. {N} URL's geaudit ({errors} fouten). Gemiddelde performancescore: {value}, Gemiddeld LCP: {value}ms.`

---

## Reference Files

- Markdown report format: `references/report-format.md`
- Cookie banner patterns: `references/cookie-banner-patterns.md`
- Lighthouse runner tool: `tools/lighthouse-runner.js`
