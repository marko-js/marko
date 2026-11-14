---
"@marko/runtime-tags": patch
---

Shrink server code for values whose resume marker is never written, such as a `<define>` param every call passes a constant: the server writes the value directly instead of calling a marker helper that writes nothing.
