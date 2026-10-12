---
"@marko/compiler": patch
---

A template now reads each template it renders once, and translates against the ones its analysis read. A taglib file newer than the compile cache, or missing, no longer crashes a compile that passes input to a custom tag, or overflows the stack on templates that render each other.
