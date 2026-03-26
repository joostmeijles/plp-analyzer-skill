# PLP Lighthouse Performancerapport — 2dehands

**Datum:** 2026-03-26
**Apparaat:** Mobiel (Lighthouse-simulatie)
**Geauditeerde URL's:** 5 (3 succesvol, 2 mislukt)

---

## Managementsamenvatting

De website van 2dehands scoort momenteel een 39 op performance. Dit betekent dat pagina's voor bezoekers merkbaar traag laden (5,7 sec) en niet altijd direct reageren. Deze vertragingen doorbreken de flow, zorgen voor frustratie en vergroten de kans dat bezoekers afhaken. Als je één ding moet weten: de huidige ervaring kost direct conversie en omzet.

---

## Aanbevelingssamenvatting

### Aanbeveling 1: Verminder de advertentiescriptlading (>3,3 MB per pagina)

Meer dan 80% van de totale scriptgrootte (3,3 MB) bestaat uit advertentiegerelateerde scripts: AWS WAF SDK (~500 KB), PubMatic programmatic ads (307 KB), Google Publisher Tags (186 KB), Confiant ad fraud detection (146 KB) en meerdere Google Ads/DoubleClick-tags. Dit veroorzaakt gemiddeld 1,8 seconden blokkering van de hoofdthread en trekt het LCP op naar ruim 5,5 seconden. Het team moet advertentiescripts uitstellen via `async`/`defer`, de WAF SDK onderzoeken op een server-side alternatief, en evalueren of het aantal ad-netwerken kan worden teruggebracht.

### Aanbeveling 2: Optimaliseer de Speed Index (gemiddeld 10.603 ms)

De visuele opbouwsnelheid is met meer dan 10 seconden extreem slecht — bezoekers zien de pagina stukje voor stukje verschijnen terwijl scripts worden uitgevoerd. Dit verhoogt de waargenomen laadtijd sterk en schaadt de eerste indruk. De oorzaak is de combinatie van zware advertentie- en analyticsbundels en een hoog aantal verzoeken (gemiddeld 356 per pagina). Naast scriptreductie kan server-side rendering van de initiële productgrid (Next.js heeft dit ingebouwd) de Speed Index aanzienlijk verlagen.

---

## Samenvatting

2dehands.be scoort gemiddeld 39 op performance over de drie succesvol geauditeerde pagina's — in de categorie Slecht. Van de vijf geauditeerde URL's konden er twee niet worden afgemaakt door een Lighthouse-fout. Het gemiddelde LCP van 5.706 ms is ruim boven de slechtscore (>4.000 ms). Het gemiddelde TBT van 1.792 ms is Slecht. CLS is met gemiddeld 0,028 goed. Het paginagewicht van gemiddeld 4,1 MB en gemiddeld 356 verzoeken per pagina worden gedomineerd door programmatische advertentietechnologie.

---

## Algemene gezondheid

| | Waarde | Status |
|--|--|--|
| Performancescore | 39/100 | 🔴 Slecht |
| Vindbaarheidscore (SEO) | 100/100 | 🟢 Goed |
| Gemiddeld paginagewicht | 4,1 MB | |
| Geanalyseerde pagina's | 3 van 5 | |

> Scores zijn het **gemiddelde** over de drie succesvol geauditeerde pagina's. Paginagewicht is de gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse.
> Status: 🟢 Goed ≥ 90 · 🟠 Verbetering nodig 50–89 · 🔴 Slecht < 50

---

## Technische stack

| | Waarde |
|--|--|
| CDN / Hosting | AWS CloudFront |
| Frontend framework | Next.js |

> CDN wordt bepaald op basis van HTTP-antwoordheaders (`x-amz-cf-id`). Framework wordt bepaald op basis van JavaScript-globals (`__NEXT_DATA__`).

---

## ⚠ Lighthouse-fouten

Twee URL's konden niet worden geaudit door een Lighthouse-fout (status: error). De overige drie pagina's zijn succesvol afgerond. Controleer de screenshots en logs voor details.

| Pagina | Status |
|--------|--------|
| /l/elektronische-apparatuur/ | ❌ Fout — geen Lighthouse-data |
| /l/muziek-en-instrumenten/ | ❌ Fout — geen Lighthouse-data |

---

## Core Web Vitals

| Metriek | Gemiddelde | Goed | Verbetering nodig | Slecht | Drempelwaarde |
|---------|------------|------|-------------------|--------|---------------|
| LCP (ms) | 5.706 | 0% | 0% | 100% | ≤ 2.500 ms |
| CLS | 0,028 | 100% | 0% | 0% | ≤ 0,1 |
| TBT (ms) | 1.792 | 0% | 0% | 100% | ≤ 200 ms |

