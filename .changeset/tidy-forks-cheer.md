---
"@marko/runtime-tags": patch
---

Normalize void and empty-string attribute values consistently across SSR and CSR. A generic dynamic attribute with an empty string now renders as a present (bare) attribute matching the server output, instead of being removed on the client. For controllable form values (`checkedValue`, `<select>`/`<option>` value), `null`/`undefined`/`false`/`""` are all treated as the same empty value, so a void binding matches an empty `value` or `<option value="">` placeholder — the same on the server and the client.
