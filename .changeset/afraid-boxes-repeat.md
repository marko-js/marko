---
"@marko/translator-default": minor
"@marko/babel-utils": minor
"@marko/compiler": minor
"marko": minor
---

Move <macro> tag validation to the translate phase and expose new utilities for working with macros in @marko/babel-utils. This allows for migration/transformer/etc compiler hooks to better work with <macro>'s.
