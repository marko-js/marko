# Optimistic updates & transitions for persisted pages — design

Companion to [persisted-pages-brief.md](./persisted-pages-brief.md) (the
model), [persisted-pages-architecture.md](./persisted-pages-architecture.md)
(fragments, possession echo, and the implementation record this document
interacts with), and [persisted-pages-roadmap.md](./persisted-pages-roadmap.md)
(the deferred placeholder-recede design this document interacts with).
Status: **design draft — nothing here is built.**

## The problem

Between the user's intent (a link click, a form submit) and the patch
applying, a persisted page gives no feedback and cannot respond locally.
The model is deliberately server-authoritative — a navigation is the
current page receiving new input, and the server is the only place data
is fetched — so the latency of a round trip sits between every
interaction and its visible result. SPAs answer this with client data
layers and optimistic mutation APIs (React `useOptimistic`, TanStack
mutations); we need an answer that spends **no** app-owned JavaScript for
the common cases and never forks the source of truth.

Three observations scope the design:

1. Most of what users perceive as "slow" is not the round trip; it is the
   **absence of immediate acknowledgment**. Pending states and visual
   continuity are perception tools that cost nothing semantically.
2. The compiler's ownership analysis already draws exactly the line an
   optimistic system needs: client-owned state (never patched) vs
   server-derived values (only ever patched). An optimistic update is a
   **provisional client-side shadow of a server-derived value** — the
   only new thing is the reconciliation rule for when the authoritative
   value arrives.
3. Marko already ships a working miniature of that rule: **controllable
   inputs**. Typed text is client-interim state that the server later
   confirms or overrides through `_default` replays
   (`_attr_input_value_default` in `dom/controllable.ts`),
   arbitrated by the live scope's own generation stamp (`Gen < runId`) —
   a narrower, differently-shaped gate than the `Gen >= applyGen` seed
   gate `<let>` initializers use, not literally the same one (see layer
   3's "Controllable unification" open question — unifying them is future
   work, not already true today). The design below generalizes the
   pattern, not the specific gate.

The proposal is three layers, independently shippable, in increasing
order of machinery. Layers 1–2 are pure perception (no semantic change,
near-zero bytes); layer 3 is the semantic piece.

## Layer 1 — pending states (platform-first, zero app JS)

The run client router (`packages/run/src/runtime/persisted.ts`) already
intercepts clicks, GET/POST form submits, and popstate — but it dispatches
exactly **one** lifecycle event today (`marko-run:navigate`), and only
once, after a navigation's entire frame stream has finished reading (the
`dispatchEvent` call sits after the stream-reading loop, not inside the
`applied = true` branch that fires on the _first_ frame). There is no
event today at click time, at first-frame-apply, on fallback, or on
abort. Surfacing the in-flight window is therefore not just "surface what
already fires" — it needs two small, concrete additions to `navigate()`'s
control flow, at points that do already exist there:

- While a persisted navigation is in flight, the router sets
  `data-marko-pending` on the **initiating element** (the `<a>` or
  `<form>`) and a document-level marker (attribute on
  `document.documentElement`). Both are removed when the first frame
  applies — the `applied = true` branch inside the frame-reading loop,
  well before the final `dispatchEvent` — and on fallback/abort.
- Neither `onClick` nor `onSubmit` currently passes the source element
  into `navigate()` (POST forms are the one exception: the mutation tuple
  already carries `form` for resubmission). Implementing this means
  threading an `initiator` element through `navigate()` and tracking it
  in a module-level slot next to the existing `controller`, so a new
  navigation's `controller?.abort()` step can also clear the _previous_
  call's attributes — today a superseded fetch's `if (signal.aborted)
return` bails with no cleanup of any kind, which is also where the
  detach-on-abort case has to live (the superseded call itself never
  gets a chance to run cleanup code after that point).
