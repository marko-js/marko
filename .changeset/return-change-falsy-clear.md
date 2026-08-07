---
"@marko/runtime-tags": patch
---

A `<return valueChange>` that becomes falsy now revokes the tag-variable change handler, so later parent assignments are readonly (debug error / no-op) instead of silently mutating through the stale handler.
