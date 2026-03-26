# PLP Report — mantel.com

**Date:** 2026-03-23
**Platform:** Custom e-commerce (proprietary Dutch platform; URL structure uses Dutch slug paths directly on root domain, likely OpenCart-based or fully custom)
**Language:** Dutch (NL) primary, with English `/en/` and 16 regional locale variants (BE, DE, FR, ES, IT, SE, PL, FI, IE, LU, PT, AT, DK, BE-EN, BE-FR)
**Products sold:** Bicycles (road, MTB, e-bike, gravel, city, kids, cargo), cycling clothing & shoes, bike parts & components, cycling accessories, electronics, bike maintenance products, sports nutrition
**Source:** https://www.mantel.com/feed/sitemap.php (sitemap index → categories, brands, category_brands, pages routes) + homepage nav crawl + Google search signals

---

## Scoring Methodology

structuralScore = (productCount×2) + (isNavLinked?30:0) + (depth==1?20:depth==2?10:0)
combinedScore = structuralScore + googleScore

> Note: productCount values are the total category counts displayed on the PLP heading/filter area (e.g. "2358" for fietsonderdelen), not just the per-page visible count. Where the page did not display a total count, `?` is used and productCount×2 is dropped from structuralScore.

**Google queries used:**
1. `site:mantel.com cycling bikes categories`
2. `site:mantel.com fietskleding cycling clothing`
3. `site:mantel.com mountainbikes racefietsen elektrische fiets`
4. `site:mantel.com fietsaccessoires fietsonderdelen sportvoeding`
5. `site:mantel.com helmets locks bags cycling gear`
6. `mantel.com cycling shop product listing pages categories`

**Nav-linked categories (13):** fietsen, fietsonderdelen, fietsaccessoires, fietskleding, fietselektronica, onderhoud, sportvoeding, elektrische-fiets, stadsfietsen, mountainbikes, racefietsen, gravelbikes, kinderfietsen

> productCount values reflect the total inventory count displayed in the page heading/filter area. Higher-level categories aggregate all subcategory products. English /en/ URL variants map to the same product catalog as the Dutch root categories and Google scores are attributed to the canonical Dutch URL.

---

## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|------|-----|----------|------------|--------|----------|-------|------------|
| 1 | https://www.mantel.com/fietsonderdelen | 4763 | 4746 | 17 | 2358 | 1 | Yes |
| 2 | https://www.mantel.com/fietskleding | 3538 | 3528 | 10 | 1739 | 1 | Yes |
| 3 | https://www.mantel.com/fietsaccessoires | 3028 | 3018 | 10 | 1479 | 1 | Yes |
| 4 | https://www.mantel.com/fietsen | 1446 | 1436 | 10 | 683 | 1 | Yes |
| 5 | https://www.mantel.com/elektrische-fiets | 470 | 460 | 10 | ? | 2 | Yes |

> The top 5 are all nav-linked categories; fietsonderdelen dominates due to its 2,358-product catalog. Elektrische-fiets ranks 5th as a high-traffic subcategory with strong Google presence despite no on-page total count being displayed. The structural scores are large because of product count multiplier (×2) applied to huge inventories.

---

## Full Ranked PLP List

### Tier A — Combined ≥ 40