- Forms additionally get `aria-busy="true"` for the duration —
  accessibility feedback for free. The router does **not** currently
  suppress double submission in the general case: `resubmitting` is a
  narrow reentrancy guard used only while the fallback ladder hands a
  failed mutation back to the browser (`requestSubmit`), not a guard
  against a user double-clicking the same submit button while its first
  request is still in flight — nothing in `onSubmit` checks for that
  today, and since mutation fetches are deliberately never given the
  abort signal, a real double-click currently fires two independent
  POSTs. The pending-element tracking this layer adds makes a real guard
  cheap (ignore a submit/click on an element that already carries
  `data-marko-pending`) — worth folding in here rather than shipping the
  attribute without the behavior its name implies.

```css
form[data-marko-pending] button {
  opacity: 0.5;
}
html[data-marko-navigating] .progress-bar {
  transform: scaleX(0.8);
}
```

Cost: one module-level element slot plus a handful of `setAttribute`
calls at the four points above (`navigate()` entry, first-frame-apply,
the two fallback branches); zero app JS; no compiler involvement. This
also gives the placeholder-recede design (`persisted-pages-roadmap.md`)
its interim answer for the "stale content while frames stream" window:
apps can dim or overlay the page today, before any recede mechanism
exists.

Non-goals here: no JS API surface beyond the existing events; no
promise/props exposure of navigation state into templates (that would be
client-side data-layer creep — templates react to _applied_ input, not
to transport state).

## Layer 2 — View Transitions (platform-native visual continuity)

The patch applier is already shaped correctly for the
[View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API):
`createUpdate`'s returned per-frame apply function (`dom/update.ts`) runs
`applyScopes`, the compiled merge, and a synchronous `run()` flush with no
`await` anywhere in between, so one frame's DOM mutations land inside one
synchronous callback — exactly the shape `document.startViewTransition(callback)`
wants. Two caveats worth stating precisely rather than assuming away:
`run()`'s synchronous flush covers ordinary renders and effects, but
`queueAsyncRender` (used by `load=` lazy tags and `<try>` catch-render, see
`dom/queue.ts`/`dom/load.ts`) defers via `queueMicrotask`, so a frame that
touches one of those settles _after_ the transition's synchronous callback
returns and won't be captured in that transition's "new" snapshot — narrow,
but real. And "first frame" is not a distinguished moment in the router's
current loop: `navigate()` can read several complete lines out of one
`buffer.split("\n")` pass and applies each with the same `applyLine`, so
wrapping only the first means special-casing index 0 there, not just handing
an already-isolated call a callback wrapper.

- **First frame:** `document.startViewTransition(applyFirstFrame)` when
  available and enabled. The browser snapshots old/new and cross-fades;
  `view-transition-name` in app CSS opts specific elements into morphs
  (product image flying to the cart, list reorder animations) — again
  CSS-only for the app.
- **Subsequent streamed frames** (async boundary bodies, additional
  fragments) apply without a transition by default: `startViewTransition`
  snapshots once and cannot span an open-ended stream, and late frames
  are usually small fills. The exception worth its own transition is the
  **placeholder → body swap** (`applyBoundaryBody`) — the same site the
  recede design targets — where a per-swap transition gives streamed
  sections the "settle in" treatment. Watch for collisions here: two
  `<await>` boundaries resolving close together (the ecommerce item
  page's three sections land 500/900/1200 ms apart, which is comfortable,
  but a page with faster or bursty boundaries would not be) each start
  their own transition, and the platform's rule for a second
  `startViewTransition()` call while one is still active is to skip the
  first outright — so a fast-arriving second frame can visibly cut off
  an in-progress swap animation. Queuing on the previous transition's
  `.finished` promise is the fix if this proves visible; not needed for
  v1 given the measured boundary spacing.
- **Fallback ladder unchanged:** a full navigation falls out of the
  persisted path entirely and can use native cross-document view
  transitions (`@view-transition { navigation: auto }`) — the MPA story
  browsers already own. Same-document and cross-document transitions
  therefore stay consistent in the degraded case.

