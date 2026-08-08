---
"@marko/runtime-tags": patch
---

Escape sequences in a template-literal tag name (e.g. ``<${`h\x31`}>``) are now decoded instead of reaching the emitted markup verbatim.
