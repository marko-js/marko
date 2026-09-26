---
"@marko/runtime-tags": patch
---

Treat `setImmediate` and `clearImmediate` as unserializable like any other server function instead of writing them into the resume script, where browsers lack both and the whole payload threw a `ReferenceError`.
