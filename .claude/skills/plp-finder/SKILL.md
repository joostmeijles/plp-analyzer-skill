---
name: plp-finder
description: "This skill should be used when the user asks to 'find PLPs', 'find product listing pages', 'analyze ecommerce site structure'"
---

# PLP Finder Skill

You are an agent that discovers and ranks Product Listing Pages (PLPs) for ecommerce websites. A PLP is a listing page (e.g. `/collections/shoes`, `/category/electronics`) — not individual product pages (PDPs), nor utility pages (cart, checkout, account), not category landing pages without filters.

Execute the following phases in order. Report progress at each phase.

---

## Phase 1: Input

1. Extract the target URL from the user's message.
2. If no URL is provided, ask: "Please provide the ecommerce website URL you'd like me to analyze."
3. Normalize the URL:
   - If it lacks a scheme, prepend `https://`
   - Strip trailing slashes
   - Extract the base origin (e.g. `https://www.example.com`)

---

## Phase 2: Sitemap Discovery

Goal: Build a candidate list of URLs from the site's sitemaps.

1. Fetch `{baseUrl}/robots.txt`
   - Parse all `Sitemap:` directive lines and collect those URLs
2. If no sitemaps found in robots.txt, fall back to `{baseUrl}/sitemap.xml`
3. For each sitemap URL found:
   - Fetch it
   - If it is a **sitemap index** (contains `<sitemapindex>` or `<sitemap>` tags), extract all nested `<loc>` URLs and fetch each sub-sitemap
   - If it is a **URL set** (contains `<urlset>`), extract all `<loc>` URLs
4. Deduplicate and collect all discovered URLs into a **candidate list**
5. Report: "Found N URLs in sitemaps."

---

## Phase 3: Homepage Navigation Crawl

Goal: Identify nav-linked URLs (high prominence indicator).

1. Fetch `{baseUrl}/` (homepage HTML)
2. Extract all `<a href="...">` links found within:
   - `<nav>` elements
   - `<header>` elements
   - Any element whose `class` attribute contains `nav`, `menu`, or `navigation`
3. Resolve relative URLs to absolute URLs
4. Mark each extracted URL as `isNavLinked: true`
5. Add any nav URLs not already in the candidate list to the candidate list
6. Report: "Found N nav-linked URLs."

---

## Phase 4: URL Pattern Classification

Goal: Score and filter the candidate list to keep only likely PLPs.

For each URL in the candidate list, apply these rules:

**PLP indicators** (add +1 to score for each match):
- Path contains: `/category`, `/categories`, `/collections`, `/collection`, `/c/`, `/shop`, `/browse`, `/dept`, `/department`, `/brand`, `/brands`, `/listing`, `/l/`, `/search`

**Exclude (score = -99) if**:
- Path contains PDP signals: `/product/`, `/products/` followed by an ID segment, `/p/`, `/item/`, `/sku/`, `/dp/`
- Path ends with a purely numeric segment (e.g. `/12345`) or an alphanumeric SKU pattern (e.g. `/ABC-12345`)
- Path contains noise: `/cart`, `/checkout`, `/account`, `/login`, `/register`, `/contact`, `/about`, `/blog`, `/help`, `/faq`, `/sitemap`, `/404`, `/500`

**Keep only URLs with score > 0.**

Report: "Classified N PLP candidates after filtering."

---

## Phase 5: URL Validation

Goal: Remove inaccessible or redirect-to-error URLs.

For each PLP candidate:
1. Fetch the URL (use a HEAD request)
2. Accept only HTTP 200 responses
3. For 301/302 redirects: follow to the final destination URL
   - If the final URL matches a noise pattern (homepage path `/`, `/404`, `/not-found`) — discard
   - If the final URL is still a valid PLP pattern — keep (update URL to final destination)
4. Discard any URL returning 404, 403, 5xx, or timing out

Report: "Validated N accessible PLP URLs."

---

## Phase 6: Product Count Analysis

Goal: Estimate product density on each PLP candidate.

1. Take the top 30 candidates ranked by:
   - Primary: `isNavLinked` (true first)
   - Secondary: pattern score (descending)
2. For each of these 30 URLs, fetch the page HTML
3. Count product items using these HTML patterns (use the highest count found):
   - Elements with class containing `product-card` or similar
   - Elements with class containing `product-item`
   - Elements with class containing `product-tile`
   - Children of an element with class containing `product-grid`
   - Elements with attribute `data-product`
   - Elements with attribute `itemtype` containing `Product` (schema.org)
4. Record `productCount` for each URL (0 if no matching elements found)

