---
"@marko/runtime-tags": patch
---

Trim the client runtime: values that are never `null` are tested with `== null`, and a resume payload's scopes are applied by their truthiness rather than `Array.isArray`.
