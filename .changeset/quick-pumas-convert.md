---
"@marko/compiler": minor
---

`modules: "cjs"` output is converted by the compiler itself instead of Babel's CommonJS module transform, which is no longer bundled. As Babel's loose mode did, each export is a plain property assigned where it is declared (functions before anything is required, re-exports when their module is required) and again after each write to its binding. Imports read through their module, with interop for CommonJS modules without `__esModule`. A CommonJS compile skips Babel's extra traversals and, without project Babel plugins, the scope crawl after translating; project Babel plugins' visitors still run on the ES module first, and their `post` hooks after the conversion, as with Babel's transform. A binding named `exports` or `require` anywhere, or `module`, `__filename` or `__dirname` at the top level, a write to an import, an export named `__esModule`, and `stripTypes: false`, are compile errors with CommonJS output.
