---
"@marko/runtime-tags": patch
---

Separate a template's static text edges so they cannot merge with a parent's adjacent text into a single DOM node, which desynchronized the client-side walk and left later accessors undefined.
