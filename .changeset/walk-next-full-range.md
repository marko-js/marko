---
"@marko/runtime-tags": patch
---

Use the whole `next` walk-code range. Codes 87-91 were reserved for it but never emitted, so a run of 20-24 nodes spent a redundant multiplier character (and 200-249 spent two).
