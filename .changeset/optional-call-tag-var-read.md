---
"@marko/runtime-tags": patch
---

A tag variable called with optional chaining (`el?.()`, or a hoisted `focusIt?.()`) is read like a plain call instead of compiling to an undeclared identifier.
