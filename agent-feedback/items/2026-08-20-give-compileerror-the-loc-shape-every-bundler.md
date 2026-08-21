---
type: bug
impact: med
effort: low
site: packages/compiler/src/util/build-code-frame.js › CompileError
---

# Give `CompileError` the `loc` shape every bundler reads

`CompileError` keeps `loc` in Babel shape (`{start:{line,column},end}`) and pre-composes the position and the code frame into `message`, then also exposes `frame`. Rollup's error contract — which `@marko/vite`, and therefore every `marko-run build`/`dev` failure, is printed through — is the opposite: a plain `message`, a flat `loc` of `{file, line, column}`, and `frame` as the only copy of the frame. `rolldown`'s `getErrorMessage` does `if (e.loc) s += ':' + e.loc.line + ':' + e.loc.column` and then `if (e.frame) joinNewLine(s, e.frame)`, so every compile failure opens with the literal `undefined:undefined` where the position belongs and repeats the frame the message already carried. Adding flat `file`/`line`/`column` alongside `start`/`end` is additive and fixes the position for `@marko/vite`, `@marko/rollup` and Vite's dev overlay at once (`@marko/vite` reads `diag.loc.start.line` for warnings, so `start` has to stay); the doubled frame then needs one owner picked between `message` and `frame`.

Check: `await import("@marko/compiler").compileFile(f)` on `<section><span>Hello</section>` rejects with `err.loc` = `{start:{line:1,column:20},end:{line:1,column:30}}` — no `line`, `column` or `file` — while `err.message` already contains all of `err.frame`; the same template as a `marko-run` route prints `[plugin marko-vite:pre] <id>:undefined:undefined` above two identical code frames. Expect `<id>:1:21` (the position the error's own `at` line prints) and one frame.
