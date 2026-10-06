---
"@marko/runtime-tags": patch
---

Fix a stale value when one update changes a lazy tag's variable, returned from a tag nested in it, and another value read with it: the expression reading both now shows the latest of each, rendering once.
