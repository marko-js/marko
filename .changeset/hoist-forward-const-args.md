---
"@marko/runtime-tags": patch
---

Pass arguments through to a `<const>` function that is called before it is declared; every argument was previously dropped, so the target ran with `undefined` parameters and no warning.
