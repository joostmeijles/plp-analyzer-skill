# PLP Report — brekz.nl

**Date:** 2026-03-23
**Platform:** Custom ecommerce (flat-slug URL structure; no recognisable platform fingerprint from public signals)
**Language:** Dutch
**Products sold:** Pet supplies — dog food, cat food, bird food, rodent/rabbit supplies, accessories, toys, health products and pharmacy items for dogs, cats, birds and small animals
**Source:** https://www.brekz.nl/sitemap + https://www.brekz.nl/4_nl_0_sitemap.xml (XML sitemap index) + homepage nav crawl (WebSearch signals) + Google search signals

---

## Scoring Methodology

```
structuralScore = (isNavLinked ? 30 : 0) + (depth == 1 ? 20 : depth == 2 ? 10 : 0)
combinedScore   = structuralScore + googleScore
```

> productCount is listed as ? for all entries — HTML fetching was unavailable during this run, so product counts could not be retrieved from page source. The `productCount*2` term is therefore dropped from structuralScore per the skill rules.

**Google queries used:**
1. `site:brekz.nl sitemap` — sitemap discovery
2. `site:brekz.nl category hond kat vogel` — broad category discovery
3. `site:brekz.nl/hond` — dog sub-categories
4. `site:brekz.nl/kat` — cat sub-categories
5. `site:brekz.nl voer accessoires` — food and accessory pages
6. `site:brekz.nl hondenvoer kattenvoer` — food brand/type pages
7. `site:brekz.nl speelgoed training verzorging` — toy and care pages
8. `site:brekz.nl bench mand riem halsband` — equipment pages
9. `site:brekz.nl knaagdier konijn vis reptiel` — small animal pages
10. `hondenvoer kopen` — competitive ranking (no domain filter)
11. `kattenvoer kopen` — competitive ranking
12. `hondenriemen kopen goedkoop` — competitive ranking
13. `kattenbakken kopen goedkoop` — competitive ranking
14. `hondenaccessoires kopen online` — competitive ranking
15. `kattenspeelgoed kopen online` — competitive ranking

**Nav-linked categories (10):** alles-voor-de-hond, kat, vogels, knaagdier, merken-droog-hondenvoer, merken-kattenvoer, hondenaccessoires, hondenriemen, kattenspeelgoed, kattenbakken

> Note: Brekz.nl uses a flat single-slug URL structure (e.g. `/merken-droog-hondenvoer`, `/kattenspeelgoed`). All identified PLPs are effectively depth=1. There is no nested path hierarchy like `/category/sub-category`. This means the depth bonus is uniformly 20 for every page, and structural differentiation comes primarily from the nav-linked signal and Google scores.

---

## Top 5 PLPs

| Rank | URL | Combined | Structural | Google | Products | Depth | Nav-Linked |
|------|-----|----------|------------|--------|----------|-------|------------|
| 1 | https://www.brekz.nl/hondenriemen | 60 | 50 | 10 | ? | 1 | Yes |
| 2 | https://www.brekz.nl/merken-droog-hondenvoer | 57 | 50 | 7 | ? | 1 | Yes |
| 3 | https://www.brekz.nl/hondenaccessoires | 56 | 50 | 6 | ? | 1 | Yes |
| 4 | https://www.brekz.nl/kattenspeelgoed | 54 | 50 | 4 | ? | 1 | Yes |
| 5 | https://www.brekz.nl/alles-voor-de-hond | 50 | 50 | 0 | ? | 1 | Yes |

> The top 5 are all nav-linked depth-1 pages. The ranking is decided entirely by Google scores because structural scores are equal across all nav-linked depth-1 pages. /hondenriemen ranks first because it appeared at position 1 in the "hondenriemen kopen goedkoop" query (score +10). /merken-droog-hondenvoer ranks second from position 4 in "hondenvoer kopen" (+7). /hondenaccessoires from position 5 in "hondenaccessoires kopen online" (+6). /kattenspeelgoed from position 7 as /kattenspeeltjes in "kattenspeelgoed kopen online" (+4).

---

## Full Ranked PLP List

### Tier A — Combined ≥ 40

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.brekz.nl/hondenriemen | 60 | 50 | 10 | 1 | Yes |
| https://www.brekz.nl/merken-droog-hondenvoer | 57 | 50 | 7 | 1 | Yes |
| https://www.brekz.nl/hondenaccessoires | 56 | 50 | 6 | 1 | Yes |
| https://www.brekz.nl/kattenspeelgoed | 54 | 50 | 4 | 1 | Yes |
| https://www.brekz.nl/alles-voor-de-hond | 50 | 50 | 0 | 1 | Yes |
| https://www.brekz.nl/kat | 50 | 50 | 0 | 1 | Yes |
| https://www.brekz.nl/vogels | 50 | 50 | 0 | 1 | Yes |
| https://www.brekz.nl/knaagdier | 50 | 50 | 0 | 1 | Yes |
| https://www.brekz.nl/merken-kattenvoer | 50 | 50 | 0 | 1 | Yes |
| https://www.brekz.nl/kattenbakken | 50 | 50 | 0 | 1 | Yes |

