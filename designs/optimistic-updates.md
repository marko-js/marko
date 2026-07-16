# Optimistic updates: design exploration

Status: exploration, pre-RFC. This document maps the design space for an
optimistic-update API in Marko 6 (`packages/runtime-tags`), evaluates candidate
models, and develops the most promising one far enough to expose its gaps —
pending states, concurrency, abort/cleanup, and integration with persisted
pages. Nothing here is committed; §4 records the honest weaknesses of the
recommended direction and §12 the open questions.

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

Under persisted pages the truth channel becomes automatic (a form submission
is intercepted, runs as a PRG mutation, and the followed redirect patches
`$global`-derived values back into the live page), which makes the remaining
manual part — the guess and its lifetime — the whole problem.

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
4. **Bounded lifetime.** Every guess has a defined end — success, failure, or
   supersession — after which the UI reflects truth. No "until something
   happens to re-render" semantics.
5. **Answers for pending, concurrency, and abort** that fall out of the
   model rather than bolt on.

Non-goals:

- A client data layer, cache, or store (TanStack-style key/value overlay).
  Shared client state composition stays userland (see §9.5), pending a
  `<mut>`/`let-*` family design.
- Offline/queued mutations.
- Replacing `<try>`/`<await>` pending semantics; those remain the async
  placeholder system.

## 3. Design space

Five models were considered. A is the sketch that motivated this document;
the others are genuine alternatives, not strawmen.

### A. Overlay tag + implicit event transactions

A core `<optimistic/view=source>` tag derives `view` from `source` like a
`<const>`, but `view` is assignable. Assignments record an *override* tied to
the current **event transaction** — an implicit scope opened when Marko
dispatches an event handler, closed when the handler's synchronous work, its
returned promise, and any registered extensions settle. On settle the
override is released and `view` re-derives from `source`.

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
| Pending derivable | yes (§7) | best | yes | yes | no |
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

Recorded up front; §12 tracks the ones without answers.

