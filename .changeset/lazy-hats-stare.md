---
"@marko/runtime-tags": patch
---

Compile a template the same whatever order its handlers come in: a property a handler reads beside an object it assigns in place no longer keeps a serialized slot of its own when the assigning handler comes first.
