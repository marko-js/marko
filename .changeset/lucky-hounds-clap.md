---
"@marko/runtime-tags": patch
---

Hold a branch's lone child directly instead of allocating a `Set` for it, cutting the cost of building and tearing down keyed lists.
