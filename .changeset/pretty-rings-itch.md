---
"marko": patch
"@marko/runtime-tags": patch
---

On a page with Class API components, a Tags template renders a Class parent's content or attribute tag body wherever it renders content, through a native tag spread (`<div ...input.foo/>`), `content=` or a dynamic tag; a dynamic tag also renders one forwarded through a Class component. These previously rendered nothing or failed with `Invalid dynamic tag value`.
