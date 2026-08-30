---
"@marko/runtime-tags": patch
---

Improve the `<show>` missing-`value=` error when the condition was written as another attribute: `<show if=cond>` now suggests `<show=condition>` and points the code frame at the offending attribute.
