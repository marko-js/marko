---
"@marko/runtime-tags": patch
---

Fix resume error ("is not a function" / undefined value) when a derived value such as a function is called inside an `<await>` body under a `<try>` with `<@placeholder>`: the closure's value is now serialized whenever its pending replay effect is emitted.
