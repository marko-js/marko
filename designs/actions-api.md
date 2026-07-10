# Actions + optimistic cells — the authored API, by example

Status: **strawman surface for the [actions.md](./actions.md) model —
not reviewed, names not final.** This document shows the complete
authored API and works each surface through a realistic example. It
adds two decisions on top of actions.md (the `onPending` argument is
the holding action; `waitUntil` doubles as the bare client driver) and
inherits everything else from the reviewed
[optimistic.md](./optimistic.md) grain designs. Where a shape was
already specced there, it appears here verbatim.

## The whole surface

Everything an app author can touch, in one list:

- **`<optimistic/x=source onPending(p) { ... }/>`** — the cell (marko
  core). Reads like a `<const>` derived from `source`; writes like a
  `<let>`. A write during an action's window becomes a held guess;
  settle re-derives from source. `onPending` is optional.
- **Assignment** — the only "optimistic update" verb. `x = guess`,
  `x++`, `cart = [...cart, item]` in an event handler. No wrapper
  function, no dispatch call.
- **`waitUntil(work)`** — extends the ambient action until `work`
  (a promise) resolves. Import home is open (strawman:
  `import { waitUntil } from "marko"` — it must live in the core
  runtime, not run, because the client-only driver uses it). Callable
  synchronously during the event or while the action is still
  unsettled; throws otherwise.
- **`onPending(p)`** on the cell — fires at effect time when a write
  opens a hold (`p` = the holding action, so `p.waitUntil(...)`
  composes) and once when the last hold settles (`p` = `null`).
- **`<context/nav from="<marko-run-nav>"/>`** — run's navigation
  context, `{ pending, url, method }` (provider name TBD). At most one
  router action applies at a time, so this is scalar by construction.
- **`<form-status/status/>`** — run taglib; per-interaction pending
  for the enclosing form, platform-resolved (`status.pending`).
- **`<try|{ pending }|>`** — boundary-inbound pending as a body
  param, for content inside an `<await>` region.
- **CSS conveniences** — `data-marko-pending` / `aria-busy` on
  initiating elements remain the zero-code layer for style-only cases
  and assistive tech.

What is deliberately _not_ surfaced: the action as a template value
(no `<action>` tag, no action in scope between events), fetch/response
objects, and per-resource settle precision (a hold releases when its
actions settle, not when "its" data arrives).

The one rule that makes the examples below hang together: **guesses
and `waitUntil` calls join the action of the task they run in** — the
click handler, the form's default action, the submit handler, and the
router's interception are one task, therefore one action. Write your
guesses synchronously in the handler, before any `await`; a guess with
no confirming work by the end of the task demotes to a plain write and
warns in debug.

## E1 — the canonical case: persisted form, zero imperative API

A like button in a POST form the persisted router intercepts. The
author writes a guess and nothing else — the router joins the action
automatically, the response stream settles it.

```marko
/* post-actions.marko */
<optimistic/likes=$global.data.post.likes/>

<form method="POST" action=`/posts/${$global.data.post.id}/like`>
  <form-status/status/>
  <button disabled=status.pending onClick() { likes++ }>
    ❤️ ${likes}
  </button>
</form>
```

The guess is the one-line `onClick`; everything else is a plain form.
Timeline: click → `likes++` births the task's action and holds the
cell at 6 → default action fires submit → router intercepts, registers
the round-trip as an extender (same task, same action) → response
frames stream in, `$global.data.post.likes` emissions land in the
cell's shadow → stream ends, the action settles, the cell exposes
truth. `status.pending` was true from the click until settle. A
non-2xx response (validation failure) applies in place and settles
identically — `likes` re-derives to the server's unchanged 5. Rollback
is not a separate path the author handles.

## E2 — stacked guesses: multiplicity in API terms

Add-to-cart clicked on two products while the first round-trip is
still streaming. Same cell, two actions.

```marko
/* cart-provider.marko */
<optimistic/cart=$global.data.cart.count/>
<context:=cart/>
```

```marko
/* cart-badge.marko */
<context/cart from="<cart-provider>"/>
<span class="badge">${cart}</span>
```

```marko
/* add-to-cart.marko — one per product row */
<context/cart from="<cart-provider>"/>
<form method="POST" action="/cart">
  <input type="hidden" name="sku" value=input.sku>
  <button onClick() { cart++ }>Add to cart</button>
</form>
```

