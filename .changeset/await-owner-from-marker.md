---
"@marko/runtime-tags": patch
---

A resumed `<await>` body no longer serializes a link to its owner scope: the branch marker `<await>` writes beside the body already gives resume the owner, as it does for `<if>` and `<for>`.
