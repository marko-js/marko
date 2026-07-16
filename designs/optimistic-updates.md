# Optimistic updates: design exploration

Status: exploration, pre-RFC. Ninth revision: the overlay tag is named —
**`<draft>`** (decision recorded in §7.4; `optimistic` remains the feature
name in docs and search). The eighth revision reified the act as
**`<action>`** after `$pending(saving)` exposed the root cause running
through every earlier rejected shape: they all tried to expose the act's
state without making the act a value. Earlier revisions live in git
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
  means the caller can own that value (the controllable convention). A
  syntax position must not imply an ability that does not exist.
- **A5.** Async is structural. "Not here yet" is expressed by where
  `<await>`/`<try>` sit in the tree, not by status flags threaded through
  render code.
- **A6.** Everything degrades to native behavior without JavaScript.
- **A7.** Features cost nothing when unused.

Derivation:

1. From A1+A2: a mutation is a request whose confirmed effect arrives as new
   server-derived input on its own channel. Any *provisional* display of the
   expected outcome must be an **overlay that can never write truth** —
   reverting is the only exit. That overlay is a **draft** of the server
   state: visible, submitted, not yet accepted.
2. The draft needs a lifetime. From A1+A6, the natural unit is the **user
   act**: from the triggering event until the page has presented the act's
   outcome. No existing object has this extent, so it must be a first-class
   runtime concept that promises and routers can extend: a **transaction**.
3. From A5: *render* pendingness is structural. A `<try>` boundary already
   knows when content it governs is unresolved; what it lacks is a way to
   **expose** that (per A4: a readonly tag variable) and the discipline to
   **keep existing content** while re-resolving instead of regressing to
   `@placeholder`.
4. *Act* pendingness is owned by the act. Per A4 that means the act must be
   a **declarable value** — a tag whose variable is the act — because every
   ownerless exposure fails: reported copies are dishonest or clobber-prone
   (revs 1, 3, 7), derivations are unreliable (rev 4), ambient queries are
   pseudo-functions (rev 5), and boundaries collapse granularity (rev 6).
   `<action/save>` declares the act; `save.pending` reads its state from
   the value that owns it. Acts left undeclared (inline handlers) still get
   implicit transactions — declaring is only for naming and observing.
5. From A7: each piece installs on use and is independently tree-shakable.

## 3. The primitives and what lands first

| Stage | Feature | Home | Depends on | Standalone value |
| --- | --- | --- | --- | --- |
| 1 | `<try/pending>`: boundary pending as a readonly tag variable + content continuity on re-pend (§5) | marko core | nothing | every client promise swap today (search-as-you-type, tab data, polling); the vocabulary persisted boundary streaming needs |
| 2 | Event transactions (infra) + `<action>` (§6) | marko core | nothing | named acts with guaranteed-reset `.pending` for any handler-managed fetch — before drafts exist |
| 3 | `<draft/view=source>` (§7) | marko core | 2 | the full optimistic story for non-persisted apps |
| 4 | Router transaction extension + navigation lifecycle (§9) | @marko/run | 2 | the persisted one-liner; optimism and busy-state for intercepted links and forms |
| 5 | Refinements on evidence (§11): action concurrency modifiers, `.input`/`.error`, auto-hold, rebase, submissions view, mutation queueing | varies | 1–4 | — |

Notes: stage 1 first is the point — smallest, most broadly useful, blocks
on nothing. Stage 2 is independently useful (busy state with a reset the
app cannot forget). Stage 4 is deliberately thin and host-agnostic. The
`<mut>`/`let-*` shared-store design is a parallel track (§8.3).

## 4. Prior art

Surveyed to inform, not to copy (official docs; July 2026). Three
observations matter to this design.

**1. "The act as a value with reactive pending" is the convergent shape.**

- Solid Router: `const save = action(fn)` +
  `useSubmission(save)` → `{ pending, input, result, error }`; multiple
  in-flight via `useSubmissions`. Optimism is *derived from*
  `submission.input` while pending.
  (docs.solidjs.com/solid-router/reference/data-apis/use-submission)
- React 19: `useActionState(fn, init)` → `[state, action, isPending]`;
  `useFormStatus()` reads the nearest form's in-flight action;
  `useOptimistic(value, reducer)` auto-reverts when the enclosing
  action/transition settles. (react.dev/reference/react/useActionState)
