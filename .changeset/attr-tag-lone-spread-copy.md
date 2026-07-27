---
"@marko/runtime-tags": patch
---

Stop an attribute tag whose attributes are a lone spread (`<@item ...obj/>`) from mutating the spread object itself, which added `Symbol.iterator` and an internal symbol to the caller's own data and threw on a frozen object.
