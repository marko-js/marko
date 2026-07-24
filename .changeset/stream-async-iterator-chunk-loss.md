---
"@marko/runtime-tags": patch
---

Fix `template.render()`'s async iterator (`for await`) silently dropping HTML chunks — truncating the streamed document with no error — when the consumer took longer than a flush tick between reads. Buffered chunks are now retained until the consumer reads them.
