---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

An analyze error in a template loaded for a tag is now reported against that template's file. Previously the parent re-recorded it, printing the parent's filename and code frame at the child's line and column.
