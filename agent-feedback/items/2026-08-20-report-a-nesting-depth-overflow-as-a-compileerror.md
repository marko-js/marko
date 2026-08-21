---
type: bug
impact: low
effort: med
site: packages/compiler/src/index.js › compileSync
---

# Report a nesting-depth overflow as a `CompileError`, not a bare `RangeError`

A legal but deeply nested template dies in Babel's recursive traversal, and the compiler passes the failure straight through: `compileSync("<div>".repeat(1200) + "x" + "</div>".repeat(1200), f, …)` throws a `RangeError: Maximum call stack size exceeded` with `loc === undefined`, no filename and a stack that points only into `@marko/compiler/dist/babel.js`, so nothing names the template that failed. The threshold is stack-dependent (700 deep compiles in ~240 ms here, 1200 throws), which makes it look like a flake when it lands in CI on a generated template. Either count depth in the parser and raise a `CompileError` with a position and a named limit, or catch a stack overflow in the `compile`/`compileSync` catch and re-throw it carrying the filename.

Check: `compileSync("<div>".repeat(1200) + "x" + "</div>".repeat(1200), f, { output: "html" })` throws `RangeError: Maximum call stack size exceeded` with `err.loc === undefined`; expect an error naming the file and the construct that exceeded the limit.
