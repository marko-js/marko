---
"@marko/runtime-tags": patch
---

Loop and conditional branches whose top-level content is statically countable no longer write start comments in server rendered HTML; the end marker carries the node count instead.
