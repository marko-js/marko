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

## Controllable update coverage: `checkedValue`, spread controllables, `<option value>`

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` (controllable capture/merge) | 2026-07-04 | impact:low | effort:med

The controllable attr update slice covers single-value controllables
(`value` on input/select/textarea, `checked`, `open`) via the helper's
`_default` variant. Three adjacent shapes still don't ride persisted
updates:

1. `checkedValue` pairs two interdependent values (`checkedValue` +
   `value`); sparse per-key captures can't replay the pair when only one
   key changed, so it is excluded (uncontrolled request-derived
   `checkedValue` is rare -- it is virtually always bound).
2. Controllables reached through a spread (`_attrs`/`_attrs_partial`
   resolve them at runtime) have no static value expression to wrap, so
   nothing captures; a fix needs capture support inside the html `_attrs`
   runtime itself.
3. `<option value=dynamic>` renders via `_attr_option_value` with no
   capture/merge (the select's own `value` merge re-selects by option
   value, so a changed option value under an unchanged select value can
   leave selection stale).
