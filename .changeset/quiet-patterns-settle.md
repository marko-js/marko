---
"@marko/runtime-tags": patch
---

A destructuring assignment to tag variables in a function nested in a render value (such as a handler an inline function returns) no longer writes them again with `undefined` on the client.
