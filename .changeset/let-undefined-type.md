---
"@marko/runtime-tags": patch
---

Fix `<let>` dropping `undefined` from an explicitly typed value, so `<let/x=undefined as Foo | undefined>` can be reassigned `undefined` again.
