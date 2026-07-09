# Optimistic updates in Marko — handoff

Status: **synthesis, 2026-07-09.** The complete optimistic-update story
for persisted-pages-era Marko, in one place, with real-world flows
traced end to end. Everything here is stated with its build status:

- **[BUILT]** — on the persisted-pages feature branch today.
- **[DESIGNED]** — decided in a design doc, not built
  ([let-by.md](./let-by.md), [context.md](./context.md),
  [persisted-pages-optimistic-transitions.md](./persisted-pages-optimistic-transitions.md),
  [persisted-pages-recede.md](./persisted-pages-recede.md)).
- **[REVIEW]** — recommended by [let-by-review.md](./let-by-review.md)
  (findings cited as F1–F9), needs sign-off.
- **[EXPLORATION]** — worked out in [optimistic.md](./optimistic.md),
  needs its own design review.

## 1. The mental model

Persisted pages make the server authoritative: a navigation is _the
current page receiving new input_, the compiler's ownership analysis
decides what the wire may touch, and client state survives by
construction. "Optimistic UX" is everything that happens **between the
user's intent and the server's answer** — and it decomposes into three
different problems, because the client knows different things in each:

| the user…                               | the client knows…                          | primitive                                                 | status        |
| --------------------------------------- | ------------------------------------------ | --------------------------------------------------------- | ------------- |
| clicks a link / submits a GET form      | the next **input**, exactly (the href)     | nav-context stamp — early reaction is an authored consume | [EXPLORATION] |
| submits a mutation / triggers a refresh | only a **guess** at the outcome            | `<optimistic>` cell — derived-at-rest overlay             | [EXPLORATION] |
| edits something in place                | local truth, until the **subject** changes | `<let by=>` — identity-keyed durable state                | [DESIGNED]    |

Shared vocabulary (defined by the `<optimistic>` gate model, used
throughout):

- **channel** — where a value's truth arrives: the persisted delivery
  pipeline (`input`/`$global` merges) or a feeding `<await>` boundary
  (body params).
- **emission** — the channel firing: a parent re-render, the
  `$global`-statement re-run each apply performs, or await params
  firing with a fresh resolved object.
- **held / shadow / exposed** — an optimistic cell's state: a guess is
  showing (_exposed_) while the latest truth accumulates (_shadow_)
  until confirmation is no longer outstanding (_held_ clears).
- **settle predicate** — "is confirmation still outstanding on this
  cell's channel?": router mutation queue non-empty (persisted) or the
  feeding boundary's `AwaitCounter` pending (client).
- **settle** — the channel going quiet: a delivered frame applying
  while the mutation queue is empty (persisted — checked per frame,
  since the wire has no sync/async phase marker), or the boundary's
  awaits reaching zero / a body committing / catch.

Association, in one sentence: **writes are never tied to interactions;
cells are bound (statically, from their source expression) to their
confirmation channel, and settle is a property of the channel** — with
ordered mutations, "the channel is quiet" guarantees the latest truth
reflects every settled interaction, so interaction identity is
unnecessary (see optimistic.md, "Association, precisely").

## 2. The substrate both drivers share

**Persisted driver [BUILT]** (see
[persisted-pages-architecture.md](./persisted-pages-architecture.md)):
the run router intercepts links, GET forms, and POST forms
(`packages/run/src/runtime/persisted.ts`); the server re-renders the
target in update mode and streams newline-delimited frames; the client
applies them through compiled merges and the generic applier — matched
scopes get value updates through the signal graph, fresh subtrees
arrive as fragments, async boundary bodies arrive as their own frames
(`_update_branch`). Client-owned state is never in the payload; sparse
means absent-is-unchanged. Failures fall down a ladder that ends in a
full navigation. Two review prerequisites: mutation responses are
currently dropped unread when superseded — **F2 [REVIEW]** orders
navigations behind in-flight mutations (React 19 Actions precedent) —
and there is no double-submit guard yet (**F6 [REVIEW]**).

