# Optimistic updates: design exploration

Status: exploration, pre-RFC. Sixth revision. The fifth revision observed a
guess with `$pending(view)`, a translator-resolved query; this revision
removes it — transactions are instead **observed by the nearest enclosing
`<try>`**, through the same readonly `pending` variable stage 1 already
adds. One primitive fewer, gesture pending solved in core, and the ambient
surface stops at `$waitUntil`. Earlier revisions live in this file's git
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
  **exposes** a value it owns through its *tag variable*; a tag **accepts**
  values through *attributes*; an attribute paired with a *change handler*
  means the caller can own that value (the controllable convention). An
  attribute/change-handler pair on a value the caller can never own is a
  lie in the syntax — `<try pending:=searching>` reads as permission to
  *tell* the boundary to go pending.
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
3. From A5: pendingness is structural. A `<try>` boundary already knows
   when content it governs is unresolved; what it lacks is a way to
   **expose** that (per A4: a readonly tag variable) and the discipline to
   **keep existing content** while re-resolving instead of regressing to
   `@placeholder`.
4. Taking A5 seriously a second time: an in-flight *transaction* is
   unsettledness too — of the same kind a boundary exists to represent. So
   a transaction originating inside a `<try>` counts toward that
   boundary's `pending`, and there is **no separate pending API at all**:
   not a framework flag, not a reported copy, not a query. Rev 4's
   identity derivation failed on values (primitives, re-evaluated
   sources); rev 5's `$pending(view)` fixed correctness but at the price
   of a pseudo-function ambient with compile-time argument restrictions —
   a call that looks like JavaScript and isn't. The boundary variable is
   the shape that was there all along: pending is a property of a *region
   of the page*, observed where the gesture lives.
5. From A7: each piece installs on use and is independently tree-shakable.

## 3. The primitives and what lands first

Three orthogonal primitives, in dependency order. Each is useful without the
ones after it; none is useful without the ones before it. This ordering is
also the shipping recommendation.

| Stage | Feature | Home | Depends on | Standalone value |
| --- | --- | --- | --- | --- |
| 1 | `<try/pending>`: boundary pending as a readonly tag variable + content continuity on re-pend (§4) | marko core | nothing | every client promise swap today (search-as-you-type, tab data, polling); the vocabulary persisted boundary streaming needs |
| 2 | Event transactions + `$waitUntil` (§5) | marko core | nothing (infra) | none alone — ships with stage 3 |
| 3 | `<optimistic/view=source>` + transactions counting into enclosing `<try>` (§6) | marko core | 1, 2 | full optimistic story *and* gesture pending for non-persisted apps via manual `fetch` handlers |
| 4 | Router transaction extension + navigation lifecycle (§8) | @marko/run | 2 | the persisted one-liner; optimism and busy-state for intercepted links and forms — including handler-less forms |
| 5 | Refinements on evidence (§10): auto-hold/attribution, rebase, `$transaction`, submissions view, mutation queueing | varies | 1–4 | — |

Notes on the ordering:

- **Stage 1 first is the point.** Smallest, least controversial, most
  broadly useful; no mutation, transaction, or router concepts; its runtime
  already half-exists (§4.3); nothing in it blocks on persisted pages'
  release gates.
- **Stage 3 upgrades stage 1 in place.** When transactions land, existing
  `<try/pending>` variables start observing them with no template change —
  the variable's meaning ("unsettledness within this boundary") is stable;
  what counts as unsettledness grows.
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

- `pending` is `true` while anything within the boundary is unsettled. At
  stage 1 that means the boundary's outstanding async count — the existing
  `AwaitCounter`, so `<await>` promises and lazy-loaded children
  (`dom/load.ts:41`) are one currency. At stage 3 it also counts in-flight
  transactions that originated within the boundary (§6.3) — internally a
  *separate* counter, because the await counter drives placeholder display
  and render/effect parking (`dom/queue.ts:203`) and transactions must
  never freeze the region they are optimistically updating; the variable
  reads `awaits > 0 || transactions > 0`.
