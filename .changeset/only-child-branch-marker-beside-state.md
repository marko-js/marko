---
"@marko/runtime-tags": patch
---

Resume an `<if>`, `<for>` or `<show>` that is its element's only child by its branch marker whenever its template has a branch fed by state the browser writes, even when its own condition never changes. That bundle already decodes branch markers, and the marker replaces the parent's branch list and each branch's link to its owner in the serialized data, so the server output is smaller.
