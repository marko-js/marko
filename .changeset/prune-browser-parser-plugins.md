---
"@marko/compiler": patch
---

Prune unreachable Babel code from the bundled compiler. The parser's flow, jsx, estree and v8intrinsic syntax plugins are stubbed; `helper-create-class-features-plugin` is pointed at the one module the TypeScript transform uses instead of its barrel; the runtime helper table keeps only the four helpers anything here can request; and the flow/jsx printers and node definitions, the generated `assertFoo` helpers, the uppercase builder aliases and the missing-plugin suggestion table are dropped. `dist/babel.js` goes from 2084 KB to 1626 KB and `dist/babel.web.js` from 1966 KB to 1509 KB, with compiled output unchanged.