- TanStack Query: `useMutation` → `{ mutate, isPending, variables, error }`;
  optimism either via `variables` (derive) or `onMutate` cache writes with
  *manual* rollback context; `scope: { id }` serializes same-scope
  mutations. (tanstack.com/query/v5/docs/framework/react/reference/useMutation)
- Qwik City: `routeAction$` → `action.isRunning`, `action.value`, used with
  a `<Form>` that falls back to native POST.
- ember-concurrency (a decade of production use): `task(fn)` with
  `.isRunning`/`.isIdle`/`.last`, and — uniquely — **declared concurrency
  modifiers**: `drop`, `restartable`, `enqueue`, `keepLatest`,
  `maxConcurrency`. (ember-concurrency.com/docs/task-concurrency)

**2. The MPA-first cluster manages busy state on the gesture element.**
htmx puts an `htmx-request` class on the requesting element, shows
`hx-indicator` targets, disables `hx-disabled-elt` selectors, and declares
request concurrency with `hx-sync` (`drop`/`abort`/`replace`/`queue
first|last|all`) (htmx.org/attributes/hx-sync). Phoenix LiveView's
`phx-disable-with` swaps button text and disables during the round trip;
Turbo auto-disables submitters and toggles `[aria-busy]` across its form
submission lifecycle. These are the frameworks closest to Marko's
progressive-enhancement soul, and they all chose *markup-managed* element
busy state.

**3. Two optimistic styles, each with a known failure mode.**
Assign-based overlays with automatic revert (React `useOptimistic`) read
naturally but confuse when the ambient scope is wrong (React's works only
inside a transition/action). Derive-from-in-flight-input (Remix
`fetcher.formData`, Solid `submission.input`, TanStack `variables`) gets
rollback and concurrency for free but re-implements mutation semantics
client-side per call site. Cache-write optimism with manual rollback
(TanStack `onMutate` context) is the most error-prone shape in community
experience.

Where this design sits: `<action>` is the convergent act-as-value shape,
expressed the Marko way (a tag variable, compile-time-tracked property
reads, native `<form>` wiring); `<draft>` is assign-based with automatic
revert, scoped by the transaction rather than by a scheduler-transition,
which removes React's "wrong ambient" confusion; derivation-style optimism
remains a compatible later layer (§11.5); element-managed busy state is
noted as a run-level candidate rather than core language (§11.6);
ember/htmx-style declared concurrency is the strongest candidate extension
to `<action>` (§11.1).

## 5. Stage 1: `<try>` pending and continuity

### 5.1 Surface

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
the flag is readable anywhere in the template and exposable via `<return>`.

### 5.2 Semantics

- `pending` is `true` while the boundary's outstanding async count is
  nonzero — the existing `AwaitCounter`, so `<await>` promises and
  lazy-loaded children (`dom/load.ts:41`) are one currency. It observes
  async render work only; acts are observed on their own values (§6).
- Nested `<try>`s each own their own variable. Transitions flush through
  the normal scheduler, so downstream renders batch with the boundary work
  they describe.
- Initial render: `true` if the boundary starts pending. `@catch` swaps are
  unaffected — an error is an outcome; the flag returns to `false`.
- SSR: constant `false` (expressions outside the boundary are written
  before its resolution; the placeholder *is* the server's pending
  representation), live from resume. The asymmetry is documented, and safe
  (§5.4).

### 5.3 Continuity

Independent of the variable: a boundary with live content that re-pends
keeps the content until the replacement resolves — no `@placeholder`
re-show, no detach. The runtime already prefers this and gives up too
early: a re-pending `<await>` without a placeholder keeps old content,
detaching only on the next animation frame if still pending
(`dom/control-flow.ts:134-158`, with a resolve-before-detach guard,
`:114-117`), while the placeholder path re-shows unconditionally
(`:95-101`). Re-pending branches already park queued renders (`:98,:132`),
so kept content is frozen content — the staleness React accepts for
transitions, and the variable exists so the app can dim it.

The open decision is the default: **(a)** keep-on-re-pend becomes the
behavior (placeholder = "nothing yet"; content replaced only by newer
content or `@catch`; branch keying is the reset escape hatch) — recommended
if compatibility review allows, and the decision gets harder every release;
or **(b)** an opt-in attribute. Coupling continuity to declaring the
variable is rejected: reading a value must not change behavior.

### 5.4 Fit with the resumability and bundle model

- **Unused variable → nothing**: prunes like any unused binding
  (`finalizeReferences()`), no registration emitted; templates without the
  variable are byte-identical.
