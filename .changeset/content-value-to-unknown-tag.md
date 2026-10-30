---
"@marko/runtime-tags": patch
---

Fix content passed as a value (an attribute, a spread, a `<const>`) to a tag that may resolve to a component losing the values it reads when that component renders it again after resume.
