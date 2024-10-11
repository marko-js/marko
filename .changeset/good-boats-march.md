---
"@marko/translator-default": patch
"marko": patch
"@marko/compiler": patch
---

Optimize how style and script tags are diffed (similar to textarea) where the text nodes are concatenated and diffed as a whole.
