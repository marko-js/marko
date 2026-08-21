---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Report a child template's compile error instead of marking the parent tag unresolved, and name an imported tag in the missing-tag error rather than printing `<undefined>`.
