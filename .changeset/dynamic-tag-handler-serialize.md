---
"@marko/runtime-tags": patch
---

State read by event handlers spread onto a dynamic tag from a `<const>` now serializes for resume; previously the handlers were wired after resume but read their state as `undefined`.
