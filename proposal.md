# Proposal: compile-time "keyed selector" optimization for equality against a unique `<for>` key

## Summary

When a value closed over from an outer scope is compared for equality against a
`<for>` loop's **unique key**, a change to that outer value can only affect **at
most two** rows: the row whose key matches the _old_ value and the row whose key
matches the _new_ value. Today Marko re-runs the affected binding for **every**
row in the loop (`_for_closure`). We can detect this pattern at compile time and
emit a keyed-selector closure that re-runs only the two affected rows — turning
an O(n) update into O(1).

This is the same idea as SolidJS's `createSelector`, but derived automatically
from the keyed-`for` + equality-against-key pattern instead of requiring the
author to reach for a special primitive.

## Motivation

The js-framework-benchmark "select row" case is the canonical example:

```marko
<let/selected=undefined>
<for|row| of=rows by="id">
  <tr class=(selected === row.id && "danger")>
    <td><a onClick() { selected = row.id }>${row.label}</a></td>
    ...
  </tr>
</for>
```

Clicking a row sets `selected`. Only the previously-selected row (loses
`danger`) and the newly-selected row (gains `danger`) actually change, but every
one of the 1,000 rows re-evaluates its `class` binding.

Measured impact (js-framework-benchmark, keyed, headless, this pattern vs. a
hand-written userland selector — see "Validation" below):

| benchmark  | idiomatic (`selected === row.id`) | userland selector | SolidJS |
| ---------- | --------------------------------: | ----------------: | ------: |
| select row |                           7.9–8.4 |           5.3–6.9 | 4.6–6.5 |
| create 10k |                           230–232 |           230–270 | 225–265 |
| create 1k  |                              21.9 |              22.4 |    24.0 |

The userland selector reliably removes ~20–33% of the select-row cost with no
measurable regression on create. "select row" is Marko's single largest
structural gap vs. Solid in this benchmark; closing it for the _idiomatic_
template (no author intervention) is the goal.

## How the pattern compiles today

`marko/translator`, `output: "dom"`, for the snippet above:

```js
// Class binding reads BOTH the owner value `selected` and the loop value `row_id`:
const $..selected__OR__row_id = _or(6, $scope =>
  _attr_class($scope["#li/0"], $scope._.selected === $scope.row_id && "danger"));

// On `selected` change → re-run that binding for EVERY branch scope of the loop:
const $..selected = _for_closure("#ul/0", $..selected__OR__row_id);

// `selected`'s change handler IS the for-closure:
const $selected = _let("selected/2", $..selected);
```

`_for_closure` (`packages/runtime-tags/src/dom/signals.ts`) fans out to all rows:

```js
export function _for_closure(ownerLoopNodeAccessor, fn) {
  ...
  const ownerSignal = (ownerScope) => {
    const scopes = toArray(ownerScope[scopeAccessor]);          // all branch scopes
    if (scopes.length) {
      queueRender(ownerScope, () => {
        for (const scope of scopes) {                           // <-- O(n)
          if (!scope[Creating] && !scope[Destroyed]) fn(scope);
        }
      }, ...);
    }
  };
  ownerSignal._ = fn;
  return ownerSignal;
}
```

The loop already assigns each branch a key. In the keyed reconcile
(`packages/runtime-tags/src/dom/control-flow.ts`) every branch stores
`branch[AccessorProp.LoopKey] = key`, and a transient `oldScopesByKey`
`Map<key, BranchScope>` is built on each list change — but it is **not**
persisted between renders, so a `selected` change has no O(1) way to find the
matching rows today.

## Proposed optimization

### Detection heuristic (compiler)

Apply when **all** of the following hold for a given owner-value closure consumed
inside a `<for>` body:

1. The `<for>` is **keyed** — it has a `by`. The key is known-unique:
   - `by="prop"` (string) → the key for item `row` is `row.prop`.
   - `by=(row, i) => expr` (function) → the key is `by(row, i)`; matchable when
     the comparison's other operand is syntactically that call / the returned
     expression. (String `by` is the common, easy case; start there.)
