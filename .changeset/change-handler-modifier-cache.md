---
"@marko/runtime-tags": patch
---

Mixing refined and plain bound attributes on the same variable (`value:parseInt:=x` and `value:=x`) now generates a change handler per refinement instead of reusing the first one for all.
