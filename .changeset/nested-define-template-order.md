---
"@marko/runtime-tags": patch
---

A `<define>` tag declared and rendered inside another `<define>` body no longer makes the client module throw `ReferenceError: Cannot access '…__walks' before initialization` when it loads.
