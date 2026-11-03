---
"@marko/runtime-tags": patch
---

Fix a `<const>` alias of `input` or a tag parameter (or a value destructured from one) not rendering when an event handler also reads it, and let handlers read any alias without re-attaching on every change.
