---
"@marko/runtime-tags": patch
---

Fix compiling a call with an `<if>` directly in its content when the called tag leads back to the calling template: a tag calling itself overflowed the stack, and a cycle through another tag could build client code that threw as it loaded.
