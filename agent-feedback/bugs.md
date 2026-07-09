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

## `<show>` does not clean up effects inside a nested custom tag

`packages/runtime-tags/src/translator/util/sections.ts:530` | 2026-07-09 | impact:med | effort:high

A `<show>` whose body contains a `<script>`/`<lifecycle>`/`$signal` (directly, through native elements, or inside `<if>`/`<for>`) compiles as a keep-alive branch that aborts effects on hide and re-mounts them on reveal (`_show_branch`/`remountBranch`). But `bodyNeedsBranch` does not descend into custom or dynamic tags, so a component like `<my-widget/>` with its own `<script>` leaves the `<show>` on the inline path, and the widget's effects keep running while hidden. The blocker is re-mounting: `remountBranch` re-runs branch setups (nested branches included via the negative-`Gen` sentinel), but a custom tag's child scope is not a branch, and its setup is not reachable from the runtime; on a resumed branch the parent's `#childScope` accessor is also unpopulated, so even re-running the parent setup would call `_child(undefined)`. Possible directions: (a) treat detected custom-tag child scopes as remountable by storing their setup on the scope (`_child_setup` could stash it) and force-serializing the `#childScope` accessors inside remountable bodies (see `isInRemountableBranch`); or (b) a per-keep-alive-branch effect log — record `(fn, scope)` pairs in `runEffects` for scopes under a keep-alive branch and replay on reveal instead of re-running setup.
