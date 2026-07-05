---
"@marko/runtime-tags": patch
---

Shrink persisted-document node markers with a same-scope continuation form.
Persisted pages emit a node marker for every patch address, and consecutive
markers usually belong to the same scope, so runs now omit the repeated scope
id (`<!--M_* b-->` instead of `<!--M_*13 b-->`); the resume walker keeps the
mirror register and resets it on every branch marker, matching the writer's
per-chunk register resets at async/structural boundaries. The continuation
payload leads with a space so its key in the inline walker lookup stays
disjoint from the reorder runtime's anchor keys. Non-persisted documents are
byte-identical.
