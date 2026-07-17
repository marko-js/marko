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

- **`<optimistic>`**: a `<const>` you can assign to, whose source — like an
  `<await>` value — may be a thenable. An assignment lays an *overlay* on
  top of the source; a pending source keeps showing its last settled value.
  The overlay lasts until the async work its **turn** entangled has settled;
  then it is released and the value falls back to the (possibly updated,
  possibly just-resolved) source — in the same render batch as everything
  else that lands at settle.

- **Promises connect through state.** Writing a thenable into the state an
  `<optimistic>` source reads is an implicit transition — the same trigger
  as re-evaluating an `<await>` value, discovered the same way. The
  optimistic write opens the window; the promise flowing into the source
  closes it. This works from *anywhere* the state is in scope: handlers,
  `<script>` listeners, third-party callbacks.

  ```marko
  <let/liked = input.liked>        // boolean | Promise<boolean>
  <optimistic/isLiked = liked>     // always boolean: last settled + overlay

  <button onClick() {
    isLiked = !isLiked;
    liked = fetch("/like", { method: "POST" })
      .then((res) => res.json())
      .then((data) => data.liked);
  }>
  ```

- **Convention — return the promise.** A handler the runtime itself invokes
  (delegated native events, native controllable changes) that returns a
  thenable entangles it into the turn — sugar for the common case where the
  async result isn't worth modeling as state.

- **Implementor tier — `transition()`** (subpath import, e.g.
  `marko/transition`): the same entangle operation for code outside compiled
  templates — a persisted-pages interceptor listening at the document level,
  whose async (fetch + patch stream) has no author-visible state to flow
  through. Authors never import it.

