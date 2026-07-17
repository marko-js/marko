# Optimistic state & transactions

**Status:** proposal (design only, no implementation)

Marko has three in-flight efforts that all need the same missing primitive:

1. **Persisted pages** — progressively enhanced navigations/form submissions:
   the request happens over `fetch` and the server streams back patches of
   server-only changes plus updated intersections. Authors should be able to
   set an optimistic value before the navigation/submission and have the
   protocol implementor (e.g. `@marko/run`) hold it until the fetch and patch
   application complete.
2. **Async transitions** — tracked *implicitly*: when a state write causes
   the `value` of an `<await>` somewhere downstream to re-evaluate, that
   write is an async transition. Everything changed as a result of the write
   (all downstream values) is entangled in the transition, and its side
   effects (renders and effects) are held from being observed until the
   async settles. Authors never wrap anything explicitly. Optimistic state
   set alongside such a write should show immediately and revert to the real
   value when the transition completes.
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
  until the async work its **turn** entangled has settled; then it is
  released and the value falls back to the (possibly updated) source
  expression — in the same render batch as everything else that lands at
  settle.

- **One public function — `transaction(fn)`**: entangles async work that the
  reactive graph cannot see. Implicit transitions cover async that flows
  through state (`<await>` values re-evaluating); `transaction()` covers the
  rest — a manual `fetch` in a handler, or a persisted-pages implementor's
  fetch-and-patch cycle. It is the only integration API: frameworks and
  authors use the same function.

There is no explicit association between an optimistic write and the work it
waits for. Transitions entangle by *dependency* (everything downstream of
the triggering write); optimistic state entangles by *time* (everything in
the same turn). It has to be time: an overlay write is a root write — a
sibling of the real write, never downstream of it — so no dependency trace
can connect them. The turn is the implicit transaction.

**Pending is a convention, not an API.** A pending flag is just optimistic
state whose real value is `false`:

```marko
<optimistic/saving=false>

<button disabled=saving onClick() {
  saving = true; // reverts to false when this turn's async work settles
  ...
}>Save</button>
```

One tag covers optimistic *values* and pending *flags*; they revert
together because they belong to the same turn. This also means transitions
get a pending indicator for free — there is no transition object to ask,
but `<optimistic/searching=false>` set alongside the triggering write is
exactly that indicator.

| Integration     | What entangles the async work                                  | What the author writes                        |
| --------------- | -------------------------------------------------------------- | --------------------------------------------- |
| Persisted pages | Implementor calls `transaction()` while intercepting the event | Optimistic writes in the submit/click handler |
| Transitions     | Nothing — implicit: downstream `<await>` value re-evaluates    | Optimistic writes beside the real write       |
| User-land       | The author calls `transaction(fn)`                             | Both the writes and the async work            |

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
  over the source until the turn's entangled work settles, then disappears.
  Optimistic state can never be committed — real state only ever comes from
  the source expression. To keep a value, update the real state.

```marko
<let/liked = input.liked>
<optimistic/isLiked = liked>

// isLiked === liked, until an event handler assigns isLiked.
// Once the turn's async work settles, isLiked === liked again.
```

A constant source is the degenerate (and common) case — that's the pending
flag above: `<optimistic/saving=false>`.

Why a distinct tag rather than a mode of `<let>`: the source must stay
*live*. In the persisted-pages case the real data is server-owned (`input`,
route data) and is updated by the patch stream while the overlay is showing;
mirroring it into a `<let>` would recreate the classic derived-state
divergence problem. `<optimistic>` is derived-with-override, which is a
different thing from mutable-with-initial-value.

## Turns and entanglement

A **turn** is a batch: the current synchronous execution (an event dispatch,
a timer callback, a promise continuation) plus the flush it schedules —
exactly the unit the queue already batches (`schedule()` → `run()`).

1. **Optimistic writes belong to their turn.** They are provisional until
   the end of the flush.
2. **The turn's settlement** is the union of:
   - implicit transitions started by the turn's real writes (discovered
     during the flush, when downstream recomputation re-evaluates an
     `<await>` value into a new promise), and
   - explicit `transaction(fn)` calls made during the turn.

   Overlays release when the last of these settles — resolve *or* reject.
   Rejection releases exactly like resolution; the UI falls back to real
   state, which is correct by construction because optimistic values were
   never committed.
