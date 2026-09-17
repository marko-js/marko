---
"@marko/runtime-tags": patch
---

A patch no longer re-seeds the body of a dynamic tag it keeps paired: when no entry ships for the tag, the live branch stays, so an unfed hole inside it (a value with nothing request-derived behind it) is left as the page rendered it.
