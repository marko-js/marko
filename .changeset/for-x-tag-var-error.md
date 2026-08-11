---
"@marko/runtime-tags": patch
---

Raise a compile error when a `for...of`/`for...in` assigns to a tag variable; it previously compiled to a silent scope write that never triggered a re-render.