- **Read variable → ordinary stateful binding**: downstream signals, scope
  slot, and markers via existing serialize-reason propagation. **The value
  never serializes**: SSR is constant `false`, and resume re-derives truth
  from await state the payload already carries (`render.p` reconstruction,
  `dom/resume.ts:218`).
- **Resume while still pending**: the install hook queues the variable's
  signal so SSR'd-`false` downstream DOM corrects in the first post-resume
  flush.
- **Flip code ships only on use**: a `_try_pending` helper installs over
  reassignable seams at module load (`_enable_catch` pattern,
  `dom/queue.ts:190,177`) so `addAwaitCounter`/completion hot paths stay
  byte-identical for non-users.
- **Persisted**: client-owned, never patched; fragments and boundary bodies
  flow through the same seams. Accessor additions land in the
  `accessor.ts`/`accessor.debug.ts` pair.

Budget: stage-1 ≤0.3 kB, `sizes.json`-proven, including an assertion that a
try-without-variable bundle does not retain `_try_pending`.

### 5.5 Could you *tell* a `<try>` to go pending?

Explored and deferred: style-only is redundant with app state; re-showing
the placeholder destroys live content; hold/park is a real capability
(atomic regions, view-transition staging) that can starve the truth a
transaction waits on. If a case emerges it arrives as a new named input
with those semantics, never a change handler on the readonly variable
(§12.6).

## 6. Stage 2: transactions and `<action>`

### 6.1 Transactions (infrastructure)

A transaction is the lifetime of one act: opened when an act begins,
extended by promises and hosts, released when all settle.

- **Open:** lazily — when an `<action>` is invoked, or when an inline
  handler makes a draft assignment, or when a host extends an event's
  transaction. Marko owns the dispatch point (`dom/event.ts:47`); the
  wrapper installs via self-modifying `enableTransactions()` only when
  compiled in (pattern: `_enable_catch`). An `<action>` invoked *outside*
  any event (timers, sockets, imperative calls) still opens a transaction —
  reifying the act freed transactions from event dispatch.
- **Join:** draft assignments add overrides (§7); a returned thenable is
  adopted; hosts add extensions keyed by the event (§9.1).
- **Release:** pending promise count reaches zero (checked from a microtask
  after invocation; sync + unextended releases immediately). Resolution and
  rejection are identical: release. Rejection keeps unhandled-rejection
  reporting (`.finally`-shaped adoption) — the transaction observes
  outcomes, never consumes them.
- **Ordering:** release work queues through `queueRender`/`schedule()`; a
  release triggered by a resolved fetch whose body also assigned truth
  flushes in the same batch — no truth-then-revert flicker (§10.1).

Nested dispatches stack. One edge, deliberately: rev 2's "settled once
caused async resolves" second edge required render attribution; structure
and composition cover the motivating cases, and attribution remains a
refinement (§11.4).

### 6.2 `<action>`

```marko
<action/clearCart(ev) {
  cart = [];
}/>

<form method="POST" action="/cart" onSubmit=clearCart>
  <button disabled=clearCart.pending>Clear Cart</button>
</form>
```

The tag variable is the act itself: a callable function (the `(args) {}`
form is the documented method shorthand for `value=function`). Attributes:
`value=` only. The value is optional — `<action/apply/>` declares a no-op
act, which is exactly what a handler-less intercepted form needs (§8.1).

- **`.pending`** is a readonly reactive boolean: `true` while any
  invocation's transaction is unreleased (refcounted — double submits and
  deliberate sharing compose; ember-concurrency's `isRunning` and Solid's
  `submission.pending` are this exact contract). Property reads compile
  through the binding's property aliases
  (`translator/util/references.ts:266`, the machinery that already gives
  `input.x` per-property granularity), to a companion accessor the runtime
  flips directly — identity of the callable never changes, so handler
  attributes never re-bind.
- **Invoking is the act.** `onSubmit=clearCart` wires it as an ordinary
  handler (the dispatch's transaction is the invocation's); `clearCart()`
  from anywhere is equally a transaction. The body is a lexical window for
  draft assignments including post-`await`; code it calls synchronously is
  the ambient window (§6.3).
- **The reset is the guarantee**: `.pending` returns to `false` on release
  — an edge the app cannot mis-write and, under a router extension, could
  not even observe by hand (§9.2).
- **Cross-template**: the callable passes to children like any function;
  `.pending` reads are compile-time-reactive only where the binding is in
  scope — a child observing pending receives the *value*
  (`busy=clearCart.pending`) and re-renders on change, the normal rule for
  everything crossing a template boundary.
