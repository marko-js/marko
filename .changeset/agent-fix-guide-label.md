---
"@marko/compiler": patch
---

Append the coding-agent fix guide to a thrown `CompileError`'s `label` as well as its `message`, so bundler plugins that print `label` in place of the framed message keep the pointer.
