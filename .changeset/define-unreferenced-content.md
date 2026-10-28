---
"@marko/runtime-tags": patch
---

A `<define>` whose tag variable is never referenced no longer ships its content: the server stops building and serializing what it reads, and the client stops subscribing to it.
