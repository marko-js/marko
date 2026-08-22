---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Improve compiler and serializer error reporting: `CompileError` exposes flat `file`/`line`/`column` fields (and its `loc` carries them alongside Babel's `start`/`end`) so bundlers print real positions instead of `undefined:undefined`; source maps terminate `sourceRoot` with a separator so mapped frames name openable paths. `CompileError.frame` was removed — the code frame stays in `message`, so bundlers print it once.
