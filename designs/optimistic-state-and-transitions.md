# Optimistic state & transitions

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
   when the work finishes. Includes async started from places Marko never
   sees: third-party component events, DOM events subscribed imperatively,
   sockets and store callbacks.

All three reduce to the same two needs:

- **Optimistic state**: a value an author can temporarily override, which
  falls back to the real data once "the async thing" settles.
- **Pending**: a way to tell whether that state (or the work it is waiting
  on) is still in flight.

Goals: the fewest new core tags, conventions over configuration, and one
mechanism shared by all three integrations rather than three bespoke ones.

## Design summary

One core tag, one convention, one implementor-tier function:

- **`<optimistic>`**: a `<const>` you can assign to. A **sync assignment**
  lays an *overlay* on top of the source — it lasts until the async work its
  **turn** entangled has settled, then releases, falling back to the
  (possibly updated) source in the same render batch as everything else
  that lands at settle. A **thenable assignment** is an *eventual write*:
  it is this turn's transition, the displayed value doesn't change while it
  is in flight, and its resolution writes through to the variable's bound
  source. No state cell ever *holds* a promise — thenables appear only in
  write position; every read, of the variable or its source, is always a
  settled value.

  ```marko
  <let/liked = input.liked>        // boolean — always
  <optimistic/isLiked := liked>    // boolean — always; bound, so eventual
                                   // writes resolve through to `liked`

  <button onClick() {
    isLiked = !isLiked;                                // guess, shows now
    isLiked = fetch("/like", { method: "POST" })       // the operation
      .then((res) => res.json())
      .then((data) => data.liked);                     // resolution → liked
  }>
  ```

  The write is reachable from *anywhere* the variable is in scope —
  handlers, `<script>` listeners, third-party callbacks — so connecting a
  promise needs no chokepoint, no wrapper, and no extra tag.

- **Convention — return the promise.** A handler the runtime itself invokes
  (delegated native events, native controllable changes) that returns a
  thenable entangles it into the turn — sugar for fire-and-forget async
  with no state result.

- **Implementor tier — `transition()`** (subpath import, e.g.
  `marko/transition`): the same entangle operation for code outside compiled
  templates — a persisted-pages interceptor listening at the document level,
  whose async (fetch + patch stream) has no author-visible state to flow
  through. Authors never import it.

Earlier revisions had a second core tag (`<transition/fn(args) { body }>`)
and then await-like sources (state cells holding `T | Promise<T>`); both
are subsumed — see "Options compared".

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

| Integration     | What entangles the async work                                 | What the author writes                        |
| --------------- | -------------------------------------------------------------- | ---------------------------------------------- |
| Persisted pages | Implementor calls `transition()` while intercepting the event | Optimistic writes in the submit/click handler |
| Transitions     | Nothing — implicit: downstream `<await>` value re-evaluates   | Optimistic writes beside the real write       |
| User-land       | Implicit: the eventual write *is* the transition              | The guess, then `x = fetch(...)...`           |

## The `<optimistic>` tag

Two source forms, distinguished by the language's existing bind convention:

```marko
<optimistic/view = expr>      // read-only source: any expression
<optimistic/view := binding>  // bound source: an assignable binding
                              // (exact shorthand spelling TBD; the concept
                              // is the existing `:=` two-way marker)
```

- **Reads like `<const>`**: the tag variable tracks its source and
  re-renders dependents when it changes. The source is always a settled,
  synchronous value — promises never live in readable state.
- **Sync writes are overlays** (both forms): the assignment does **not**
  touch the source; it lays an overlay that wins until the turn's entangled
  work settles, then disappears. Optimistic values can never be committed.
- **Thenable writes are eventual writes** (bound form only): the displayed
  value is untouched while the thenable is in flight; the write registers
  as the turn's transition; on resolution the value writes through to the
  bound source — the change-handler mechanism `<let>` bindings already have
  (`_let_change` / `TagVariableChange`). On rejection nothing is written.
  A newer eventual write to the same variable supersedes an in-flight one —
  the same staleness rule as re-handing `<await>` a new promise. A thenable
  written to a read-only-source variable is a compile-time error where the
  analyzer can see it (the reference graph knows the source isn't
  assignable) and a dev-mode runtime error otherwise.
- Assignments evaluate to their right-hand side (the existing `_let` setter
  already returns the value), so error handling chains naturally:
  `(isLiked = fetch(...)).catch(showToast)`.

