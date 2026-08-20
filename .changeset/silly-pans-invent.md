---
"@marko/runtime-tags": patch
---

Report a compile error when a tags API template lazily imports a class API tag, instead of throwing `ReferenceError` at first render.
