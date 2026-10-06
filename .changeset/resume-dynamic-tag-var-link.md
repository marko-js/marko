---
"@marko/runtime-tags": patch
---

Fix a dynamic tag's variable not updating after resume when the child's own scope had nothing else to send, such as a child whose `<return>` reads a `<let>` it never renders: the child's `<return>` now reaches the parent's variable.
