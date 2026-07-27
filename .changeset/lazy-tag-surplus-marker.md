---
"@marko/runtime-tags": patch
---

Fix a lazily-loaded custom tag emitting a surplus comment marker, which shifted every later walk step in its section by one. An element with an event handler after a lazy tag bound to the wrong node, throwing `Cannot read properties of undefined` on mount.
