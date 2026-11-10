---
"@marko/runtime-tags": patch
---

An `<if>` or `<for>` whose condition reads a tag variable its child's `<return>` changes in the browser now links each branch's owner from its resume marker instead of serializing it, as one reading client-assigned state already did.
