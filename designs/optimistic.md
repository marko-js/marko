# `<optimistic>` — interaction-scoped optimistic cells: exploration

Status: **design exploration — not built, not signed off.** Companion to
[let-by-review.md](./let-by-review.md) (finding F1, which motivates
this) and [persisted-pages-optimistic-transitions.md](./persisted-pages-optimistic-transitions.md)
(whose layer 3 this would replace for the pending-confirmation shape;
`<let by=>` remains the in-progress-input shape per
[let-by.md](./let-by.md)). Seeded by a control-tied sketch from the
2026-07-09 review discussion; this document works out what the DX

```marko
<optimistic/likes=post.likes/>

<button onClick() { likes++; like(post.id) }>❤️ ${likes}</button>
```

actually requires, for **both** drivers: persisted pages (mutation →
PRG → update frames) and client-side async transitions (a re-running
`<await>` tag under the existing `<try>`/`<@placeholder>` machinery).

## The one-sentence architecture

An optimistic cell is a **gate between the canonical channel and its
readers**: derived-at-rest (between interactions it *is* its source,
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
   re-render, `$global` re-run per apply, await params firing):
   recompute the source expression into **shadow**. If not held →
   expose it (dirty-checked). If held → consult the **settle
   predicate** (below); if confirmation is no longer outstanding,
   expose shadow and clear held; otherwise keep holding.
2. **Write** (`likes++` compiles through the cell's
   `buildAssignment`): exposed = value, held = true, queue downstream
   renders. No association bookkeeping happens here — see below.
3. **Settle notification** (boundary/router fan-out): if held and the
   predicate is now clear → exposed = shadow, held = false,
   dirty-checked downstream. A correct guess settles as a **no-op** (6
   === 6); a rejected mutation re-derives to the unchanged truth — the
   visible rollback, with no rollback API.

The settle predicate, per driver, is "is confirmation still
outstanding?":

