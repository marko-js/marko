# Proposal: `<draft>` and `<action>`

Two core tags for optimistic updates in Marko 6. `<draft>` declares a view
of server-derived truth that accepts provisional assignments; `<action>`
declares a user act and exposes whether it is in flight. Together they turn
today's hand-rolled guess/rollback/busy-flag code into declarations, and
under the persisted-pages router the whole flow is native forms.

Rationale, design history, alternatives, and the staged roadmap (including
`<try/pending>` and router integration details) live in
`optimistic-updates.md`; this document is only the surface being proposed.

```marko
<draft/cart=$global.data.cart/>
<action/clearCart() { cart = [] }/>

<form method="POST" action="/cart" onSubmit=clearCart>
  <button disabled=clearCart.pending>Clear Cart</button>
</form>
```

Submit: `cart` becomes `[]` immediately. The router intercepts the native
POST, the server mutates and the followed redirect patches
`$global.data.cart`, and the draft is discarded against the confirmed
value — or against the unchanged value if the mutation failed. While any
of that is in flight, `clearCart.pending` is `true`. Without JavaScript,
the form posts natively.

## Transactions

Both tags are defined in terms of one runtime concept. A **transaction**
is the lifetime of a single user act:

- **opens** when an `<action>` is invoked, or lazily when an inline event
  handler makes a draft assignment;
- **is extended by** the invocation's returned promise (adopted
  automatically) and by hosts — the persisted router extends the
  transaction of any form/link event it intercepts until that navigation
  fully settles;
- **releases** when all of its promises settle, resolve or reject alike.
  Rejections keep their normal unhandled-rejection reporting; the
  transaction observes outcomes, never consumes them.

Transactions are client-only, are never serialized, and add nothing to
render scheduling: every effect below flows through the ordinary queue, so
a truth write and the release it triggers land in one flush (no
flicker frame).

## `<draft>`

```marko
<draft/cart=$global.data.cart/>
```

Declares an assignable tag variable that renders as its `value=` expression
(the **source**) except while transactions hold assignments to it.

- **Attributes:** `value=` only. The tag variable is required and must be
  an identifier (it is assignable).
- **Render / SSR / resume:** identical to `<const>` — the draft *is* the
  source. Nothing extra serializes.
- **Assignment** (valid only inside a transaction window, below) records
  that transaction's value for this instance and applies it synchronously —
  later reads in the same handler see it, and downstream renders queue
  normally. Re-assignment by the same transaction replaces its entry.
- **Source changes** pass through when no assignment is held; a held
  assignment wins until its transaction releases (the recorded source still
  updates underneath).
- **Release discards.** When a transaction releases, its entries are
  removed and the draft re-derives: the most recent still-held assignment,
  else the source. Dirty-checked — a guess the server confirms produces
  zero DOM work.
- **Drafts never write the source.** There is no commit path; truth
  arrives on its own channel (a patch, a state write from a response).
  This is the invariant that makes discarding always safe.
- **Concurrency:** entries are per-transaction, in write order. The idiom
  is to compose from the draft (`cart = [...cart, item]`), which layers
  correctly over earlier unconfirmed guesses; out-of-order releases show
  the remaining unconfirmed guess, then truth.

**Naming convention:** the draft takes the natural name (`cart`,
`entries`); the source is an expression or a qualified binding
(`$global.data.cart`, `cartData`). The value templates read everywhere
should be the one with the clean name.

### Assignment windows

Draft assignments join the transaction that is current:

1. **ambient** — code running synchronously during an action invocation or
   event dispatch, at any call depth (so a store helper called from a
   handler participates);
2. **lexical** — an `<action>` or inline handler body, including after
   `await` (the compiler captures the transaction at entry).

Anywhere else (timers, detached callbacks) is a debug-build error naming
the binding. A transaction that releases immediately while holding drafts
(sync handler, nothing extended it) is a debug warning — the guess was
discarded before it could matter — naming the fixes: make the body async,
return a promise, or rely on a router that extends.

