# `<optimistic>` — interaction-scoped optimistic cells: exploration

Status: **design exploration — not built, not signed off.**
Adversarial-review rounds 1 and 2 applied (2026-07-09): round 1 was
four independent attack reviews (language consistency, runtime
mechanics, real-app DX, alternatives) whose surviving composite this
document records; round 2 was a code-grounded verification pass over
that composite, which respecified two repairs that were unimplementable
as written (the boundary-settle hook and the persisted settle point),
replaced the task-drain bracket with dispatch-grounded rules, and
forced the early-input revision through the companion docs. The verdict
ledgers, kill list, and repair rationale live in
[optimistic-adversarial-review.md](./optimistic-adversarial-review.md).
A proposed evolution — grouping holds, settle, and pending surfaces
under a per-dispatch **action** with `waitUntil` lifetime extension —
is explored in [actions.md](./actions.md); it respecifies the settle
authority (per-action completion instead of channel-quiet) and answers
in-flight multiplicity, but has not had its own adversarial round, so
this document remains the reviewed record.
Companion to [let-by-review.md](./let-by-review.md) (finding F1, which
motivates this) and
[persisted-pages-optimistic-transitions.md](./persisted-pages-optimistic-transitions.md)
(whose layer 3 this replaces for the pending-confirmation shape;
`<let by=>` remains the in-progress-input shape per
[let-by.md](./let-by.md)). This document works out what the DX

```marko
<optimistic/likes=post.likes/>

<button onClick() { likes++; like(post.id) }>❤️ ${likes}</button>
```

actually requires, for **both** drivers: persisted pages (mutation →
PRG → update frames) and client-side async transitions (a re-running
`<await>` tag under the existing `<try>`/`<@placeholder>` machinery).

## The one-sentence architecture

An optimistic cell is a **gate between the canonical channel and its
readers**: derived-at-rest (between interactions it _is_ its source,
reactively), writable-as-a-guess (a write holds the gate), and settled
by the platform (the gate re-opens when confirmation arrives and no
further confirmation is outstanding). Upstream of the gate stays
ordinary request-derived delivery; downstream of the gate classifies as
client state. Both halves already exist in the compiler — the tag only
declares where the gate sits.

## Cell semantics (the gate model)

Per-instance state, on the scope:

- **exposed** — what readers read (the ordinary value slot).
- **shadow** — the latest source value received (canonical truth as of
  the last emission).
- **held** — whether a local write is awaiting confirmation.

Three paths:

1. **Emission** (the source's compiled subscription fires — parent
   re-render, `$global` re-run during an apply, await params firing):
   recompute the source expression into **shadow**. If not held →
   expose it (dirty-checked). If held → consult the **settle
   predicate** (below); if confirmation is no longer outstanding _and_
   the hold was not created during the currently-running settle or
   emission pass (the pass-generation guard, below), expose shadow and
   clear held; otherwise keep holding.
2. **Write** (`likes++` compiles through the cell's
   `buildAssignment`): exposed = value, held = true, queue downstream
   renders — and **register the held cell** in the settle registry,
   carrying its statically-compiled boundary accessor (if any).
   Registration happens at write time, never at emission time: a
   dirty-check-swallowed emission must not be able to swallow
   registration (adversarial R-F6).
3. **Settle notification** (registry fan-out): if held and the cell's
   own predicate is now clear → exposed = shadow, held = false,
   dirty-checked downstream, deregister. A correct guess settles as a
   **no-op** (6 === 6); a rejected mutation re-derives to the unchanged
   truth — the visible rollback, with no rollback API. Notifications
   run at **effect time** (`queueEffect`) and are wrapped in their own
   try/catch: a throwing app callback can neither corrupt an apply nor
   trip the router's fallback ladder (adversarial R-F1). The fan-out
   iterates a **snapshot** of the registry, and a hold created during
   the currently-running settle pass is never settled by that same
   pass (a pass-generation check): without both, an `onPending(false)`
   handler that re-writes its own cell re-enters the live iteration at
   the exact moment its predicate reads clear and loops unboundedly —
   nothing throws, so the try/catch never helps (round-2 F5).

The settle predicate, per channel, is "is confirmation still
outstanding?":

