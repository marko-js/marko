---
"@marko/compiler": patch
---

`getRuntimeEntryFiles`, `getRuntimeVersion` and `taglib.buildLookup` now follow what `configure()` sets, as compiles do. Called without a translator, they use the configured `translator` instead of the one detected from `package.json`, and `getRuntimeEntryFiles` uses the configured `optimize` before falling back to `MARKO_DEBUG`/`NODE_ENV`. A host that configures either no longer pre-bundles a runtime its templates never import.
