---
"@marko/compiler": patch
---

`getRuntimeEntryFiles`, `getRuntimeVersion` and `taglib.buildLookup`, called without a translator, now use the `translator` set through `configure()`, as compiles do, instead of the one detected from `package.json`.
