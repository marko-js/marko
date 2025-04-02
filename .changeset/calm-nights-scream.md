---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Refactor getFile and getProgram handling to avoid circular references between babel-utils and babel-plugin code.