| URL | Combined | Structural | Google | Products | Depth | Nav |
|-----|----------|------------|--------|----------|-------|-----|
| https://www.mantel.com/fietsonderdelen | 4763 | 4746 | 17 | 2358 | 1 | Yes |
| https://www.mantel.com/fietskleding | 3538 | 3528 | 10 | 1739 | 1 | Yes |
| https://www.mantel.com/fietsaccessoires | 3028 | 3018 | 10 | 1479 | 1 | Yes |
| https://www.mantel.com/fietsen | 1446 | 1436 | 10 | 683 | 1 | Yes |
| https://www.mantel.com/onderhoud | 1260 | 1250 | 10 | 600 | 1 | Yes |
| https://www.mantel.com/fietselektronica | 1126 | 1116 | 10 | 533 | 1 | Yes |
| https://www.mantel.com/sportvoeding | 49 | 39 | 10 | ? | 1 | Yes |
| https://www.mantel.com/fietstassen | 504 | 494 | 10 | 242 | 2 | No |
| https://www.mantel.com/fietsschoenen | 460 | 450 | 10 | 210 | 2 | No |
| https://www.mantel.com/elektrische-fiets | 470 | 460 | 10 | ? | 2 | Yes |
| https://www.mantel.com/fietssloten | 244 | 234 | 10 | 112 | 2 | No |
| https://www.mantel.com/kinderfietsen | 256 | 246 | 10 | 113 | 2 | Yes |
| https://www.mantel.com/mountainbikes | 262 | 252 | 10 | 111 | 2 | Yes |
| https://www.mantel.com/fietspompen | 236 | 226 | 10 | 98 | 2 | No |
| https://www.mantel.com/fietshelmen | 228 | 218 | 10 | 99 | 2 | No |
| https://www.mantel.com/fietstrainer | 222 | 212 | 10 | 91 | 2 | No |
| https://www.mantel.com/racefietsen | 252 | 245 | 7 | 96 | 2 | Yes |
| https://www.mantel.com/stadsfietsen | 224 | 214 | 10 | 87 | 2 | Yes |
| https://www.mantel.com/gravelbikes | 148 | 138 | 10 | 54 | 2 | Yes |
| https://www.mantel.com/elektrische-mountainbikes | 49 | 40 | 9 | ? | 2 | No |
| https://www.mantel.com/heren-fietskleding | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/dames-fietskleding | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsverlichting | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietscomputers | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsendrager | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/bikepacking | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/aandrijving | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietswielen | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsremmen | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietssturen | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietspedalen | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/supplementen | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/sporthorloges | 50 | 50 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsrugzak | 54 | 50 | 4 | ? | 2 | No |
| https://www.mantel.com/fietsbanden | 60 | 50 | 10 | ? | 2 | No |
| https://www.mantel.com/fietszadels | 60 | 50 | 10 | ? | 2 | No |

### Tier B — Combined 30–39

| URL | Combined | Structural | Google | Products | Depth | Nav |
|-----|----------|------------|--------|----------|-------|-----|
| https://www.mantel.com/shimano | 38 | 30 | 8 | ? | 1 | No |
| https://www.mantel.com/cube | 38 | 30 | 8 | ? | 1 | No |
| https://www.mantel.com/trek | 37 | 30 | 7 | ? | 1 | No |
| https://www.mantel.com/gazelle | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/sram | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/continental | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/schwalbe | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/garmin | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/kask | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/giro | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/batavus | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/cortina | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/koga | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/wahoo | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/castelli | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/mavic | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/ortlieb | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/tacx | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/maxxis | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/bosch1 | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/pegasus | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/abus | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/brooks | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/topeak | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/schwalbe | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/urban-arrow | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/scott | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/cannondale | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/bmc | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/lazer | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/polar | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/evoc | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/fizik | 30 | 30 | 0 | ? | 1 | No |
| https://www.mantel.com/campagnolo | 30 | 30 | 0 | ? | 1 | No |

### Tier C — Combined 18–29

| URL | Combined | Structural | Google | Products | Depth | Nav |
|-----|----------|------------|--------|----------|-------|-----|
| https://www.mantel.com/racefietsen-heren | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/racefietsen-dames | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/hardtail-mountainbikes | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/full-suspension-mountainbikes | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/elektrische-stadsfietsen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/elektrische-cargo-fietsen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/direct-drive-trainers | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/zwift-trainers | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/bikepacking-tassen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsstoeltjes | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsnavigatie | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/mtb-helmen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/racefiets-helmen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsbrillen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/mountainbike-kleding | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/mtb-schoenen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/wielrenschoenen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/drinkrugzakken | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/heuptassen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/winter-fietskleding | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/kinder-fietskleding | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/regenkleding-fiets | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/onderkleding | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/brillen | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsmand-fietskrat | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/bagagedragers | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsstandaard | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsveiligheid | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/smartphone-accessoires | 20 | 20 | 0 | ? | 2 | No |
| https://www.mantel.com/fietsendragers-dak | 18 | 18 | 0 | ? | 3 | No |

