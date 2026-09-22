---
"@marko/runtime-tags": patch
---

A template that renders itself outside a branch, which never terminates, is now a compile error instead of a dom module that throws a `ReferenceError` when it loads.
