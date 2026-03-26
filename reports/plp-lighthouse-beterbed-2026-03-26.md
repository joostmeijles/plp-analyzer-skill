# PLP Lighthouse Performancerapport — beterbed

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van Beter Bed scoort momenteel een 76 op performance. Drie pagina's presteren goed; twee categoriepagina's (/beddengoed en /bijmeubelen) laden merkbaar traag (LCP >5,9 sec) en vertonen storende lay-outverschuivingen na het laden. Dit schaadt de eerste indruk bij bezoekers die via Google op deze populaire categorieën binnenkomen. Als je één ding moet weten: de TBT is uitstekend op alle pagina's — de server reageert snel — maar de afbeeldingslading op de zwaarste pagina's verstoort de gebruikerservaring en kost conversie.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Verhelp de lay-outverschuiving (CLS 0,154–0,205) op /beddengoed en /bijmeubelen

Op twee pagina's verschuiven elementen na het laden zichtbaar — producten en tekst springen omhoog of opzij terwijl bezoekers al naar een product kijken. Dit kost vertrouwen en verhoogt de kans op verkeerde klikken. De oorzaak is waarschijnlijk afbeeldingen zonder vaste hoogte/breedte-attributen. Het team moet `width` en `height` toevoegen aan alle productafbeeldingen zodat de browser ruimte reserveert vóór het laden. Verwachte verbetering: CLS daalt van >0,15 naar <0,05.

### Aanbeveling 2: Verlaag de LCP op /beddengoed en /bijmeubelen via betere afbeeldingsopbouw

/beddengoed laadt 105 afbeeldingen en /bijmeubelen zelfs 190 — waarbij de LCP-afbeelding (het grootste zichtbare element) pas laat verschijnt. Het team moet de LCP-kandidaat expliciet pre-loaden via `<link rel="preload" as="image">`, en lazy loading activeren voor producten buiten de eerste viewport. Verwachte verbetering: LCP daalt van ~6 sec naar ~2,5–3 sec op beide pagina's.

---

## Samenvatting

Beterbed.nl scoort gemiddeld 76 op performance — in de categorie Verbetering nodig. Drie pagina's (/kinderbedden 82, /bedden 84, /matrassen 85) presteren goed en benaderen de Goed-grens van 90. De TBT is uitstekend op alle pagina's (gemiddeld 136 ms, Goed). De TTFB is eveneens snel (gemiddeld 54 ms). Het knelpunt ligt bij twee categorieën: /beddengoed (LCP 6,4 sec, CLS 0,154) en /bijmeubelen (LCP 5,9 sec, CLS 0,205), beide gedomineerd door een grote hoeveelheid productafbeeldingen zonder vaste afmetingen.

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 76/100 | 🟠 Verbetering nodig |
| Vindbaarheidscore (SEO) | 92/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 1,4 MB | |
| Geanalyseerde pagina's | 5 | |

> Scores zijn het **gemiddelde** over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte zoals gerapporteerd door Lighthouse.
> Status: 🟢 Goed ≥ 90 · 🟠 Verbetering nodig 50–89 · 🔴 Slecht < 50

---

## Technische stack

| | Waarde |
|--|--|
| CDN / Hosting | Cloudflare |
| Frontend framework | Onbekend |

> CDN wordt bepaald op basis van HTTP-antwoordheaders (`cf-ray`). Framework: geen herkend framework-marker. GTM is proxied via het eigen domein `gtm.beterbed.nl` (server-side tagging) — een goede praktijk die externe domeinverzoeken voor tracking minimaliseert.

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 4.753 | 0% | 60% | 40% | ≤ 2.500 ms |
| CLS | 0,072 | 60% | 40% | 0% | ≤ 0,1 |
| TBT (ms) | 136 | 100% | 0% | 0% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /beddengoed | 65/100 | 6.408 ms | 0,154 | 152 ms | 1,2 MB | 🟠 Verbetering nodig |
| /bijmeubelen | 62/100 | 5.913 ms | 0,205 | 143 ms | 1,3 MB | 🟠 Verbetering nodig |
| /kinderbedden | 82/100 | 3.916 ms | 0,000 | 142 ms | 1,6 MB | 🟠 Verbetering nodig |
| /bedden | 84/100 | 3.763 ms | 0,000 | 131 ms | 1,6 MB | 🟠 Verbetering nodig |
| /matrassen | 85/100 | 3.764 ms | 0,000 | 112 ms | 1,2 MB | 🟠 Verbetering nodig |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /beddengoed | 70 ms | 2.760 ms | 2.760 ms | 152 ms |
| /bijmeubelen | 66 ms | 2.745 ms | 2.758 ms | 143 ms |
| /kinderbedden | 60 ms | 2.632 ms | 2.632 ms | 142 ms |
| /bedden | 30 ms | 2.583 ms | 2.583 ms | 131 ms |
| /matrassen | 43 ms | 2.424 ms | 2.424 ms | 112 ms |
| **Gemiddelde** | **54 ms** | **2.629 ms** | **2.631 ms** | **136 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 1,4 MB |
| Gemiddeld aantal verzoeken | 167 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /beddengoed | 1,2 MB (151 vz) | 529 KB (9) | 333 KB (105) | 117 KB (2) | 147 KB (6) | 73 KB (1) | 16 KB (28) |
| /bijmeubelen | 1,3 MB (235 vz) | 529 KB (8) | 436 KB (190) | 117 KB (2) | 148 KB (6) | 73 KB (1) | 17 KB (28) |
| /kinderbedden | 1,6 MB (179 vz) | 529 KB (8) | 712 KB (134) | 117 KB (2) | 148 KB (6) | 65 KB (1) | 20 KB (28) |
| /bedden | 1,6 MB (170 vz) | 529 KB (8) | 714 KB (125) | 117 KB (2) | 148 KB (6) | 48 KB (1) | 17 KB (28) |
| /matrassen | 1,2 MB (98 vz) | 528 KB (8) | 314 KB (53) | 118 KB (2) | 147 KB (6) | 39 KB (1) | 16 KB (28) |
| **Gemiddelde** | **1,4 MB** | **529 KB** | **502 KB** | **117 KB** | **148 KB** | **60 KB** | **17 KB** |

