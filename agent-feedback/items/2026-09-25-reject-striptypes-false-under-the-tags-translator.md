---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/index.ts › transform
---

# Reject `stripTypes: false` for html and dom output under the Marko 6 translator

`packages/compiler/src/index.js › loadMarkoConfig` only defaults `stripTypes`, so an explicit `stripTypes: false` with `output: "html"` or `"dom"` hands analyze and translate TypeScript nodes. The Marko 6 translator assumes they are gone; the comment in `packages/runtime-tags/src/translator/visitors/import-declaration.ts › trackImportedRegisteredFns` says the compiler turns `stripTypes` on for every output it runs for. As a result the emitted JavaScript keeps `as number`, `<const/y=x as number/>` stops being an alias of `x` and gets its own Signal, and `value:=(x as string)` fails with "Attributes may only be bound to identifiers or member expressions". Direction: make `stripTypes: false` a compile error in the runtime-tags Program `transform` for translated outputs; that covers Tags API files only and leaves Marko 5 and `source`/`migrate` alone. Then drop the TS-only branches that only this case reaches (the `TSNonNullExpression` case in `util/is-invoked-function.ts`, the `importKind` check in `visitors/import-declaration.ts`), and state the restriction in `config.d.ts` and the `stripTypes` docs.

Check: in a `./x.tmp.mjs` run with `node -r ~ts`, `compileSync("<let/x=1/>\n<const/y=x as number/>\n<button onClick() { x++ }>${y}</button>", "/abs/x.marko", { translator: "@marko/runtime-tags/translator", output: "dom", optimize: false, stripTypes: false, cache: new Map() }).code` contains `$y($scope, $scope.x as number)`, where the default compile reads `$scope.x` inside a `$y` alias. With `<let/x="a"/>\n<input value:=(x as string)/>` the same call throws "Attributes may only be bound to identifiers or member expressions", and the default compile succeeds.
