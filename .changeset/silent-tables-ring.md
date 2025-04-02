---
"@marko/runtime-tags": patch
"@marko/compiler": patch
---

Expose getProgram and getFile apis from @marko/compiler/babel-utils. Exposing it directly from the compiler was causing an issue with the website.
