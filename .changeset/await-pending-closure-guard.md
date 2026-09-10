---
"@marko/runtime-tags": patch
---

Fix resume error ("Cannot read properties of undefined (reading 'data')") when a non-serialized value such as `input` is read inside an `<await>` body under a `<try>` with `<@placeholder>`: the pending closure effect is now gated on the same serialize reason as the value it reads.