The type story uses the dual-parameter pattern `let.d.marko` already has
(`Input<T, K = T>` — separate read and change types): the variable *reads*
as `T` and *accepts* `T | PromiseLike<T>`. Reads are never union-typed;
the promise exists only in the write expression.

```marko
<let/liked = input.liked>
<optimistic/isLiked := liked>

// isLiked === liked, until an event handler assigns isLiked.
// A sync assignment shows immediately and expires with the turn;
// a thenable assignment resolves into liked itself.
```

A constant read-only source is the degenerate (and common) case — that's
the pending flag above: `<optimistic/saving=false>`.

Why a distinct tag rather than a mode of `<let>`: the source must stay
*live*. In the persisted-pages case the real data is server-owned (`input`,
route data) and is updated by the patch stream while the overlay is showing;
mirroring it into a `<let>` would recreate the classic derived-state
divergence problem. And eventual writes belong here, not on `<let>`:
"keep showing the current value until the async lands" is exactly the
optimistic display contract, and `<let>` stays the small, synchronous
primitive.

## Turns and entanglement

A **turn** is a batch: the current synchronous execution (an event dispatch,
a timer callback, a promise continuation) plus the flush it schedules —
exactly the unit the queue already batches (`schedule()` → `run()`).

1. **Optimistic overlays belong to their turn.** They are provisional until
   the end of the flush.
2. **The turn's settlement** is the union of:
   - implicit transitions started by the turn's writes — an `<await>` value
     re-evaluating to a new thenable (discovered during the flush) or an
     **eventual write** to an `<optimistic>` variable (discovered at the
     write),
   - thenables returned by the turn's runtime-invoked handlers, and
   - implementor-tier `transition()` calls made during the turn.

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
   - *Synchronous downstream*: the author paired an overlay with a real
     write that turned out sync (a cache hit instead of a fetch). The real
     value lands in the same flush and the released overlay falls back to
     an identical value. The same handler code is correct either way.
4. **Late writes** — optimistic overlays from a promise continuation belong
   to that later turn, which entangles nothing and releases them at its
   flush. In-flight feedback (progress bars) is real state, not optimism:
   write a plain `<let>` from the continuations and reset it at the end.

Because "nothing async happened" is a legitimate outcome rather than an
author error, there is no unconditional dev warning. `MARKO_DEBUG` warns
only when a release in the *same flush* as the write visibly changes the
rendered value — the signature of an action that started a fetch and let
the promise escape (not written eventually, not returned).

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
- **An in-flight eventual write holds nothing by itself.** Until it
  resolves, nothing downstream has changed — stale-while-pending needs no
  hold machinery; the downstream world moves once, at settle, when the
  resolution writes through to the source.

### The settle guarantee

Overlay release is queued through the normal render batch (`queueRender` +
`schedule`), in the same flush that lands the settling work — the eventual
write's resolution flowing into its source, held transition
renders/effects, server patches. "Optimistic" and "real" swap **atomically
in one batch**; there is no frame showing stale pre-action data in between.

## Connecting async work

### Eventual writes — the primary form

Model the action as: *guess now, truth later* — two assignments to the same
variable. Because the connection is just an assignment, it works from any
closure that can reach the variable — the cases that previously forced a
dedicated tag:

```marko
<let/position = input.position>
<optimistic/pos := position>

<map-widget latlng=pos onMarkerDrag(latlng) {
  pos = latlng;                     // overlay: marker sticks where dropped
  pos = api.savePosition(latlng);   // eventual write: resolution → position
}/>
```

Dragging again before the save lands supersedes the in-flight eventual
write — only the newest resolution reaches `position`. Stale-while-pending
needs no overlay at all:

```marko
<let/items = []>
<optimistic/results := items>
<optimistic/searching = false>

<input valueChange(q) {
  searching = true;
  results = fetch(`/search?q=${q}`).then((r) => r.json());
}>

<for|item| of=results by="id">...</for>
```

Each keystroke supersedes the previous request; `results` keeps showing the
last settled list until the surviving request resolves into `items`;
`searching` re-lays each turn and releases when it settles.

### Returned promises — handler sugar

Handlers that the runtime itself invokes dispatch through one chokepoint
(`handleDelegated` in `dom/event.ts` calls each handler; native controllable
change handlers similarly), and their return values currently mean nothing.
Convention: **a runtime-invoked handler that returns a thenable entangles
it** — for fire-and-forget async with no state result to write eventually:

