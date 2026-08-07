---
"@marko/runtime-tags": patch
---

A duplicate `value`/`valueChange` attribute on `<return>` is now a compile error instead of producing code that throws a `ReferenceError` at render time.
