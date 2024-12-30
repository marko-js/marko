---
"@marko/compiler": patch
"marko": patch
"@marko/runtime-tags": patch
"@marko/translator-interop-class-tags": patch
---

Avoid swallowing errors when resolved paths in marko.json files could not be resolve (now leaves the value as is, previously would ignore the path).