**Client driver [BUILT]**: `<await|value|=promise>` under
`<try>`/`<@placeholder>`. The await branch scope persists across
re-awaits; each resolve fires the body params with a fresh object
(`resolveAwait`, dom/control-flow.ts) — that params-fire is the
emission. Boundary pending-ness is counted per placeholder
(`AwaitCounter`). Ordering fact that shapes everything downstream:
params fire **before** the counter settles (`control-flow.ts:169-185`),
so anything waiting on settle needs a notification at counter-zero, not
just the emission. Today a client re-await always recedes to the
placeholder after a one-frame grace; **F3 [REVIEW]** aligns it with the
persisted driver (keep stale when `<@placeholder by=>` identity is
unchanged).

**The one new shared hook [EXPLORATION]**: a global held-cell
registry (cells register at write time and carry their own predicate;
fan-out iterates a snapshot with a pass-generation guard; one abort
listener per cell instance), fanned out at counter-zero,
`_update_branch` body commit, and catch — including the counters the
document's **inline reorder runtime** owns (it cannot call lazy
modules itself). Round 2 respecified how those inline counters are
reached: not a load-time wrap of `render.p` (the inline script keeps a
local alias and creates counters continuously as chunks arrive), but
the runtime's own seams — `render.j[id]` completion callbacks for
counters not yet created, in-place chaining of `c` on the live counter
object at cell registration, and fire-if-already-settled. Same
boundary-settled moment the pending-signal layer (`aria-busy`) wants.
Adversarial round 1 reshaped this from per-branch sets (which strand
await-param-sourced cells settled by the router, while emission-time
registration is swallowed by dirty-checks); see
optimistic-adversarial-review.md for both rounds.

## 3. Example A — Add to Cart (shared state, mutation-confirmed)

The canonical flow, from the ecommerce benchmark. **Today** the app
hand-rolls all of it in `let-global.marko`: a module-scope pub/sub
registry mirrors `$global.data.cart` across templates, mutations go
through `fetch` + JSON content negotiation, reconciliation is a manual
second write (`cart = (await submit(ev)).cart`), and a failed request
is an unhandled rejection with the optimistic write left standing.

**Target authoring** — three pieces, no reconcile code anywhere:

```marko
/* cart-provider.marko — in the persistent layout */
<optimistic/cart=$global.data.cart/>   // [EXPLORATION]
<context:=cart/>                       // [DESIGNED] context.md
```

```marko
/* product-actions.marko */
<context/cart from="<cart-provider>"/>
<form method="POST" action="/cart" onSubmit() {
  cart = addItem(cart, input.id, quantity);   // the guess
}>
  <button name="_action" value="add">Add to Cart</button>
</form>
```

```marko
/* +layout.marko header */
<context/cart from="<cart-provider>"/>
🛒 Cart (${cart.reduce((s, i) => s + i.quantity, 0)})
```

**Happy path**, step by step:

1. _(browser)_ Click. The form's `onSubmit` runs: the write travels
   through the writable context to the provider's cell —
   exposed = guessed cart, **held**; every consumer (badge, cart page)
   re-renders in the click's own frame.
2. _(router)_ The submit bubbles to the persisted router's listener,
   which inserts the mutation into its queue **synchronously, on the
   listener stack, before `navigate()`'s first `await`** (F2 state;
   round-2 placement rule — the entry import is a task boundary an
   unrelated GET's frames could otherwise slip through), then POSTs
   with `accept: text/marko-patch`. `data-marko-pending` goes on the
   form [DESIGNED, layer 1].
3. _(server)_ The handler mutates the session cart; PRG redirect; the
   followed GET renders the page in update mode and streams frames.
