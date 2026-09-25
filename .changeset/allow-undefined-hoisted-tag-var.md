---
"@marko/runtime-tags": patch
---

Allow hoisted tag variables to be `undefined` in debug builds, fixing a false `Hoisted values must be functions` error when a dynamic tag with a falsy tag name does not render.
