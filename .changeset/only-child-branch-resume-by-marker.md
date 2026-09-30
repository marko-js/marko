---
"@marko/runtime-tags": patch
---

Resume an unchanging `<if>`, `<for>` or `<show>` that is its element's only child by one branch marker when the template has a branch its state feeds, instead of a node marker plus the owner's branch list and each branch's owner in the resume payload.
