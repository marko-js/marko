---
type: bug
impact: med
effort: low
site: packages/compiler/src/babel-plugin/parser.js › onAttrMethod
---

# Give an invalid shorthand-method parameter a CompileError instead of a raw Babel `TypeError`

When the parameter list of an attribute method fails to parse, `parseParams` returns `[MarkoParseError]` — a placeholder node meant to be collected and reported — and `onAttrMethod` hands it straight to `t.functionExpression`, whose builder validation throws first: `<a onX(1){}>` fails with `TypeError: Property params[0] of FunctionExpression expected node to be of a type ["FunctionParameter"] but instead got "MarkoParseError"`, `loc === undefined`, no filename, no code frame, and a stack that starts inside Babel. Every non-identifier parameter takes this path (`(1)`, `(#)`, `(,)`, `(a,#)`, `(...#)`, `(a=#)`), on both `compileSync` and `compile`. Sibling constructs that build on the same placeholder are diagnosed properly — `<div class(#)=1>` and `<a onX=(1)=>{}>` give `CompileErrors` with carets, `<for|1| of=[]>` a `CompileError` with a `loc` — so this is one unchecked handoff: report the placeholder (or defer the `functionExpression` build) before Babel's validator sees it.

Check: `compileSync("<a onX(1){}>", filename, { output: "html" })` throws `TypeError: Property params[0] of FunctionExpression …` with `loc === undefined`, while `compileSync("<div class(#)=1>", …)` throws `CompileErrors` with `at …:1:12` and a caret. Expect the first to throw a `CompileError` pointing at the offending parameter, pinned by an `error_compiler` fixture per parameter shape.
