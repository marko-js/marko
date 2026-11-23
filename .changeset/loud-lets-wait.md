---
"@marko/runtime-tags": patch
---

Assigning a tag variable in a function invoked where it is written while rendering (`${(() => { count = 1 })()}`) is now the same compile error as assigning it outside a function, and a debug build throws when a `<let>` is assigned while its scope first renders in the browser.
