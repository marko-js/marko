---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Improve compiler and serializer error reporting: `CompileError` exposes flat `file`/`line`/`column` fields so bundlers print real positions instead of `undefined:undefined`; error frames window around the offending column and cap diagnostic length so a huge line cannot produce a 400 kB message; source maps terminate `sourceRoot` with a separator so mapped frames name openable paths; a throwing getter hit during serialization is reported as an unserializable-value error with the original throw as its cause, and `CompileError` no longer exposes a separate `frame` property (the frame stays in `message`, so bundlers print it once).
