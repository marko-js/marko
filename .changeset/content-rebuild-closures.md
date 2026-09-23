---
"@marko/runtime-tags": patch
---

Content a parent builds again on the client after resume, such as a new item of an attribute tag `<for>` over changing input, now receives the values it reads from its parent (including a constant input or a never-assigned `<let>`) instead of rendering without them.
