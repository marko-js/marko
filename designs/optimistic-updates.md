# Optimistic updates: design exploration

Status: exploration, pre-RFC. Fourth revision. The third revision factored
the design into independently shippable primitives (boundary
pending/continuity, transactions, `<optimistic>`); this revision corrects
how tag-owned state is exposed — `pending:=` misused the controllable
convention, which implies the caller can own the value — and re-derives
every pending surface from that correction. Earlier revisions live in this
file's git history.

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

The gaps, each visible in that snippet:

- **No rollback.** If `submit` rejects, the guess is permanent. The UI lies.
- **No pending state.** Nothing distinguishes "guessed" from "confirmed",
  and in a persisted-pages app the handler has no completion signal to reset
  manual flags with.
- **Races.** Two quick submissions interleave guesses and truths; the last
  `await` to resolve wins regardless of submission order.
- **The guess overwrites the truth channel.** Guess and truth share one
  variable, so reconciliation is "whoever assigned last".
- **Async regression.** When new input swaps a promise a `<try>` boundary is
  already showing content for, the user watches settled UI recede to
  `@placeholder` and load again — jarring after the outcome was already
  shown optimistically, and (independent of mutations entirely) on every
  client-side promise swap such as search-as-you-type.

## 2. First principles

Rather than starting from an API sketch, start from what Marko already
believes and derive what must exist.

Axioms, taken from the framework's own design:

- **A1.** HTML is the application language; links and forms are the mutation
  API.
- **A2.** The server owns truth. Client state exists only where the compiler
  proves the client needs it.
- **A3.** State is declared bindings updated by plain assignment; everything
  else derives.
- **A4.** Values flow through positions with fixed meanings: a tag
  **exposes** a value it owns through its *tag variable* (element getters,
  `<id>`, `<let>`, `<return>`); a tag **accepts** values through
  *attributes*; an attribute paired with a *change handler* means the caller
  can own that value (the controllable convention — inputs, `<let>`,
  `<return>`). An attribute/change-handler pair on a value the caller can
  never own is a lie in the syntax: `<try pending:=searching>` reads as
  permission to *tell* the boundary to go pending.
- **A5.** Async is structural. "Not here yet" is expressed by where
  `<await>`/`<try>` sit in the tree, not by status flags threaded through
  render code.
- **A6.** Everything degrades to native behavior without JavaScript.
- **A7.** Features cost nothing when unused.

Derivation:

1. From A1+A2: a mutation is a request whose confirmed effect arrives as new
   server-derived input on its own channel. Any *provisional* display of the
   expected outcome must be an **overlay that can never write truth** —
   reverting is the only exit.
2. The overlay needs a lifetime. From A1+A6, the natural unit is the **user
   act**: from the triggering event until the page has presented the act's
   outcome. No existing object has this extent, so it must be a first-class
   runtime concept that promises and routers can extend: a **transaction**.
3. From A5: pendingness is *already* structural — a `<try>` boundary knows
   when content it governs is unresolved. What is missing is not a new
   pending system but two abilities on the existing one: **expose** that
   state (per A4: as a readonly tag variable, not a fake-controllable
   attribute), and **keep existing content** while re-resolving instead of
   regressing to `@placeholder` (the placeholder represents "nothing yet";
   once content exists the boundary can represent pending better). These are
   independent: one observes, the other is behavior.