2. Every read of the owner value within this binding occurs **only** as an
   operand of an `===` / `!==` comparison whose **other operand is exactly the
   loop key** for the current item (e.g. `selected === row.id`, `row.id !== selected`).
   If the owner value is read in any other position (`selected > row.id`,
   used as a value, compared against a non-key expression), the binding is **not**
   eligible — a change could affect arbitrarily many rows.
3. The comparison's key operand matches the for's `by` (same property / same key
   expression). Comparing against a different, non-key property (even if it
   happens to be unique at runtime) is **not** eligible — uniqueness is only
   guaranteed for the `by` key.

The decision point already has everything it needs:
`packages/runtime-tags/src/translator/core/for.ts`, the `exit(tag)` handler
around **line 279**, installs the closure-signal builder and has `forAttrs.by`
in scope (line ~301):

```js
setClosureSignalBuilder(tag, (closure, render) => {
  // `closure` = the owner Binding (e.g. `selected`); `render` = the binding fn.
  // NEW: if `forAttrs.by` is present AND every read of `closure` in `render`
  // is `closure === <by-key>` / `!==`, emit the selector variant instead:
  return callRuntime(
    "_for_closure",
    getScopeAccessorLiteral(nodeRef, true),
    render,
  );
});
```

So the heuristic is: inspect the closure binding's usage within `render`
(reference/intersection metadata already tracked by the signals machinery) and,
when eligible, emit `_for_selector` and flag the loop to maintain a persistent
key→scope map.

### Runtime

1. **Persistent key→scope map.** When a loop has at least one selector closure,
   maintain `ownerScope[KeyToScope]: Map<key, BranchScope>` alongside the
   existing `LoopKey` assignment in `control-flow.ts` (set on insert/match,
   delete on `removeAndDestroyBranch`). Only allocated for loops that need it, so
   non-selector loops pay nothing.

2. **`_for_selector(ownerLoopNodeAccessor, render)`** replacing `_for_closure`
   for the eligible binding. On an owner-value change it re-runs `render` for the
   previously-matching scope and the newly-matching scope only:

   ```js
   // sketch
   (ownerScope) => {
     const map = ownerScope[KeyToScope];
     const prev = ownerScope[SelectorLastKey]; // value we last applied
     const next = ownerScope[ownerValueAccessor]; // value _let just wrote
     ownerScope[SelectorLastKey] = next;
     const prevScope = map && map.get(prev);
     const nextScope = map && map.get(next);
     if (prevScope) queueRender(prevScope, render, -1);
     if (nextScope) queueRender(nextScope, render, -1);
   };
   ```

   Note: `_let` overwrites `scope[valueAccessor]` _before_ invoking the change
   handler, so the handler cannot read the previous value from the scope. Two
   options:
   - (a) Track the last-applied key on the owner scope (`SelectorLastKey` above).
     Robust against rows being added/removed/reordered while selected, since
     `map.get` returns `undefined` for absent keys. Mirrors `createSelector`'s
     internal value tracking. **Preferred.**
   - (b) Have the selected `_let` pass `(prev, next)` to its change handler.
     Slightly cheaper but requires a `_let` variant/codegen change.

   When `render` re-runs for `prevScope`, it recomputes `selected === key` with
   the _new_ `selected`; since that row's key no longer matches, the class
   clears. For `nextScope` it now matches and the class is set. No prev/next
   branching inside `render` is required — it stays the same pure binding.

3. **Initial match on create.** If `selected` is already set when rows are
   created (or a matching row is appended later), the per-row create path already
   runs the binding (via the `row_id` `_const`), so the matching row renders
   correctly; the key→scope map is populated as rows are inserted, so a later
   change finds them. `SelectorLastKey` is initialized to the current owner value.

## Correctness conditions / edge cases

