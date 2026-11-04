---
"@marko/runtime-tags": patch
---

Fix a `<define>` tag called with fewer arguments than it has params rendering differently in the browser: the params past the arguments are now `undefined` there too, so their defaults apply, rather than the first holding an empty input object.
