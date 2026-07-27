---
"@marko/runtime-tags": patch
---

Fix a `TypeError: Cannot read properties of undefined (reading 'default')` when compiling a template containing `<attrs>` or `<effect>` through `marko/translator`, whose taglib merge dropped the array-form `migrate` hooks those tags declare.
