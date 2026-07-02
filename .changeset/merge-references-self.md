---
"@marko/runtime-tags": patch
---

Fix analysis of related controllable attributes merging an expression's references into itself, which duplicated its tracked reads.