3. **A turn that entangles nothing async** releases its overlays at the end
   of the flush, ahead of paint — they never render. This single rule
   covers two importantly different situations:
   - *Progressive enhancement degradation*: no persisted-pages interceptor
     ran (no JS yet, or a real navigation is proceeding), so the optimistic
     todo evaporates unobserved.
   - *Synchronous downstream*: the author paired an optimistic write with a
     real write (`text = v; query = v`) but nothing downstream of `query`
     was async this time. The real value lands in the same flush and the
     released overlay falls back to an identical value. The same handler
     code is correct whether downstream is sync or async — which matters
     because with implicit transitions the author cannot know statically.
4. **Late writes** — optimistic writes from a promise continuation belong to
   that later turn, which entangles nothing and releases them at its flush.
   To write optimism from inside in-flight work, re-enter the transaction:
   `tx(() => progress = pct)`.

Because "nothing async happened" is now a legitimate outcome rather than an
author error, there is no unconditional dev warning. `MARKO_DEBUG` warns
only when a release in the *same flush* as the write visibly changes the
rendered value — the signature of a manual `fetch` the author forgot to
wrap in `transaction()`.

### Holds and the two channels

Implicit transitions hold renders and effects downstream of the triggering
write. Optimistic overlays are the opposite channel of the same turn — the
part the user *should* observe now:

- **Overlay writes are exempt from transition holds.** They are root queue
  entries (not downstream of anything), so the entanglement trace never
  captures them; they render in the turn's flush even while the downstream
  world is held. They still respect `<try>`/`<await>` *branch parking*
  (mutating not-yet-revealed DOM is pointless; parked renders re-run at
  reveal, unchanged from today).
- **Source re-derivations are ordinary downstream values.** If an
  `<optimistic>` source depends on transitioned state, its re-derivation is
  held with the rest of the "after" world and lands at settle — which is
  exactly when the overlay releases.

### The settle guarantee

Overlay release is queued through the normal render batch (`queueRender` +
`schedule`), in the same flush that lands the settling work — held
transition renders/effects, server patches, real-state updates from an
action. "Optimistic" and "real" swap **atomically in one batch**; there is
no frame showing stale pre-action data in between.

### `transaction(fn)`

```ts
import { transaction } from "marko";

interface Transaction {
  /** Re-enter, so writes after an `await` join this transaction's turn. */
  <T>(fn: () => T): T;
}

declare function transaction<T>(run: (tx: Transaction) => T): Promise<Awaited<T>>;
```

`transaction(fn)` calls `fn` immediately, entangles itself into the current
turn (or defines its own, when called outside one), and settles when the
returned promise settles. It returns that promise so callers can chain
error handling. Its *only* job is async the graph can't see; async that
flows through state needs nothing.

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
data apart (`id: 0` here); the whole-list case is covered by `saving`.

Timeline with enhancement active:

1. Submit dispatch: author's handler lays two provisional overlays.
2. Same dispatch, document-level listener: the implementor calls
   `transaction(() => submitAndApplyPatches(form))` — entangling into the
   same turn — and cancels the native navigation.
3. Flush: optimistic todo + disabled button paint.
4. Patch stream lands: `input.todos` now contains the real todo; the
   transaction settles; overlay release batches with the patch render. The
   temporary item is seamlessly replaced by the server's.

Without JS (or before hydration): step 2 never happens, the turn entangles
nothing, the writes release unrendered, and the browser performs the real
POST navigation.

**Implementor contract** — the entirety of what a persisted-pages
implementation must do to support optimistic state:

> Call `transaction(...)` synchronously while intercepting the
> navigation/submission event, and resolve it after applying the server's
> updates (or on failure).

Nothing else is exposed to or required of the implementor. Global
"navigation pending" UI is the implementor's domain (e.g. `@marko/run`
could expose it from the same transaction), not core's.

### 2. Async transitions (implicit)

No wrapper, no transition object — the real write *is* the transition, and
the optimistic writes beside it are the visible half of the turn:

