---
"@marko/runtime-tags": patch
---

A template whose only `$global` reads are unused values (`<const/unused=$global.foo/>`) no longer looks up `$global` in its server render.