4. From A3+A4: there are no framework-owned pending flags. Boundary pending
   is a tag variable; a guess's visibility is *derivable* (`view !==
   source`); the pending of a gesture belongs to the gesture's element or
   its transaction, not to any value it happened to touch. Combined states
   are plain derivation, not framework-inferred aggregates.
5. From A7: each piece installs on use and is independently tree-shakable.

The deltas this derivation forces on the previous revision:

- **No `pending:=` anywhere.** `<try>` exposes pending through a tag
  variable. `<optimistic>` loses its pending attributes entirely — the
  observable cases derive (§6.3), and the non-derivable case (disable a
  control while the gesture is in flight) was never *value* pending at all;
  it is *gesture* pending, owned by the form/transaction layer (§7.1).
- **Continuity decouples from observation.** Declaring a variable must not
  change behavior; keeping content on re-pend is its own decision — and the
  honest question is whether it should simply be the default (§4.3).
- **Cross-system inference stays out** (unchanged from rev 3): transaction
  pending and boundary pending compose by derivation; automatic attribution
  remains a deferred refinement (§10.1).

## 3. The primitives and what lands first

Three orthogonal primitives, in dependency order. Each is useful without the
ones after it; none is useful without the ones before it. This ordering is
also the shipping recommendation.

| Stage | Feature | Home | Depends on | Standalone value |
| --- | --- | --- | --- | --- |
| 1 | `<try/pending>`: boundary pending as a readonly tag variable + content continuity on re-pend (§4) | marko core | nothing | every client promise swap today (search-as-you-type, tab data, polling); the vocabulary persisted boundary streaming needs |
| 2 | Event transactions + `$waitUntil` (§5) | marko core | nothing (infra) | none alone — ships with stage 3 |
| 3 | `<optimistic/view=source>` (§6) | marko core | transactions | full optimistic story for non-persisted apps via manual `fetch` handlers |
| 4 | Router transaction extension + navigation lifecycle (§8) | @marko/run | 2 | the persisted one-liner; optimism for intercepted links and forms |
| 5 | Refinements on evidence (§10): gesture pending, auto-hold/attribution, rebase, `$transaction`, submissions view, mutation queueing | varies | 1–4 | — |

Notes on the ordering:

- **Stage 1 first is the point.** Smallest, least controversial, most
  broadly useful; no mutation, transaction, or router concepts; its runtime
  already half-exists (§4.3); nothing in it blocks on persisted pages'
  release gates.
- **Stages 2+3 ship together** (a transaction with no observer is inert) and
  complete the core story for a plain marko app with a `fetch` in a handler.
- **Stage 4 is deliberately thin**: the router extends a transaction it did
  not create, through a handshake that keeps run from importing the
  optimistic runtime (§8.1); any userland router can do the same.
- The `<mut>`/`let-*` shared-store design is a parallel track, not a stage:
  it composes with these primitives (§7.3) but is its own document.

## 4. Stage 1: `<try>` pending and continuity

### 4.1 Surface

```marko
<try/searching>
  <await|results|=search(query)>
    <results-list results=results class={ stale: searching }/>
  </await>
  <@placeholder>Searching…</@placeholder>
  <@catch|err|>${err.message}</@catch>
</try>

