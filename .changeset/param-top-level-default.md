---
"@marko/runtime-tags": patch
---

Fix default values on top level tag parameters (eg `<my-tag|a, b = a|>`) being dropped in the DOM output, which caused a crash or stale content client side.
