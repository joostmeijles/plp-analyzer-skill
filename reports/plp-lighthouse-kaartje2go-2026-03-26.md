# PLP Lighthouse Performancerapport — kaartje2go

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5 (4 succesvol, 1 mislukt)

---

## Managementsamenvatting

De website van kaartje2go scoort momenteel een 53 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (9,7 sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Verlaag de LCP van 9,7 sec door scripts uit te stellen en afbeeldingen te optimaliseren

Het primaire knelpunt is de combinatie van ~1,5 MB aan scripts die de render blokkeren en ~54 productafbeeldingen per pagina. De LCP-kandidaat verschijnt pas na bijna 10 seconden — ver boven de norm van 2,5 sec. Het team moet niet-kritische scripts (HelpScout chat, Squeezely, Facebook pixel) uitstellen via `defer`/`async`, de dubbele GA4-tags samenvoegen tot één, en de LCP-afbeelding pre-loaden via `<link rel="preload">`. Verwachte verbetering: LCP daalt van ~9,7 sec naar ~3–4 sec.

### Aanbeveling 2: Verminder de TBT (705 ms) door trackingscripts te consolideren en uitgesteld te laden

Vier trackingscripts worden synchroon geladen vóór de render: dubbele GA4 (~291 KB gecombineerd), HelpScout chatwidget (130 KB), Facebook pixel (97 KB) en Squeezely (74 KB). Samen blokkeren ze de hoofdthread gemiddeld 705 ms. Het team moet de dubbele GA4-implementatie terugbrengen tot één tag, de chatwidget pas laden bij gebruikersinteractie, en alle overige derdepartijscripts via GTM uitstellen. Verwachte verbetering: TBT daalt van ~705 ms naar <300 ms.

---

## Samenvatting

kaartje2go.nl scoort gemiddeld 53 op performance — in de categorie Verbetering nodig. Het gemiddelde LCP van 9.686 ms is Slecht op alle vier geauditeerde pagina's — een extreem hoge waarde die wijst op zware scriptblocking gecombineerd met een groot aantal afbeeldingen. Het gemiddelde TBT van 705 ms is Slecht op drie van vier pagina's. De CLS is uitstekend (0,000 op alle pagina's). Het gemiddelde paginagewicht bedraagt 2,3 MB, waarvan ~1,5 MB scripts (inclusief dubbele GA4-tags en meerdere trackingpixels van derden).

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 54/100 | 🟠 Verbetering nodig |
| Vindbaarheidscore (SEO) | 100/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 2,3 MB | |
| Geanalyseerde pagina's | 4 van 5 | |

> Scores zijn het **mediaan** over alle succesvol geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte zoals gerapporteerd door Lighthouse.
> Status: 🟢 Goed ≥ 90 · 🟠 Verbetering nodig 50–89 · 🔴 Slecht < 50

---

## Technische stack

| | Waarde |
|--|--|
| CDN / Hosting | AWS CloudFront |
| Frontend framework | Onbekend |

> CDN wordt bepaald op basis van HTTP-antwoordheaders (`x-amz-cf-id`). Framework: geen herkend framework-marker. GTM is deels proxied via het eigen domein (`kaartje2go.nl/pipeline/assets/g-t-m`) — een goede praktijk die externe domeinverzoeken beperkt.

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 9.686 | 0% | 0% | 100% | ≤ 2.500 ms |
| CLS | 0,000 | 100% | 0% | 0% | ≤ 0,1 |
| TBT (ms) | 705 | 0% | 25% | 75% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /verjaardagskaarten | 56/100 | 10.026 ms | 0,000 | 572 ms | 2,4 MB | 🟠 Verbetering nodig |
| /geboortekaartjes | 54/100 | 10.608 ms | 0,000 | 612 ms | 2,4 MB | 🟠 Verbetering nodig |
| /wenskaarten | — | — | — | — | — | ❌ Fout |
| /moederdag-kaarten | 48/100 | 10.223 ms | 0,000 | 900 ms | 2,3 MB | 🟠 Verbetering nodig |
| /felicitatiekaarten | 54/100 | 7.888 ms | 0,000 | 735 ms | 2,3 MB | 🟠 Verbetering nodig |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## ⚠ Lighthouse-fouten

Één URL kon niet worden geaudit door een Lighthouse-fout. De overige vier pagina's zijn succesvol afgerond.

| Pagina | Status |
|--------|--------|
| /wenskaarten | ❌ Fout — geen Lighthouse-data |

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /verjaardagskaarten | 48 ms | 2.058 ms | 4.723 ms | 572 ms |
| /geboortekaartjes | 197 ms | 2.092 ms | 5.279 ms | 612 ms |
| /wenskaarten | — | — | — | — |
| /moederdag-kaarten | 41 ms | 2.114 ms | 5.504 ms | 900 ms |
| /felicitatiekaarten | 57 ms | 2.060 ms | 4.112 ms | 735 ms |
| **Gemiddelde** | **86 ms** | **2.081 ms** | **4.905 ms** | **705 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 2,3 MB |
| Gemiddeld aantal verzoeken | 179 |

> Waarden zijn gemiddelden over alle succesvol geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /verjaardagskaarten | 2,4 MB (187 vz) | 1.534 KB (70) | 575 KB (59) | 68 KB (3) | 41 KB (3) | 65 KB (2) | 176 KB (50) |
| /geboortekaartjes | 2,4 MB (181 vz) | 1.526 KB (66) | 580 KB (54) | 68 KB (3) | 41 KB (3) | 72 KB (2) | 182 KB (53) |
| /wenskaarten | — | — | — | — | — | — | — |
| /moederdag-kaarten | 2,3 MB (185 vz) | 1.528 KB (69) | 442 KB (59) | 68 KB (3) | 41 KB (3) | 60 KB (2) | 173 KB (49) |
| /felicitatiekaarten | 2,3 MB (163 vz) | 1.505 KB (60) | 483 KB (45) | 68 KB (3) | 41 KB (3) | 52 KB (2) | 176 KB (50) |
| **Gemiddelde** | **2,3 MB** | **1.523 KB** | **520 KB** | **68 KB** | **41 KB** | **62 KB** | **177 KB** |

> Scripts van derden vormen ~50% van het totale scriptgewicht (gemiddeld ~767 KB per pagina). GTM is proxied via het eigen domein — een goede praktijk.

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /verjaardagskaarten

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (googletagmanager.com) | 144 KB | 🌐 |
| gtag/js Google Ads (googletagmanager.com) | 141 KB | 🌐 |
| g-t-m GTM (via kaartje2go.nl/pipeline) | 141 KB | 🏠* |
| 6642.d29d79bc... | 133 KB | 🏠 |
| full-beacon-init.js (HelpScout) | 127 KB | 🌐 |
| fbevents.js (Facebook) | 94 KB | 🌐 |
| framework.4ad2... | 87 KB | 🏠 |
| main.b481... | 82 KB | 🏠 |
| 24be6a69...js (Squeezely) | 72 KB | 🌐 |
| sentry.5e27... | 52 KB | 🏠 |

_* GTM wordt geladen via het eigen domein `kaartje2go.nl/pipeline/assets/g-t-m` (server-side tagging)._

### /geboortekaartjes

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (googletagmanager.com) | 144 KB | 🌐 |
| gtag/js Google Ads (googletagmanager.com) | 141 KB | 🌐 |
| g-t-m GTM (via kaartje2go.nl/pipeline) | 141 KB | 🏠* |
| 6642.d29d79bc... | 133 KB | 🏠 |
| full-beacon-init.js (HelpScout) | 127 KB | 🌐 |
| fbevents.js (Facebook) | 94 KB | 🌐 |
| framework.4ad2... | 87 KB | 🏠 |
| main.b481... | 82 KB | 🏠 |
| 24be6a69...js (Squeezely) | 72 KB | 🌐 |
| sentry.5e27... | 52 KB | 🏠 |

### /moederdag-kaarten

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (googletagmanager.com) | 144 KB | 🌐 |
| g-t-m GTM (via kaartje2go.nl/pipeline) | 141 KB | 🏠* |
| gtag/js Google Ads (googletagmanager.com) | 141 KB | 🌐 |
| 6642.d29d79bc... | 133 KB | 🏠 |
| full-beacon-init.js (HelpScout) | 127 KB | 🌐 |
| fbevents.js (Facebook) | 94 KB | 🌐 |
| framework.4ad2... | 87 KB | 🏠 |
| main.b481... | 82 KB | 🏠 |
| 24be6a69...js (Squeezely) | 72 KB | 🌐 |
| sentry.5e27... | 52 KB | 🏠 |

### /felicitatiekaarten

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 (googletagmanager.com) | 144 KB | 🌐 |
| g-t-m GTM (via kaartje2go.nl/pipeline) | 141 KB | 🏠* |
| gtag/js Google Ads (googletagmanager.com) | 141 KB | 🌐 |
| 6642.d29d79bc... | 133 KB | 🏠 |
| full-beacon-init.js (HelpScout) | 127 KB | 🌐 |
| fbevents.js (Facebook) | 94 KB | 🌐 |
| framework.4ad2... | 87 KB | 🏠 |
| main.b481... | 82 KB | 🏠 |
| 24be6a69...js (Squeezely) | 72 KB | 🌐 |
| sentry.5e27... | 52 KB | 🏠 |

---

## Aanbevelingen

### Hoge prioriteit

- **[LCP — 9.686 ms gemiddeld, alle pagina's Slecht]** Het LCP is extreem hoog op alle geauditeerde pagina's. De oorzaak is een combinatie van zware scriptlading (1,5 MB) die de render blokkeert en ~54 productafbeeldingen per pagina. Pre-load de LCP-kandidaat via `<link rel="preload" as="image">`, activeer lazy loading voor afbeeldingen buiten de viewport, en stel niet-kritische scripts uit.
  - Getroffen pagina's: alle 4 (sterkst op /geboortekaartjes met 10.608 ms)
  - Verwachte impact: LCP daalt van ~9.700 ms naar ~3.000–4.000 ms

- **[TBT — 705 ms gemiddeld, 3 van 4 pagina's Slecht]** De hoofdthread wordt langdurig geblokkeerd door synchroon geladen scripts van derden. De dubbele GA4-implementatie laadt twee afzonderlijke `gtag/js`-bestanden (~144 KB elk = ~288 KB gecombineerd). Het HelpScout chatwidget (127 KB) wordt bij elke paginaload gestart, ook als de bezoeker nooit chat. Consolideer naar één GA4-tag, laad de chatwidget pas bij gebruikersinteractie, en stel Squeezely en Facebook pixel uit via GTM-triggering.
  - Getroffen pagina's: /geboortekaartjes (612 ms), /moederdag-kaarten (900 ms), /felicitatiekaarten (735 ms)
  - Verwachte impact: TBT daalt van ~705 ms naar <300 ms

### Gemiddelde prioriteit

- **[Dubbele GA4-tag (~288 KB gecombineerd)]** Op alle pagina's worden twee `gtag/js`-bestanden geladen: één voor GA4 (`G-V6PJY4EMHZ`) en één voor Google Ads (`AW-739549989`). Dit is een onnodige duplicatie die ~144 KB extra laadtijd kost. Google Ads conversietracking kan worden geconfigureerd als linked account binnen GA4, zodat slechts één `gtag/js`-bestand nodig is.
  - Getroffen pagina's: alle 4

- **[Lighthouse-fout op /wenskaarten]** /wenskaarten kon niet worden geaudit. Voer een herbeoordeling uit en onderzoek eventuele specifieke blokkering of renderfouten op deze pagina.

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-kaartje2go-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
