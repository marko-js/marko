---
"@marko/runtime-tags": patch
---

Drop a `<const/b=a>` that nothing reads, together with an `a` only it read, instead of keeping both in the server output.
