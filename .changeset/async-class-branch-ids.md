---
"@marko/runtime-tags": patch
---

Fix "too much recursion" on resume when several async Marko 5 components rendered inside a tags template settled together and shared a branch id.
