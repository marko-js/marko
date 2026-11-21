---
"@marko/compiler": patch
---

Template literals the compiler builds (from class shorthands, interpolated tag names and `normalizeTemplateString`) mark their last element as the tail.
