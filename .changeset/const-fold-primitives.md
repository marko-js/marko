---
"@marko/runtime-tags": patch
---

Fold `<const>` tags with statically known primitive values: bare references are baked into the static template output and reactive positions inline the literal, so the binding carries no reactive signal and is never serialized.