- Nested `<try>`s each own their own variable. Transitions flush through
  the normal scheduler like any tag-variable change, so downstream renders
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
  `AwaitCounter`s from `render.p` (`dom/resume.ts:218`). The transaction
  counter contributes nothing here: transactions cannot exist before
  resume, so it is client-only by construction.
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
  signal without scanning. The transaction-counting wiring likewise ships
  with the transaction runtime (stage 3), not stage 1.
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
variable. (§6.3's transaction counting is not this: it is the boundary
observing real unsettledness, not the caller asserting fake unsettledness.)
Tracked in §13.6.

## 5. Stage 2: event transactions

A transaction is the first-class lifetime of one user act. It exists so
overlays (§6) have a revocation scope, boundaries (§4) have unsettledness
to observe, and hosts (§8) have something to extend; it does no rendering
of its own.

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
attributing render work to transactions; boundary observation (§6.3) plus
structure covers the motivating cases, and attribution remains available as
a refinement (§10.1) without changing this contract.

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
(`translator/visitors/referenced-identifier.ts:100`). Its argument is an
ordinary runtime expression — unlike rev 5's `$pending`, nothing about it
is resolved statically. Not valid in `<script>`/render expressions:
transactions are user intents, not render lifetimes — `$signal` owns
cleanup there, and tying intent extension to render invalidation would be a
category error in both directions (§9.2).

## 6. Stage 3: `<optimistic>`, observed by `<try>`

### 6.1 Surface

```marko
<optimistic/cart=$global.data.cart/>

<div>Items in cart: ${cart.length}</div>

<try/saving>
  <form method="POST" action="/cart" onSubmit() { cart = [] }>
    <button disabled=saving name="_action" value="clear">Clear Cart</button>
  </form>
</try>
```

`<optimistic>` requires a tag variable (identifier, not destructured — it
must be assignable) and accepts **only `value=`** — nothing else, matching
`<let>`'s attribute discipline (`translator/core/let.ts:60`). Where truth
is a `$global` expression rather than a local binding, the view takes the
natural name — no `cart`/`optimisticCart` split.

There is no pending surface on the tag. The act's pending state is
observed by the boundary that contains the gesture (§6.3).

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

### 6.3 Boundary observation

When a transaction materializes, the runtime walks the branch chain of the
scope owning the event's **target element** — the same walk the pending-try
machinery already performs (`dom/queue.ts:202-207`) — to the nearest
enclosing `<try>` branch, and increments that boundary's transaction
counter; release decrements it. The boundary's `pending` variable reads
`awaits > 0 || transactions > 0` (§4.2). Consequences:

- **Gesture pending is structural.** "Is this form busy" is `<try/saving>`
  around the form — no query, no flag wiring, no handler bookkeeping. It
  works for guesses, for `$waitUntil`-extended work, and (stage 4) for
  **handler-less forms** the router intercepts: the extension materializes
  the transaction, so the demo's promo form gets a disabled button with
  zero JavaScript in the template (§8.2).
- **Scope-tree, not DOM-tree.** The observing boundary is found through
  Marko's branch ancestry of the target element's scope — consistent with
  how everything else in Marko scopes (projected content is observed where
  it renders), and identical between handler-joined and router-extended
  transactions because both key off the event.
- **Never freezes the region.** The transaction counter is deliberately not
  the `AwaitCounter`: placeholder display and render/effect parking key
  off awaits alone (`dom/queue.ts:203`), so the optimistic view inside the
  boundary updates instantly while `pending` is true, and `@placeholder`
  never appears for a transaction (there is always content — the guess).
- **Equal-value guesses are covered.** The counter is transaction
  bookkeeping, not value comparison — the failure modes that killed
  rev 4's identity derivation (primitives, re-evaluated sources) and the
  static-resolution limits that made rev 5's `$pending` a pseudo-function
  don't exist here. The variable also composes across templates the normal
  way (`<return>`), which `$pending` could not.
- **Structure is the composition.** A boundary containing both the form
  and the results `<await>` reports one `pending` for the whole act —
  gesture round-trip and the render work it causes — which is rev 2's
  "hold until fully rendered" achieved by *where the tags sit* instead of
  by attribution machinery. Boundaries that must stay independent stay
  separate and compose manually (`a || b`).
