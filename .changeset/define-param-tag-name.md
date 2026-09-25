---
"@marko/runtime-tags": patch
---

The body of a dynamic tag named by a `<define>` param (`<define/Heading|input|><${input.as}>…</></define>`) is registered for the client only when some call of the define may pass a component, so a define only called with strings leaves the body, and what it reads, out of the bundle.
