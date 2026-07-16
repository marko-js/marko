# Optimistic state & transactions

**Status:** proposal (design only, no implementation)

Marko has three in-flight efforts that all need the same missing primitive:

1. **Persisted pages** — progressively enhanced navigations/form submissions:
   the request happens over `fetch` and the server streams back patches of
   server-only changes plus updated intersections. Authors should be able to
   set an optimistic value before the navigation/submission and have the
   protocol implementor (e.g. `@marko/run`) hold it until the fetch and patch
   application complete.
2. **Async transitions** — holding state updates from rendering until async
   state downstream has settled. Authors should be able to set optimistic
   state that shows immediately and reverts to the real value when the
   transition completes.
3. **User-land actions** — `preventDefault`, set some optimistic state, do a
   manual `fetch`, update real state, and have the optimistic state revert
   when the work finishes.

All three reduce to the same two needs:

- **Optimistic state**: a value an author can temporarily override, which
  falls back to the real data once "the async thing" settles.
- **Pending**: a way to tell whether that state (or the work it is waiting
  on) is still in flight.

Goals: the fewest new core tags, conventions over configuration, and one
mechanism shared by all three integrations rather than three bespoke ones.

## Design summary

Two additions, total:

- **One core tag — `<optimistic>`**: a `<const>` you can assign to. The
  assignment is an *overlay* on top of the source expression. It lasts
  exactly as long as the **transaction** that claimed it; when that
  transaction settles, the overlay is released and the value falls back to
  the (possibly updated) source expression — in the same render batch.

- **One public function — `transaction(fn)`**: runs an action. Optimistic
  writes made in the same event turn, or synchronously inside `fn`, belong
  to it. When the promise returned by `fn` settles, the transaction settles
  and its optimistic writes are released. This one function is used by
  authors *and* by framework implementors (persisted pages, transitions) —
  there is no separate integration API.

**Pending is a convention, not an API.** A pending flag is just optimistic
state whose real value is `false`:

```marko
<optimistic/saving=false>

<button disabled=saving onClick() {
  saving = true; // reverts to false when the claiming transaction settles
  ...
}>Save</button>
```

One tag covers optimistic *values* and pending *flags*; they revert together
because they are claimed by the same transaction.

| Integration     | Who creates the transaction                      | What the author writes                       |
| --------------- | ------------------------------------------------ | -------------------------------------------- |
| Persisted pages | The protocol implementor, around fetch + patches | Optimistic writes in the submit/click handler |
| Transitions     | The transition mechanism                         | Optimistic writes alongside held real writes |
| User-land       | The author, via `transaction(fn)`                | Both the writes and the async work           |

## The `<optimistic>` tag

```marko
<optimistic/varName = sourceExpression>
```

- **Reads like `<const>`**: the tag variable tracks `sourceExpression` and
  re-renders dependents when it changes.
