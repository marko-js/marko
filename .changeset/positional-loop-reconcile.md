---
"@marko/runtime-tags": patch
---

Speed up in-place keyed list updates. The `<for>` reconciler rebuilt an O(n) key→scope lookup map on every update even when nothing had moved. It now reuses the branch at each position directly and only builds the map — from the remaining unmatched scopes — once a key first lands out of order.
