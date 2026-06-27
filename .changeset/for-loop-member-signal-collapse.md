---
"@marko/runtime-tags": patch
---

Collapse pass-through signals for `<for>` and tag-body params that are only read by member access, shrinking the generated DOM bundle.
