---
"@marko/runtime-tags": patch
"marko": patch
---

Client page entries now link the interactive roots of a template tree instead of the root-most template, so a Class API layout wrapping Tags API components is no longer pulled into the client bundle.