- **Nearest boundary only** (v1): unsettledness reports to the closest
  `<try>`, matching where awaits attach. Whether outer boundaries should
  also observe (transactions aren't "handled" by inner boundaries the way
  placeholders handle awaits) is an open question (§13.7).

What this deliberately does not cover: observing a *specific value's*
guess from far away (a header badge dimming while some other component's
transaction writes the cart). That was already unreachable across template
boundaries under `$pending`, and the store design (§10.7) is where a
shared view would expose shared pending. Near the gesture — where
disable/dim UI actually lives — the boundary sees everything.

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
  unconfirmed), then truth when T1 releases. An observing boundary stays
  pending until both release (two increments, two decrements).
- **Rebase is deferred.** When truth changes mid-flight from an independent
  source, a snapshot override hides it until release. React re-applies
  updater functions over new truth; the storage shape admits that later
  (function-valued assignment = updater, re-fold on source change), but v1
  ships snapshots: the demo cases don't need rebase, function-valued state
  would need a carve-out, and compose-from-the-view covers the common
  overlap (§10.2).

## 7. Pending in practice

One concept: boundaries observe unsettledness — async renders and
transactions alike — and expose it as a readonly variable. Everything else
is placement and derivation:

```marko
<try/busy>
  <form method="POST" action="/search" onSubmit() { sort = "price" }>...</form>
  <await|results|=search($global.search)>...</await>
  <@placeholder>Searching…</@placeholder>
</try>
// `busy` spans the gesture round trip AND the results re-resolving,
// because both live in the boundary.
```

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

### 7.1 Handler-less busy state

The demo's promo form — a mutation with nothing to guess — needed a whole
deferred "gesture pending" mechanism in earlier revisions. Under boundary
observation it is just structure, and requires no template JavaScript at
all once the router extends transactions (stage 4):

```marko
<try/applying>
  <form method="POST" action="/cart">
    <input type="text" name="code" placeholder="Promo code">
    <button disabled=applying name="_action" value="promo">Apply</button>
  </form>
</try>
```

Before stage 4 (manual fetch), the handler's returned promise is the
transaction and the same markup works. Without JavaScript at all, the form
posts natively and `applying` never flips — progressive enhancement intact.

### 7.2 Validation errors for free

The promo form POSTs and the server re-renders the same page with
`promo.error`; the persisted router applies that direct POST response as an
in-place patch. An optimistic guess that fails validation needs no new API:
the transaction releases when the error patch applies, overrides revert,
`applying` flips false, and the error content is already on screen.
Rollback-plus-explain composes from existing pieces.

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

Boundary observation composes with this unchanged (the observing `<try>`
is wherever the gesture is), and a store that wants to expose *shared*
pending decides its own surface — one more input to the `<mut>`/`let-*`
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
  already-correct truth and `saving` flips false. The promo form (§7.1)
  is the same flow minus the handler — the extension alone materializes
  the transaction that `applying` observes. No JS → plain PRG. A user
  `ev.preventDefault()` opts out of interception, which reads correctly:
  the handler owns the transaction instead.
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
  mutations are just later extensions, §13.8), and A's response is
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
transaction-free observation point — they serve analytics, app-level
routing UI (progress bars) beyond any one boundary, and the eventual
submissions view (§10.4).

## 9. Async machinery audit

The remaining subsystem interactions, kept from earlier revisions'
analysis (attribution-dependent items live in §10.1):

1. **The queue.** Optimistic assignment is an external state write: set the
   slot synchronously, `schedule()` + `queueRender` — exactly `_let`'s
   shape (`dom/signals.ts:43-49`); release is the same path from the
   release microtask. No-flicker is pure sequencing: in
   `cart = guess; truth = (await f()).x`, the truth write queues before the
   handler promise resolves, release runs after, both land in one flush.
   Transactions never call `run()` and add nothing to queue ordering; the
   boundary transaction counter (§6.3) feeds only the `pending` variable,
   never parking. An optimistic write targeting state under an
   already-await-pending `<try>` parks like any render, and a later
   release updates the parked entry's value in place (`dom/queue.ts:41-48`)
   — no duplicate, unparks straight to the effective value.
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
   the transaction. If both live in one boundary, the variable reflects
   both counters and still settles exactly once both settle. Promises are
   the shared currency between the systems.
