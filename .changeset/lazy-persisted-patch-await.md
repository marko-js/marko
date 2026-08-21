---
"@marko/runtime-tags": patch
---

`applyPatch` now returns `boolean | Promise<boolean>`: a frame carrying data
for a not-yet-loaded lazy module resolves once the module arrives (or rejects
as `false` when a load fails, so callers can fall back to navigation).
