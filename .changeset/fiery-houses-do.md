---
"@marko/runtime-tags": patch
---

Fix a function passed to a custom tag and returned by its `<return>` failing to serialize, so calling it in the browser after a change threw.
