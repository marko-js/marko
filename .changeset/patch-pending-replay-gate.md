---
"@marko/runtime-tags": patch
---

Gate a patch page's pending closure replay the same way as its subscription, so a server-owned value the page never received is not replayed against `undefined` when its `<try>` body lands.