```marko
<let/query = "">
<const/results = search(query)>     // promise derived from state
<optimistic/text = query>
<optimistic/searching = false>

<input value=text valueChange(v) {
  text = v;          // optimistic root write: renders this flush
  searching = true;  // pending flag: same turn, same lifetime
  query = v;         // downstream re-evaluates <await>'s value → transition
}>

<try>
  <await|items|=results>
    <for|item| of=items by="id">...</for>
  </await>
  <@placeholder>...</@placeholder>
</try>
```

While the new results load, the transition holds `query`'s downstream
renders — but `text` keeps the input live and `searching` drives pending
UI. On settle, the held world lands and the overlays release in the same
batch; `text` re-derives to the committed `query` — the same string, so the
hand-off is invisible. If `search()` ever resolves synchronously (cache
hit), the identical handler code degrades to a plain update (entanglement
rule 3).

Interrupted transitions (fast typing) compose through the overlay stack:
each keystroke's turn lays its own entries and starts its own transition;
display follows the most recent write; a superseded transition (its
`<await>` re-evaluated again before resolving — the existing
`thisPromise === scope[promiseAccessor]` staleness guard) counts as settled
for entanglement, releasing only its own turn's entries, which sit invisibly
beneath newer ones.

What `<optimistic>` requires from the transitions design is deliberately
minimal: (a) a settle/supersede notification per transition, and (b) the
hold exemption for overlay root writes. Everything else here works whatever
shape transitions finally take.

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
   overlay entries `{ value, turn }`, where a turn resolves to its set of
   entangled settlements. Rendered value = last entry's value, else the
   source. A settlement completing removes itself from its turn; a turn
   with no remaining settlements releases its entries; if the top entry
   changed, a render is queued.
2. **Last write wins within a turn** — a later write in the same turn
   replaces that turn's earlier entry for the same binding.
3. **Source updates while pending** re-run the source expression and store
   the result, but the overlay keeps winning until release. (No
   React-style reducer replay; see alternatives.)
4. **Writing the current value is still a write** — pending flags rely on
   entries existing independent of value equality.
5. **Release-at-flush never renders** (entanglement rule 3): the release
   check runs at the end of the flush, after downstream recomputation has
   discovered any transitions, but within the same microtask pass — ahead
   of paint.
6. **Nested `transaction()`** calls entangle into the same turn and settle
   independently; the turn releases on the last.
7. **Destroyed branches**: overlay entries die with their scope; release
   tolerates dead scopes via the existing destroyed-branch (`Gen === 0`)
   checks in the render queue.
8. **Holds**: overlay renders are exempt from transition holds but respect
   `<try>`/`<await>` branch parking (see "Holds and the two channels").
9. **SSR**: `<optimistic>` renders exactly as `<const>`; overlays are
   client-only and add no serialization. `transaction()` is a dev-mode error
   in the HTML runtime (like other interaction-only APIs). The binding is
   analyzed as assignable, so it and its dependents are never
   static-optimized away.
10. **Optimistic values should not feed `<await>`** — an overlay write whose
    downstream re-evaluates an `<await>` value would start a transition
    whose settle releases the overlay that caused it, re-deriving and
    re-evaluating again. Derive async from real state; overlay for display.
    Initially discouraged in docs, ideally a compile-time lint (the
    reference graph knows both facts statically).

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

- Module state: the current turn (created lazily on the first optimistic
  write or `transaction()` call in a batch; finalized by the flush), and
  the currently-executing transaction (set around `fn` and `tx(...)`
  re-entries).
- `_optimistic(id, fn)` returns a signal shaped like `_let`'s: during
  `rendering` it stores the source value into a base slot
  (new `AccessorPrefix.OptimisticBase`, mirrored in `accessor.ts` /
  `accessor.debug.ts`) and recomputes the effective value; outside rendering
  (an assignment) it records an overlay entry against the current turn and
  goes through `queueRender` + `schedule` like any `<let>` write. The value
  accessor always holds the *effective* value so closures and downstream
  reads stay untouched.
- `transaction(fn)`: add a settlement to the current turn → run `fn` with
  the ambient transaction set → `promise.finally(settle)`.
