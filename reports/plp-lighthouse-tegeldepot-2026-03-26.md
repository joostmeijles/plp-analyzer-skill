# PLP Lighthouse Performancerapport — tegeldepot

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5

---

## Managementsamenvatting

De website van Tegeldepot scoort momenteel een 49 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (4,9 sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Saneer het zware scriptpakket van derden (>2,7 MB aan scripts per pagina)

Tegeldepot laadt gemiddeld 97 scripts per pagina, waarvan 55% van derden afkomstig is (YouTube, GTM, Google Ads, TikTok, Facebook, Barilliance, Flowbox, Squeezely). Dit blokkeert de pagina gemiddeld 1,2 seconden en vertraagt het zichtbaar worden van producten tot bijna 5 seconden. Bezoekers zien lange tijd een onvolledige of lege pagina. Het team moet overbodige scripts deactiveren, resterende scripts uitstellen via `async`/`defer`, en YouTube-embeds vervangen door een lichte nep-miniatuur die alleen bij klik laadt.

### Aanbeveling 2: Verlaag de serverresponstijd op /badkamermeubels (TTFB 1.304 ms)

De categoriepagina met het grootste assortiment (badkamermeubels) heeft een serverresponstijd van 1,3 seconden — bijna twee keer de overige pagina's. Dit is waarschijnlijk een caching-probleem: de server bouwt de HTML opnieuw op bij elk bezoek. Het activeren of corrigeren van full-page caching voor categoriepagina's kan de TTFB terugbrengen naar onder 300 ms en het LCP met 1–1,5 seconden verbeteren.

---

## Samenvatting

Tegeldepot.nl scoort gemiddeld 49 op performance — in de categorie Slecht. Het gemiddelde LCP van 4.868 ms is Slecht (grens: 4.000 ms); alle vijf pagina's halen niet de norm. Het gemiddelde TBT van 1.221 ms is eveneens Slecht, gedreven door een extreem zwaar scriptpakket van derde partijen dat 55% van de totale paginagrootte uitmaakt. De CLS is met gemiddeld 0,052 goed op alle pagina's. Het gemiddeld paginagewicht is 3,6 MB bij gemiddeld 257 verzoeken per pagina — aanzienlijk meer dan vergelijkbare sites.

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 49/100 | 🔴 Slecht |
| Vindbaarheidscore (SEO) | 92/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 3,6 MB | |
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

> CDN wordt bepaald op basis van HTTP-antwoordheaders. Framework wordt bepaald op basis van JavaScript-globals en DOM-markers. De site gebruikt Magento 1/Mage-achtige frontend (prototype.js, scriptaculous, Varien-bibliotheek zichtbaar in scriptpaden).

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 4.868 | 0% | 0% | 100% | ≤ 2.500 ms |
| CLS | 0,052 | 100% | 0% | 0% | ≤ 0,1 |
| TBT (ms) | 1.221 | 0% | 0% | 100% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /badkamermeubels | 47/100 | 4.818 ms | 0,053 | 1.082 ms | 3,6 MB | 🔴 Slecht |
| /kranen | 46/100 | 5.111 ms | 0,053 | 1.449 ms | 3,5 MB | 🔴 Slecht |
| /badkamer-accessoires | 48/100 | 5.028 ms | 0,052 | 1.259 ms | 3,6 MB | 🔴 Slecht |
| /douche | 53/100 | 4.581 ms | 0,052 | 1.177 ms | 3,6 MB | 🟠 Verbetering nodig |
| /tegels | 49/100 | 4.803 ms | 0,052 | 1.139 ms | 3,7 MB | 🔴 Slecht |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /badkamermeubels | 1.304 ms | 3.675 ms | 5.665 ms | 1.082 ms |
| /kranen | 603 ms | 3.828 ms | 3.828 ms | 1.449 ms |
| /badkamer-accessoires | 556 ms | 3.671 ms | 3.695 ms | 1.259 ms |
| /douche | 463 ms | 3.373 ms | 3.400 ms | 1.177 ms |
| /tegels | 603 ms | 3.671 ms | 4.422 ms | 1.139 ms |
| **Gemiddelde** | **706 ms** | **3.644 ms** | **4.202 ms** | **1.221 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 3,6 MB |
| Gemiddeld aantal verzoeken | 257 |

> Waarden zijn gemiddelden over alle geauditeerde pagina's. Paginagewicht is de gecomprimeerde
> (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /badkamermeubels | 3,6 MB (255 vz) | 2,7 MB (96) | 321 KB (88) | 186 KB (7) | 147 KB (6) | 119 KB (7) | 100 KB (51) |
| /kranen | 3,5 MB (249 vz) | 2,7 MB (97) | 266 KB (88) | 186 KB (7) | 146 KB (6) | 127 KB (7) | 96 KB (44) |
| /badkamer-accessoires | 3,6 MB (261 vz) | 2,7 MB (97) | 337 KB (99) | 186 KB (7) | 146 KB (6) | 120 KB (7) | 96 KB (45) |
| /douche | 3,6 MB (254 vz) | 2,7 MB (97) | 413 KB (92) | 186 KB (7) | 147 KB (6) | 110 KB (7) | 99 KB (45) |
| /tegels | 3,7 MB (264 vz) | 2,7 MB (97) | 515 KB (88) | 186 KB (7) | 147 KB (6) | 135 KB (7) | 98 KB (59) |
| **Gemiddelde** | **3,6 MB** | **2,7 MB** | **370 KB** | **186 KB** | **147 KB** | **122 KB** | **98 KB** |

> Formaat: `{grootte} ({aantal} vz)`. Groottes zijn gecomprimeerd (overgedragen).
> Scripts van derden vormen ~55% van het totale paginagewicht (gemiddeld ~3,0 MB).

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /badkamermeubels

| Bestand | Grootte | Partij |
|---------|---------|--------|
| player_embed_es6.js (YouTube) | 430 KB | 🌐 |
| www-embed-player-pc-es6.js (YouTube) | 294 KB | 🌐 |
| gtm.js (GTM-TKBFMR) | 179 KB | 🌐 |
| gtag/js (GA4) | 170 KB | 🌐 |
| gtag/js (GA4 duplicate) | 170 KB | 🌐 |
| guided-selling.js (Tweakwise) | 144 KB | 🌐 |
| gtag/js (Google Ads) | 141 KB | 🌐 |
| gtag/js (Google Ads cx) | 141 KB | 🌐 |
| main.js (TikTok pixel) | 110 KB | 🌐 |
| cbar.js.php (Barilliance) | 109 KB | 🌐 |

### /kranen

| Bestand | Grootte | Partij |
|---------|---------|--------|
| player_embed_es6.js (YouTube) | 430 KB | 🌐 |
| www-embed-player-pc-es6.js (YouTube) | 294 KB | 🌐 |
| gtm.js (GTM-TKBFMR) | 179 KB | 🌐 |
| gtag/js (GA4 cx) | 170 KB | 🌐 |
| gtag/js (GA4) | 170 KB | 🌐 |
| guided-selling.js (Tweakwise) | 144 KB | 🌐 |
| gtag/js (Google Ads cx) | 141 KB | 🌐 |
| gtag/js (Google Ads) | 141 KB | 🌐 |
| main.js (TikTok pixel) | 110 KB | 🌐 |
| cbar.js.php (Barilliance) | 109 KB | 🌐 |

### /badkamer-accessoires

| Bestand | Grootte | Partij |
|---------|---------|--------|
| player_embed_es6.js (YouTube) | 430 KB | 🌐 |
| www-embed-player-pc-es6.js (YouTube) | 294 KB | 🌐 |
| gtm.js (GTM-TKBFMR) | 179 KB | 🌐 |
| gtag/js (GA4 cx) | 170 KB | 🌐 |
| gtag/js (GA4) | 170 KB | 🌐 |
| guided-selling.js (Tweakwise) | 144 KB | 🌐 |
| gtag/js (Google Ads cx) | 141 KB | 🌐 |
| gtag/js (Google Ads) | 141 KB | 🌐 |
| main.js (TikTok pixel) | 110 KB | 🌐 |
| cbar.js.php (Barilliance) | 109 KB | 🌐 |

### /douche

| Bestand | Grootte | Partij |
|---------|---------|--------|
| player_embed_es6.js (YouTube) | 430 KB | 🌐 |
| www-embed-player-pc-es6.js (YouTube) | 294 KB | 🌐 |
| gtm.js (GTM-TKBFMR) | 179 KB | 🌐 |
| gtag/js (GA4 cx) | 170 KB | 🌐 |
| gtag/js (GA4) | 170 KB | 🌐 |
| guided-selling.js (Tweakwise) | 144 KB | 🌐 |
| gtag/js (Google Ads cx) | 141 KB | 🌐 |
| gtag/js (Google Ads) | 141 KB | 🌐 |
| main.js (TikTok pixel) | 110 KB | 🌐 |
| cbar.js.php (Barilliance) | 109 KB | 🌐 |

### /tegels

| Bestand | Grootte | Partij |
|---------|---------|--------|
| player_embed_es6.js (YouTube) | 430 KB | 🌐 |
| www-embed-player-pc-es6.js (YouTube) | 294 KB | 🌐 |
| gtm.js (GTM-TKBFMR) | 179 KB | 🌐 |
| gtag/js (GA4 cx) | 170 KB | 🌐 |
| gtag/js (GA4) | 170 KB | 🌐 |
| guided-selling.js (Tweakwise) | 144 KB | 🌐 |
| gtag/js (Google Ads) | 141 KB | 🌐 |
| gtag/js (Google Ads cx) | 141 KB | 🌐 |
| main.js (TikTok pixel) | 110 KB | 🌐 |
| cbar.js.php (Barilliance) | 109 KB | 🌐 |

---

## Aanbevelingen

### Hoge prioriteit

- **[LCP — 4.868 ms gemiddeld, alle pagina's Slecht]** Alle vijf pagina's halen niet de LCP-norm. De primaire oorzaken zijn een zware scriptlading van derden (>2,7 MB) die de rendering blokkeert, en op /badkamermeubels een hoge TTFB (1.304 ms). Activeer full-page caching voor categoriepagina's en verschuif alle niet-kritische scripts van derden naar uitgesteld laden.
  - Getroffen pagina's: alle 5
  - Verwachte impact: LCP kan dalen van ~4.900 ms naar ~2.000–2.500 ms

- **[TBT — 1.221 ms gemiddeld, alle pagina's Slecht]** De top-10 scripts bestaan volledig uit derde-partijscripts (YouTube, GTM, TikTok, Barilliance, Flowbox, Facebook, Squeezely). Tevens worden twee duplicaat Google Ads-tags geladen. Deactiveer de YouTube-embed bij paginalaad (gebruik een licht miniatuurplaatje als placeholder), verwijder duplicate tags en evalueer of alle advertentie- en personalisatietools noodzakelijk zijn.
  - Getroffen pagina's: alle 5
  - Verwachte impact: TBT daalt van ~1.200 ms naar <400 ms

### Gemiddelde prioriteit

- **[Verouderde JavaScript-stack]** De site laadt nog prototype.js, Scriptaculous en jQuery 1.12 — bibliotheken die al jaren niet meer onderhouden worden. Dit verhoogt de scripttelling (97 verzoeken gemiddeld) en het algehele laadgewicht. Een modernisering van de frontend naar een modulaire bundel zou het aantal verzoeken en de totale scriptgrootte fors reduceren.
  - Getroffen pagina's: alle 5

- **[TTFB — 1.304 ms op /badkamermeubels]** De serverresponstijd op de categoriepagina met het grootste assortiment is bijna drie keer zo hoog als de overige pagina's. Onderzoek of full-page caching actief is voor deze pagina en of de cache correct invalideert.
  - Getroffen pagina's: /badkamermeubels

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run; consentcookies geïnjecteerd in Lighthouse via `extraHeaders`. Screenshots opgeslagen in `temp/screenshot-tegeldepot-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
