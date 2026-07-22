---
"@marko/runtime-tags": patch
---

Emit a single Class-API interop registration per renderer, instead of one for each tag occurrence, trimming the redundant scriptlets when the same class component is used multiple times in a template.