- **Writes like `<let>`**: the tag variable is assignable (following the
  existing assignable-tag-variable convention that `<let>` itself is defined
  with — `tags/let.d.marko`'s `return=input.value valueChange=...`).
- An assignment does **not** touch the source. It lays an overlay that wins
  over the source until the claiming transaction settles, then disappears.
  Optimistic state can never be committed — real state only ever comes from
  the source expression. To keep a value, update the real state inside the
  transaction.

```marko
<let/liked = input.liked>
<optimistic/isLiked = liked>

// isLiked === liked, until an event handler assigns isLiked.
// After the claiming transaction settles, isLiked === liked again.
```

A constant source is the degenerate (and common) case — that's the pending
flag above: `<optimistic/saving=false>`.

Why a distinct tag rather than a mode of `<let>`: the source must stay
*live*. In the persisted-pages case the real data is server-owned (`input`,
route data) and is updated by the patch stream while the overlay is showing;
mirroring it into a `<let>` would recreate the classic derived-state
divergence problem. `<optimistic>` is derived-with-override, which is a
different thing from mutable-with-initial-value.

## Transactions

```ts
import { transaction } from "marko";

interface Transaction {
  /** Re-enter the claiming context (for writes after an `await`). */
  <T>(fn: () => T): T;
}

declare function transaction<T>(run: (tx: Transaction) => T): Promise<Awaited<T>>;
```

`transaction(fn)` calls `fn` immediately and settles when the returned
promise settles (resolve *or* reject). It returns that promise so callers
can chain error handling. Rejection releases overlays exactly like
resolution — the UI falls back to real state, which is correct by
construction because optimistic values were never committed.

### Claiming — the conventions

Which transaction an optimistic write belongs to is never configured; it is
determined by *when* the write happens:

1. **Inside a transaction's synchronous execution** — claimed by that
   transaction. (After an `await`, re-enter with the `tx` callback:
   `tx(() => progress = pct)`.)
2. **During an event turn, before any transaction exists** — the write is
   provisional. Any transaction started later *in the same turn* claims it.
   This ordering is the crux of the persisted-pages integration: the
   author's `onSubmit` writes optimistic state first, then the document-level
   interceptor (which runs later in the same dispatch) starts the
   transaction that claims those writes. If several transactions start in
   the same turn, all of them claim the turn's writes; the overlay is
   released when the last one settles.
3. **Claimed by nothing** — the write is dropped at the end of the turn,
   before it ever renders (the flush happens in the same microtask pass that
   runs the render queue, ahead of paint). Dev builds warn. This is the
   progressive-enhancement degradation: with no JS interception a form
   submission proceeds as a real navigation and the optimistic write simply
   evaporates.

### The settle guarantee

Overlay release is queued through the normal render batch (`queueRender` +
`schedule`), so real-state updates applied by the settling code — server
patches, `liked = ...` inside the action — and the overlay removal render
**atomically in one batch**. There is no frame showing stale pre-action
data between "optimistic" and "real".

## The three integrations, worked

### 1. Persisted pages (declarative)

The author writes a normal form — no `preventDefault`, no fetch — plus
optimistic writes in the submit handler:

```marko
// `input.todos` is server-owned data; persisted-page patches update it.
<optimistic/todos = input.todos>
<optimistic/saving = false>

<form method="POST" action="/todos" onSubmit(e) {
  todos = todos.concat({ id: 0, text: new FormData(e.target).get("text") });
  saving = true;
}>
  <input name="text">
  <button disabled=saving>Add</button>
</form>

<ul>
  <for|todo| of=todos by="id">
    <li class={ saving: !todo.id }>${todo.text}</li>
  </for>
</ul>
```

Note the shadowing idiom: naming the optimistic view `todos` means the rest
of the template renders it with no awareness of the mechanism. Per-item
pending needs no API either — the author can tell their own optimistic
data apart (`id: 0` here), the whole-list case is covered by `saving`.

Timeline with enhancement active:

1. Submit dispatch: author's handler lays two provisional overlays.
2. Same dispatch, document-level listener: the implementor calls
   `transaction(() => submitAndApplyPatches(form))` — claiming the writes —
   and cancels the native navigation.
3. Microtask flush: optimistic todo + disabled button paint.
4. Patch stream lands: `input.todos` now contains the real todo; the
   transaction settles; overlay release batches with the patch render. The
   temporary item is seamlessly replaced by the server's.

Without JS (or before hydration): step 2 never happens, the writes are
dropped unrendered, and the browser performs the real POST navigation.

**Implementor contract** — the entirety of what a persisted-pages
implementation must do to support optimistic state:

> Start `transaction(...)` synchronously while intercepting the
> navigation/submission event, and resolve it after applying the server's
> updates (or on failure).

Nothing else is exposed to or required of the implementor. Global
"navigation pending" UI is the implementor's domain (e.g. `@marko/run`
could expose it from the same transaction), not core's.

### 2. Async transitions

Transitions and optimistic state are duals sharing one lifecycle:

- a transition **holds real writes** until downstream async settles
  (generalizing what `<try>`/`<await>` already do today — parking
  `PendingRenders`/`PendingEffects` on a branch until its `AwaitCounter`
  drains);
- optimistic writes **show immediately** and *un*-apply at the same moment
  the held writes land.

Proposal: a transition *is* (or owns) a transaction. Whatever the eventual
transition API looks like, it starts a transaction when it begins and
settles it when its async work drains — optimistic integration then falls
out of claiming rule 2 with zero extra API:

```marko
<let/query = "">
<const/results = search(query)>     // promise derived from state
<optimistic/text = query>

<input value=text valueChange(v) {
  text = v;                          // shows every keystroke immediately
  transition(() => query = v);       // held until the new results resolve
}>

<try>
  <await|items|=results>
    <for|item| of=items by="id">...</for>
  </await>
  <@placeholder>...</@placeholder>
</try>
```

