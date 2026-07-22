---
"@marko/runtime-tags": patch
---

Give the lazy-asset trigger loader a block body so it always returns `undefined`. Previously, when two or more `|`-separated triggers both fell back to loading (their selectors absent), the second fallback returned the truthy HTML string and the `visible`/`on-*` guards ran `observe(...)`/`addEventListener(...)` on it, throwing a `TypeError`.
