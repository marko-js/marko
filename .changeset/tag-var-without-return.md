---
"@marko/runtime-tags": patch
---

A tag variable on a custom tag without a `<return>` is now a compile error, and a debug build throws when a dynamic tag with a tag variable renders content without one. A dynamic tag whose name is falsy now leaves its tag variable `undefined` in the browser, as on the server, including on its first render, instead of keeping the previous tag's value, and no longer takes its body's `<return>`.