- **Only equality against the key.** Enforced by heuristic condition (2). This is
  what guarantees "at most two rows change."
- **Key uniqueness.** Guaranteed by `by`; do not apply to non-keyed loops or to
  comparisons against non-`by` expressions (condition 1 & 3).
- **Multiple comparisons** (`selected === row.a || selected === row.b`): out of
  scope for v1; could be supported by unioning matches per comparison.
- **Owner value also drives other bindings** that aren't key-equality: those keep
  their normal `_for_closure`/closure; this optimization is per-binding.
- **Duplicate keys at runtime** (already a `<for>` error in dev): the map would
  hold the last writer; behavior is no worse than today's documented contract.
- **Rows mutated while selected** (add/remove/reorder/replace): handled by map
  insert/delete + `map.get` returning `undefined`; the last-key approach (3a)
  avoids holding stale scope references.

## Validation (userland prototype)

A hand-written equivalent in the benchmark app (`frameworks/keyed/marko-opt-sel`)
confirms the mechanism and the win. It drops the per-row subscription to
`selected` and flips only the two affected rows via a captured setter:

```marko
<let/rows=[]>
<const/selection = { set: undefined }>
<for|row| of=rows by="id">
  <let/danger=false>
  <tr class=(danger && "danger")>
    <td><a onClick() {
      selection.set?.(false);                 // clear previously-selected row
      danger = true;                          // set this row
      selection.set = (v) => { danger = v };  // remember how to clear it later
    }>${row.label}</a></td>
    ...
  </tr>
</for>
```

Verified correct (danger moves row→row, remove/clear still work, no page errors)
and benchmarked: select-row dropped from ~7.9–8.4 ms to ~5.3–6.9 ms with no
create regression. This proposal moves that behavior into the compiler so the
idiomatic `selected === row.id` template gets it automatically.

## Tradeoffs / open questions

- **Map maintenance cost.** Persisting `Map<key, scope>` adds a `set`/`delete`
  per row on insert/remove. Comparable to `createSelector`'s lazy map; only paid
  by loops that have a selector closure. Worth measuring on create/append/remove
  to confirm it stays in the noise (userland prototype suggests it does).
- **Function `by`.** Matching the key expression when `by` is a function is
  harder than the string case; decide whether v1 is string-`by` only.
- **Interaction with `_or` grouping.** The eligible binding is wrapped in `_or`
  when it has multiple sources (here `selected` + `row_id`). The selector only
  replaces the `selected`→binding edge; the `row_id`→binding edge (per-row create
  path) is unchanged. Confirm the `_or` pending-count bookkeeping is unaffected.
- **SSR/resume.** This is a DOM-runtime reactivity optimization; confirm no
  changes needed to HTML output or resumption (the binding's serialized form is
  unchanged; only the client change-propagation edge differs).

## Implementation status (landed)

Implemented for `@marko/runtime-tags` (Marko 6), validated against the real
compiled output. The mechanism held up; the notable details:

- **Any loop's unique key qualifies, not just `by`.** Every `<for>` already
  stores its unique key in `branch[AccessorProp.LoopKey]`, and the runtime keys
  off that, so this works for `of`+`by` _and_ the unkeyed `of` index, `in` name,
  and `to`/`until` value params (each aliased to the `LoopKey` by `for` analyze).
  The compiler resolves the right key binding per loop type (`getLoopKeyBinding`
  in `core/for.ts`). For a `by` it reduces the key to a static property chain on
  the item — `by="id"` → `["id"]`, `by=(item) => item.user.id` →
  `["user", "id"]` — and walks the item's property-alias bindings; anything it
  can't statically resolve (computed access, a call, a dynamic `by` expression)
  is skipped.
- **Detection runs from the `<for>` `dom` `translate.enter`.** It needs per-read
  binding info (`extra.read`), which `finalizeReferences()` only populates at the
  end of analyze — so analyze is too early. By translate a parent's `enter` fires
  before its children translate, so references are finalized while the body AST
  is still original. This keeps detection scoped to the `<for>` tag (no
  program-level plumbing) and runs it only for DOM output. The scan uses the fast
  raw-node `traverse` util (no `NodePath`), skipping each read root's subtree.
