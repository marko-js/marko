---
"@marko/runtime-tags": patch
---

Abort a `$signal` read in `<lifecycle>` (or another tag whose attributes update together, like a dynamic tag) when those attributes update, and report the debug warning for an unserialized `$global` key read there or in an `<if>` condition.
