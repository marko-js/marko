---
"@marko/runtime-tags": patch
---

Reuse an already hoisted serialize guard in the server output when a guard combines parameters of nested sections, instead of repeating the runtime check inline.