- The transitions mechanism registers each implicit transition it discovers
  during a flush as a settlement on that flush's turn, and reports
  supersession (the `_await_promise` staleness guard) as settlement. The
  end-of-flush release check mirrors how `<try>`'s `AwaitCounter` drains
  parked `PendingRenders`/`PendingEffects` today — same lifecycle, page
  scope instead of branch scope.
- Cost: ~a few hundred bytes; nothing loads unless `<optimistic>` or
  `transaction` is used (same philosophy as the `_enable_*` features).
- Public export: `transaction` from the package root — which requires
  making `.` a real runtime entry (today it is types-only) with a
  browser/server conditional split, or a dedicated `marko/transaction`
  subpath. Open question below.

**Testing**: fixtures under `src/__tests__/fixtures/` using async `steps`
(`Wait` controls) — optimistic write beside a transition-triggering write,
release-at-flush (sync downstream and no-entanglement), overlapping turns
and supersession, source update while pending, rejection, inside
`<for>`/`<if>`, under a `<try>` placeholder — reading the `render.md`
mutation logs to prove the single-batch settle guarantee and the hold
exemption.

## Alternatives considered

- **Explicit claiming (earlier draft of this proposal)**: `transaction()`
  claimed same-turn optimistic writes; unclaimed writes were dropped with a
  dev warning; transitions were assumed to be explicitly created and to
  claim like transactions. Superseded by turn entanglement once transitions
  became implicit: authors can't know whether a write transitions, so
  "unclaimed" had to become a legitimate outcome, and with both channels
  implicit the turn *is* the transaction — less API and one rule instead of
  three.
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
  covers every case with zero surface — including transition pending, where
  no object exists to ask.
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
(minus reducers), implicit transitions ≈ concurrent transitions without the
`startTransition` opt-in, the pending-flag convention ≈
`useFormStatus().pending` — unified so the same two pieces serve
declarative (persisted pages, transitions) and imperative (manual fetch)
updates.

## Naming

| Proposed        | Alternatives                     | Notes                                                                                                                                                              |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<optimistic>`  | `<draft>`, `<eager>`, `<assume>` | Term of art; self-documenting and greppable. Length is irrelevant — it is declared, not typed often.                                                               |
| `transaction()` | `action()`, `settle()`           | Now narrowly "entangle async the graph can't see"; `action` risks collision with future server actions. Note the DB connotation caveat: real writes inside are *not* rolled back — only overlays are. |

## Open questions

- **Value visibility under holds.** Do transitions hold only side effects
  (values recompute immediately; renders/effects park) or also double-buffer
  values? This is a transitions question, but it decides whether the
  `text !== query` staleness idiom works during a transition: with
  immediately-updated values that comparison is already `false` while held.
  The pending-flag convention (`<optimistic/searching=false>`) is robust
  either way and is what the docs should teach; comparison-based staleness
  is a bonus only under double-buffered values.
- **Supersession edge.** Treating a superseded transition as settled is
  right for the stack (newer entries mask older), but if a later turn writes
  only the real state (no fresh optimistic write), an older overlay releases
  while the world is still held — define whether that release render is
  entangled with the still-pending transition (it should be: it is queued
  during its hold window).
- **Turn granularity.** Overlays release on the *turn's last* settlement. If
  one turn triggers two independent transitions, per-turn means optimism
  holds until both settle. Per-write dependency tracing can't apply to
  root overlay writes, and per-turn matches the mental model ("this
  interaction is done"), but confirm against real usage.
- **Export location**: package-root `marko` export (requires promoting `.`
  from types-only) vs `marko/transaction` subpath.
- **Cancellation**: should `tx` expose an `AbortSignal` (wired like
  `$signal`) so superseded actions (typeahead, repeated submits) can abort
  their fetches, or is that userland composition?
- **Pre-hydration submissions**: should the persisted-pages protocol replay
  a submission-in-flight as an already-entangled turn after resume, so
  optimistic UI can appear for forms submitted before hydration?
- **Lint for optimistic-fed `<await>`** (semantics #10): warn at compile
  time when an `<await>` value is reachable from an `<optimistic>` binding
  in the reference graph.
- **Devtools/debug**: surface active turns, settlements, and overlaid
  bindings in `MARKO_DEBUG` builds for inspectability.
