# Performance Report — brekz.nl Top-5 PLPs

**Date:** 2026-03-23
**Method:** Chrome DevTools performance trace (no CPU/network throttling, desktop)
**Metrics:** CrUX field data (p75 real users) + lab observed values
**Trace files:** `reports/trace-*.json.gz`

---

## Core Web Vitals Summary (Field — p75 real users)

| Rank | URL | LCP (field) | LCP (lab) | INP (field) | CLS (field) | LCP status | INP status |
|------|-----|-------------|-----------|-------------|-------------|------------|------------|
| 1 | /hondenriemen | 2022 ms | 766 ms | 212 ms | 0.00 | Good | **Needs improvement** |
| 2 | /merken-droog-hondenvoer | 1991 ms | 973 ms | 172 ms | 0.00 | Good | Good |
| 3 | /hondenaccessoires | 1476 ms | 2655 ms | 129 ms | 0.00 | Good | Good |
| 4 | /kattenspeelgoed | 1400 ms | 923 ms | — | 0.00 | Good | — |
| 5 | /alles-voor-de-hond | 1691 ms | 888 ms | 141 ms | 0.00 | Good | Good |

> Thresholds: LCP Good ≤ 2500 ms, Needs Improvement 2500–4000 ms. INP Good ≤ 200 ms, Needs Improvement 200–500 ms.
> CLS is 0.00 across all pages — no layout shift issues.
> /kattenspeelgoed has no INP field data (insufficient CrUX sample).

---

## LCP Breakdown (Field)

| URL | TTFB | Load delay | Load duration | Render delay |
|-----|------|------------|---------------|--------------|
| /hondenriemen | 712 ms | 1191 ms | 88 ms | 457 ms |
| /merken-droog-hondenvoer | 931 ms | 209 ms | 167 ms | 927 ms |
| /hondenaccessoires | 753 ms | 154 ms | 95 ms | 688 ms |
| /kattenspeelgoed | 742 ms | 113 ms | 45 ms | 701 ms |
| /alles-voor-de-hond | 775 ms | 180 ms | 128 ms | 760 ms |

Key observations:
- **TTFB is the dominant cost** across all pages (~700–930 ms). Server response time is the primary lever.
- **/hondenriemen** is an outlier: load delay = 1191 ms (vs. 113–209 ms for others), suggesting the LCP image is discovered late or deprioritised.
- **Render delay** is high on /merken-droog-hondenvoer (927 ms), /kattenspeelgoed (701 ms), and /alles-voor-de-hond (760 ms) — likely due to client-side hydration or render-blocking scripts delaying paint.

---

## Insights by Page

### 1. /hondenriemen — `⚠ INP 212 ms`

| Insight | Estimated savings |
|---------|------------------|
| ThirdParties | (blocking post-load) |
| ForcedReflow | — |
| DOMSize | — |
| NetworkDependencyTree | — |
| RenderBlocking | FCP +0 ms, LCP +0 ms |
| Cache | 7.2 kB wasted |

- INP at 212 ms is the only CWV outside the Good threshold across all 5 pages.
- DOMSize flagged (unique to this page) — large DOM increases style recalc time and likely contributes to INP.
- Load delay of 1191 ms (field) suggests the LCP image is not preloaded or is discovered late in the dependency chain.

### 2. /merken-droog-hondenvoer

| Insight | Estimated savings |
|---------|------------------|
| ThirdParties | (blocking post-load) |
| ForcedReflow | — |
| NetworkDependencyTree | — |
| RenderBlocking | FCP +0 ms, LCP +0 ms |
| Cache | 7.2 kB wasted |

- Render delay of 927 ms (field) is highest across all pages — likely client-side image discovery after hydration.
- TTFB of 931 ms is the highest of all 5 pages.

### 3. /hondenaccessoires — `⚠ Lab LCP 2655 ms (TTFB spike)`

| Insight | Estimated savings |
|---------|------------------|
| **DocumentLatency** | **FCP −2077 ms, LCP −2077 ms** |
| ThirdParties | (blocking post-load) |
| ForcedReflow | — |
| NetworkDependencyTree | — |
| RenderBlocking | FCP +0 ms, LCP +0 ms |
| Cache | 7.2 kB wasted |

- Lab TTFB = 2179 ms caused a lab LCP of 2655 ms — well above other pages. Field LCP (1476 ms) is actually the best of the 5, indicating this TTFB was a transient server spike during the test run.
- **DocumentLatency** flags potential for 2077 ms improvement via redirect elimination, faster server response, or text compression. Worth monitoring for intermittent slow responses.

### 4. /kattenspeelgoed

| Insight | Estimated savings |
|---------|------------------|
| ThirdParties | (blocking post-load) |
| ForcedReflow | — |
| NetworkDependencyTree | — |
| RenderBlocking | FCP +0 ms, LCP +0 ms |
| Cache | 7.2 kB wasted |

- Best field LCP (1400 ms) and best lab LCP (923 ms) of all pages with adequate data.
- No INP field data available (low CrUX sample — lower traffic page).

### 5. /alles-voor-de-hond

| Insight | Estimated savings |
|---------|------------------|
| ThirdParties | (blocking post-load) |
| ForcedReflow | — |
| NetworkDependencyTree | — |
| RenderBlocking | FCP +0 ms, LCP +0 ms |
| Cache | 7.2 kB wasted |

- Render delay of 760 ms (field) is second-highest. Similar profile to /kattenspeelgoed.

---

## Cross-Cutting Issues (all 5 pages)

1. **Third-party scripts** — present and active post-load on all pages. Third-party blocking budget should be audited; defer or facade non-critical scripts (analytics, chat, ads).
2. **Forced reflow** — all pages trigger layout reflows from JavaScript querying geometric properties after DOM mutations. Batch DOM reads/writes to eliminate.
3. **Network dependency tree** — critical request chains delay resource discovery. Flatten chains via `<link rel=preload>` for LCP images and key fonts/scripts.
4. **Cache** — 7.2 kB of assets have suboptimal cache lifetimes on every page. Extend `Cache-Control: max-age` for static assets.
5. **TTFB ~700–930 ms (field)** — consistently elevated across all pages. Investigate server response time, CDN coverage, and potential absence of full-page caching for PLP responses.

---

## Priority Recommendations

| Priority | Action | Pages affected |
|----------|--------|---------------|
| P1 | Reduce server TTFB — add CDN caching or full-page cache for PLP responses | All |
| P1 | Preload LCP image on /hondenriemen to close the 1191 ms load delay gap | /hondenriemen |
| P1 | Fix INP on /hondenriemen — audit DOM size, eliminate forced reflows, defer third parties | /hondenriemen |
| P2 | Reduce render delay on /merken-droog-hondenvoer (927 ms) — defer hydration or SSR the LCP image | /merken-droog-hondenvoer |
| P2 | Monitor /hondenaccessoires for intermittent slow TTFB (2179 ms lab spike vs 753 ms field) | /hondenaccessoires |
| P3 | Defer / facade third-party scripts site-wide | All |
| P3 | Fix forced reflows — batch DOM reads/writes | All |
| P3 | Extend cache lifetimes for static assets (7.2 kB wasted per page) | All |