1. **Two names for one value.** Every optimistic view doubles a binding
   (`cart` / `optimisticCart`), and any expression that reads the source
   directly silently ignores guesses. Inherent to overlay models (React's
   `useOptimistic` shares it). Mitigation is convention (shadowing is
   impossible; lint "source read in a template that declares an optimistic
   view of it" is plausible), not design.
2. **Instance-local overrides.** `<optimistic>` in the product card does not
   move the cart badge in the header. Ambient transactions make the
   *synchronous fan-out write* compose (§9.5), but sharing itself remains
   userland until D exists. This is the sharpest practical limitation.
3. **The transaction window is invisible.** "Assignments join the
   transaction only in these windows" (§6.3) is a rule users will meet as a
   debug error, not syntax. The lexical-capture rule softens it for inline
   handlers; extracted helpers still hit it.
4. **Snapshot overrides don't rebase.** If truth changes mid-flight from an
   independent source, a held snapshot hides it until settle (§8.3). React
   solves this with updater re-application; deferred here with storage
   designed to admit it.
5. **A hung promise holds the override forever.** Bounded-lifetime is only as
   good as the promises joined to the transaction (§10.3).

## 5. Proposed surface

Three additions, sized for a v1 the whole document defends:

```marko
<optimistic/optimisticCart=cart/>
// `optimisticCart` mirrors `cart`. Assigning it inside an event handler
// applies immediately and reverts when the handler's transaction settles.

<form method="POST" action="/cart" onSubmit() { optimisticCart = [] }>
// Persisted router: intercepts the submit, extends the transaction until the
// PRG patch applies. No router: add `ev.preventDefault()` + async fetch and
// the returned promise is the transaction.

<pending/saving=optimisticCart/>
// True while any unsettled transaction holds an override on the binding.

$waitUntil(promise)
// Inside a handler: extend the current transaction past its own promise.
```

- `<optimistic>` requires a tag variable (identifier, not destructured —
  it must be assignable) and accepts only `value=`, matching `<let>`'s
  attribute discipline (`translator/core/let.ts:60`).
- `<pending>` accepts `value=` as an optimistic binding, an element
  reference, or an array of either (§7).
- `$waitUntil` joins `$global`/`$signal` as a translator-resolved
  identifier; it is a compile error on HTML output paths the same way
  `$signal` throws in server renders
  (`translator/visitors/referenced-identifier.ts:100`).

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
| Transaction settles (any outcome) | Its overrides are released. Each affected `view` re-derives: latest remaining active override in write order, else `source`. Dirty-checked, so a correct guess produces zero mutations. |
| Assignment outside any window | Debug: thrown error naming the binding and the rule. Optimized: unguarded (undefined behavior), per the `MARKO_DEBUG` convention. |
| Scope destroyed mid-transaction | Nothing: overrides live on the scope; settle-time work on destroyed scopes is skipped by the existing generation checks (`dom/queue.ts:177`). |

`view` never writes back to `source` — there is no commit path, only revert.
Truth arrives on its own channel (a patch, a `cart = ...` assignment, a
store write), which is what makes "release the override" always safe.

### 6.2 Event transactions

A transaction is the unit "one user intent, until settled".

- **Open:** lazily, at the first optimistic assignment, `$waitUntil`, or
  router extension during an event dispatch. Marko owns the only dispatch
  point (`dom/event.ts:47`), so this is one ambient set/clear around handler
  invocation, installed by a self-modifying `enableTransactions()` only when
  the feature is compiled in (pattern: `_enable_catch`, `dom/queue.ts:190`).
- **Join:** an optimistic assignment adds an override; `$waitUntil(p)` and
  the router's extension add pending promises; a handler that returns a
  thenable has it adopted automatically.
- **Settle:** when the pending count reaches zero (checked from a microtask
  after dispatch, so a sync handler with no extensions settles immediately).
  Resolution and rejection are identical: release. Rejection additionally
  rethrows to the host (unhandled rejection) unless user code caught it —
  the transaction does not swallow or route errors (§12.2).
- **Release ordering:** releases queue through `queueRender`/`schedule()`
  like any state write. A settle triggered by a resolved fetch whose handler
  also assigned truth flushes in the same batch — no truth-then-revert
  flicker frame. The persisted router resolves its extension after the final
  frame's synchronous flush (`run-pp/.../persisted-navigation.ts:126-144`),
  giving the same single-batch property.

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
- a transaction that settles synchronously while holding overrides ("your
  handler is sync, nothing extended the transaction — the guess was
  discarded immediately"): warn, names the fix (`async`, `$waitUntil`, or
  the persisted router).

### 6.4 `$waitUntil`

`$waitUntil(promise)` extends the current transaction (ambient, else
lexical capture). Modeled on `ExtendableEvent.waitUntil`; callable multiple
times; later calls during an extended window keep stacking. Debug-errors
when no transaction is current. Not valid in `<script>`/render expressions —
transactions are user intents, not render lifecycles; `$signal` already
owns cleanup there.

## 7. Pending states

Three granularities matter in practice; the design covers them with one tag
plus derivation:

1. **Value pending** — "this number is a guess": `<pending/saving=view>` is
   true while any active override exists on `view`. Note this is *not*
   `view !== source` — a guess equal to current truth is still pending
   (and `!==` misses it), and this signal exists precisely so users don't
   hand-derive it wrong.
2. **Element pending** — "this form/link is busy":
   `<pending/busy=formEl>` (a native tag variable) is true while any
   unsettled transaction's originating event target was inside that element.
   This covers the mutation-with-no-optimistic-value case — the demo's promo
   form wants its button disabled during the round trip, and in a persisted
   app the handler has no completion callback to reset manual state with.
   Containment is checked once at transaction open, only when element-keyed
   `<pending>` tags are registered.
3. **Row/derived pending** — style-don't-remove patterns derive from the two
   above plus membership:

```marko
<optimistic/optimisticEntries=entries/>
<for|entry| of=entries by=(e) => e.product.id>
  <const/removing=!optimisticEntries.includes(entry)>
  <tr class={ removing }> ... </tr>
</for>
```

(Iterate truth, style by optimistic membership — or iterate the optimistic
list for hard removal. Both compose with `by=` keying.)

`<pending>` is always false during SSR (there is no value to serialize;
normal analysis decides the spine) and pairs naturally with
`aria-busy=saving` — the docs guidance should say so (the unwritten
`duplicate-form-submissions.md` guide is this feature's teaching moment).

Deliberately absent: a page-global "is anything navigating" flag. That is
router state and belongs to `@marko/run` (the persisted shell already owns
the lifecycle and today emits only a success `marko-run:navigate` event,
`run-pp/.../persisted-navigation.ts:144`); a core tag must not imply a
router. Model C's submissions list is the natural home when it comes.

## 8. Concurrency

### 8.1 Override stacking

Per `<optimistic>` instance, overrides form an ordered list keyed by
transaction: `[{txn, value}...]` in write order; a transaction re-assigning
replaces its entry in place. Effective value = last entry; release removes
entries by transaction and re-derives. Consequences worth stating:

- **Compose from the view, not the source.** `optimisticCart =
  [...optimisticCart, item]` layers correctly over earlier unsettled guesses
  because the view already includes them. This is the documented idiom (and
  what the demo already does).
- **Out-of-order settles are principled.** T1 guesses v1, T2 guesses v2, T2
  settles first → the view shows v1 (T1's intent is still unconfirmed),
  then truth when T1 settles. Odd-looking, correct, worth a docs example.

### 8.2 Double submit under the persisted router

The router is abort-and-replace with no queue: a new navigation aborts the
prior *GET* outright but never network-aborts a *POST* (the mutation may
have reached the server and must apply exactly once); it only supersedes the
prior POST's application (`run-pp/.../persisted-navigation.ts:62-65,81`).
With transactions layered on:

- submit A: txn A opens, override A applies, POST A departs;
- submit B before A applies: router aborts A's application, txn A settles
  (release A), txn B's override — composed from the view, so including A's
  intent — remains;
- B's response reflects the server having run A then B (same-connection
  ordering for same-session mutations is the normal case), patch applies,
  txn B settles, view = truth.

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
override hides it until settle. React re-applies updater functions over new
truth for this. The storage shape above admits it later — treat a
function-valued assignment as an updater, re-fold active updaters when
`source` re-derives — but v1 ships snapshots only: the demo cases don't
need rebase, function-valued *state* would need a carve-out, and
compose-from-the-view already handles the common overlap (two guesses over
the same value). Revisit with evidence (§12.4).

## 9. Worked examples

### 9.1 Persisted pages (the headline)

```marko
<optimistic/optimisticCart=$global.data.cart/>

<div>Items in cart: ${optimisticCart.length}</div>

<form method="POST" action="/cart" onSubmit() { optimisticCart = [] }>
  <button name="_action" value="clear">Clear Cart</button>
</form>
```

Flow: Marko's delegated handler runs first (document capture,
`dom/event.ts:30`; the router listens on window bubble,
`run-pp/.../persisted.ts:31-33`) and records the override. The router
intercepts, extends the transaction, POSTs; the PRG redirect renegotiates
and patches; `$global.data.cart` re-derives (persisted `$global`-read
promotion); the extension resolves after the final frame; the override
releases against already-correct truth. Failure or fallback → document
navigation; supersession → release. No JS → plain PRG. A user
`ev.preventDefault()` opts out of interception entirely, which also reads
correctly: the handler owns the transaction instead.

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
<optimistic/optimisticSort=$global.search.sort/>
<pending/sorting=optimisticSort/>

<a
  href=Run.href("/search", { search: { sort: "price" } })
  onClick() { optimisticSort = "price" }
  aria-busy=sorting
>Price</a>
```

Transactions are event-scoped, not form-scoped, so intercepted GET
navigations get the identical story — active states flip instantly and
settle to the destination's truth.

### 9.4 Validation errors for free

The demo's promo form POSTs and the server re-renders the same page with
`promo.error` on invalid codes; the persisted router applies that direct
POST response as an in-place patch. With `<pending/applying=promoForm>`
disabling the button, an optimistic form that *fails validation* needs no
new API: the transaction settles when the error patch applies, overrides
revert, and the error content is already on screen. Rollback-plus-explain
composes from existing pieces.

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
   settles on every exit path of `navigate()` — success after the last
   frame, silent abort, partial-apply replace, and document fallback
   (`run-pp/.../persisted-navigation.ts:85,128,144,146-153`) — so the shell
   wires settle once around the navigation promise rather than per-path.
2. **`$signal` stays orthogonal.** A handler's `$signal` aborts on
   dependency invalidation/unmount (`dom/abort-signal.ts`), not on
   transaction settle. Aborting the *work* (the fetch) on supersession is
   the user's `AbortController` in v1; a `$transaction.signal` that aborts
   on supersession is a coherent later addition (§12.6) but v1 avoids a
   second ambient object.
3. **Hung transactions.** A never-settling promise holds its override
   forever; that is goal 4's contract honored literally (the guess is
   released *when the intent settles*, and only the app knows a timeout
   policy). Debug builds warn after a threshold (~10s) naming the binding
   and origin; production does nothing. Users bound lifetimes with
   `AbortSignal.timeout` on their own fetches; the persisted router's
   fetches already settle on every path.
4. **Unload/destroy.** Full-document fallback and `instance.destroy()` make
   release moot; scope-generation guards already skip destroyed work.

## 11. Implementation sketch

Compiler (all standard core-tag shape, `translator/core/`):

- `core/optimistic.ts` — analyze like `<let>` (tag var required, `value=`
  only); assignments route through the existing assignment-tracking
  machinery (`util/references.ts:546`, the `assignmentTo`/change-handler
  path) to a distinct setter instead of a change handler. DOM translate
  emits `_optimistic(id, fn)` + assignments as
  `_optimistic_set(scope, id, value)`; HTML translate degenerates to
  `<const>`.
- `core/pending.ts` — value form resolves its argument to an optimistic
  binding at compile time (error otherwise); element form takes the ref.
- `$waitUntil` in `visitors/referenced-identifier.ts` beside `$signal`,
  including the server-render throw and the handler-prologue capture for
  lexical-window uses.

Runtime (`src/dom/`):

- `transaction.ts` — ambient current-transaction, pending-count lifecycle,
  the `enableTransactions()` install that wraps handler invocation in
  `handleDelegated` via a reassignable seam (net-zero for non-users), the
  thenable adoption of handler return values, and the extension entry point
  for hosts.
- `_optimistic*` signal helpers beside `_let`/`_let_change` in
  `signals.ts`: source slot + override list per instance; effective value
  precomputed into the read slot so downstream reads stay one property
  access; release paths go through `queueRender` + `schedule()`.
- Budget: target ≤1.0 kB min for transaction + optimistic + pending
  combined, tree-shaken to zero when unused; `.sizes.json` enforces.

`@marko/run` (persisted shell, `runtime/persisted.ts`):

- At interception, extend the event's transaction and settle it around the
  `navigate()` promise in `navigateMatched` — a few eager-shell lines. The
  handshake must not import the optimistic runtime: either an optional hook
  on the runtime global the generated code already reaches into
  (`self[runtimeId]`, cf. the `have` reader in `run-pp/.../codegen/index.ts`)
  or a synchronous CustomEvent contract. The hook is smaller and
  runtime-id-safe; the event doubles as a public lifecycle signal — decide
  with run maintainers (§12.5).

Fixtures (harness already supports interaction steps, promise controls, and
persisted `navigate()` steps): optimistic basic/derive/revert;
async-handler success+failure; `$waitUntil` incl. post-await;
outside-window debug error; sync-settle warn; concurrent transactions incl.
out-of-order settles; `<pending>` value+element forms; `<for>` row patterns;
persisted form PRG, direct-POST validation patch, supersession, fallback;
fan-out store composition.

## 12. Open questions

1. **`<pending>` in v1?** The element-keyed form is what makes persisted
   mutations without optimistic values (promo form) work at all; the value
   form is derivable-ish but easy to derive wrong. Leaning: ship both;
   they're small once transactions exist. Naming (`<pending>` vs `<busy>`)
   open.
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
   object exists from day one, so exposure is additive.
7. **Mutation queueing in the persisted router** (§8.2): belongs with the
   roadmap's "concurrent submissions" review; this design works with either
   abort-and-replace or a queue.
8. **View-transition interplay** (deferred in the persisted roadmap):
   transaction settle is a natural `startViewTransition` boundary; keep the
   settle path shaped so a future integration can wrap it.