> Scripttelling is laag (8–9 per pagina) dankzij server-side tagging via `gtm.beterbed.nl`. Scripts van derden vertegenwoordigen slechts ~18% van het scriptgewicht (~98 KB per pagina).

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /beddengoed

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (via gtm.beterbed.nl) | 158 KB | 🏠* |
| ProductList.min.js | 141 KB | 🏠 |
| rbmv1.js GTM (via gtm.beterbed.nl) | 132 KB | 🏠* |
| 10041554-10041976.js (Convert.com) | 94 KB | 🌐 |
| Data.js | 4 KB | 🏠 |
| BrowserCompatibilityPopup.min.js | 1 KB | 🏠 |

_* GTM en GA4 worden geladen via het eigen domein `gtm.beterbed.nl` (server-side tagging)._

### /bijmeubelen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (via gtm.beterbed.nl) | 158 KB | 🏠* |
| ProductList.min.js | 141 KB | 🏠 |
| rbmv1.js GTM (via gtm.beterbed.nl) | 132 KB | 🏠* |
| 10041554-10041976.js (Convert.com) | 94 KB | 🌐 |
| Data.js | 4 KB | 🏠 |
| BrowserCompatibilityPopup.min.js | 1 KB | 🏠 |

### /kinderbedden

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (via gtm.beterbed.nl) | 158 KB | 🏠* |
| ProductList.min.js | 141 KB | 🏠 |
| rbmv1.js GTM (via gtm.beterbed.nl) | 132 KB | 🏠* |
| 10041554-10041976.js (Convert.com) | 94 KB | 🌐 |
| Data.js | 4 KB | 🏠 |
| BrowserCompatibilityPopup.min.js | 1 KB | 🏠 |

### /bedden

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (via gtm.beterbed.nl) | 158 KB | 🏠* |
| ProductList.min.js | 141 KB | 🏠 |
| rbmv1.js GTM (via gtm.beterbed.nl) | 132 KB | 🏠* |
| 10041554-10041976.js (Convert.com) | 94 KB | 🌐 |
| Data.js | 4 KB | 🏠 |
| BrowserCompatibilityPopup.min.js | 1 KB | 🏠 |

### /matrassen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (via gtm.beterbed.nl) | 158 KB | 🏠* |
| ProductList.min.js | 141 KB | 🏠 |
| rbmv1.js GTM (via gtm.beterbed.nl) | 132 KB | 🏠* |
| 10041554-10041976.js (Convert.com) | 94 KB | 🌐 |
| Data.js | 4 KB | 🏠 |
| BrowserCompatibilityPopup.min.js | 1 KB | 🏠 |

---

## Aanbevelingen

### Hoge prioriteit

- **[CLS — 0,154 en 0,205 op 2 pagina's]** Layout shifts op /beddengoed en /bijmeubelen betekenen dat bezoekers content zien verspringen tijdens het laden. Voeg `width` en `height`-attributen toe aan alle productafbeeldingen in de HTML zodat de browser direct ruimte reserveert. Controleer ook of lettertypen `font-display: swap` gebruiken.
  - Getroffen pagina's: /beddengoed (0,154), /bijmeubelen (0,205)
  - Verwachte impact: CLS daalt naar <0,05 op beide pagina's

- **[LCP — 6.408 ms en 5.913 ms op 2 pagina's]** /beddengoed (105 afbeeldingen) en /bijmeubelen (190 afbeeldingen) laden te veel afbeeldingen bij paginastart. Pre-load de LCP-kandidaat (`<link rel="preload" as="image">`), activeer lazy loading voor producten buiten de viewport en beperk het initieel geladen aantal producten.
  - Getroffen pagina's: /beddengoed, /bijmeubelen
  - Verwachte impact: LCP daalt van >5.900 ms naar <3.000 ms

### Gemiddelde prioriteit

- **[/bijmeubelen — 190 afbeeldingen en 235 verzoeken]** /bijmeubelen heeft het meeste verzoeken van alle pagina's. Naast lazy loading moet worden onderzocht of alle 190 productminiaturen nodig zijn bij initieel laden, of dat paginering of een "Toon meer"-knop het initieel geladen aantal kan beperken.
  - Getroffen pagina's: /bijmeubelen

- **[Convert.com A/B-test (94 KB) blokkeert render]** Het script van Convert.com (94 KB) wordt synchroon geladen op alle pagina's. A/B-testtools die synchroon laden verhinderen rendering totdat ze zijn gestart. Overweeg een asynchrone implementatie of migratie naar een tool die native async laadt.
  - Getroffen pagina's: alle 5

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-beterbed-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
