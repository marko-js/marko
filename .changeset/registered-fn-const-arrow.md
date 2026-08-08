---
"@marko/runtime-tags": patch
---

Emit registered-function factories as const arrows so the minifier can fold them into their `_resume` registration call.
