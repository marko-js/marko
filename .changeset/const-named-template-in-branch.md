---
"@marko/runtime-tags": patch
---

A `<const>` that names a template, used as a tag name inside a `<for>` or `<if>` body (`<const/type=Card/><for|i| of=items><${type}/></for>`), no longer throws `render[Signal] is not a function` when the client renders that body. The tag renders its template directly, so the `<const>` is no longer kept or serialized for it.
