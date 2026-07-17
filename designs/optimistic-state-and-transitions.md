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

Two core tags, one convention, one implementor-tier function:

- **`<optimistic>`**: a `<const>` you can assign to. The assignment is an
  *overlay* on top of the source expression. It lasts until the async work
  its **turn** entangled has settled; then it is released and the value
  falls back to the (possibly updated) source expression — in the same
  render batch as everything else that lands at settle.

- **`<transition/fn>`**: declares a *manual transition* — a scoped function
  the author calls with async work from anywhere (handlers, `<script>`,
  third-party callbacks). Calling it entangles the work into the current
  turn; the declaration site carries the semantics a bare function can't:
  per-declaration supersession, an `AbortSignal` per call, and teardown with
  the declaring scope.

- **Convention — return the promise.** A handler the runtime itself invokes
  (delegated native events, native controllable changes) that returns a
  thenable entangles it: an anonymous, one-shot manual transition with zero
  surface.

- **Implementor tier — `transition()`** (subpath import, e.g.
  `marko/transition`): the same entangle operation for code outside compiled
  templates — a persisted-pages interceptor listening at the document level.
  Authors never import it; frameworks already import runtime modules.

Async that flows through state needs none of these — that's the implicit
transition. The rest is *async the graph can't see*, and the pieces above
are three acquisition paths for one operation, chosen by where the code
lives.

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

| Integration     | What entangles the async work                                   | What the author writes                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| Persisted pages | Implementor calls `transition()` while intercepting the event   | Optimistic writes in the submit/click handler   |
| Transitions     | Nothing — implicit: downstream `<await>` value re-evaluates     | Optimistic writes beside the real write         |
| User-land       | The handler returns its promise, or a declared `<transition/fn>` | The writes, then the async work                 |

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
     `<await>` value into a new promise),
   - manual transitions entangled during the turn: `<transition/fn>` calls,
     thenables returned by runtime-invoked handlers, and implementor-tier
     `transition()` calls.

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
   In-flight feedback (progress bars) is real state, not optimism: write a
   plain `<let>` from the continuations and reset it at the end.

Because "nothing async happened" is now a legitimate outcome rather than an
author error, there is no unconditional dev warning. `MARKO_DEBUG` warns
only when a release in the *same flush* as the write visibly changes the
rendered value — the signature of a handler that started a fetch and
neither returned it nor routed it through a `<transition>`.

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

Manual transitions hold nothing — nothing in the graph is downstream of a
`fetch` Marko can't see. They only extend the turn's settlement (and so the
lifetime of its overlays). A manual transition is a transition with an
empty downstream set.

### The settle guarantee

Overlay release is queued through the normal render batch (`queueRender` +
`schedule`), in the same flush that lands the settling work — held
transition renders/effects, server patches, real-state updates from an
action. "Optimistic" and "real" swap **atomically in one batch**; there is
no frame showing stale pre-action data in between.

## Manual transitions

Implicit transitions cover async that flows through state. What remains is
async that doesn't: a manual `fetch` in a click handler, a third-party
component's event callback, a listener added in a `<script>`, a
persisted-pages implementor's fetch-and-patch cycle.

### `<transition/fn>` — the declared form

```marko
<transition/save>
```

No attributes, no body — like `<id/x>`, it only mints its tag variable:
a function, following the element-reference precedent that tag variables
may be callable (`<div/el>` … `el()`).

```ts
type TransitionFn = <T>(
  work: ((signal: AbortSignal) => T) | PromiseLike<T>,
) => Promise<Awaited<T>>;
```

Calling it entangles the work into the current turn and returns the work's
promise (for `.catch(...)`). The *declaration site* is what earns the tag —
it carries three semantics a bare, scopeless function cannot:

- **Supersession.** A call made while a previous call from the same
  declaration instance is pending marks the previous one settled
  ("superseded") — mirroring exactly how a re-evaluated `<await>` value
  supersedes its in-flight promise (the `thisPromise ===
  scope[promiseAccessor]` staleness guard). Repeated drags, typeahead
  keystrokes, and double-clicked saves behave correctly by default.
  Declarations are per scope instance, so a `<transition/saveRow>` inside a
  `<for>` is one independent transition per row.
- **Abort.** Function-form work receives an `AbortSignal`, aborted on
  supersession and on scope teardown — the idiomatic fetch-cancellation
  story, wired like `$signal`.
- **Teardown.** When the declaring branch is destroyed, in-flight calls are
  aborted and count as settled, so an unmounted component cannot hold a
  turn's optimism open.

The typeahead, showing all three composing with a pending flag (the search
API here is graph-invisible — imagine it's a third-party widget's callback):

