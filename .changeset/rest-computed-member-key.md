---
"@marko/runtime-tags": patch
---

A binding used as a computed member key on an assignment, such as `obj[key] = 1`, is now only read: a `<const>` rest binding there no longer fails to compile, and other keys keep their per-property updates.
