# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Possession echo keys by runtime scope id, which is not stable across the document and update renders

`src/dom/update.ts:_have` + `src/html/dynamic-tag.ts` (siteKey) | 2026-07-07 | impact:high | effort:high

The possession echo (`x-marko-have`) keys each dynamic-tag hop by
`"<scopeId> <accessor>"`, where the client (`_have`) reads `scopeId` off its
**live** resumed tree and the server (`_dynamic_tag`) computes it from the
**update** render's scope counter. Those two id spaces do not agree: scope ids
are runtime-allocated, and the update render elides matched/unchanged scopes
(and omits the document shell), so the counter drifts relative to the full
document render. Patch application tolerates this because matched scopes pair by
DOM marker, not by raw id equality (patch ids are patch-local) — but the echo
compares raw ids, so it silently misses.

Reproduced end-to-end in marko-ecommerce (`/swap` demo, `scripts/validate/swap-validate.mjs`):
the layout content hop matches (`"2 g"` both sides) but the page's swap hop is
`"6 f"` on the client and `"5 f"` on the server — off by one, because a matched
header scope is elided in the update render. Result: `possessionMiss` is false,
no fragment is shipped, the client throws `update diverged`, and the router
falls back to a full navigation (state lost). The `persisted-update-possession-swap`
fixture passes only because its trivial structure (no document shell, no
elidable scopes before the hop) makes the two numberings coincide — it does not
exercise the divergence.

Fix needs a **cross-render-stable site identity**, not the runtime scope id:
either a compiler-assigned per-site id disambiguated by loop key (this is the
"compiler register" that the byte analysis had dismissed — it turns out to be
required for correctness, not economy), or keying the echo off the same
marker-pairing the value patch already uses. Until then the feature is inert on
any real app whose layout allocates scopes before the swap hop. Server + client
plumbing (slices 1/2/2b) is otherwise correct and degrades safely (no crash,
just a full-nav fallback).

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

## Inline walker lookup: branch-start keys can collide with reorder anchor ids (pre-existing)

The inline `WALKER_RUNTIME` registers _every_ prefixed comment in the
per-render lookup keyed by its post-symbol payload (`a[l.slice(s+1)]=e`),
and `REORDER_RUNTIME` resolves its anchors from that same lookup by bare
reorder id (`e.l[a]` / `e.l["^"+a]`, ids from `state.nextReorderId()`,
counting from 1). Branch-start markers flushed with accumulated ids emit
`<!--M_[2-->` (`forBranches`' `flushBranchIds` starts as `branchId + ""`),
whose lookup key is the bare string `"2"` -- branch ids are scope ids,
which share the small-integer space with reorder ids. A branch-start
registered after anchor `<!--M_!2-->` in walk order overwrites the
anchor's entry, so when the reordered tail arrives, the removal walk /
`replaceWith` targets the branch-start comment instead of the anchor.
Reachable in principle on any page combining out-of-order flushing with
multi-branch loop flushes; unconfirmed by a failing test. Discovered
while adding the persisted node-marker continuation form, which hit the
same collision class (bare numeric accessor keys vs reorder ids) and
sidesteps it with a space-leading payload -- the same disambiguation (or
a reserved prefix for reorder keys) would fix this one.
