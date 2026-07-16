# Optimistic updates: design exploration

Status: exploration, pre-RFC. This document maps the design space for an
optimistic-update API in Marko 6 (`packages/runtime-tags`), evaluates candidate
models, and develops the most promising one far enough to expose its gaps —
pending states, concurrency, abort/cleanup, interaction with the async
machinery, and integration with persisted pages. Nothing here is committed;
§4 records the honest weaknesses of the recommended direction and §13 the
open questions.

It builds on the persisted-pages design family
(`designs/persisted-pages-*.md` on the `claude/marko-persisted-pages-review-*`
branches), which explicitly deferred "application-level optimistic
transitions" until after its release gates. File references of the form
`marko-pp/...` and `run-pp/...` point at those branches.

## 1. Problem

Marko's happy path is progressive enhancement over links and forms: the
server owns routing, data, and rendering; the browser enhances. Today an
optimistic mutation is hand-rolled (from the `marko-ecommerce` demo):

```marko
<form
  action="/cart"
  method="POST"
  onSubmit=async (ev) => {
    cart = [];                        // guess
    cart = (await submit(ev)).cart;   // truth
  }
>
```

Every gap an optimistic API must close is visible in that snippet:

- **No rollback.** If `submit` rejects, the guess is permanent until something
  else rewrites `cart`. The UI lies.
- **No pending state.** Nothing distinguishes "guessed" from "confirmed".
  Disabling the button or styling the provisional row is separate manual
  state, and in a persisted-pages app the handler has no completion signal to
  reset it with.
- **Races.** Two quick submissions interleave guesses and truths; the last
  `await` to resolve wins regardless of submission order.
- **The guess overwrites the truth channel.** Guess and truth share one
  variable, so reconciliation is "whoever assigned last" rather than "truth,
  unless a guess is outstanding".
- **Downstream async regresses.** When the confirmed truth swaps a promise
  a `<try>` boundary is showing content for, the user watches UI they were
  already shown "optimistically" recede to `@placeholder` and load again.

Under persisted pages the truth channel becomes automatic (a form submission
is intercepted, runs as a PRG mutation, and the followed redirect patches
`$global`-derived values back into the live page), which makes the remaining
manual parts — the guess, its lifetime, and the continuity of what the user
is already seeing — the whole problem.

## 2. Goals and non-goals

Goals, in priority order:

1. **Links and forms are the API.** The primary path enhances a native form
   or anchor; it must degrade to plain MPA behavior with no JS and compose
   with the persisted router's interception without new wiring.
2. **Truth is never guessed.** Optimistic values are a view over an
   authoritative source; the API must make it structurally impossible for a
   guess to become truth. Reverting is the only exit.
3. **Zero cost when unused.** No dispatch overhead, no serialized state, no
   retained runtime for templates that don't use the feature (same bar as
   `_enable_catch` / persisted's entry split).
4. **Bounded lifetime, fully-rendered end.** Every guess has a defined end —
   success, failure, or supersession — and the transaction is not over until
   the render it caused has fully resolved, including async boundaries it
   re-pended. No "until something happens to re-render" semantics, and no
   "done" signal while caused work is still loading.
5. **Visual continuity.** UI that has been represented optimistically must
   not regress to `@placeholder` while the transaction resolves it.
6. **Answers for pending, concurrency, and abort** that fall out of the
   model rather than bolt on.

Non-goals:

- A client data layer, cache, or store (TanStack-style key/value overlay).
  Shared client state composition stays userland (see §9.5), pending a
  `<mut>`/`let-*` family design.
- Offline/queued mutations.
- Replacing the `<try>`/`<await>` placeholder system. Transactions gate when
  an already-settled boundary may *re-show* its placeholder (§11.2); they do
  not create, replace, or reimplement boundaries.

## 3. Design space

Five models were considered. A is the sketch that motivated this document;
the others are genuine alternatives, not strawmen.

### A. Overlay tag + implicit event transactions

A core `<optimistic/view=source>` tag derives `view` from `source` like a
`<const>`, but `view` is assignable. Assignments record an *override* tied to
the current **event transaction** — an implicit scope opened when Marko
dispatches an event handler, closed when the handler's synchronous work, its
returned promise, any registered extensions, and the async render work it
caused have settled. Overrides are released when the transaction's promise
work settles and `view` re-derives from `source`.

```marko
<optimistic/optimisticCart=cart/>
<form method="POST" action="/cart" onSubmit=async (ev) => {
  ev.preventDefault();
  optimisticCart = [];
  cart = (await api("clear-cart")).cart;
}>
```

The persisted router extends the transaction of any event it intercepts until
its navigation settles, so the persisted form of the same feature is one
synchronous assignment.

### B. Explicit transaction handles

A declared handle makes the lifetime a value:

```marko
<transaction/tx/>
<form onSubmit(ev) { tx.run(clearCart(ev)); optimisticCart = tx.set([]); }>
<button disabled=tx.pending>
```

Everything is inspectable (`tx.pending`, `tx.error`), nothing is ambient.
But the happy path now needs a declaration, a join call, and a setter — three
concepts before the first optimistic pixel — and the persisted one-liner is
gone because the router cannot join a handle it cannot see. This is the
right *internal* shape (A needs a transaction object anyway) but the wrong
authoring surface for the 90% case.