<button disabled=searching>Search</button>
```

`<try>` today accepts no tag variable and no attributes
(`translator/core/try.ts:60-63`). This adds an optional **readonly tag
variable**: a reactive boolean owned by the boundary. Readonly tag
variables have precedent — native element variables reject assignment
(`translator/util/references.ts:309`) — and tag variables are hoisted, so
the flag is readable anywhere in the template, inside or outside the
boundary, and can be exposed to a parent via `<return>` like any other
value. No attribute, no change handler, nothing that implies the caller
can set it.

### 4.2 Semantics

- `pending` is `true` while the boundary's outstanding async count is
  nonzero — the existing `AwaitCounter`, so `<await>` promises and
  lazy-loaded children (`dom/load.ts:41`) are one currency, and nested
  `<try>`s each own their own variable. Transitions flush through the
  normal scheduler like any tag-variable change, so downstream renders
  batch with the boundary work they describe.
- Initial render: `true` if the boundary starts pending (placeholder
  showing), `false` otherwise. `@catch` swaps are unaffected — an error is
  an outcome, and the flag returns to `false`.
- SSR: the variable renders as `false` even where out-of-order streaming
  means a placeholder is showing — expressions outside the boundary are
  written before its resolution, and the placeholder *is* the server's
  pending representation. The flag becomes live on resume. This asymmetry
  is documented rather than hidden; it is the same one every client-only
  signal has.

### 4.3 Continuity

Independent of the variable: when a boundary with live content re-pends,
keep the content in the DOM until the replacement resolves — do not re-show
`@placeholder`, do not detach. The runtime already prefers this and gives up
too early: a re-pending `<await>` *without* a placeholder keeps its old
content and detaches only on the next animation frame if still pending
(`dom/control-flow.ts:134-158`, with a guard for re-awaits that resolve
before detach, `:114-117`), while the placeholder path re-shows
unconditionally (`:95-101`). Re-pending branches already park their queued
renders (`:98,:132`), so kept content is frozen content — the same
staleness React accepts when a transition shows the previous tree, and the
tag variable exists precisely so the app can dim it.

The open decision is the default. Options:

- **(a) Keep-on-re-pend becomes the behavior.** The placeholder shows when
  there is nothing yet (first render, `<if>` recreating the boundary);
  content, once shown, is only replaced by newer content or `@catch`. No
  opt-in, no new attribute; the rAF grace generalizes. This is the
  recommendation *if* the compatibility review agrees no one depends on
  regression — placeholder-on-re-pend is hard to defend as intent, and an
  app that wants a hard reset can key the boundary's branch (`<if>` /
  keyed `<for>`) to force recreation.
- **(b) Opt-in boolean attribute** (`<try keep>` or similar) if (a) is
  ruled out. A second knob, but honest and additive.

Coupling continuity to *declaring the tag variable* — rev 3's shape, where
observing implied behavior — is rejected: reading a value must not change
what the tag does.

### 4.4 Could you *tell* a `<try>` to go pending?

The critique of `pending:=` cuts both ways: if the syntax implied
writability, is writable pending itself coherent? Explored and deferred. A
written `pending=true` on a settled boundary could mean (i) style-only —
which the app's own state already does better, (ii) re-show the placeholder
— destroying live content, the exact regression continuity removes, or
(iii) hold/park the region's updates until released — a real capability
(atomic region updates, view-transition staging) but one that can starve
the very truth a transaction waits on, and nothing motivating it today
survives contact with "the app can already style, and §10.1 can already
hold". If a case emerges it arrives as a *new* input attribute with its own
name and semantics, not as a change handler retrofitted onto the readonly
variable. Tracked in §13.6.

## 5. Stage 2: event transactions

A transaction is the first-class lifetime of one user act. It exists so
overlays (§6) have a revocation scope and hosts (§8) have something to
extend; it does no rendering of its own.

### 5.1 Lifecycle

- **Open:** lazily, at the first optimistic assignment, `$waitUntil`, or
  host extension during an event dispatch. Marko owns the only dispatch
  point (`dom/event.ts:47`), so this is one ambient set/clear around handler
  invocation, installed by a self-modifying `enableTransactions()` only when
  something that uses transactions is compiled in (pattern: `_enable_catch`,
  `dom/queue.ts:190`).
- **Join:** an optimistic assignment adds an override (§6); `$waitUntil(p)`
  and a host extension add pending promises; a handler that returns a
  thenable has it adopted automatically.
- **Release:** when the pending promise count reaches zero, checked from a
  microtask after dispatch — a sync handler with no extensions releases
  immediately. Resolution and rejection are identical: release. Rejection
  keeps its unhandled-rejection reporting (`.finally`-shaped adoption,
  `ExtendableEvent.waitUntil` precedent) — the transaction observes
  outcomes, never consumes them.
- **Ordering:** release work queues through `queueRender`/`schedule()` like
  any state write. A release triggered by a resolved fetch whose handler
  also assigned truth flushes in the same batch — no truth-then-revert
  flicker frame (§9.1).

Nested dispatches (a handler synchronously dispatching another event) stack;
the inner dispatch gets its own transaction. There is deliberately **one
edge**: rev 2's second "settled once caused async resolves" edge required
attributing render work to transactions; §2's derivation removes it — apps
compose boundary and guess state by derivation (§7), and attribution
remains available as a refinement (§10.1) without changing this contract.

### 5.2 Assignment windows

Where optimistic assignments and `$waitUntil` may occur — precise, because
this is the implicit model's sharp edge:

1. **Ambient window** — code executing synchronously during the dispatch,
   however deep the call stack. This is what makes fan-out composition work:
   a store's `valueChange` fanning a write to subscriber instances joins all
   of them to the one transaction (§7.3).
2. **Lexical window** — the body of an inline handler expression, including
   after `await`. The translator emits a prologue capturing the transaction
   for handler-valued attributes whose body contains an optimistic
   assignment or `$waitUntil`, and compiles those uses against the captured
   reference.

Everything else — timers, socket callbacks, module-level helpers assigning
directly — is outside, and debug-errors. The guidance that falls out is the
right default anyway: *make the guess synchronously; that's what makes it
optimistic*.

Debug diagnostics: assignment outside any window errors, naming the binding;
a transaction that releases from the first post-dispatch check while holding
overrides warns ("your handler is sync and nothing extended the transaction
— the guess was discarded immediately"), naming the fixes (`async`,
`$waitUntil`, or a router that extends).

### 5.3 `$waitUntil`

`$waitUntil(promise)` extends the current transaction (ambient, else
lexical capture). Callable multiple times; stacking. Debug-errors with no
current transaction. It joins `$global`/`$signal` as a translator-resolved
identifier and throws on HTML output exactly as `$signal` does
(`translator/visitors/referenced-identifier.ts:100`). Not valid in
`<script>`/render expressions: transactions are user intents, not render
lifetimes — `$signal` owns cleanup there, and tying intent extension to
render invalidation would be a category error in both directions (§9.2).

## 6. Stage 3: `<optimistic>`

### 6.1 Surface

```marko
<optimistic/cart=$global.data.cart/>