---

## Statistieken per pagina

| Pagina | Performance Score | LCP | CLS | TBT | Paginagewicht | Status |
|--------|-------------------|-----|-----|-----|---------------|--------|
| /l/auto-s/ | 39/100 | 5.873 ms | 0,000 | 1.698 ms | 4,0 MB | 🔴 Slecht |
| /l/elektronische-apparatuur/ | — | — | — | — | — | ❌ Fout |
| /l/huis-en-inrichting/ | 37/100 | 5.583 ms | 0,075 | 2.135 ms | 4,3 MB | 🔴 Slecht |
| /l/muziek-en-instrumenten/ | — | — | — | — | — | ❌ Fout |
| /l/fietsen-en-brommers/ | 40/100 | 5.663 ms | 0,010 | 1.544 ms | 4,0 MB | 🔴 Slecht |

**Status** wordt bepaald door de performancescore: Goed ≥ 90, Verbetering nodig 50–89, Slecht < 50. Zie [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) voor een toelichting op de berekening van de score.

---

## Laadtijddetails

| Pagina | TTFB | FCP | Speed Index | TBT |
|--------|------|-----|-------------|-----|
| /l/auto-s/ | 335 ms | 2.612 ms | 10.819 ms | 1.698 ms |
| /l/elektronische-apparatuur/ | — | — | — | — |
| /l/huis-en-inrichting/ | 535 ms | 2.625 ms | 10.333 ms | 2.135 ms |
| /l/muziek-en-instrumenten/ | — | — | — | — |
| /l/fietsen-en-brommers/ | 492 ms | 2.587 ms | 10.657 ms | 1.544 ms |
| **Gemiddelde** | **454 ms** | **2.608 ms** | **10.603 ms** | **1.792 ms** |

---

## Paginagewicht

| | Waarde |
|--|--|
| Gemiddeld paginagewicht | 4,1 MB |
| Gemiddeld aantal verzoeken | 356 |

> Waarden zijn gemiddelden over de drie geauditeerde pagina's. Paginagewicht is de gecomprimeerde (overgedragen) grootte; de ongecomprimeerde grootte is doorgaans 3–4× groter.

---

## Resourceverdeling per pagina

| Pagina | Totaal | Scripts | Afbeeldingen | CSS | Lettertypen | Docs | Overig |
|--------|--------|---------|--------------|-----|-------------|------|--------|
| /l/auto-s/ | 4,0 MB (425 vz) | 3,2 MB (79) | 299 KB (104) | 59 KB (12) | 55 KB (3) | 152 KB (49) | 279 KB (178) |
| /l/elektronische-apparatuur/ | — | — | — | — | — | — | — |
| /l/huis-en-inrichting/ | 4,3 MB (333 vz) | 3,2 MB (77) | 517 KB (93) | 65 KB (25) | 169 KB (8) | 169 KB (27) | 196 KB (103) |
| /l/muziek-en-instrumenten/ | — | — | — | — | — | — | — |
| /l/fietsen-en-brommers/ | 4,0 MB (310 vz) | 3,2 MB (74) | 375 KB (87) | 60 KB (12) | 55 KB (3) | 138 KB (27) | 188 KB (107) |
| **Gemiddelde** | **4,1 MB** | **3,2 MB** | **397 KB** | **61 KB** | **93 KB** | **153 KB** | **221 KB** |

> Scripts van derden vormen >74% van het totale paginagewicht (gemiddeld >3,0 MB).

---

## JavaScript-bestanden per pagina

> Elke regel is één individueel JS-bestand. Gesorteerd op grootte (groot → klein). Max. 10 bestanden per pagina. 🏠 = eigen domein, 🌐 = derde partij.

### /l/auto-s/

| Bestand | Grootte | Partij |
|---------|---------|--------|
| AWS WAF SDK (edge.sdk.awswaf.com) | 488 KB | 🌐 |
| pwt.js (PubMatic) | 307 KB | 🌐 |
| gpt.js (Google Publisher Tags) | 181 KB | 🌐 |
| gtag/js (GA4) | 159 KB | 🌐 |
| gtm.js (GTM-NST8JGD) | 151 KB | 🌐 |
| Confiant ad quality | 142 KB | 🌐 |
| gtag/destination (Google Ads) | 132 KB | 🌐 |
| gtag/destination (Google Ads 2) | 132 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| gtag/destination (DoubleClick 2) | 127 KB | 🌐 |

