---
"@marko/runtime-tags": patch
---

Only register a tag variable's `_var_resume` when the child scope actually serializes, dropping dead registrations from DOM output.
