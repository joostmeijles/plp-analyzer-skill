# PLP Lighthouse Performancerapport — isolatiemateriaal

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van isolatiemateriaal scoort momenteel een 55 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (7,4 sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de server reageert razendsnel (TTFB < 15 ms) — maar de productgrid wordt client-side geladen door JavaScript, waardoor bezoekers lang een lege pagina zien voordat producten verschijnen.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Verlaag de LCP van 7,4 sec door producten server-side te renderen

De TTFB is uitstekend (<15 ms), maar de LCP is 7.378 ms. Dit verschil van meer dan 7 seconden betekent dat de productgrid niet in de HTML staat, maar door JavaScript wordt opgebouwd nadat de pagina is geladen. Next.js biedt `getServerSideProps` en statische generatie (`getStaticProps`) waarmee de productgrid direct in de HTML kan worden opgenomen. Dit is de meest impactvolle wijziging en kan het LCP terugbrengen van ~7,4 sec naar ~2–3 sec zonder andere aanpassingen.

### Aanbeveling 2: Stel de BigCommerce B2B-portalscripts uit (~263 KB per pagina)

Op elke pagina worden drie scripts van `microapps.bigcommerce.com` geladen (B2B buyer portal: b2bGetVariables, MUI, reactVendor) met een gecombineerd gewicht van ~263 KB. Deze scripts zijn niet nodig voor de initiële weergave van de productlijst en blokkeren de render. Via `next/script` met `strategy="lazyOnload"` kunnen ze worden uitgesteld tot na de eerste render. Verwachte verbetering: TBT daalt van ~486 ms naar <200 ms en de LCP verbetert met ~1 sec.

---

## Samenvatting

isolatiemateriaal.nl scoort gemiddeld 55 op performance — in de categorie Verbetering nodig. De serverresponstijd (TTFB) is met gemiddeld 13 ms uitzonderlijk snel — één van de beste in deze analyse. Toch is het gemiddelde LCP van 7.378 ms Slecht op alle pagina's, wat duidt op client-side rendering van de productgrid door JavaScript. De CLS scoort net boven de drempel (gemiddeld 0,105, Verbetering nodig). Het TBT is gemiddeld 486 ms (Verbetering nodig). Op /muurisolatie zorgt een ingebedde YouTube-video voor ~785 KB aan extra scriptlading en het hoogste LCP van alle pagina's (8.430 ms). Het platform is Next.js op BigCommerce.

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 55/100 | 🟠 Verbetering nodig |
| Vindbaarheidscore (SEO) | 89/100 | 🟠 Verbetering nodig |
| Gemiddeld paginagewicht | 2,5 MB | |
| Geanalyseerde pagina's | 5 | |

> Scores zijn het **gemiddelde** over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte zoals gerapporteerd door Lighthouse.
> Status: 🟢 Goed ≥ 90 · 🟠 Verbetering nodig 50–89 · 🔴 Slecht < 50

---

## Technische stack

| | Waarde |
|--|--|
| CDN / Hosting | Onbekend |
| Frontend framework | Next.js |

> Framework bepaald op basis van `/_next/static/` URL-patroon in de paginaactiva. Platform: BigCommerce (B2B buyer portal geladen van `microapps.bigcommerce.com`). De uitstekende TTFB (<15 ms) wijst op actieve CDN-edge caching voor de HTML.

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 7.378 | 0% | 0% | 100% | ≤ 2.500 ms |
| CLS | 0,105 | 0% | 100% | 0% | ≤ 0,1 |
| TBT (ms) | 486 | 0% | 100% | 0% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /isolatieplaten | 57/100 | 6.015 ms | 0,101 | 461 ms | 2,3 MB | 🟠 Verbetering nodig |
| /muurisolatie | 52/100 | 8.430 ms | 0,110 | 515 ms | 3,5 MB | 🟠 Verbetering nodig |
| /dakisolatie | 56/100 | 6.166 ms | 0,110 | 473 ms | 2,4 MB | 🟠 Verbetering nodig |
| /bevestigingsmateriaal | 55/100 | 6.588 ms | 0,101 | 552 ms | 1,9 MB | 🟠 Verbetering nodig |
| /vloerisolatie | 54/100 | 9.692 ms | 0,101 | 428 ms | 2,4 MB | 🟠 Verbetering nodig |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /isolatieplaten | 11 ms | 1.984 ms | 6.084 ms | 461 ms |
| /muurisolatie | 11 ms | 2.031 ms | 6.060 ms | 515 ms |
| /dakisolatie | 11 ms | 2.033 ms | 5.704 ms | 473 ms |
| /bevestigingsmateriaal | 21 ms | 1.922 ms | 4.879 ms | 552 ms |
| /vloerisolatie | 11 ms | 2.024 ms | 6.129 ms | 428 ms |
| **Gemiddelde** | **13 ms** | **1.999 ms** | **5.771 ms** | **486 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 2,5 MB |
| Gemiddeld aantal verzoeken | 125 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /isolatieplaten | 2,3 MB (118 vz) | 1.731 KB (76) | 421 KB (8) | 4 KB (4) | 134 KB (4) | 84 KB (3) | 8 KB (23) |
| /muurisolatie | 3,5 MB (153 vz) | 2.533 KB (89) | 557 KB (13) | 98 KB (8) | 168 KB (6) | 188 KB (7) | 8 KB (30) |
| /dakisolatie | 2,4 MB (118 vz) | 1.731 KB (76) | 483 KB (8) | 4 KB (4) | 134 KB (4) | 89 KB (3) | 7 KB (23) |
| /bevestigingsmateriaal | 1,9 MB (118 vz) | 1.733 KB (76) | 38 KB (8) | 4 KB (4) | 134 KB (4) | 68 KB (3) | 9 KB (23) |
| /vloerisolatie | 2,4 MB (118 vz) | 1.731 KB (76) | 482 KB (8) | 4 KB (4) | 134 KB (4) | 86 KB (3) | 8 KB (23) |
| **Gemiddelde** | **2,5 MB** | **1.892 KB** | **396 KB** | **23 KB** | **141 KB** | **103 KB** | **8 KB** |

> Scripts domineren het paginagewicht (gemiddeld 1,9 MB, ~76% van het totaal). Op /muurisolatie worden YouTube-embedscripts (~785 KB) geladen die het scriptgewicht fors verhogen.

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /isolatieplaten

| Bestand | Grootte | Partij |
|---------|---------|--------|
| 7865-58ebae...js (_next) | 251 KB | 🏠 |
| gtag/js GA4 G-QMX0YJCXFK | 172 KB | 🌐 |
| gtag/js GA4 G-5MRH8QZ28S | 171 KB | 🌐 |
| gtm.js (GTM-P96BFRJ3) | 169 KB | 🌐 |
| b2bGetVariables (BigCommerce B2B portal) | 110 KB | 🌐 |
| mui.DKWPti (BigCommerce B2B / MUI) | 102 KB | 🌐 |
| ac60e259-...js (_next) | 89 KB | 🏠 |
| reactVendor (BigCommerce B2B portal) | 45 KB | 🌐 |
| 9226-...js (_next) | 44 KB | 🏠 |
| 5819-...js (_next) | 43 KB | 🏠 |

### /muurisolatie

| Bestand | Grootte | Partij |
|---------|---------|--------|
| player_embed_es6 (YouTube player) | 430 KB | 🌐 |
| 7865-58ebae...js (_next) | 251 KB | 🏠 |
| ytembeds.base (YouTube embeds, 1) | 207 KB | 🌐 |
| gtag/js GA4 G-QMX0YJCXFK | 172 KB | 🌐 |
| gtag/js GA4 G-5MRH8QZ28S | 171 KB | 🌐 |
| gtm.js (GTM-P96BFRJ3) | 169 KB | 🌐 |
| ytembeds.base (YouTube embeds, 2) | 130 KB | 🌐 |
| b2bGetVariables (BigCommerce B2B portal) | 110 KB | 🌐 |
| mui.DKWPti (BigCommerce B2B / MUI) | 102 KB | 🌐 |
| ac60e259-...js (_next) | 89 KB | 🏠 |

### /dakisolatie

| Bestand | Grootte | Partij |
|---------|---------|--------|
| 7865-58ebae...js (_next) | 251 KB | 🏠 |
| gtag/js GA4 G-QMX0YJCXFK | 172 KB | 🌐 |
| gtag/js GA4 G-5MRH8QZ28S | 171 KB | 🌐 |
| gtm.js (GTM-P96BFRJ3) | 169 KB | 🌐 |
| b2bGetVariables (BigCommerce B2B portal) | 110 KB | 🌐 |
| mui.DKWPti (BigCommerce B2B / MUI) | 102 KB | 🌐 |
| ac60e259-...js (_next) | 89 KB | 🏠 |
| reactVendor (BigCommerce B2B portal) | 45 KB | 🌐 |
| 9226-...js (_next) | 44 KB | 🏠 |
| 5819-...js (_next) | 43 KB | 🏠 |

### /bevestigingsmateriaal

| Bestand | Grootte | Partij |
|---------|---------|--------|
| 7865-58ebae...js (_next) | 251 KB | 🏠 |
| gtag/js GA4 G-QMX0YJCXFK | 172 KB | 🌐 |
| gtag/js GA4 G-5MRH8QZ28S | 171 KB | 🌐 |
| gtm.js (GTM-P96BFRJ3) | 169 KB | 🌐 |
| b2bGetVariables (BigCommerce B2B portal) | 110 KB | 🌐 |
| mui.DKWPti (BigCommerce B2B / MUI) | 102 KB | 🌐 |
| ac60e259-...js (_next) | 89 KB | 🏠 |
| reactVendor (BigCommerce B2B portal) | 45 KB | 🌐 |
| 9226-...js (_next) | 44 KB | 🏠 |
| 5819-...js (_next) | 43 KB | 🏠 |

### /vloerisolatie

| Bestand | Grootte | Partij |
|---------|---------|--------|
| 7865-58ebae...js (_next) | 251 KB | 🏠 |
| gtag/js GA4 G-QMX0YJCXFK | 172 KB | 🌐 |
| gtag/js GA4 G-5MRH8QZ28S | 171 KB | 🌐 |
| gtm.js (GTM-P96BFRJ3) | 169 KB | 🌐 |
| b2bGetVariables (BigCommerce B2B portal) | 110 KB | 🌐 |
| mui.DKWPti (BigCommerce B2B / MUI) | 102 KB | 🌐 |
| ac60e259-...js (_next) | 89 KB | 🏠 |
| reactVendor (BigCommerce B2B portal) | 45 KB | 🌐 |
| 9226-...js (_next) | 44 KB | 🏠 |
| 5819-...js (_next) | 43 KB | 🏠 |

---

## Aanbevelingen

### Hoge prioriteit

- **[LCP — 7.378 ms gemiddeld, alle pagina's Slecht]** De TTFB is uitstekend (<15 ms) maar de LCP is meer dan 7 seconden — een verschil van ruim 7 seconden. Dit duidt sterk op client-side rendering van de productgrid: de HTML bevat geen producten, maar wacht tot JavaScript het grid opbouwt. Implementeer server-side rendering (`getServerSideProps`) of statische generatie (`getStaticProps`) via Next.js om de productgrid direct in de HTML op te nemen, zodat Lighthouse de LCP-kandidaat direct bij de eerste HTML-byte ziet.
  - Getroffen pagina's: alle 5 (sterkst op /vloerisolatie: LCP 9.692 ms)
  - Verwachte impact: LCP daalt van ~7.400 ms naar ~2.000–3.000 ms

- **[BigCommerce B2B-portalscripts — ~263 KB per pagina op alle pagina's]** Drie scripts van `microapps.bigcommerce.com` (B2B buyer portal: b2bGetVariables, MUI, reactVendor) worden bij elke paginaload synchroon geladen. Dit B2B-portaal is waarschijnlijk alleen relevant voor ingelogde zakelijke klanten, niet voor anonieme bezoekers op de productlijst. Gebruik `next/script` met `strategy="lazyOnload"` om deze scripts pas te laden na de eerste render, of laad ze conditioneel alleen voor B2B-gebruikers.
  - Getroffen pagina's: alle 5
  - Verwachte impact: TBT daalt van ~486 ms naar <200 ms

### Gemiddelde prioriteit

- **[YouTube-embed op /muurisolatie (~785 KB extra scripts)]** De ingebedde YouTube-video op /muurisolatie laadt drie scriptbestanden (player, ytembeds × 2) met een totaal van ~785 KB. Dit resulteert in het hoogste LCP (8.430 ms) en de zwaarste pagina (3,5 MB) van alle geauditeerde pagina's. Vervang het standaard YouTube-embed door een "lite"-implementatie (bijv. `lite-youtube-embed`) die alleen de thumbnail laadt en de videospeler pas start bij klik.
  - Getroffen pagina's: /muurisolatie
  - Verwachte impact: LCP daalt van 8.430 ms naar ~6.000 ms; paginagewicht daalt met ~785 KB

- **[CLS — 0,101–0,110 op alle pagina's]** De CLS scoort op alle pagina's net boven de drempel van 0,1. De oorzaak is waarschijnlijk een element (banner, filter, of de productgrid zelf) dat na het laden van JavaScript in de layout wordt ingevoegd. Reserveer vaste ruimte via CSS (`min-height`) voor dynamisch geladen blokken.
  - Getroffen pagina's: alle 5

- **[Dubbele GA4-tag (G-QMX0YJCXFK + G-5MRH8QZ28S, ~343 KB gecombineerd)]** Op alle pagina's worden twee afzonderlijke GA4-accounts geladen. Evalueer of beide accounts noodzakelijk zijn en consolideer waar mogelijk naar één GA4-implementatie.
  - Getroffen pagina's: alle 5

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-isolatiemateriaal-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
