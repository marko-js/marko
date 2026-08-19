---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/util/references.ts › finalizeReferences
---

# Narrow the assignment serialize reason from `true` to a client-mutability fixpoint

`finalizeReferences` calls `addOwnerSerializeReason(assignedSection, section, true)` for every assigned binding, with the in-source note "narrowing is a 0-byte no-op until a state-dropping pass exists" -- a no-op because `resolveBindingSources` gives any assigned `<let>` a `.state` source and `isStateSerializeReason` (`util/serialize-reasons.ts`) treats state as statically true. So a `<let>` reassigned only during synchronous render still roots its owner scope: `<let/total=0/>` + `<for|i| of=[1,2,3]><const/_x=[i].forEach(n => { total += n })/></for>` serializes `_: _scope_with_id($scope0_id)` per iteration even though the parent scope serializes `{}`. Replace the `true` with a conservative client-immutability fixpoint: mutable if an assignment's enclosing function is a client-reachable effect/handler/registered fn, or it transitively reads a client-mutable binding, defaulting mutable on alias, property-alias, spread, or closure escape. Note assignments must sit inside a function (`trackAssignment` throws otherwise), so the target is always a synchronously-invoked callback. Gate on `isOptimize` and add render-reassigned-then-displayed and closure-read stale-DOM fixtures.

Check: `rg -n 'narrowing is a 0-byte no-op' packages/runtime-tags/src/translator/util/references.ts`.