```marko
<let/items = []>
<optimistic/searching = false>
<transition/search>

<input valueChange(q) {
  searching = true;
  search(async (signal) => {
    items = await (await fetch(`/search?q=${q}`, { signal })).json();
  });
}>
```

Each keystroke supersedes and aborts the previous call; `searching` stays
`true` because each turn re-lays it; it reverts when the surviving call
settles. And because the tag variable is a plain function value, it
composes: a parent can declare the transition and pass `save` down to
children as input.

### Returned promises — the anonymous form

Handlers that the runtime itself invokes dispatch through one chokepoint
(`handleDelegated` in `dom/event.ts` calls each handler; native controllable
change handlers similarly), and their return values currently mean nothing.
Convention: **a runtime-invoked handler that returns a thenable entangles
it** — an anonymous one-shot manual transition:

```marko
<button onClick() {
  isLiked = !liked;
  return toggleLike(!liked);
}>

<form onSubmit=submitOrder>   // extracted: any async function in a plain module
```

Async handlers return their promise without the author thinking about it,
so idiomatic code entangles by default; the teachable rule is one line —
*return your promise and Marko waits for it before dropping optimism*.

Scope honestly: this covers **only** runtime-invoked handlers. Function
inputs to custom tags (`onMarkerDrag=...`) are invoked by the child
component, not the runtime, and listeners added imperatively never pass
through Marko at all — those are what `<transition/fn>` is for. (Wrapping
every function input at custom-tag boundaries to widen the convention was
considered and rejected: per-call cost on every function prop to catch the
rare async one.)

### `transition()` — the implementor form

Persisted-pages interceptors are framework `.ts` listening at the document
level, outside compiled templates, where no tag or convention can reach —
and where importing runtime modules is already how integration works:

```ts
import { transition } from "marko/transition"; // subpath TBD

declare function transition<T>(work: () => T): Promise<Awaited<T>>;
```

Same entangle operation, one-shot (no declaration, so no supersession or
abort — implementors manage their own request lifecycles). Documented as
framework/advanced API, not taught to app authors.

### Options compared

| | Shape | Verdict |
| - | ----- | ------- |
| A | Author-facing `import { transition } from "marko"` | Demoted to implementor tier — no author-import precedent in Marko |
| B | Magic `$transition(fn)` | Rejected — grows the `$` namespace (`$global`/`$signal` only) for a function-shaped API anyway |
| C | `<transition/fn>` declared callable | **Adopted** — declaration carries supersession, abort, teardown |
| D | `<transition=op>` body-less sink fed by promise-in-state | Deferred — conceptually clean (an `<await>` minus the DOM, same trigger as implicit transitions) but write-only `<let>` plumbing; C covers its cases |
| E | Returned-promise convention | Kept for runtime-invoked handlers — zero surface where it applies |

An earlier revision of this proposal rejected C as "ceremony without
semantics" and leaned wholly on E. That critique applied to a version of the
tag that merely aliased the import — declare, then call, nothing the call
site couldn't do alone. It missed two things: manual entanglement is
*mandatory*, not an edge case (E's chokepoint cannot see child-invoked
callbacks or imperative subscriptions), and the declaration site is where
per-operation identity naturally lives — supersession, abort, and teardown
are only expressible against something declared and scoped. A scopeless
import can express none of them.

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
   manual transition settles; overlay release batches with the patch
   render. The temporary item is seamlessly replaced by the server's.

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

Interrupted transitions (fast typing) compose through the overlay stack:
each keystroke's turn lays its own entries and starts its own transition;
display follows the most recent write; a superseded transition counts as
settled for entanglement, releasing only its own turn's entries, which sit
invisibly beneath newer ones.

What `<optimistic>` requires from the transitions design is deliberately
minimal: (a) a settle/supersede notification per transition, and (b) the
hold exemption for overlay root writes. Everything else here works whatever
shape transitions finally take.

### 3. User-land actions (imperative)

Runtime-invoked handler — the returned promise is enough:

```marko
<let/liked = input.liked>
<optimistic/isLiked = liked>

<button onClick() {
  isLiked = !liked;
  return fetch("/like", { method: "POST" })
    .then((res) => res.json())
    .then((data) => liked = data.liked)   // real update
    .catch(showToast);                    // on failure isLiked already reverted
}>
  ${isLiked ? "Liked" : "Like"}
</button>
```

Async originating where Marko can't see the callback — a third-party map
tag and an imperative listener — uses a declared transition:

```marko
<let/position = input.position>
<optimistic/pos = position>
<transition/savePos>

<map-widget latlng=pos onMarkerDrag(latlng) {
  pos = latlng;
  savePos(async (signal) => {
    position = await api.savePosition(latlng, { signal });
  });
}/>
```