4. **Rejections.** Adoption and `$waitUntil` are `.finally`-shaped;
   unhandled-rejection reporting survives; `@catch` swaps are unaffected by
   continuity (§4.3) and transaction rejection does not render the catch
   branch (§13.9 tracks whether it ever should).
5. **SSR, streaming, resume.** Transactions are client gestures.
   `$waitUntil` throws on HTML output like `$signal`; `<optimistic>`
   degenerates to `<const>`; the boundary variable is constant `false`
   server-side (§4.2) and its transaction counter cannot predate resume;
   pre-resume interactions are native, which is progressive enhancement
   working. Nothing about transactions serializes; resume cost is zero.

## 10. Deferred refinements

Each is additive over stages 1–4; none changes shipped semantics.

1. **Automatic async hold (attribution).** Rev 2's design, retained for
   cases structure cannot express (the act's consequences render *outside*
   any shared boundary): transactions gain a second *settle* edge (release
   + attributed boundaries resolved) and boundary pends occurring in
   renders caused by the transaction join its async set. Key findings to
   carry forward: overrides must still release at the *promise* edge
   (holding them would starve the truth renders being waited on); the
   settle check must ride the end of a flush so a transaction cannot
   settle between causing async work and observing it; `@catch` counts as
   resolution; chained pends inherit through resolution renders;
   granularity options are per-render provenance (precise, hot-path),
   per-flush (cheap, over-holds on shared batches — the recommended
   start), and global-while-unsettled. Over-holding is benign,
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
5. **Writable boundary pending** (§4.5): only as a new named input with
   real semantics (hold/park), likely alongside view-transition work —
   never as a change handler on the readonly variable.
6. **Mutation queueing in the persisted router** (§8.2).
7. **`<mut>`/`let-*` store tag** (§7.3): parallel design document; must
   decide its own pending exposure for shared views.
8. **View transitions:** deferred by the persisted roadmap; the transaction
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
- **D. Store-level overlay** — deferred with the store design (§10.7).
- **E. Local echo** (override until source next changes; no transactions) —
  rejected: fails bounded lifetime. A failed mutation or a same-value
  confirmation (absent-key-means-unchanged patches make this common) never
  releases the guess.
- **Boundary continuity as a transaction feature** (rev 2) — refactored:
  continuity is structural (`<try>`, stage 1); structure replaces
  attribution (§6.3).
- **`pending:=` controllable-style reporting** (rev 3) — rejected by A4:
  the controllable convention implies the caller can own the value.
- **Identity-derived guess visibility** (rev 4) — rejected: unreliable for
  primitives and computed sources.
- **`$pending(view)` ambient query** (rev 5) — rejected: correct, but a
  pseudo-function (a call form whose argument must statically resolve — it
  looks like JavaScript and compile-errors on runtime values), opaque
  across template boundaries, and a third ambient identifier — all to
  answer a question the nearest `<try>` can observe structurally. Boundary
  observation (§6.3) replaces it and solves gesture pending in the same
  stroke.

## 12. Honest weaknesses

1. **Two names for one value** where truth is a local binding (inherent to
   overlay models; disappears when truth is a `$global` expression, §6.1;
   lintable, not designable-away).
2. **Instance-local overrides** — the header-badge problem; §7.3 is the
   interim story, the store design the answer.
3. **The transaction window is invisible** until a debug error teaches it
   (§5.2); extracted helpers hit it.
4. **Pending observation requires a boundary.** Where no `<try>` encloses
   the gesture, its transaction is unobservable until one is added — a
   wrapper tag (and a branch scope) purely for observation. Structural, but
   real markup for what `$pending` answered inline; the bet is that busy
   UI is regional in practice and the region usually exists.
5. **No remote per-value pending.** A distant component cannot observe that
   *some* transaction is writing a specific view (it was cross-template
   unreachable under `$pending` too); shared views push this to the store
   design (§10.7).
6. **`<try>` semantics widen** from "async render boundary" to
   "unsettledness boundary" — deliberate, but a real redefinition that must
   be taught, and the two internal counters (awaits park and gate
   placeholders; transactions only report) must never blur.
