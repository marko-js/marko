---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/core/let.ts › analyze
---

# Stop shipping and re-running an uncontrolled `<let>`'s initializer once its scope exists

`analyze` marks an uncontrolled `<let>`'s `value` as `initialValue`, but that flag only keeps it out of source derivation (`util/references.ts › getValueReferences`): the initializer is still added as a DOM value signal over everything it reads, and those reads still get serialize reasons. So `<let/x=(sel ? input.data[sel] : null)>` serializes `input.data` into the resume state and, on the client, re-evaluates the initializer through an `_or` intersection on every `sel` change, only for `_let` to discard it (`rendering` with `scope[AccessorProp.Gen] !== runId`). The cost is silent: a let seeded from input or `$global` data plus any other state ships that data a second time and does work on each change of it. An uncontrolled initializer is only needed where its scope is created (server render or client branch creation), so its reads should neither add serialize reasons nor subscribe the let to later changes; controllable lets (`:=` / `valueChange=`) keep tracking.

Check: `let-init.marko` = `export interface Input { data: Record<string, string> }`, `<let/sel=null as string | null>`, `<let/x=(sel ? input.data[sel] : null)>`, `<button onClick() { sel = "a"; }>${x}</button>` (one tag per line). `pnpm run compile -- -o html let-init.marko` ends with `_scope($scope0_id, { e: input.data, … })`, and `-o dom -d` emits `_or(6, $scope => $x($scope, $scope.sel ? $scope.input_data[$scope.sel] : null))` driven by `_let("sel/5", …)`. Expect neither. With `<let/x=(input.data.a)>` instead (input only), the html already serializes `{}`.
