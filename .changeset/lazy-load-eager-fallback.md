---
"@marko/runtime-tags": patch
"marko": patch
---

Compile lazy `with { load }` imports as normal eager tag imports when the `linkAssets` compiler option isn't configured (eg `@marko/vite` with `linked: false`), instead of throwing.
