# PLP Lighthouse Performancerapport — brekz

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van Brekz scoort momenteel een 42 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (13,4 sec LCP) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Verlaag het fontgewicht drastisch (540 KB per pagina)

Op elke pagina wordt 540 KB aan weblettertypen ingeladen. Dit is waarschijnlijk de hoofdoorzaak van het extreem hoge LCP van gemiddeld 13 seconden: bezoekers wachten tot alle fonts beschikbaar zijn voordat tekst zichtbaar wordt. Het team moet ongebruikte lettertypevarianten verwijderen, gebruik maken van `font-display: swap` zodat tekst direct in een fallback-font verschijnt, en fontbestanden pre-loaden via `<link rel="preload">`. Verwachte verbetering: LCP kan dalen van >13 sec naar 3–5 sec.

### Aanbeveling 2: Verminder de app-bundel en reCAPTCHA-lading (589 KB + 362 KB)

De eerste-partijbundel app.js is 589 KB en Google reCAPTCHA laadt 362 KB — samen 951 KB aan kritische scripts die vóór rendering worden uitgevoerd. reCAPTCHA moet uitgesteld worden geladen (alleen activeren bij interactie). De app.js moet worden gesplitst zodat alleen de code die nodig is voor de initiële paginalading wordt verzonden. Verwachte TBT-verbetering: van ~950 ms naar <300 ms.

---

## Samenvatting

Brekz.nl scoort gemiddeld 42 op performance — in de categorie Slecht. Het gemiddelde LCP van 13.415 ms is uitzonderlijk hoog en geldt als Slecht op alle vijf pagina's; de oorzaak is een combinatie van een zwaar fontpakket (540 KB), een grote app-bundle (589 KB) en Google reCAPTCHA (362 KB). Het gemiddelde TBT van 948 ms is Slecht op vier van de vijf pagina's. De CLS is 0,000 op alle pagina's — een sterk punt. Botbeveiliging werd gedetecteerd tijdens de Puppeteer-navigatie op vier van vijf pagina's; de Lighthouse-resultaten zijn gebaseerd op de daadwerkelijke paginainhoud (verzoeken en paginagewichten zijn realistisch).

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 42/100 | 🔴 Slecht |
| Vindbaarheidscore (SEO) | 92/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 2,7 MB | |
| Geanalyseerde pagina's | 5 | |

> Scores zijn het **gemiddelde** over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte zoals gerapporteerd door Lighthouse.
> Status: 🟢 Goed ≥ 90 · 🟠 Verbetering nodig 50–89 · 🔴 Slecht < 50

---

## Technische stack

| | Waarde |
|--|--|
| CDN / Hosting | Cloudflare |
| Frontend framework | Vue.js |

> CDN wordt bepaald op basis van HTTP-antwoordheaders (`cf-ray`). Framework wordt bepaald op basis van JavaScript-globals (Vue.js gedetecteerd op /hondenriemen).

---

## ⚠ Botbeveiliging

Botbeveiliging werd gedetecteerd tijdens de Puppeteer-navigatie op vier van vijf pagina's. De Lighthouse-metrieken reflecteren de daadwerkelijke PLP (verzoeken >99 en paginagewicht >2 MB op alle pagina's), maar kunnen enigszins zijn beïnvloed.

| Pagina | Systeem | Details | Maatregel |
|--------|---------|---------|-----------|
| /merken-droog-hondenvoer | Onbekend | Bot challenge gedetecteerd | Resultaten mogelijk onbetrouwbaar — controleer screenshot |
| /hondenaccessoires | Onbekend | Bot challenge gedetecteerd | Resultaten mogelijk onbetrouwbaar — controleer screenshot |
| /kattenspeelgoed | Onbekend | Bot challenge gedetecteerd | Resultaten mogelijk onbetrouwbaar — controleer screenshot |
| /alles-voor-de-hond | Onbekend | Bot challenge gedetecteerd | Resultaten mogelijk onbetrouwbaar — controleer screenshot |