Gating: there is no way to read whether the app's CSS opted into
transitions (the `@view-transition` at-rule is not queryable), so
same-document transitions are enabled by an explicit run option
(strawman: `marko({ persisted: { transitions: true } })`), defaulting
off. `prefers-reduced-motion` must suppress the default cross-fade (the
router checks the media query; per-element morphs are the app's CSS
responsibility, as on any site). TypeScript types are a non-issue here —
the run package's `tsconfig.json` already sets `lib: ["DOM", ...]` under
TypeScript 6, which ships `ViewTransition`/`startViewTransition` types —
but `ViewTransition.skipTransition()` needs an explicit mention: a
superseded navigation must call it on any in-flight transition it
started, since `controller?.abort()` only cancels the fetch/apply, not a
visual transition already mid-animation. Without it, a stale cross-fade
can finish playing over content a later navigation has already replaced.

Interaction with layer 1: the pending attributes come **off** inside the
transition callback, so "pending → new content" is itself part of the
animated change.

Prior art and adjacent platform surfaces worth citing rather than
reinventing silently: the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API)
(`navigation.intercept()`/`NavigateEvent`) is the eventual substrate for
all of this — it composes natively with View Transitions and would
replace the router's hand-rolled click/submit/popstate listeners with a
single interception point; `persisted-pages-roadmap.md` already flags
this as "a small router upgrade worth taking when support allows," and
this design should defer to that rather than build its own
parallel-but-incompatible event model. Separately, [Speculation Rules](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)
prefetching currently has **no interaction** with persisted navigation
worth assuming: a `speculationrules` prefetch targets a full document
fetch, while the router performs its own `accept: text/marko-patch`
fetch on click — the two are unrelated requests, so a configured
speculation rule buys nothing for a persisted link and may just add
wasted bandwidth. Worth a line so nobody assumes prefetch "just works"
here; not a blocker for this design.

Cost: ~a few hundred bytes in the router, behind the option; zero compiler
work; zero bytes for apps that don't enable it.

## Layer 3 — optimistic state: the server-tracked `<let>`

### The gap, concretely

The model says client state is never patched and server values are never
client-written. Real interactions want a value that is **both**: a cart
count that bumps instantly on click _and_ is owned by the server. Today
that shape desyncs: seed a `<let>` from `input.cartCount` and the patch
updates `input` but — correctly, by the client-ownership rule — never
touches the `<let>`, so the optimistic bump becomes permanent drift. The
benchmark app's `let-global` tag (re-syncing mirrors of `$global.data`
off the `marko-run:navigate` event) is a hand-rolled escape hatch and the
clearest evidence the primitive is missing.

### Proposal

State identity keying — the same concept `<for by=>` already uses for
loop reconciliation, applied to `<let>` via a `by=` attribute that keys
the instance. While the key's value stays the same across a re-render —
a client-side re-render, _or_ a persisted apply delivering new
request-derived values — it is the same instance and local writes
survive untouched, exactly like a keyed `<for>` row that hasn't moved.
When the key changes, it is a **different** instance: the `<let>`
re-initializes from `value=`, discarding whatever was written locally.

```marko
<let/cartCount=input.cartCount by=input.cartCount/>

<button onClick() {
  cartCount++;            // instant, local, provisional
  fetch cart form / PRG…  // the mutation rides the existing form path
}>Add to cart</button>
```

The cart counter keys on the value itself — the count _is_ its own
identity, so any server-confirmed change looks like a new instance and
wins. The more general shape keys on something narrower than the value,
the same way a `<for>` row keys on an id while its other fields change
underneath it:

```marko
<let/draft=item.text by=item.id/>

<textarea value:=draft/>
```

`item.id` staying put across a navigation (the same row, re-rendered with
a fresh `item.text`) means the user's in-progress edit survives even
though the server's copy of the text changed; `item.id` changing (a
different row) means `draft` re-seeds from the new item's text.

