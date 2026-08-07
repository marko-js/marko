---
"@marko/runtime-tags": patch
---

Events whose type collides with a `Function` property (`on-name`, `on-length`, …) now register their delegated listener instead of silently never firing.
