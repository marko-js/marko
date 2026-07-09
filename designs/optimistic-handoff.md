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

Persisted pages make the server authoritative: a navigation is *the
current page receiving new input*, the compiler's ownership analysis
decides what the wire may touch, and client state survives by
construction. "Optimistic UX" is everything that happens **between the
user's intent and the server's answer** — and it decomposes into three
different problems, because the client knows different things in each:

| the user…                          | the client knows…                       | primitive                                        | status        |
| ---------------------------------- | --------------------------------------- | ------------------------------------------------ | ------------- |
| clicks a link / submits a GET form | the next **input**, exactly (the href)  | early-input stamp — zero authoring               | [REVIEW]      |
| submits a mutation / triggers a refresh | only a **guess** at the outcome    | `<optimistic>` cell — derived-at-rest overlay    | [EXPLORATION] |
| edits something in place           | local truth, until the **subject** changes | `<let by=>` — identity-keyed durable state   | [DESIGNED]    |

Shared vocabulary (defined by the `<optimistic>` gate model, used
throughout):

- **channel** — where a value's truth arrives: the persisted delivery
  pipeline (`input`/`$global` merges) or a feeding `<await>` boundary
  (body params).
- **emission** — the channel firing: a parent re-render, the
  `$global`-statement re-run each apply performs, or await params
  firing with a fresh resolved object.
- **held / shadow / exposed** — an optimistic cell's state: a guess is
  showing (*exposed*) while the latest truth accumulates (*shadow*)
  until confirmation is no longer outstanding (*held* clears).
- **settle predicate** — "is confirmation still outstanding on this
  cell's channel?": router mutation queue non-empty (persisted) or the
  feeding boundary's `AwaitCounter` pending (client).
- **settle** — the channel going quiet: the final pending mutation's
  stream completing, or the boundary's awaits reaching zero.

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

**The one new shared hook [EXPLORATION]**: a held-cells set on the
try branch, notified at counter-zero, at `_update_branch` body commit,
and on catch — the same boundary-settled moment the pending-signal
layer (`aria-busy`) wants. Build once, two consumers.

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

1. *(browser)* Click. The form's `onSubmit` runs: the write travels
   through the writable context to the provider's cell —
   exposed = guessed cart, **held**; every consumer (badge, cart page)
   re-renders in the click's own frame.
2. *(router)* The submit bubbles to the persisted router's listener; it
   POSTs with `accept: text/marko-patch` and marks the mutation queue
   non-empty (F2 state). `data-marko-pending` goes on the form
   [DESIGNED, layer 1].
3. *(server)* The handler mutates the session cart; PRG redirect; the
   followed GET renders the page in update mode and streams frames.
4. *(applier)* Frame 1 merges the `serializedGlobals` partial — a fresh
   `data` object — and re-runs the registered `$global`-mixing
   statements unconditionally: the cell's **emission**. Shadow ← the
   authoritative cart. Predicate: queue non-empty → still held (the
   badge keeps showing the guess; usually identical to truth anyway).
5. *(router)* Stream completes → queue empties → one settle call fans
   out to held cells.
6. *(cell)* Predicate clear → exposed = shadow. Guess was right →
   dirty-check: **zero DOM work**. Done — no reconcile write, no
   version, no event listener.

**Rejected mutation** (out of stock; server re-renders with an error
flash — non-2xx patches deliberately apply in place so focus survives,
persisted.ts:286): identical steps, except the delivered cart is
unchanged. Two sub-cases both converge: if the response carries the
cart value, the emission refreshes shadow; if sparse pruning omits the
unchanged value entirely, no emission fires and shadow *already holds
the last truth*. Either way settle exposes the real cart — the badge
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
5. Double-click: resolve #1's emission finds the boundary pending
   *again* (re-await #2 in flight) → keep holding → settle once on #2.
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

1. *(router)* Click intercepted. `data-marko-pending` on the chip
   [DESIGNED] — the CSS-only rung, Unpoly's `.up-active`.
2. *(router)* **Early-input stamp [REVIEW]**: before the fetch, apply a
   synthetic frame zero — `[_ => [0, {url}]]` — through the
   navigation's own `createUpdate` context (the `?update` entry is
   already loaded pre-fetch for the possession echo). URL-derived
   expressions re-run: the old chip un-highlights, the new one
   highlights, **at click time**. Server-only-mixed expressions are
   skipped by the existing `!_updating` compute guards — they keep
   stale values until real frames land, which is the keep-stale policy
   everywhere else.
3. Results content keeps stale behind `aria-busy` while frames stream;
   an identity-keyed boundary (`<@placeholder by=$global.search.tag>`)
   can recede **at interaction time** instead of first flush — the
   upgrade the recede design's own prior-art survey asks for.
4. Frames land; the delivered globals merge over the stamp
   (dirty-checks to no-ops); history commits at first applied frame,
   unchanged.
