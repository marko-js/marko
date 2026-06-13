---
"@marko/runtime-tags": patch
---

Recycle render-queue objects across flushes. Large cross-branch updates (e.g.
updating/selecting many rows) previously allocated one `PendingRender` per
branch on every flush; these objects are now pooled and reused, making such
updates allocation-free in steady state. Ordering and dedup are unchanged, so
behavior is identical — only allocation/GC pressure is reduced.
