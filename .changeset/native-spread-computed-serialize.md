---
"@marko/runtime-tags": patch
---

A value spread onto one element and passed through a function in another element's spread (`<div ...attrs/>` with `<div ...withCount(attrs, count)/>`) is now serialized, so that spread keeps the value when it re-runs after resume.