This is deliberately **not a persisted-only feature**. `<let by=>` solves
the ordinary client-side "reset local state when a prop identifies
something new" problem (an accordion seeded per item, a draft that must
not survive switching to a different record) that today has no answer
short of a keyed `<if>` remount or a hand-written effect. Persisted
navigations get the same semantics for free because a navigation already
_is_ a re-render with new input — the reconciliation rule below is
`<let by=>`'s general behavior, not a special case bolted on for the
network. That generality cuts the other way too: it needs its own
language-level review as a client-side reactivity primitive, independent
of whether this document's persisted-specific layers ship at all.

Semantics:

- Renders and behaves as ordinary client state between navigations —
  writable, fine-grained, participates in the signal graph. Nothing new
  client-side at rest; omitting `by=` is today's `<let>`, completely
  unchanged (seed once, `value=` never revisited after mount).
- Both `value=` and `by=` compile like any request-derived expression:
  the compiler records their sources, and update renders **always
  deliver both** for a keyed let (patch-refreshable _by declaration_, an
  explicit opt-out of "client state is never patched" — which is why it
  needs an attribute a plain `<let>` doesn't have rather than a silent
  behavior change).
- **Reconciliation rule — key identity, not value diffing:** the client
  remembers the last-_applied_ key per keyed let (one slot on the scope,
  surviving across navigations the same way a matched scope's other
  client state does). When an apply — or a client-side re-render —
  delivers a key that differs from that stored key, the let is a new
  instance: it re-initializes from `value=` and stores the new key. When
  the delivered key matches, it is the same instance: local writes
  persist and the delivered `value=` is discarded. For
  `by=input.cartCount` the key _is_ the count, so this collapses to
  "reset when the server's count actually differs from the last one this
  let saw" — which makes the PRG loop converge in the common case: click
  → local bump → POST → redirect → patch delivers the new authoritative
  count as both key and value → it differs from the last-applied key →
  the let re-seeds to it (usually equal to the optimistic guess;
  corrected if not). An unrelated navigation that redelivers the same
  count as last applied leaves in-progress local state alone. Comparison
  is SameValueZero, not `===` — `Map`'s own key-equality algorithm,
  mirroring the `Map` lookup keyed `<for>` already builds per diff in
  `dom/control-flow.ts` (`oldScopesByKey`, `.get(key)`): a primitive key
  compares by value, an object key by reference, so a freshly-constructed
  object literal as `by=` resets on every apply — the same discipline
  `<for by=>` already requires of app authors, not a new footgun this
  feature introduces. (See "Multi-mutation races" below for a real hole
  in this rule's convergence that the router's own concurrency semantics
  create.)
