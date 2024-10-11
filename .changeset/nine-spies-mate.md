---
"@marko/translator-default": patch
"marko": patch
"@marko/compiler": patch
---

Fix regression from #2138 which caused nullable native dynamic tags with body contents to not output the end tag. 😱
