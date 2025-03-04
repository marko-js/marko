---
"@marko/runtime-tags": patch
---

Deoptimize serializer assignments after 100 assignments to the same reference. This avoids an issue where 1192 assignments in a chain caused a Maximum callstack error in chrome.
