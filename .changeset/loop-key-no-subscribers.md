---
"@marko/runtime-tags": patch
---

Fix a resume error for a `<for>` loop's key read inside an `<await>` body whose content streams in after the loop, and stop sending a subscriber set for it: the key never changes within its row.
