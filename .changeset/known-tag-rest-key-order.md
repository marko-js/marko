---
"@marko/runtime-tags": patch
---

Keep the key order of a child tag's rest input, such as `...rest` from `<const/{ first, ...rest }=input/>`, the same in the browser as on the server when the parent passes attributes and attribute tags.
