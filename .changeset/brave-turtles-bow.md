---
"@marko/translator-tags": patch
"@marko/runtime-tags": patch
"marko": patch
---

Avoid using mutable exported bindings for stream data access in tags api. (It did not work in Vite/Rollup)