7. **Snapshot overrides don't rebase** (§6.4).
8. **A hung promise holds its transaction forever.** Contract honored
   literally — only the app knows a timeout policy. Debug warns after ~10s
   naming the binding and what is being waited on; production does nothing;
   `AbortSignal.timeout` bounds userland fetches, and the persisted
   router's fetches settle on every path.
9. **`<try>` gains a tag variable** — small but real surface expansion on a
   tag whose emptiness was enforced, and its SSR value is asymmetric
   (§4.2).

## 13. Open questions

1. **Continuity default** (§4.3): behavior (a) — keep-on-re-pend becomes
   how boundaries work, with branch keying as the reset escape hatch — or
   opt-in attribute (b)? (a) is better if compatibility review allows;
   placeholder regression on re-pend is hard to defend as intent, and the
   decision gets harder every release.
2. **Should transaction observation be excludable?** A boundary that wants
   to observe only async renders (or only transactions) has no way to say
   so; v1 bets one meaning ("unsettledness within") is more teachable than
   knobs. Revisit with usage.
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
7. **Nearest vs all enclosing boundaries** (§6.3): awaits attach nearest;
   transactions aren't "handled" by a boundary the way placeholders handle
   awaits, so outer boundaries observing too is defensible. v1 says
   nearest for one rule; confirm against real layouts (a page-level
   progress boundary wanting to see everything argues for run's lifecycle
   events instead, §8.3).
8. **Mutation queueing** (§8.2): with the persisted roadmap's "concurrent
   submissions" review.
9. **Error routing** — should a rejected transaction render the observing
   boundary's `@catch`? More natural now that boundaries observe
   transactions, but it makes event-time errors render-time errors and
   changes `@catch`'s contract; v1 is the handler's own `try`/`catch`.
10. **Richer boundary exposure later** — if `<try>` ever needs to expose
    more than a boolean (error object, counts, phases), does the variable
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
The `_try_pending` install helper wires the seams per §4.4. Fixtures:
variable edges for await swap, lazy child, nested boundaries, catch;
readonly assignment is a compile error; re-pend keeps content with and
without placeholder; first pend still shows placeholder; parked staleness;
`<return>` of the variable; SSR false + resume liveness; resume of a
still-pending boundary corrects downstream DOM in the first flush;
declared-but-unread variable emits nothing; a try-without-variable bundle
does not retain `_try_pending` (sizes assertion).

Stages 2+3: `transaction.ts` (ambient, promise set, release edge, dispatch
seam install, thenable adoption, host extension entry, and the boundary
walk: on materialize, resolve the event target's scope to its nearest
`<try>` branch — the `dom/queue.ts:202-207` walk — increment its
transaction counter and queue the registered variable's signal; decrement
on release); `_optimistic`/`_optimistic_set` beside `_let`/`_let_change` in
`dom/signals.ts` (source slot + override list, effective value precomputed
into the read slot); `core/optimistic.ts` routing assignments through the
existing `assignmentTo` machinery (`util/references.ts:546`); `$waitUntil`
beside `$signal` in `visitors/referenced-identifier.ts` with the
server-render throw and handler-prologue capture. Fixtures: basic
derive/revert; async handler success+failure; `$waitUntil` incl.
post-await; outside-window error; sync-discard warn; concurrent
transactions incl. out-of-order releases; boundary observation: handler
form, equal-value guess, `$waitUntil`-only transaction, no-enclosing-try
(unobserved, no error), nested tries (nearest), transaction + await in one
boundary (single variable spans both, region never parks on the
transaction counter); write under await-pending `<try>`; `<for>` row
patterns; fan-out store composition.

Stage 4: a few eager-shell lines in `navigateMatched` (extend at
interception, settle around the navigation promise) + the handshake +
lifecycle events; persisted fixtures for PRG, direct-POST validation patch,
supersession, fallback, boundary continuity across an apply, and the
handler-less promo form's `applying` flag through a full PRG round trip.

Budgets (`.sizes.json`-enforced, all zero when unused): stage 1 ≤0.3 kB;
stages 2+3 ≤1.0 kB combined (including the boundary walk); stage 4 shell
delta ≤0.1 kB.
