---
type: bug
impact: med
effort: low
site: packages/compiler/src/babel-plugin/index.js › getMarkoFile
---

# Skip translate for a template whose parse or analyze recorded an error under `errorRecovery`

Under `errorRecovery`, `getMarkoFile` turns `MarkoParseError` nodes and analyze failures (`reportAnalyzeError` in `packages/runtime-tags/src/translator/util/analyze-errors.ts`) into diagnostics, caches the analysis, and `pre` still translates it. The translate visitors assume a finished analysis and a parse-error-free AST, so the shapes below crash with a TypeError that replaces the real diagnostic. The cache entry survives, so a later compile of the unchanged file without `errorRecovery` on the same `cache` throws that TypeError instead of the framed error. The comments in `getMarkoFile` and `analyze-errors.ts` promise that `errorRecovery` keeps these as recoverable diagnostics, which does not hold for html or dom output. Direction: when the file carries an Error diagnostic, have `pre` skip translate, returning the diagnostics with empty code under `errorRecovery` (reconcile with the "still produces code past the error" case in `packages/compiler/test/error-recovery.test.js`) and letting `buildResult` throw them framed otherwise. Add the shapes below to that test file for html and dom.

Check: in a `./x.tmp.mjs` at the repo root run with `node -r ~ts`, `compileSync(src, "/abs/x.marko", { translator: "@marko/runtime-tags/translator", output, errorRecovery: true, cache })` throws instead of returning diagnostics. `<let value=1/>` (html and dom) throws `Cannot read properties of undefined (reading 'extra')`, where a fresh non-recovery compile reports the framed "requires a [tag variable]" error. `<const/{ a, }b=1/>${a}` (html) throws `Property id of VariableDeclarator expected … "MarkoParseError"`. `<id/{ a, }b/>` (dom) throws `reading 'binding'`, and `<for|a,b,c| of=[]>${a}</for>` (dom) throws `reading 'section'`. Compiling `<let value=1/>` again on the same `cache` without `errorRecovery` throws the same `reading 'extra'` TypeError.
