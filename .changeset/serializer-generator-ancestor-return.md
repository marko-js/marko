---
"@marko/runtime-tags": patch
---

Fix a `SyntaxError` in the resume payload when a serialized generator returns one of its own ancestors, which emitted an assignment with no property to assign to and broke the whole page's resume.
