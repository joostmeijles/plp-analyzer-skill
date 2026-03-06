# PLP URL Patterns by Ecommerce Platform

## Shopify
- `/collections/*` — primary collection pages
- `/collections/all` — all products listing

## Magento
- `/category/*`
- `/c/*`
- `/[category-name].html` (with category breadcrumb depth > 1)

## WooCommerce
- `/product-category/*`
- `/shop`
- `/shop/*`

## BigCommerce
- `/category/*`
- `/[category-slug]/` (top-level slugs that are categories)

## SAP Commerce (Hybris)
- `/c/*`
- `/Open-Catalogue/*`
- `/[site]/[lang]/c/*`

## Salesforce Commerce Cloud (SFCC / Demandware)
- `/s/[site]/category/*`
- `/[site]/category/*`
- `cgid=` query parameter (category grid ID)

## PrestaShop
- `/[lang]/[n]-[category-name]`
- `/category/*`

## Commercetools / Custom
- `/browse/*`
- `/dept/*`
- `/department/*`
- `/brand/*`
- `/brands/*`
- `/listing/*`
- `/l/*`
- `/search` (if used as a browsable category page)

## Generic Signals (platform-agnostic)
- `/category/`
- `/categories/`
- `/collections/`
- `/collection/`
- `/shop/`
- `/browse/`
- `/dept/`
- `/department/`
- `/brand/`
- `/brands/`
- `/listing/`
- `/l/`
- `/search`
