---
"@marko/runtime-tags": patch
---

Shrink client code for `<for to>` and `<for until>` loops: a loop whose `from` and `step` are constants uses the unkeyed loop, which needs no reordering, and an omitted or default `from` (0) or `step` (1) is no longer passed to the loop.
