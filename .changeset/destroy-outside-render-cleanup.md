---
"@marko/runtime-tags": patch
---

Run `<lifecycle>` `onDestroy` and abort in-flight `$signal` requests when a scope is destroyed outside a render, such as from a mounted template's `destroy()`.
