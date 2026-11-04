---
"@marko/runtime-tags": patch
---

Render a class read from a `server` stylesheet import on the client as the `undefined` the import is there, as for any other `server` value, instead of dropping the client write depending on translation order.
