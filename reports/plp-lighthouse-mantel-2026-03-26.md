# PLP Lighthouse Performancerapport — mantel

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van mantel scoort momenteel een 83 op performance. Dit is een relatief goede score voor mobiel, maar twee pagina's (/fietsen en /elektrische-fiets) laden merkbaar trager (>4 sec) door grote afbeeldingsgewichten van 2–2,4 MB. Daarnaast is de serverresponstijd (TTFB) met gemiddeld 1.084 ms hoog op alle pagina's — de server vertraagt elke bezoeker al vóór het laden begint. Als je één ding moet weten: een snellere serverrespons en kleinere productafbeeldingen op de zwaardere categorieën zijn de twee directe verbeterpunten die de score naar Goed (≥ 90) kunnen brengen.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Verlaag de TTFB (gemiddeld 1.084 ms) via betere servercaching

De server reageert gemiddeld meer dan een seconde traag op alle pagina's — /fietskleding zelfs 1.735 ms. Dit is de eerste vertraging die elke bezoeker ervaart, nog vóór één byte van de pagina zichtbaar is. De norm is <200 ms. Het team moet paginacaching inschakelen voor categoriepagina's (bijv. reverse proxy cache, CDN edge caching, of full-page cache op serverniveau), zodat HTML niet elke keer opnieuw wordt gegenereerd. Verwachte verbetering: TTFB daalt van ~1.000 ms naar <200 ms, wat de algehele performancescore direct verhoogt.

### Aanbeveling 2: Verlaag het afbeeldingsgewicht op /fietsen en /elektrische-fiets (~2–2,4 MB afbeeldingen)

Op /fietsen en /elektrische-fiets worden respectievelijk 71 en 59 productafbeeldingen geladen met een gezamenlijk gewicht van 2,4 en 2,1 MB. Dit resulteert in LCP-tijden van 4,3 en 4,5 sec (Slecht). Het team moet lazy loading activeren voor producten buiten de viewport, afbeeldingen converteren naar WebP/AVIF, en de initieel geladen producten beperken. Verwachte verbetering: LCP daalt van >4.300 ms naar <2.500 ms op deze categorieën.

---

## Samenvatting

mantel.com scoort gemiddeld 83 op performance — in de categorie Verbetering nodig, maar dicht bij de Goed-grens. De CLS is uitstekend (0,000 op alle pagina's). Het TBT is goed (gemiddeld 179 ms, vier van vijf pagina's Goed). Het primaire knelpunt is de hoge TTFB van gemiddeld 1.084 ms op alle pagina's — de server reageert traag, wat de LCP direct beïnvloedt. Op twee pagina's (/fietsen, /elektrische-fiets) is het afbeeldingsgewicht met meer dan 2 MB zeer hoog, waardoor de LCP Slecht scoort. Drie tags (GA4 × 2, Universal Analytics) zijn een overbodige analyticslaag.

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 83/100 | 🟠 Verbetering nodig |
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
| CDN / Hosting | Onbekend |
| Frontend framework | Onbekend |

