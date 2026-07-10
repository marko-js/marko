# Actions — grouping optimistic work by its dispatch: exploration

Status: **proposal layered on the reviewed composite — not yet
adversarially reviewed.** This document answers three questions raised
against [optimistic.md](./optimistic.md) after its round-2 sign-off:
should optimistic updates group into an "action" capturing everything
queued from the originating event; does the persisted round-trip become
a member of that action; and what do multiple in-flight actions look
like. The answers below respecify the composite's settle authority, so
until this model passes its own adversarial round (round 3),
[optimistic.md](./optimistic.md) remains the reviewed record and the
companion docs ([optimistic-handoff.md](./optimistic-handoff.md),
[let-by-review.md](./let-by-review.md)) are deliberately **not** yet
reconciled to it.

## The claim

The reviewed composite already contains exactly one action — it just
never names it. The global held-cell registry, the queue-empty gate,
and the per-frame settle fan-out together implement a single ambient
group called "everything currently outstanding": every guess joins it,
and nothing settles until all of it is done. Reifying **one action per
qualifying dispatch** is therefore not new machinery on top of the
composite; it is the composite's implicit group given identity,
multiplicity, and a lifetime API. Several pieces of round-2 machinery
exist only to compensate for the group being global, and fall away once
it isn't.

An action is born at most once per **task**, not per dispatch: a
dispatch chain — click handler → default action → submit dispatch → the
router's submit listener — runs as one task (the round-2 dispatch
fact), and must share one action, or a guess written in a button's
click handler could never coalesce with the round-trip the router
registers two dispatches later. "Captures all updates queued from the
event that started it" is precisely task scope. The window closes at
task end; an action still holding guesses but with no extenders by
then demotes (see "Writes with no ambient action"). An action owns
three things:

- **holds** — the optimistic cells guessed during its window;
- **lifetime extenders** — a reference count of outstanding work:
  the persisted round-trip, awaited boundaries, and anything user code
  adds via `waitUntil`;
- **pending surfaces** — the grain-2/3/4 pending states
  ([optimistic.md § Programmatic pending state](./optimistic.md)) keyed
  to it.

The action **settles** when its extender count reaches zero. Settling
releases its remaining holds (each held cell re-derives from source,
once) and flips its pending surfaces. This is the entire model; the
rest of this document is how each existing piece maps onto it.

## Everything is waitUntil

The unifying move — and why the `ExtendableEvent` analogy is the right
one rather than a loose inspiration: every source of "not done yet" is
the same operation, and the built-in drivers are just built-in callers
of it.

- **The persisted round-trip** is the router calling
  `action.waitUntil(responseApplied)` on the action born from the
  dispatch it intercepted — the `respondWith` of this model. The
  promise resolves when the response stream has fully applied, which
  the router already observes per fetch: each `navigate()` call owns
  its reader loop and falls out of it at stream end
  (persisted.ts:345-359), where it already dispatches
  `marko-run:navigate` (persisted.ts:366). No protocol change, no
  phase marker — the settle point round 2 proved unobservable _within_
  a stream is trivially observable at its end, per stream.
- **A re-awaited `<await>` boundary** is the runtime calling
  `waitUntil(counterZero)` — the round-2 boundary machinery
  (`render.j[branchId]` registration, in-place chaining of the live
  counter's `c`, fire-if-already-settled) survives verbatim, but its
  callback now decrements the owning action instead of firing a global
  fan-out.
- **User code** calls `waitUntil(promise)` explicitly to extend the
  action past its built-in work: a view transition or exit animation
  that should finish before pending UI clears, a dependent
  revalidation fetch, a socket acknowledgement. (Counter-example:
  fire-and-forget analytics should _not_ extend an action — it holds
  user-visible state hostage to invisible work.)

`waitUntil` follows the `ExtendableEvent` rule: callable synchronously
during the dispatch, or at any point while the action still has
outstanding extenders. Calling it on a settled action throws.

## The persisted round-trip as a member

Grounding against the router (`packages/run/src/runtime/persisted.ts`
on the persisted-pages branch):

- **Birth and membership fit in the synchronous prefix.** The round-2
  birth-window rule — queue-insert synchronously in the submit
  listener, before `navigate()`'s first `await` (the `?update` entry
  import at persisted.ts:250, a task boundary even when cached) — is
  subsumed: the _action_ is the queue entry. It is created during
  dispatch, the router registers its round-trip extender in
  `navigate()`'s synchronous prefix, and supersession of the previous
  in-flight navigation (`controller?.abort()`, persisted.ts:239) also
  happens in that prefix, so birth, membership, and supersede all
  resolve before the first task boundary. Nothing new to defend.
- **Completion is per-fetch, already observed.** Stream end is the
  action's round-trip extender resolving (persisted.ts:355-366).
