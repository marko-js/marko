---
"@marko/runtime-tags": patch
"marko": patch
---

Error when binding `value` on an input whose type is attribute-backed (checkbox, radio, hidden, button, submit, reset, image) — at compile time when the type is statically known, and as a dev-mode runtime error otherwise.