> Activa worden geserveerd via `cdn.mantel.com` (eigen CDN-subdomein). Geen herkend frontend framework. Analytics: GA4 × 2 (G-ZWL5MLSRCG + G-BEKBFTMC5K), Universal Analytics UA-335661-2 (verouderd), en GTM (GTM-P88DLMF) — alle extern geladen via googletagmanager.com en google-analytics.com.

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 3.917 | 0% | 60% | 40% | ≤ 2.500 ms |
| CLS | 0,000 | 100% | 0% | 0% | ≤ 0,1 |
| TBT (ms) | 179 | 80% | 20% | 0% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /fietsonderdelen | 86/100 | 3.607 ms | 0,000 | 162 ms | 2,3 MB | 🟠 Verbetering nodig |
| /fietskleding | 86/100 | 3.462 ms | 0,000 | 161 ms | 2,5 MB | 🟠 Verbetering nodig |
| /fietsaccessoires | 85/100 | 3.679 ms | 0,000 | 188 ms | 2,3 MB | 🟠 Verbetering nodig |
| /fietsen | 79/100 | 4.310 ms | 0,000 | 210 ms | 3,4 MB | 🟠 Verbetering nodig |
| /elektrische-fiets | 79/100 | 4.526 ms | 0,000 | 174 ms | 3,1 MB | 🟠 Verbetering nodig |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /fietsonderdelen | 1.112 ms | 2.182 ms | 2.549 ms | 162 ms |
| /fietskleding | 1.735 ms | 2.187 ms | 3.433 ms | 161 ms |
| /fietsaccessoires | 807 ms | 2.179 ms | 2.179 ms | 188 ms |
| /fietsen | 1.116 ms | 2.178 ms | 2.562 ms | 210 ms |
| /elektrische-fiets | 652 ms | 2.181 ms | 2.181 ms | 174 ms |
| **Gemiddelde** | **1.084 ms** | **2.181 ms** | **2.581 ms** | **179 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 2,7 MB |
| Gemiddeld aantal verzoeken | 95 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /fietsonderdelen | 2,3 MB (81 vz) | 827 KB (10) | 1.338 KB (49) | 49 KB (1) | 60 KB (7) | 55 KB (2) | 24 KB (12) |
| /fietskleding | 2,5 MB (104 vz) | 1.000 KB (11) | 1.340 KB (71) | 49 KB (1) | 60 KB (7) | 55 KB (2) | 24 KB (12) |
| /fietsaccessoires | 2,3 MB (90 vz) | 827 KB (10) | 1.295 KB (58) | 49 KB (1) | 60 KB (7) | 56 KB (2) | 24 KB (12) |
| /fietsen | 3,4 MB (105 vz) | 1.000 KB (11) | 2.297 KB (71) | 49 KB (1) | 60 KB (7) | 54 KB (2) | 24 KB (13) |
| /elektrische-fiets | 3,1 MB (93 vz) | 1.000 KB (11) | 2.014 KB (59) | 49 KB (1) | 60 KB (7) | 51 KB (2) | 24 KB (13) |
| **Gemiddelde** | **2,7 MB** | **931 KB** | **1.657 KB** | **49 KB** | **60 KB** | **54 KB** | **24 KB** |

> Afbeeldingen domineren het paginagewicht (gemiddeld 1,6 MB, ~62% van het totaal). Assets worden geserveerd via `cdn.mantel.com` (eigen CDN-subdomein).

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /fietsonderdelen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 G-ZWL5MLSRCG | 176 KB | 🌐 |
| gtag/js Google Ads AW-973242963 | 174 KB | 🌐 |
| gtag/js GA4 G-BEKBFTMC5K | 158 KB | 🌐 |
| gtag/js UA UA-335661-2 | 123 KB | 🌐 |
| gtm.js (GTM-P88DLMF) | 116 KB | 🌐 |
| webshop.min.js (cdn.mantel.com) | 45 KB | 🏠 |
| analytics.js (Universal Analytics) | 20 KB | 🌐 |
| popper.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |
| hammer.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |
| ec.js (UA e-commerce plugin) | 1 KB | 🌐 |

### /fietskleding

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 G-ZWL5MLSRCG | 176 KB | 🌐 |
| gtag/js Google Ads AW-973242963 (1) | 174 KB | 🌐 |
| gtag/js Google Ads AW-973242963 (2) | 173 KB | 🌐 |
| gtag/js GA4 G-BEKBFTMC5K | 158 KB | 🌐 |
| gtag/js UA UA-335661-2 | 123 KB | 🌐 |
| gtm.js (GTM-P88DLMF) | 116 KB | 🌐 |
| webshop.min.js (cdn.mantel.com) | 45 KB | 🏠 |
| analytics.js (Universal Analytics) | 20 KB | 🌐 |
| popper.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |
| hammer.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |

### /fietsaccessoires

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 G-ZWL5MLSRCG | 176 KB | 🌐 |
| gtag/js Google Ads AW-973242963 | 174 KB | 🌐 |
| gtag/js GA4 G-BEKBFTMC5K | 158 KB | 🌐 |
| gtag/js UA UA-335661-2 | 123 KB | 🌐 |
| gtm.js (GTM-P88DLMF) | 116 KB | 🌐 |
| webshop.min.js (cdn.mantel.com) | 45 KB | 🏠 |
| analytics.js (Universal Analytics) | 20 KB | 🌐 |
| popper.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |
| hammer.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |
| ec.js (UA e-commerce plugin) | 1 KB | 🌐 |

