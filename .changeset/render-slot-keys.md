---
"@marko/runtime-tags": patch
---

Improve render queue speed and memory by storing pending render slots at the signal key; intersection pending counters move to complemented keys so the two cannot collide.
