---
"@marko/runtime-tags": patch
---

A render-time hoist of a tag-variable alias no longer emits an undeclared `$name_getter`; it calls `_hoist_read_error` like other illegal hoist reads.
