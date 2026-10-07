---
"@marko/runtime-tags": patch
---

A tag variable on a lazily loaded tag is now a compile error, and a debug build throws when a dynamic tag with a tag variable renders a lazily loaded template. Such a variable was `undefined` when rendered on the server, and a function it held could not resume.
