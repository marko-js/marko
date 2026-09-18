---
"@marko/runtime-tags": patch
---

Fix a patch navigation rejecting when awaited content settles before the flush carrying its tree goes out: each serialized item is now its own line, applied before the next evaluates, so a fill never references a tree the client has not applied.