- The wire/runtime split is _adjacent_ to the existing seed path, not a
  reuse of it. Today's seed channel (`_state_reason()` /
  `$global.persistedSeed`) only goes live on cross-route navigations
  (`state.seed`, stamped from an `x-marko-from` route-pair mismatch — see
  `persisted-pages-architecture.md`'s "State seeding" section), and
  `_update_seed`'s `Gen >= applyGen` check exists specifically to
  _exclude_ matched (pre-existing) scopes — "matched scopes keep their
  live state untouched" is the hostile-patch guarantee that whole
  mechanism is built to preserve (`dom/update.ts`). A keyed let needs the
  opposite on both axes for the common case (a header cart-count badge is
  a matched scope surviving a same-route PRG redirect): delivery on every
  update render regardless of route match, and a merge that _targets_
  matched scopes instead of skipping them. So the new pieces are (a) an
  unconditional serialize reason for `by=`/`value=` on a keyed let,
  independent of `state.seed`'s cross-route gating, (b) a merge dispatch
  that bypasses `Gen >= applyGen` for keyed lets specifically, replacing
  it with the key-identity check above as the sole staleness guard, (c)
  the client's last-applied-key slot per keyed let.

### Propagation — shared optimistic state

`by=` answers _reconciliation_ for one instance; it says nothing about
_sharing_. The benchmark app's cart is the canonical counter-example: the
optimistic write happens in any of several add-to-cart forms, and the
read is in one distant place (the header badge) — one value, many
writers, readers elsewhere in the tree. Marko state is lexically scoped
to its template and the language has no context primitive today, so
cross-template state is either threaded through attrs or shared through
module scope. A keyed let in each form would be N private counters, not
one cart.

What the benchmark app does today (`src/tags/let-global.marko`, ~25
lines) is the honest baseline, and it composes existing pieces:

- **`$global.data` as the shared store** — already server-derived,
  already delivered on every update render (the `serializedGlobals`
  partial), already readable everywhere.
- **A module-scope pub/sub registry** keyed by data key, because
  `$global` is not a signal: assigning `$global.data.cart` notifies no
  reader. Each instance's write re-runs every other instance's mirror
  through the registry — this is the entire hand-rolled part.
- **`<return=value valueChange(...)>`** — each `<let-global/cart="cart">`
  returns a writable bound variable, so consumers read and write it like
  any tag variable, from any template.
- **Reconciliation off `marko-run:navigate`** — when a persisted apply
  merges fresh `$global.data`, every mirror re-reads (an
  over-approximation: the event fires once per navigation, after the
  whole stream, not at the moment globals merge).

Note which halves the platform already covers: _server-initiated_
`$global` changes reach the page fine (delivered globals plus the
registered mixed-statement re-runs). What the pattern hand-rolls is
(a) _client-initiated_ writes propagating to other readers, and (b) the
reconciliation moment. Directions, in increasing commitment:

1. **Bless the pattern (v1).** Document `let-global` as the recommended
   shape for shared optimistic state, and give it the one hook it lacks:
   the applier knows exactly when `serializedGlobals` merge, so run can
   expose that moment (a `marko-run:globals` event or equivalent),
   letting the pattern drop its after-the-whole-stream approximation. No
   language change, no new bytes for apps that don't use it.

   **v1.5 — re-run `$global`-referencing effects on update (BUILT).** The
   deeper
   version of the same hook, at the language layer instead of the router:
   under persisted, `$global` reads are request-derived sources for every
   OTHER reader class (holes re-patch by value, mixed render statements
   re-run through the update-globals channel) — effects are the one class
   that stays stale, which is a model gap, not a principled exclusion
   (verified empirically: with `let-global`'s navigate listener removed,
   a cart-page Remove re-renders the page body — `<const>` reader — while
   the header badge's `<let>` mirror keeps its stale count). Extending
   the update-globals channel to queue registered effect statements whose
   direct references carry global sources would close it: `<script>
value = $global.data[input.value] </script>` re-runs frame-accurately
   when the global partial lands, `$signalReset` already aborts the prior
   `$signal` on re-run (so listener-attaching effects clean up under the
   existing contract), and the apply-created-scope gate keeps fresh
   scopes from double-running (their setup effects ride payload effect
   entries). Same every-navigation over-approximation as the event
   (`$global` is not a signal; no per-property diffing), but per-frame
   timing and zero app wiring. Lazy reads inside closures stay excluded,
   so it is opt-in by how the effect is written.

   Landed as `_script_refresh` (dom/queue) plus the general rule that
   request-derived value merges route through the binding's signal when
   ANY effect reads it (`bindingNeedsUpdateSignal` counts effect reads,
   and matched-scope effects queue during applies -- the fresh-scope
   skip narrowed to `Gen >= applyGen`). Pinned by
   `persisted-update-script-retrigger` (the `$global` mirror) and
   `persisted-update-effect-value` (effect-only consumer of a
   request-derived input).

2. **Promote to `<context>` (v2) — now its own plan.** The promoted
   path is a keyed `<let>` in the persistent layout **provided via a
   context primitive keyed by tag identity** — see
   [context.md](./context.md) for the full actionable plan (one core
   tag, provide/consume modes, `from=` resolving a provider template
   through existing tag discovery, reactivity through the signal graph,
   no `$global` coupling, no pub/sub, no event listener). That
   composition deletes `let-global` outright and is co-designed with
   persisted pages (one-site capture/merge, consumers re-run
   client-side for zero extra patch bytes, fragment-resume story).
   Writable provides use `:=` — legitimately there, because the
   provider's own assignment IS the change handler.

The unifying frame for this whole layer: an optimistic value is a
**state cell with a declared identity and a server-reconciled seed**.
`by=` declares the identity per scope instance; the shared cell declares
it per page-level key. One reconciliation rule serves both, and the
propagation question is only ever "who else can see the cell", never a
second consistency model.

### Rollback and failure

There is deliberately **no rollback API**. Truth arrives on every apply:
a failed or rejected mutation ends in either an error response (→
fallback ladder → full navigation, which rebuilds from server truth) or a
successful render whose delivered key/value reflect what the server
actually did — the provisional value is overwritten either way. This is
the same posture as the hostile-patch rules: the client never has to
reason about "undo", only about "the authoritative value arrived". Apps
that want explicit error UX use ordinary server rendering of the error
state (flash messages, field errors) — content, not client protocol.

### Rejected alternatives

- **`:=` as the tracking marker** (an earlier strawman for this doc):
  the wrong primitive, not just a syntax bikeshed. `:=` is Marko's
  existing bind shorthand — sugar for `value=x valueChange=setX`, i.e.
  the _parent_ takes ownership of writes and the child reports changes
  upward (see the language reference's
  [Controllable Let](https://markojs.com/docs/reference/core-tag/#controllable-let)).
  A keyed let has no change handler anywhere; writes stay local. Reusing
  `:=` would read as two-way binding to something that isn't bound to
  anything.
- **Form-declared deltas** (htmx-style `<form optimistic="cart+1">`): a
  second, stringly mutation language duplicating what an event handler +
  writable state already express; and it couples the form to the shape of
  server state.
- **Making every seeded `<let>` re-seed on delivery**: silently breaks
  "client state survives by construction" (an accordion seeded from a
  server default must NOT snap shut on navigation). Tracking must be a
  visible, opt-in declaration — `by=` rather than an implicit default.
- **A client mutation queue / outbox** (offline-first): abandons the
  stateless-server, no-client-data-layer premise. Out of scope by
  charter; the fallback for connectivity loss remains ordinary browser
  navigation behavior.

### Open questions (decide before building)

1. **Syntax**: the attribute name is **decided — `by=`** (see
   let-by.md's open question 1 for the full record: `by=` rejected for
   same-word-different-shape confusion with `<for by=>`, `resetOn=` for
   being two words, `key=`/`identity=` runners-up). Remaining sign-off
   is the general two-expression form (`value=` and `by=` naming
   different things) reading clearly next to each other.
2. **Does an omitted `by=` need a default beyond today's behavior?**
   Proposal: no. A plain `<let>` without `by=` stays exactly what it is
   now — seed once, `value=` never revisited — so the feature is purely
   additive and every existing template is unaffected.
3. **Must `<let by=>` behave identically on an ordinary client-side
   re-render (a parent passing new `by=`/`value=` with no navigation
   involved) from day one, or can it ship persisted-only first?**
   Proposal: identical from day one — a language feature that only
   works over the wire, and does something else (or nothing) for a
   plain re-render, would be incoherent, and this is exactly the
   generality argued for above. That means the reactive-key comparison
   needs its own client-side signal (comparing an incoming key to the
   last-applied key on ordinary input changes) independent of the
   persisted merge path in `dom/update.ts` — real runtime work, not a
   free side effect of the persisted machinery.
4. **Controllable unification**: controllables are the same pattern with
   DOM-held state; long-term the keyed-let reconciliation and the
   controllable `_default` replay should share one gating story instead
   of two differently-shaped generation checks (see the problem
   statement's correction above).
5. **Multi-mutation races can silently drop the authoritative response,
   not just delay it.** The router's rule that mutations are "never
   aborted, only superseded" (`persisted.ts`) means a superseded
   mutation's response is never read: `navigate()` bails at
   `if (signal.aborted) return` before touching the stream, so the PRG
   redirect that would have delivered the corrected key/value is thrown
   away, not queued. Concrete sequence: bump #1 (5→6 locally, POST
   fires) gets superseded — by bump #2's own `navigate()` call, or by an
   unrelated GET clicked before bump #1's redirect returns — so bump
   #1's response is dropped unread. If the surviving navigation's
   delivered key happens to equal the _last-applied_ key (5, since bump
   #1's delivery never landed), the "same key → local writes persist"
   half of the rule protects the client's guess (6), which is fine as
   long as some later navigation eventually delivers a genuinely
   different key. But if none ever does, the client is left permanently
   showing an unconfirmed local guess with no delivery left that can
   revisit it — the exact "persistently wrong" outcome the invariants
   below rule out. This is not simply the router's existing
   concurrent-navigation UX choice (which page content wins) — it's a
   correctness gap specific to keyed lets, since ordinary matched-scope
   values have no "same as before → keep local" branch to get stuck in.
   Needs either mutation responses' key/value surviving supersede
   independent of whether their DOM application is skipped, or another
   fix; decide before building.
6. **Does layer 3 need the input echo?** Precise recede/transition
   scoping (only animate/flash what actually changed) wants the
   input-identity echo sketched in the recede design's third gating
   model — shared infrastructure, shared decision.
7. **Shared-state path** (propagation section): whether v1 — the
   blessed `let-global` pattern plus a globals-merge hook from run — is
   worth shipping at all, or whether [context.md](./context.md) lands
   soon enough that the interim step is skipped. The context plan's own
   open questions (its `from=` literal syntax, reason-threading
   prototype) gate that call.

## Phasing

1. **Pending attributes + `aria-busy`** (run router; tiny, no compiler) —
   ship first; unblocks real-app styling feedback immediately.
2. **View Transitions behind a run option** (router-only) — first frame +
   boundary-body swaps; cross-document fallback documented.
3. **Placeholder recede** — already designed and deferred, see
   `persisted-pages-roadmap.md`; its gating decision (auto-slow vs opt-in
   vs input echo) should be made together with layer 2 since both animate
   the same sites.
4. **Keyed `<let by=>`** — compiler + runtime slice with the persisted
   fixture matrix (drift repro first: `value=`/`by=` + local write +
   navigation must go red without the feature), plus the client-side
   reactive-key runtime that open question 3 requires. Covers the
   per-instance half of the benchmark app's needs; the shared half stays
   on the blessed pattern below until v2 is earned.
5. **Shared-state v1** — document the `let-global` pattern and ship the
   globals-merge hook (run router; tiny). The benchmark app's cart is
   the acceptance test: its pattern drops the `marko-run:navigate`
   listener for the precise hook and keeps working under the validation
   suites. Evaluate promoting the shared cell (open question 7) only
   after this has real-app mileage.
6. **Input echo** (shared with recede model 3 / T2 pruning) — only if
   phases 2–5 prove the need for per-site precision.

## Invariants this design must not break

- Non-persisted builds byte-identical **for templates that don't use
  these features**. Layers 1–2 and the persisted-delivery half of layer 3
  ride persisted-only chunks or the run router, unconditionally. `<let
by=>`'s client-side reactive-key runtime is different in kind: it's a
  general language feature like `<for by=>`, so it costs bytes in _any_
  build, persisted or not, exactly when a template uses it — same as any
  other tag. Byte-identical still holds per-template for everything that
  doesn't opt in.
- The server stays stateless; nothing here adds per-client server state
  (the echo variants remain request-scoped hints).
- Client state preservation stays compiler-derived: keyed lets are the
  _only_ client state a patch may write, and only by declaration.
- The fallback ladder ends every failure in a full navigation with
  correct content — optimistic UI may be momentarily wrong, never
  persistently wrong. (Open question 5 above is a real gap against this
  invariant as currently scoped; not yet resolved.)
