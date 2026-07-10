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

## CSR: rejected `<await>` under an ancestor `@placeholder` never dismisses the placeholder

`packages/runtime-tags/src/dom/control-flow.ts:376` | 2026-07-10 | impact:med | effort:med

In a pure client render of `<try @placeholder><await>…<try @catch><await=rejecting>…`,
when the inner await rejects, `_await_promise`'s reject handler zeroes the
ancestor placeholder's counter (`awaitCounter.i = 0`) without running the
counter's completion, and `renderCatch` only unwinds a `PlaceholderBranch` on
the try that owns the `@catch`. When the placeholder lives on an _ancestor_
try (the nearest-placeholder lookup in `_await_promise` attaches the counter
there), the detached content is never re-inserted and the page shows the
placeholder forever; the catch content renders only into the detached tree.
Observed in the `catch-reject-nested-in-await` fixture's `render-csr` snapshot
(final state stays `loading outer...`; SSR of the same template shows
`caught: ERROR!` plus the sibling `<div>`). A fix needs the reject path to
complete (not zero) the pending counter so `dismissPlaceholder`/pending
effects run, while keeping the forced-zero semantics for resumed reorder
records — those `c()` implementations do stream-node surgery that must not run
on rejection.

## Inline reorder runtime holds only one pending `onNextSibling` callback

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts:37` | 2026-07-10 | impact:low | effort:med

`runtime.x` keeps a single `nextSibling`/`onNextSibling` pair. A `<t hidden>`
swap callback pending at the element's next sibling is overwritten if, while
walking the `<t>`'s children, a placeholder-end comment (`!id`) matches the
"content arrived before its end marker" branch and re-assigns the pair — the
outer swap then never fires. Tracing current server emission orders suggests
this is unreachable today (catch/content `<t>`s and their end markers always
stream in an order where the earlier callback fires before the overwrite),
but it is one flush-ordering change away from a silent hydration freeze. A
queue (or firing the pending callback before re-assigning) would make the
inline runtime robust; weigh against inline-runtime byte cost.

## Interop silently accepts Class-style event bindings on Tags API children

`packages/runtime-class/src/translator/index.js:149` | 2026-07-10 | impact:med | effort:med

When a Class API file renders a Tags API child with a declarative event binding
(`<tags-child on-toggle("handleToggle")/>`), the interop compiles it without
diagnostics but the binding can never fire: it registers a Class custom-event
subscription (`customEvents` via `out.c(...)` in
`src/runtime/helpers/dynamic-tag.js:92`), and Tags API components call function
props instead of emitting events. The reverse direction IS bridged
(`tags-compat/runtime-html.js:184-199` converts `onX`/`on-x` function
attributes on Class children into events), which makes the asymmetry easy to
assume away. During incremental 5→6 migrations this is a likely silent
regression: converting a child to Tags API leaves every Class parent's
`on-foo("method")` binding compiling-but-dead. The class translator already
knows the child's `featureType` is `"tags"` at analyze time
(`translator/index.js:149-155`), so it could error (or warn) on event args
targeting a Tags child, pointing at function attributes as the fix.
