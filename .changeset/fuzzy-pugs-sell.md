---
"@marko/compiler": patch
"marko": patch
---

Avoid using `typeof window` and prefer `typeof document` checks for browser environment (improves future deno support).