An earlier revision had a second core tag, `<transition/fn(args) { body }>`,
for async the graph can't see. Await-like optimistic sources subsume it: the
operation goes *into the graph* instead of around it (see "Options
compared").

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
exactly that indicator. (A settled promise is still a thenable, so
pending-ness is *not* derivable from the state value by type check — the
flag convention is the idiom; exposing an optimistic source's pending-ness
directly is an open question.)

| Integration     | What entangles the async work                                 | What the author writes                        |
| --------------- | -------------------------------------------------------------- | ---------------------------------------------- |
| Persisted pages | Implementor calls `transition()` while intercepting the event | Optimistic writes in the submit/click handler |
| Transitions     | Nothing — implicit: downstream `<await>` value re-evaluates   | Optimistic writes beside the real write       |
| User-land       | Implicit: the operation promise is written into state         | The writes, then `state = fetch(...)...`      |

## The `<optimistic>` tag

```marko
<optimistic/varName = sourceExpression>
```

- **Reads like `<const>`, resolves like `<await>`**: the tag variable tracks
  `sourceExpression`; when the source evaluates to a thenable the variable
  keeps its last settled value while the thenable is pending, then takes the
  resolution (`_await_promise` already branches on `isPromise` and treats
  non-promises as sync — the same contract in a new position). A newer
  source thenable supersedes an in-flight one, exactly like re-handing
  `<await>` a new promise.
- **Writes like `<let>`**: the tag variable is assignable (following the
  existing assignable-tag-variable convention that `<let>` itself is defined
  with — `tags/let.d.marko`'s `return=input.value valueChange=...`).
- An assignment does **not** touch the source. It lays an overlay that wins
  over the source until the turn's entangled work settles, then disappears.
  Optimistic state can never be committed — real state only ever comes from
  the source. To keep a value, update the real state (with the value, or
  with a promise of it).

```marko
<let/liked = input.liked>
<optimistic/isLiked = liked>

// isLiked === liked, until an event handler assigns isLiked.
// Once the turn's async work settles, isLiked reflects liked again —
// including resolving it, if the action wrote a promise into liked.
```

A constant source is the degenerate (and common) case — that's the pending
flag above: `<optimistic/saving=false>`.

The reading discipline that falls out: the raw state cell holds *the
operation or the value*; the optimistic variable is the always-settled
readable surface. Everything renders from the optimistic variable. This is
the cheatsheet's existing philosophy — "pass the PROMISE through the
template" — extended from `<await>` (pending shows a placeholder) to
`<optimistic>` (pending shows the last value, or your overlay).

Why a distinct tag rather than a mode of `<let>`: the source must stay
*live*. In the persisted-pages case the real data is server-owned (`input`,
route data) and is updated by the patch stream while the overlay is showing;
mirroring it into a `<let>` would recreate the classic derived-state
divergence problem. `<optimistic>` is derived-with-override-and-resolution,
which is a different thing from mutable-with-initial-value.

## Turns and entanglement

A **turn** is a batch: the current synchronous execution (an event dispatch,
a timer callback, a promise continuation) plus the flush it schedules —
exactly the unit the queue already batches (`schedule()` → `run()`).

1. **Optimistic writes belong to their turn.** They are provisional until
   the end of the flush.
2. **The turn's settlement** is the union of:
   - implicit transitions started by the turn's real writes — discovered
     during the flush, when downstream recomputation re-evaluates an
     `<await>` value **or an `<optimistic>` source** into a new thenable,
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
   - *Synchronous downstream*: the author paired an optimistic write with a
     real write, but the real write carried a plain value (or a cache hit)
     rather than a pending operation. The real value lands in the same
     flush and the released overlay falls back to an identical value. The
     same handler code is correct whether the update is sync or async.
4. **Late writes** — optimistic writes from a promise continuation belong to
   that later turn, which entangles nothing and releases them at its flush.
   In-flight feedback (progress bars) is real state, not optimism: write a
   plain `<let>` from the continuations and reset it at the end.

Because "nothing async happened" is a legitimate outcome rather than an
author error, there is no unconditional dev warning. `MARKO_DEBUG` warns
only when a release in the *same flush* as the write visibly changes the
rendered value — the signature of an action that started a fetch and let
the promise escape (neither into state nor returned).

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
- **A pending source holds nothing by itself.** While the source thenable is
  in flight the optimistic variable simply doesn't change (last settled
  value, or the overlay) — stale-while-revalidate needs no hold machinery;
  the downstream world moves once, at settle.

### The settle guarantee

Overlay release is queued through the normal render batch (`queueRender` +
`schedule`), in the same flush that lands the settling work — the resolved
source, held transition renders/effects, server patches. "Optimistic" and
"real" swap **atomically in one batch**; there is no frame showing stale
pre-action data in between.

## Connecting async work

### Through state — the primary form

Model the operation as data: the state cell holds a value *or a promise of
it*, and the `<optimistic>` variable is the settled, overlayable view.
Because the connection is a data dependency, it works from any closure that
can reach the state — the cases that previously forced a dedicated tag:

```marko
<let/position = input.position>       // LatLng | Promise<LatLng>
<optimistic/pos = position>
<transition... no tag needed>

<map-widget latlng=pos onMarkerDrag(latlng) {
  pos = latlng;                                   // optimistic, renders now
  position = api.savePosition(latlng);            // the operation, in state
}/>
```

Dragging again before the save lands writes a newer thenable into
`position`: the older one is superseded — same staleness guard as `<await>`
(`thisPromise === scope[promiseAccessor]`) — and the newest resolution wins.
Stale-while-revalidate needs no overlay at all:

```marko
<let/results = []>                    // Item[] | Promise<Item[]>
<optimistic/items = results>
<optimistic/searching = false>

<input valueChange(q) {
  searching = true;
  results = fetch(`/search?q=${q}`).then((r) => r.json());
}>

<for|item| of=items by="id">...</for>
```

Each keystroke supersedes the previous request; `items` keeps showing the
last settled list until the surviving request resolves; `searching` re-lays
each turn and releases when it settles.

### Returned promises — handler sugar

Handlers that the runtime itself invokes dispatch through one chokepoint
(`handleDelegated` in `dom/event.ts` calls each handler; native controllable
change handlers similarly), and their return values currently mean nothing.
Convention: **a runtime-invoked handler that returns a thenable entangles
it** — for the case where the operation isn't worth modeling as state:

```marko
<button onClick() {
  isLiked = !isLiked;
  return fetch("/like", { method: "POST" }).then(...);
}>

<form onSubmit=submitOrder>   // extracted: any async function in a plain module
```

Scope honestly: this covers **only** runtime-invoked handlers. Function
inputs to custom tags (`onMarkerDrag=...`) are invoked by the child
component, and imperative listeners never pass through Marko — those use
the through-state form above. (Wrapping every function input at custom-tag
boundaries to widen the convention was considered and rejected: per-call
cost on every function prop to catch the rare async one.)

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
| C | `<transition/fn(args) { body }>` declared transition | Superseded by F — see below for what it offered |
| D | `<transition=op>` body-less sink fed by promise-in-state | Subsumed by F — F is D with the optimistic variable itself as the sink |
| E | Returned-promise convention | Kept for runtime-invoked handlers — zero surface where it applies |
| F | **Await-like `<optimistic>` sources: the promise is written into state** | **Adopted** — the operation joins the graph instead of bypassing it |

The arc, for the record: v1 had an author-facing imported `transaction()`
with explicit claiming; implicit transitions collapsed claiming into turn
entanglement; the returned-promise convention then briefly replaced the
function outright, until third-party/imperative event sources showed a
manual form is mandatory; that manual form grew from a declared callable
into `<transition/fn(args) { body }>` with an implicitly-async body,
`$signal` abort, and supersession; and finally F subsumed the tag by making
the *state itself* carry the operation — the same discovery mechanism as
`<await>`, no new grammar, no second tag, reachable from any closure.

What C offered that F gives up, and where each went:

- **Per-call `$signal` abort** → open question, now unified with abort for
  implicit transitions generally (superseding an in-flight source thenable
  is the same event as superseding an `<await>` promise; if transitions
  grow an abort story, both get it).
- **In-body optimistic writes after `await`** (compiler-routed to the
  call's turn) → in-flight feedback is real state written from
  continuations (turns rule 4); with operations-as-state this is natural —
  progress *is* state of the operation.
- **Named call sites** (`search(q)`) → an extracted async function returning
  the promise reads nearly the same: `results = search(q)`.
- **Tag-variable method shorthand** — the one piece of new grammar this
  proposal carried — is no longer needed at all.

If real usage later shows the ergonomics of a named, declared action are
missed, C can return as pure sugar over F without changing the model.

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

An `<optimistic>` source becoming pending is the same trigger from the
other side — `<await>` shows a placeholder while pending; `<optimistic>`
shows the last value or your overlay. The two compose in one template: use
`<await>` where blank-then-fill is right, `<optimistic>` where
stale-while-revalidate is right.

What `<optimistic>` requires from the transitions design is deliberately
minimal: (a) a settle/supersede notification per transition, and (b) the
hold exemption for overlay root writes. Everything else here works whatever
shape transitions finally take.

### 3. User-land actions (imperative)

The full pattern — optimistic guess plus the operation in state:

```marko
<let/liked = input.liked>            // boolean | Promise<boolean>
<optimistic/isLiked = liked>

<button onClick() {
  isLiked = !isLiked;
  liked = fetch("/like", { method: "POST" })
    .then((res) => res.json())
    .then((data) => data.liked);     // resolution becomes the real value
}>
  ${isLiked ? "Liked" : "Like"}
</button>
```

On resolve, `isLiked` takes the server's answer; on reject, the overlay
releases and `isLiked` falls back to the last settled value. Error UX is a
`.catch(...)` on the chain (which also decides what the state resolves to).
For a one-off where modeling the operation as state isn't worth it, the
returned-promise form does the same job inside runtime-invoked handlers.

## Detailed semantics

1. **Overlay stack.** Each `<optimistic>` binding keeps an ordered list of
   overlay entries `{ value, turn }`, where a turn resolves to its set of
   entangled settlements. Rendered value = last entry's value, else the
   settled source. A settlement completing removes itself from its turn; a
   turn with no remaining settlements releases its entries; if the top
   entry changed, a render is queued.
2. **Thenable sources.** A source evaluating to a thenable does not change
   the rendered value; the binding keeps its last settled value (or current
   overlay) until the thenable resolves — then the resolution becomes the
   settled source value, in the settle batch. A newer thenable supersedes an
   in-flight one (only the current one's resolution lands). The pending
   source registers as a settlement on the turn whose write caused the
   re-evaluation — the same implicit-transition discovery as `<await>`.
   First render with a pending source and no prior settled value renders
   `undefined` (integration with `<try>` placeholders is an open question).
3. **Last write wins within a turn** — a later write in the same turn
   replaces that turn's earlier entry for the same binding.
4. **Source updates while pending** follow rules 1–2: the overlay keeps
   winning until the turn releases; the source tracks its own
   latest-thenable independently. (No React-style reducer replay; see
   alternatives.)
5. **Writing the current value is still a write** — pending flags rely on
   entries existing independent of value equality.
6. **Release-at-flush never renders** (entanglement rule 3): the release
   check runs at the end of the flush, after downstream recomputation has
   discovered any transitions, but within the same microtask pass — ahead
   of paint.
7. **Entanglement boundary**: pending `<await>` values and `<optimistic>`
   sources entangle the turn that caused them; runtime-invoked handlers
   entangle via returned thenables; implementor `transition()` entangles
   explicitly. Child-invoked function inputs and imperative listeners
   connect through state. `<lifecycle>` hooks and `<script>` bodies never
   auto-entangle (they are render-adjacent, not user actions).
8. **Destroyed branches**: overlay entries and in-flight source resolutions
   die with their scope (the supersession guard already ignores stale
   resolutions); release tolerates dead scopes via the existing
   destroyed-branch (`Gen === 0`) checks in the render queue.
9. **Holds**: overlay renders are exempt from transition holds but respect
   `<try>`/`<await>` branch parking; a pending source holds nothing (see
   "Holds and the two channels").
10. **SSR**: `<optimistic>` renders as `<const>`; overlays are client-only
    and add no serialization. A thenable source during SSR is an open
    question (await it like `<await>` does, or dev-error); the implementor
    `transition()` errors in the HTML runtime. Optimistic bindings are
    analyzed as assignable, so they and their dependents are never
    static-optimized away.
11. **Pending is not derivable from the state value.** A settled promise is
    still a thenable, so `typeof op.then` cannot distinguish in-flight from
    done. Use the flag convention; whether to expose a source's pending-ness
    (e.g. a compiler-known accessor) is an open question.
12. **Optimistic values should not feed `<await>` or another `<optimistic>`
    source** — an overlay write whose downstream re-evaluates an async
    value would start a transition whose settle releases the overlay that
    caused it, re-deriving and re-evaluating again. Derive async from real
    state; overlay for display. Initially discouraged in docs, ideally a
    compile-time lint (the reference graph knows both facts statically).

## Implementation sketch

Grounded in the current runtime; expected to be small and pay-for-what-you-use.
No new grammar.

**Translator** (`src/translator/core/optimistic.ts`, registered in
`core/index.ts` + `util/is-core-tag.ts`):

- `analyze` merges `<let>`'s var tracking (assignable binding,
  `trackVarReferences` with a change accessor **not** exposed as an attr)
  with `<const>`'s value-expression reference tracking, so source updates
  flow like a derived value and assignments compile like `<let>`
  assignments (through the binding's signal setter).
- `translate` emits `_optimistic(id, fn)` via `callRuntime`; HTML output
  lowers to the `<const>` translation (plus whatever SSR thenable-source
  behavior is decided).
- Type stub `tags/optimistic.d.marko` mirroring `let.d.marko` minus the
  `valueChange` input, with the source typed `T | PromiseLike<T>` and the
  variable typed `Awaited<T>`:

  ```marko
  export interface Input<T> {
    value: T;
  }

  return=(input.value as Awaited<T>) valueChange=(newValue: Awaited<T>) => {}
  ```

**Runtime** (`src/dom/optimistic.ts`):

- Module state: the current turn (created lazily on the first optimistic
  write or entanglement in a batch; finalized by the flush).
- `_optimistic(id, fn)` returns a signal shaped like `_let`'s with an
  `isPromise` branch shaped like `_await_promise`'s: during `rendering`, a
  non-thenable source value goes to the base slot (new
  `AccessorPrefix.OptimisticBase`, mirrored in `accessor.ts` /
  `accessor.debug.ts`) and recomputes the effective value; a thenable
  source is tracked at `AccessorPrefix.Promise + accessor` with the
  current-promise supersession guard, registers a settlement on the
  flushing turn, and writes its resolution to the base slot via
  `queueAsyncRender`. Outside rendering (an assignment), it records an
  overlay entry against the current turn and goes through `queueRender` +
  `schedule` like any `<let>` write. The value accessor always holds the
  *effective* value so closures and downstream reads stay untouched.
- **Handler returns**: `handleDelegated` (`dom/event.ts`) already invokes
  every handler at one chokepoint; capture the return value and, when the
  optimistic feature is enabled (`_enable_*`-style self-modifying install,
  so apps without `<optimistic>` pay nothing — not even the thenable
  check), entangle thenables into the current turn.
- The transitions mechanism registers each implicit transition it discovers
  during a flush (await values *and* optimistic sources) as a settlement on
  that flush's turn, and reports supersession as settlement. The
  end-of-flush release check mirrors how `<try>`'s `AwaitCounter` drains
  parked `PendingRenders`/`PendingEffects` today — same lifecycle, page
  scope instead of branch scope.
- Public export: implementor-tier subpath only (`marko/transition`, final
  name TBD) — the package root stays types-only, since authors never import
  anything.

**Testing**: fixtures under `src/__tests__/fixtures/` using async `steps`
(`Wait` controls) — overlay beside a thenable source write, supersession by
a newer source thenable, stale-while-revalidate with no overlay,
handler-returned promise entanglement, release-at-flush (sync value, no
entanglement, escaped-promise warning), overlapping turns, source update
while overlaid, rejection, scope teardown mid-flight, under a `<try>`
placeholder — reading the `render.md` mutation logs to prove the
single-batch settle guarantee and the hold exemption.

## Alternatives considered

- **A dedicated manual-transition surface** — the full arc is in "Options
  compared": imported `transaction()` (v1, explicit claiming), the
  returned-promise convention alone, a declared callable, and finally
  `<transition/fn(args) { body }>` with implicit-async body, `$signal`
  abort, supersession, and compiler-routed in-body optimistic writes. All
  subsumed once `<optimistic>` sources became await-like: the operation
  joins the reactive graph as state instead of needing a side channel. The
  declared tag remains viable as future sugar if named actions are missed.
- **Overlay writes on `<let>` directly** (an `optimistic(x = v)` intrinsic,
  no new tag): fails the headline case — persisted-pages data is
  server-owned/derived, and `<let>` initialized from it diverges. Also adds
  expression-level compiler magic, which is worse than a tag in a
  tag-language.
- **Make `<const>` assignable with revert semantics**: zero new tags, but
  "assignable const" is hostile to teaching and turns accidental writes
  into delayed-action bugs. A distinct name is the documentation.
- **Thenable *assignments* as the connection** (write the promise to the
  optimistic variable itself: `isLiked = fetchPromise`): keeps the operation
  out of real state, but forks assignment semantics on a type check, gives
  the resolution value no home (the source remains the only truth), and
  reads as data flow while acting as lifecycle. Writing the promise into
  the *source* state keeps one meaning per position: assignments are
  optimistic values; sources carry truth, sync or async.
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
(minus reducers) fused with stale-while-revalidate resource semantics
(Solid's `createResource` keeps the previous value while refetching),
implicit transitions ≈ concurrent transitions without the `startTransition`
opt-in, returned promises ≈ React 19 "actions are async functions" with the
wrapper dissolved into a convention, the pending-flag convention ≈
`useFormStatus().pending` — unified so the same pieces serve declarative
(persisted pages, transitions) and imperative (manual fetch, third-party
events) updates.

## Naming

| Proposed       | Alternatives                     | Notes                                                                                                                |
| -------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `<optimistic>` | `<draft>`, `<eager>`, `<assume>` | Term of art; self-documenting and greppable. Length is irrelevant — it is declared, not typed often. Now also carries the await-like source behavior — if that becomes the dominant usage, a name like `<latest>`/`<settled>` could fit better; revisit after real usage. |
| `transition()` | `transaction()`, `startTransition()` | Implementor-tier import; low-stakes.                                                                                 |

The returned-promise convention needs no name in code — which is the point —
but docs need a phrase; "settled handlers" or simply "return your promise"
are candidates.

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
- **Exposing a source's pending-ness.** The flag convention covers pending
  today, but with operations-as-state the pending-ness is *knowable* by the
  runtime (semantics #2) and not derivable by the author (#11). Is a
  compiler-known accessor (only valid on optimistic bindings) worth the
  surface, or does the flag idiom suffice?
- **First-pending display.** A source that is a thenable before any settled
  value renders `undefined`; should `<optimistic>` inside `<try>` integrate
  with `@placeholder` the way `<await>` does?
- **SSR thenable sources.** Await server-side like `<await>` (streaming a
  settled value), or restrict thenable sources to the client?
- **Abort.** Superseding an in-flight source thenable is the same event as
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
  time when an `<await>` value or `<optimistic>` source is reachable from an
  `<optimistic>` binding in the reference graph.
- **Devtools/debug**: surface active turns, settlements, and overlaid
  bindings in `MARKO_DEBUG` builds for inspectability.
