# PLP Lighthouse Performancerapport — welkoop

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van Welkoop scoort momenteel een 57 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (2,9 sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Aanbevelingssamenvatting

> De twee meest impactvolle verbeteringen, toegelicht voor management. Elke aanbeveling beschrijft wat het probleem is, waarom het er toe doet voor de business, en wat de aanbevolen actie is — zonder technisch jargon. Maximaal 550 tekens per aanbeveling.

### Aanbeveling 1: Verwijder de enorme GTM-tag (617 KB)

De website laadt één enkel tracking-script van 617 KB — bijna twee keer zo groot als de gehele winkelapp. Dit script blokkeert de pagina gemiddeld 5,4 seconden, waardoor bezoekers op mobiel een bevroren scherm zien. Elke seconde blokkering kost aantoonbaar conversie. Het ontwikkelteam moet het `woifjs.js`-script in Google Tag Manager auditen, overbodige tags verwijderen en het script asynchroniseren. Verwachte verbetering: TBT daalt van 5.400 ms naar onder 600 ms.

### Aanbeveling 2: Optimaliseer productafbeeldingen (tot 3,3 MB per pagina)

Op de pagina /dier/hond wordt 3,3 MB aan afbeeldingen geladen — meer dan op alle andere pagina's. Dit vertraagt het zichtbaar worden van producten op trage mobiele verbindingen en vergroot het risico dat bezoekers afhaken vóór ze een product zien. Het ontwikkelteam moet afbeeldingen converteren naar WebP-formaat, lazy loading inschakelen en afbeeldingen verkleinen tot de weergaveresolutie. Verwachte besparing: 60–80% minder afbeeldingsgewicht.

---

## Samenvatting

Welkoop.nl scoort gemiddeld 57 op performance — in de categorie "Verbetering nodig". Het gemiddelde LCP van 2.860 ms valt net in de categorie Verbetering nodig (grens: 2.500 ms), maar het gemiddelde TBT van 5.351 ms is extreem hoog en wordt als Slecht beoordeeld — dit is het dominante knelpunt op alle vijf pagina's. De gemiddelde CLS van 0,036 is goed, op één uitzondering na (/dier/kip-en-pluimvee/snacks-pluimvee: 0,119). Het gemiddeld paginagewicht van 4,1 MB wordt sterk beïnvloed door de pagina /dier/hond met 6,2 MB aan afbeeldingen; de overige pagina's liggen rond de 3,6 MB.

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 57/100 | 🟠 Verbetering nodig |
| Vindbaarheidscore (SEO) | 92/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 4,1 MB | |
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

> CDN wordt bepaald op basis van HTTP-antwoordheaders. Framework wordt bepaald op basis van JavaScript-globals en DOM-markers. De site gebruikt Salesforce Commerce Cloud (SFCC) met Mobify PWA Kit op basis van de bundelpadstructuur (`/mobify/bundle/`).

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 2.860 | 20% | 80% | 0% | ≤ 2.500 ms |
| CLS | 0,036 | 80% | 20% | 0% | ≤ 0,1 |
| TBT (ms) | 5.351 | 0% | 0% | 100% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /dier | 54/100 | 3.061 ms | 0,013 | 4.735 ms | 3,5 MB | 🟠 Verbetering nodig |
| /tuin | 56/100 | 2.830 ms | 0,025 | 5.528 ms | 3,5 MB | 🟠 Verbetering nodig |
| /dier/voertonnen | 60/100 | 2.450 ms | 0,023 | 5.753 ms | 3,5 MB | 🟠 Verbetering nodig |
| /dier/kip-en-pluimvee/snacks-pluimvee | 59/100 | 2.830 ms | 0,119 | 5.490 ms | 4,1 MB | 🟠 Verbetering nodig |
| /dier/hond | 55/100 | 3.127 ms | 0,001 | 5.250 ms | 6,2 MB | 🟠 Verbetering nodig |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /dier | 49 ms | 2.611 ms | 6.833 ms | 4.735 ms |
| /tuin | 41 ms | 2.153 ms | 7.656 ms | 5.528 ms |
| /dier/voertonnen | 57 ms | 2.000 ms | 6.592 ms | 5.753 ms |
| /dier/kip-en-pluimvee/snacks-pluimvee | 48 ms | 1.916 ms | 3.617 ms | 5.490 ms |
| /dier/hond | 43 ms | 2.066 ms | 6.728 ms | 5.250 ms |
| **Gemiddelde** | **48 ms** | **2.149 ms** | **6.285 ms** | **5.351 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 4,1 MB |
| Gemiddeld aantal verzoeken | 65 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /dier | 3,5 MB (65 vz) | 1,9 MB (22) | 459 KB (11) | 0 KB (0) | 201 KB (7) | 239 KB (3) | 779 KB (22) |
| /tuin | 3,5 MB (65 vz) | 1,8 MB (22) | 439 KB (11) | 0 KB (0) | 202 KB (7) | 247 KB (3) | 779 KB (22) |
| /dier/voertonnen | 3,5 MB (65 vz) | 1,9 MB (22) | 501 KB (11) | 0 KB (0) | 201 KB (7) | 202 KB (3) | 779 KB (22) |
| /dier/kip-en-pluimvee/snacks-pluimvee | 4,0 MB (64 vz) | 1,9 MB (22) | 1.065 KB (10) | 0 KB (0) | 201 KB (7) | 199 KB (3) | 778 KB (22) |
| /dier/hond | 6,2 MB (65 vz) | 1,9 MB (22) | 3.197 KB (11) | 0 KB (0) | 201 KB (7) | 245 KB (3) | 780 KB (22) |
| **Gemiddelde** | **4,1 MB** | **1,9 MB** | **1.132 KB** | **0 KB** | **201 KB** | **226 KB** | **779 KB** |

> Formaat: `{grootte} ({aantal} vz)`. Groottes zijn gecomprimeerd (overgedragen).
> Derdenverzoeken: 26 per pagina (gemiddeld 450 KB), afkomstig van GTM, Google Ads, Cookiebot en Trustpilot.

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /dier

| Bestand | Grootte | Partij |
|---------|---------|--------|
| woifjs.js (GTM custom) | 603 KB | 🌐 |
| vendor.js | 316 KB | 🏠 |
| main.js | 200 KB | 🏠 |
| gtag/js (GA4) | 160 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| cc.js (Cookiebot) | 105 KB | 🌐 |
| vendor_commerce.js | 80 KB | 🏠 |
| vendor_react.js | 48 KB | 🏠 |
| 643.js | 27 KB | 🏠 |

### /tuin

| Bestand | Grootte | Partij |
|---------|---------|--------|
| woifjs.js (GTM custom) | 603 KB | 🌐 |
| vendor.js | 316 KB | 🏠 |
| main.js | 200 KB | 🏠 |
| gtag/js (GA4) | 160 KB | 🌐 |
| gtag/destination (Google Ads) | 142 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| vendor_commerce.js | 80 KB | 🏠 |
| vendor_react.js | 48 KB | 🏠 |
| cc.js (Cookiebot) | 81 KB | 🌐 |
| 643.js | 27 KB | 🏠 |

### /dier/voertonnen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| woifjs.js (GTM custom) | 603 KB | 🌐 |
| vendor.js | 316 KB | 🏠 |
| main.js | 200 KB | 🏠 |
| gtag/js (GA4) | 160 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| cc.js (Cookiebot) | 105 KB | 🌐 |
| vendor_commerce.js | 80 KB | 🏠 |
| vendor_react.js | 48 KB | 🏠 |
| 643.js | 27 KB | 🏠 |

### /dier/kip-en-pluimvee/snacks-pluimvee

| Bestand | Grootte | Partij |
|---------|---------|--------|
| woifjs.js (GTM custom) | 603 KB | 🌐 |
| vendor.js | 316 KB | 🏠 |
| main.js | 200 KB | 🏠 |
| gtag/js (GA4) | 160 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| cc.js (Cookiebot) | 105 KB | 🌐 |
| vendor_commerce.js | 80 KB | 🏠 |
| vendor_react.js | 48 KB | 🏠 |
| 643.js | 27 KB | 🏠 |

### /dier/hond

| Bestand | Grootte | Partij |
|---------|---------|--------|
| woifjs.js (GTM custom) | 603 KB | 🌐 |
| vendor.js | 316 KB | 🏠 |
| main.js | 200 KB | 🏠 |
| gtag/js (GA4) | 160 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| cc.js (Cookiebot) | 105 KB | 🌐 |
| vendor_commerce.js | 80 KB | 🏠 |
| vendor_react.js | 48 KB | 🏠 |
| 643.js | 27 KB | 🏠 |

---

## Aanbevelingen

### Hoge prioriteit

- **[TBT — 5.351 ms gemiddeld]** Het aangepaste GTM-script `woifjs.js` (603 KB) blokkeert de hoofdthread extreem lang op alle pagina's. Audit de inhoud van dit script in Google Tag Manager, verwijder of vertraag overbodige tags, en laad het script asynchroon of uitgesteld.
  - Getroffen pagina's: alle 5
  - Verwachte impact: TBT kan dalen van >5.000 ms naar <600 ms bij volledige sanering

- **[Afbeeldingen — tot 3,2 MB]** De pagina /dier/hond laadt 3,2 MB aan afbeeldingen. Converteer naar WebP, pas dimensies aan op de weergaveresolutie en activeer lazy loading voor afbeeldingen buiten de viewport.
  - Getroffen pagina's: /dier/hond (zwaarst), /dier/kip-en-pluimvee/snacks-pluimvee (1,1 MB)
  - Verwachte impact: paginagewicht daalt van 6,2 MB naar ~2–3 MB; LCP verbetert

### Gemiddelde prioriteit

- **[Speed Index — 6.285 ms gemiddeld]** De visuele opbouw is traag op vier van de vijf pagina's (>6.000 ms Speed Index). Dit is een directe consequentie van de zware JS-lading. Na TBT-optimalisatie zal de Speed Index automatisch verbeteren.
  - Getroffen pagina's: /dier, /tuin, /dier/voertonnen, /dier/hond

- **[CLS — 0,119 op snacks-pluimvee]** De pagina /dier/kip-en-pluimvee/snacks-pluimvee heeft een CLS van 0,119 (Verbetering nodig). Elementen verschuiven na laden, waarschijnlijk door afbeeldingen zonder vaste afmetingen. Voeg `width` en `height`-attributen toe aan productafbeeldingen.
  - Getroffen pagina's: /dier/kip-en-pluimvee/snacks-pluimvee

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-welkoop-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
