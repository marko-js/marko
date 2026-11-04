---
"@marko/runtime-tags": patch
---

Fix a `<define>` tag called with arguments it never reads, whose body is read through the param after them (`<X(n)>hi</X>` with `|a, opts|`): the client compile no longer crashes, and the server render no longer passes the body as the first argument.
