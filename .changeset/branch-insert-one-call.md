---
"@marko/runtime-tags": patch
---

Insert a newly rendered branch (an `<if>` branch, a `<for>` row, a dynamic tag's content) with one DOM call instead of one per node, and move keyed `<for>` rows the same way. Rows of several nodes render faster, and the runtime is smaller.
