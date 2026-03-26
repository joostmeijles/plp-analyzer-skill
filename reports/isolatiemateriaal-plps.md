# PLP Report — isolatiemateriaal.nl

**Date:** 2026-03-25
**Platform:** Custom headless commerce (React/JS-rendered storefront, multi-region: NL/BE/DE)
**Language:** Dutch (nl-NL)
**Products sold:** Insulation materials (PIR, glaswol, steenwol, EPS, XPS, houtvezel/biobased), fastening materials (screws, plugs, anchors, tape), board materials (fermacell, gipsplaten), foils, tools, and accessories for thermal and acoustic insulation
**Source:** `https://www.isolatiemateriaal.nl/sitemap-categories.xml` (464 URLs) + `https://www.isolatiemateriaal.nl/sitemap-cms.xml` (71 URLs) + `https://www.isolatiemateriaal.nl/sitemap-products.xml` (1000+ PDPs) + homepage nav crawl (blocked by JS rendering) + Google search signals

---

## Scoring Methodology

```
structuralScore = (productCount × 2)
               + (isNavLinked ? 30 : 0)
               + (depth == 1 ? 20 : depth == 2 ? 10 : 0)

combinedScore = structuralScore + googleScore
```

**Google queries used:**
1. `site:isolatiemateriaal.nl pir isolatie`
2. `site:isolatiemateriaal.nl glaswol dakisolatie`
3. `pir isolatieplaten kopen`
4. `glaswol isolatie kopen`
5. `dakisolatie kopen online`
6. `muurisolatie vloerisolatie kopen`

**Nav-linked categories (0):** None — homepage is fully JS-rendered (React/headless); static HTML contains only CSS and GTM scripts, making nav link extraction impossible. All `isNavLinked` values are `false`.

> **Product counts:** This site is headless/JS-rendered. Most product counts were extracted from page heading text (e.g., `"Muurisolatie381"`, `"Vloerisolatie208"`), which are server-rendered into the HTML. For pages where no heading count was present, pagination was used to estimate (pages × ~10 products/page). Estimates are marked with `~`.

---

## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|------|-----|----------|------------|--------|----------|-------|------------|
| 1 | https://www.isolatiemateriaal.nl/isolatieplaten | 880 | 880 | 0 | ~430 | 1 | No |
| 2 | https://www.isolatiemateriaal.nl/muurisolatie | 782 | 782 | 0 | 381 | 1 | No |
| 3 | https://www.isolatiemateriaal.nl/dakisolatie | 695 | 680 | 15 | ~330 | 1 | No |
| 4 | https://www.isolatiemateriaal.nl/bevestigingsmateriaal | 496 | 496 | 0 | 238 | 1 | No |
| 5 | https://www.isolatiemateriaal.nl/vloerisolatie | 436 | 436 | 0 | 208 | 1 | No |

> The top 5 are all depth-1 category pages with the highest product density on the site; `/isolatieplaten` ranks first as a cross-material flat-panel listing (~430 SKUs across PIR, EPS, XPS, glaswol, steenwol, and houtvezel variants), while `/dakisolatie` gains extra rank through strong Google organic presence (positions 1 and 6 across multiple buying queries).

---

## Full Ranked PLP List

### Tier A — Combined ≥ 400

| URL | Combined | Structural | Google | Products | Depth |
|-----|----------|------------|--------|----------|-------|
| https://www.isolatiemateriaal.nl/isolatieplaten | 880 | 880 | 0 | ~430 | 1 |
| https://www.isolatiemateriaal.nl/muurisolatie | 782 | 782 | 0 | 381 | 1 |
| https://www.isolatiemateriaal.nl/dakisolatie | 695 | 680 | 15 | ~330 | 1 |
| https://www.isolatiemateriaal.nl/bevestigingsmateriaal | 496 | 496 | 0 | 238 | 1 |
| https://www.isolatiemateriaal.nl/vloerisolatie | 436 | 436 | 0 | 208 | 1 |

### Tier B — Combined 200–399

| URL | Combined | Structural | Google | Products | Depth |
|-----|----------|------------|--------|----------|-------|
| https://www.isolatiemateriaal.nl/pir | 299 | 280 | 19 | ~130 | 1 |
| https://www.isolatiemateriaal.nl/glaswol | 210 | 200 | 10 | ~90 | 1 |

### Tier C — Combined 50–199