4. _(applier)_ Frame 1 merges the `serializedGlobals` partial — a fresh
   `data` object — and the dispatched sections' registered
   `$global`-mixing statements re-run: the cell's **emission**. Shadow
   ← the authoritative cart. Predicate: queue non-empty → still held
   (the badge keeps showing the guess; usually identical to truth
   anyway).
5. _(router)_ A frame applies with the queue now empty → the settle
   fan-out runs (checked per applied frame; effect time) over the
   held-cell registry.
6. _(cell)_ Predicate clear → exposed = shadow. Guess was right →
   dirty-check: **zero DOM work**. Done — no reconcile write, no
   version, no event listener.

**Rejected mutation** (out of stock; server re-renders with an error
flash — non-2xx patches deliberately apply in place so focus survives,
persisted.ts:286): identical steps, except the delivered cart is
unchanged. Two sub-cases both converge: if the response carries the
cart value, the emission refreshes shadow; if sparse pruning omits the
unchanged value entirely, no emission fires and shadow _already holds
the last truth_. Either way settle exposes the real cart — the badge
visibly rolls back, next to the server-rendered error. This is the case
that broke every key-based idiom (review F1: a self-value key strands
the guess forever; a version key works but is fragile hand-maintained
boilerplate).

**Double-click**: two guesses (held throughout), two POSTs — ordered by
F2. Mutation #1's frames emit (shadow ← cart+1) but the queue still
holds #2 → no intermediate render; #2's frames emit and settle →
exposed = cart+2 once. This is React `useOptimistic`'s rebase behavior
without a delta queue.

**Unrelated navigation mid-flight** (user clicks a product link while
the POST is in flight): under F2 the GET queues behind the mutation;
its delivery emits, predicate holds (if the mutation hasn't settled),
and the badge never regresses to pre-mutation truth.

**Network death**: the fallback ladder — response in hand → follow its
URL as a full navigation; no response → hand the submission back to the
browser (`requestSubmit`). Either way a full document rebuilds from
truth; overlays are moot.

## 4. Example B — Like button under a client `<await>` refresh

The feed app's per-post like, where truth arrives as a **boundary
param** rather than through a navigation:

```marko
<let/refreshGen=0/>
<try>
  <@placeholder by=post.id><post-skeleton/></@placeholder>
  <await|post|=fetchPost(id, refreshGen)>
    <optimistic/likes=post.likes/>
    <button onClick() { likes++; refreshGen++ }>❤️ ${likes}</button>
  </await>
</try>
```

1. Click: `likes++` → exposed 6, held (button renders 6 immediately);
   `refreshGen++` re-runs the awaited expression → boundary pending.
   With F3, `post.id` unchanged → **keep stale** + pending signal (no
   skeleton flash); today's keyless behavior would recede after the rAF
   grace — either way the cell is orthogonal to the placeholder policy.
2. The compiler bound the cell to this boundary at build time (its
   source is the boundary's param — the lexical case), so its predicate
   reads this branch's `AwaitCounter`.
3. Resolve: params fire with a **fresh `post` object** — the emission
   reaches the cell even when `likes` is numerically unchanged (object
   identity differs per resolve; this is why the cell's source compiles
   into its own signal rather than through a memoized `<const>`, whose
   dirty-check would swallow the same-value case — optimistic.md open
   question 2). Shadow ← truth. Counter still pending at this instant
   (params fire before `c()`), so the cell waits.
4. Counter reaches zero → the held-cells fan-out notifies the cell →
   predicate clear → exposed = shadow. Server ignored the like? Rolls
   back to 5. Confirmed? Silent no-op.
5. Double-click: the second re-await **replaces** the boundary's
   promise, so resolve #1 fires neither params nor the counter (the
   identity guard) — the boundary simply stays pending until resolve
   #2 fires the one emission and the one settle (mechanics corrected
   by adversarial round 1, R-F10).
6. Rejection-by-error (`fetchPost` throws): catch settles the boundary
   with no emission — proposed rule: keep the guess over the error
   content; the next successful emission reconciles (optimistic.md open
   question 4).

