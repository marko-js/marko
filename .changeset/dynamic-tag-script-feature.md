---
"@marko/runtime-tags": patch
---

A dynamic tag's native branch registration now ships as a runtime feature module imported by the templates that need it, instead of a `_resume_dynamic_tag()` call emitted in each of them.