| driver                    | predicate                                            | settle notification                                                        |
| ------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| persisted mutation        | router mutation queue non-empty (the F2 state)       | router calls the runtime once when the final pending response's stream completes |
| client re-await           | the feeding boundary's re-await pending (`AwaitCounter`) | boundary settle fans out to held cells registered on the branch            |
| neither (unassociated)    | always clear                                          | next emission lifts the hold (`let-global`'s semantics as the fallback)     |

### Association, precisely: cells bind to confirmation channels, not writes to interactions

The direct answer to "how does the system know which optimistic updates
belong to which interaction": **it deliberately never does.** A write is
never tagged with an interaction. Instead, each *cell* is bound —
statically, from its source expression's dataflow — to the **channel its
truth arrives through**: the feeding `<await>` boundary when the source
is a body param, or the persisted delivery pipeline when the source is
`input`/`$global`-derived. Settle is then a property of the channel, not
of any interaction: a held cell lifts at the first truth arrival at
which its channel has nothing further outstanding (boundary not
re-pending; router mutation queue empty).

Why interaction identity is dispensable:

- **Truth is attributed by channel, not by cause.** Whichever
  interaction triggered the mutation or re-await, the authoritative
  value for this cell arrives through the same channel the cell already
  reads — so "my confirmation arrived" and "my channel emitted while
  quiet" are the same event.
- **Ordered mutations make "quiet" sufficient.** Under F2, mutation
  responses apply in order, so when the queue empties, the latest
  delivered truth reflects *every* settled interaction — settling all
  held cells against it is correct regardless of which interaction
  wrote what.
- **The coarseness is delay-only, never wrongness.** The one imprecision
  is persisted-side: the queue predicate is global, so a held cart cell
  won't settle while an unrelated wishlist mutation is still pending —
  its reconciliation waits a beat longer, then lands on truth that
  reflects both. That coarseness is arguably *honest* for
  server-derived data: while any mutation is outstanding, any server
  value may be about to change, and no client-side bookkeeping can know
  otherwise (which mutations affect which data is server knowledge).
  Client-side the predicate is already per-channel (each boundary
  counts its own awaits), so unrelated boundaries never couple.

Per-interaction precision would require exactly the machinery this
model exists to avoid — tagging writes with transitions (task-scoped
capture across the click→submit dispatch chain, `for=` ref plumbing) —
and would buy only earlier settling in the concurrent-unrelated-mutation
case, at the cost of claiming knowledge (mutation→data dependencies)
the client doesn't have.

### Why predicate-at-emission, not write-association

The review's first pass at this (and the seeding sketch's `for=`)
associated **writes** with transitions — which needs task-scoped write
capture (a click handler's write precedes the submit event that creates
the navigation), ref plumbing that breaks in loops (N tab links, one
cell) and across templates (the cart cell lives in the layout provider;
the forms don't), and an escape hatch for programmatic submits. The
gate model deletes all of it: the write only marks the cell held; the
question "which transition settles this?" is answered **at emission
time** by asking the platform whether confirmation is still
outstanding. The router's mutation queue is one module read; the
feeding boundary is one scope read. No batches, no brackets, no `for=`
in v1. (`for=`/explicit association returns only if a real app needs a
predicate the platform can't infer — custom `fetch` flows that neither
navigate nor re-run an await.)

The predicate is also what a version key or settle token was
hand-encoding, and it is the only shape that survives the
rejected-mutation case: "no news" and "news: the same value" are
indistinguishable in the data channel (dirty-checks swallow the
latter), so *some* out-of-band pending signal must exist. Putting it in
the platform — which already tracks it — is the entire trick.

## Walk-through: persisted driver

`<optimistic/likes=$global.data.post.likes/>` (or an `input`-threaded
source), like button in a `POST` form the persisted router intercepts.
Assumes F2 (mutation ordering + queue) from the review.

1. Resume: exposed = shadow = 5.
2. Click: handler runs `likes++` → exposed 6, held; the form submit
   rides the router (queue: 1). Downstream re-renders now — the button
   shows 6 in the click's own frame.
3. The PRG response streams. Frame 1 merges the `serializedGlobals`
   partial — a fresh `data` object — and the registered
   `$global`-mixing statements **re-run unconditionally per apply**
   (the `addUpdateGlobalsStatement` machinery), so the cell's source
   emission fires even when the value is unchanged. Shadow ← delivered
   truth (6 accepted / 5 rejected). Predicate: queue non-empty → keep
   holding.
4. Stream completes → router marks the mutation settled; queue empty →
   one runtime call fans out to held cells → predicate clear → exposed
   = shadow. Accepted: 6 === 6, silent. Rejected: 6 → 5 re-renders —
   rollback, alongside whatever error content the response rendered
   (non-2xx patches deliberately apply in place, `persisted.ts:286-298`).

**Sparse-delivery compatibility** (why the shadow slot matters): an
update render prunes unchanged values — a rejected mutation's response
may carry *no fill at all* for an input-chain source. Then no emission
fires, shadow still holds the pre-write truth (5), and the settle
fan-out exposes it — correct by exactly the "absent means unchanged"
contract the wire already has. `$global`-sourced cells emit per apply
regardless; input-sourced cells fall back to the shadow. Both converge.

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

1. Click: exposed 6, held; `refreshGen++` re-runs the awaited
   expression → the boundary goes pending (`_await_promise` →
   `addAwaitCounter`). With `<@placeholder by=>` extended to the client
   driver (review F3), `id` unchanged → **keep stale + pending signal**,
   no skeleton flash; today's keyless behavior would recede after the
   rAF grace — either way the cell is orthogonal to the placeholder
   policy.
2. Resolve: `resolveAwait` fires the params with a **fresh `post`
   object** (`control-flow.ts:169-176`) — object identity differs every
   resolve, so the emission reaches the cell even when `likes` is
   numerically unchanged. Shadow ← truth.
3. Ordering fact that shapes the design: params fire **before**
   `awaitCounter.c()` settles the boundary (`control-flow.ts:169-185`),
   so at emission time the predicate still reads pending. The cell
   therefore registers itself on the feeding branch (a `HeldCells` set —
   `subscribeToScopeSet` in `dom/signals.ts:275` is the existing
   pattern), and the counter-zero path notifies it. Predicate clear →
   exposed = shadow.
4. Double-click before resolve #1: resolve #1's emission finds the
   boundary pending *again* (re-await #2 in flight) → keep holding;
   resolve #2 settles. Same rebase behavior as the persisted driver.

**Finding the feeding boundary** is compile-time work in the common
case: the source expression's references include an await-param binding
of a lexically enclosing boundary section, so the translator passes
that boundary's accessor to the cell. Cross-template feeding (a
context-provided cell whose source is another template's param) needs
the cross-template reason-threading spike `context.md` already names —
v1 is lexical, and an unresolvable feed degrades to the unassociated
rule.

**Catch:** a failed re-await settles the boundary through the catch
path with no params emission. Proposed rule: the settle notification
still fires; a held cell keeps its guess (shadow unchanged), and the
next successful emission reconciles — the guess over an error banner
beats snapping to stale truth mid-error. Needs a fixture either way.

## What each layer requires

- **Compiler** (`translator/core/optimistic.ts`, shaped like `let.ts`):
  tag variable required; `value=` (default attr) required; no body; no
  `by=`. Analyze: a writable-derived binding — assignments allowed
  (reuse the `let` assignment plumbing / `buildAssignment` →
  `_optimistic_write`), but the source expression compiles **into the
  cell's own signal function** subscribed to the source's references —
  not through an intermediate memoized `<const>`, whose dirty-check
  would swallow same-value emissions (worth a lint when the source is
  just an alias of one). A cell with **no assignments anywhere**
  compiles as a plain `<const>` — the tag costs nothing until it's
  actually written. Downstream readers classify as state-mixing —
  which the persisted compiler already handles correctly: holes
  downstream of client state re-invoke against **live** state during
  applies rather than writing captured values (pinned by
  `persisted-update-csr-race`), so a held overlay is never clobbered
  mid-apply by construction.
- **DOM runtime** (`dom/optimistic.ts`, its own module for
  tree-shaking): `_optimistic(accessor, boundaryAccessor?, fn)` — the
  gate signal (emission/write/settle paths above), `_optimistic_write`,
  and the held-cell registration. Budget: in the low hundreds of bytes
  min, riding only bundles that use the tag.
- **Boundary machinery** (the one genuinely new hook): a `HeldCells`
  set on the try/await branch scope, notified at `awaitCounter.c()`
  reaching zero, at `_update_branch` body commit (the persisted driver
  of the same boundary), and on catch-settle. Small (a Set, one fan-out
  loop), and it is the same "boundary settled" moment the review's F3
  pending-signal layer wants to expose as `aria-busy` clearing — build
  it once, two consumers.
- **Run router**: F2's mutation queue (already a prerequisite) plus one
  integration point: call the runtime's settle entry when the final
  pending mutation's response stream completes. Note the timing choice:
  stream-completion is conservative — a slow unrelated `<await>` on the
  page holds the stream open and delays settle; if that bites in
  practice, refine to "the response's synchronous frames applied +
  queue empty", with boundary-nested sources already covered by their
  own body-commit emissions.
- **The wire: nothing.** No new serialization class, no dedicated
  delivery, no echo. The source rides the channels it already rides
  (value merges, globals partial, boundary body frames); the cell's
  exposed slot serializes for resume exactly as a written `<let>`
  would (standard serialize-reason analysis — a server render never
  holds an overlay, so there is nothing else to ship). This is the
  practical payoff of derived-at-rest: `<let by>`'s persisted plan
  needed a new unconditional serialize reason and a merge dispatch
  (let-by.md compiler item 5); the optimistic cell needs neither.

## SSR / resume

The server renders the source value like a `<const>` — no special
behavior, no key slot. The exposed slot serializes when client code
reads/writes it (ordinary reasons). Resume registers the cell signal
like any let; `held` always starts false (a server cannot render a
guess).

## Fixtures

1. Client driver: write → held; param emission with pending boundary →
   still held; counter-zero settle → re-derive; equal-value settle is a
   no-op (no downstream renders — assert via render counts).
2. Client driver, double re-await: no intermediate value renders.
3. Catch-settle: guess retained; next successful emission reconciles.
4. Persisted driver (feature branch): accepted mutation (silent
   settle), rejected mutation with sparse response (no fill → shadow
   fallback → rollback renders), overlapping mutations (no intermediate
   value), unrelated GET mid-flight (emission holds; later settle
   reconciles).
5. Unassociated write: lifts on next emission (any navigation).
6. No-assignment cell compiles byte-identical to `<const>`.
7. Composition: provider `<optimistic>` + writable `<context>` +
   consumer writes from a form — the cart shape end-to-end, deleting
   `let-global` in the benchmark app.

## Open questions

1. **Name.** `<optimistic>` is self-documenting and matches industry
   vocabulary; `<guess>` is shorter; the tag-variable read
   (`<optimistic/likes=…>`) should drive the choice.
2. **Memoization swallowing**: lint (or see through) sources that are
   bare aliases of a memoized `<const>`, where equal-value emissions
   die before reaching the gate.
3. **Persisted settle timing**: stream-completion vs response-scoped
   (the slow-unrelated-boundary hazard above).
4. **Catch semantics**: hold-the-guess (proposed) vs re-derive-stale.
5. **Cross-template boundary feeding**: rides the shared
   reason-threading spike (`context.md`); v1 lexical.
6. **Does `for=`/explicit association ever return?** Only if real apps
   produce confirmations the platform can't see (custom fetch that
   neither navigates nor re-awaits); leave out until demonstrated.
7. **Interaction with `<let by>`**: none by design — different shapes
   (fork-at-rest vs derived-at-rest); the docs teach the split
   (let-by-review.md F1). Confirm no template needs both on one value.