5. Superseding click: re-stamps, aborts the first fetch. Fallback:
   `location.assign` — full document, stamp moot.

URL-keyed state resets compose here with zero extra machinery:
`<let/expanded=false by=$global.params.id/>` collapses at click, one
round trip earlier than today.

## 6. Example D — Drafts and in-place editing (`<let by=>`)

The other optimistic shape: local writes are the **user's property**
until the *subject* changes — not a guess awaiting confirmation. A
review-edit box on the item page:

```marko
<let/draft=item.text by=item.id/>
<textarea value:=draft/>
```

- Same `item.id`, new `item.text` delivered (someone else edited): the
  user's in-progress draft **survives** — same key, same instance.
- Different `item.id` (navigated to another item): the draft re-seeds
  from the new item's text — new key, new instance. Comparison is
  SameValueZero, mirroring keyed `<for>`.
- Bonus outside optimism entirely: inside a *positional* loop, `by=`
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
optimistic.md, "Programmatic pending state"). Pending has **three
grains**, each with the visibility its scope implies — the non-local
ones deliberately avoid lexical wrappers, which force tree shapes
(a reader above the interaction site could never see a tag variable
declared below it):

- **Resource** — `<optimistic/cart=… pending:=syncing/>`
  [EXPLORATION]: the cell *drives* ordinary author state through the
  bind-shorthand/change-handler pattern (`value:=x` on controllables is
  the precedent). `syncing` is a plain `<let>` — hoistable and
  providable at any height (it rides the same provider that already
  shares `cart`). Deliberately the held window only, not "some mutation
  might affect this" — that's server knowledge.
- **Page** — `$global.nav.pending` [EXPLORATION]: router-stamped
  through the synthetic-frame channel early-input uses; readable
  everywhere by definition. Progress bars, dim-the-page.
- **Site** — the same drive pattern on the boundaries:
  `<try pending:=refreshing>` (inbound: this boundary re-fetching;
  client `AwaitCounter` / persisted pending-boundary state) and
  `<transition pending:=adding>` (outbound: a navigation initiated by a
  contained control — DOM-containment association, no refs, loop-safe)
  [EXPLORATION]. Local state next to the boundary is the *point* of
  this grain (the button's own label/`disabled`); grains above cover
  everything non-local.

With those plus `<optimistic>` cells — whose guesses are arbitrary
values and may carry their own presentation metadata
(`{ ...item, provisional: true }`, wiped by settle since server truth
replaces the value wholesale) — **any** optimistic update is ordinary
template logic: swap labels, `disabled=adding.pending`, render spinner
components, style provisional rows. The layers below are conveniences
and platform affordances on top of that surface, not the API:

| layer                                   | what the author does            | status                                                       |
| --------------------------------------- | ------------------------------- | ------------------------------------------------------------ |
| pending reactive state, three grains (`pending:=` on cells and boundaries, `$global.nav`) | any template logic | [EXPLORATION] — optimistic.md |
| pending attrs (`data-marko-pending`, doc-level) + double-submit guard | CSS only, zero code | [DESIGNED] — review F6 says ship **first** (the guard is correctness) |
| regional `aria-busy` on pending boundaries | nothing (a11y semantics)     | [DESIGNED], deferred by decision; same boundary-settle hook as the cells |
| structural recede `<@placeholder by=>`  | one attribute                   | **[BUILT]** persisted-side; F3 extends to client re-awaits; anti-flash hold unbuilt |
| early-input stamp                        | nothing                         | [REVIEW]                                                      |
| View Transitions                         | CSS (`view-transition-name`)    | [DESIGNED], behind a run option; both swap paths are single choke points |

## 8. Build order (from the review, updated through the discussion)

1. Pending attrs + `aria-busy` + double-submit guard (router; F6).
2. Router mutation ordering (F2) — prerequisite for all settle
   semantics; its queue state is the persisted predicate.
3. Early-input stamping for GET navigations.
4. `<let by>` client half on main (+ F5 error for `by=`+`valueChange`,
   F4 non-primitive-key lint, fixtures incl. positional-loop).
5. `<let by>` persisted delivery (scope per §6's audit).
6. `<context>` per its plan (reason-threading spike first — shared with
   `<optimistic>`'s cross-template boundary feeding).
7. `<optimistic>` + the pending tag variables (optimistic.md): the gate
   cell, the held-cells boundary hook, the router settle call, and
   `<try/t>`/`<transition/t>` riding the same boundary-settle and
   queue-state plumbing. Delete `let-global` from the benchmark as
   acceptance.
8. `<@placeholder by=>` on client re-awaits (F3) + shared anti-flash.
9. View Transitions behind the run option.

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
- **Ordering facts**: params fire before `AwaitCounter` settles
  (hence the held-cells hook); persisted settle-at-stream-completion is
  conservative — a slow unrelated boundary delays it (open question;
  refine to response-scoped if it bites).
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
