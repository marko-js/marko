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

## Register update if-merges for conditionals over direct `$global` reads

`packages/runtime-tags/src/translator/core/if.ts:327` | 2026-07-04 | impact:med | effort:med

Persisted builds only record an `<if>` update merge (and register its
signal) when `isReasonDynamic(getSerializeSourcesForRef(...))` on the
condition, and a condition that reads `$global` directly (eg
`<if=$global.params.sale>` in the `persisted-global-reads` fixture) gets no
sources from that call — so its `?update` entry defines a body merge that
nothing dispatches, and an update render that flips the condition never
replays the branch client-side. Conditions on a _derived_ of a `$global`
read (eg `<const/product=$global.productId && get(...)>` then `<if=!product>`)
work fine, which is why app code hasn't hit it. The fixture never navigates,
so nothing covers this today; a fix likely means treating promoted-global
condition refs as dynamic in that check (plus a fixture step that toggles
the branch across an update).

## Fresh-render `_or` joins can stall when no member fires during an apply

`packages/runtime-tags/src/translator/util/signals.ts:318` | 2026-07-04 | impact:low | effort:med

The `_or` pending count now excludes promoted `$global` members (they have
no client-side value signal), but two pathological shapes remain for fresh
branches created during a persisted apply: (1) an intersection whose members
are _all_ promoted globals emits pending 0 yet has no invoker at all, and
(2) an intersection whose non-global members are all `_updating()`-guarded
request-derived invocations never completes its join during the apply. Both
are harmless when the joined statement's output is a server-captured hole
(the merge places it), but a non-captured side effect (eg `_return_change`
mixing two such bindings) would silently not run. Statements referencing
only never-firing bindings probably belong in setup placement instead.

## Optimize-mode persisted updates crash reconciling resumed request-derived loops

`packages/runtime-tags/src/dom/resume.ts:140` | 2026-07-04 | impact:high | effort:med

Fixture `persisted-update-attr-items` with `skip_ssr` removed: debug
passes, optimize ssr throws reading 'nodeType' at `control-flow.ts:807`
via `_update_for` on the navigate step. The real cause is a
**scope-identity split for empty-elided scope writes**, not an accessor
mismatch (binding ids were verified consistent across the harness's
html/dom/update compiles; an earlier stale-snapshot diagnosis of id
divergence was wrong). The chip-list template's own scope write is empty
in optimize (`_scope($scope0_id, {})`) and empty entries are elided from
the wire; instrumenting the crash shows the merge's "live" child scope
contains only runtime-internal keys (Id/Gen/Global) — a lazily created
stand-in reached through the parent's `{c:_(2)}` child ref — while the
loop-anchor marker visit (`<!--Md}2 a 5 4 3-->`) hydrated a different
object for serialized scope id 2. Debug mode never hits it (its scope
write is non-empty, so the ref and the marker share one object). Fix
direction: the resume fill's scope lookup and the walker's visit-scope
lookup must share one object per serialized id even when the scope's
value write was elided — or persisted builds must force a scope write
(`_existing_scope`-style) for scopes that carry marker visits.
