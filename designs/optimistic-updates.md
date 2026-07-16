# Optimistic updates: design exploration

Status: exploration, pre-RFC. Fifth revision. The fourth revision exposed
boundary pending as a readonly `<try>` tag variable and claimed guess
visibility could be *derived* by identity (`view !== source`); the
derivation does not survive scrutiny (primitives, re-evaluated source
expressions — §6.3), so this revision replaces it with a compile-time
resolved query, `$pending(view)`. Earlier revisions live in this file's git
history.

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
  permission to *tell* the boundary to go pending. Runtime facts that
  belong to no single tag position are exposed as *translator-resolved
  ambients* (`$global`, `$signal`).
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
   state (per A4: as a readonly tag variable, the boundary's own value),
   and **keep existing content** while re-resolving instead of regressing
   to `@placeholder` (the placeholder represents "nothing yet"; once
   content exists the boundary can represent pending better). These are
   independent: one observes, the other is behavior.
4. From A3+A4: there are no framework-owned pending flags and no pending
   *data*. Boundary pending is the boundary's tag variable. Whether a guess
   is in flight on an optimistic view is a **question the runtime answers**
   — `$pending(view)`, an ambient query in any expression — not a value
   comparison (identity is unreliable, §6.3) and not a reported copy in
   app state. The pending of a gesture belongs to the gesture, not to
   whichever value it happened to touch (§7.1). Combined states are plain
   expressions.
5. From A7: each piece installs on use and is independently tree-shakable.

The deltas this derivation forces on the previous revisions:

- **No `pending:=` anywhere** (rev 4's correction, kept): the controllable
  convention implies caller ownership; pending is never caller-owned.
- **No identity-derived pending** (this revision's correction):
  `view !== source` fails for primitives and for any computed source
  expression; `$pending(view)` replaces it as a read that is always exact.
- **Continuity decouples from observation** (kept): declaring a variable
  must not change behavior; keeping content on re-pend is its own decision
  — likely the default (§4.3).
- **Cross-system inference stays out** (kept): transaction pending and
  boundary pending compose by expression; automatic attribution remains a
  deferred refinement (§10.1).

## 3. The primitives and what lands first

Three orthogonal primitives, in dependency order. Each is useful without the
ones after it; none is useful without the ones before it. This ordering is
also the shipping recommendation.

| Stage | Feature | Home | Depends on | Standalone value |
| --- | --- | --- | --- | --- |
| 1 | `<try/pending>`: boundary pending as a readonly tag variable + content continuity on re-pend (§4) | marko core | nothing | every client promise swap today (search-as-you-type, tab data, polling); the vocabulary persisted boundary streaming needs |
| 2 | Event transactions + `$waitUntil` (§5) | marko core | nothing (infra) | none alone — ships with stage 3 |
| 3 | `<optimistic/view=source>` + `$pending(view)` (§6) | marko core | transactions | full optimistic story for non-persisted apps via manual `fetch` handlers |
| 4 | Router transaction extension + navigation lifecycle (§8) | @marko/run | 2 | the persisted one-liner; optimism for intercepted links and forms |
| 5 | Refinements on evidence (§10): `$pending` on elements / no-arg, auto-hold/attribution, rebase, `$transaction`, submissions view, mutation queueing | varies | 1–4 | — |

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

### 4.4 Fit with the resumability and bundle model

The tag variable must ride the existing compiler model — no new
serialization kind, no baseline runtime growth:

- **Unused variable → nothing.** `<try/pending>` whose variable is never
  read prunes like any unused binding (`finalizeReferences()` drops it),
  and the translator emits no registration — same contract as an unread
  `<let>`. Templates that never declare the variable are byte-identical to
  today.
- **Read variable → an ordinary stateful binding.** Downstream expressions
  become signals, the scope slot and DOM markers serialize through the
  existing serialize-reason propagation (client-observable root, exactly
  like `<let>`), and the downstream signals resume-register as usual.
  **The value itself never serializes**: at SSR it is constantly `false`
  (§4.2), and on resume the true value re-derives from await state the
  payload *already* carries — resume reconstructs pending boundaries'
  `AwaitCounter`s from `render.p` (`dom/resume.ts:218`) — so the feature
  adds zero payload bytes.
- **Resume while still pending.** When resume reconstructs a nonzero
  counter for a boundary with a registered variable, the install hook
  queues that variable's signal, so downstream DOM rendered against the
  server's constant `false` corrects in the first post-resume flush — the
  standard correction class for client-only signals, and the reason §4.2's
  asymmetry is safe rather than a lie: the flag is wrong only for DOM that
  is about to run its resumed effects anyway.
- **Flip code ships only on use.** The counter transitions live in hot
  always-shipped paths (`addAwaitCounter`, the completion closure,
  `_await_promise`), so the variable's wiring must not be written into
  them. A `_try_pending` runtime helper — imported only by templates that
  declare and read the variable — installs itself over reassignable seams
  at module load, the established pattern for exactly this problem
  (`_enable_catch` wrapping `runEffects`/`runRender`, `enableBranches`,
  `skipDestroyedRenders`; `dom/queue.ts:190,177`). Registration stores the
  variable's accessor on the try's branch so transitions can find their
  signal without scanning.
- **Persisted pages:** the variable is client-owned state, so update
  renders never patch it (the "client-owned values are never overwritten"
  invariant) — its truth always comes from the live page's own counters,
  including counters created by applied fragments and boundary bodies,
  which flow through the same seams.
- Accessor additions land in `accessor.ts`/`accessor.debug.ts` lockstep,
  per the debug-pair invariant.

The honest cost accounting: one reassignable-seam indirection at the
counter transition sites (near-zero, and only in builds that already use
`<try>`), plus the helper itself, inside the stage-1 ≤0.3 kB budget and
proven by fixture `sizes.json` — including a fixture asserting a
try-without-variable template does not retain `_try_pending`.

### 4.5 Could you *tell* a `<try>` to go pending?

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
compose boundary and guess state by expression (§7), and attribution
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

## 6. Stage 3: `<optimistic>` and `$pending`

### 6.1 Surface

```marko
<optimistic/cart=$global.data.cart/>

<div>Items in cart: ${cart.length}</div>

<form method="POST" action="/cart" onSubmit() { cart = [] }>
  <button disabled=$pending(cart) name="_action" value="clear">
    Clear Cart
  </button>
</form>
```

`<optimistic>` requires a tag variable (identifier, not destructured — it
must be assignable) and accepts **only `value=`**, matching `<let>`'s
attribute discipline (`translator/core/let.ts:60`). Where truth is a
`$global` expression rather than a local binding, the view takes the
natural name — no `cart`/`optimisticCart` split.

`$pending(view)` is a translator-resolved ambient (the `$global`/`$signal`
family), valid in any client expression, answering "does this instance hold
at least one unreleased override". It is a *read*: reactive like any
binding reference, composable inline (`disabled=$pending(cart) ||
searching`), no state to declare, nothing to wire.

### 6.2 `<optimistic>` semantics

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

### 6.3 `$pending` semantics — and why not derivation

Rev 4 proposed observing a guess by identity: `cart !== $global.data.cart`.
That does not survive scrutiny:

- **Primitives.** `sort = "price"` when truth is already `"price"`, a
  quantity set to its current value — value equality *is* identity, so the
  comparison reads `false` while a transaction is genuinely in flight.
- **Computed sources.** The comparison re-evaluates the source
  *expression*; only a plain property read yields a stable reference. With
  `<optimistic/entries=cart.map(...)>`, every evaluation is a fresh array
  and the comparison is permanently `true`.
- Even for plain object sources it encodes a subtle contract (the compared
  expression must be the stored reference) that cannot be linted reliably.

So guess visibility is a **query the runtime answers**, not a comparison
apps write:

- `$pending(view)` is `true` from the flush in which a transaction first
  records an override on the instance until the flush in which the last
  recording transaction releases — exact regardless of value types,
  equal-value guesses, or how `source` is computed.
- The argument must statically resolve to an `<optimistic>` tag variable
  declared in the same template; anything else is a compile error naming
  the rule. (This is the honest limit of a compile-time ambient: a view
  returned by a child tag — the store composition, §7.3 — is observed by
  whatever that tag chooses to expose, not by `$pending` through the
  wall.)
- Server render: constant `false`, consistent with §4.2's asymmetry —
  transactions cannot exist before resume.
- Compiles to a read of a companion signal on the instance's scope,
  maintained at override attach/release; subscribing expressions re-render
  through the normal queue. Zero cost when never used (the companion is
  emitted only when some expression queries it).

Alternatives considered this round and rejected: an output callback on the
tag (`onPendingChange` — event-style naming is the honest attribute-shaped
output, but it forces a `<let>` + handler where a read suffices, duplicating
state A3 says to derive); a companion tag exposing a readonly variable
(`<pending/saving=cart>` — honest, but a new data-shaped surface for what
is a question, and previously rejected in this exploration); documenting
identity comparison with caveats (the caveats *are* the bug reports).

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
  unconfirmed), then truth when T1 releases. `$pending` stays `true`
  throughout.
- **Rebase is deferred.** When truth changes mid-flight from an independent
  source, a snapshot override hides it until release. React re-applies
  updater functions over new truth; the storage shape admits that later
  (function-valued assignment = updater, re-fold on source change), but v1
  ships snapshots: the demo cases don't need rebase, function-valued state
  would need a carve-out, and compose-from-the-view covers the common
  overlap (§10.2).

## 7. Pending in practice

Boundary pending is a tag variable; guess pending is a query; combinations
are plain expressions:

```marko
<try/searching> ... </try>
<button disabled=$pending(cart) || searching>
```

This is the deliberate replacement for rev 2's automatic "hold the
transaction until caused async resolves": same user-visible outcomes, no
attribution machinery, and the composition is inspectable. The known costs,
honestly: it is manual (forgetting a term shows a control re-enabled while
its region resolves), and a boundary variable includes re-pends the act
didn't cause (a background poll swapping the same promise) — over-broad but
benign, and usually what a user perceives anyway. If evidence shows manual
composition is a recurring bug source, §10.1 layers the automatic hold back
in without changing shipped semantics.

Row-level treatment derives — by key, not by reference (member references
are not stable across patch deserialization):

```marko
<optimistic/optimisticEntries=entries/>
<for|entry| of=entries by=(e) => e.product.id>
  <const/removing=!optimisticEntries.some((e) => e.product.id === entry.product.id)>
  <tr class={ removing }> ... </tr>
</for>
```

(Iterate truth and style by optimistic membership — or iterate the
optimistic list for hard removal. Both compose with `by=` keying.)

### 7.1 Gesture pending

The remaining real gap: an act with no boundary and no guess — the demo's
promo form wants its button disabled during the round trip, has nothing to
assign, and under the persisted router the handler gets no completion
callback. This is pending of the *gesture*, and the natural growth path is
the same query aimed at the gesture's element:
`$pending(formEl)` — true while any unsettled transaction's originating
event target is inside that element (containment checked once at
transaction open, only when element queries exist) — and perhaps a no-arg
`$pending()` for "any transaction in flight". Both are stage 5: they need
the router landed to be meaningful in the happy path, and run's navigation
lifecycle events (§8.3) are the interim escape hatch. Until then,
manual-fetch apps own the flag in the handler (`saving = true; try { ... }
finally { saving = false }`). Tracked in §13.2.

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

`$pending` does not reach through a custom tag's return (§6.3), so a store
tag decides what it exposes — e.g. an `onPendingChange` callback or a
second returned value — which is one more input to the `<mut>`/`let-*`
store design. `<optimistic>` is the primitive such a tag would use, not a
competitor.

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
  already-correct truth and `$pending(cart)` flips false. No JS → plain
  PRG. A user `ev.preventDefault()` opts out of interception, which reads
  correctly: the handler owns the transaction instead.
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
   degenerates to `<const>`; `$pending` is constant `false` server-side;
   overrides cannot exist before resume because handlers don't run before
   resume — pre-resume interactions are native, which is progressive
   enhancement working. Nothing serializes; resume cost is zero. The
   `<try>` variable's SSR asymmetry is §4.2's.

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
   withheld to keep the ambient surface minimal; the internal object exists
   from day one, so exposure is additive. §9.2 is the strongest argument
   for eventually shipping it.
4. **Submissions view (model C, §11).** A reactive list of in-flight
   router-carried mutations — the transaction registry filtered to
   host-extended transactions — enabling Remix-style derived optimism in
   @marko/run without new language surface.
5. **`$pending` on element refs and no-arg** (§7.1): gesture and global
   pending as the same query at wider scopes, after stage 4; weigh against
   run lifecycle events feeding ordinary state.
6. **Writable boundary pending** (§4.5): only as a new named input with
   real semantics (hold/park), likely alongside view-transition work —
   never as a change handler on the readonly variable.
7. **Mutation queueing in the persisted router** (§8.2).
8. **`<mut>`/`let-*` store tag** (§7.3): parallel design document; must
   decide its own pending exposure since `$pending` stops at template
   boundaries.
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
- **Identity-derived guess visibility** (rev 4) — rejected: unreliable for
  primitives and computed sources (§6.3). Replaced by `$pending`, the
  query shape; boundary pending stays a tag variable because the boundary
  genuinely owns that value, while "is this view overridden" is a fact
  about runtime bookkeeping no tag position owns.

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
5. **No gesture pending until stage 5** (§7.1): persisted apps can't
   express "this form is busy" before run lifecycle events land;
   manual-fetch apps carry a handler-managed flag.
6. **`$pending` stops at template boundaries** (§6.3): views returned by
   custom tags need the tag to expose its own pending, which burdens the
   store design (§10.8).
7. **The ambient surface grows** — `$waitUntil` and `$pending` join
   `$global`/`$signal`. Each is individually small and compile-checked, but
   ambient identifiers are the least discoverable part of the language.
8. **Snapshot overrides don't rebase** (§6.4).
9. **A hung promise holds its transaction forever.** Contract honored
   literally — only the app knows a timeout policy. Debug warns after ~10s
   naming the binding and what is being waited on; production does nothing;
   `AbortSignal.timeout` bounds userland fetches, and the persisted
   router's fetches settle on every path.
10. **`<try>` gains a tag variable** — small but real surface expansion on
    a tag whose emptiness was enforced, and its SSR value is asymmetric
    (§4.2).

## 13. Open questions

1. **Continuity default** (§4.3): behavior (a) — keep-on-re-pend becomes
   how boundaries work, with branch keying as the reset escape hatch — or
   opt-in attribute (b)? (a) is better if compatibility review allows;
   placeholder regression on re-pend is hard to defend as intent, and the
   decision gets harder every release.
2. **Gesture pending shape** (§7.1): `$pending(elementRef)` / `$pending()`
   vs run lifecycle events feeding ordinary state — after stage 4.
3. **Router handshake shape** (§8.1): runtime-global hook vs synchronous
   CustomEvent (which doubles as public lifecycle, §8.3).
4. **Server-sent pending boundaries** (§8.2): defer placeholder-bearing
   fragment swaps until their body frame when the live boundary has
   content? Needs the persisted owners; interacts with possession and
   fallback.
5. **Earlier persisted release** (§8.2): a wire-format marker separating
   "route values complete" from "async frames continue".
6. **Writable boundary pending** (§4.5): is there a motivating case for
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
10. **`$pending` naming and arity** — one query with widening scopes
    (view now; element/no-arg later) vs distinct names per scope. One name
    is the bet made here; confirm before stage 3 stabilizes.

## 14. Implementation and verification sketch

Stage 1 (`<try>`): `core/try.ts` drops `assertNoVar` and registers the
readonly variable (assignment rejected through the same path as native
element variables, `util/references.ts:300-312`); the variable's signal
flips at the `AwaitCounter` 0↔n transitions
(`dom/control-flow.ts:100,275`); continuity per §4.3's decision at the
re-pend sites (placeholder re-show `:95-101`, rAF detach `:134-158`).
The `_try_pending` install helper wires the seams per §4.4. Fixtures:
variable edges for await swap, lazy child, nested boundaries, catch;
readonly assignment is a compile error; re-pend keeps content with and
without placeholder; first pend still shows placeholder; parked staleness;
`<return>` of the variable; SSR false + resume liveness; resume of a
still-pending boundary corrects downstream DOM in the first flush;
declared-but-unread variable emits nothing; a try-without-variable bundle
does not retain `_try_pending` (sizes assertion).

Stages 2+3: `transaction.ts` (ambient, promise set, release edge, dispatch
seam install, thenable adoption, host extension entry);
`_optimistic`/`_optimistic_set` beside `_let`/`_let_change` in
`dom/signals.ts` (source slot + override list + companion pending signal,
effective value precomputed into the read slot); `core/optimistic.ts`
routing assignments through the existing `assignmentTo` machinery
(`util/references.ts:546`); `$waitUntil` and `$pending` beside `$signal` in
`visitors/referenced-identifier.ts` — `$waitUntil` with the server-render
throw and handler-prologue capture, `$pending` resolving its argument to a
same-template optimistic binding (compile error otherwise) and compiling to
the companion-signal read (constant `false` on HTML output). Fixtures:
basic derive/revert; async handler success+failure; `$waitUntil` incl.
post-await; outside-window error; sync-discard warn; concurrent
transactions incl. out-of-order releases; `$pending` edges incl.
equal-value guesses, primitives, computed sources, and release timing;
`$pending` compile errors (non-optimistic argument, cross-template);
write under pending `<try>`; `<for>` row patterns; fan-out store
composition.

Stage 4: a few eager-shell lines in `navigateMatched` (extend at
interception, settle around the navigation promise) + the handshake +
lifecycle events; persisted fixtures for PRG, direct-POST validation patch,
supersession, fallback, and boundary continuity across an apply.

Budgets (`.sizes.json`-enforced, all zero when unused): stage 1 ≤0.3 kB;
stages 2+3 ≤1.0 kB combined; stage 4 shell delta ≤0.1 kB.
