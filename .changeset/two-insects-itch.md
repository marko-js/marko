---
"@marko/runtime-tags": patch
---

Skip creating an `AbortController` for an expression that only uses `$signal` to set `onabort`; its cleanup runs directly on teardown.
