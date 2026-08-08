---
"@marko/runtime-tags": patch
---

A native tag whose `content=` attribute evaluates statically (e.g. `<div content=undefined/>`) no longer aborts the browser-output compile with an internal error.