```marko
<button onClick() {
  seen = true;                        // optimistic flag
  return api.markNotificationRead(id);
}>

<form onSubmit=submitOrder>   // extracted: any async function in a plain module
```

Scope honestly: this covers **only** runtime-invoked handlers. Function
inputs to custom tags (`onMarkerDrag=...`) are invoked by the child
component, and imperative listeners never pass through Marko — those
connect via eventual writes. A fire-and-forget action with *only* a pending
flag, triggered from a non-runtime callback, has no eventual-write target
and no return channel — a known gap; see open questions.

### `transition()` — the implementor form

Persisted-pages interceptors are framework `.ts` listening at the document
level: no template, and no author-visible state for the fetch-and-patch
cycle to flow through. Importing runtime modules is already how frameworks
integrate:

```ts
import { transition } from "marko/transition"; // subpath TBD

declare function transition<T>(work: () => T): Promise<Awaited<T>>;
```

Same entangle operation, one-shot. Documented as framework/advanced API,
not taught to app authors.

### Options compared

| | Shape | Verdict |
| - | ----- | ------- |
| A | Author-facing `import { transition } from "marko"` | Demoted to implementor tier — no author-import precedent in Marko |
| B | Magic `$transition(fn)` | Rejected — grows the `$` namespace (`$global`/`$signal` only) for a function-shaped API anyway |
| C | `<transition/fn(args) { body }>` declared transition | Superseded — required new grammar and a second tag; viable future sugar |
| D | `<transition=op>` body-less sink fed by promise-in-state | Subsumed — the optimistic variable itself became the sink |
| E | Returned-promise convention | Kept for runtime-invoked handlers — zero surface where it applies |
| F | Await-like sources: state cells hold `T \| Promise<T>` | Superseded — a readable union is a trap (a pending promise is *truthy*; every honest read needs a thenable check) |
| G | **Eventual writes: thenables assigned to the optimistic variable, resolving through to its bound source** | **Adopted** — the promise exists only in write position; every read everywhere stays settled |

The arc, for the record: v1 had an author-facing imported `transaction()`
with explicit claiming; implicit transitions collapsed claiming into turn
entanglement; the returned-promise convention then briefly replaced the
function outright, until third-party/imperative event sources showed a
manual form is mandatory; the manual form grew into a declared
`<transition/fn(args) { body }>` tag with `$signal` abort and supersession;
await-like sources (F) then subsumed the tag by putting the operation into
the graph as state — at the cost of union-typed reads; and G keeps F's
insight (the promise connects through the reactive graph, discovered like
an `<await>` update) while confining the thenable to the one position where
nothing ever reads it: the assignment. An earlier revision rejected
thenable-assignment semantics because "the resolution has no home"; the
bound source (`:=`) is that home, and it reuses the change-handler
write-back machinery that already exists.

What C offered that G gives up, and where each went: per-call `$signal`
abort → open question, unified with abort for implicit transitions
(superseding an eventual write is the same event as superseding an
`<await>` promise); compiler-routed in-body optimistic writes → in-flight
feedback is real state (turns rule 4); named call sites → an extracted
async function reads nearly the same (`results = search(q)`); the
tag-variable method-shorthand grammar → deleted entirely.

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

Both variables use the read-only source form — the truth is server-owned,
so there is nothing to write eventually; the implementor's transition
defines the window. Note the shadowing idiom: naming the optimistic view
`todos` means the rest of the template renders it with no awareness of the
mechanism. Per-item pending needs no API either — the author can tell
their own optimistic data apart (`id: 0` here); the whole-list case is
covered by `saving`.

Timeline with enhancement active:

1. Submit dispatch: author's handler lays two provisional overlays.
2. Same dispatch, document-level listener: the implementor calls
   `transition(() => submitAndApplyPatches(form))` — entangling into the
   same turn — and cancels the native navigation.
3. Flush: optimistic todo + disabled button paint.
4. Patch stream lands: `input.todos` now contains the real todo; the
   transition settles; overlay release batches with the patch render. The
   temporary item is seamlessly replaced by the server's.

Without JS (or before hydration): step 2 never happens, the turn entangles
nothing, the writes release unrendered, and the browser performs the real
POST navigation.

**Implementor contract** — the entirety of what a persisted-pages
implementation must do to support optimistic state:

> Call `transition(...)` synchronously while intercepting the
> navigation/submission event, and resolve it after applying the server's
> updates (or on failure).