Report: "Analyzed product counts for N pages."

---

## Phase 7: Output

1. Compute `depth` for each URL = number of non-empty path segments (e.g. `/collections/shoes` → depth 2)
2. Sort all validated PLP candidates by:
   - Primary: `productCount` descending
   - Secondary: `isNavLinked` descending (true before false)
   - Tertiary: `depth` ascending (shallower first)
3. Output the full results as a JSON array to stdout:

```json
[
  {
    "url": "https://example.com/collections/shoes",
    "productCount": 48,
    "depth": 2,
    "isNavLinked": true
  }
]
```

4. After the JSON, print a brief summary: "Found N PLPs. Top category: {url} with {productCount} products."

---

## Phase 8: Google Ranking Score

Goal: Augment each PLP's score with an independent signal of organic search prominence.

1. Derive up to 6 search queries from the site's domain and discovered category names:
   - 2–3 `site:{domain} {top-category}` queries (one per major top-level category found in Phase 2/3)
   - 2–3 `{primary-category-keyword} kopen` or `{primary-category-keyword} buy` queries using the most prominent category names (translated to the site's language if non-English)
2. Run each query using WebSearch
3. For each result, if the URL belongs to `{domain}`, award points:
   ```
   googleScore += (11 - position)
   ```
   Sum across all queries. A URL appearing at position 1 in two queries scores 20; at position 5 in one query scores 6.
4. Ignore non-PLP results (PDPs, advice/blog pages, homepages)
5. Record `googleScore` for each PLP (0 if it never appeared)

Report: "Collected Google scores for N PLPs across M queries."

---

## Phase 9: Combined Scoring & Top-5 Selection

Goal: Merge all signals into a single score and identify the five most valuable PLPs.

### Structural score
```
structuralScore = (productCount * 2)
                + (isNavLinked ? 30 : 0)
                + (depth == 1 ? 20 : depth == 2 ? 10 : 0)
```

If all `productCount` values are 0 (JavaScript-rendered site), drop the `productCount * 2` term.

### Combined score
```
combinedScore = structuralScore + googleScore
```

### Deduplication
Before selecting the top 5, remove any URL that is an exact duplicate of another in the list. Keep the entry with the higher combined score.

### Top-5 selection
- Sort all PLPs by `combinedScore` descending
- For ties, prefer lower `depth` (shallower first)
- Select the top 5 unique URLs

### Output
Output a combined score table for all PLPs, grouped into tiers:
- **Tier A** — combinedScore ≥ 40
- **Tier B** — combinedScore 30–39
- **Tier C** — combinedScore 18–29
- **Tier D** — combinedScore 10–17
- **Tier E** — combinedScore < 10

Then output the top-5 summary block:

```
## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Depth | Nav-Linked |
|------|-----|----------|------------|--------|-------|------------|
| 1    | https://example.com/collections/shoes | 88 | 58 | 30 | 2 | Yes |
...
```

Then print one sentence explaining the selection.

---

## Phase 10: Write Markdown Report

Goal: Persist the full analysis as a markdown file in the `reports/` directory.

1. Derive the filename from the domain: `reports/{domain}-plps.md`
   e.g. `https://www.welkoop.nl` → `reports/welkoop-plps.md`
2. Write the file using the following structure:

```markdown
# PLP Report — {domain}

**Date:** {YYYY-MM-DD}
**Platform:** {detected platform or "Unknown"}
**Language:** {site language}
**Products sold:** {brief description}
**Source:** {sitemap URLs used} + homepage nav crawl + Google search signals

---

## Scoring Methodology

{scoring formula block — same as Phase 9}

**Google queries used:**
{list of queries run in Phase 8}

**Nav-linked categories ({N}):** {comma-separated list}

> {note about productCount availability — server-rendered or JS-rendered}

---

## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
...

> {one-sentence explanation}

---

## Full Ranked PLP List

### Tier A — Combined ≥ 400
...
### Tier B — Combined 200–399
...
### Tier C — Combined 50–199
...
### Tier D — Combined 20–49
...
### Tier E — Combined < 20
...

---

## Key Observations

1. ...
2. ...
```

3. Use `?` for any productCount that could not be determined.
4. Add a `+` suffix to combined scores that are lower bounds (e.g. `58+` when productCount is unknown but the structural floor is known).
5. After writing, confirm: "Report written to `reports/{domain}-plps.md`."

---

## Reference Files

- URL patterns by platform: `references/plp-patterns.md`
- Output JSON schema and usage notes: `references/output-format.md`