While results load, `text` keeps the input live even though `query` (and
everything derived from it) is held. On settle, `query` commits and `text`
reverts to it — the same string, so the hand-off is invisible. A stale
indicator is a plain comparison: `class={ stale: text !== query }`.
Interrupted transitions (fast typing) work via the overlay stack: each
keystroke's transaction claims its own write, display follows the most
recent, and each settle releases only its own entries.

### 3. User-land actions (imperative)

```marko
import { transaction } from "marko";

<let/liked = input.liked>
<optimistic/isLiked = liked>

<button onClick() {
  isLiked = !liked;
  transaction(async () => {
    const res = await fetch("/like", { method: "POST" });
    liked = (await res.json()).liked;   // real update
  }).catch(showToast);                  // on failure isLiked already reverted
}>
  ${isLiked ? "Liked" : "Like"}
</button>
```

Writes after an `await` use the transaction's re-entry callback — which also
gives a tidy progress idiom (the bar naturally disappears on settle):

```marko
<optimistic/progress = 0>

<button onClick() {
  transaction(async (tx) => {
    for await (const pct of upload(file)) {
      tx(() => progress = pct);
    }
  });
}>Upload</button>
```

## Detailed semantics

1. **Overlay stack.** Each `<optimistic>` binding keeps an ordered list of
   overlay entries `{ value, claimants }`. Rendered value = last entry's
   value, else the source. A transaction settling removes itself from each
   entry's claimants and deletes entries left unclaimed; if the top entry
   changed, a render is queued.
2. **Last write wins within a transaction** — a later write by the same
   transaction replaces its earlier entry.
3. **Source updates while pending** do re-run the source expression and
   store the result, but the overlay keeps winning until settle. (No
   React-style reducer replay; see alternatives.)
4. **Writing the current value is still a write** — pending flags rely on
   entries existing independent of value equality.
5. **Unclaimed writes never render** (claiming rule 3). This is dropped, not
   reverted: the flush precedes paint.
6. **Nesting**: a `transaction()` started inside another's synchronous run is
   claimed like any same-turn sibling (both hold the turn's provisional
   writes); they otherwise settle independently.
7. **Destroyed branches**: overlay entries die with their scope; settle
   tolerates dead scopes via the existing destroyed-branch (`Gen === 0`)
   checks in the render queue.
