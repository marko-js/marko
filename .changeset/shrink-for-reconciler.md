---
"@marko/runtime-tags": patch
---

Shrink the `<for>` reconciler by dropping a redundant map. A keyed list update already builds a key→scope lookup; it now stashes each scope's old index on that same pass, so the longest-increasing-subsequence step that plans moves no longer allocates and fills a second scope→position `Map`. Same behavior, one fewer allocation per reordering update, and a slightly smaller runtime.
