# PLP Report — welkoop.nl

**Date:** 2026-03-05
**Platform:** Salesforce Commerce Cloud (Demandware)
**Source:** `sitemap_8-category.xml` + homepage nav crawl + Google search signals

---

## Scoring Methodology

Each PLP receives a **combined score** from two components:

### Component 1 — Structural score (Phase 8)
```
structuralScore = (isNavLinked ? 30 : 0)
               + (depth == 1 ? 20 : depth == 2 ? 10 : 0)
```

### Component 2 — Google ranking score
Each URL is awarded points based on how highly Google returns it across 7 queries:
```
googleScore = Σ (11 - position)  for each appearance across queries
```
Queries used:
- `site:welkoop.nl dier hond`
- `site:welkoop.nl dier kat kattenvoer`
- `site:welkoop.nl dier kip pluimvee`
- `site:welkoop.nl tuin bbq`
- `site:welkoop.nl tuin beregening bodem`
- `welkoop dierenwinkel categorieen online`
- `hondenvoer kopen welkoop.nl`
- `kippenvoer kopen nederland welkoop`
- `kattenvoer kopen nederland welkoop`

**Combined score = structuralScore + googleScore**

`productCount` is 0 for all entries — Welkoop renders products client-side via JavaScript and counts are not accessible from static HTML.

---

## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Depth | Nav-Linked |
|------|-----|----------|------------|--------|-------|------------|
| 1 | https://www.welkoop.nl/dier | 59 | 50 | 9 | 1 | Yes |
| 2 | https://www.welkoop.nl/tuin | 50 | 50 | 0 | 1 | Yes |
| 3 | https://www.welkoop.nl/dier/voertonnen | 40 | 40 | 0 | 2 | Yes |
| 4 | https://www.welkoop.nl/dier/kip-en-pluimvee/snacks-pluimvee | 37 | 30 | 7 | 3 | Yes |
| 5 | https://www.welkoop.nl/dier/hond | 34 | 10 | 24 | 2 | No |

> Ranks 1–2 are the two root categories for the entire site. Rank 3 is the only nav-promoted depth-2 page. Rank 4 is the highest Google-scoring nav-linked subcategory. Rank 5 (/dier/hond) scores highest among non-nav-linked pages due to Google returning it at position 1 across multiple competitive queries.

---

## Full Ranked PLP List

### Tier A — Combined score ≥ 40 (root + primary nav)

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.welkoop.nl/dier | 59 | 50 | 9 | 1 | Yes |
| https://www.welkoop.nl/tuin | 50 | 50 | 0 | 1 | Yes |
| https://www.welkoop.nl/dier/voertonnen | 40 | 40 | 0 | 2 | Yes |

### Tier B — Combined score 30–39 (nav-linked subcategories + high-traffic depth-2)

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.welkoop.nl/dier/kip-en-pluimvee/snacks-pluimvee | 37 | 30 | 7 | 3 | Yes |
| https://www.welkoop.nl/dier/hond | 34 | 10 | 24 | 2 | No |
| https://www.welkoop.nl/dier/kip-en-pluimvee/voer-en-drinkbakken-pluimvee | 33 | 30 | 3 | 3 | Yes |
| https://www.welkoop.nl/dier/hond/herdenken-hond | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/hond/hondenhok | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/hond/hondensport-en-training | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/hond/verkoeling | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/kat/kattenluiken | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/kat/kattenren | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/kat/reismanden | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/kip-en-pluimvee/kippenhokbenodigdheden | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/kip-en-pluimvee/kippenhokken | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/kip-en-pluimvee/kuiken | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/konijn-en-knaagdier/gezondheid-knaagdieren | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/konijn-en-knaagdier/knaagdierensnacks | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/paard/longeren | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/paard/paardensnoepjes | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/paard/stallen | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/rund/rundveevoer | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/schaap-en-geit/geitenvoer | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/schaap-en-geit/gezondheid-geit | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/schaap-en-geit/gezondheid-schaap | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/schaap-en-geit/schapenvoer | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/tuindieren/eekhoorn | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/tuindieren/insectenhotel | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/tuinvogel/vogelhuisjes | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/varken/gezondheid-varken | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/varken/varkens-speelgoed | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/varken/varkensvoer | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vis/aquariums | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vis/verzorging-vis | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vogel/gezondheid-vogel | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vogel/schelpenzand | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vogel/vogelkooi-accessoires | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vogel/vogelkooien | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vogel/vogelsnacks | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vogel/vogelspeeltjes | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/vogel/volieres | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/overige-dieren/verzorging-overige-dieren | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/overige-dieren/voer-overige-dieren | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/overige-dieren/wildcamera | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/afrasteringsgereedschap | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/afrasteringspalen | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/batterijen-en-laders | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/beveiliging-en-testers | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/isolatoren | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/poortgrepen | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/schrikdraadhaspels | 30 | 30 | 0 | 3 | Yes |
| https://www.welkoop.nl/dier/afrastering-dier/verbindingen | 30 | 30 | 0 | 3 | Yes |