<div>Items in cart: ${cart.length}</div>

<form method="POST" action="/cart" onSubmit() { cart = [] }>
  <button disabled=cart !== $global.data.cart name="_action" value="clear">
    Clear Cart
  </button>
</form>
```

Requires a tag variable (identifier, not destructured — it must be
assignable); accepts **only `value=`**, matching `<let>`'s attribute
discipline (`translator/core/let.ts:60`). Where truth is a `$global`
expression rather than a local binding, the view takes the natural name —
no `cart`/`optimisticCart` split.

### 6.2 Semantics

Let `source` be the `value=` expression and `view` the tag variable.

| Event | Effect on `view` |
| --- | --- |
| Render / SSR / resume | `view === source`. Server output is identical to `<const>`; no extra serialization beyond what assignment analysis already requires. |
| `source` re-derives | If no active override: `view` follows, normal dirty-check. If overridden: effective value unchanged (snapshot wins; §6.4), recorded source still updates so release is correct. |
| Assignment in a transaction window | Records/replaces this transaction's override on this instance, sets `view` synchronously (reads later in the same handler see it, matching `<let>` writes), queues downstream renders normally. |
| Transaction releases (any outcome) | Its overrides are removed. `view` re-derives: latest remaining active override in write order, else `source`. Dirty-checked — a correct guess produces zero mutations. |
| Assignment outside any window | Debug: thrown error naming the binding and the rule. Optimized: unguarded, per the `MARKO_DEBUG` convention. |
| Scope destroyed mid-transaction | Nothing: overrides live on the scope; release work on destroyed scopes is skipped by existing generation checks (`dom/queue.ts:177`). |

`view` never writes back to `source` — no commit path, only revert. Truth
arrives on its own channel (a patch, a `cart = ...` assignment, a store
write), which is what makes releasing always safe.

### 6.3 Observing a guess — derivation, not a flag

Whether the page is currently showing a guess is derivable, because both
sides are readable:

```marko
<const/showingGuess=cart !== $global.data.cart>
```

This works better than it first looks. Marko state is immutable-update by
idiom, so a guess is a *new object* — `cart = []` differs by identity from
a truth `[]` — and on release `view` re-derives to the *same reference* as
`source`, making the comparison exact. The only value it cannot see is a
transaction that assigned the source's own current reference back — the
degenerate case where nothing observable was guessed. Rev 3 shipped a
`pendingChange` attribute on `<optimistic>` to cover exactly that gap; per
A4 it is gone, and the honest accounting is: the remaining uncovered need
was never *value* pending. "Disable this button while the act is in
flight" is **gesture pending** — it belongs to the form/transaction, not to
whichever value the handler happened to guess — and is staged accordingly
(§7.1). In manual-fetch handlers it is already expressible today
(`saving = true; try { ... } finally { saving = false }`).

If evidence later shows per-value pending is a real recurring need, the
A4-honest shape exists: a companion tag exposing a readonly variable
(`<pending/saving=cart>`), which earlier revisions explored and this one
deliberately does not ship — no new data source until derivation is proven
insufficient.

### 6.4 Concurrency

Per instance, overrides form an ordered list keyed by transaction, in write
order; a transaction re-assigning replaces its entry in place. Effective
value = last entry; release removes by transaction and re-derives.

- **Compose from the view, not the source.** `cart = [...cart, item]`
  (where `cart` is the view) layers correctly over earlier unreleased
  guesses because the view already includes them. This is the documented
  idiom, and it is what makes double submit coherent (§8.2).
- **Out-of-order releases are principled.** T1 guesses v1, T2 guesses v2,
  T2 releases first → the view shows v1 (T1's intent is still
  unconfirmed), then truth when T1 releases.
- **Rebase is deferred.** When truth changes mid-flight from an independent
  source, a snapshot override hides it until release. React re-applies
  updater functions over new truth; the storage shape admits that later
  (function-valued assignment = updater, re-fold on source change), but v1
  ships snapshots: the demo cases don't need rebase, function-valued state
  would need a carve-out, and compose-from-the-view covers the common
  overlap (§10.2).

## 7. Pending in practice

Boundary pending is a tag variable; guess visibility is derivation; their
combinations are plain expressions:

```marko
<try/searching> ... </try>
<const/busy=searching || cart !== $global.data.cart>
```

This is the deliberate replacement for rev 2's automatic "hold the
transaction until caused async resolves": same user-visible outcomes, no
attribution machinery, and the composition is inspectable state rather than
inference. The known costs, honestly: it is manual (forgetting a term shows
a control re-enabled while its region resolves), and a boundary variable
includes re-pends the act didn't cause (a background poll swapping the same
promise) — over-broad but benign, and usually what a user perceives anyway.
If evidence shows manual composition is a recurring bug source, §10.1
layers the automatic hold back in without changing shipped semantics.

Row-level treatment is also derivation:

```marko
<optimistic/optimisticEntries=entries/>
<for|entry| of=entries by=(e) => e.product.id>
  <const/removing=!optimisticEntries.includes(entry)>
  <tr class={ removing }> ... </tr>
