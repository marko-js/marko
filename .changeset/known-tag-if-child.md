---
"@marko/runtime-tags": patch
---

Fix a bound PascalCase tag (eg `<Layout>`) compiling as a dynamic tag when its direct child is a control flow tag such as `<if>`.
