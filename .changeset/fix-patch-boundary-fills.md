---
"@marko/runtime-tags": patch
---

Fix missing reactive content when a patch creates an await boundary whose result is read together with client state, such as a draft pagination value.
