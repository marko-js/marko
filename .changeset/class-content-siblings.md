---
"marko": patch
"@marko/runtime-tags": patch
---

Stop a client-rendered Class component crashing on rerender when it passes content to two or more sibling Tags components that each render it, and render Class content inside a Tags component against the page's `$global` in production builds, not an empty object.
