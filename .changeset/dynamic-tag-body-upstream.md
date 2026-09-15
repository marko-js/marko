---
"@marko/runtime-tags": patch
---

A dynamic tag's body depends on the tag expression the way a branch body depends on its condition, so its scope only serializes when that expression can change client side.
