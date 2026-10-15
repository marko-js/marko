---
"@marko/runtime-tags": patch
---

A `<define>` tag variable's value, and a recursive call's, now depends on what its call passes, as a custom tag's already did, rather than on the params of the content it renders. A variable computed only from input no longer makes the page resume what reads it.