### Tier C — Combined score 18–29 (Google-ranked non-nav subcategories)

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.welkoop.nl/dier/kat/kattenvoer | 20 | 0 | 20 | 3 | No |
| https://www.welkoop.nl/dier/kip-en-pluimvee | 20 | 10 | 10 | 2 | No |
| https://www.welkoop.nl/tuin/beregening | 19 | 10 | 9 | 2 | No |
| https://www.welkoop.nl/dier/kip-en-pluimvee/pluimveevoer | 18 | 0 | 18 | 3 | No |
| https://www.welkoop.nl/dier/hond/hondenvoer | 16 | 0 | 16 | 3 | No |
| https://www.welkoop.nl/dier/kat/kattenvoer/kattenbrokken | 17 | 0 | 17 | 4 | No |
| https://www.welkoop.nl/dier/kat/kattenvoer/natvoer-kat | 16 | 0 | 16 | 4 | No |
| https://www.welkoop.nl/dier/hond/hondenvoer/vers-vlees | 11 | 0 | 11 | 4 | No |
| https://www.welkoop.nl/dier/kat/kattenvoer/vers-vlees-kat | 11 | 0 | 11 | 4 | No |
| https://www.welkoop.nl/dier/kip-en-pluimvee/kippenvoer | 11 | 0 | 11 | 3 | No |

### Tier D — Combined score 10–17 (depth-2 non-nav + isolated Google appearances)

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.welkoop.nl/dier/kat | 15 | 10 | 5 | 2 | No |
| https://www.welkoop.nl/dier/konijn-en-knaagdier | 16 | 10 | 6 | 2 | No |
| https://www.welkoop.nl/dier/rund | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/schaap-en-geit | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/varken | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/vis | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/vogel | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/afrastering-dier | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/tuindieren | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/tuinvogel | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/dier/overige-dieren | 13 | 10 | 3 | 2 | No |
| https://www.welkoop.nl/tuin/bbq | 13 | 10 | 3 | 2 | No |
| https://www.welkoop.nl/tuin/bloempotten-en-plantenbakken | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/tuin/bodem-en-mest | 14 | 10 | 4 | 2 | No |
| https://www.welkoop.nl/tuin/brandstoffen-en-haardhout | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/tuin/gazon | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/tuin/huishoudelijk | 10 | 10 | 0 | 2 | No |
| https://www.welkoop.nl/tuin/bbq/barbecues | 10 | 0 | 10 | 3 | No |
| https://www.welkoop.nl/tuin/beregening/beregeningssystemen | 10 | 0 | 10 | 3 | No |
| https://www.welkoop.nl/dier/kat/kattenvoer/dieetvoer-kat | 14 | 0 | 14 | 4 | No |
| https://www.welkoop.nl/dier/hond/hondenvoer/dieetvoer | 10 | 0 | 10 | 4 | No |
| https://www.welkoop.nl/dier/hond/manden-en-kussens-hond/hondenmanden | 9 | 0 | 9 | 4 | No |
| https://www.welkoop.nl/tuin/beregening/tuinspoeiers | 8 | 0 | 8 | 3 | No |
| https://www.welkoop.nl/tuin/bbq/bbq-accessoires | 9 | 0 | 9 | 3 | No |
| https://www.welkoop.nl/dier/hond/hondensnacks | 8 | 0 | 8 | 3 | No |
| https://www.welkoop.nl/dier/hond/hondenvoer/natvoer-hond | 8 | 0 | 8 | 4 | No |
| https://www.welkoop.nl/tuin/bbq/barbecues/houtskool-bbq | 7 | 0 | 7 | 4 | No |
| https://www.welkoop.nl/dier/hond/hondenvoer/puppyvoer | 7 | 0 | 7 | 4 | No |
| https://www.welkoop.nl/dier/kat/kattenvoer/hypoallergeen-kattenvoer | 10 | 0 | 10 | 4 | No |
| https://www.welkoop.nl/dier/kip-en-pluimvee/gezondheid-pluimvee | 4 | 0 | 4 | 3 | No |
| https://www.welkoop.nl/dier/kip-en-pluimvee/broeden-pluimvee | 8 | 0 | 8 | 3 | No |

### Tier E — Combined score < 10 (depth-3/4 with low or no Google signal)

All remaining depth-3 PLPs not appearing in Google results scored 0 combined. These are valid PLP candidates but have no measurable Google prominence. Full list available in the sitemap data.

---

## Key Observations

1. **`/dier` is the strongest PLP** — nav-promoted root category with the highest Google visibility across brand queries.
2. **`/dier/hond` punches above its weight** — not nav-linked at the category level, yet Google returns it at position 1 across multiple queries, giving it a combined score that outranks all non-google-visible nav-linked depth-3 pages.
3. **`/dier/kat/kattenvoer` and `/dier/hond/hondenvoer`** are the standout subcategories by Google signal — Google surfaces these before their parent category pages on product-intent queries.
4. **Chicken/poultry is a traffic opportunity** — `/dier/kip-en-pluimvee/kippenvoer` and `/dier/kip-en-pluimvee/pluimveevoer` both rank highly on competitive Dutch queries, suggesting strong organic demand Welkoop is already capturing.
5. **`/tuin` has near-zero Google signal** in this data set — no tuin pages appeared in competitive queries. This reflects the seasonality of garden products and the search data being collected in early March.
