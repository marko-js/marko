---
"@marko/runtime-tags": patch
---

Encode a call site's serialize reason as two bits per param-reason group, composing dynamic guards arithmetically instead of allocating a keyed object.