> Lighthouse-metrieken voor geblokkeerde pagina's kunnen de challenge-pagina weerspiegelen in plaats van de daadwerkelijke PLP. Cross-check: paginagewichten en verzoeken zijn realistisch op alle pagina's.

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 13.415 | 0% | 0% | 100% | ≤ 2.500 ms |
| CLS | 0,000 | 100% | 0% | 0% | ≤ 0,1 |
| TBT (ms) | 948 | 0% | 20% | 80% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /hondenriemen | 36/100 | 16.515 ms | 0,000 | 1.368 ms | 3,3 MB | 🔴 Slecht |
| /merken-droog-hondenvoer | 37/100 | 16.196 ms | 0,000 | 1.256 ms | 3,1 MB | 🔴 Slecht |
| /hondenaccessoires | 36/100 | 14.671 ms | 0,000 | 1.051 ms | 2,4 MB | 🔴 Slecht |
| /kattenspeelgoed | 51/100 | 8.225 ms | 0,000 | 598 ms | 2,3 MB | 🟠 Verbetering nodig |
| /alles-voor-de-hond | 50/100 | 11.466 ms | 0,000 | 466 ms | 2,3 MB | 🟠 Verbetering nodig |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /hondenriemen | 533 ms | 5.613 ms | 5.613 ms | 1.368 ms |
| /merken-droog-hondenvoer | 457 ms | 5.370 ms | 5.370 ms | 1.256 ms |
| /hondenaccessoires | 418 ms | 6.599 ms | 6.599 ms | 1.051 ms |
| /kattenspeelgoed | 480 ms | 4.126 ms | 4.126 ms | 598 ms |
| /alles-voor-de-hond | 434 ms | 5.162 ms | 5.162 ms | 466 ms |
| **Gemiddelde** | **464 ms** | **5.374 ms** | **5.374 ms** | **948 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 2,7 MB |
| Gemiddeld aantal verzoeken | 115 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /hondenriemen | 3,3 MB (127 vz) | 2,1 MB (39) | 596 KB (48) | 89 KB (1) | 528 KB (6) | 49 KB (4) | 35 KB (29) |
| /merken-droog-hondenvoer | 3,1 MB (138 vz) | 2,1 MB (38) | 334 KB (69) | 89 KB (1) | 528 KB (6) | 50 KB (3) | 34 KB (21) |
| /hondenaccessoires | 2,4 MB (107 vz) | 1,5 MB (39) | 203 KB (39) | 89 KB (1) | 529 KB (6) | 47 KB (2) | 34 KB (20) |
| /kattenspeelgoed | 2,3 MB (99 vz) | 1,5 MB (38) | 157 KB (31) | 89 KB (1) | 528 KB (6) | 46 KB (2) | 35 KB (21) |
| /alles-voor-de-hond | 2,3 MB (102 vz) | 1,5 MB (38) | 172 KB (35) | 89 KB (1) | 528 KB (6) | 47 KB (2) | 34 KB (20) |
| **Gemiddelde** | **2,7 MB** | **1,8 MB** | **292 KB** | **89 KB** | **528 KB** | **48 KB** | **34 KB** |

> Lettertypen vormen gemiddeld 20% van het totale paginagewicht (528 KB per pagina).

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /hondenriemen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| app.js (brekz eigen bundle) | 589 KB | 🏠 |
| reCAPTCHA modules.js (Google) | 362 KB | 🌐 |
| gtag/js (GA4 — 1e instantie) | 180 KB | 🌐 |
| gtm.js (GTM fps proxy) | 168 KB | 🌐 |
| gtag/js (GA4 — 2e instantie) | 160 KB | 🌐 |
| gtm.js (GTM-58RGX44) | 160 KB | 🌐 |
| gtag/js (Google Ads) | 150 KB | 🌐 |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |
| Facebook signals config | 38 KB | 🌐 |

### /merken-droog-hondenvoer

| Bestand | Grootte | Partij |
|---------|---------|--------|
| app.js (brekz eigen bundle) | 589 KB | 🏠 |
| reCAPTCHA modules.js (Google) | 362 KB | 🌐 |
| gtag/js (GA4 — 1e instantie) | 180 KB | 🌐 |
| gtm.js (GTM fps proxy) | 168 KB | 🌐 |
| gtag/js (GA4 — 2e instantie) | 160 KB | 🌐 |
| gtm.js (GTM-58RGX44) | 160 KB | 🌐 |
| gtag/js (Google Ads) | 150 KB | 🌐 |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |
| Facebook signals config | 38 KB | 🌐 |