Nothing else is exposed to or required of the implementor. Global
"navigation pending" UI is the implementor's domain (e.g. `@marko/run`
could expose it from the same transition), not core's.

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

An eventual write is the same trigger from the other side — `<await>` shows
a placeholder while pending; `<optimistic>` keeps the last value or your
overlay. The two compose in one template: use `<await>` where
blank-then-fill is right, `<optimistic>` where stale-while-pending is
right.

What `<optimistic>` requires from the transitions design is deliberately
minimal: (a) a settle/supersede notification per transition, and (b) the
hold exemption for overlay root writes. Everything else here works whatever
shape transitions finally take.

### 3. User-land actions (imperative)

```marko
<let/liked = input.liked>
<optimistic/isLiked := liked>

<button onClick() {
  isLiked = !isLiked;
  (isLiked = fetch("/like", { method: "POST" })
    .then((res) => res.json())
    .then((data) => data.liked)
  ).catch(showToast);
}>
  ${isLiked ? "Liked" : "Like"}
</button>
```

On resolve, the eventual write lands in `liked` and the overlay releases in
the same batch — the guess is replaced by the server's answer. On reject,
nothing is written and `isLiked` falls back to the untouched `liked`. Every
read of `liked` and `isLiked`, everywhere, is a plain boolean.

## Detailed semantics

1. **Overlay stack.** Each `<optimistic>` binding keeps an ordered list of
   overlay entries `{ value, turn }`, where a turn resolves to its set of
   entangled settlements. Rendered value = last entry's value, else the
   source. A settlement completing removes itself from its turn; a turn
   with no remaining settlements releases its entries; if the top entry
   changed, a render is queued.
2. **Eventual writes.** A thenable assigned to a bound-source variable does
   not change the rendered value; it registers a settlement on the current
   turn and, on resolution, writes the value through to the source binding
   (in the settle batch). A newer eventual write to the same binding
   supersedes an in-flight one — only the current write's resolution lands
   (the `<await>` staleness rule). Rejection writes nothing. Thenables
   assigned to read-only-source variables are a compile-time error where
   statically visible, else a dev-mode error.
3. **Last overlay wins within a turn** — a later sync write in the same
   turn replaces that turn's earlier entry for the same binding. Overlay
   and eventual write to the same binding in one turn compose (the common
   "guess + operation" pair).
4. **Source updates while pending** re-run the source expression and store
   the result, but the overlay keeps winning until release. (No
   React-style reducer replay; see alternatives.)
5. **Writing the current value is still a write** — pending flags rely on
   entries existing independent of value equality.
6. **Release-at-flush never renders** (entanglement rule 3): the release
   check runs at the end of the flush, after downstream recomputation has
   discovered any transitions, but within the same microtask pass — ahead
   of paint.
7. **Entanglement boundary**: eventual writes and pending `<await>` values
   entangle the turn that caused them; runtime-invoked handlers entangle
   via returned thenables; implementor `transition()` entangles explicitly.
   Child-invoked function inputs and imperative listeners connect via
   eventual writes. `<lifecycle>` hooks and `<script>` bodies never
   auto-entangle (they are render-adjacent, not user actions).
8. **Destroyed branches**: overlay entries and in-flight eventual writes
   die with their scope (the supersession guard already ignores stale
   resolutions); release tolerates dead scopes via the existing
   destroyed-branch (`Gen === 0`) checks in the render queue.
9. **Holds**: overlay renders are exempt from transition holds but respect
   `<try>`/`<await>` branch parking; an in-flight eventual write holds
   nothing (see "Holds and the two channels").