| URL | Combined | Structural | Google | Products | Depth |
|-----|----------|------------|--------|----------|-------|
| https://www.isolatiemateriaal.nl/aanbiedingen | 182 | 182 | 0 | 81 | 1 |
| https://www.isolatiemateriaal.nl/eps-isolatie | 140 | 140 | 0 | ~60 | 1 |
| https://www.isolatiemateriaal.nl/biobased-isolatie | 130 | 130 | 0 | 55 | 1 |
| https://www.isolatiemateriaal.nl/b-keus-isolatie | 121 | 120 | 1 | ~50 | 1 |
| https://www.isolatiemateriaal.nl/folie | 120 | 120 | 0 | ~50 | 1 |
| https://www.isolatiemateriaal.nl/xps-isolatie | 92 | 92 | 0 | 36 | 1 |
| https://www.isolatiemateriaal.nl/steenwol | 90 | 90 | 0 | 35 | 1 |
| https://www.isolatiemateriaal.nl/dakisolatie/hellenddak-isolatie/binnenuit-isoleren/glaswol | 10+ | 0+ | 10 | ? | 5 |
| https://www.isolatiemateriaal.nl/isolatieplaten/pir-140mm | 14+ | 10+ | 4 | ? | 2 |
| https://www.isolatiemateriaal.nl/isolatieplaten/pir-100mm | 13+ | 10+ | 3 | ? | 2 |
| https://www.isolatiemateriaal.nl/glaswol/glaswol-platen | 12+ | 10+ | 2 | ? | 2 |
| https://www.isolatiemateriaal.nl/pir/pir-underlayment | 12+ | 10+ | 2 | ? | 2 |
| https://www.isolatiemateriaal.nl/b-keus-isolatie/b-keus-glaswol-isolatie | 11+ | 10+ | 1 | ? | 2 |

### Tier D — Combined 20–49

| URL | Combined | Structural | Google | Products | Depth |
|-----|----------|------------|--------|----------|-------|
| https://www.isolatiemateriaal.nl/dakisolatie/hellenddak-isolatie | 8+ | 0+ | 8 | ? | 3 |
| https://www.isolatiemateriaal.nl/dakisolatie/hellenddak-isolatie/binnenuit-isoleren/glaswol/glaswoldekens | 7+ | 0+ | 7 | ? | 6 |
| https://www.isolatiemateriaal.nl/dakisolatie/hellenddak-isolatie/binnenuit-isoleren/glaswol/glaswol-rol-met-spijkerflens | 3+ | 0+ | 3 | ? | 6 |

### Tier E — Combined < 20 (selected depth-1 categories without Google signal)

| URL | Combined | Structural | Google | Products | Depth |
|-----|----------|------------|--------|----------|-------|
| https://www.isolatiemateriaal.nl/fermacell-platen | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/plaatmateriaal | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/geluidsisolatie | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/aerogel | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/foamglas | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/dun-isoleren | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/metal-stud | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/budget-isolatie | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/accessoires | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/outlet-partijen | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/palletvoordeel | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/houtskeletbouw | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/kruipruimte-isolatie | 20 | 20 | 0 | ? | 1 |
| https://www.isolatiemateriaal.nl/kleine-isolatiemaatregelen | 20 | 20 | 0 | ? | 1 |

---

## Key Observations

1. **JS-rendered storefront limits nav-link extraction.** The homepage delivers only CSS and GTM bootstrap code as static HTML; all navigation is client-side. None of the 464 category URLs could be confirmed as `isNavLinked`, artificially suppressing all structural scores by 30 points. In practice the depth-1 categories are almost certainly nav-linked.

2. **Cross-material aggregator pages dominate.** `/isolatieplaten` (~430 SKUs) and `/muurisolatie` (381 SKUs) score highest because they aggregate products across all material types. These are the most valuable PLPs for SEO and paid search landing pages.

3. **`/pir` and `/glaswol` win on Google prominence.** Despite lower product counts than `/muurisolatie` or `/vloerisolatie`, these two material-specific categories appear prominently for high-intent Dutch buying queries ("pir isolatieplaten kopen", "glaswol isolatie kopen"), making them the best candidates for performance testing.

4. **`/bevestigingsmateriaal` is a hidden gem.** With 238 products and depth 1, the fastening materials category is unexpectedly large — likely serving professional/contractor buyers ordering in bulk alongside insulation.

5. **Deep application paths have Google signals but low structural scores.** Pages like `/dakisolatie/hellenddak-isolatie/binnenuit-isoleren/glaswol` (depth 5) appear at position 1 in site-specific queries, indicating strong SEO value despite their depth. These could benefit from Lighthouse auditing as they represent Google's preferred landing pages for specific intents.
