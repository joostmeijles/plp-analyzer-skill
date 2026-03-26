# PLP Report — tegeldepot.nl

**Date:** 2026-03-06
**Platform:** Magento 2 (custom Dutch URL structure, no /category/ prefix)
**Language:** Dutch (NL)
**Products sold:** Bathroom sanitaryware — showers, tiles, taps, baths, mirrors, bathroom furniture, toilets, radiators, drainage
**Source:** `sitemap_cat_0.xml` + `sitemap_landing_pages_0.xml` + homepage nav crawl + Google search signals

---

## Scoring Methodology

```
structuralScore = (productCount × 2) + (isNavLinked ? 30 : 0) + (depth==1 ? 20 : depth==2 ? 10 : 0)
googleScore     = Σ (11 - position) per appearance across 8 Google queries
combinedScore   = structuralScore + googleScore
```

**Google queries used:**
- `site:tegeldepot.nl douche inloopdouche kranen regendouche`
- `site:tegeldepot.nl tegels badkamermeubels wastafels`
- `site:tegeldepot.nl badkamerspiegel toilet bad afvoer`
- `inloopdouche kopen tegeldepot`
- `wandtegels kopen tegeldepot`
- `badkamermeubels kopen tegeldepot`
- `kranen wastafelkraan kopen tegeldepot`
- `badkamerspiegel kopen tegeldepot`

**Nav-linked categories (13):** `/douche`, `/wastafels`, `/kranen`, `/tegels`, `/bad`, `/badkamerspiegel`, `/badkamermeubels`, `/toilet`, `/badkamer-accessoires`, `/badkamer-radiator`, `/afvoer`, `/meer`, `/outlet`

> Product counts are embedded in the HTML heading (e.g. "15075 producten"), confirming this is a server-rendered platform. Counts marked `?` could not be extracted due to rate limiting; scores for those entries are lower bounds.

---

## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|------|-----|----------|------------|--------|----------|-------|------------|
| 1 | https://www.tegeldepot.nl/badkamermeubels | 47,766 | 47,742 | 24 | 23,846 | 1 | Yes |
| 2 | https://www.tegeldepot.nl/kranen | 30,210 | 30,200 | 10 | 15,075 | 1 | Yes |
| 3 | https://www.tegeldepot.nl/badkamer-accessoires | 16,472 | 16,472 | 0 | 8,211 | 1 | Yes |
| 4 | https://www.tegeldepot.nl/douche | 16,400 | 16,392 | 8 | 8,171 | 1 | Yes |
| 5 | https://www.tegeldepot.nl/tegels | 13,194 | 13,186 | 8 | 6,568 | 1 | Yes |

> `/badkamermeubels` leads by a wide margin — 23,846 products (the largest catalogue on the site) plus the strongest Google signal (24). `/kranen` is a firm #2 with 15,075 products and prominent organic rankings. `/badkamer-accessoires` takes #3 on raw product volume (8,211) despite zero Google signal, narrowly edging `/douche` (8,171) which benefits from 8 Google points. `/tegels` rounds out the top 5 with 6,568 products and strong organic presence.

---

## Full Ranked PLP List

### Tier A — Combined ≥ 10,000

| URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|-----|----------|------------|--------|----------|-------|------------|
| https://www.tegeldepot.nl/badkamermeubels | 47,766 | 47,742 | 24 | 23,846 | 1 | Yes |
| https://www.tegeldepot.nl/kranen | 30,210 | 30,200 | 10 | 15,075 | 1 | Yes |
| https://www.tegeldepot.nl/badkamer-accessoires | 16,472 | 16,472 | 0 | 8,211 | 1 | Yes |
| https://www.tegeldepot.nl/douche | 16,400 | 16,392 | 8 | 8,171 | 1 | Yes |
| https://www.tegeldepot.nl/tegels | 13,194 | 13,186 | 8 | 6,568 | 1 | Yes |
| https://www.tegeldepot.nl/wastafels | 12,831 | 12,824 | 7 | 6,387 | 1 | Yes |

### Tier B — Combined 1,000–9,999

| URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|-----|----------|------------|--------|----------|-------|------------|
| https://www.tegeldepot.nl/badkamerspiegel | 8,824 | 8,804 | 20 | 4,377 | 1 | Yes |
| https://www.tegeldepot.nl/badkamer-radiator | 8,154 | 8,154 | 0 | 4,052 | 1 | Yes |
| https://www.tegeldepot.nl/kranen/regendouche | 6,764 | 6,754 | 10 | 3,372 | 2 | No |
| https://www.tegeldepot.nl/toilet | 5,596 | 5,596 | 0 | 2,773 | 1 | Yes |
| https://www.tegeldepot.nl/douche/douchewand/inloopdouche | 5,084 | 5,074 | 10 | 2,537 | 3 | No |
| https://www.tegeldepot.nl/afvoer | 4,522 | 4,522 | 0 | 2,236 | 1 | Yes |
| https://www.tegeldepot.nl/bad | 3,416 | 3,416 | 0 | 1,683 | 1 | Yes |
| https://www.tegeldepot.nl/douche/douchebak | 1,886 | 1,886 | 0 | 938 | 2 | No |
| https://www.tegeldepot.nl/meer | 1,454 | 1,454 | 0 | 702 | 1 | Yes |

### Tier C — Combined 100–999

| URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|-----|----------|------------|--------|----------|-------|------------|
| https://www.tegeldepot.nl/outlet | 737 | 734 | 3 | 342 | 1 | Yes |

### Tier D — Combined 20–99 (subcategories with unknown product counts)

| URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|-----|----------|------------|--------|----------|-------|------------|
| https://www.tegeldepot.nl/badkamerspiegel/spiegels | 28+ | 10+ | 18 | ? | 2 | No |
| https://www.tegeldepot.nl/badkamermeubels/wastafelmeubels | 21+ | 10+ | 11 | ? | 2 | No |
| https://www.tegeldepot.nl/tegels/wandtegels | 20+ | 10+ | 10 | ? | 2 | No |
| https://www.tegeldepot.nl/badkamermeubels/sets | 18+ | 10+ | 8 | ? | 2 | No |
| https://www.tegeldepot.nl/badkamerspiegel/spiegelkast | 18+ | 10+ | 8 | ? | 2 | No |
| https://www.tegeldepot.nl/douche/douchewand | 16+ | 10+ | 6 | ? | 2 | No |
| https://www.tegeldepot.nl/tegels/mozaiek-tegels | 15+ | 10+ | 5 | ? | 2 | No |
| https://www.tegeldepot.nl/douche/douchecabine | 13+ | 10+ | 3 | ? | 2 | No |
| https://www.tegeldepot.nl/wastafels/wastafel | 12+ | 10+ | 2 | ? | 2 | No |
| https://www.tegeldepot.nl/kranen/overige-kranen | 12+ | 10+ | 2 | ? | 2 | No |
| https://www.tegeldepot.nl/badkamermeubels/sets/met-wastafel | 10+ | 0+ | 10 | ? | 3 | No |
| https://www.tegeldepot.nl/badkamermeubels/sets/met-spiegel | 6+ | 0+ | 6 | ? | 3 | No |
| https://www.tegeldepot.nl/kranen/regendouche/inbouw-regendouche | 6+ | 0+ | 6 | ? | 3 | No |
| https://www.tegeldepot.nl/kranen/douchekraan/inbouw-douchekraan | 5+ | 0+ | 5 | ? | 3 | No |
| https://www.tegeldepot.nl/tegels/vloertegels | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/tegels/wandtegels | 20+ | 10+ | 10 | ? | 2 | No |
| https://www.tegeldepot.nl/wastafels/waskom | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/wastafels/fontein-toilet | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/bad/vrijstaand-bad | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/bad/ligbad | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/badkamermeubels/badkamerkasten | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/toilet/hangtoilet | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/toilet/duoblok-toilet | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/badkamer-radiator/designradiator | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/afvoer/douchegoten | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/kranen/wastafelkraan | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/kranen/badkraan | 10+ | 10+ | 0 | ? | 2 | No |
| https://www.tegeldepot.nl/kranen/douchekraan | 10+ | 10+ | 0 | ? | 2 | No |

> Nav-linked parent categories `/douche`, `/wastafels`, `/kranen`, `/tegels`, `/bad`, `/badkamerspiegel`, `/badkamermeubels`, `/toilet`, `/badkamer-accessoires`, `/badkamer-radiator`, `/afvoer`, `/meer` all have product counts confirmed. Scores marked `+` are lower bounds for subcategories where product count was not fetched due to rate limiting.

### Tier E — Combined < 20

~150 brand PLPs (e.g. `/merken-grohe`, `/merken-hansgrohe`, `/merken-hotbath`, `/merken-brauer`, `/merken-villeroy---and--boch`, `/merken-duravit`, `/merken-geberit`, etc.) score 20+ structural base (depth-1 only) with Google signals for the most prominent brands. All confirmed accessible via `sitemap_landing_pages_0.xml`. Additionally ~50 deep filter/spec pages (e.g. `/douche/douchebak/kleur/zwart`, `/bad/ligbad/afmeting-bad/190x90-cm`) score 0–10.

---

## Key Observations

1. **`/badkamermeubels` dominates by product volume** — 23,846 products is the largest catalogue on the site, nearly double `/kranen`. Its Google score of 24 (highest of any category) confirms it is also the most organically contested category. Clear #1 PLP for any SEO or ad campaign.
2. **`/kranen` is the commercial heavyweight** — 15,075 products and position-1 Google ranking for brand queries. With 10 Google points and the second-largest catalogue, it is the top revenue category and should receive dedicated landing-page treatment per brand (Grohe, Hansgrohe, Hotbath, Brauer are all indexed as `/merken-*` brand PLPs).
3. **`/badkamerspiegel` punches above its size** — 4,377 products gives it 8th place on structural score, but its Google score of 20 (second-highest across all categories) pushes it to 7th overall. Google is driving strong organic traffic to this category, suggesting high commercial intent for bathroom mirrors.
4. **`/douche/douchewand/inloopdouche` is a depth-3 page in the top 12** — 2,537 products at depth 3 scores higher than nav-linked root categories `/afvoer` and `/bad`. Its Google score of 10 (position 1 for `inloopdouche kopen tegeldepot`) signals that this subcategory has stronger commercial search intent than several parent categories.
5. **`/badkamer-accessoires` is underserved by Google** — 8,211 products and nav-linked, yet zero Google score across all 8 queries. This is likely a highly fragmented accessory category (hooks, dispensers, bathmats) with low branded search volume. Product count alone keeps it at #3.
6. **~150 brand PLPs indexed** (`/merken-grohe`, `/merken-brauer`, `/merken-hotbath`, etc.) — all accessible via `sitemap_landing_pages_0.xml`. These are valid commercial landing pages for brand-specific ad campaigns and affiliate targeting. They score 20+ structural base; top brands (Grohe, Hansgrohe) likely have significant product counts that would push them into Tier C.
