---
"@marko/runtime-tags": patch
---

Let an exhaustive conditional that is a section's only content bound the section itself, so no marker or anchor nodes are created for it. A `<for>` over `<if>`/`<else>` now allocates one fewer node per item and renders no comment markers for the conditional.
