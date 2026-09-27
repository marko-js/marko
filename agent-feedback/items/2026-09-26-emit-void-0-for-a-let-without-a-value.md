---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/let.ts › translate
---

# Emit `void 0` for a `<let>` without a value

A `<let>` with no `value=` gets a synthesized `t.identifier("undefined")` value, which the server output writes as `let y = undefined;` in the render function. When the template also declares a variable named `undefined` that something reads, that declaration sits in the same function, so the server initializes the `<let>` from it while the client's `$setup` still passes the global `undefined`. Direction: synthesize `void 0` (as `buildUndefined` in `visitors/program/pre-analyze.ts` does), which `evaluate` folds to the same constant.

Check: `pnpm run compile -- -o html -d /abs/x.marko` on `<const/undefined=input.x/>\n<let/y/>\n<div title=undefined>${y}</div>` emits `const undefined = input.x;` followed by `let y = undefined;`, while `-o dom` emits `$y($scope, undefined)` inside `$setup`.
