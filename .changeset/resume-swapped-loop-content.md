---
"@marko/runtime-tags": patch
---

Fix a crash after resume when a dynamic tag or a native tag's `content` switches between content an attribute tag `<for>` created, such as tabs. The switch now updates the content in place, as it already did in a client render.