10. **SSR**: `<optimistic>` renders as `<const>`; overlays and eventual
    writes are client-only (assignments don't happen during SSR), so there
    is no serialization impact; the implementor `transition()` errors in
    the HTML runtime. Optimistic bindings are analyzed as assignable, so
    they and their dependents are never static-optimized away.
11. **Pending is not derivable from values.** State never holds promises,
    so there is nothing to type-check; the runtime knows which bindings
    have in-flight eventual writes, but exposing that (vs the flag
    convention) is an open question.
12. **Optimistic values should not feed `<await>`** — an overlay write whose
    downstream re-evaluates an async value would start a transition whose
    settle releases the overlay that caused it, re-deriving and
    re-evaluating again. Derive async from real state; overlay for display.
    Initially discouraged in docs, ideally a compile-time lint (the
    reference graph knows both facts statically).

## Implementation sketch

Grounded in the current runtime; expected to be small and pay-for-what-you-use.
No new grammar (the bound form reuses the existing `:=` convention).

**Translator** (`src/translator/core/optimistic.ts`, registered in
`core/index.ts` + `util/is-core-tag.ts`):

- `analyze` merges `<let>`'s var tracking (assignable binding) with
  `<const>`'s value-expression reference tracking; the bound form
  additionally records the source binding for write-through and validates
  it is assignable (compile error otherwise — and thenable writes to
  read-only-source variables are rejected where the analyzer can see them).
- `translate` emits `_optimistic(id, fn)` / `_optimistic_bound(id, fn,
  sourceSetter)` via `callRuntime`; HTML output lowers to the `<const>`
  translation.
- Type stub `tags/optimistic.d.marko` using `let.d.marko`'s existing
  dual-parameter pattern — read type vs write type:

  ```marko
  export interface Input<T> {
    value: T;
  }

  return=input.value valueChange=(newValue: T | PromiseLike<T>) => {}
  ```

**Runtime** (`src/dom/optimistic.ts`):

- Module state: the current turn (created lazily on the first optimistic
  write or entanglement in a batch; finalized by the flush).
- `_optimistic(id, fn)` returns a signal shaped like `_let`'s: during
  `rendering` the source value goes to a base slot (new
  `AccessorPrefix.OptimisticBase`, mirrored in `accessor.ts` /
  `accessor.debug.ts`) and the effective value recomputes. Outside
  rendering, the setter branches on `isPromise` exactly as
  `_await_promise` does: a sync value records an overlay entry against the
  current turn and goes through `queueRender` + `schedule`; a thenable is
  tracked at `AccessorPrefix.Promise + accessor` with the current-promise
  supersession guard, registers a settlement on the current turn, and on
  resolution calls the bound source's setter (the `TagVariableChange` /
  `_let_change` write-back machinery) via `queueAsyncRender`. The setter
  returns its input, preserving assignment-expression chaining. The value
  accessor always holds the *effective* value so closures and downstream
  reads stay untouched.
- **Handler returns**: `handleDelegated` (`dom/event.ts`) already invokes
  every handler at one chokepoint; capture the return value and, when the
  optimistic feature is enabled (`_enable_*`-style self-modifying install,
  so apps without `<optimistic>` pay nothing — not even the thenable
  check), entangle thenables into the current turn.
- The transitions mechanism registers each implicit transition (await
  values and eventual writes) as a settlement on its turn, and reports
  supersession as settlement. The end-of-flush release check mirrors how
  `<try>`'s `AwaitCounter` drains parked `PendingRenders`/`PendingEffects`
  today — same lifecycle, page scope instead of branch scope.
- Public export: implementor-tier subpath only (`marko/transition`, final
  name TBD) — the package root stays types-only, since authors never import
  anything.

**Testing**: fixtures under `src/__tests__/fixtures/` using async `steps`
(`Wait` controls) — overlay + eventual write pair, eventual-write
supersession, stale-while-pending with no overlay, write-through into the
bound source, thenable write to a read-only source (compile error fixture),
handler-returned promise entanglement, release-at-flush (sync value, no
entanglement, escaped-promise warning), overlapping turns, source update
while overlaid, rejection, scope teardown mid-flight, under a `<try>`
placeholder — reading the `render.md` mutation logs to prove the
single-batch settle guarantee and the hold exemption.

## Alternatives considered

- **A dedicated manual-transition surface** — the full arc is in "Options
  compared": imported `transaction()` (v1, explicit claiming), the
  returned-promise convention alone, a declared callable, the
  `<transition/fn(args) { body }>` tag (implicit-async body, `$signal`
  abort, supersession, compiler-routed in-body writes), and await-like
  sources. All subsumed by eventual writes; the declared tag remains viable
  as future sugar if named actions are missed.
- **Await-like sources / promise-in-state** (the immediately preceding
  revision): put the operation in the state cell (`boolean |
  Promise<boolean>`) and let the optimistic source resolve it. Rejected
  because the union is readable: a pending promise is truthy, every honest
  read of the raw cell needs a thenable check, and a settled promise is
  still a thenable so even pending-ness can't be type-checked. Eventual
  writes keep the same graph connection while confining the promise to
  write position.
- **Overlay writes on `<let>` directly** (an `optimistic(x = v)` intrinsic,
  no new tag): fails the headline case — persisted-pages data is
  server-owned/derived, and `<let>` initialized from it diverges. Also adds
  expression-level compiler magic, which is worse than a tag in a
  tag-language.