### /fietsen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 G-ZWL5MLSRCG | 176 KB | 🌐 |
| gtag/js Google Ads AW-973242963 (1) | 174 KB | 🌐 |
| gtag/js Google Ads AW-973242963 (2) | 173 KB | 🌐 |
| gtag/js GA4 G-BEKBFTMC5K | 158 KB | 🌐 |
| gtag/js UA UA-335661-2 | 123 KB | 🌐 |
| gtm.js (GTM-P88DLMF) | 116 KB | 🌐 |
| webshop.min.js (cdn.mantel.com) | 45 KB | 🏠 |
| analytics.js (Universal Analytics) | 21 KB | 🌐 |
| popper.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |
| hammer.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |

### /elektrische-fiets

| Bestand | Grootte | Partij |
|---------|---------|--------|
| gtag/js GA4 G-ZWL5MLSRCG | 176 KB | 🌐 |
| gtag/js Google Ads AW-973242963 (1) | 174 KB | 🌐 |
| gtag/js Google Ads AW-973242963 (2) | 173 KB | 🌐 |
| gtag/js GA4 G-BEKBFTMC5K | 158 KB | 🌐 |
| gtag/js UA UA-335661-2 | 123 KB | 🌐 |
| gtm.js (GTM-P88DLMF) | 116 KB | 🌐 |
| webshop.min.js (cdn.mantel.com) | 45 KB | 🏠 |
| analytics.js (Universal Analytics) | 20 KB | 🌐 |
| popper.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |
| hammer.js (cdnjs.cloudflare.com) | 7 KB | 🌐 |

---

## Aanbevelingen

### Hoge prioriteit

- **[TTFB — 1.084 ms gemiddeld, alle pagina's boven norm]** De serverresponstijd is op elke pagina meer dan vijf keer de aanbevolen norm (<200 ms). Op /fietskleding bedraagt de TTFB zelfs 1.735 ms. Dit vertraagt alle overige metrieken direct: de browser kan niet beginnen met renderen totdat de eerste byte is ontvangen. Schakel full-page caching in voor categoriepagina's via de reverse proxy of CDN (edge caching), of implementeer server-side caching zodat HTML niet bij elk verzoek opnieuw wordt gegenereerd.
  - Getroffen pagina's: alle 5
  - Verwachte impact: TTFB daalt van ~1.000 ms naar <200 ms; LCP volgt met ~1 sec verbetering

- **[LCP — 4.310 en 4.526 ms op /fietsen en /elektrische-fiets]** Op beide categorieën worden 59–71 productafbeeldingen geladen met een gecombineerd gewicht van 2,1–2,4 MB. Dit resulteert in LCP-tijden van meer dan 4 seconden. Activeer lazy loading voor afbeeldingen buiten de viewport (`loading="lazy"`), converteer afbeeldingen naar WebP/AVIF, en beperk het initieel geladen aantal producten. Pre-load de LCP-kandidaat via `<link rel="preload">`.
  - Getroffen pagina's: /fietsen (LCP 4.310 ms), /elektrische-fiets (LCP 4.526 ms)
  - Verwachte impact: LCP daalt van >4.300 ms naar <2.500 ms op beide pagina's

### Gemiddelde prioriteit

- **[Drie overlappende analyticstags (GA4 × 2, Universal Analytics, GTM)]** Op alle pagina's worden twee GA4-accounts (G-ZWL5MLSRCG + G-BEKBFTMC5K), de verouderde Universal Analytics (UA-335661-2), en GTM geladen — samen goed voor ~630 KB aan scriptlading enkel voor analytics. Universal Analytics is in juli 2024 stopgezet door Google; de UA-tag en `analytics.js` kunnen worden verwijderd. De twee GA4-accounts moeten worden geëvalueerd op noodzaak — consolidatie naar één account bespaart ~160 KB per pagina.
  - Getroffen pagina's: alle 5

- **[Google Ads-tag dubbel geladen op 3 pagina's]** Op /fietskleding, /fietsen en /elektrische-fiets wordt de Google Ads-tag AW-973242963 twee keer geladen (~173–174 KB × 2 = ~347 KB). Dit is vermoedelijk een configuratiefout in GTM. Verwijder de dubbele tag-trigger.
  - Getroffen pagina's: /fietskleding, /fietsen, /elektrische-fiets

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-mantel-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