### /hondenaccessoires

| Bestand | Grootte | Partij |
|---------|---------|--------|
| reCAPTCHA modules.js (Google) | 362 KB | 🌐 |
| gtag/js proxy GA4 (1e) | 180 KB | 🏠* |
| gtm.js proxy (brekz.nl/3djl/) | 168 KB | 🏠* |
| gtm.js (GTM-58RGX44) | 160 KB | 🌐 |
| gtag/js proxy GA4 (2e) | 157 KB | 🏠* |
| gtag/js proxy Google Ads | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |
| Facebook signals config | 38 KB | 🌐 |
| pagead/conversion.js (Google) | 23 KB | 🌐 |

_* GTM-tags worden op /hondenaccessoires via een eigen proxypad (brekz.nl/3djl/) geladen — dit is een server-side tagging setup._

### /kattenspeelgoed

| Bestand | Grootte | Partij |
|---------|---------|--------|
| reCAPTCHA modules.js (Google) | 362 KB | 🌐 |
| gtag/js proxy GA4 (1e) | 180 KB | 🏠* |
| gtm.js proxy (brekz.nl/3djl/) | 168 KB | 🏠* |
| gtm.js (GTM-58RGX44) | 160 KB | 🌐 |
| gtag/js proxy GA4 (2e) | 157 KB | 🏠* |
| gtag/js proxy Google Ads | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |
| Facebook signals config | 38 KB | 🌐 |
| pagead/conversion.js (Google) | 23 KB | 🌐 |

### /alles-voor-de-hond

| Bestand | Grootte | Partij |
|---------|---------|--------|
| reCAPTCHA modules.js (Google) | 362 KB | 🌐 |
| gtag/js proxy GA4 (1e) | 180 KB | 🏠* |
| gtm.js proxy (brekz.nl/3djl/) | 168 KB | 🏠* |
| gtm.js (GTM-58RGX44) | 160 KB | 🌐 |
| gtag/js proxy GA4 (2e) | 157 KB | 🏠* |
| gtag/js proxy Google Ads | 147 KB | 🏠* |
| fbevents.js (Facebook) | 95 KB | 🌐 |
| modules.js (Hotjar) | 57 KB | 🌐 |
| Facebook signals config | 38 KB | 🌐 |
| pagead/conversion.js (Google) | 23 KB | 🌐 |

---

## Aanbevelingen

### Hoge prioriteit

- **[LCP — 13.415 ms gemiddeld, alle pagina's Slecht]** Het extreem hoge LCP is primair veroorzaakt door het zware fontpakket (528 KB) en de grote app-bundle. Activeer `font-display: swap`, pre-load kritische fonts via `<link rel="preload">` en verwijder ongebruikte lettertypevarianten. Verwachte LCP-verbetering: 60–70% reductie.
  - Getroffen pagina's: alle 5

- **[Fonts — 528 KB per pagina]** Het fontgewicht van 528 KB is abnormaal hoog en domineert het laadproces. Controleer hoeveel lettertypefamilies en gewichten worden ingeladen; beperk tot maximaal 2 families × 2 gewichten en gebruik subsetting om alleen de benodigde tekens te laden.
  - Getroffen pagina's: alle 5

### Gemiddelde prioriteit

- **[TBT — 948 ms gemiddeld]** Naast fonts blokkeert de combinatie van reCAPTCHA (362 KB) en twee instanties van Google Analytics de hoofdthread. reCAPTCHA moet uitgesteld worden geladen; dubbele GA4-instanties moeten worden samengevoegd tot één.
  - Getroffen pagina's: alle 5

- **[Botbeveiliging — 4 van 5 pagina's]** Puppeteer werd op vier pagina's herkend als bot. Overweeg om voor Lighthouse-audits een whitelisted user-agent of IP-adres te gebruiken om accurate metingen te garanderen.
  - Getroffen pagina's: /merken-droog-hondenvoer, /hondenaccessoires, /kattenspeelgoed, /alles-voor-de-hond

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-brekz-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