## 5. Example C — Filter chips and tabs (links: no declaration at all)

The search page's tag chips are plain links; the dashboard's filters
are a GET form. The next input is the href — **known, not guessed** —
so no optimistic cell is involved:

```marko
<for|tag| of=tags>
  <a href=`/?tag=${tag}` class=(tag === $global.search.tag && "chip--active")>
    ${tag}
  </a>
</for>
```

1. _(router)_ Click intercepted. `data-marko-pending` on the chip
   [DESIGNED] — the CSS-only rung, Unpoly's `.up-active`.
2. _(router)_ **Early-input stamp [EXPLORATION, mechanism revised by
   adversarial round 1]**: the router stamps the target URL into the
   run **nav context** at click (`nav.url`), and _nav-context
   consumers_ re-run through context fan-out — in any template, at any
   depth. (The original synthetic-frame-zero mechanism died in review:
   a globals-only frame dispatches only the root section's `$global`
   statement, so child-template chips never re-ran — R-F5 — and
   routing the stamp through `createUpdate` would advance
   `bumpNavEpoch` at click, discarding pre-navigation reorder chunks
   for the whole round trip — R-F7.) Note what this means for the chip
   sample above: its `chip--active` class reads `$global.search.tag`,
   which is _not_ the nav context — it flips when truth lands, which is
   correct for active state. A click-time `chip--loading` is the
   nav-context read (`nav.pending && nav.url` comparison, §7).
3. Results content keeps stale behind `aria-busy` while frames stream.
   **Honest pricing after the revision (round-2 F4)**: nothing writes
   `$global` before delivery anymore, so an identity-keyed boundary
   (`<@placeholder by=$global.search.tag>`) recedes at **first frame**,
   not at interaction time — click-time recede was the dead
   synthetic-frame mechanism's promise, and it died with it. A region
   that must react at click is authored as a nav-context consumer
   (e.g. keying off `nav.url`), which is code, not zero-authoring.
4. Frames land; the delivered globals merge over the stamp
   (dirty-checks to no-ops); history commits at first applied frame,
   unchanged.
5. Superseding click: re-stamps, aborts the first fetch. Fallback:
   `location.assign` — full document, stamp moot.

URL-keyed state resets still compose with zero extra machinery —
`<let/expanded=false by=$global.params.id/>` collapses when the new
`$global` merges at first frame. Not at click: that claim belonged to
the dead synthetic-frame mechanism (round-2 F4). A reset that must
happen at interaction time means keying off a nav-context value the
author consumes explicitly.

## 6. Example D — Drafts and in-place editing (`<let by=>`)

The other optimistic shape: local writes are the **user's property**
until the _subject_ changes — not a guess awaiting confirmation. A
review-edit box on the item page:

```marko
<let/draft=item.text by=item.id/>
<textarea value:=draft/>
```

- Same `item.id`, new `item.text` delivered (someone else edited): the
  user's in-progress draft **survives** — same key, same instance.
- Different `item.id` (navigated to another item): the draft re-seeds
  from the new item's text — new key, new instance. Comparison is
  SameValueZero, mirroring keyed `<for>`. Be precise about what this
  is: the old draft is **discarded**, not banked — `<let by>` cannot
  express "keep one instance per key ever seen" (per-key draft banking
  is a hand-rolled `<let/drafts={}>` map), and an unsaved-changes
  guard must fire _before_ the navigation, which is router-surface
  territory (guards are a recorded run-roadmap item), not `by=`'s job.
- Bonus outside optimism entirely: inside a _positional_ loop, `by=`
  fixes today's stale-state hazard when rows shift (review,
  "free correctness win").
- **Anti-pattern** (review F1): do not use `<let by>` with a self-value
  key (`by=input.cartCount`) for mutation-confirmed state — a rejected
  mutation delivers the same key and strands the guess forever. That
  shape belongs to `<optimistic>`; until it exists, the interim is a
  server-maintained version key (`by=$global.data.cartVersion`), with
  its fragility documented in F1.

