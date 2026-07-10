---
"marko": patch
---

Fix `TypeError: assetFlush is not a function` when using lazy-loaded components (`import ... with { load }`) in an optimized/production build. The generated page entry now resolves the `load-tag.js` helper through the same src→dist rewrite as every other runtime import, so the page and lazy-load wrappers share a single module instance.
