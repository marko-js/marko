---
"@marko/runtime-tags": patch
---

Stop the compiler hanging on a dynamic tag name that resolves through cyclic `<const>` tags. Classifying a `<${...}>` tag name walks the bound expression, following `<const>` values with no visited set, so a self-referential `<const/x=x/>` or a mutually-referential `<const/a=b/><const/b=a/>` used as a tag name looped forever during analysis. The walk now records the expressions it has visited: a self-reference surfaces the existing `Tag variable circular references are not supported.` error instead of hanging, and a mutual cycle resolves like any other dynamic tag.
