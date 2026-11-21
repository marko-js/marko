---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › setResolvedFunctionReads
---

# Add a value kind for a function that captures nothing so a binding holding one reads it from the module

A function literal whose body reads no scope is left without `FunctionExtra.referencesScope`, and such a function is declared once at module level (`function $log()`, no `$scope` factory) and registered with no scope. Held in a `<const>`, though, it is `KIND_FUNCTION` and nothing more, so every read goes through the binding: the server writes it into the owner's scope, each loop row's scope links its owner (`_: _scope_with_id(…)`) to reach it, and the row reads `$scope._.log`. A "captures nothing" bit beside `KIND_FUNCTION`, carrying the function, would let a read of a `<const>` that holds only such functions use the module-level function in place, so no instance stores, sends or links to it. The kind is cheap, one bit, but `referencesScope` is complete only once references finalize, so its readers ask at translate.

Check: `pnpm run compile -- -o html -d` on `<const/log=() => console.log("picked")/><for|item| of=input.items><button onClick=log>${item}</button></for>` writes `_scope($scope0_id, { log }, …)` and, per row, `_: _scope_with_id($scope0_id)`; `-o dom -d` declares `function $log()` and binds `$scope._.log`.
