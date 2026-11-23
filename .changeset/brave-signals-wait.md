---
"@marko/runtime-tags": patch
---

A `$signal` read in a native tag's attribute or spread now aborts when that attribute re-runs or its tag is removed, rather than right after every render.
