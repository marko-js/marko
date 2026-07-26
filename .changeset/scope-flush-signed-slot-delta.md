---
"@marko/runtime-tags": patch
---

Write scope slot deltas in the resume payload as signed. The writer only emitted a delta when the next scope id was higher than the cursor, so a scope flushed after one with a larger id emitted none at all and its props landed in whichever slot the cursor held. The client already accumulates signed deltas, so only the writer changed.