- **Eventual writes on `<let>` itself** (skip the optimistic variable):
  tempting, but it puts an `isPromise` branch and transition bookkeeping in
  the hottest, smallest state primitive, makes every let a potential
  transition source, and loses the read/write split (`<optimistic>` is
  where "keep showing the current value" is the contract).
- **Make `<const>` assignable with revert semantics**: zero new tags, but
  "assignable const" is hostile to teaching and turns accidental writes
  into delayed-action bugs. A distinct name is the documentation.
- **Pending as API surface** (`<optimistic/[value, pending]>`, a
  `pending(x)` intrinsic, a reactive property on a transition object):
  destructured tag variables aren't assignable, reactive property objects
  have no precedent in the runtime model, and the `<optimistic/flag=false>`
  convention already covers every case with zero surface. Revisit only if
  the flag idiom proves insufficient (tracked as an open question).
- **React `useOptimistic` reducer/replay semantics** (store an update
  function, replay over each new real value): powerful for interleaved
  server pushes but a heavier mental model and a function-valued assignment
  idiom foreign to Marko. The overlay stack covers the practical cases;
  replay can be revisited compatibly if real usage demands it.
- **Per-integration APIs** (a persisted-pages hook, a transition-specific
  optimistic option, a user-land helper): three bespoke mechanisms was the
  outcome this design exists to avoid.

Prior art mapping, for orientation: `<optimistic>` ≈ React `useOptimistic`
(minus reducers) with the write-side of a resource fused in (an eventual
write is roughly Solid's `createResource` refetch keeping the previous
value, expressed as assignment), implicit transitions ≈ concurrent
transitions without the `startTransition` opt-in, returned promises ≈
React 19 "actions are async functions" with the wrapper dissolved into a
convention, the pending-flag convention ≈ `useFormStatus().pending` —
unified so the same pieces serve declarative (persisted pages, transitions)
and imperative (manual fetch, third-party events) updates.

## Naming

| Proposed       | Alternatives                     | Notes                                                                                                                |
| -------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `<optimistic>` | `<draft>`, `<eager>`, `<assume>` | Term of art; self-documenting and greppable. Length is irrelevant — it is declared, not typed often.                 |
| `transition()` | `transaction()`, `startTransition()` | Implementor-tier import; low-stakes.                                                                                 |

The returned-promise convention needs no name in code — which is the point —
but docs need a phrase; "settled handlers" or simply "return your promise"
are candidates. The bound form's exact spelling (`:=` in the tag-variable
default-value position) needs a parser/language-tools check.

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
- **The flag-only gap.** A fire-and-forget action with no state result,
  triggered from a non-runtime callback, has no eventual-write target and
  no return channel. Options: accept (route such actions through a handler
  return or model a real result), allow lifecycle-only thenable writes to
  read-only-source variables (resolution discarded — semantically muddier),
  or an implementor-tier escape hatch. Needs a real-world case to decide.
- **Exposing in-flight-ness.** The runtime knows which bindings have
  pending eventual writes; is a compiler-known accessor worth the surface,
  or does the flag idiom suffice?
- **Bound-form spelling.** Confirm `:=` works in the tag-variable
  default-value position (`<optimistic/isLiked := liked>`) in the parser
  and language-tools, or pick the equivalent spelling.
- **Abort.** Superseding an in-flight eventual write is the same event as
  superseding an `<await>` promise — if the transitions design grows an
  abort story (surfacing a signal to the promise producer), both get it.
  Until then, cancellation is userland (`AbortController` in the closure).
- **Handler-return opt-out.** Is there a real case for returning a promise
  from a runtime-invoked handler *without* entangling it? (Presumed no —
  don't return it — but arrow-shorthand handlers auto-return:
  `onClick=() => doAsyncThing()` entangles. That is usually desired;
  confirm.)
- **Pre-hydration submissions**: should the persisted-pages protocol replay
  a submission-in-flight as an already-entangled turn after resume, so
  optimistic UI can appear for forms submitted before hydration?
- **Lint for optimistic-fed async values** (semantics #12): warn at compile
  time when an `<await>` value is reachable from an `<optimistic>` binding
  in the reference graph.
- **Devtools/debug**: surface active turns, settlements, and overlaid
  bindings in `MARKO_DEBUG` builds for inspectability.
