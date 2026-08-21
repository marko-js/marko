---
"@marko/runtime-tags": patch
---

Remove the reserved `_d` register id: the native dynamic tag attribute script now dispatches from its resume marker instead of a serialized effect id.
