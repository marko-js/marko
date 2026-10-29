---
"@marko/runtime-tags": patch
---

Reading `$signal` in a server render reports through a debug-only runtime helper, so production server output no longer carries its error message.
