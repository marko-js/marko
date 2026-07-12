---
"marko": patch
---

Fix an infinite recursion in dev mode (`hot: true`) when using `with { load }` imports, where the lazy facade collided with the real template in the hot-reload cache and recursed on render. Since dev loads every module eagerly, these imports now compile as normal eager imports under hot reload; production builds are unchanged.