## `<action>`

```marko
<action/addToCart(ev) { ... }/>          // callable tag variable
<action/save=async (ev) => { ... }/>     // any function value
<action/apply/>                          // no-op act (pending-only forms)
```

Declares a user act. The tag variable is the function itself, wired like
any handler (`onSubmit=addToCart`) or called imperatively from anywhere —
each invocation opens a transaction whose lifetime is the synchronous
body, the returned promise if any, and any host extensions.

- **Attributes:** `value=` only, optional (defaults to a no-op — useful
  when a form needs busy state but the router does all the work).
- **`addToCart.pending`** is a readonly reactive boolean: `true` while at
  least one invocation's transaction is unreleased (refcounted, so double
  submits and deliberately shared actions compose), `false` again when the
  last releases — including on rejection. Constant `false` during SSR.
- The callable's identity is stable — `.pending` flips never re-bind
  handler attributes. Reads compile through the binding's property-alias
  machinery like `input.x`; passing `action.pending` (the value) to a
  child is the normal cross-template rule.
- **Errors** are the body's to catch; an uncaught rejection releases the
  transaction (drafts discard, `.pending` resets) and reports as usual.
- Granularity is placement: declare an action inside a `<for>` row and
  each row observes its own act.

## Examples

Manual fetch (no persisted pages) — the handler owns the round trip:

```marko
<let/cartData=$global.data.cart>
<draft/cart=cartData/>
<let/error=null>

<action/addToCart=async (ev) => {
  ev.preventDefault();
  cart = [...cart, { productId: input.id, quantity: 1 }];
  try {
    cartData = (await submit(ev)).cart;  // truth from the response
    error = null;
  } catch (err) {
    error = err.message;                 // the draft is discarded on release
  }
}/>

<form method="POST" action="/cart" onSubmit=addToCart>
  <button disabled=addToCart.pending>Add to Cart</button>
</form>
<if=error><p>${error}</p></if>
```

Per-row acts:

```marko
<const/serverEntries=$global.data.cart.map(toEntry)>
<draft/entries=serverEntries/>
<for|entry| of=entries by=(e) => e.product.id>
  <action/remove() {
    entries = entries.filter((e) => e.product.id !== entry.product.id);
  }/>
  <form method="POST" action="/cart" onSubmit=remove>
    <button disabled=remove.pending name="_action" value="remove">
      Remove
    </button>
  </form>
</for>
```

Busy state with nothing to guess (persisted; server validates):

```marko
<action/apply/>
<form method="POST" action="/cart" onSubmit=apply>
  <input type="text" name="code" placeholder="Promo code">
  <button disabled=apply.pending name="_action" value="promo">Apply</button>
</form>
```

A guess with no pending UI needs no action at all — an inline handler's
implicit transaction carries it: `onSubmit() { cart = [] }`.

## Types

```ts
// <draft>
interface DraftInput<T> { value: T }        // tag variable: T (assignable)

// <action>
interface ActionInput<F extends (...args: any[]) => unknown = () => void> {
  value?: F;
}
// tag variable: F & { readonly pending: boolean }
```

## Cost

Zero when unused: the transaction runtime installs over the existing
self-modifying seams only when a template compiles either tag in; drafts
compile to `<const>` on the server; nothing serializes (SSR `.pending` is
constant `false`; transactions cannot predate resume). Combined budget for
both tags plus the transaction runtime: ≤1.0 kB min, enforced by
`.sizes.json`.

## Out of scope here

Specified or staged in `optimistic-updates.md`: `<try/pending>` and
placeholder continuity; the router extension handshake and navigation
lifecycle events; action concurrency modifiers (`drop` etc. —
ember-concurrency/htmx precedent); `.error`/`.input`/`.result`;
updater-function rebase; shared/store-level drafts; a submissions view.
