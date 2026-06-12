---
"@marko/runtime-tags": patch
---

Fix reference tracking for array rest elements in tag params and destructuring patterns (reads through the rest were tracked against shifted indices).

Fix assigning `undefined` to `<let>` and derived values not applying when the value had never been set, and only handle `valueChange` for `<let>` tags that statically use it.
