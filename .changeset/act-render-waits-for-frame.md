---
"@marko/runtime-tags": patch
---

Add an internal `_defer_frame` that moves the current flush to the next animation frame, so an act's render can't change a form or link before the browser or router reads it.
