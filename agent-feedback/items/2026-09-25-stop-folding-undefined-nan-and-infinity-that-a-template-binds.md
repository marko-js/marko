---
type: bug
impact: low
effort: low
site: packages/compiler/src/babel-utils/compute.js › computeNode
---

# Stop folding `undefined`, `NaN` and `Infinity` when the template binds that name

`computeNode` folds the identifiers `undefined`, `NaN` and `Infinity` to the global values without looking at scope. `evaluate` in `packages/runtime-tags/src/translator/util/evaluate.ts` then caches the result as a confident constant. Binding one of these names is legal inside the render function, and when a template does so it is silently miscompiled in both outputs: `<const/Infinity=input.n/>` followed by `<div>${Infinity}</div>` writes the literal text `Infinity`, and `<const/undefined=input.x/>` followed by `<div title=undefined/>` drops the attribute. Direction: make a Tag variable, tag param or top-level declaration with one of these names a compile error, which keeps `computeNode` scope-free. Alternatively, have `evaluate` skip the fold when `path.scope.getBinding(name)` finds a template binding.

Check: `pnpm run compile -- -o html -d /abs/x.marko` on `<const/Infinity=input.n/>\n<div>${Infinity}</div>\n<const/undefined=input.x/>\n<div title=undefined/>` emits `_html("<div>Infinity</div><div></div>")`. With `-o dom` it emits `$template = "<div>Infinity</div><div></div>"` and nothing updates either element.
