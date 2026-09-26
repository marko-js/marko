---
"@marko/runtime-tags": patch
---

A template whose only client work lives in branches that read a tag variable from a sibling branch no longer fails to load with `$setup is not defined`. A `<define>` body that renders itself before its event handlers or other setup work now runs that setup in every nested call, not only the outermost one.
