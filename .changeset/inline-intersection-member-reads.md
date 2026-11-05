---
"@marko/runtime-tags": patch
---

Fix a client crash when an expression reads a `<const>` both whole and through a member beside another value computed from the same source, as in `${input.list.length + list.filter(fn).length + list.length}` with `<const/list=input.list/>`.
