---
"@marko/compiler": patch
---

`taglib.register()` now takes effect for translators that have already compiled; previously the per-translator taglib list was memoized forever and even the documented `taglib.clearCaches()` did not reset it.
