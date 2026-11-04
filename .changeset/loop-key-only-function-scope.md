---
"@marko/runtime-tags": patch
---

Fix a function resumed from inside a `<for>` (a handler passed to a tag, a `<const>` function, a `valueChange`) that reads only the loop key, such as `item.id` with `by="id"` or the index, compiling without its scope and throwing `$scope is not defined` when called.