`<let by>` is validated and scoped in the review: build the client half
on main first (the runtime slot it needs already exists — today's
`_let` discards re-seeds for existing scopes at exactly the point the
key comparison goes), persisted delivery after — and audit whether the
dedicated delivery channel is still needed at all once the guess shape
moves to `<optimistic>` (request-derived keys/values already re-run
client-side through ordinary fan-out).

## 7. Pending state and the perception layers

**The primary surface is reactive, not CSS** (decision 2026-07-09,
reversing the optimistic-transitions doc's non-goal in part — transport
detail stays hidden; pending-ness becomes first-class state; see
optimistic.md, "Programmatic pending state"). Adversarial round 1
(optimistic-adversarial-review.md) killed two earlier surfaces —
`pending:=` (the language's only output-only bind, with driven writes
silently dropped on the client settle path) and `<transition>`
(false-positive containment, `form=` splits, View Transitions name
collision, library-composability failure) — and corrected a recorded
rationale: tag-variable reads DO hoist template-wide; the real
tree-shape prison is that hoisted reads are getter-shaped (not
signal-subscribed) and pluralize under control flow. The surviving
three grains:

- **Resource** — `<optimistic/cart=… onPending(p) { syncing = p }/>`
  [EXPLORATION]: handler-shaped notification (the `<lifecycle
onMount…>` convention), effect-time, try/catch-wrapped. The state it
  drives is a plain `<let>` the author owns; aggregation is ordinary
  code. Semantics: resource-sync (the held window) — explicitly NOT a
  per-interaction spinner (a shared cell's hold can outlast one row's
  request).
- **Navigation** — a run-provided **context** (`{ pending, url,
method }`), not `$global` [EXPLORATION]: reactive in any template via
  explicit consume, collision-free, and needing no synthetic-frame
  fan-out (which only reaches the root section — the reason
  `$global.nav` died). Early-input stamps `nav.url` through the same
  provider. Per-link pending derives by URL comparison.
- **Interaction** — run-owned, DOM-grounded [EXPLORATION]:
  `<form-status/status/>` (working name) resolves its enclosing form
  the way the platform does and subscribes to the router's per-element
  state — per-instance in loops, `useFormStatus`-parity for library
  components (a `<quantity-stepper>` ships its own), `<button form=…>`
  resolved natively. Inbound content pending is the boundary's **body
  params**: `<try|{ pending }|>` — render-native, body-scoped, which is
  this grain's definition of local.

With those plus `<optimistic>` cells — whose guesses are arbitrary
values and may carry their own presentation metadata
(`{ ...item, provisional: true }`, wiped by settle since server truth
replaces the value wholesale) — **any** optimistic update is ordinary
template logic: swap labels, `disabled=adding.pending`, render spinner
components, style provisional rows. The layers below are conveniences
and platform affordances on top of that surface, not the API:

| layer                                                                                                                  | what the author does                                                                          | status                                                                              |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| pending reactive state, three grains (`onPending` on cells, the run nav context, `<form-status>`/`<try\|{pending}\|>`) | any template logic                                                                            | [EXPLORATION] — optimistic.md + adversarial review                                  |
| pending attrs (`data-marko-pending`, doc-level) + double-submit guard                                                  | CSS only, zero code                                                                           | [DESIGNED] — review F6 says ship **first** (the guard is correctness)               |
| regional `aria-busy` on pending boundaries                                                                             | nothing (a11y semantics)                                                                      | [DESIGNED], deferred by decision; same boundary-settle hook as the cells            |
| structural recede `<@placeholder by=>`                                                                                 | one attribute                                                                                 | **[BUILT]** persisted-side; F3 extends to client re-awaits; anti-flash hold unbuilt |
| early-input via the nav context                                                                                        | consume `nav` where click-time reaction is wanted; `$global`-keyed sites react at first frame | [EXPLORATION] — mechanism revised in round 1, priced in round 2                     |
| View Transitions                                                                                                       | CSS (`view-transition-name`)                                                                  | [DESIGNED], behind a run option; both swap paths are single choke points            |

