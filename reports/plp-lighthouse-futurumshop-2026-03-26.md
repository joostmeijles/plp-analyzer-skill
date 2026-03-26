# PLP Lighthouse Performancerapport — futurumshop

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van futurumshop scoort momenteel een 46 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (6,4 sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Los de zware lay-outverschuiving op (CLS 0,568 gemiddeld — alle pagina's Slecht)

Op alle vijf pagina's verschuiven elementen extreem sterk na het laden: gemiddelde CLS van 0,568, waarbij /fietskleding-dames zelfs 0,748 scoort. Dit betekent dat bezoekers producten zien springen terwijl de pagina wordt opgebouwd — een directe oorzaak van verloren klikken en frustratie. De oorzaak zijn vrijwel zeker productafbeeldingen zonder vaste breedte/hoogte-attributen. Het team moet `width` en `height` toevoegen aan alle productafbeeldingen. Verwachte verbetering: CLS daalt van ~0,57 naar <0,1.

### Aanbeveling 2: Verlaag de LCP van 6,4 sec door afbeeldingen te pre-loaden en scripts te verminderen

De LCP-kandidaat (doorgaans de eerste productafbeelding of hero) verschijnt gemiddeld pas na 6,4 seconden. De scriptlading van ~1,3 MB (waaronder GTM van googletagmanager.com, twee Google Ads-tags en Facebook pixel) blokkeert de render. Het team moet de LCP-afbeelding pre-loaden via `<link rel="preload">`, en GTM uitstellen via `async`. De twee Google Ads-tags kunnen worden samengevoegd tot één. Verwachte verbetering: LCP daalt van ~6,4 sec naar ~3 sec.

---

## Samenvatting

futurumshop.nl scoort gemiddeld 46 op performance — in de categorie Slecht. De CLS is het zwaarste knelpunt: gemiddeld 0,568, Slecht op alle vijf pagina's — dit is extreem hoog en duidt op productafbeeldingen zonder vaste afmetingen. Het gemiddelde LCP van 6.361 ms is Slecht op alle pagina's. Het TBT van gemiddeld 259 ms is op alle pagina's Verbetering nodig, maar niet kritiek. GA4 en Google Ads worden proxied via het eigen domein (`futurumshop.nl/dimf/`) — een goede praktijk. GTM zelf laadt echter nog steeds van een extern domein.

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 46/100 | 🔴 Slecht |
| Vindbaarheidscore (SEO) | 92/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 1,8 MB | |
| Geanalyseerde pagina's | 5 | |

> Scores zijn het **gemiddelde** over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte zoals gerapporteerd door Lighthouse.
> Status: 🟢 Goed ≥ 90 · 🟠 Verbetering nodig 50–89 · 🔴 Slecht < 50

---

## Technische stack

| | Waarde |
|--|--|
| CDN / Hosting | Onbekend |
| Frontend framework | Onbekend |

> GA4 en Google Ads worden proxied via het eigen domein `futurumshop.nl/dimf/` (server-side tagging) — een goede praktijk die externe domeinverzoeken voor tracking minimaliseert. GTM laadt nog van `googletagmanager.com`.

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 6.361 | 0% | 0% | 100% | ≤ 2.500 ms |
| CLS | 0,568 | 0% | 0% | 100% | ≤ 0,1 |
| TBT (ms) | 259 | 0% | 100% | 0% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /outlet | 42/100 | 6.997 ms | 0,540 | 277 ms | 1,9 MB | 🔴 Slecht |
| /fietsonderdelen/fietsbanden | 55/100 | 4.171 ms | 0,493 | 213 ms | 1,5 MB | 🟠 Verbetering nodig |
| /fietskleding-heren/fietskleding | 48/100 | 5.440 ms | 0,524 | 303 ms | 1,8 MB | 🟠 Verbetering nodig |
| /fietskleding-heren/fietshelmen-heren | 43/100 | 8.198 ms | 0,534 | 235 ms | 2,1 MB | 🔴 Slecht |
| /fietskleding-dames/fietskleding | 43/100 | 6.997 ms | 0,748 | 268 ms | 1,8 MB | 🔴 Slecht |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /outlet | 19 ms | 3.488 ms | 3.488 ms | 277 ms |
| /fietsonderdelen/fietsbanden | 19 ms | 3.339 ms | 3.339 ms | 213 ms |
| /fietskleding-heren/fietskleding | 585 ms | 2.725 ms | 2.725 ms | 303 ms |
| /fietskleding-heren/fietshelmen-heren | 562 ms | 3.185 ms | 3.185 ms | 235 ms |
| /fietskleding-dames/fietskleding | 19 ms | 2.721 ms | 2.721 ms | 268 ms |
| **Gemiddelde** | **241 ms** | **3.092 ms** | **3.092 ms** | **259 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 1,8 MB |
| Gemiddeld aantal verzoeken | 90 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /outlet | 1,9 MB (93 vz) | 1.404 KB (27) | 181 KB (34) | 81 KB (2) | 126 KB (2) | 113 KB (4) | 15 KB (24) |
| /fietsonderdelen/fietsbanden | 1,5 MB (88 vz) | 1.108 KB (27) | 132 KB (33) | 81 KB (2) | 126 KB (2) | 105 KB (2) | 15 KB (22) |
| /fietskleding-heren/fietskleding | 1,8 MB (90 vz) | 1.404 KB (27) | 133 KB (35) | 81 KB (2) | 126 KB (2) | 105 KB (2) | 15 KB (22) |
| /fietskleding-heren/fietshelmen-heren | 2,1 MB (89 vz) | 1.404 KB (27) | 378 KB (34) | 81 KB (2) | 126 KB (2) | 102 KB (2) | 15 KB (22) |
| /fietskleding-dames/fietskleding | 1,8 MB (88 vz) | 1.370 KB (27) | 178 KB (33) | 81 KB (2) | 126 KB (2) | 108 KB (2) | 15 KB (22) |
| **Gemiddelde** | **1,8 MB** | **1.338 KB** | **200 KB** | **81 KB** | **126 KB** | **106 KB** | **15 KB** |

> GA4 en Google Ads worden proxied via `futurumshop.nl/dimf/` (eigen domein). GTM laadt van `googletagmanager.com` (163 KB extern). Lettertypen (126 KB per pagina) worden van eigen domein geserveerd.

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /outlet

| Bestand | Grootte | Partij |
|---------|---------|--------|
| common.js (assets.futurumshop.nl) | 207 KB | 🏠 |
| dimf GA4 (via futurumshop.nl/dimf) | 184 KB | 🏠* |
| dimf fps (via futurumshop.nl/dimf) | 164 KB | 🏠* |
| gtm.js (GTM-K3Q2HV) | 159 KB | 🌐 |
| dimf Google Ads 1 (via futurumshop.nl/dimf) | 148 KB | 🏠* |
| dimf Google Ads 2 (via futurumshop.nl/dimf) | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| signals/config (Facebook) | 36 KB | 🌐 |
| vendor.js (assets.futurumshop.nl) | 35 KB | 🏠 |
| 860.js (futurumshop.nl) | 33 KB | 🏠 |

_* GA4 en Google Ads worden geladen via het eigen domein `futurumshop.nl/dimf/` (server-side tagging)._

### /fietsonderdelen/fietsbanden

| Bestand | Grootte | Partij |
|---------|---------|--------|
| dimf GA4 (via futurumshop.nl/dimf) | 184 KB | 🏠* |
| dimf fps (via futurumshop.nl/dimf) | 164 KB | 🏠* |
| gtm.js (GTM-K3Q2HV) | 159 KB | 🌐 |
| dimf Google Ads 1 (via futurumshop.nl/dimf) | 148 KB | 🏠* |
| dimf Google Ads 2 (via futurumshop.nl/dimf) | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| signals/config (Facebook) | 36 KB | 🌐 |
| 860.js (futurumshop.nl) | 33 KB | 🏠 |
| nr-spa-1.310.1.min.js (New Relic) | 30 KB | 🌐 |
| ld.js (Criteo) | 25 KB | 🌐 |

### /fietskleding-heren/fietskleding

| Bestand | Grootte | Partij |
|---------|---------|--------|
| common.js (assets.futurumshop.nl) | 207 KB | 🏠 |
| dimf GA4 (via futurumshop.nl/dimf) | 184 KB | 🏠* |
| dimf fps (via futurumshop.nl/dimf) | 164 KB | 🏠* |
| gtm.js (GTM-K3Q2HV) | 159 KB | 🌐 |
| dimf Google Ads 1 (via futurumshop.nl/dimf) | 148 KB | 🏠* |
| dimf Google Ads 2 (via futurumshop.nl/dimf) | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| signals/config (Facebook) | 36 KB | 🌐 |
| vendor.js (assets.futurumshop.nl) | 35 KB | 🏠 |
| 860.js (futurumshop.nl) | 33 KB | 🏠 |

### /fietskleding-heren/fietshelmen-heren

| Bestand | Grootte | Partij |
|---------|---------|--------|
| common.js (assets.futurumshop.nl) | 207 KB | 🏠 |
| dimf GA4 (via futurumshop.nl/dimf) | 184 KB | 🏠* |
| dimf fps (via futurumshop.nl/dimf) | 164 KB | 🏠* |
| gtm.js (GTM-K3Q2HV) | 159 KB | 🌐 |
| dimf Google Ads 1 (via futurumshop.nl/dimf) | 148 KB | 🏠* |
| dimf Google Ads 2 (via futurumshop.nl/dimf) | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| signals/config (Facebook) | 36 KB | 🌐 |
| vendor.js (assets.futurumshop.nl) | 35 KB | 🏠 |
| 860.js (futurumshop.nl) | 33 KB | 🏠 |

### /fietskleding-dames/fietskleding

| Bestand | Grootte | Partij |
|---------|---------|--------|
| common.js (assets.futurumshop.nl) | 207 KB | 🏠 |
| dimf GA4 (via futurumshop.nl/dimf) | 184 KB | 🏠* |
| dimf fps (via futurumshop.nl/dimf) | 164 KB | 🏠* |
| gtm.js (GTM-K3Q2HV) | 159 KB | 🌐 |
| dimf Google Ads 1 (via futurumshop.nl/dimf) | 148 KB | 🏠* |
| dimf Google Ads 2 (via futurumshop.nl/dimf) | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| signals/config (Facebook) | 36 KB | 🌐 |
| 860.js (futurumshop.nl) | 33 KB | 🏠 |
| aiChat.js (assets.futurumshop.nl) | 32 KB | 🏠 |

---

## Aanbevelingen

### Hoge prioriteit

- **[CLS — 0,568 gemiddeld, alle pagina's Slecht]** De lay-outverschuiving is extreem hoog op alle pagina's. /fietskleding-dames scoort zelfs 0,748 — meer dan zeven keer de maximale norm van 0,1. Bezoekers zien de volledige pagina-indeling verspringen terwijl afbeeldingen laden. Voeg `width` en `height`-attributen toe aan alle productafbeeldingen in de HTML, zodat de browser direct ruimte reserveert. Controleer ook eventuele dynamisch ingevoegde banners of advertentieblokken bovenaan de pagina.
  - Getroffen pagina's: alle 5 (sterkst op /fietskleding-dames: CLS 0,748)
  - Verwachte impact: CLS daalt van ~0,57 naar <0,1

- **[LCP — 6.361 ms gemiddeld, alle pagina's Slecht]** De combinatie van ~1,3 MB scriptlading en late afbeeldingslading resulteert in een LCP van meer dan 6 seconden. Pre-load de LCP-kandidaat via `<link rel="preload" as="image">`, stel GTM uit via `async`, en activeer lazy loading voor afbeeldingen buiten de viewport.
  - Getroffen pagina's: alle 5 (sterkst op /fietshelmen-heren: LCP 8.198 ms)
  - Verwachte impact: LCP daalt van ~6.400 ms naar ~3.000 ms

### Gemiddelde prioriteit

- **[Twee Google Ads-tags via dimf (~295 KB gecombineerd)]** Op alle pagina's worden twee afzonderlijke Google Ads-tags geladen via het eigen dimf-domein. Nagegaan moet worden of beide conversieaccounts noodzakelijk zijn, of dat één tag kan worden samengevoegd via linked accounts in GA4.
  - Getroffen pagina's: alle 5

- **[TTFB hoog op 2 pagina's (562–585 ms)]** Op /fietskleding-heren/fietskleding en /fietskleding-heren/fietshelmen-heren is de TTFB meer dan tien keer zo hoog als op de overige pagina's (19 ms). Dit duidt op inconsistent servergedrag of ontbrekende caching voor deze specifieke paden. Onderzoek de server-side caching voor deze categoriepaden.
  - Getroffen pagina's: /fietskleding-heren/fietskleding (585 ms), /fietskleding-heren/fietshelmen-heren (562 ms)

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-futurumshop-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
