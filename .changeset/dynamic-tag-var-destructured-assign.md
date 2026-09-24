---
"@marko/runtime-tags": patch
---

Assigning to a property destructured from a dynamic tag's variable (`<${tag}/{ value }/>` with `value++` in a handler) no longer throws `ReferenceError: $valueChange is not defined` on every server render. The assignment now calls the tag's returned `valueChange`, as it already did for a custom tag.