- **SSR/resume**: the variable is a registered function like any handler;
  `.pending` is constant `false` server-side; nothing new serializes.
- Deliberately *not* in v1, each with prior art and a place in §11:
  `.error`/`.input`/`.result` (Solid's submission fields), and declared
  concurrency modifiers (`drop`/`restartable`/`enqueue` — ember-concurrency,
  `hx-sync`, TanStack scopes). `.pending` is the load-bearing field;
  the rest should be pulled by evidence, not shipped on symmetry.

Naming: `<action>` resonates with `<form action=…>` (the URL names the
server side of the act; the tag names the client side) but risks confusion
with server-actions terminology; `<task>` (ember precedent) and
`<handler>` are the alternates (§12.7).

### 6.3 Windows for draft assignment

1. **Ambient window** — code executing synchronously during an invocation
   or dispatch, however deep the call stack (fan-out stores join the one
   transaction, §8.3).
2. **Lexical window** — an `<action>` body or inline handler body,
   including after `await`, via a compiled prologue capturing the
   transaction.

Everything else debug-errors. Inline handlers keep implicit transactions —
the draft-only happy path never declares anything (§7.1). Debug
diagnostics: assignment outside any window errors naming the binding; a
transaction that releases from the first post-invocation check while
holding drafts warns ("nothing extended the transaction — the draft was
discarded"), naming the fixes (`async` body, return a promise, or a router
that extends).

### 6.4 `$waitUntil` (deferred)

Earlier revisions carried `$waitUntil(promise)` for extending implicit
transactions. Actions subsume the known cases: extension beyond a returned
promise is `await` inside the body; non-event acts are action invocations;
hosts use the internal extension API. It returns (§11.7) only if
action-external extension cases materialize — keeping the user-facing
ambient surface of this whole design at **zero new identifiers**.

## 7. Stage 3: `<draft>`

### 7.1 Surface

```marko
<draft/cart=$global.data.cart/>

<div>Items in cart: ${cart.length}</div>

<form method="POST" action="/cart" onSubmit() { cart = [] }>
  <button>Clear Cart</button>
</form>
```

That is the whole happy path — an inline handler's implicit transaction,
extended by the router (stage 4) or by the handler's own returned promise.
Declaring an `<action>` is only for observation:

```marko
<draft/cart=$global.data.cart/>
<action/clearCart() { cart = [] }/>

<form method="POST" action="/cart" onSubmit=clearCart>
  <button disabled=clearCart.pending>Clear Cart</button>
</form>
```

`<draft>` requires a tag variable (identifier — it must be assignable) and
accepts only `value=`, matching `<let>`'s attribute discipline
(`translator/core/let.ts:60`).

**Variable naming is a convention, and the convention is: the draft gets
the natural name.** The draft is what the template renders, what guesses
compose from, and what nearly every expression reads — so it is `cart`,
`entries`, `sort`. The *source* is the thing referenced once, in the
declaration: either an expression (`$global.data.cart` — no second name at
all, the common persisted case) or a qualified binding (`cartData`,
`serverEntries`, `confirmedCart`). Never the reverse (`draftCart = ...`
littered through handlers is the smell). A single-binding design that
would eliminate the second name entirely was examined and rejected: guess
writes and truth writes both happen inside handler bodies
(`cart = guess; cartData = (await submit(ev)).cart`), so a lone binding
cannot tell them apart without an explicit commit API — worse than a
second name.

### 7.2 Semantics

Let `source` be the `value=` expression and `draft` the tag variable.

| Event | Effect on `draft` |
| --- | --- |
| Render / SSR / resume | `draft === source`. Server output identical to `<const>`; no extra serialization beyond what assignment analysis already requires. |
| `source` re-derives | No active override: `draft` follows, normal dirty-check. Overridden: effective value unchanged (snapshot wins; §7.3); recorded source still updates so release is correct. |
| Assignment in a window | Records/replaces this transaction's override on this instance, sets `draft` synchronously (later reads in the same body see it), queues downstream renders normally. |
| Transaction releases (any outcome) | Its overrides are discarded; `draft` re-derives: latest remaining active override in write order, else `source`. Dirty-checked — a correct guess produces zero mutations. |
| Assignment outside any window | Debug: thrown error naming the binding and the rule. Optimized: unguarded, per the `MARKO_DEBUG` convention. |
| Scope destroyed mid-transaction | Nothing: overrides live on the scope; release work on destroyed scopes is skipped by generation checks (`dom/queue.ts:177`). |

`draft` never writes back to `source` — no commit path, only discard.
Truth arrives on its own channel, which is what makes releasing always
safe. Unlike React's `useOptimistic`, the revert scope is the transaction
— an object with a defined lifetime — not "the enclosing transition", the
ambient mismatch its docs warn about (§4).

### 7.3 Concurrency

Per instance, overrides form an ordered list keyed by transaction, in write
order; re-assignment replaces in place; effective value = last entry;
release removes by transaction and re-derives.

- **Compose from the draft, not the source**: `cart = [...cart, item]`
  layers over earlier undischarged guesses because the draft already
  includes them — the documented idiom, and what makes double submit
  coherent (§9.2).
- **Out-of-order releases are principled**: T1 guesses v1, T2 guesses v2,
  T2 releases first → the draft shows v1 (T1 unconfirmed), then truth. A
  shared action's `.pending` stays true throughout (refcount).
- **Rebase is deferred** (§11.2): snapshot overrides hide independent truth
  changes until release; React's updater re-application is admitted by the
  storage shape (function-valued assignment = updater) but waits for
  evidence.

### 7.4 Naming

**Decision: `<draft>`.** The declaration reads as intended
(`<draft/cart=$global.data.cart/>` — "cart is a draft of the server
cart"), failure vocabulary teaches itself ("the draft is discarded"), and
the draft-PR precedent carries the exact meaning: visible, submitted, not
yet accepted. The variable-naming convention above keeps drafts on natural
names, so the tag name never leaks into identifiers.

The accepted cost: Marko's teaching vocabulary has used "form drafts" for
*pre-submit* user input (the `<show>` guidance), while this value is
*post-submit awaiting confirmation*. When stage 3 ships, sweep docs to say
"unsaved input" for the former; the words are better anyway. `optimistic`
remains the feature name ("optimistic updates via `<draft>`") for search
and cross-ecosystem discoverability.

Also considered: `optimistic` (the incumbent — discoverable but ten
characters, an adjective among keyword/noun tags, and the source of the
`optimisticCart` prefix habit), `attempt` (collision-free and honest about
revert-only semantics; the runner-up), `eager` (collides with
`loading="eager"`), `view` (MVC-poisoned), `expect` (assertion libraries),
`echo` (backwards metaphor — an echo follows; a draft leads), `mirror`
(implies faithful following), `staged` (implies a commit path that
deliberately does not exist).

## 8. Composition in practice

```marko
<try/searching> ... </try>
<action/save(ev) { ... }/>
<button disabled=save.pending || searching>
```

Per-row granularity — the case that killed boundary observation — is
ordinary scoping: declare the action in the row and each row observes its
own act, while a table-level act is one declaration up:

```marko
<const/serverEntries=$global.data.cart.map(toEntry)>
<draft/entries=serverEntries/>
<for|entry| of=entries by=(e) => e.product.id>
  <action/remove() {
    entries = entries.filter((e) => e.product.id !== entry.product.id);
  }/>
  <tr>
    ...
    <form method="POST" action="/cart" onSubmit=remove>
      <button disabled=remove.pending name="_action" value="remove">
        Remove
      </button>
    </form>
  </tr>
</for>
```

### 8.1 The handler-less form

The demo's promo form has nothing to guess; it wants a busy button. A
no-op action names the act; the router's extension (stage 4) gives it its
lifetime:

```marko
<action/apply/>
<form method="POST" action="/cart" onSubmit=apply>
  <input type="text" name="code" placeholder="Promo code">
  <button disabled=apply.pending name="_action" value="promo">Apply</button>
</form>
```

Validation errors need no new API: the server re-renders with
`promo.error`, the persisted router applies that direct POST response as a
patch, the transaction releases, `apply.pending` flips false, and the
error content is on screen. Without JavaScript the form posts natively —
progressive enhancement intact.

### 8.2 What `<action>` deliberately does not do

It does not auto-disable its form or submitter. htmx, LiveView, and Turbo
all manage the gesture element (§4, observation 2), and that experience is
good — but it belongs to the layer that owns the gesture interception, so
it is staged as a run-level candidate (§11.6), not core-language behavior.

### 8.3 Shared views

Instance-locality is the loud limitation: an override recorded by the
product card's `<draft>` does not move the header badge. Ambient fan-out
composes today — a store tag's write path fanning to subscriber instances
joins them all to one transaction (the demo's `let-global` pub/sub) — and
shared *pending* exposure is a requirement flowing into the `<mut>`/`let-*`
store design (§11.8). `<draft>` and `<action>` are the primitives such a
tag would use, not competitors.

## 9. Stage 4: host integration (@marko/run and persisted pages)

### 9.1 The extension handshake

At interception the router extends the event's transaction and settles it
around the navigation. The persisted shell is the model host: Marko's
delegated handlers run first (document capture, `dom/event.ts:30`; shell
on window bubble, `run-pp/.../persisted.ts:31-33`), the shell bails on
`ev.defaultPrevented`, and `navigate()` resolves on every exit path
(`run-pp/.../persisted-navigation.ts:85,128,144,146-153`), so settle wires
once around the navigation promise in `navigateMatched`. The handshake
must not import the draft runtime: an optional hook on the runtime global
generated code already reaches (`self[runtimeId]`, cf. the `have` reader
in `run-pp/.../codegen/index.ts`) or a synchronous CustomEvent — decide
with run maintainers (§12.3). Host-agnostic either way.

### 9.2 Semantics under the persisted router

- **Happy path** (§7.1): the handler (inline or action) records the guess;
  router intercepts, extends, POSTs; PRG renegotiates and patches;
  `$global.data.cart` re-derives; the extension resolves after the final
  frame; drafts release against already-correct truth; `.pending` flips
  false — an edge the handler could not observe itself, having no
  completion signal. `ev.preventDefault()` opts out; no JS is plain PRG.
- **Release at stream end, deliberately**: patch responses embed late
  async frames (boundary bodies), and the mutated value may live inside
  one — no earlier point is provably truth-complete. Cost: a slow
  unrelated `<await>` on the target extends the hold; a "route values
  complete" protocol marker could shorten it (§12.5).
- **Double submit** stays coherent: the router aborts a prior GET but never
  network-aborts a POST (exactly-once mutation; only its application is
  superseded, `run-pp/.../persisted-navigation.ts:62-65,81`). Submit B
  before A applies → txn A releases; B's draft (composed from the draft)
  carries A's intent; B's response reflects both; `.pending` refcount holds
  true throughout. Cross-connection server ordering is unowned (roadmap:
  "concurrent submissions"; a client mutation queue — TanStack's
  scope-serialization shape — is compatible, §12.8). A's response is
  discarded (benign under PRG).
- **Continuity across applies** is stage 1's: frame applies flush through
  the ordinary scheduler (`marko-pp/.../dom/update.ts:145`), so a live
  boundary whose input patches keeps its content.
- **The server-sent seam**: a fragment frame carrying a `@placeholder`
  whose body arrives later replaces live settled content — the server-side
  twin of the regression stage 1 removes. Deferring that swap until the
  body frame interacts with possession and `diverge()` fallback; needs the
  persisted owners (§12.4).

### 9.3 Navigation lifecycle events

The shell dispatches only a success `marko-run:navigate` today
(`run-pp/.../persisted-navigation.ts:144`). Run should grow start/settle
lifecycle events as the public, transaction-free observation point —
analytics, page-level progress UI beyond any one action, and the eventual
submissions view (§11.5).

## 10. Async machinery audit

1. **The queue.** Draft assignment is an external state write (`_let`'s
   shape, `dom/signals.ts:43-49`); release is the same path from the
   release microtask; `.pending` flips ride the same flushes. No new
   ordering rules; transactions never call `run()`. A write targeting
   state under an await-pending `<try>` parks like any render; release
   updates the parked entry in place (`dom/queue.ts:41-48`).
2. **`$signal` self-abort.** A handler that reads the binding it assigns
   has it in its attribute root's dependencies, so the assignment queues
   `$signalReset` (`translator/visitors/referenced-identifier.ts:114-127`)
   and a captured `$signal` aborts one flush later — including one passed
   to a fetch in the same invocation. An `<action>`'s `.pending` read does
   not create this hazard for the action itself (the callable's identity
   never changes), but the rule stands: `$signal` means "my closure went
   stale", never "my act was superseded"; a future `$transaction.signal`
   is the supersession tool (§11.3).
3. **`<await>` of the act's own promise** composes with no API: boundary
   resolution depends on the userland promise, never the transaction; with
   stage-1 continuity the round trip keeps prior content.
4. **Rejections.** Adoption is `.finally`-shaped; unhandled-rejection
   reporting survives; `.pending` resets on rejection like any release;
   `@catch` is untouched by continuity.
5. **SSR, streaming, resume.** Transactions are client-only; `<draft>`
   degenerates to `<const>`; action variables are registered functions;
   `.pending` and the `<try>` variable are constant `false` server-side
   (§5.2's asymmetry); pre-resume interactions are native. Nothing
   serializes; resume cost is zero.

## 11. Deferred refinements

1. **Action concurrency modifiers.** The strongest-precedented extension:
   ember-concurrency's `drop`/`restartable`/`enqueue`/`keepLatest`, htmx's
   `hx-sync` strategies, TanStack's serial scopes. `<action/save drop>`
   would answer double-submit declaratively instead of via `disabled=`.
   Not v1: it interacts with the router's own abort-and-replace and
   queueing questions (§12.8), and the modifier *set* should be chosen
   once, with evidence.
2. **Rebase/updater assignments** (§7.3).
3. **`$transaction` exposure** (supersession `AbortSignal`; the internal
   object exists from day one, so exposure is additive).
4. **Automatic async hold (attribution).** Rev 2's design, retained for
   acts whose consequences render outside any shared boundary: a second
   *settle* edge (release + attributed boundaries resolved), drafts still
   releasing at the promise edge, settle checks riding flush ends,
   `@catch` counting as resolution, per-flush attribution first.
   Over-holding is benign; under-holding breaks the contract.
5. **`.input`/`.result`/`.error` on actions + a submissions view.** Solid's
   submission fields and Remix/TanStack derivation, enabling
   derive-from-in-flight optimism and error UI without new tags; run's
   submissions list (model C) is the router-side twin.
6. **Run-managed gesture busy state.** The htmx/LiveView/Turbo behavior
   (auto `[aria-busy]`/disabled on the intercepted form) as a run option —
   it owns the interception; core does not touch user DOM implicitly.
7. **`$waitUntil`** returns only if action-external extension cases
   materialize (§6.4).
8. **`<mut>`/`let-*` store tag**: shared views and shared pending (§8.3).
9. **Mutation queueing in the persisted router** (§9.2).
10. **View transitions**: the release point and the stage-1 content swap
    are the natural `startViewTransition` boundaries; keep both paths
    wrappable.

## 12. Open questions

1. **Continuity default** (§5.3): keep-on-re-pend as behavior, or opt-in
   attribute. The recommendation is (a) if compatibility allows; it gets
   harder every release.
2. **`.pending` reset edge**: release (v1) vs a future settle edge if
   §11.4 lands — decide now whether that move would be breaking or the
   fulfillment of the field's meaning.
3. **Router handshake shape** (§9.1): runtime-global hook vs CustomEvent
   (which doubles as public lifecycle).
4. **Server-sent pending boundaries** (§9.2): defer placeholder-bearing
   fragment swaps until their body frame when the live boundary has
   content? Persisted owners; possession/fallback interactions.
5. **Earlier persisted release** (§9.2): a "route values complete" wire
   marker.
6. **Writable boundary pending** (§5.5): any motivating case §11.4 doesn't
   serve better?
7. **`<action>` naming**: vs `<task>`/`<handler>`; the `<form action=…>`
   adjacency cuts both ways (resonance vs confusion with server-action
   terminology).
8. **Concurrency modifier set** (§11.1): which strategies, and how they
   compose with the router's abort-and-replace and any mutation queue.
9. **Error surface**: handler `try`/`catch` only (v1) vs `.error` on the
   action (§11.5) vs routing to `<try @catch>` — the action value gives
   error a natural home short of changing `@catch`'s contract.
10. **Richer `<try>` exposure later**: boolean now vs object later is a
    breaking-change fork; decide before stage 1 stabilizes.
11. **`<draft>` naming**: decided (§7.4). Residual: sweep docs vocabulary
    so "draft" is unambiguous — the `<show>` guidance says "unsaved
    input" instead of "form drafts" — when stage 3 ships.

## 13. Implementation and verification sketch

Stage 1 (`<try>`): `core/try.ts` drops `assertNoVar` and registers the
readonly variable (rejection path shared with native element variables,
`util/references.ts:300-312`); signal flips at `AwaitCounter` 0↔n
(`dom/control-flow.ts:100,275`); continuity per §5.3 at the re-pend sites
(`:95-101`, `:134-158`); `_try_pending` installs the seams (§5.4).
Fixtures: edge cases for await swap, lazy child, nested boundaries, catch;
readonly assignment compile error; re-pend keeps content with/without
placeholder; first pend shows placeholder; parked staleness; `<return>` of
the variable; SSR false + resume liveness; still-pending resume corrects
in first flush; unread variable emits nothing; no-variable bundle excludes
`_try_pending` (sizes assertion).

Stage 2+3: `transaction.ts` (transaction object, promise set, release
edge, dispatch/invocation seams, thenable adoption, host extension entry);
`core/action.ts` (tag var = registered callable; `value=` optional
defaulting to noop; `.pending` reads compile through
`getOrCreatePropertyAlias` (`util/references.ts:266`) to a companion
accessor the runtime flips on invocation-count 0↔n — bypassing identity
dirty-checking since the callable is stable); `_draft`/`_draft_set` beside
`_let`/`_let_change` (source slot + override list, effective value
precomputed into the read slot); `core/draft.ts` routing assignments
through the existing `assignmentTo` machinery (`util/references.ts:546`).
Fixtures: action declaration incl. shorthand + no-op form; `.pending`
edges for sync, async, double-invoke refcount, imperative (non-event)
invocation, rejection reset; `.pending` in `<for>` rows; passing the
callable and the property to children; draft derive/revert; window errors
+ sync-discard warn; concurrent transactions incl. out-of-order releases;
write under await-pending `<try>`; fan-out store composition.

Stage 4: eager-shell lines in `navigateMatched` (extend at interception,
settle around the navigation promise) + handshake + lifecycle events;
persisted fixtures for PRG, direct-POST validation patch, supersession,
fallback, boundary continuity across an apply, and the no-op action's
`.pending` through a full PRG round trip.

Budgets (`.sizes.json`-enforced, zero when unused): stage 1 ≤0.3 kB;
stages 2+3 ≤1.0 kB combined; stage 4 shell delta ≤0.1 kB.

## Appendix: one component, both worlds

The demo's add-to-cart (`marko-ecommerce/src/tags/product-actions.marko`),
complete in each world. The five lines expressing the idea — the draft,
the guess composed from it, the action, the pending-disabled button — are
identical; everything else is the router absorbing the round trip.

Without persisted pages (stages 1–3; the handler owns the round trip):

```marko
client import { submit } from "../util/submit-form";

export interface Input {
  id: number;
}

// Truth: seeded by the server render, updated only from responses.
<let/cartData=$global.data.cart>
<draft/cart=cartData/>
<let/error=null>
<let/quantity=1>

<action/addToCart=async (ev) => {
  ev.preventDefault();
  const i = cart.findIndex((item) => item.productId === input.id);
  const prev = i !== -1 && cart[i];
  cart = prev
    ? cart.with(i, { ...prev, quantity: prev.quantity + quantity })
    : [...cart, { productId: input.id, quantity }];
  try {
    cartData = (await submit(ev)).cart;  // truth from the response
    error = null;
  } catch (err) {
    error = err.message;                 // the draft is discarded on release
  }
}/>

<div>Items in cart: ${cart.length}</div>
<if=error>
  <p class="cart-error">${error}</p>
</if>

<form method="POST" action="/cart" onSubmit=addToCart>
  <input type="number" name="quantity" value:Number:=quantity min="1">
  <input type="hidden" name="productId" value=input.id>
  <button disabled=addToCart.pending name="_action" value="add">
    Add to Cart
  </button>
</form>
```

With persisted pages (stage 4):

```marko
export interface Input {
  id: number;
}

<draft/cart=$global.data.cart/>
<let/quantity=1>

<action/addToCart() {
  const i = cart.findIndex((item) => item.productId === input.id);
  const prev = i !== -1 && cart[i];
  cart = prev
    ? cart.with(i, { ...prev, quantity: prev.quantity + quantity })
    : [...cart, { productId: input.id, quantity }];
}/>

<div>Items in cart: ${cart.length}</div>

<form method="POST" action="/cart" onSubmit=addToCart>
  <input type="number" name="quantity" value:Number:=quantity min="1">
  <input type="hidden" name="productId" value=input.id>
  <button disabled=addToCart.pending name="_action" value="add">
    Add to Cart
  </button>
</form>
```

What the router absorbed: `preventDefault` (interception; the handler runs
first), the fetch (the native POST becomes the PRG round trip), the truth
channel (`$global.data.cart` patches and the draft releases against it
after the final frame), and error plumbing (validation errors arrive as a
patched re-render; transport failures fall back to a document load).
Without pending UI, the `<action>` disappears too — an inline handler's
implicit transaction carries the guess:
`onSubmit() { cart = [...cart, { productId: input.id, quantity }] }`.
With no JavaScript, both worlds are a plain form POST.
