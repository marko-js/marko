---
"@marko/compiler": patch
---

Give `CompileError.loc` the flat `file`, `line` and `column` (0-based) fields that Rollup, Vite and Rolldown print, so bundler output shows the template position instead of `undefined:undefined`. Babel's `start`/`end` remain.