### C. Derive from in-flight submissions (Remix model)

Never assign a guess; expose the set of in-flight mutations reactively and
derive:

```marko
<submissions/inflight=cartForm/>
<const/optimisticCart=inflight.reduce(applyOp, cart)>
```

Attractive properties: rollback, pending, and concurrency are all "the set
changed"; there is no imperative window to get wrong. But it re-derives the
server's mutation semantics from `FormData` on the client (a reducer per
action), only covers router-carried mutations (not handler-managed `fetch`),
and belongs to `@marko/run`, not the language. It is the best story for
*derived* views of *queued* work, and it composes on top of A: a submissions
list is just the transaction registry filtered to router-extended
transactions, exposable later without new language surface.

### D. Store-level overlay

Bake optimism into a shared-state tag (the `let-global` pattern the demos
keep hand-rolling; the docs' anticipated `<mut>` family):
`<let-global/cart="cart" optimistic>`. This answers multi-instance fan-out
(§9.5) but couples two undecided designs; a store tag can *use* the
`<optimistic>` primitive internally the day it exists.

### E. Local echo (no transactions)

`<optimistic/view=source>` where an assignment holds only until `source` next
*changes*. No transaction machinery at all. Fails goal 4: when the mutation
fails or produces no observable source change (clearing an already-empty
cart, a validation rejection re-rendering the same values), the guess never
releases. Absent-key-means-unchanged patches make "source changed" an
unreliable settle signal by design. Rejected, but its cheapness is the bar
A's machinery has to justify.

### Evaluation

| | A overlay+txn | B handles | C submissions | D store | E echo |
| --- | --- | --- | --- | --- | --- |
| Happy-path LOC (persisted) | 1 | 3–4 | 2 + reducer | 1 | 1 |
| Works without router (manual fetch) | yes | yes | no | yes | yes |
| Bounded guess lifetime | yes | yes | yes | yes | **no** |
| Rollback on failure | automatic | automatic | automatic | automatic | none |
| Pending observable | reported (§7) | best | yes | yes | no |
| Placeholder continuity possible | yes (§11.2) | yes | router-only | yes | no |
| Concurrency story | §8 | manual | best | §8 | none |
| Ambient magic | txn window | none | none | txn window | none |
| New concepts | 1 tag + 1 rule | 3 | 1 tag + reducers | store design | 1 tag |
| Home | core | core | @marko/run | TBD | core |

**Recommendation: A as the surface, B as the internals, C as a later
`@marko/run` layer over the same registry, D deferred to the store design.**
The implicit transaction is the only model that keeps the persisted
one-liner *and* the manual-`fetch` path on the same semantics, and Marko
already trades in exactly this kind of compile-time ambient (`$global`,
`$signal`, `:=`). The cost is that the transaction window must be specified
precisely (§6) — ambiguity there is where implicit designs rot.

## 4. Honest weaknesses of the recommended model

Recorded up front; §13 tracks the ones without answers.

1. **Two names for one value.** Every optimistic view doubles a binding
   (`cart` / `optimisticCart`), and any expression that reads the source
   directly silently ignores guesses. Inherent to overlay models (React's
   `useOptimistic` shares it). Softened where truth is not itself a local
   binding — in a persisted app the view can simply take the natural name
   (`<optimistic/cart=$global.data.cart>`) — and mitigable by convention or
   lint ("source read in a template that declares an optimistic view of
   it"), not by design.
2. **Instance-local overrides.** `<optimistic>` in the product card does not
   move the cart badge in the header. Ambient transactions make the
   *synchronous fan-out write* compose (§9.5), but sharing itself remains
   userland until D exists. This is the sharpest practical limitation.
3. **The transaction window is invisible.** "Assignments join the
   transaction only in these windows" (§6.3) is a rule users will meet as a
   debug error, not syntax. The lexical-capture rule softens it for inline
   handlers; extracted helpers still hit it.
4. **Snapshot overrides don't rebase.** If truth changes mid-flight from an
   independent source, a held snapshot hides it until release (§8.3). React
   solves this with updater re-application; deferred here with storage
   designed to admit it.
5. **A hung promise holds the transaction forever.** Bounded-lifetime is
   only as good as the promises joined to the transaction and the async
   boundaries attributed to it (§10.3).
6. **Transactions now touch the boundary machinery.** The async hold and
   placeholder continuity (§11.2) couple transactions to
   `AwaitCounter`/placeholder internals and require render→transaction
   attribution. It is the most invasive part of the design; the coupling is
   kept to one directional point, but it is real complexity and real bytes,
   and it rides the hot render path when enabled.

## 5. Proposed surface

Two additions, sized for a v1 the whole document defends:

```marko
<let/saving=false>
<optimistic/cart=$global.data.cart pending:=saving/>
// `cart` mirrors `$global.data.cart`. Assigning it inside an event handler
// applies immediately and reverts when the handler's transaction releases.
// The tag reports transaction activity through `pendingChange` (here via
// the `:=` sugar) into ordinary user-owned state; the flag stays true until
// the transaction has fully settled, including async render work it caused.

<form method="POST" action="/cart" onSubmit() { cart = [] }>
// Persisted router: intercepts the submit, extends the transaction until the
// PRG patch applies. No router: add `ev.preventDefault()` + async fetch and
// the returned promise is the transaction.

$waitUntil(promise)
// Inside a handler: extend the current transaction past its own promise.
```

- `<optimistic>` requires a tag variable (identifier, not destructured —
  it must be assignable) and accepts `value=`, `pending=`, and
  `pendingChange=`, matching `<let>`'s attribute discipline
  (`translator/core/let.ts:60`).
- `$waitUntil` joins `$global`/`$signal` as a translator-resolved
  identifier; it is a compile error on HTML output paths the same way
  `$signal` throws in server renders
  (`translator/visitors/referenced-identifier.ts:100`).

There is no `<pending>` tag and no runtime-owned pending value: pending is
*reported* through the established change-handler convention and lives in
state the application already owns (§7).

Naming: `optimistic` is the industry term (React precedent) and reads
correctly at the assignment site. Rejected: a modifier on `<let>` (this is a
derived value, not owned state), `<draft>`/`<echo>` (vaguer), a new
assignment operator (no syntax precedent). `transaction` is used throughout
this document for the lifetime concept; `gesture` and `transition` were
considered and rejected (React's `transition` means scheduling, not
lifetime). Bikeshed freely — the semantics below don't depend on the names.

## 6. Semantics

### 6.1 The `<optimistic>` tag

Let `source` be the `value=` expression and `view` the tag variable.

| Event | Effect on `view` |
| --- | --- |
| Render / SSR / resume | `view === source`. Server output is identical to `<const>`; no extra serialization beyond what assignment analysis already requires. |
| `source` re-derives | If no active override: `view` follows, normal dirty-check. If overridden: effective value unchanged (snapshot wins; §8.3), recorded source still updates so release is correct. |
| Assignment in a transaction window | Records/replaces this transaction's override on this tag instance, sets `view` synchronously (reads in the same handler see it, matching `<let>` writes), queues downstream renders through the normal scheduler. |
| Transaction **releases** (its promise work settled, any outcome) | Its overrides are removed. Each affected `view` re-derives: latest remaining active override in write order, else `source`. Dirty-checked, so a correct guess produces zero mutations. |
| Transaction **settles** (release + attributed async resolved; §6.2) | No value effect — `view` already re-derived at release. This is the edge `pendingChange(false)` reports (§7). |
| Assignment outside any window | Debug: thrown error naming the binding and the rule. Optimized: unguarded (undefined behavior), per the `MARKO_DEBUG` convention. |
| Scope destroyed mid-transaction | Nothing: overrides live on the scope; release/settle work on destroyed scopes is skipped by the existing generation checks (`dom/queue.ts:177`). |

`view` never writes back to `source` — there is no commit path, only revert.
Truth arrives on its own channel (a patch, a `cart = ...` assignment, a
store write), which is what makes "release the override" always safe.

### 6.2 Event transactions

A transaction is the unit "one user intent, until the page has fully
rendered its outcome". Its lifecycle has two edges:

- **Open:** lazily, at the first optimistic assignment, `$waitUntil`, or
  router extension during an event dispatch. Marko owns the only dispatch
  point (`dom/event.ts:47`), so this is one ambient set/clear around handler
  invocation, installed by a self-modifying `enableTransactions()` only when
  the feature is compiled in (pattern: `_enable_catch`, `dom/queue.ts:190`).
- **Join:** an optimistic assignment adds an override; `$waitUntil(p)` and
  the router's extension add pending promises; a handler that returns a
  thenable has it adopted automatically. Additionally, async boundaries that
  pend in renders attributed to the transaction join its async set (§11.2).
- **Release point:** when the pending *promise* count reaches zero. Overrides
  are removed here (truth must be allowed to flow; holding overrides longer
  would starve the very renders being waited on). Resolution and rejection
  are identical: release. Rejection additionally keeps its
  unhandled-rejection reporting (§11.6) — the transaction does not swallow
  or route errors (§13.2).
- **Settle point:** after the release-triggered renders flush and every
  async boundary attributed to the transaction has resolved. The settle
  check runs at the end of a flush — after renders (where attribution
  registers) — never between an assignment and its flush, so a transaction
  cannot settle "between" causing async work and observing it. A sync
  handler with no extensions and no attributed boundaries settles from the
  first post-dispatch flush.
- **Ordering:** all release/settle work queues through
  `queueRender`/`schedule()` like any state write. A release triggered by a
  resolved fetch whose handler also assigned truth flushes in the same
  batch — no truth-then-revert flicker frame. The persisted router resolves
  its extension after the final frame's synchronous flush
  (`run-pp/.../persisted-navigation.ts:126-144`), giving the same
  single-batch property (§11.5).

Nested dispatches (a handler synchronously dispatching another event) stack:
the inner dispatch gets its own transaction; the ambient is restored after.

### 6.3 Assignment windows

Precise, because this is the model's sharp edge:

1. **Ambient window** — code executing synchronously during the dispatch,
   however deep the call stack. This is what makes fan-out composition work:
   a store's `valueChange` fanning a write to subscriber instances joins all
   of them to the one transaction (§9.5).
2. **Lexical window** — the body of an inline handler expression, including
   after `await`. The translator emits a prologue capturing the transaction
   for handler-valued attributes whose body contains an optimistic
   assignment or `$waitUntil`, and compiles those uses against the captured
   reference. (This is why `$waitUntil` can be called after an `await` in an
   inline handler, and why assignments there still revert with the handler.)

Everything else — timers, socket callbacks, module-level helper functions
doing the assignment themselves — is outside and debug-errors. The guidance
that falls out is the right default anyway: *make the guess synchronously;
that's what makes it optimistic*. A post-await "refinement" of a guess in an
inline handler is legal via the lexical window.

Two debug diagnostics make the windows teachable:

- assignment outside any window: error, names the binding;
- a transaction that settles from the first post-dispatch flush while
  holding overrides — nothing extended it and its renders pended no async
  ("your handler is sync and caused no async work — the guess was discarded
  immediately"): warn, names the fix (`async`, `$waitUntil`, or the
  persisted router).

### 6.4 `$waitUntil`

`$waitUntil(promise)` extends the current transaction (ambient, else
lexical capture). Modeled on `ExtendableEvent.waitUntil`; callable multiple
times; later calls during an extended window keep stacking. Debug-errors
when no transaction is current. Not valid in `<script>`/render expressions —
transactions are user intents, not render lifecycles; `$signal` already
owns cleanup there (§11.4).

## 7. Pending states

Pending is not a new data source. `<optimistic>` *reports* transaction
activity through the established change-handler convention, into ordinary
state the application already owns:

```marko
<let/saving=false>
<optimistic/cart=$global.data.cart pending:=saving/>

<button disabled=saving aria-busy=saving>Clear Cart</button>
```

`pending:=saving` is the standard sugar for
`pending=saving pendingChange(p) { saving = p }`; the explicit
`pendingChange=` form works identically.

### 7.1 Semantics

- **What it reports:** transitions of "at least one unsettled transaction
  has written this instance". `pendingChange(true)` fires at the first
  override attach; `pendingChange(false)` fires when the last such
  transaction *settles* (§6.2) — not when its overrides release. Edges only,
  no repeats. Two consequences worth stating: a guess equal to current truth
  is still pending (`view !== source` would miss it — this signal exists so
  users don't hand-derive it wrong), and there is a window where `view`
  already equals confirmed truth but pending is still true because
  transaction-attributed async is resolving. Pending means "intent not
  fully rendered", not "value differs".
- **Timing:** edges fire synchronously with their transition — `true` inside
  the dispatch that assigned the guess, `false` inside the settling flush —
  so the flag's downstream renders always batch with the work they
  describe. A pending flag can never be observed disagreeing with the state
  it summarizes.
- **The value side is inert.** Pending's truth lives in the transaction
  machinery and cannot be asserted from the template; the `pending=`
  attribute is accepted only so the `:=` sugar composes, and the runtime
  never reads it. This is the one wrinkle: elsewhere in Marko the value
  half of a value/change pair is meaningful (controlled inputs,
  `<return>`). Debug builds error on `pending=` without `pendingChange`
  (a write-only channel with no writer is always a mistake). The
  alternative — accept only `pendingChange=` and forgo the sugar — is safer
  but reads worse; decide at RFC (§13.1).
- **SSR/resume:** the handler never fires server-side; the receiving
  `<let>`'s own initial value is the SSR value. Nothing serializes.
- **Ownership:** the receiving state is ordinary application state. It can
  be initialized `true`, combined across tags
  (`<const/busy=savingCart || savingProfile>`), fed to `aria-busy`, or set
  manually for non-transaction reasons. The tag only reports edges — which
  also means wiring two `<optimistic>` tags to the *same* `<let>` lets the
  last edge win; use two flags and derive.
- **Don't write optimistic state in `pendingChange`.** The `false` edge
  fires in the settling flush, outside any transaction window, so such a
  write hits the §6.3 debug error naturally.

### 7.2 What this covers, and what it doesn't

Value-keyed pending covers the optimistic cases by construction, and
row-level treatment derives from it plus membership:

```marko
<optimistic/optimisticEntries=entries/>
<for|entry| of=entries by=(e) => e.product.id>
  <const/removing=!optimisticEntries.includes(entry)>
  <tr class={ removing }> ... </tr>
</for>
```

(Iterate truth, style by optimistic membership — or iterate the optimistic
list for hard removal. Both compose with `by=` keying.)

Not covered: a mutation with **no optimistic value** — the demo's promo
form wants its button disabled during the round trip, has nothing to guess,
and under the persisted router the handler gets no completion callback to
reset manual state with. An `<optimistic>` with a dummy value is not an
answer. The shape most consistent with this design is the same reporting
convention moved to the element that owns the gesture —
`<form pending:=applying>` as a Marko-managed native-tag attribute wired to
transactions whose originating event target is inside that element (the
containment check runs once at transaction open, only when such attributes
exist). That is deliberately *not* in v1: it touches native-tag attribute
space and needs its own review; `@marko/run` navigation lifecycle events are
the interim escape hatch. Tracked in §13.1.

## 8. Concurrency

### 8.1 Override stacking

Per `<optimistic>` instance, overrides form an ordered list keyed by
transaction: `[{txn, value}...]` in write order; a transaction re-assigning
replaces its entry in place. Effective value = last entry; release removes
entries by transaction and re-derives. Consequences worth stating:

- **Compose from the view, not the source.** `cart = [...cart, item]`
  (where `cart` is the optimistic view) layers correctly over earlier
  unreleased guesses because the view already includes them. This is the
  documented idiom (and what the demo already does).
- **Out-of-order releases are principled.** T1 guesses v1, T2 guesses v2, T2
  releases first → the view shows v1 (T1's intent is still unconfirmed),
  then truth when T1 releases. Odd-looking, correct, worth a docs example.

### 8.2 Double submit under the persisted router

The router is abort-and-replace with no queue: a new navigation aborts the
prior *GET* outright but never network-aborts a *POST* (the mutation may
have reached the server and must apply exactly once); it only supersedes the
prior POST's application (`run-pp/.../persisted-navigation.ts:62-65,81`).
With transactions layered on:

- submit A: txn A opens, override A applies, POST A departs;
- submit B before A applies: router aborts A's application, txn A releases
  (drop override A), txn B's override — composed from the view, so
  including A's intent — remains;
- B's response reflects the server having run A then B (same-connection
  ordering for same-session mutations is the normal case), patch applies,
  txn B releases and settles, view = truth.

The UI is coherent throughout, which is the transaction model's real win
here. Two honest caveats: nothing orders A and B *server-side* if they race
across connections (the persisted roadmap already lists "concurrent
submissions" under navigation-semantics review; a client-side mutation
queue — serialize POSTs, keep abort-and-replace for GETs — would close it
and is compatible with this design, since queued mutations are just later
extensions), and A's *response* is discarded, so any data only it carried is
lost (PRG makes B's follow-up GET authoritative, so in practice this is
benign).

### 8.3 Rebase (deferred)

When truth changes mid-flight from an *independent* source, a snapshot
override hides it until release. React re-applies updater functions over
new truth for this. The storage shape above admits it later — treat a
function-valued assignment as an updater, re-fold active updaters when
`source` re-derives — but v1 ships snapshots only: the demo cases don't
need rebase, function-valued *state* would need a carve-out, and
compose-from-the-view already handles the common overlap (two guesses over
the same value). Revisit with evidence (§13.4).

## 9. Worked examples

### 9.1 Persisted pages (the headline)

```marko
<let/saving=false>
<optimistic/cart=$global.data.cart pending:=saving/>

<div>Items in cart: ${cart.length}</div>

<form method="POST" action="/cart" onSubmit() { cart = [] }>
  <button disabled=saving name="_action" value="clear">Clear Cart</button>
</form>
```

Flow: Marko's delegated handler runs first (document capture,
`dom/event.ts:30`; the router listens on window bubble,
`run-pp/.../persisted.ts:31-33`) and records the override. The router
intercepts, extends the transaction, POSTs; the PRG redirect renegotiates
and patches; `$global.data.cart` re-derives (persisted `$global`-read
promotion); the extension resolves after the final frame; overrides release
against already-correct truth; the transaction settles once any
release-attributed boundaries resolve, and `saving` flips false. Failure or
fallback → document navigation; supersession → release. No JS → plain PRG.
A user `ev.preventDefault()` opts out of interception entirely, which also
reads correctly: the handler owns the transaction instead.

Because truth here is a `$global` expression rather than a local binding,
the optimistic view takes the natural name — there is no
`cart`/`optimisticCart` split in the template at all.

### 9.2 Manual fetch (no persisted pages)

```marko
<let-global/cart="cart"/>
<optimistic/optimisticCart=cart/>

<form method="POST" action="/cart" onSubmit=async (ev) => {
  ev.preventDefault();
  optimisticCart = [];
  cart = (await submit(ev)).cart;   // rejection ⇒ revert, no truth write
}>
```

Same tag, same semantics; the transaction is the handler's returned promise.

### 9.3 Optimistic link navigation

```marko
<let/sorting=false>
<optimistic/sort=$global.search.sort pending:=sorting/>

<a
  href=Run.href("/search", { search: { sort: "price" } })
  onClick() { sort = "price" }
  aria-busy=sorting
>Price</a>
```

Transactions are event-scoped, not form-scoped, so intercepted GET
navigations get the identical story — active states flip instantly and
settle to the destination's truth. If the results list sits under a `<try>`
whose promise re-derives from the new sort, the transaction holds until it
resolves and the list keeps showing the previous results instead of a
spinner (§11.2).

### 9.4 Validation errors for free

The demo's promo form POSTs and the server re-renders the same page with
`promo.error` on invalid codes; the persisted router applies that direct
POST response as an in-place patch. An optimistic guess elsewhere on the
page that *fails validation* needs no new API: the transaction releases when
the error patch applies, overrides revert, and the error content is already
on screen. Rollback-plus-explain composes from existing pieces. (Disabling
the promo button itself is the value-less pending gap — §7.2.)

### 9.5 Shared views: what composes and what doesn't

Instance-locality is the limitation to be loud about: an override recorded
by the product card's `<optimistic>` does not move the header badge. What
*does* work today is ambient fan-out — because any code run synchronously
by the handler joins the same transaction, a userland store tag whose write
path fans out (the demo's `let-global` pub/sub) gives every subscribing
instance its own override, all releasing on the same settle:

```marko
// tags/optimistic-global.marko (userland, sketch)
<let-global/truth=input.key/>
<optimistic/view=truth/>
<script> subscribe(input.key, (v) => view = v); /* $signal.onabort cleanup */ </script>
<return=view valueChange(v) { publish(input.key, v) }/>
```

A future `<mut>`/`let-*` store tag can bake this in; `<optimistic>` is the
primitive it would use, not a competitor.

## 10. Abort, cleanup, lifetime

1. **Supersession** releases overrides (§8.2). The persisted integration
   settles its extension on every exit path of `navigate()` — success after
   the last frame, silent abort, partial-apply replace, and document
   fallback (`run-pp/.../persisted-navigation.ts:85,128,144,146-153`) — so
   the shell wires it once around the navigation promise rather than
   per-path.
2. **`$signal` stays orthogonal.** A handler's `$signal` aborts on
   dependency invalidation/unmount (`dom/abort-signal.ts`), not on
   transaction release — and see §11.4 for why the two must not be
   conflated. Aborting the *work* (the fetch) on supersession is the user's
   `AbortController` in v1; a `$transaction.signal` that aborts on
   supersession is a coherent later addition (§13.6) but v1 avoids a
   second ambient object.
3. **Hung transactions.** A never-settling promise — or an attributed
   boundary whose promise never resolves — holds the transaction (and
   placeholder continuity, §11.2) indefinitely; that is goal 4's contract
   honored literally, and only the app knows a timeout policy. Debug builds
   warn after a threshold (~10s) naming the binding and what is being
   waited on (promise vs boundary); production does nothing. Users bound
   lifetimes with `AbortSignal.timeout` on their own fetches; the persisted
   router's fetches already settle on every path.
4. **Unload/destroy.** Full-document fallback and `instance.destroy()` make
   release moot; scope-generation guards already skip destroyed work. A
   boundary attributed to a transaction that is destroyed with its branch
   leaves the async set the same way (generation check at resolve).

## 11. Transactions and the async machinery

Marko already has four async subsystems: the render/effect queue, the
`<try>`/`<await>` placeholder system, `$signal` lifetimes, and (persisted)
the streamed frame applier. Transactions must compose with each without
becoming a fifth scheduler. Walked one at a time:

### 11.1 The queue

Optimistic assignment is an external state write: set the slot
synchronously, `schedule()` + `queueRender`, exactly `_let`'s shape
(`dom/signals.ts:43-49`). Release is the same path from the release
microtask; the settle check rides the end of a flush (§6.2). The no-flicker
guarantee follows from sequencing alone: in
`optimisticCart = guess; cart = (await f()).cart`, the truth write queues
before the handler promise resolves, the release callback runs after it, and
both land in the same flush. Transactions never call `run()` directly and
never bypass batching; they add one thing to the queue's world: renders can
carry an attribution to the transaction whose write queued them (§11.2), and
renders queued *while running* an attributed render inherit it.

### 11.2 Async holds and placeholder continuity

The transaction's contract is "intent → fully rendered outcome", so async
render work the transaction causes is part of its lifetime, and content the
user is already looking at must not regress while that work resolves. Two
rules, one attribution mechanism:

**Hold.** When an async boundary pends — an `<await>` receiving a promise,
or a lazy load gate; both speak `AwaitCounter`
(`dom/control-flow.ts:275`, `dom/load.ts:41`) — during an attributed
render, the boundary joins the transaction's async set. The transaction
settles only after its promise set *and* async set are empty. Chained async
(a resolved boundary's content render pends another boundary) inherits
attribution through the resolution render. A boundary that rejects into
`@catch` leaves the async set the same as resolving: the intent has a fully
rendered outcome — an error is an outcome.

**Continuity.** A boundary that already has live content and re-pends from
an attributed render does not re-show `@placeholder`: the content branch
stays in the DOM until the new value resolves, then swaps. This is not a
new idea in the runtime — a re-pending `<await>` *without* a placeholder
already keeps its old content and only detaches it on the next animation
frame if still pending (`dom/control-flow.ts:134-158`), with a guard for
re-awaits that resolve before detaching (`:114-117`), and re-pending
branches already park their renders
(`awaitBranch[PendingRenders] ||= []`, `:98,:132`). The transaction rule
extends that one-frame grace to "until the boundary I caused resolves", and
extends it to boundaries *with* placeholders (`:95-101`, where today
`addAwaitCounter` re-shows the placeholder unconditionally). First-time
pends are untouched: with no prior content there is nothing to keep, and
`@placeholder` shows as today.

Three consequences to be explicit about:

- **Kept content is frozen content.** Parked renders mean the retained
  branch does not track other state while it waits — the same staleness
  React accepts when a transition shows the previous tree. It already
  happens for one frame today; transactions make the window as long as the
  attributed promise.
- **Failure composes.** If the mutation fails, release reverts the view;
  the boundary's promise re-derives from the reverted value; the boundary
  re-pends (attributed to the same still-unsettled transaction), continuity
  keeps the current content, and it resolves back to what truth warrants.
  The user never sees a spinner for a round trip that changed nothing —
  at the cost of a refetch (`<const>`-derived promises are new objects even
  for reverted inputs; caching is userland).
- **Attribution granularity is a real decision.** Options: (i) per-render
  provenance — tag `PendingRender`s queued by transaction writes, set an
  ambient while each runs, inherit on nested `queueRender`/boundary pends:
  precise, touches the hot loop behind the enable flag; (ii) per-flush —
  any boundary pending during a flush that contained the transaction's
  renders attributes to it: cheaper, over-holds when unrelated writes
  share the batch and pend a new boundary; (iii) global-while-unsettled:
  simplest, over-holds most, but arguably matches user perception during a
  navigation ("the page isn't done"). Recommendation: (ii) for v1 —
  over-holding is benign (a held transaction ends when the stray boundary
  resolves; continuity for it is at worst extra politeness) while
  under-holding breaks the contract — with (i) as the upgrade path if
  evidence demands. Tracked in §13.7.

### 11.3 `<await>` handed the transaction's own promise

Nothing stops `<await=submitPromise>` where the handler also `$waitUntil`s
the same promise — placeholder (or kept content) while pending, content and
release in the same settle window, no deadlock: boundary resolution depends
on the userland promise, never on the transaction. This is the correct
meeting point of the two systems and needs no API; promises are the shared
currency.

### 11.4 `$signal` self-abort

An existing behavior transactions will make common: a handler that *reads*
the binding it assigns (`cart = [...cart, item]`) has that binding in its
attribute root's dependencies, so the assignment queues the root's
`$signalReset` (`translator/visitors/referenced-identifier.ts:114-127`) and
any `$signal` the handler captured aborts one flush later — including one
passed to a fetch started in the same invocation. So: `$signal` inside an
optimistic handler is almost always wrong; it means "my closure went
stale", not "my intent was superseded". v1 guidance is a plain
`AbortController` (or nothing — the persisted router manages its own);
`$transaction.signal` (§13.6) is the eventual correct tool. This asymmetry
is also why `$waitUntil` must not share `$signal`'s reset lifecycle:
extending a transaction from a `<script>` would tie user intents to render
invalidation, which is a category error in both directions.

### 11.5 Persisted frame streaming

The extension releases when `navigate()` resolves — at **stream end**, not
first frame. This is deliberate: a patch response embeds late async frames
(a pending `<try>` on the target page delivers its boundary body as a later
frame in the same response), and the mutated value itself may live inside
such a boundary, so no earlier point is provably truth-complete. Client-side
boundaries re-pended by patched values attribute to the navigation's
transaction because frame applies flush through the ordinary scheduler
(`marko-pp/.../dom/update.ts:145`) with the extension unsettled — so
continuity holds across an apply: a settled boundary on the live page whose
input patches to a new promise keeps its content rather than receding.

One seam is left open rather than solved here: *server-sent* pending
boundaries. A fragment frame can carry a `@placeholder` whose body arrives
as a later boundary-body frame; applying it replaces live settled content
with a placeholder — the server-side twin of the regression continuity
suppresses client-side. Deferring that swap until the body frame arrives
(the wire format already separates the two) would extend continuity to
fragments, but it interacts with possession/`diverge()` fallback rules and
the roadmap's async-fragment matrix, so it needs the persisted owners —
tracked in §13.8. The cost of stream-end release stands regardless: a slow
unrelated `<await>` on the target route extends the hold; accepted for v1,
with a "route values complete" protocol marker as the future refinement
(§13.9). Between-frame interleaving needs no new rules: other transactions
releasing mid-stream are just client writes between frames, which the
persisted design already pins (`persisted-update-csr-race`).

### 11.6 Rejection reporting

Adoption must not swallow errors. Attaching release via `.finally`-shaped
wiring preserves the rejection for the host's `unhandledrejection` (or the
user's own `catch`); `$waitUntil` follows `ExtendableEvent.waitUntil`
precedent the same way. The transaction observes outcomes; it never
consumes them.

### 11.7 SSR, streaming, resume

Transactions are client gestures. `$waitUntil` throws on HTML output like
`$signal`; `<optimistic>` degenerates to `<const>` in server renders,
including streamed ones; `pendingChange` cannot fire before resume because
handlers don't run before resume — pre-resume interactions are native
(that's progressive enhancement working, not a gap). Nothing about a
transaction serializes, so resume cost is zero.

## 12. Implementation sketch

Compiler (all standard core-tag shape, `translator/core/`):

- `core/optimistic.ts` — analyze like `<let>` (tag var required; `value=`,
  `pending=`, `pendingChange=` only); assignments route through the
  existing assignment-tracking machinery (`util/references.ts:546`, the
  `assignmentTo`/change-handler path) to a distinct setter instead of a
  change handler. DOM translate emits `_optimistic(id, fn)` + assignments
  as `_optimistic_set(scope, id, value)`; the pending handler stores on a
  companion accessor like `_let_change`'s (`dom/signals.ts:56-64`). HTML
  translate degenerates to `<const>`.
- `$waitUntil` in `visitors/referenced-identifier.ts` beside `$signal`,
  including the server-render throw and the handler-prologue capture for
  lexical-window uses.

Runtime (`src/dom/`):

- `transaction.ts` — ambient current-transaction, promise + async-set
  lifecycle with the release/settle edges, the `enableTransactions()`
  install that wraps handler invocation in `handleDelegated` via a
  reassignable seam (net-zero for non-users), thenable adoption of handler
  return values, the flush-attribution ambient consulted by
  `queueRender`/`AwaitCounter` when enabled, and the extension entry point
  for hosts.
- `_optimistic*` signal helpers beside `_let`/`_let_change` in
  `signals.ts`: source slot + override list per instance; effective value
  precomputed into the read slot so downstream reads stay one property
  access; pending edges fired synchronously at attach/settle transitions.
- Continuity hooks in `control-flow.ts`: the re-pend paths
  (`_await_promise` placeholder re-show at `:95-101`, the rAF detach at
  `:134-158`) consult the active transaction's async set before swapping;
  both sites are already behind `_enable_catch`-installed machinery, so
  non-users pay nothing.
- Budget: target ≤1.5 kB min for transaction + optimistic + hold/continuity
  combined, tree-shaken to zero when unused; `.sizes.json` enforces. The
  attribution ambient is the riskiest line item — it must be a single
  module-level read on the queue paths when enabled.

`@marko/run` (persisted shell, `runtime/persisted.ts`):

- At interception, extend the event's transaction and settle it around the
  `navigate()` promise in `navigateMatched` — a few eager-shell lines. The
  handshake must not import the optimistic runtime: either an optional hook
  on the runtime global the generated code already reaches into
  (`self[runtimeId]`, cf. the `have` reader in `run-pp/.../codegen/index.ts`)
  or a synchronous CustomEvent contract. The hook is smaller and
  runtime-id-safe; the event doubles as a public lifecycle signal — decide
  with run maintainers (§13.5).

A later `<form pending:=...>` (§7.2) would live with the controllable
native-attribute family (`dom/controllable.ts`), not in the tag.

Fixtures (harness already supports interaction steps, promise controls, and
persisted `navigate()` steps): optimistic basic/derive/revert;
async-handler success+failure; `$waitUntil` incl. post-await;
outside-window debug error; sync-discard warn (no async caused); concurrent
transactions incl. out-of-order releases; pending edges incl.
guess-equals-truth, the released-but-unsettled window, and same-batch
flushing; async hold: attributed boundary keeps transaction open, chained
pends inherit, `@catch` counts as resolution; continuity: re-pend with
placeholder keeps content, first pend still shows placeholder, kept content
is frozen (parked renders), failure-revert refetch keeps content; `<await>`
of a transaction promise; optimistic write under an already-pending `<try>`
(park + release, `dom/queue.ts:41-48`); `<for>` row patterns; persisted
form PRG, direct-POST validation patch, supersession, fallback, client
boundary re-pend continuity across an apply; fan-out store composition.

## 13. Open questions

1. **Pending surface details.** Is the inert `pending=` value side
   acceptable for the sake of `:=` sugar, or should the tag accept only
   `pendingChange=` (§7.1)? And the value-less-mutation gap: pursue
   `<form pending:=...>` as a native controllable-style attribute, leave it
   to run navigation events, or both (§7.2)?
2. **Error routing.** Should a rejected transaction surface to an enclosing
   `<try @catch>` instead of an unhandled rejection? Powerful, but it makes
   event-time errors render-time errors and needs its own design. v1:
   handler's own `try`/`catch`.
3. **Shared/global optimistic state** — the `<mut>`/`let-*` store design;
   §9.5 is the interim story and the composition constraint on it.
4. **Rebase/updater assignments** (§8.3): wait for real-world cases.
5. **Router handshake shape** (hook vs CustomEvent) and whether run should
   grow public navigation lifecycle events + a submissions view (model C)
   on the same registry.
6. **`$transaction` object exposure** (signal for supersession-abort of
   user fetches, programmatic `startTransaction` for non-event contexts):
   deliberately withheld from v1 to keep one ambient concept; the internal
   object exists from day one, so exposure is additive. §11.4's self-abort
   gotcha is the strongest argument for eventually shipping it.
7. **Attribution granularity** (§11.2): per-flush for v1, per-render
   provenance if over-holding shows up in practice; needs a fixture that
   discriminates the two (unrelated write pending a new boundary in a
   shared batch).
8. **Fragment/boundary-body continuity in persisted applies** (§11.5):
   defer placeholder-bearing fragment swaps until their body frame when a
   transaction holds? Interacts with possession and fallback rules; needs
   the persisted owners.
9. **Earlier persisted release** (§11.5): a protocol marker separating
   "route values complete" from "async frames continue" would shorten
   holds on routes with slow boundaries; belongs to the wire format if
   pursued.
10. **Mutation queueing in the persisted router** (§8.2): belongs with the
    roadmap's "concurrent submissions" review; this design works with
    either abort-and-replace or a queue.
11. **Continuity beyond transactions.** Should "re-pends keep content"
    eventually be `<try>`-level behavior (an opt-in attribute) rather than
    transaction-gated? Transactions cover most user-initiated re-pends, so
    v1 scoping answers the motivating cases without a global behavior
    change; a `<try>` attribute remains open as the general tool.
