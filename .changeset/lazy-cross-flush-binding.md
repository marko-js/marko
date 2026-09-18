---
"@marko/runtime-tags": patch
---

A value serialized in an earlier flush and read once later is referenced by its path instead of being bound to a register first; the binding is claimed only if it is read again.
