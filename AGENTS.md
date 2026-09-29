# Project Architecture

- Shared public-page chrome lives in `SiteLayout`, while route files own page content and metadata, keeping navigation consistent across all pages.
- Product specifications live in `src/lib/products.ts` and render through one reusable category-page component, preventing content drift between categories.