- **Failure needs no special path.** Non-2xx patch responses apply in
  place — content-type decides, not status (persisted.ts:286-298) — so
  a rejected mutation still applies its truth, the extender resolves,
  the action settles, and every held cell re-derives to the
  server-rendered failure state. Rollback is the same code path as
  confirmation. The fallback ladder's terminal case (a real full
  navigation) unloads the page and moots the action.

## What this changes in the reviewed composite

Honest ledger — this section is what round 3 must attack.

**Settle authority moves from channel-quiet to action-complete.** The
composite settles held cells at "each applied frame, when the mutation
queue is empty" — a global condition. Under actions, a cell releases
when the _actions holding it_ settle, regardless of unrelated traffic.
This partially supersedes
[optimistic.md § Association, precisely](./optimistic.md): that
section argued per-interaction precision would require write-tagging
across the dispatch chain, `for=` plumbing, or mutation→data knowledge
the client doesn't have. Actions deliver per-dispatch precision with
none of those: writes still join the ambient dispatch (the same
synchronous window the birth-window rule already conceded), truth is
still attributed by channel (the response), and the only knowledge
claimed
is "this dispatch's response has fully applied" — which the client
observably has. What that section got right stands: individual writes
are never tagged, and no per-resource mutation→data mapping is
claimed. Its coarseness cost also shrinks: under sustained unrelated
mutation traffic (autosave, chat), a held guess no longer waits for
global quiet — only for its own action.

**Machinery deleted from the core:**

- per-frame settle fan-out as the settle authority, and its
  queue-empty gate;
- settle predicates as core machinery (demoted — see the latency
  trade below);
- the pass-generation guard as a standalone rule — it generalizes to
  two simpler statements: a settling action accepts no new members,
  and a write with no ambient action creates no hold (below). The
  `onPending` reentrancy loop it fixed cannot form when the write
  inside a settle pass has no action to join.

**Machinery kept verbatim:** the gate cell's three-path semantics
(exposed/shadow/held, emission/write/settle), the boundary-settle
hooks (`render.j` + in-place `c` chaining), the router's supersede
asymmetry, and all four pending grains — now keyed to the action as
their shared authority, which is itself a coherence win: round 2 left
settle _coarser_ than the pending grains (global vs per-form /
per-navigation); actions align them.

**The cost — settle latency.** Stream-done is later than
first-carrying-frame. A page whose update stream trails slow `<await>`
frames (a recommendations widget) keeps the cart badge's hold open
until the last frame, where the composite's per-frame predicate would
have released it at the frame that carried cart data. When the guess
matches the confirmed truth — the overwhelmingly common case — this is
invisible (re-derive is a dirty-checked no-op either way). When the
guess was wrong, the wrong value displays for the extra tail. The
recorded refinement path is to bring the round-2 predicate machinery
back _scoped to the owning action_ — early-release a hold at the first
of its action's frames whose apply satisfies the predicate — which is
additive and changes no API. Build the simple version first; fixture
A7 measures whether the tail matters in practice.

## Multiple in-flight actions

The direct answer to "what does multiplicity look like", split by
driver because the router already answers half of it.

**Router-driven actions never truly overlap.** The router enforces at
most one _applying_ navigation: a later `navigate()` aborts the
superseded fetch — except mutations, which run to completion
server-side and only have their application dropped, unread past the
abort check (persisted.ts:236-239, 278, 350). So multiplicity among
router actions is a supersede chain, not concurrency; under the F2
refinement (mutations queue), queued actions are pending-but-inert
until their fetch starts. Client-only actions (no router member) are
truly concurrent and unbounded.

**Same cell, several actions: reference-counted holds.** A held cell
records the _set_ of actions holding it, not a flag. Guesses are
last-write-wins while held (each write is an ordinary assignment
against the exposed value, so stacked guesses compose naturally:
add-to-cart twice exposes `count+2` via two `count++` writes). The
cell releases — re-derives from source, once — when the set empties.
This is React's answer too (`useOptimistic` reverts only when every
transition that touched it completes), and it is what makes **replay
unnecessary**: React's reducer-form `useOptimistic` exists to replay
pending updates over newly-confirmed base state mid-flight, but a
compiled Marko write is an assignment, not a captured update function
— there is nothing to replay. Hold-until-all-settle plus
re-derive-at-end reaches the same eventual truth without a new
execution model. The inherent residue: if action 1 of 2 _fails_, the
stacked guess stays exposed until action 2 settles, then snaps to the
truth reflecting one success — optimism without per-resource
server-stamped versions cannot do better, and the pending grains flag
the window.

**Supersession inherits the router's asymmetry:**

- A **superseded mutation** happened server-side; its own response is
  dropped, and its truth arrives through the superseding navigation's
  response (the server renders post-mutation state). Its holds and
  pending keys therefore **transfer** to the superseding action — no
  release, no rollback flicker, truth on arrival.
- An **aborted navigation** (link click superseded by a link click)
  never landed and never will; its holds **release immediately**
  (guesses roll back to the unchanged truth) and its pending surfaces
  clear. Holding an abandoned guess until an unrelated action
  completes would be wrong, and the reference-count handles the
  overlap: a cell also held by the superseding action stays held.
