---
"@marko/runtime-tags": patch
---

Hoist a single `$global` read per template in HTML output so deferred callbacks close over the value instead of throwing when the render chunk is gone.