</for>
```

### 7.1 Gesture pending

The remaining real gap: an act with no boundary and no guess — the demo's
promo form wants its button disabled during the round trip, has nothing to
assign, and under the persisted router the handler gets no completion
callback. This is pending of the *gesture*, and per A4 it should be exposed
where the gesture lives. Candidate shapes, all stage 5: a readonly variable
on the form is impossible (native tag variables are the element getter), so
the options are a companion tag scoped to an element
(`<pending/applying=formEl>` — a readonly variable parameterized by an
element ref, containment checked once at transaction open), or run-level
navigation lifecycle events (§8.3) feeding ordinary state. Neither is
fake-controllable; deciding between them needs the router work landed
first. Until then: manual-fetch apps own the flag in the handler; persisted
apps wait for stage 4's events. Tracked in §13.2.

### 7.2 Validation errors for free

The demo's promo form POSTs and the server re-renders the same page with
`promo.error`; the persisted router applies that direct POST response as an
in-place patch. An optimistic guess that fails validation needs no new API:
the transaction releases when the error patch applies, overrides revert,
and the error content is already on screen. Rollback-plus-explain composes
from existing pieces.

### 7.3 Shared views

Instance-locality is the loud limitation: an override recorded by the
product card's `<optimistic>` does not move the header badge. What composes
today is ambient fan-out — any code run synchronously by the handler joins
the same transaction, so a userland store tag whose write path fans out
(the demo's `let-global` pub/sub) gives every subscribing instance its own
override, all releasing together:

```marko
// tags/optimistic-global.marko (userland, sketch)
<let-global/truth=input.key/>
<optimistic/view=truth/>
<script> subscribe(input.key, (v) => view = v); /* $signal.onabort cleanup */ </script>
<return=view valueChange(v) { publish(input.key, v) }/>
```

A future `<mut>`/`let-*` store tag bakes this in; `<optimistic>` is the
primitive it would use, not a competitor.

## 8. Stage 4: host integration (@marko/run and persisted pages)

### 8.1 The extension handshake

At interception the router extends the event's transaction and settles that
extension around the whole navigation. The persisted shell is the model
host: Marko's delegated handlers run first (document capture,
`dom/event.ts:30`; the shell listens on window bubble,
`run-pp/.../persisted.ts:31-33`), the shell already bails on
`ev.defaultPrevented`, and `navigate()` resolves on every exit path —
success after the last frame's synchronous flush, silent supersession,
partial-apply replace, document fallback
(`run-pp/.../persisted-navigation.ts:85,128,144,146-153`) — so the shell
wires settle once around the navigation promise in `navigateMatched`.

The handshake must not import the optimistic runtime: either an optional
hook on the runtime global generated code already reaches into
(`self[runtimeId]`, cf. the `have` reader in `run-pp/.../codegen/index.ts`)
or a synchronous CustomEvent contract. The hook is smaller and
runtime-id-safe; the event doubles as a public lifecycle signal — decide
with run maintainers (§13.3). Either way the contract is host-agnostic: any
userland router can extend transactions identically.

### 8.2 Semantics under the persisted router

- **Happy path** (the §6.1 example, unchanged): handler records the
  override; router intercepts, extends, POSTs; PRG renegotiates and
  patches; `$global.data.cart` re-derives ($global-read promotion); the
  extension resolves after the final frame; the override releases against
  already-correct truth. No JS → plain PRG. A user `ev.preventDefault()`
  opts out of interception, which reads correctly: the handler owns the
  transaction instead.
- **Release at stream end, deliberately.** A patch response embeds late
  async frames (a pending `<try>` on the target delivers its boundary body
  as a later frame), and the mutated value itself may live inside such a
  boundary — no earlier point is provably truth-complete. Cost: a slow
  unrelated `<await>` on the target route extends the hold; a "route
  values complete" protocol marker could shorten it later (§13.5).
- **Double submit** stays coherent: the router is abort-and-replace with no
  queue — a new navigation aborts a prior GET outright but never
  network-aborts a POST (the mutation may have reached the server and must
  apply exactly once), only supersedes its application
  (`run-pp/.../persisted-navigation.ts:62-65,81`). Submit B before A
  applies → txn A releases, txn B's override (composed from the view, so
  carrying A's intent) remains → B's response reflects the server having
  run both → release, truth. Caveats: cross-connection server-side ordering
  is unowned (the persisted roadmap already lists "concurrent submissions";
  a client-side mutation queue is compatible with this design — queued
  mutations are just later extensions, §13.7), and A's response is
  discarded (benign under PRG).
- **Continuity across applies** comes from stage 1, not from transactions:
  a live `<try>` boundary whose input patches to a new promise keeps its
  content through the apply because frame applies flush through the
  ordinary scheduler (`marko-pp/.../dom/update.ts:145`).
- **The server-sent seam.** A fragment frame can carry a `@placeholder`
  whose body arrives as a later boundary-body frame; applying it replaces
  live settled content with a placeholder — the server-side twin of the
  regression stage 1 removes client-side. The wire format already separates
  fragment and body frames, so deferring the swap until the body arrives is
  plausible, but it interacts with possession and `diverge()` fallback
  rules — it needs the persisted owners, with stage 1 supplying the
  vocabulary (§13.4).

### 8.3 Navigation lifecycle events

Today the shell dispatches only a success `marko-run:navigate` event after
frames apply (`run-pp/.../persisted-navigation.ts:144`). Whatever handshake
§8.1 picks, run should grow start/settle lifecycle events as the public,
transaction-free observation point — they serve analytics, gesture pending
(§7.1), and the eventual submissions view (§10.4).

## 9. Async machinery audit

The remaining subsystem interactions, kept from earlier revisions'
analysis (attribution-dependent items live in §10.1):

1. **The queue.** Optimistic assignment is an external state write: set the
   slot synchronously, `schedule()` + `queueRender` — exactly `_let`'s
   shape (`dom/signals.ts:43-49`); release is the same path from the
   release microtask. No-flicker is pure sequencing: in
   `cart = guess; truth = (await f()).x`, the truth write queues before the
   handler promise resolves, release runs after, both land in one flush.
   Transactions never call `run()` and add nothing to queue ordering. An
   optimistic write targeting state under an already-pending `<try>` parks
   like any render, and a later release updates the parked entry's value in
   place (`dom/queue.ts:41-48`) — no duplicate, unparks straight to the
   effective value.
2. **`$signal` self-abort.** Existing behavior transactions make common: a
   handler that *reads* the binding it assigns (`cart = [...cart, item]`)
   has that binding in its attribute root's dependencies, so the assignment
   queues the root's `$signalReset`
   (`translator/visitors/referenced-identifier.ts:114-127`) and a `$signal`
   captured in that handler aborts one flush later — including one passed
   to a fetch started in the same invocation. `$signal` in an optimistic
   handler means "my closure went stale", never "my intent was superseded";
   guidance is a plain `AbortController`, and `$transaction.signal`
   (§10.3) is the eventual correct tool.
3. **`<await>` of the transaction's own promise.** `<await=submitPromise>`
   alongside `$waitUntil(submitPromise)` composes with no API and no
   deadlock: boundary resolution depends on the userland promise, never on
   the transaction. With stage 1 continuity on that boundary, the round
   trip also keeps prior content. Promises are the shared currency between
   the systems.
4. **Rejections.** Adoption and `$waitUntil` are `.finally`-shaped;
   unhandled-rejection reporting survives; `@catch` swaps are unaffected by
   continuity (§4.3).
5. **SSR, streaming, resume.** Transactions are client gestures.
   `$waitUntil` throws on HTML output like `$signal`; `<optimistic>`
   degenerates to `<const>`; overrides cannot exist before resume because
   handlers don't run before resume — pre-resume interactions are native,
   which is progressive enhancement working. Nothing serializes; resume
   cost is zero. The `<try>` variable's SSR asymmetry is §4.2's.

## 10. Deferred refinements

Each is additive over stages 1–4; none changes shipped semantics.

1. **Automatic async hold (attribution).** Rev 2's design, retained for
   when composition (§7) proves insufficient: transactions gain a second
   *settle* edge (release + attributed boundaries resolved) and boundary
   pends occurring in renders caused by the transaction join its async set.
   Key findings to carry forward: overrides must still release at the
   *promise* edge (holding them would starve the truth renders being
   waited on); the settle check must ride the end of a flush so a
   transaction cannot settle between causing async work and observing it;
   `@catch` counts as resolution; chained pends inherit through resolution
   renders; granularity options are per-render provenance (precise,
   hot-path), per-flush (cheap, over-holds on shared batches — the
   recommended start), and global-while-unsettled. Over-holding is benign,
   under-holding breaks the contract.
2. **Rebase/updater assignments** (§6.4): wait for real-world cases.
3. **`$transaction` exposure** (a signal that aborts on supersession, and
   programmatic `startTransaction` for non-event contexts like sockets):
   withheld to keep one ambient concept; the internal object exists from
   day one, so exposure is additive. §9.2 is the strongest argument for
   eventually shipping it.
4. **Submissions view (model C, §11).** A reactive list of in-flight
   router-carried mutations — the transaction registry filtered to
   host-extended transactions — enabling Remix-style derived optimism in
   @marko/run without new language surface.
5. **Gesture pending** (§7.1): element-scoped readonly variable vs run
   lifecycle events, after stage 4.
6. **Writable boundary pending** (§4.4): only as a new named input with
   real semantics (hold/park), likely alongside view-transition work —
   never as a change handler on the readonly variable.
7. **Mutation queueing in the persisted router** (§8.2).
8. **`<mut>`/`let-*` store tag** (§7.3): parallel design document.
9. **View transitions:** deferred by the persisted roadmap; the transaction
   release point and the stage-1 content swap are the natural
   `startViewTransition` boundaries — keep both paths shaped so a future
   integration wraps them.

## 11. Design space (why this shape)

Compressed from earlier revisions; the models considered and where they
landed:

- **A. Overlay tag + implicit event transactions** — adopted as stages 2+3.
  Only model that keeps the persisted one-liner *and* the manual-fetch path
  on identical semantics; Marko already trades in compile-time ambients
  (`$global`, `$signal`, `:=`). Its precision burden is §5.2.
- **B. Explicit transaction handles** (`<transaction/tx>` + `tx.run/set`) —
  adopted as the *internal* shape; rejected as surface (three concepts
  before the first optimistic pixel; routers can't join a handle they can't
  see).
- **C. Derive from in-flight submissions** (Remix) — deferred to run
  (§10.4). Best for derived views of queued work; requires client-side
  reducers duplicating server mutation semantics; can't cover
  handler-managed fetch.
- **D. Store-level overlay** — deferred with the store design (§10.8).
- **E. Local echo** (override until source next changes; no transactions) —
  rejected: fails bounded lifetime. A failed mutation or a same-value
  confirmation (absent-key-means-unchanged patches make this common) never
  releases the guess.
- **Boundary continuity as a transaction feature** (rev 2) — refactored:
  continuity is structural (`<try>`, stage 1), composition replaces
  attribution (§7).
- **`pending:=` controllable-style reporting** (rev 3) — rejected by A4:
  the controllable convention implies the caller can own the value.
  Boundary pending became a readonly tag variable (§4); `<optimistic>`
  pending became derivation (§6.3); gesture pending moved to the gesture
  (§7.1).

## 12. Honest weaknesses

1. **Two names for one value** where truth is a local binding (inherent to
   overlay models; disappears when truth is a `$global` expression, §6.1;
   lintable, not designable-away).
2. **Instance-local overrides** — the header-badge problem; §7.3 is the
   interim story, the store design the answer.
3. **The transaction window is invisible** until a debug error teaches it
   (§5.2); extracted helpers hit it.
4. **Compositional pending is manual** (§7): forgetting a term re-enables a
   control while its region resolves; §10.1 is the mitigation, on evidence.
5. **No built-in gesture pending until stage 5** (§7.1): persisted apps
   can't express "this form is busy" before run lifecycle events land;
   manual-fetch apps carry a handler-managed flag.
6. **Snapshot overrides don't rebase** (§6.4).
7. **A hung promise holds its transaction forever.** Contract honored
   literally — only the app knows a timeout policy. Debug warns after ~10s
   naming the binding and what is being waited on; production does nothing;
   `AbortSignal.timeout` bounds userland fetches, and the persisted
   router's fetches settle on every path.
8. **`<try>` gains a tag variable** — small but real surface expansion on a
   tag whose emptiness was enforced, and its SSR value is asymmetric
   (§4.2).

## 13. Open questions

1. **Continuity default** (§4.3): behavior (a) — keep-on-re-pend becomes
   how boundaries work, with branch keying as the reset escape hatch — or
   opt-in attribute (b)? (a) is better if compatibility review allows;
   placeholder regression on re-pend is hard to defend as intent, and the
   decision gets harder every release.
2. **Gesture pending shape** (§7.1): element-scoped companion tag vs run
   lifecycle events vs both — after stage 4.
3. **Router handshake shape** (§8.1): runtime-global hook vs synchronous
   CustomEvent (which doubles as public lifecycle, §8.3).
4. **Server-sent pending boundaries** (§8.2): defer placeholder-bearing
   fragment swaps until their body frame when the live boundary has
   content? Needs the persisted owners; interacts with possession and
   fallback.
5. **Earlier persisted release** (§8.2): a wire-format marker separating
   "route values complete" from "async frames continue".
6. **Writable boundary pending** (§4.4): is there a motivating case for
   hold/park semantics that §10.1 doesn't serve better?
7. **Mutation queueing** (§8.2): with the persisted roadmap's "concurrent
   submissions" review.
8. **Error routing** — should a rejected transaction surface to an
   enclosing `<try @catch>`? Powerful, but it makes event-time errors
   render-time errors; v1 is the handler's own `try`/`catch`.
9. **Richer boundary exposure later** — if `<try>` ever needs to expose
   more than a boolean (error object, resolution count), does the variable
   become an object, and is that compatible with shipping a boolean now?
   Leaning: ship the boolean; a future object is a breaking change, so
   decide the shape before stage 1 stabilizes.

## 14. Implementation and verification sketch

Stage 1 (`<try>`): `core/try.ts` drops `assertNoVar` and registers the
readonly variable (assignment rejected through the same path as native
element variables, `util/references.ts:300-312`); the variable's signal
flips at the `AwaitCounter` 0↔n transitions
(`dom/control-flow.ts:100,275`); continuity per §4.3's decision at the
re-pend sites (placeholder re-show `:95-101`, rAF detach `:134-158`).
Fixtures: variable edges for await swap, lazy child, nested boundaries,
catch; readonly assignment is a compile error; re-pend keeps content with
and without placeholder; first pend still shows placeholder; parked
staleness; `<return>` of the variable; SSR false + resume liveness.

Stages 2+3: `transaction.ts` (ambient, promise set, release edge, dispatch
seam install, thenable adoption, host extension entry);
`_optimistic`/`_optimistic_set` beside `_let`/`_let_change` in
`dom/signals.ts` (source slot + override list, effective value precomputed
into the read slot); `core/optimistic.ts` routing assignments through the
existing `assignmentTo` machinery (`util/references.ts:546`); `$waitUntil`
beside `$signal` with the server-render throw and handler-prologue capture.
Fixtures: basic derive/revert; async handler success+failure; `$waitUntil`
incl. post-await; outside-window error; sync-discard warn; concurrent
transactions incl. out-of-order releases; view-vs-source derivation incl.
release-restores-reference-identity; write under pending `<try>`; `<for>`
row patterns; fan-out store composition.

Stage 4: a few eager-shell lines in `navigateMatched` (extend at
interception, settle around the navigation promise) + the handshake +
lifecycle events; persisted fixtures for PRG, direct-POST validation patch,
supersession, fallback, and boundary continuity across an apply.

Budgets (`.sizes.json`-enforced, all zero when unused): stage 1 ≤0.3 kB;
stages 2+3 ≤1.0 kB combined; stage 4 shell delta ≤0.1 kB.
