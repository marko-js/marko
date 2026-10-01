---
"@marko/runtime-tags": patch
---

Resume each `<if>`, `<for>` and `<show>` by its own condition. One whose condition reads only input no longer resumes as though it could change in the browser just because another tag of the same kind in the same content has a condition that reads state.
