---
"@marko/runtime-tags": patch
---

Slightly reduce runtime size by removing a redundant `else { break; }` branch from the DOM and HTML controllable-attribute handlers.