8. **`<try>` interplay**: optimistic renders flow through `queueRender`, so
   placeholder parking (`_enable_catch`'s `runRender` override) applies to
   them unchanged.
9. **SSR**: `<optimistic>` renders exactly as `<const>`; overlays are
   client-only and add no serialization. `transaction()` is a dev-mode error
   in the HTML runtime (like other interaction-only APIs). The binding is
   analyzed as assignable, so it and its dependents are never
   static-optimized away.
10. **Writes outside any event turn or transaction** (e.g. a bare
    `setTimeout`) follow rule 5: dropped + dev warning. The fix is to wrap
    the async work in `transaction()`, which is also the correct semantic
    fix — something must define when the optimism expires.

## Implementation sketch

Grounded in the current runtime; expected to be small and pay-for-what-you-use.

**Translator** (`src/translator/core/optimistic.ts`, registered in
`core/index.ts` + `util/is-core-tag.ts`):

- `analyze` merges `<let>`'s var tracking (assignable binding,
  `trackVarReferences` with a change accessor **not** exposed as an attr)
  with `<const>`'s value-expression reference tracking, so source updates
  flow like a derived value and assignments compile like `<let>`
  assignments (through the binding's signal setter).
- `translate` emits `_optimistic(id, fn)` via `callRuntime`; HTML output
  lowers to the `<const>` translation.
- Type stub `tags/optimistic.d.marko` mirroring `let.d.marko` minus the
  `valueChange` input:

  ```marko
  export interface Input<T> {
    value: T;
  }

  return=input.value valueChange=(newValue: T) => {}
  ```

**Runtime** (`src/dom/transaction.ts`):

- Module state: the currently-executing transaction (set around `fn` and
  `tx(...)` re-entries) and the current turn's provisional entries, flushed
  by the same microtask pass as `schedule()`/`run()`.
- `_optimistic(id, fn)` returns a signal shaped like `_let`'s: during
  `rendering` it stores the source value into a base slot
  (new `AccessorPrefix.OptimisticBase`, mirrored in `accessor.ts` /
  `accessor.debug.ts`) and recomputes the effective value; outside rendering
  (an assignment) it records an overlay entry against the current
  transaction — or the turn buffer — and goes through `queueRender` +
  `schedule` like any `<let>` write. The value accessor always holds the
  *effective* value so closures and downstream reads stay untouched.
- `transaction(fn)`: claim turn buffer → run `fn` with the ambient
  transaction set → `promise.finally(release)`, where `release` walks the
  transaction's entries per semantics #1 and queues renders for changed
  tops. ~a few hundred bytes; nothing loads unless `<optimistic>` or
  `transaction` is used (same philosophy as the `_enable_*` features).
- Public export: `transaction` from the package root — which requires
  making `.` a real runtime entry (today it is types-only) with a
  browser/server conditional split, or a dedicated `marko/transaction`
  subpath. Open question below.

**Testing**: fixtures under `src/__tests__/fixtures/` using async `steps`
(`Wait` controls) — optimistic write + claim + settle, unclaimed drop,
overlapping transactions, source update while pending, rejection, inside
`<for>`/`<if>`, under a `<try>` placeholder — reading the `render.md`
mutation logs to prove the single-batch settle guarantee.

## Alternatives considered

- **Overlay writes on `<let>` directly** (an `optimistic(x = v)` intrinsic,
  no new tag): fails the headline case — persisted-pages data is
  server-owned/derived, and `<let>` initialized from it diverges. Also adds
  expression-level compiler magic, which is worse than a tag in a
  tag-language.
- **Make `<const>` assignable with revert semantics**: zero new tags, but
  "assignable const" is hostile to teaching and turns accidental writes
  into delayed-action bugs. A distinct name is the documentation.
- **Pending as API surface** (`<optimistic/[value, pending]>`, a
  `pending(x)` intrinsic, a reactive `tx.pending` object): destructured tag
  variables aren't assignable, reactive property objects have no precedent
  in the runtime model, and the `<optimistic/flag=false>` convention already
  covers every case with zero surface.
- **A `<transaction/t>` template tag**: transactions are created at action
  time in handlers/frameworks; a declared one invites misuse and would need
  a callable tag variable with reactive properties — again no precedent.
- **React `useOptimistic` reducer/replay semantics** (store an update
  function, replay over each new real value): powerful for interleaved
  server pushes but a heavier mental model and a function-valued assignment
  idiom foreign to Marko. The overlay stack covers the practical cases;
  replay can be revisited compatibly (e.g. accepting a function value)
  if real usage demands it.
- **Per-integration APIs** (a persisted-pages hook, a transition-specific
  optimistic option, a user-land helper): three bespoke mechanisms was the
  outcome this design exists to avoid.

Prior art mapping, for orientation: `<optimistic>` ≈ React `useOptimistic`
(minus reducers), `transaction()` ≈ `startTransition`/actions as the thing
that scopes optimism, pending-flag convention ≈ `useFormStatus().pending` —
but unified so the same two pieces serve declarative (persisted pages,
transitions) and imperative (manual fetch) updates.

## Naming

| Proposed        | Alternatives                          | Notes                                                                                          |
| --------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `<optimistic>`  | `<draft>`, `<eager>`, `<assume>`      | Term of art; self-documenting and greppable. Length is irrelevant — it is declared, not typed often. |
| `transaction()` | `action()`, `startTransition()`       | Describes the revert-on-settle contract. `action` risks collision with future server actions; note the DB connotation (real writes inside are *not* rolled back — only overlays are). |

## Open questions

- **Export location**: package-root `marko` export (requires promoting `.`
  from types-only) vs `marko/transaction` subpath.
- **Cancellation**: should `tx` expose an `AbortSignal` (wired like
  `$signal`) so superseded actions (typeahead, repeated submits) can abort
  their fetches, or is that userland composition?
- **Same-turn multi-claim** (rule 2): "all transactions claim, last settle
  releases" vs "first transaction claims". All-claim is proposed as it does
  the right thing when one event legitimately fans out into several
  requests; confirm against real persisted-pages usage.
- **Transitions**: whether the transition object *is* the transaction or
  merely owns one — to be settled by the transitions design; this proposal
  only requires the settle lifecycle.
- **Pre-hydration submissions**: should the persisted-pages protocol replay
  a submission-in-flight as an already-claimed transaction after resume, so
  optimistic UI can appear for forms submitted before hydration?
- **Devtools/debug**: surface active transactions and overlaid bindings in
  `MARKO_DEBUG` builds (names, claim counts) for inspectability.
