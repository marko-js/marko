---
"@marko/translator-default": patch
"@marko/compiler": patch
"marko": patch
---

Fix issue where legacy compat `w-bind` directives were being incorrectly optimized as static vdom.