| channel                | predicate                                                | settle events that trigger a registry fan-out                                                              |
| ---------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| persisted mutation     | router mutation queue non-empty (the F2 state)           | **each applied frame, when the mutation queue is empty** (not stream completion — see settle timing below) |
| client re-await        | the feeding boundary's re-await pending (`AwaitCounter`) | the boundary's counter reaching zero, a boundary body committing (`_update_branch`), catch                 |
| neither (unassociated) | always clear                                             | next emission lifts the hold (`let-global`'s semantics as the fallback)                                    |

**One registry, per-cell predicates** (adversarial R-F3): held cells
register in a single module-level registry; _every_ settle event fans
out over it and each cell re-checks its **own** predicate. This is what
makes the advertised composition work — an await-param-sourced cell in
a persisted app is boundary-bound, but a POST mutation settles through
the router: with per-branch-only sets nobody would ever notify it.
Lifetime (three facts round 2 forced into writing): a cell instance
registers **one** abort listener ever — on its first hold, with the
has-guard `subscribeToScopeSet` already uses (`signals.ts:280-286`) —
and later holds only flip the held flag; a naive register-per-hold /
deregister-per-settle cycle would accumulate a fresh abort listener per
write under autosave-class traffic. Scope destruction defers the actual
`abort()` through `queueEffect` (`abort-signal.ts:7`, `scope.ts:99`),
so a settle fan-out batched with a destroy can visit a just-killed
cell — the fan-out skips destroyed branches the way `queueRender`'s
`skipDestroyedRenders` does (`queue.ts:206-216`). And abort cleanup
only exists where the scope has a `ClosestBranch`
(`abort-signal.ts:13-16`): a cell in the page's root scope has no
destroy path at all — page-lifetime, so vacuously safe, but
"deregistered via the owning scope's abort signal" is not universal
and must not be read as such. Net effect unchanged: a subtree destroyed
mid-navigation cannot leak detached DOM through the registry (R-F8).

**The birth window** (R-F4, respecified in round 2): round 1's
"task-drain bracket" defended a window that cannot occur. The click
listener, the form's default action, and the submit listeners are one
task (activation behavior runs synchronously at the end of click
dispatch; `requestSubmit` is fully synchronous), and while microtask
checkpoints do run between listener invocations, a frame apply is only
reachable through `await reader.read()` continuations — enqueued and
fully drained inside the _network_ task that fulfilled the read. No
frame can apply between the click handler that wrote the guess and the
submit listener that creates the mutation. The window that **can**
occur is inside the router: `navigate()` awaits the update entry before
anything else (a dynamic import — a task boundary even when cached; the
entry loads ahead of the fetch so the possession echo can ride the
request headers), and an unrelated in-flight GET's frames can apply
during those tasks. So the rule is placement, not draining: **the
router inserts the mutation into its queue synchronously, on the submit
listener's own stack, before `navigate()`'s first `await`.** With that,
a mutation's guess is never observable alongside an empty queue. This
is deliberately _not_ write-association (no per-cell mutation tagging):
the one write-timing concession is the settle-pass-generation guard
above, which protects re-entrant holds rather than nascent
navigations.

**Settle timing** (R-F11, respecified in round 2): the wire is
newline-delimited frames with no phase marker — "the response's
synchronous frames applied" is an event no client code can observe, so
round 1's settle point was unimplementable as written. The
implementable point: **fan out after each applied frame (each read
burst), whenever the mutation queue is empty.** Over-notification is
safe by construction — every cell re-checks its own predicate — and it
is _sound_ for the cells this settle point serves, because the
`serializedGlobals` partial rides every frame: a
`$global`/input-sourced cell's truth is present from frame 1.
Boundary-nested sources settle through their own boundary events (body
commit) as those frames land. Stream-completion stays rejected: a PRG
response re-runs every `<await>` on the page, so stream-scoped settle
makes rollback latency equal the slowest boundary on any async page —
unbounded and server-controlled. Recorded residual: a source that only
materializes in a _later_ frame of the same response settles one frame
early against a stale shadow — a wrong-then-right flicker bounded by
the sparse contract (the next frame's emission re-derives), accepted
over the alternative of a sync-done wire marker this design forbids.

### Association, precisely: cells bind to confirmation channels, not writes to interactions

The direct answer to "how does the system know which optimistic updates
belong to which interaction": **it deliberately never does.** A write is
never tagged with an interaction. Instead, each _cell_ is bound —
statically, from its source expression's dataflow — to the **channel its
truth arrives through**: the feeding `<await>` boundary when the source
is a body param, or the persisted delivery pipeline when the source is
`input`/`$global`-derived. Settle is then a property of the channel, not
of any interaction: a held cell lifts at the first settle event at
which its channel has nothing further outstanding.

Why interaction identity is dispensable:

- **Truth is attributed by channel, not by cause.** Whichever
  interaction triggered the mutation or re-await, the authoritative
  value for this cell arrives through the same channel the cell already
  reads.
- **Ordered mutations make "quiet" sufficient.** Under F2, mutation
  responses apply in order, so when the queue empties, the latest
  delivered truth reflects _every_ settled interaction — settling all
  held cells against it is correct regardless of which interaction
  wrote what.
- **The coarseness is delay-only, never wrongness — but the delay is
  honest now**: under sustained mutation traffic (autosave, chat) the
  queue may rarely be empty, so a held guess (including a rejected one)
  can display for an unbounded window, flagged by pending UI but not
  reconciled. The recorded future refinement is per-resource settle
  precision via **server-stamped versions** (the useful organ harvested
  from the rejected version-key design): the server exporting
  mutation→data knowledge the client cannot infer. Record, don't build.

Per-interaction precision would otherwise require exactly the machinery
this model exists to avoid — tagging writes with transitions across the
click→submit dispatch chain, `for=` ref plumbing — and would buy only
earlier settling in the concurrent-unrelated-mutation case, at the cost
of claiming knowledge (mutation→data dependencies) the client doesn't
have. The sync queue-insert and the settle-pass-generation guard above
are the two deliberate, bounded bites of write-timing the model
concedes.

## Walk-through: persisted driver

`<optimistic/likes=$global.data.post.likes/>` (or an `input`-threaded
source), like button in a `POST` form the persisted router intercepts.
Assumes F2 (mutation ordering + queue) from the review.

1. Resume: exposed = shadow = 5.
2. Click: handler runs `likes++` → exposed 6, held, **registered**;
   the form submit rides the router, which inserts the mutation into
   its queue synchronously — on the listener stack, before
   `navigate()`'s first `await`. Downstream re-renders now — the
   button shows 6 in the click's own frame.
3. The PRG response streams. Frame 1 merges the `serializedGlobals`
   partial — a fresh `data` object — and the _dispatched sections'_
   registered `$global`-mixing statements re-run (unconditional within
   each compiled merge; sections still ride the patch's presence-gated
   dispatch — see the sparse note). The cell's **emission** fires.
   Shadow ← delivered truth (6 accepted / 5 rejected). Predicate: queue
   non-empty → keep holding.
4. A frame applies with the queue now empty → registry fan-out (effect
   time) → predicate clear → exposed = shadow. Accepted: 6 === 6,
   silent. Rejected: 6 → 5 re-renders — rollback, alongside whatever
   error content the response rendered (non-2xx patches deliberately
   apply in place, `persisted.ts:286-298`).

**Sparse-delivery compatibility** (why the shadow slot matters): an
update render prunes unchanged values, and section dispatch itself is
presence-gated — a rejected mutation's response may carry _no fill at
all_ for the cell's section. Then no emission fires, shadow still holds
the pre-write truth (5), and the settle fan-out exposes it — correct by
exactly the "absent means unchanged" contract the wire already has.
Both delivery shapes converge.

**Overlapping mutations** (the React `useOptimistic` rebase case):
click-click → exposed 7, held; mutation #1's frames emit (shadow 6) but
the queue holds #2 → still held; #2's frames emit (shadow 7); queue
empties → expose 7. No intermediate 6 ever renders.

**Superseded/failed:** mutations are never dropped under F2 (ordered,
always applied). A GET that carried an unassociated guess and got
superseded simply lifts on the next emission. The fallback ladder ends
in a full navigation — everything rebuilds from truth.

## Walk-through: client async transition

Truth arrives as the boundary's **body parameter** (the `<await>` tag's
resolved value — `await` is not valid inside a template expression), so
derive the cell from it. The await branch scope persists across
re-awaits (`resolveAwait` reuses `scope[branchAccessor]`; params
re-fire into the same branch), so the cell — and a held guess — survive
the transition:

```marko
<let/refreshGen=0/>
<try>
  <@placeholder by=id><post-skeleton/></@placeholder>
  <await|post|=fetchPost(id, refreshGen)>
    <optimistic/likes=post.likes/>
    <button onClick() { likes++; refreshGen++ }>❤️ ${likes}</button>
  </await>
</try>
```

1. Click: `likes++` → exposed 6, held, registered (the compiler bound
   the cell to this boundary at build time — its source is the
   boundary's param, the lexical case); `refreshGen++` re-runs the
   awaited expression → boundary pending. With review F3,
   `post.id` unchanged → **keep stale** + pending signal (no skeleton
   flash); today's keyless behavior would recede after the rAF grace —
   either way the cell is orthogonal to the placeholder policy.
2. Resolve: `resolveAwait` fires the params with the resolved object —
   for a plain `fetch().json()` flow that object is fresh per resolve,
   so the emission reaches the cell even when `likes` is numerically
   unchanged. **Two known swallowing hazards** (R-F6): an
   identity-stable resolved value (memoized fetcher, SWR-style cache)
   dirty-checks away at the param binding; and an intermediate memoized
   `<const>` (`<const/likes=post.likes/>` then `<optimistic/l=likes/>`)
   swallows the same-value case upstream of the cell. Registration at
   write time makes both _recoverable_ — the settle fan-out still
   reaches the cell and exposes the shadow — but a swallowed emission
   means a stale shadow, so the lint (open questions) matters.
3. Ordering fact that shapes the design: params fire **before**
   `awaitCounter.c()` settles the boundary (`control-flow.ts:169-185`),
   so at emission time the predicate still reads pending. The
   registry fan-out at counter-zero (effect time) settles the cell.
4. Double-click before resolve #1 — mechanics per the code, not the
   earlier draft (R-F10): the second `_await_promise` invocation
   **replaces** `scope[promiseAccessor]`, so promise #1's resolution
   fires _neither_ params nor `c()` (the `thisPromise` identity guard),
   and the counter never exceeds one for re-awaits. There is no
   "resolve #1 emission" to hold through; the boundary simply stays
   pending until resolve #2 fires the one emission and the one settle.
   Same end state as the rebase case, simpler mechanism.
5. Rejection-by-error (`fetchPost` throws): the catch path settles the
   boundary with no params emission. Proposed rule: the settle
   notification still fires (the registry is populated — registration
   happened at write); a held cell whose shadow never refreshed keeps
   its guess over the error content, and the next successful emission
   reconciles. Needs a fixture either way.

**Finding the feeding boundary** is compile-time work in the common
case: the source expression's references include an await-param binding
of a lexically enclosing boundary section, so the translator passes
that boundary's accessor to the cell. Cross-template feeding (a
context-provided cell whose source is another template's param) needs
the cross-template reason-threading spike `context.md` already names —
v1 is lexical, an unresolvable feed degrades to the unassociated rule,
and the degradation gets a dev-warning (silent-degradation cliffs are
what the rest of this design set criticizes).

## Programmatic pending state

> Decision recorded (2026-07-09, design discussion): transport _detail_
> stays hidden (no fetch promises, no response objects, no client data
> layer), but _pending-ness_ is first-class reactive state — a user
> must be able to optimistically drive **any** update, not only respond
> to attribute changes via CSS. The CSS attributes (`data-marko-pending`,
> `aria-busy`) remain as zero-code conveniences and assistive-tech
> semantics layered on top.
>
> Post-adversarial-review surface: **all platform pending notification
> is handler-shaped** (`on*` — the platform-notification convention
> `<lifecycle onMount onUpdate onDestroy>` already establishes on a
> core tag), invoked at effect time, wrapped in try/catch. `:=` is
> ruled out everywhere here: it would be the language's only
> output-only bind — every existing bind site makes the author's value
> the authority and the change call a request (controllables snap the
> DOM back; `context.md` states the rule) — and the desugar erases
> `bound`, so the shape could not even be policed (adversarial L-1/L-2).
> Driven-`<let>` writes from settle contexts are additionally a silent
> no-op hazard (`_let`'s rendering branch, R-F1) that handler-shaped
> notification at effect time avoids by specification.

Pending has **three grains**; each gets the surface whose visibility
and ownership match its scope:

### Grain 1 — resource: `onPending` on the cell

```marko
/* cart-provider.marko */
<let/syncing=false/>
<optimistic/cart=$global.data.cart onPending(p) { syncing = p }/>
<context:=cart/>
```

The cell invokes the handler as its held window opens and settles
(effect time). The state it drives is a plain `<let>` the author owns —
hoistable, derivable, providable — and aggregation across cells is
ordinary code (a counter, not a stomped boolean). Documented semantics:
**resource-sync** — the held window, deliberately _not_ "a mutation
that might affect this resource is in flight" (unknowable client-side)
and deliberately not a per-interaction spinner: the DX review showed
cell-pending mistaken for per-row pending ships wrong UI (a row's
spinner running because a _different_ row's mutation holds the queue).
Per-interaction pending is grain 3's job. Observable-state contract
(round-2 F5): the handler runs at effect time after the settle wrote
the exposed slot and queued downstream renders — it sees the **new cell
value but pre-settle DOM** (the flush that repaints hasn't run yet).
Writes it makes are ordinary writes; a re-write of the cell itself
creates a fresh hold that the running settle pass will not itself
settle (the pass-generation guard). Under SSR the tag accepts and
ignores `onPending` exactly as the html runtime ignores `valueChange` —
`held` is always false server-side, so there is no moment to notify.
Sharing `cart` + `syncing` from one provider is the named motivating
case for context.md's multi-value-provide open question; until that
resolves, a second tiny provider template is the workaround.

### Grain 2 — navigation: a run-provided context, not `$global`

The router _provides_ navigation state through the `<context>`
mechanism from run's generated route wrapper — reactive in any template
via an explicit consume, collision-free (no squatting on the app-owned
`$global` bag), absent rather than silently frozen in non-persisted
builds, and needing **no synthetic-frame fan-out**: context's
provider-scope subscription set is the delivery. (The earlier
`$global.nav` mechanism is dead: synthetic globals-only frames dispatch
only the root section's `$global` statement — every child template's
reader was unreachable, R-F5 — and routing the click-time stamp through
`createUpdate` would advance `bumpNavEpoch` at click, discarding
pre-navigation reorder chunks for the whole round trip with a silent
stuck-placeholder corner past the possession echo's 4 KB cutoff, R-F7.)

Shape (strawman): `{ pending, url, method }` — carrying the
navigation's _input_ makes per-link pending derivable with zero
per-anchor state:

```marko
<context/nav from="<marko-run-nav>"/>   // provider name TBD with run
<a
  href=`/?tab=${t}`
  class=[
    t === tab && "tab--active",
    nav.pending && nav.url.searchParams.get("tab") === t && "tab--loading",
  ]
>${t}</a>
```

How the router writes it (round-2 F12 — context.md routes writable
contexts consumer→provider, and the router is neither): run's generated
route wrapper declares the state as its own `<let>` and hands the
router a setter that closes over a lexical assignment in that wrapper
template. This satisfies the recorded invariant — _every cross-template
write channel desugars to a lexically visible assignment in the
declaring template_ — because the wrapper is the declaring template and
the router is merely a function its setter was handed to.

Early-input stamping composes here instead of through globals: the
router stamps `nav.url` at click through the provider (context fan-out
reaches every consumer, any template), and `bumpNavEpoch` stays at
first-response time. **Honest pricing (round-2 F4)**: this is where the
synthetic-frame kill actually lands. Nothing writes `$global` before
delivery anymore, so `$global`-keyed sites — an
`<@placeholder by=$global.search.tag>`, a `<let by=$global.params.id>`
reset — react at the first response frame, not at click. Any site that
must react at interaction time is authored as a nav-context consumer;
"early reaction with zero authoring" was the dead mechanism's promise,
not this one's.

### Grain 3 — interaction: run-owned, DOM-grounded (`useFormStatus`-shaped)

The initiating element is the honest anchor for per-interaction
pending, and the platform already defines how elements relate to forms
(`input.form`, `<button form=…>`, fieldset disabling) — so the surface
is a **run taglib tag** that resolves its enclosing form the way the
platform does and subscribes to that element's navigation state in the
router's per-element registry:

```marko
/* product-actions.marko */
<context/cart from="<cart-provider>"/>
<form method="POST" action="/cart" onSubmit() {
  cart = addItem(cart, input.id, quantity);
}>
  <form-status/status/>   // working name; run taglib
  <button disabled=status.pending>
    ${status.pending ? "Adding…" : "Add to cart"}
  </button>
</form>
```

- **Per-instance by construction**: loops need no wrapper; each row's
  tag resolves each row's form.
- **Library-composable** (the DX review's fatal case resolved): a
  `<quantity-stepper>` ships its own `<form-status/busy/>` and works in
  any consumer's form with zero threaded props — the `useFormStatus`
  parity Marko lacked.
- **Layering, honestly priced (round-2 F8)**: run owns the router and
  the tag, but a Marko tag has no host element and `closest("form")`
  needs a node — so runtime-tags is _not quite_ untouched: the tag
  anchors itself with a **comment node** obtained through one small
  runtime-tags primitive (a leaf tag requesting its DOM position).
  Comment nodes are invisible to CSS selectors (`:empty` included) and
  layout, so the anchor has zero authoring impact — unlike a marker
  element, which would break `:only-child`/`:empty`/flex-gap styling
  in the host form. The grain-3 surface still answers the language
  review's kill of native `pending:=` attrs (controllables are a
  closed set keyed to real element IDL; `pending` would render as junk
  HTML or become a secret native attr).
- **`<button form="checkout">`** targets the form it names, exactly as
  the platform resolves it; nearest-form is DOM semantics, not
  framework magic-nearest (the context tag's explicit-`from=` rule is
  about template identity, which has no platform resolution — forms
  do).
- The dead `<transition>` tag's remaining exclusive case — pending for
  a region whose initiators you don't own — stays unserved by decision,
  on the same evidence standard as `for=`.

Resolution mechanics, pinned (round-2 F8): the tag resolves
`anchor.closest("form")` in its **mount effect, post-insertion** — a
`closest()` inside a detached fragment cannot see a form already in
the document, and effects inside streamed await bodies already hold
until insertion, which is exactly the machinery this rides. The
router's registry is keyed by the resolved form **element**;
subscribing before the form's first submission is supported (the entry
is created on subscribe, not on submit), two tags in one form share the
entry, and a tag that resolves no form mirrors the platform
(`input.form === null`): never-pending, with a dev-mode warning.

Inbound content pending stays on the boundary, through the established
platform→body output channel — **body parameters**, which are
render-native (`_const` has no `Gen` gate, so param-driven state flows
in every context the settle points run in):

```marko
<try|{ pending }|>
  <@placeholder by=id><skeleton/></@placeholder>
  <await|post|=fetchPost(id, refreshGen)>
    <h2 class=(pending && "stale")>${post.title}</h2>
  </await>
</try>
```

Body params are body-scoped — which is this grain's own definition of
local. Readers outside the boundary belong to grains 1–2. Two rules
round 2 forced into writing: **scoping** — `pending` is visible in the
`<try>` body content only; reading it inside an
`@placeholder`/`@catch` body is a **compile error** in v1 (those
bodies are separate branches created and destroyed on their own
schedules — `@catch` already carries its _own_ params — and a closure
from an attr-tag branch into the try branch's param is cross-branch
machinery this design doesn't buy). **Firing context** — "params are
render-native" covers where the value lands, not where the flip fires
from: the true→false flip at an inline-counter settle originates in
the settle hook, which is not a render pass, so the hook brackets its
`params()` call with the queue machinery (`queueRender` +
`schedule()`, the same bracket the rAF recede path already uses,
`control-flow.ts:135-158`) — a raw call there would queue renders
nobody flushes.

### "Any sort of update" needs no further machinery

The guess a cell holds is an arbitrary value — including presentation
metadata, since settle replaces it wholesale with server truth:

```marko
<form method="POST" onSubmit() {
  cart = [...cart, { ...item, provisional: true }];  // guess carries its own flag
}>
```

```marko
<for|entry| of=cart>
  <li class=(entry.provisional && "cart__row--sending")>…</li>
</for>
```

The provisional flag never survives settle — the delivered cart has no
such property. Between that, per-cell truth (`<optimistic>`), resource
sync (`onPending`), navigation state (the nav context), and
per-interaction pending (`<form-status>`, `<try|{pending}|>`),
arbitrary optimistic UI is ordinary template logic over reactive
values — components, text, `disabled`, reordering — with CSS selectors
as one consumer among many rather than the only one.

## What each layer requires

- **Compiler** (`translator/core/optimistic.ts`, shaped like `let.ts`):
  tag variable required; `value=` (default attr) required; `onPending=`
  optional (function-typed, like `valueChange`'s assertion); no body;
  no `by=`. **Compile errors**: `valueChange=` (a cell's writes are
  guesses, never upstream delegations — and its `Change`-direction
  would be opposite `onPending`'s on one tag), and a **bound default
  attribute** (`<optimistic/cart:=src/>` currently desugars into a
  silent unreactive mutation of the source — the desugar runs before
  tag analyze, so the tag must reject the desugared pair explicitly).
  Analyze: a writable-derived binding — assignments allowed (reuse the
  `let` assignment plumbing / `buildAssignment` → `_optimistic_write`),
  but the source expression compiles **into the cell's own signal
  function** subscribed to the source's references — not through an
  intermediate memoized `<const>` (lint the bare-alias case). A cell
  with **no assignments anywhere** compiles as a plain `<const>` — and
  the load-bearing invariant behind that downgrade is now recorded:
  _every cross-template write channel must desugar to a lexically
  visible assignment in the declaring template_ (writable context does;
  any future channel that doesn't must revisit this optimization or it
  becomes a wrong-behavior cliff). Downstream readers classify as
  state-mixing — which the persisted compiler already handles correctly
  (`persisted-update-csr-race`): a held overlay is never clobbered
  mid-apply by construction.
- **DOM runtime** (`dom/optimistic.ts`, its own module for
  tree-shaking): `_optimistic(accessor, boundaryAccessor?, fn)` — the
  gate signal (emission/write/settle paths above), `_optimistic_write`
  (write + register; MARKO_DEBUG errors if invoked while `rendering`
  is set — the composite's own root-cause lesson, R-F1's silent-no-op
  class, applied to its newest signal), the **global held-cell
  registry** (snapshot fan-out, pass-generation guard, per-cell
  predicate re-check, single-abort-listener lifetime), and effect-time,
  try/catch-wrapped notification for settles and `onPending`. Budget:
  low hundreds of bytes min, riding only bundles that use the tag.
- **Boundary machinery** (the genuinely new pieces): settle events fan
  out to the registry from `awaitCounter.c()` reaching zero,
  `_update_branch` body commit, and catch — **including the counters
  the document's inline reorder runtime owns** (R-F2 — one of the
  three `c()` implementations ships as an inline document script and
  cannot call lazily-loaded modules itself). Round 1 specced "wrap
  `render.p` when the module loads," which round-2 verification killed
  three ways: the inline script keeps a _local_ alias
  (`placeholders = runtime.p = {}`, `inlined-runtimes:52`), so no
  later swap of `render.p` reaches it; counters are created
  continuously as chunks arrive, so a load-time sweep misses every
  later one; and callers hold captured references (`resume.ts:250`
  copies the counter object onto the branch). The implementable seams,
  both already in the code: (1) the inline runtime's **own
  module-side completion hook** — setting `render.j[branchId]` chains
  a callback after that counter's final decrement
  (`inlined-runtimes:93-95`), covering counters not yet created; (2)
  for counters already live, **in-place mutation of `c` on the counter
  object** (the exact chaining pattern the `j` path itself uses),
  installed at cell-registration time via the object `resume.ts:250`
  attached to the branch — visible to every caller because all of them
  call through that same object. Plus **fire-if-already-settled at
  registration** (the counter may have hit zero before the cell ever
  held). MARKO_DEBUG asserts at registration (a boundary-bound cell
  must find a hookable counter or a committed branch) and at fan-out —
  round 1's "assert if an unwrapped counter settles" was itself
  unimplementable, since an unhooked counter announces nothing.
- **Run router**: F2's mutation queue (already a prerequisite) plus:
  queue-insert synchronous in the submit listener, before
  `navigate()`'s first `await` (R-F4 as respecified); per-frame settle
  fan-out gated on queue-empty; the per-element form-state registry
  backing `<form-status>`; the nav context provider (grain 2), which
  also becomes early-input's delivery; and — recorded as run-roadmap
  items surfaced by the DX
  review, not this doc's to design — programmatic
  `navigate(href, { replace })` (today `form.requestSubmit()` is the
  entire programmatic API and every debounced-search tick is a history
  entry), navigation guards with defined listener-phase ordering, and
  documenting `marko-run:navigate` as the sanctioned low-level event
  hatch.
- **The wire: nothing.** No new serialization class, no dedicated
  delivery, no echo. The source rides the channels it already rides;
  the cell's exposed slot serializes for resume exactly as a written
  `<let>` would. This remains the practical payoff of derived-at-rest.

## SSR / resume

The server renders the source value like a `<const>` — no special
behavior, no key slot; `onPending` is accepted and ignored (no held
window exists server-side). The exposed slot serializes when client
code reads/writes it (ordinary reasons). Resume registers the cell signal
like any let; `held` always starts false (a server cannot render a
guess). `<try|{ pending }|>` under SSR: content already flushed before
a slow body cannot be revised, so the param is `false` for the
document render and **resume-time drive only** — decided explicitly
(R-F12) rather than left as the earlier open question.

## Escape hatch (pre-decided, deferred)

If custom-`fetch` flows — confirmations the platform cannot see because
they neither navigate nor re-run an await — ever demonstrate the need,
the slot is `guess(value, untilPromise)`: an ordinary import producing
a branded value the cell's write path recognizes (hold until the
promise settles, then re-derive). Plain-JS-legal (an import, not a
magic callable), with a dev-mode brand check on non-cell writes.
Deferred on the same evidence standard as `for=` was.

## Fixtures

1. Client driver: write → held+registered; param emission with pending
   boundary → still held; counter-zero settle (effect time) →
   re-derive; equal-value settle is a no-op (assert via render counts).
2. Client driver, double re-await: superseded promise fires neither
   params nor `c()` (identity guard); single settle on resolve #2; no
   intermediate value renders.
3. Catch-settle: registry fan-out fires; guess retained (shadow never
   refreshed); next successful emission reconciles.
4. Persisted driver (feature branch): accepted mutation (silent
   settle), rejected mutation with sparse response (no fill → shadow
   fallback → rollback renders), overlapping mutations (no intermediate
   value), unrelated GET mid-flight (emission holds; later settle
   reconciles).
5. Birth window: submit listener writes and submits while an unrelated
   GET is mid-stream; its frames apply during `navigate()`'s
   entry-import gap and do not lift the hold — the queue insert
   happened synchronously before the first `await` (R-F4 as
   respecified; round 1's click→submit-gap framing tested a window
   dispatch semantics make impossible).
6. Channel misclassification guard: await-param-sourced cell + POST
   mutation + sparse response → router settle fan-out reaches the
   boundary-bound cell via the global registry (R-F3's exact sequence).
7. Resumed still-streaming boundary, **both load orders**: module
   loads before the first reorder chunk (the counter is created
   after — round 2's killing order) and after (counters pre-exist); in
   both, interacting before the stream finishes hooks the inline
   counter (`render.j` / in-place `c`) and its settle notifies the
   registry (R-F2's exact sequence).
8. Registry lifetime: cell's subtree destroyed mid-navigation while
   held → deregistered via abort; no detached-DOM retention.
9. Unassociated write: lifts on next emission (any navigation).
10. No-assignment cell compiles byte-identical to `<const>`; bound
    default attr and `valueChange=` are compile errors.
11. Composition: provider `<optimistic>` + writable `<context>` +
    consumer writes from a form — the cart shape end-to-end, deleting
    `let-global` in the benchmark app.
12. `<form-status>`: per-row forms in a loop; `<button form=…>` outside
    the form's subtree; a library tag consuming its host form's status.
13. `<try|{ pending }|>`: pending true across a client re-await and a
    persisted matched-boundary re-render; resume-time drive on a
    still-streaming document boundary (the flip riding the settle
    hook's queue bracket); SSR renders `false`; reading the param in an
    `@placeholder`/`@catch` body is a compile error.
14. `onPending` moments and reentrancy: handler fires on hold-open
    and settle (effect time; asserts new cell value + pre-settle DOM);
    a handler that re-writes its own cell on settle creates a fresh
    hold that survives the running pass — no loop, no silent revert
    (round-2 F5's exact sequence).
15. Nav context: `pending`/`url` stamp at click, before any frame;
    per-link derivation lights only matching anchors; non-persisted
    build → provider absent (no silently frozen ghost value).
16. Early-input under the revised mechanism: a `$global`-keyed site
    (`<@placeholder by=$global.search.tag>`) recedes at first frame,
    not at click; the same UI authored as a nav-context consumer
    reacts at click — the honest-pricing pair (round-2 F4).
17. Settle latency (R-F11's motivating scenario): a mutation on a page
    with a slow unrelated streaming boundary settles at its own
    frames — the hold lifts while the unrelated boundary is still
    pending.

## Open questions

1. **Name.** `<optimistic>` is self-documenting and matches industry
   vocabulary — and is the language's first adjective core tag, and its
   longest at 10 chars; it reads best in the var position
   (`<optimistic/likes=…>`). Decide with naming of `<form-status>` and
   the nav provider so the family reads as one.
2. **Memoization swallowing**: lint (or see through) sources that are
   bare aliases of a memoized `<const>`, and document the
   identity-stable-resolved-value hazard (memoized fetchers) — with
   write-time registration these degrade to stale-shadow-until-settle
   rather than permanent holds, but the lint still matters.
3. **`onPending` siblings**: whether an `onSettle` (each
   reconciliation) is worth a second moment — defer until a real
   consumer appears.
4. **Cross-template boundary feeding**: rides the shared
   reason-threading spike (`context.md`); v1 lexical; degradation
   dev-warns.
5. **Interaction with `<let by>`**: none by design — different shapes
   (fork-at-rest vs derived-at-rest); confirm no template needs both on
   one value.
6. **`<form-status>` details**: name; target resolution rule
   (closest-form default, named-target override?); whether links need a
   per-anchor variant in v2 or the nav-context URL comparison suffices.
7. **Nav context provider identity**: run's generated wrapper needs a
   stable `from=` name — coordinates with context.md's `from=` syntax
   question and the multi-value-provide follow-up (cart + syncing is
   the other named case).
8. ~~Task-drain bracket definition~~ — **resolved in round 2**: the
   bracket is gone (the window it defended cannot occur under event
   dispatch semantics); its replacements are the sync queue-insert and
   the settle-pass-generation guard. Fixture 5 re-aimed accordingly.
9. **Per-resource settle precision** (future): server-stamped versions
   as the refinement for the global queue's unbounded coarseness under
   sustained mutations. Record only.
