---
"marko": patch
---

Correct the stepped-`<for>` TypeScript documentation example to use `step=2` (the increment) instead of `by=2` (the hydration key), which failed type-checking and silently iterated by one.
