---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/import-declaration.ts › translate.exit
---

# Route `tagNameLoad` through the compat dynamic-tag path when a Tags-API parent lazily imports a Class-API child

`analyzeTagNameType` downgrades a custom tag whose child template is Class API to `TagNameType.DynamicTag` but leaves `extra.tagNameLoad` attached, so `translate.exit`'s DOM branch still sees `allKnownTagReferences` and deletes the whole `import Child … with { load: … }`, while the compat dynamic-tag path never reads `tagNameLoad` and emits a bare `$dynamicTag($scope, Child, …)`. `Child` is left undeclared, so `$setup` throws `ReferenceError` at first render with zero diagnostics, and every `fixtures-interop/lazy-class-child*` fixture uses a Class parent, so this direction is uncovered. Either wire `tagNameLoad` into the compat path or `buildCodeFrameError` in `analyze` when a `load` import resolves to a Class-API template.

Check: compile a `<!-- use tags -->` parent holding that import plus `<Child value=1/>` against a `class {}` child with `{ output: "dom", linkAssets, translator: "marko/translator" }`; Babel puts `Child` in the Program scope's `globals`, empty with a Tags-API child.
