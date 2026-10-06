---
"@marko/runtime-tags": patch
---

Report a compile error for a tag variable on a Marko 5 (class API) tag, which cannot `<return>` a value: the server rendered its readers with `undefined` while the browser never rendered them.