## 8. Build order (from the review, updated through the discussion)

1. Pending attrs + `aria-busy` + double-submit guard (router; F6).
2. Router mutation ordering (F2) — prerequisite for all settle
   semantics; its queue state is the persisted predicate. Placement is
   part of the spec (round 2): queue-insert synchronous in the submit
   listener, before `navigate()`'s first `await`.
3. `<let by>` client half on main (+ F5 error for `by=`+`valueChange`,
   F4 non-primitive-key lint, fixtures incl. positional-loop).
4. `<let by>` persisted delivery (scope per §6's audit).
5. `<context>` per its plan (reason-threading spike first — shared with
   `<optimistic>`'s cross-template boundary feeding).
6. `<optimistic>` + the pending surfaces (optimistic.md, post-review):
   the gate cell, the global held-cell registry with the boundary
   settle hook (`render.j` callbacks + in-place counter chaining), the
   per-frame router settle fan-out, `onPending`, `<form-status>`,
   `<try|{ pending }|>`, and the run nav context — which is also
   early-input's delivery for GET navigations (moved here from its old
   step-3 slot: the revised mechanism _requires_ the context tag and
   the nav provider, so it cannot precede them — round-2 F4). Delete
   `let-global` from the benchmark as acceptance.
7. `<@placeholder by=>` on client re-awaits (F3) + shared anti-flash.
8. View Transitions behind the run option.

## 9. Invariants and gotchas for whoever builds this

- **Guesses never survive truth**: an `<optimistic>` cell always
  re-derives at settle; a correct guess is a dirty-checked no-op. There
  is deliberately no rollback API and no client mutation queue.
- **Nothing new on the wire**: the cell's source rides existing
  channels; downstream holes classify as state-mixing and already
  re-invoke against live state during applies
  (`persisted-update-csr-race` pins this — a held overlay cannot be
  clobbered mid-apply).
- **Sparse compatibility is load-bearing**: absent-means-unchanged +
  the shadow slot is what makes rejected-mutation responses (which may
  prune the unchanged value entirely) converge.
- **Emission granularity matters**: sources must reach the cell as raw
  expressions over delivery-fresh bindings (params objects, `$global`
  re-runs); an intermediate memoized `<const>` swallows same-value
  emissions (lint candidate).
- **Ordering facts**: params fire before `AwaitCounter` settles (hence
  the held-cells hook); the persisted settle check runs per applied
  frame, gated on the mutation queue being empty — decided, not open
  (R-F11 closed in round 1, wording fixed in round 2): stream-scoped
  settle was rejected because a slow unrelated boundary would delay
  every rollback on the page.
- **Object keys over the wire** (`<let by>`/`<@placeholder by>`):
  deserialized clones never SameValueZero-match and string-coerced
  identities collapse to `"[object Object]"` — one family-wide
  dev-warning (F4).
- **Byte discipline**: every primitive rides only bundles that use it;
  a never-written `<optimistic>` compiles as a `<const>`;
  non-persisted builds stay byte-identical for non-users.

## 10. Validation

Fixture matrices live in let-by-review.md ("Fixture additions") and
optimistic.md ("Fixtures"); the persisted substrate's lifecycle pin is
`persisted-update-navigate`, and the five benchmark apps'
Playwright suites are the real-world regression net. The end-to-end
acceptance for the whole story is unchanged: **the benchmark app's
`let-global.marko` is deleted**, its cart flows (badge, add, remove,
clear, rejection, double-click) stay green, and no app code performs a
reconcile write, a version bump, or an event subscription to keep
optimistic state honest.
