---
"@marko/runtime-tags": patch
---

Stop resuming every section around a tag variable that is read before its declaration in the same content (each enclosing `<if>`, `<for>`, `<await>`, `<try>` and tag body), as though the read came from outside them.
