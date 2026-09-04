---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › renderCatch
---

# Catch a `<for>` item's update error at the enclosing `<try>`

An error thrown while a `<for>` item re-renders on the client escapes its enclosing `<try>` instead of reaching `@catch`. `renderCatch` resolves the boundary with `findBranchWithKey(scope, AccessorProp.CatchContent)`, which walks `ClosestBranch` then `ParentBranch`; starting from a loop item's branch that walk never reaches the `<try>` branch, so `renderCatch` takes its `throw error` path and the error leaves the flush uncaught. The same template with the throwing expression outside the `<for>` is caught correctly (`try-effects-catch-state`), so the gap is the loop item branch's parent linkage, not the catch machinery. Either link a loop item's branch to the branch that owns the loop, or resolve the boundary from the pending render's owner chain rather than the item scope.

Check: copy `packages/runtime-tags/src/__tests__/fixtures/try-effects-catch-state` to `fixtures/try-for-item-update-error`, wrap its throwing text expression in `<for|item| of=[1, 2]>…</for>`, keep `steps: [{}, click, click]`, then `pnpm test -- --grep "runtime-tags/translator try-for-item-update-error "` — the run fails with an uncaught `Error: ERROR!` raised from `runRender` instead of rendering `@catch`.
