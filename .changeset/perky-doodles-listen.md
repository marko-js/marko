---
"@marko/runtime-tags": patch
---

Fix `Cannot drop a merged reference` when a recursive tag call passes content the tag never renders and that content holds control flow such as `<if>` or `<for>`.
