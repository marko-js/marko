---
"@marko/compiler": patch
"marko": patch
"@marko/translator-default": patch
---

When duplicate taglib entries are found and merged, nullish values are now ignored. This means if you specify a property in a taglib it will not be unset by another (merged) taglib.