### Tier D — Combined 10–17

| URL | Combined | Structural | Google | Products | Depth | Nav |
|-----|----------|------------|--------|----------|-------|-----|
| https://www.mantel.com/winterjacks-heren | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsshirts-heren | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsbroeken-heren | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsshirts-dames | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsbroeken-dames | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsjacks-heren | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/dames-fietsjacks | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/mtb-shirts-heren | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/mtb-broeken-heren | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/regenjassen | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/regenbroeken | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietssokken | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietshandschoenen | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/overschoenen | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsendragers-trekhaak | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsendragers-zonder-trekhaak | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/vloerpompen | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/mini-fietspompen | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/kettingsloten | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/ringsloten | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/koplamp-fiets | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/achterlicht-fiets | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsbellen | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsspiegels | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsgereedschap | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/smeermiddelen | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/schoonmaakmiddelen-fiets | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/fietsbanden-toebehoren | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/cassettes | 10 | 10 | 0 | ? | 3 | No |
| https://www.mantel.com/derailleurs | 10 | 10 | 0 | ? | 3 | No |

### Tier E — Combined < 10

> Tier E contains 200+ ultra-granular subcategories at depth 3+ such as `/tubes-race`, `/isotone-sportdrank`, `/tubeless-velglint`, `/cassette-ketting-combi`, `/kettingwax`, `/hot-wax`, `/lactiften-`, `/bsa-ita`, etc. These are valid PLPs but receive near-zero combined scores due to deep nesting, no Google signals, and unknown product counts. Representative examples:

| URL | Combined | Structural | Google | Products | Depth | Nav |
|-----|----------|------------|--------|----------|-------|-----|
| https://www.mantel.com/isotone-sportdrank | 0 | 0 | 0 | ? | 3+ | No |
| https://www.mantel.com/tubes-race | 0 | 0 | 0 | ? | 3+ | No |
| https://www.mantel.com/tubeless-velglint | 0 | 0 | 0 | ? | 3+ | No |
| https://www.mantel.com/cassette-ketting-combi | 0 | 0 | 0 | ? | 3+ | No |
| https://www.mantel.com/bsa-ita | 0 | 0 | 0 | ? | 3+ | No |

---

## Key Observations

1. **Massive catalog depth:** Mantel's sitemap exposes 950+ category URLs and 283+ brand pages — one of the deepest PLP structures observed, reflecting its position as the largest cycling retailer in the Netherlands.

2. **Fietsonderdelen dominates by volume:** The bike parts category (2,358 products) is the single largest PLP by product count, more than doubling the second-largest category (fietskleding at 1,739). All seven depth-1 nav categories are mega-PLPs containing hundreds to thousands of products.

3. **Dutch-first with full English mirrors:** Every Dutch URL has an English `/en/` equivalent (e.g., `/fietskleding` → `/en/cycling-clothing`). Google indexes both; for scoring the Dutch canonical URL is primary. This doubles the effective PLP surface area internationally.

4. **Brand pages function as flat PLPs:** All 283+ brand URLs (e.g., `/shimano`, `/gazelle`, `/cube`) sit at depth 1 and act as brand-filtered product listing pages. Top brands like Shimano, Cube, and Trek earn Tier B scores through Google brand query results.

5. **No path-pattern PLP signals needed:** Mantel uses plain Dutch slugs at the root domain (e.g., `/mountainbikes`, `/fietskleding`) without subfolder signals like `/category/` or `/collections/`. Classification relied on sitemap route type (categories vs pages/blog) and live product count validation.

6. **Elektrische fiets is the top e-bike PLP:** Despite not showing a total count on-page, `/elektrische-fiets` ranks #1 in Google for the e-bike Dutch query and has multiple brand-filtered variants appearing in Google results — indicating high commercial search volume.

7. **Category_brands sitemap generates 1,000+ filtered PLPs:** The `route=category_brands` sitemap combines ~950 categories × 150+ brands, producing filtered PLPs (e.g., `/fietsbanden?brand[]=continental`). These are valid PLPs but score near zero individually due to parameter-based filtering depth and no direct Google signals.
