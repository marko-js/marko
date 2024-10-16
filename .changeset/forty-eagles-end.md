---
"@marko/translator-tags": patch
"@marko/compiler": patch
"marko": patch
---

Remove the default cache auto clearing behavior.
Previously the default compiler "cache" was cleared every setImmediate. This was to support server hot reloading in apps using `Lasso` (and `browser-refresh`). Since we brought back support for `browser-refresh` in the Marko package we now clear this cache when browser-refresh triggers a change making the default cache clearing redundant.
