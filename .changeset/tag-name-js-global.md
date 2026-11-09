---
"@marko/runtime-tags": patch
---

A tag named like a JavaScript built-in (`<Map/>`, `<Date/>`) with no tag file now reports "Unable to find entry point" instead of "Local variables must be in a dynamic tag", since nothing declares that name.