(The cross-template write rides context.md's writable-context rule —
the consumer's `cart++` desugars to a change call the provider's
declaration receives. Pairing the cell with a `syncing` flag in one
provide is context.md's open multi-value question; grain 1 records the
second-tiny-provider workaround.)

Two clicks on different rows: the badge shows `+1` then `+2`
immediately (each write is an ordinary assignment against the exposed
value, so guesses stack with no reducer API). The cell is held by both
actions; it releases once, when the second settles, exposing the
server's count for both mutations. Nothing in the authored code
mentions actions, sets, or ordering — multiplicity is entirely the
runtime's problem, which is the point.

## E3 — link-driven: optimistic navigation state

Tabs where the clicked tab should highlight instantly. The source is
URL-derived; the guess is written in the link's own click handler
(same dispatch the router intercepts in — its window-level listener
runs after the anchor's).

```marko
/* tabs.marko */
<optimistic/tab=$global.params.tab/>
<context/nav from="<marko-run-nav>"/>

<for|t| of=["popular", "newest", "following"]>
  <a
    href=`/feed?tab=${t}`
    class=[
      t === tab && "tab--active",
      nav.pending && t === tab && "tab--loading",
    ]
    onClick() { tab = t }
  >${t}</a>
</for>
```

The highlight moves at click (the guess), the spinner rides
`nav.pending`, and the response settles both. Click a second tab
before the first response lands: the first action is an aborted
navigation, so its hold **releases** — but the cell is also held by
the second click's action (reference-counted), so the exposed value
stays on the newest guess and settles against the response that
actually lands. The abandoned-guess rollback the user never sees is
exactly the supersede asymmetry doing its job.

Note what replaced the earlier `<let by=$global.params.tab>` reset
idiom: no version-key boilerplate, and pending state came from the nav
context instead of a DOM attribute.

## E4 — client boundary driver: `<await>` re-run

No router involved. Truth arrives as the boundary's body param; the
re-awaited boundary auto-extends the action (any `<await>` whose
promise is replaced during the action's window joins it — the same
auto-enrollment the router gets).

```marko
/* post-card.marko */
<let/refreshGen=0/>
<try|{ pending }|>
  <@placeholder by=input.id><post-skeleton/></@placeholder>
  <await|post|=fetchPost(input.id, refreshGen)>
    <optimistic/likes=post.likes/>
    <h2 class=(pending && "stale")>${post.title}</h2>
    <button onClick() { likes++; refreshGen++ }>❤️ ${likes}</button>
  </await>
</try>
```

`likes++` holds; `refreshGen++` re-runs the awaited expression, the
boundary goes pending and extends the action; params fire with the
fresh `post` (emission → shadow) before the counter settles it. A
double click before resolution replaces the boundary's promise — the
superseded re-await transfers per actions.md, and the cell simply
settles against the resolution that fires.

## E5 — bare client driver: `waitUntil` as the transition

The new capability actions add. Before, a client-side mutation had to
be shaped through an `<await>` re-run to have a settle point; now any
promise is one. The author owns the truth write, so the pattern is:
guess the cell, `waitUntil` the mutation chained with the source
update.

```marko
/* like-button.marko */
import { waitUntil } from "marko"; // export home = open question

<let/serverLikes=input.post.likes/>
<optimistic/likes=serverLikes/>

<button onClick() {
  likes++;
  waitUntil(likeApi(input.post.id).then((n) => (serverLikes = n)));
}>❤️ ${likes}</button>
```

The chained `serverLikes = n` is the truth write; because it is
chained _on the promise handed to `waitUntil`_, its emission is queued
before the extender resolves, and settle fan-out runs behind the queue
bracket — so the cell's shadow is fresh when the re-derive happens
(ordering rule pinned below). If `likeApi` rejects, the extender still
resolves the action (settled-by-failure), `serverLikes` never changed,
and the guess rolls back — same shape as E1's non-2xx, authored in
five lines.

## E6 — `onPending` composing with the action: minimum display time

The classic spinner-flash fix, expressed as the cell extending the
very interaction that guessed through it:

```marko
/* cart-provider.marko */
<let/syncing=false/>
<optimistic/cart=$global.data.cart onPending(p) {
  syncing = !!p;
  if (p) p.waitUntil(new Promise((r) => setTimeout(r, 300)));
}/>
```

A sub-300ms round-trip now settles at 300ms: no flash, and every
surface keyed to the action — this cell, `<form-status>`, the nav
context — agrees, because they share one settle authority. (This is
the concrete payoff of "everything is waitUntil": a _cell author_ can
stretch _interaction_ pending without touching the form or the
router.)

## E7 — `waitUntil` from the handler: animation-extended pending

The submit handler holds the interaction open until the fly-to-cart
animation lands, so the button's pending state can't clear mid-flight:

```marko
/* add-to-cart.marko */
import { waitUntil } from "marko";

<context/cart from="<cart-provider>"/>
<form method="POST" action="/cart" onSubmit(e) {
  cart++;
  waitUntil(flyToCart(e.submitter).finished);
}>
  <form-status/status/>
  <button disabled=status.pending>Add to cart</button>
</form>
```

The action now has two extenders — the router's round-trip and the
animation — and settles at whichever finishes last. The
counter-example stands: `waitUntil(sendAnalytics())` is an abuse
(invisible work holding visible state); debug builds could warn past a
duration threshold, recorded as open.

## E8 — arbitrary optimistic UI: the guess carries its own metadata

Unchanged from the reviewed design, restated because it answers "any
sort of update" without any additional API: a guess is an arbitrary
value, and settle replaces it wholesale.

```marko
/* cart-provider.marko */
<optimistic/items=$global.data.cart.items/>
<context:=items/>
```

```marko
/* add-to-cart.marko */
<context/items from="<cart-provider>"/>
<form method="POST" action="/cart" onSubmit() {
  items = [...items, { ...input.product, provisional: true }];
}>
```

```marko
/* cart-list.marko */
<context/items from="<cart-provider>"/>
<for|entry| of=items>
  <li class=(entry.provisional && "cart__row--sending")>
    ${entry.name}
    <if=entry.provisional><spinner/></if>
  </li>
</for>
```

The `provisional` flag renders rows, spinners, disabled states —
anything — and cannot survive settle, because the delivered items have
no such property.

## E9 — library composability: no props threaded

A reusable stepper that shows its own busy state inside _any_
consumer's form, the `useFormStatus` parity case:

```marko
/* quantity-stepper.marko */
<form-status/busy/>
<button formaction="/cart/inc" disabled=busy.pending>+</button>
<span aria-busy=busy.pending>${input.quantity}</span>
<button formaction="/cart/dec" disabled=busy.pending>−</button>
```

Dropped inside any consumer's `<form>`: the buttons submit the
enclosing form to their own endpoints (platform `formaction`
semantics), and `<form-status>` resolves that form at mount
(comment-node anchor, platform `closest` semantics) — so the busy
state is per-form-instance with zero threaded props, including for a
form that existed before this component streamed in.

## Ordering rules, pinned

Three sequencing facts the examples silently rely on; each needs a
fixture.

1. **Truth before re-derive (E5).** Settle fan-out runs behind the
   render/effect queue bracket, so a source write queued by an
   extender's own continuation (the `.then` chained before
   `waitUntil`'s registration) lands in the shadow before the release
   re-derives. Without this, E5 would flash guess → stale → fresh.
2. **Params before counter (E4).** Already established
   (`control-flow.ts:169-185`): boundary params fire before the
   counter settles, so boundary-driven settles also see a fresh
   shadow.
3. **Guess before interception (E1/E3).** Target-element handlers run
   before the router's window-level listener in the same dispatch, and
   click handlers run before the default action's submit dispatch in
   the same task — so the write always precedes the router's extender
   registration, and both precede any frame apply (network tasks).

## Open API questions (beyond actions.md's list)

1. `waitUntil`'s export home — `marko` core is forced by the
   client-only driver (E5), but the bare-import ergonomics vs. a
   namespaced entry (`marko/interaction`?) is naming-review material.
2. Whether `onPending`'s `null`-at-settle convention should instead be
   a second boolean argument (`onPending(action, pending)`) — the
   `syncing = !!p` coercion in E2/E6 is the smell to weigh.
3. Whether `<form-status>`'s value should expose the action
   (`status.action?.waitUntil(...)`) or stay `{ pending }`-minimal —
   E6 covers the known use case from the cell side, so start minimal.
4. A debug duration warning for runaway extenders (E7's analytics
   abuse).