- **The create path is unchanged.** `_content` unwraps `setup._` to the raw
  render fn, so each row's create/setup runs the same binding regardless;
  `_for_selector` only changes the owner-change edge and sets `ownerSignal._ = fn`.

Runtime: `_for_selector(loopNodeAccessor, ownerValueAccessor, render)` in
`dom/signals.ts`. **The loop is untouched** — on an owner-value change
`_for_selector` resolves the two affected rows in **O(1)** through a key→branch
map lazily built from the `LoopKey` each branch already carries (`getKeyedScopes`),
cached on the current branch collection (each reconcile assigns a fresh one, so
stale maps are released with the old branches). Only loops with a selector build
it, and the build amortizes across selections until the next reconcile. Like
`_for_closure`, the matched rows are re-run from a deferred `queueRender` (the
binding's `render` may write the DOM synchronously — e.g. a constant-key loop
where the binding has no `_or` — so it must run after any same-batch reconcile),
behind the same `Gen`-generation row guard (skip rows still creating or already
destroyed). A resumed loop whose branches aren't keyed yet (`getKeyedScopes`
returns undefined), or a change with no recorded previous key (`canSelect`), falls
back to the full fan-out, which is always correct; CSR seeds the previous key on
the `_let` create path (the owner scope's `Gen` distinguishes create from update).
Non-selector loops pay **zero** bytes/work and `_for_selector` tree-shakes out
when unused. Two new accessor prefixes: `SelectorLastKey` (owner last-applied key)
and `KeyedScopes` (the cached key→branch map). Detection lives in
`translator/util/for-selector.ts`, driven from `core/for.ts`.

A compiler pre-filter bails before the body scan when the loop body has no
`referencedClosures`.

Notable unifications considered and rejected (each would net-pessimize the
common `_for_closure`-only template, since the closure variants are intentionally
self-contained so they tree-shake independently): folding the selector into
`_for_closure` behind a flag; extracting a shared fan-out/guard helper;
delegating the selector's fallback to `_for_closure`; and repurposing the
reconcile's transient `oldScopesByKey` (built from _old_ scopes and consumed to
track removals — not a current key→scope map).

**v1 scope:** one selector per loop (keeps the `SelectorLastKey` slot, keyed by
loop-node accessor, unique); multiple `===`/`!==` reads of the same owner value
are supported (they all flip together).

**Tests:** `for-keyed-selector-class` (the benchmark `by` pattern +
reorder/remove-selected/clear), `for-keyed-selector-preset` (initial-selection
create-path init), `for-selector-to` (range key), `for-selector-index` (unkeyed
`of` index), and `for-selector-by-member` (function `by` returning `item.user.id`).
Render snapshots confirm O(1) behavior: each selection touches only the two
affected rows (one when nothing was previously selected). Full
`runtime-tags/translator` suite passes with no regressions.

**Deferred (runtime primitive is general enough to extend without runtime
changes):** dynamic/computed `by` (non-static-member functions); multiple
selectors per loop; multi-comparison unions (`a === row.x || a === row.y`);
optional resume serialization of the loop key to make the first post-resume
selection O(1).

## Pointers

- Emission hook: `packages/runtime-tags/src/translator/core/for.ts` (`exit`,
  `setClosureSignalBuilder`, ~L279; `forAttrs.by` ~L301).
- Closure-signal plumbing: `packages/runtime-tags/src/translator/util/signals.ts`.
- Runtime fan-out to replace: `_for_closure` in
  `packages/runtime-tags/src/dom/signals.ts`.
- Key tracking to persist: `AccessorProp.LoopKey` / `oldScopesByKey` in
  `packages/runtime-tags/src/dom/control-flow.ts`.
