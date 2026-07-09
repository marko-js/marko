# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## `bigint` zero renders as empty string in text/escape helpers

`src/html/content.ts:26` | 2026-07-03 | impact:low | effort:low

Every text/escape helper special-cases numeric zero with `val === 0` so a
falsy-but-renderable `0` yields `"0"` (`_to_text` line 8, `_unescaped` 15,
`_escape` 26, `_escape_script` 38, `_escape_style` 49, `_escape_style_value`
56, `_escape_comment` 67). A `bigint` zero `0n` is falsy and `0n === 0` is
`false`, so `${0n}` renders `""` instead of `"0"` (a non-zero `bigint` such as
`5n` is truthy and renders fine). The DOM runtime `src/dom/dom.ts:48` shares the
pattern, so SSR and CSR agree — it is a consistent wrong value, not a hydration
mismatch. A correct fix must add `|| val === 0n` (loose `== 0` would make `""`
render as `"0"`) to all seven helpers plus `dom/dom.ts`.

Decided not worth fixing: interpolating a `bigint` directly into the DOM text
APIs is not something you would generally display to a user, so it does not
justify the measurable bundle growth across these hot helpers (bundle size is a
feature). Recorded for the record rather than as work to pick up.

## `Sorted.isSuperset` arithmetic is wrong but the current behavior is load-bearing

`src/translator/util/optional.ts:103` | 2026-07-03 | impact:med | effort:med

`isSuperset` walks `subset` from the top and rejects with
`supLen - found <= i`, which compares the remaining superset slots against `i`
(the count of _smaller_ elements) instead of `subLen - i` (the count still to
place). It returns `false` for many genuine superset relationships, including
two identical sorted arrays: `isSuperset([1,2,3],[1,2,3])` is `false`. The one caller,
`isSupersetSources` (`references.ts:2395`), gates intersection serialization at
`references.ts:1131`/`1145`. Naively correcting the arithmetic to
`supLen - found < subLen - i` makes `isSupersetSources` return `true` for
equal-source bindings, so both symmetric `addSerializeReason` calls are skipped
and neither binding in the intersection serializes — this under-serializes and
breaks resume (the `bound-attr-shapes` fixture throws `Unable to serialize
"ControlledHandler:#input/2"`). The current over-serializing behavior is
therefore relied upon for correctness. A real fix needs `isSupersetSources` to
use a strict/proper-superset test (equal sources must not prune each other)
_and_ the corrected arithmetic, then a full snapshot audit — out of scope for a
one-line change.

## `<show>` does not clean up effects inside a nested child scope (component / control-flow) after resume

`packages/runtime-tags/src/translator/util/sections.ts:showBodyNeedsBranch` | 2026-07-09 | impact:med | effort:high

A `<show>` whose body directly contains a `<script>`/`<lifecycle>` now compiles as a keep-alive branch and cleans up/re-runs those effects on toggle (see `_show_branch` in `dom/control-flow.ts` and `html/writer.ts`). But `showBodyNeedsBranch` deliberately does **not** descend into child scopes — a nested component (`<my-widget/>`) or control-flow tag (`<if>`/`<for>`) — so effects living in those nested scopes still leak while the `<show>` is hidden (the pre-existing behavior). The blocker: re-mount re-runs the branch's setup (`setupBranch`), which calls `_child(scope["#childScope/0"])`; on a **resumed** branch that scope-instance accessor is never populated (resume links child scopes via `ClosestBranchId`, not the parent's `#childScope` accessor), so `_child(undefined)` throws (`_lifecycle` reads `undefined["Lifecycle:0"]`). Pure client render works because the walk populates `#childScope`. Two possible fixes: (a) force-serialize the child scope-instance accessors for show-branch bodies so `setupBranch` finds them on resume (see `_var` in `html/writer.ts` for the parent→child link serialization pattern); or (b) a per-keep-alive-branch effect log — have `runEffects` record `(fn, scope)` for scopes whose closest branch is a keep-alive `<show>` (gated like `enableBranches`, and a flag serialized into the branch scope so resume-run effects are captured too), then replay the log on show instead of re-running setup. Both make the nested case work on CSR + resume identically (the test harness's equivalence check requires client and resume to match, so a partial fix that preserves state on one but not the other will fail).
