# PLP Lighthouse Report Format

## Bestandsnaamgeving

`plp-lighthouse-{sitename}-YYYY-MM-DD.md`

Opgeslagen in de map `reports/` (of de map die de gebruiker opgeeft).

`{sitename}` wordt afgeleid van de eerste URL: verwijder `www.`, neem het eerste label vóór de eerste punt (bijv. `www.welkoop.nl` → `welkoop`).

---

## Volledig rapportsjabloon

```markdown
# PLP Lighthouse Performancerapport — {sitename}

**Datum:** YYYY-MM-DD
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** N

---

## Managementsamenvatting

De website van {bedrijfsnaam} scoort momenteel een {gemiddelde score} op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden ({gemiddeld LCP in seconden, 1 decimaal} sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Samenvatting

{3–5 Nederlandstalige zinnen die de algehele websitegesteldheid beschrijven. Vermeld ten minste: de gemiddelde performancescore, het gemiddelde LCP (inclusief beoordeling Goed/Verbetering nodig/Slecht), het gemiddelde TBT (inclusief beoordeling), het gemiddelde CLS, het paginagewicht, en het belangrijkste knelpunt dat als eerste aangepakt moet worden. Schrijf zakelijk en bondig.}

---

## Algemene gezondheid

| | Waarde |
|--|--|
| Performancescore | XX/100 |
| Vindbaarheidscore (SEO) | XX/100 |
| Gemiddeld paginagewicht | X,X MB |
| Geanalyseerde pagina's | N |

> Scores zijn het **gemiddelde** over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte zoals gerapporteerd door Lighthouse.

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 0000 | X% | X% | X% | ≤ 2500 ms |
| CLS | 0,00 | X% | X% | X% | ≤ 0,1 |
| TBT (ms) | 000 | X% | X% | X% | ≤ 200 ms |

---

## Core Web Vitals per pagina

| Pagina | Score | LCP | CLS | TBT | Status |
|--------|-------|-----|-----|-----|--------|
| /pad/naar/pagina | XX/100 | XXXX ms | 0,00 | XXX ms | Goed / Verbetering nodig / Slecht |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /pad/naar/pagina | XXX ms | XXXX ms | XXXX ms | XXX ms |
| **Gemiddelde** | **XXX ms** | **XXXX ms** | **XXXX ms** | **XXX ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | X,X MB |
| Gemiddeld aantal verzoeken | XXX |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /pad | X,X MB (XXX vz) | X,X MB (XX) | XXX KB (XX) | XXX KB (X) | XXX KB (X) | XX KB (X) | XX KB (XX) |
| **Gemiddelde** | **X,X MB** | **X,X MB** | **XXX KB** | **XXX KB** | **XXX KB** | **XX KB** | **XX KB** |

> Formaat: `{grootte} ({aantal} vz)`. Groottes zijn gecomprimeerd (overgedragen).
> Verzoeken van derden worden meegeteld binnen hun resourcetype en apart bijgehouden
> in de ruwe data.

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /pad/naar/pagina

| Bestand | Grootte | Partij |
|---------|---------|--------|
| vendor.js | XXX KB | 🏠 |
| app.js | XXX KB | 🏠 |
| analytics.js | XXX KB | 🌐 |

_(herhaal per pagina)_

---

## Aanbevelingen

### Hoge prioriteit

- **[Metriekgestuurd]** Beschrijving van het probleem en de specifieke oplossing.
  - Getroffen pagina's: lijst
  - Verwachte impact: kwantificeer indien mogelijk

### Gemiddelde prioriteit

- **[Metriekgestuurd]** Beschrijving van het probleem en de specifieke oplossing.
  - Getroffen pagina's: lijst

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-{sitename}-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
```

---

## Score- en drempelwaardenreferentie

### Performancescore (samengesteld, 0–100)
| Goed | Verbetering nodig | Slecht |
|------|-------------------|--------|
| ≥ 90 | 50–89 | < 50 |

### Core Web Vitals
| Metriek | Goed | Verbetering nodig | Slecht |
|---------|------|-------------------|--------|
| LCP | ≤ 2500 ms | 2500–4000 ms | > 4000 ms |
| CLS | ≤ 0,1 | 0,1–0,25 | > 0,25 |
| TBT | ≤ 200 ms | 200–600 ms | > 600 ms |

### Laadtijden
| Metriek | Goed | Verbetering nodig | Slecht |
|---------|------|-------------------|--------|
| FCP | ≤ 1800 ms | 1800–3000 ms | > 3000 ms |
| Speed Index | ≤ 3400 ms | 3400–5800 ms | > 5800 ms |
| TBT | ≤ 200 ms | 200–600 ms | > 600 ms |
| TTFB | ≤ 800 ms | 800–1800 ms | > 1800 ms |

## Aggregatieregels

- **Gemiddelde**: som / aantal
- **Goed%**: (aantal in Goed-bereik / totaal pagina's met data) × 100, afgerond op geheel getal
- Sluit `status: error` of null-metrieken uit van alle aggregaties
- Weergavegrootten: bytes → KB (÷ 1024, 0 decimalen) of MB (÷ 1048576, 1 decimaal) afhankelijk van omvang
