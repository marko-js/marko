---
"@marko/runtime-tags": patch
---

A tag named by a `<const>` that may be a template or nullish, such as `<const/x=show ? Tag : null>` then `<${x}>`, renders its body in place while the value is nullish instead of always rendering the template.
