---
"@marko/runtime-tags": patch
---

Server output for a `<define>` no longer keeps a write guard group that nothing writes, which shifted the index of every later guard.
