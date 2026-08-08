---
"@marko/runtime-tags": patch
---

Registered object/class methods with computed or static keys now keep those flags in browser output; a computed-key handler previously lowered to a literal key and silently wired nothing.
