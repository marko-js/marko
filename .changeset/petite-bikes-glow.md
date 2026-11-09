---
"@marko/runtime-tags": patch
---

Resolve a branch's parsed markup from its content instead of rebuilding a cache key from the whole template on every clone, which speeds up creating loop rows and conditional branches.