In-flight feedback is real state, written from continuations like any other
async code, and reset when done — no optimism involved:

```marko
<let/progress = 0>

<button onClick() {
  return (async () => {
    for await (const pct of upload(file)) progress = pct;
    progress = 0;
  })();
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
6. **Entanglement boundary**: runtime-invoked handlers (delegated native
   events, native controllable changes) entangle via returned thenables;
   several handlers on one dispatch may each entangle. Non-thenable returns
   keep meaning nothing. Child-invoked function inputs and imperative
   listeners entangle via `<transition/fn>`. `<lifecycle>` hooks and
   `<script>` bodies never auto-entangle (they are render-adjacent, not
   user actions).
7. **Supersession is per declaration instance**: a `<transition/fn>` call
   supersedes (settles + aborts) only prior in-flight calls of the same
   instance; distinct declarations, loop iterations, and the anonymous
   returned-promise form never supersede each other. Multiple settlements
   in one turn: the turn releases on the last.
8. **Destroyed branches**: overlay entries die with their scope; release
   tolerates dead scopes via the existing destroyed-branch (`Gen === 0`)
   checks in the render queue. Declared transitions abort + settle their
   in-flight calls on scope teardown.
9. **Holds**: overlay renders are exempt from transition holds but respect
   `<try>`/`<await>` branch parking (see "Holds and the two channels").
10. **SSR**: `<optimistic>` renders exactly as `<const>`; overlays are
    client-only and add no serialization. `<transition>` mints a function
    that is a dev-mode error to call server-side (handlers don't run there);
    the implementor `transition()` likewise errors in the HTML runtime.
    Optimistic bindings are analyzed as assignable, so they and their
    dependents are never static-optimized away.
11. **Optimistic values should not feed `<await>`** — an overlay write whose
    downstream re-evaluates an `<await>` value would start a transition
    whose settle releases the overlay that caused it, re-deriving and
    re-evaluating again. Derive async from real state; overlay for display.
    Initially discouraged in docs, ideally a compile-time lint (the
    reference graph knows both facts statically).

## Implementation sketch

Grounded in the current runtime; expected to be small and pay-for-what-you-use.

**Translator**:

- `src/translator/core/optimistic.ts`: `analyze` merges `<let>`'s var
  tracking (assignable binding, `trackVarReferences` with a change accessor
  **not** exposed as an attr) with `<const>`'s value-expression reference
  tracking, so source updates flow like a derived value and assignments
  compile like `<let>` assignments. `translate` emits `_optimistic(id, fn)`
  via `callRuntime`; HTML output lowers to the `<const>` translation.
- `src/translator/core/transition.ts`: asserts no attrs/args/body, requires
  a tag var; DOM output initializes the var to `_transition(scope)`; HTML
  output mints the dev-error stub. Both registered in `core/index.ts` +
  `util/is-core-tag.ts`.
- Type stubs `tags/optimistic.d.marko` (mirroring `let.d.marko` minus the
  `valueChange` input) and `tags/transition.d.marko` (returns the
  `TransitionFn` above).

**Runtime** (`src/dom/transition.ts`):

- Module state: the current turn (created lazily on the first optimistic
  write or entanglement in a batch; finalized by the flush).
- `_optimistic(id, fn)` returns a signal shaped like `_let`'s: during
  `rendering` it stores the source value into a base slot
  (new `AccessorPrefix.OptimisticBase`, mirrored in `accessor.ts` /
  `accessor.debug.ts`) and recomputes the effective value; outside rendering
  (an assignment) it records an overlay entry against the current turn and
  goes through `queueRender` + `schedule` like any `<let>` write. The value
  accessor always holds the *effective* value so closures and downstream
  reads stay untouched.
- `_transition(scope)` closes over a per-instance slot holding
  `{ controller, settlement }`: each call aborts + settles the prior one
  (supersession), creates an `AbortController`, entangles a settlement into
  the current turn, invokes function-form work with the signal, and settles
  on the promise via the same current-call guard `_await_promise` uses.
  Teardown wiring reuses the `$signal` abort infrastructure
  (`AccessorProp.AbortScopes`).
- **Handler returns**: `handleDelegated` (`dom/event.ts`) already invokes
  every handler at one chokepoint; capture the return value and, when the
  optimistic feature is enabled (`_enable_*`-style self-modifying install,
  so apps without `<optimistic>` pay nothing — not even the thenable
  check), entangle thenables into the current turn.
- The transitions mechanism registers each implicit transition it discovers
  during a flush as a settlement on that flush's turn, and reports
  supersession as settlement. The end-of-flush release check mirrors how
  `<try>`'s `AwaitCounter` drains parked `PendingRenders`/`PendingEffects`
  today — same lifecycle, page scope instead of branch scope.
- Public export: implementor-tier subpath only (`marko/transition`, final
  name TBD) — the package root stays types-only, since authors never import
  anything.

**Testing**: fixtures under `src/__tests__/fixtures/` using async `steps`
(`Wait` controls) — optimistic write beside a transition-triggering write,
handler-returned promise entanglement, `<transition>` supersession/abort
and per-loop-instance isolation, release-at-flush (sync downstream, no
entanglement, forgot-to-entangle warning), overlapping turns, source update
while pending, rejection, scope teardown mid-flight, under a `<try>`
placeholder — reading the `render.md` mutation logs to prove the
single-batch settle guarantee and the hold exemption.

## Alternatives considered

- **Explicit claiming (earlier drafts)**: v1 had an author-facing imported
  `transaction()` that claimed same-turn optimistic writes, with unclaimed
  writes dropped + dev warning, and assumed explicitly-created transitions.
  Implicit transitions collapsed claiming into turn entanglement; the
  author-facing function was then briefly replaced by the returned-promise
  convention alone, until third-party/imperative event sources showed a
  declared manual form is mandatory — see "Options compared" for the full
  A–E comparison and the history of the `<transition>` tag's rejection and
  re-adoption.
- **Overlay writes on `<let>` directly** (an `optimistic(x = v)` intrinsic,
  no new tag): fails the headline case — persisted-pages data is
  server-owned/derived, and `<let>` initialized from it diverges. Also adds
  expression-level compiler magic, which is worse than a tag in a
  tag-language.
- **Make `<const>` assignable with revert semantics**: zero new tags, but
  "assignable const" is hostile to teaching and turns accidental writes
  into delayed-action bugs. A distinct name is the documentation.
- **Pending as API surface** (`<optimistic/[value, pending]>`, a
  `pending(x)` intrinsic, a reactive `fn.pending` on the transition
  variable): destructured tag variables aren't assignable, reactive
  property objects have no precedent in the runtime model, and the
  `<optimistic/flag=false>` convention already covers every case with zero
  surface — including transition pending, where no object exists to ask.
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
`startTransition` opt-in, `<transition/fn>` ≈ an action with identity
(supersession/abort resemble SolidStart actions + `useSubmission`
lifecycles), returned promises ≈ React 19 "actions are async functions"
with the wrapper dissolved into a convention, the pending-flag convention ≈
`useFormStatus().pending` — unified so the same pieces serve declarative
(persisted pages, transitions) and imperative (manual fetch, third-party
events) updates.

## Naming

| Proposed         | Alternatives                     | Notes                                                                                                                                                  |
| ---------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<optimistic>`   | `<draft>`, `<eager>`, `<assume>` | Term of art; self-documenting and greppable. Length is irrelevant — it is declared, not typed often.                                                   |
| `<transition>`   | `<transaction>`, `<action>`      | Unifies the author vocabulary: one concept, implicit or manual. Adjacent to CSS View Transitions — judged acceptable (React survived the same clash), but `<transaction>` is the fallback if the transitions design wants the word reserved. |
| `transition()`   | `transaction()`, `startTransition()` | Implementor-tier import, aligned with the tag's name; low-stakes.                                                                                     |

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
- **Concurrent declared transitions.** Supersession-by-default matches
  `<await>` semantics and the common cases; scoping covers independent
  instances (declare inside the branch). Is there a real case for one
  declaration with deliberately concurrent, non-superseding calls — and if
  so, an opt-out attribute (`<transition/fn concurrent>`) or just "declare
  two"?
- **Handler-return opt-out.** Is there a real case for returning a promise
  from a runtime-invoked handler *without* entangling it? (Presumed no —
  don't return it — but arrow-shorthand handlers auto-return:
  `onClick=() => doAsyncThing()` entangles. That is usually desired;
  confirm.)
- **Abort for implicit transitions.** Manual transitions get an
  `AbortSignal`; should implicit ones surface one to the promise producer
  (e.g. alongside `<await>` supersession)? A transitions-design question.
- **Pre-hydration submissions**: should the persisted-pages protocol replay
  a submission-in-flight as an already-entangled turn after resume, so
  optimistic UI can appear for forms submitted before hydration?
- **Lint for optimistic-fed `<await>`** (semantics #11): warn at compile
  time when an `<await>` value is reachable from an `<optimistic>` binding
  in the reference graph.
- **Devtools/debug**: surface active turns, settlements, and overlaid
  bindings in `MARKO_DEBUG` builds for inspectability.
