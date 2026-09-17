---
"@marko/runtime-tags": patch
---

A dynamic tag whose renderer a patch neither refills nor treats as client-owned now keeps its live branch paired without shipping an entry or its shell again: its body renders outside the branch id context that seeds unfed holes, so the patch carries only the body's own changes.
