---
"@marko/runtime-tags": patch
---

Carriage returns in server-rendered attribute values are now escaped as `&#13;`; the HTML parser previously normalized them to line feeds, diverging from client rendering.
