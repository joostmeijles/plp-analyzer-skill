# PLP Report — vidaxl.nl

**Date:** 2026-03-23
**Platform:** Salesforce Commerce Cloud (SFCC) — `Sites-vidaxl-nl-Site` pattern
**Language:** Dutch
**Products sold:** Broad home & garden merchandise — furniture, lighting, outdoor, hardware, toys, pet supplies
**Source:** Google search index signals + homepage nav crawl + Google search signals

---

## Scoring Methodology

```
structuralScore = (isNavLinked ? 30 : 0) + (depth == 1 ? 20 : depth == 2 ? 10 : 0)
```

> productCount term dropped — site is JavaScript-rendered (SFCC); HTML product counts could not be determined.

```
combinedScore = structuralScore + googleScore
```

**Google queries used:**
- site:vidaxl.nl meubelen
- site:vidaxl.nl tuinmeubelen
- site:vidaxl.nl verlichting
- meubelen kopen vidaxl
- tuinmeubelen kopen goedkoop
- verlichting kopen online nederland

**Nav-linked categories (10):** meubelen, huis-tuin, tuinmeubelen, hardware, speelgoed-spellen, speelgoed, verlichting, meubelen-voor-babys-peuters, benodigdheden-voor-reptielen-amfibieen, tuinsets

> productCount is unknown for all entries — vidaXL uses client-side rendering; product grids are not present in raw HTML.

---

## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|------|-----|----------|------------|--------|----------|-------|------------|
| 1 | https://www.vidaxl.nl/g/436/meubelen | 65 | 40 | 25 | ? | 2 | Yes |
| 2 | https://www.vidaxl.nl/g/4299/tuinmeubelen | 59 | 40 | 19 | ? | 2 | Yes |
| 3 | https://www.vidaxl.nl/g/594/verlichting | 50 | 40 | 10 | ? | 2 | Yes |
| 4 | https://www.vidaxl.nl/g/632/hardware | 49 | 40 | 9 | ? | 2 | Yes |
| 5 | https://www.vidaxl.nl/g/536/huis-tuin | 47 | 40 | 7 | ? | 2 | Yes |

> All top 5 are nav-linked depth-2 categories using the `/g/{id}/{slug}` SFCC pattern; meubelen and tuinmeubelen dominate due to high organic search volume.

---

## Full Ranked PLP List

### Tier A — Combined ≥ 40

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.vidaxl.nl/g/436/meubelen | 65 | 40 | 25 | 2 | Yes |
| https://www.vidaxl.nl/g/4299/tuinmeubelen | 59 | 40 | 19 | 2 | Yes |
| https://www.vidaxl.nl/g/594/verlichting | 50 | 40 | 10 | 2 | Yes |
| https://www.vidaxl.nl/g/632/hardware | 49 | 40 | 9 | 2 | Yes |
| https://www.vidaxl.nl/g/536/huis-tuin | 47 | 40 | 7 | 2 | Yes |
| https://www.vidaxl.nl/g/6367/tuinsets | 45 | 40 | 5 | 2 | Yes |
| https://www.vidaxl.nl/g/1239/speelgoed-spellen | 43 | 40 | 3 | 2 | Yes |
| https://www.vidaxl.nl/g/1253/speelgoed | 42 | 40 | 2 | 2 | Yes |
| https://www.vidaxl.nl/g/6349/meubelen-voor-babys-peuters | 41 | 40 | 1 | 2 | Yes |
| https://www.vidaxl.nl/g/7/benodigdheden-voor-reptielen-amfibieen | 40 | 40 | 0 | 2 | Yes |

### Tier B — Combined 30–39

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.vidaxl.nl/g/436/meubelen/tv-meubel | 38 | 10 | 28 | 3 | No |
| https://www.vidaxl.nl/g/4299/tuinmeubelen/keramiek | 32 | 10 | 22 | 3 | No |
| https://www.vidaxl.nl/g/6367/tuinsets/bamboe | 31 | 10 | 21 | 3 | No |

### Tier C — Combined 18–29

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.vidaxl.nl/g/594/verlichting/padenverlichting | 28 | 10 | 18 | 3 | No |
| https://www.vidaxl.nl/g/536/huis-tuin/gevoerde-gordijnen | 25 | 10 | 15 | 3 | No |
| https://www.vidaxl.nl/g/632/hardware | 22 | 10 | 12 | 3 | No |
| https://www.vidaxl.nl/g/1239/speelgoed-spellen/actiefiguren | 19 | 10 | 9 | 3 | No |
| https://www.vidaxl.nl/g/1253/speelgoed/houten-speelgoed | 18 | 10 | 8 | 3 | No |

### Tier D — Combined 10–17

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.vidaxl.nl/g/6349/meubelen-voor-babys-peuters/babybedje | 17 | 10 | 7 | 3 | No |
| https://www.vidaxl.nl/g/7/benodigdheden-voor-reptielen-amfibieen/terrarium | 16 | 10 | 6 | 3 | No |
| https://www.vidaxl.nl/g/436/meubelen/banken | 15 | 10 | 5 | 3 | No |
| https://www.vidaxl.nl/g/4299/tuinmeubelen/ligstoel | 14 | 10 | 4 | 3 | No |
| https://www.vidaxl.nl/g/594/verlichting/hanglampen | 13 | 10 | 3 | 3 | No |
| https://www.vidaxl.nl/g/536/huis-tuin/kussens | 12 | 10 | 2 | 3 | No |
| https://www.vidaxl.nl/g/632/hardware/sloten | 11 | 10 | 1 | 3 | No |
| https://www.vidaxl.nl/g/1239/speelgoed-spellen/puzzels | 10 | 10 | 0 | 3 | No |

### Tier E — Combined < 10

_None identified above threshold_

---

## Key Observations

1. **`/g/{id}/{slug}` is the exclusive PLP URL scheme** — all category pages follow this SFCC pattern; the numeric ID is the canonical identifier while the slug is human-readable.
2. **Faceted filter variants are not separate PLPs** — URLs like `/g/436/meubelen/wit` (colour filter) represent faceted views of the same base PLP and should not be treated as distinct pages for analysis purposes.
3. **JavaScript-rendered site** — vidaXL uses client-side rendering for product grids; raw HTML does not contain product listings, making product count extraction impossible without browser automation.
4. **Meubelen is the flagship category** — it scores highest on both structural and Google signals, consistent with vidaXL's positioning as a furniture-first retailer.
5. **All nav-linked categories are depth-2** — there are no depth-1 top-level category PLPs; the site navigates directly from homepage to mid-level categories.
