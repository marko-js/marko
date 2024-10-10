---
"@marko/translator-default": patch
"@marko/compiler": patch
"marko": patch
---

Fix issue where a null able native tag with no body content (eg `<${show && "div}/>`) was incorrectly outputting a fragment for the body content (which did not exist).