- A **superseded client re-await** (the R-F10 shape: two dispatches
  re-award the same boundary; the `thisPromise` guard means the old
  promise fires neither params nor catch) follows the mutation rule —
  the new promise _is_ the replacement truth path, so transfer, not
  release. Weakest analogy of the three; flagged for round 3.

**The grains under multiplicity** mostly answer themselves:

- _Nav context_ stays singular by construction — at most one router
  action is ever applying, so `{pending, url, method}` needs no list
  form. Supersession swaps its target in `navigate()`'s sync prefix.
- _`<form-status>`_ keys each form element to the set of actions born
  from its submits: a double submit keeps it pending until both settle
  (the second supersedes the first mutation, transferring its keys, so
  the set collapses to one).
- _`onPending(p)`_: `p` is the action created or joined by the write
  that fired the callback, so `p.waitUntil(...)` composes — the cell
  author can extend the very interaction that guessed through it.
- _`<try|{ pending }|>`_ params follow the boundary's current promise
  exactly as specced; the boundary's completion decrements whichever
  actions extended on it.

## Writes with no ambient action

Not every optimistic-cell write happens inside a dispatch: timers,
socket pushes, code reacting inside another action's settle pass. Such
a write creates **no hold** — the guess exposes immediately (writes
are ordinary assignments) but the next source emission overwrites it,
per the gate's not-held emission path. An action that reaches the end
of its task with guesses but **no extenders** demotes to the same
state: its holds become plain exposed writes (no rollback flash — the
guess simply stops being defended). Under `MARKO_DEBUG`, warn in both
cases: a write that nothing will confirm is almost always a bug (a
socket push should feed the _source_, not guess past it). This rule is
also what
retires the pass-generation guard, and it answers async handlers: a
write after the handler's first `await` has left the dispatch and does
not join the action (the platform gives no ambient async context to
track it with — the same reason `ExtendableEvent` scopes `waitUntil`
to dispatch-or-extended). Whether a `waitUntil`-extended action should
re-admit writes made inside its extenders' continuations is recorded
as open — it wants `AsyncContext`, which the platform doesn't ship.

## Fixtures

Lettered to avoid colliding with optimistic.md's numbered list; these
become the acceptance tests if round 3 upholds the model.

- **A1 — stacked guesses, one cell.** Two add-to-cart submits, same
  cell: exposes `+1` then `+2`; releases once, after the second
  action settles; final value is server truth for both.
- **A2 — unrelated actions settle independently.** A slow add-to-cart
  and a fast like-button in flight together: the like's cell releases
  at its own action's completion; the cart hold and the cart form's
  pending survive it untouched. (The composite's global queue-empty
  gate fails this one — the discriminating fixture.)
- **A3 — mutation superseded by navigation.** Submit, then click a
  link before the stream ends: the mutation's holds transfer; no
  rollback flicker; truth arrives with the navigation's response.
- **A4 — navigation superseded by navigation.** Optimistic tab
  highlight for click A, then click B: A's hold releases immediately
  (highlight reverts), B's guess stands, B's response confirms.
- **A5 — waitUntil extends past the stream.** A view-transition
  promise added in the handler: cells stay held and `<form-status>`
  stays pending until the animation resolves, though the response
  fully applied earlier.
- **A6 — rejected mutation rolls back through settle.** Non-2xx patch
  response applies in place; the action settles; the guessed cell
  re-derives to the server-rendered failure state — no dedicated
  rollback path executed.
- **A7 — settle-latency tail.** Update stream with a slow trailing
  `<await>` frame; a wrong guess on data the _first_ frame carried:
  measure the wrong-value window under action-complete settle, as the
  evidence for (or against) the scoped-predicate refinement.
- **A8 — no-ambient write.** A `setTimeout` write to a held-elsewhere
  cell and to an idle cell: no hold created, debug warning fires, next
  emission overwrites the idle cell's guess.

## Open questions

1. **The `waitUntil` surface.** Candidates: the nav-context handle
   (grain 2) growing `waitUntil`; `onPending`'s `p` (decided above);
   and — for plain handlers with neither in scope — a module import
   from `@marko/run` reading the ambient dispatch. The last is the
   contentious one and the naming question rides on it.
2. **Async-handler membership** (`AsyncContext` dependency, above).
3. **Transfer vs release for superseded client re-awaits** — the
   weakest of the three supersession rules; round 3 should attack it.
4. **Scoped-predicate early release** — build only if fixture A7 says
   the latency tail is real.
5. **F2 interaction** — mutations queued but not yet fetching: their
   actions are born held and pending with one extender whose work has
   not begun; confirm the reference-count representation covers
   "extender registered, work not yet begun" without a special state.
6. **Devtools identity** — actions are the natural unit for tracing
   ("this guess is waiting on this fetch + this animation"); what do
   they expose?
