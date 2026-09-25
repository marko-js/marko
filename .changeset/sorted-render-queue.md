---
"@marko/runtime-tags": patch
---

Keep the DOM render queue as a sorted array instead of a binary heap, which shrinks the client runtime and runs renders queued with the same key in the order they were queued.