### /l/huis-en-inrichting/

| Bestand | Grootte | Partij |
|---------|---------|--------|
| AWS WAF SDK (edge.sdk.awswaf.com) | 488 KB | 🌐 |
| pwt.js (PubMatic) | 307 KB | 🌐 |
| gpt.js (Google Publisher Tags) | 181 KB | 🌐 |
| gtag/js (GA4) | 159 KB | 🌐 |
| gtm.js (GTM-NST8JGD) | 151 KB | 🌐 |
| Confiant ad quality | 142 KB | 🌐 |
| gtag/destination (Google Ads) | 132 KB | 🌐 |
| gtag/destination (Google Ads 2) | 131 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| gtag/destination (DoubleClick 2) | 127 KB | 🌐 |

### /l/fietsen-en-brommers/

| Bestand | Grootte | Partij |
|---------|---------|--------|
| AWS WAF SDK (edge.sdk.awswaf.com) | 495 KB | 🌐 |
| pwt.js (PubMatic) | 307 KB | 🌐 |
| gpt.js (Google Publisher Tags) | 181 KB | 🌐 |
| gtag/js (GA4) | 159 KB | 🌐 |
| gtm.js (GTM-NST8JGD) | 151 KB | 🌐 |
| Confiant ad quality | 142 KB | 🌐 |
| gtag/destination (Google Ads) | 132 KB | 🌐 |
| gtag/destination (Google Ads 2) | 132 KB | 🌐 |
| gtag/destination (DoubleClick) | 127 KB | 🌐 |
| gtag/destination (DoubleClick 2) | 127 KB | 🌐 |

---

## Aanbevelingen

### Hoge prioriteit

- **[LCP — 5.706 ms gemiddeld, alle pagina's Slecht]** Alle geteste pagina's scoren ruim onder de LCP-norm. De scriptlading van derden (advertentietechnologie) domineert 80%+ van alle netwerkverzoeken en het scriptgewicht. Verschuif alle advertentie- en analyticstags naar uitgesteld laden, zodat de initiële HTML-render niet wordt geblokkeerd. Next.js biedt hiervoor `next/script` met `strategy="lazyOnload"`.
  - Getroffen pagina's: alle 3 geteste pagina's
  - Verwachte impact: LCP kan dalen van ~5.700 ms naar ~2.500 ms; TBT van ~1.800 ms naar <400 ms

- **[TBT — 1.792 ms gemiddeld]** Het hoge aantal scripts van derden (avg 77 scriptverzoeken, 3,2 MB) blokkeert de hoofdthread langdurig. De AWS WAF client-side SDK (488–495 KB) is de grootste individuele file. Onderzoek of dit via een server-side regel kan worden vervangen zonder client-side laad.
  - Getroffen pagina's: alle 3 geteste pagina's

### Gemiddelde prioriteit

- **[Speed Index — 10.603 ms gemiddeld]** De visuele voltooiingstijd is meer dan drie keer de norm. Naast scriptoptimalisatie: activeer of verbeter server-side rendering (SSR) of statische generatie (SSG) voor de initiële productgrid via Next.js, zodat content direct zichtbaar is zonder te wachten op JavaScript.
  - Getroffen pagina's: alle 3 geteste pagina's

- **[Lighthouse-fouten op 2 van 5 pagina's]** /l/elektronische-apparatuur/ en /l/muziek-en-instrumenten/ konden niet worden geaudit. Voer een herbeoordeling uit op deze pagina's en onderzoek eventuele specifieke blokkering of renderfouten.

---

## Methodologie

- **Tool:** `tools/lighthouse-runner.js` (Puppeteer + Lighthouse npm-pakket)
- **Apparaat:** Mobiele simulatie — 390×844 viewport, 3× DPR, 4× CPU-throttling, gesimuleerd 4G-netwerk
- **Geauditeerde categorieën:** Performance + SEO (Vindbaarheid)
- **Cookiebanners:** Weggedrukt door Puppeteer vóór elke run (iframe consent-flow gedetecteerd op 2dehands.be). Screenshots opgeslagen in `temp/screenshot-2dehands-{n}.png` voor visuele verificatie.
- **TBT:** Total Blocking Time — meet de totale tijd dat de hoofdthread geblokkeerd is voor gebruikersinteractie tijdens het laden. Drempelwaarden: Goed ≤ 200 ms, Verbetering nodig 200–600 ms, Slecht > 600 ms.
- **Paginagewicht:** Gecomprimeerde (overgedragen) grootte zoals gerapporteerd door Lighthouse's `total-byte-weight`-audit.
