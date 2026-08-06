---
"@marko/runtime-tags": patch
"marko": patch
---

Report the underlying error when serialization fails while flushing a Class-API page that renders Tags-API content, instead of emitting a resume script that fails in the browser as `M is not defined`.
