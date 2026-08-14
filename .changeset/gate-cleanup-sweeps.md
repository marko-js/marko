---
"@marko/runtime-tags": patch
---

Tree-shake scope teardown's abort and subscription sweeps out of pages that use neither `$signal` nor closure subscriptions.
