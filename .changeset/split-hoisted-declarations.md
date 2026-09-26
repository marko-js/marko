---
"@marko/runtime-tags": patch
---

Emit each module-scope declaration of the production runtime as its own statement so app bundlers can tree-shake them independently, dropping unused runtime code (such as branch insertion helpers) from resumed pages.
