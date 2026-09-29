---
"@marko/runtime-tags": patch
---

Fix interactive content inside an `<await>` stopping after resume once a later sibling `<if>` or `<for>` branch is removed. The removed branch had claimed the await content as its own, aborting its `$signal` and stopping its updates.
