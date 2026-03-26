# PLP Lighthouse Performancerapport — vidaxl

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van vidaXL scoort momenteel een 55 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (6,3 sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Verlaag het grote aantal productafbeeldingen (gemiddeld 139 afbeeldingen, ~1,1 MB)

Elke pagina laadt gemiddeld 139 afbeeldingen met een gezamenlijk gewicht van 1,1 MB — de grootste bijdrage aan het trage LCP (6,3 sec). Bezoekers op mobiel zien productminiaturen pas na een lange wachttijd. Het team moet lazy loading activeren voor afbeeldingen buiten de viewport, afbeeldingen converteren naar WebP-formaat, en de initieel zichtbare afbeeldingen beperken tot de first-fold. Verwachte besparing: 60–70% minder afbeeldingsgewicht bij initiële laad.

### Aanbeveling 2: Verminder en verschuif scripts van derden (1,8 MB aan scripts, 50% derdepartij)

Scripts van derden (GTM, GA4 dubbel, Google Ads, TikTok, Facebook, OneTrust, ADA-chatbot, Hotjar) vormen samen ruim 1,8 MB. Dit blokkeert de hoofdthread gemiddeld 783 ms en vertraagt de visuele opbouw. Het team moet alle niet-kritische scripts uitstellen via `defer`/`async`, GA4 consolideren naar één instantie, en de ADA Support-chatbot (62 KB) en Hotjar (58 KB) pas laden bij gebruikersinteractie.

---

## Samenvatting

vidaXL.nl scoort gemiddeld 55 op performance — in de categorie Verbetering nodig. Het gemiddelde LCP van 6.298 ms is Slecht op alle vijf pagina's; het primaire knelpunt is de combinatie van ~139 productafbeeldingen per pagina (totaal ~1,1 MB) en een zware scriptlading van derden. Het gemiddelde TBT van 783 ms is Slecht op vier van vijf pagina's. De gemiddelde CLS van 0,040 is goed op alle pagina's. Het paginagewicht van gemiddeld 3,0 MB bestaat grotendeels uit afbeeldingen (1,1 MB) en scripts (1,7 MB).

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 55/100 | 🟠 Verbetering nodig |
| Vindbaarheidscore (SEO) | 100/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 3,0 MB | |
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

> CDN wordt bepaald op basis van HTTP-antwoordheaders (`cf-ray`). Framework: geen herkend framework-marker. Het platform is Salesforce Commerce Cloud (SFCC) op basis van de URL-structuur (`/on/demandware.static/Sites-vidaxl-nl-Site/`).

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 6.298 | 0% | 0% | 100% | ≤ 2.500 ms |
| CLS | 0,040 | 100% | 0% | 0% | ≤ 0,1 |
| TBT (ms) | 783 | 0% | 20% | 80% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /g/436/meubelen | 51/100 | 8.188 ms | 0,000 | 721 ms | 3,3 MB | 🟠 Verbetering nodig |
| /g/4299/tuinmeubelen | 57/100 | 5.906 ms | 0,074 | 696 ms | 3,0 MB | 🟠 Verbetering nodig |
| /g/594/verlichting | 56/100 | 6.002 ms | 0,034 | 701 ms | 3,0 MB | 🟠 Verbetering nodig |
| /g/632/hardware | 60/100 | 5.336 ms | 0,091 | 600 ms | 3,0 MB | 🟠 Verbetering nodig |
| /g/536/huis-tuin | 50/100 | 6.058 ms | 0,000 | 1.199 ms | 3,0 MB | 🟠 Verbetering nodig |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /g/436/meubelen | 282 ms | 2.261 ms | 5.380 ms | 721 ms |
| /g/4299/tuinmeubelen | 285 ms | 1.900 ms | 3.755 ms | 696 ms |
| /g/594/verlichting | 261 ms | 1.943 ms | 5.156 ms | 701 ms |
| /g/632/hardware | 285 ms | 1.939 ms | 3.938 ms | 600 ms |
| /g/536/huis-tuin | 327 ms | 2.053 ms | 4.199 ms | 1.199 ms |
| **Gemiddelde** | **288 ms** | **2.019 ms** | **4.486 ms** | **783 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 3,0 MB |
| Gemiddeld aantal verzoeken | 250 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /g/436/meubelen | 3,3 MB (251 vz) | 1,8 MB (55) | 1.132 KB (139) | 115 KB (5) | 70 KB (1) | 94 KB (6) | 100 KB (45) |
| /g/4299/tuinmeubelen | 3,0 MB (250 vz) | 1,6 MB (56) | 1.119 KB (138) | 0 KB (5) | 70 KB (1) | 72 KB (6) | 100 KB (44) |
| /g/594/verlichting | 3,0 MB (252 vz) | 1,6 MB (55) | 1.164 KB (141) | 0 KB (5) | 70 KB (1) | 69 KB (6) | 101 KB (44) |
| /g/632/hardware | 3,0 MB (248 vz) | 1,6 MB (55) | 1.139 KB (137) | 1 KB (5) | 70 KB (1) | 70 KB (6) | 100 KB (44) |
| /g/536/huis-tuin | 3,0 MB (248 vz) | 1,6 MB (55) | 1.133 KB (139) | 0 KB (5) | 70 KB (1) | 100 KB (6) | 99 KB (42) |
| **Gemiddelde** | **3,0 MB** | **1,7 MB** | **1.137 KB** | **23 KB** | **70 KB** | **81 KB** | **100 KB** |

> Scripts van derden vormen ~53% van het totale scriptgewicht (gemiddeld ~1,8 MB van de scripts zijn derdepartij).

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /g/436/meubelen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtm.js (GTM-T53NPDD) | 206 KB | 🌐 |
| demandware.static bundle | 194 KB | 🏠 |
| gtag/destination (GA4) | 165 KB | 🌐 |
| gtag/js (GA4) | 165 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| TikTok pixel | 110 KB | 🌐 |
| otBannerSdk.js (OneTrust) | 105 KB | 🌐 |
| Facebook signals config | 99 KB | 🌐 |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| embed2.js (ADA Support chatbot) | 60 KB | 🌐 |

### /g/4299/tuinmeubelen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtm.js (GTM-T53NPDD) | 206 KB | 🌐 |
| gtag/js (GA4) | 165 KB | 🌐 |
| gtag/destination (GA4) | 165 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| TikTok pixel | 110 KB | 🌐 |
| otBannerSdk.js (OneTrust) | 105 KB | 🌐 |
| Facebook signals config | 99 KB | 🌐 |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| embed2.js (ADA Support chatbot) | 60 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |

### /g/594/verlichting

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtm.js (GTM-T53NPDD) | 206 KB | 🌐 |
| gtag/destination (GA4) | 165 KB | 🌐 |
| gtag/js (GA4) | 165 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| TikTok pixel | 110 KB | 🌐 |
| otBannerSdk.js (OneTrust) | 105 KB | 🌐 |
| Facebook signals config | 99 KB | 🌐 |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| embed2.js (ADA Support chatbot) | 60 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |

### /g/632/hardware

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtm.js (GTM-T53NPDD) | 206 KB | 🌐 |
| gtag/destination (GA4) | 166 KB | 🌐 |
| gtag/js (GA4) | 165 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| TikTok pixel | 110 KB | 🌐 |
| otBannerSdk.js (OneTrust) | 105 KB | 🌐 |
| Facebook signals config | 99 KB | 🌐 |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| embed2.js (ADA Support chatbot) | 60 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |

### /g/536/huis-tuin

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtm.js (GTM-T53NPDD) | 206 KB | 🌐 |
| gtag/destination (GA4) | 165 KB | 🌐 |
| gtag/js (GA4) | 165 KB | 🌐 |
| gtag/destination (Google Ads) | 141 KB | 🌐 |
| TikTok pixel | 110 KB | 🌐 |
| otBannerSdk.js (OneTrust) | 105 KB | 🌐 |
| Facebook signals config | 99 KB | 🌐 |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| embed2.js (ADA Support chatbot) | 60 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |

---

## Aanbevelingen

### Hoge prioriteit

- **[LCP — 6.298 ms gemiddeld, alle pagina's Slecht]** Het primaire knelpunt is de combinatie van ~139 productafbeeldingen per pagina (totaal ~1,1 MB) die voor een groot deel boven de vouw worden geladen, gecombineerd met een zware scriptlading. Activeer lazy loading voor afbeeldingen buiten de viewport, pas WebP-compressie toe, en beperk de initieel geladen producten. Op /meubelen is het LCP het hoogst (8,2 sec) — vermoedelijk doordat de categorie meer producten toont.
  - Getroffen pagina's: alle 5
  - Verwachte impact: LCP daalt van ~6.300 ms naar ~3.000 ms

- **[TBT — 783 ms gemiddeld]** De hoge TBT wordt veroorzaakt door 10 derdepartijscripts die voor de render worden uitgevoerd. Verschuif GTM, TikTok, Facebook en Hotjar naar uitgesteld laden via `defer`. Consolideer de dubbele GA4-tags tot één instantie.
  - Getroffen pagina's: alle 5 (sterkst op /huis-tuin met 1.199 ms)

### Gemiddelde prioriteit

- **[Afbeeldingen — 1.137 KB gemiddeld bij 139 verzoeken]** Naast lazy loading moet het maximale aantal initieel geladen productminiaturen worden begrensd (bijv. 24 per pagina) en moeten afbeeldingen worden geconverteerd naar WebP of AVIF. Dit vermindert zowel de paginagrootte als het aantal verzoeken aanzienlijk.
  - Getroffen pagina's: alle 5

- **[Geen CSS of minimale CSS op 4 van 5 pagina's]** Op /tuinmeubelen, /verlichting, /hardware en /huis-tuin is de CSS-lading vrijwel nul. Dit wijst op inline styling of CSS gebundeld in JavaScript — een patroon dat render-blocking gedrag kan veroorzaken bij grote bundles.
  - Getroffen pagina's: /tuinmeubelen, /verlichting, /hardware, /huis-tuin

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-vidaxl-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
