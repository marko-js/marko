---
"@marko/runtime-tags": patch
---

Fix a `<define>` called inside a dynamic tag's body losing the values it reads from outside when the component renders that body again after resume.
