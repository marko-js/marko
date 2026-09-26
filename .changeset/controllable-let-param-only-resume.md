---
"@marko/runtime-tags": patch
---

Serialize a controllable `<let>`'s `valueChange` handler in a tag whose other state resumes only for its input, so when the parent passes constant input, an assignment after resume still calls the handler.