### Tier B — Combined 30–39

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.brekz.nl/natvoer-hond | 20 | 20 | 0 | 1 | No |

> No pages fall in the 30–39 range. The flat URL structure of brekz.nl means non-nav-linked pages still score 20 (depth-1 bonus), which places them in Tier C. There is a gap between nav-linked (50+) and non-nav-linked (20) pages.

### Tier C — Combined 18–29

| URL | Combined | Structural | Google | Depth | Nav-Linked |
|-----|----------|------------|--------|-------|------------|
| https://www.brekz.nl/natvoer-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/puppyvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/levensfase-hondenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/rassen-voer-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/natuurlijk-hondenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/graanvrij-hondenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/huismerk-hondenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/honden-dierenartsvoerdieetvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenvoer-grote-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenvoer-kleine-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenvoer-middelgrote-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenhalsbanden | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondentuigjes | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenbench | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenmand | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenkussens | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hond-mee-op-reis | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/speelgoed-honden | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/training-speelgoed-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/apporteer-speelgoed-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/piep-speelgoed-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/Snackspeeltjes | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hondenapotheek | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/supplementen-hond | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/voerbakken-en-drinkfonteinen | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/zichtbaar-in-het-donker | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/flexi-hondenriemen | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/orijen-hondenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/brit-hondenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/fokker-hondenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/voer-volwassen | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/petstages-hondenspeelgoed | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/natvoer-kat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/kitten | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/voer-volwassen-kat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/senior-kat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/levensfase-kat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/kittenspeeltjes | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/interactieve-snackspeeltjes-kat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/kattenmandjes | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/accessoires-kat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/kattenhalsbandjes-en-tuigjes | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/kattenluiken | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/kattenapotheek | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/katten-huid-en-vachtproblemen | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/orijen-kattenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/royal-canin-kattenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/hills-kattenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/huismerk-kattenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/fokker-kattenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/smolke-kattenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/royal-canin-veterinary-diet-kattenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/kattenvoer-met-kip | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/voederautomaat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/perzische-kat | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/merken-vogelvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/parkiet-vogelvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/tuinvogel-voer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/vogelaccessoires | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/vogelvoer-versele-laga | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/wildzang-vogelvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/nutribird-vogelvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/duif-vogelvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/exoten-vogelvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/neophema-vogelvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/merken-knaagdiervoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/versele-laga-knaagdieren | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/knaagdieren-voeding | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/konijnenvoer | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/snacks-konijnen | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/knaagdieraccessoires | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/verzorging-knaagdieren | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/royal-canin-dierenvoeding | 20 | 20 | 0 | 1 | No |
| https://www.brekz.nl/biofood-dierenvoeding | 20 | 20 | 0 | 1 | No |

### Tier D — Combined 10–17

*No pages in this tier.* All identified PLPs are depth-1 (score 20) or nav-linked depth-1 (score 50+). No depth-2+ pages were discovered.

### Tier E — Combined < 10

*No pages in this tier.*

---

## Key Observations

1. **Flat URL architecture.** Brekz.nl uses a single-level slug structure — every PLP sits at `/slug` with no nested subdirectory paths. This collapses all pages to depth=1, making structural differentiation entirely dependent on the nav-linked signal. There are no depth-2 or depth-3 PLPs to discover.

2. **Dominant pet categories are dogs and cats.** The dog category drives the most PLP volume: dedicated pages for food by size class, breed, life stage, type (dry/wet/natural/grain-free), brand, and accessories. The cat category follows a similar pattern. Birds and rodents have narrower but non-trivial PLP catalogs.

3. **Strong Google visibility for hondenriemen and hondenaccessoires.** `/hondenriemen` appears at position 1 for "hondenriemen kopen goedkoop" and `/hondenaccessoires` at position 5 for "hondenaccessoires kopen online", suggesting these accessory categories have strong SEO authority relative to competitors like bol.com and Medpets.

4. **hondenvoer category has moderate Google visibility.** `/merken-droog-hondenvoer` ranks at position 4 for "hondenvoer kopen", behind VoerOnline, NatuurlijkHondenvoer, and Welkoop — indicating competitive pressure from specialist and multi-category retailers in the core food segment.

5. **Cat food pages are not ranking in competitive Google queries.** `/merken-kattenvoer` did not appear in the top 10 for "kattenvoer kopen", where Zooplus, Petsplace, Bol.com and Medpets dominate. This is a gap relative to the dog food category.

6. **Brand-specific PLPs are a significant part of the catalog.** Pages like `/orijen-hondenvoer`, `/royal-canin-kattenvoer`, `/brit-hondenvoer`, and `/fokker-kattenvoer` represent brand landing pages that function as PLPs. These are not nav-linked at the top level but serve long-tail and branded search intent.

7. **Product count data unavailable.** HTML fetching was blocked during this session. All product count values are unknown (?). The structural scoring formula excludes the `productCount*2` term as per skill rules. A follow-up run with HTML access would allow validation of which pages are true PLPs vs. thin or redirect pages.
