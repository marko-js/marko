---
"@marko/runtime-tags": patch
---

Render a tag named by a destructured `<const>` (`<const/{ layout: Layout }=Child/>` then `<Layout/>`) as a dynamic tag, instead of as the template it destructures, which called a value that is not a template.
