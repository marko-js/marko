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

## Fresh-render `_or` joins can stall for guarded request-derived members

`packages/runtime-tags/src/translator/util/signals.ts:330` | 2026-07-05 | impact:low | effort:med

Pure-global intersections now fold into setup placement (fixed -- see the
`persisted-update-or-stall` fixture), but the second pathological shape
remains: an intersection whose non-global members are all `_updating()`-
guarded request-derived invocations never completes its join during a
persisted apply (the guarded computes skip, and globals have no value
signal). Harmless when the joined statement's output is a server-captured
hole (the merge places it); a non-captured side effect over such an
intersection would silently not run for fresh branches. Also worth
auditing: the `_or` pending count excludes members by source shape
(`sources.global` without state/param), which under-counts derived
request-derived members that CAN fire through registered update merges.

## Controllable update coverage: `checkedValue`, spread controllables, selection re-sync

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` (controllable capture/merge) | 2026-07-05 | impact:low | effort:med

The controllable attr update slice covers single-value controllables
(`value` on input/select/textarea, `checked`, `open`) via the helper's
`_default` variant, and `<option value=dynamic>` holes now capture/merge
as plain attrs (see the `persisted-update-option-values` fixture). Still
outstanding:

1. `checkedValue` pairs two interdependent values (`checkedValue` +
   `value`); sparse per-key captures can't replay the pair when only one
   key changed, so it is excluded (uncontrolled request-derived
   `checkedValue` is rare -- it is virtually always bound).
2. Controllables reached through a spread (`_attrs`/`_attrs_partial`
   resolve them at runtime) have no static value expression to wrap, so
   nothing captures; a fix needs capture support inside the html `_attrs`
   runtime itself.
3. Selection re-sync: after option values merge, live selectedness is not
   re-derived -- a changed option value under an unchanged select value
   can leave the user-visible selection on the wrong option. Needs a
   design decision on uncontrolled-select semantics (re-match the select's
   default value vs preserve element-identity selection) plus cross-element
   coordination from the option's section to its owning select.
4. Mixed state/global values in spreads and controllables: the `$global`
   demotion re-invokes mixed statements client-side after the update's
   globals assign (`addUpdateGlobalsStatement` at the attr, class/style,
   placeholder, and content/text-content emission sites), but spread
   statements and controllable helpers are not collected -- a
   controllable value or spread attr mixing client state with `$global`
   stays stale across navigations. Spreads need the same runtime-capture
   design as (2); controllables need the `_default` replay wired through
   the globals re-invocation (or their own merge path) so
   default-vs-live semantics survive the re-run.
