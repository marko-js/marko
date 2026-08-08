---
"@marko/runtime-tags": patch
---

Mark split class/style item writes as pure so a single-consumer derived binding compiles to a plain function instead of a `_const` signal with a scope slot.
