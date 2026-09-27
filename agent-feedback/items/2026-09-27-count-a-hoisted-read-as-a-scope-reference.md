---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › getReadReplacement
---

# Count a hoisted read as a scope reference when choosing a registered fn's form

A `<const>` function that reads a `<const>` declared below it compiles, for the DOM, to a module-level `function` (`writeRegisteredFns` in `util/signals.ts` sees no `referencedBindings`, `referencesScope` or `referencedLocals`), yet its body is `getReadReplacement`'s hoisted read `$ws_getter($scope)`, so calling it throws `ReferenceError: $scope is not defined`. Debug builds stop first at `_assert_hoist` ("Hoisted values must be functions, received type \"object\""), but optimized builds skip that assert, so production gets only the bare ReferenceError at the call, with nothing pointing at the forward read (in a real app: a blank page). Mark the enclosing fn `referencesScope` (as `setReferencesScope` does) for a read that resolves to a hoisted getter, so it is emitted as `$scope => …`; and since hoisting a non-function is invalid, consider a compile error, or keeping the `_assert_hoist` message in optimized builds, for a non-function `<const>`/`<let>` read above its declaration.

Check: `pnpm run compile -- -o dom -d x.marko` on `<const/show=(s: string) => { document.body.textContent = ws.id + s; }><const/ws=input.workspace><lifecycle onMount() { show("x"); }/>` declares `function $show(s)` whose body calls `$ws_getter($scope)` with no `$scope` in scope.
