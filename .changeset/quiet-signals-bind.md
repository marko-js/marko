---
"@marko/runtime-tags": patch
---

A native tag attribute whose whole value is `$signal` (as a `class` object's value, a controlled attribute, or beside a spread) no longer compiles to an unbound `$signal`, which threw a `ReferenceError`.
