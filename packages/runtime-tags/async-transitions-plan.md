# Async Transitions — Design Plan

Goal: when a state write kicks off async work (a new promise flowing into an
`<await>`), keep the currently rendered UI in place — no placeholder, no
detach — while still committing unrelated updates immediately. DOM updates and
effects that are "entangled" with the async work commit only once the promise
fulfills (and no other entangled work is outstanding).

This is the client-side analogue of React's `useTransition`, built on Marko's
existing signal/queue machinery.

## Constraints from the current architecture

These facts (from `src/dom/`) shape the whole design:

1. **Eager, interleaved rendering.** A `<let>` write immediately mutates the
   scope (`signals.ts` → `_let`) and queues one `PendingRender` for its
   downstream render function. When that runs (`queue.ts` → `runRenders`), it
   performs DOM writes for its own section *inline* (`_text`, `_attr`, …) and
   propagates to other scopes by queueing more renders (`_closure`,
   `_if_closure`, `_for_closure`, `_or`). There is no separate commit phase to
   hold back.

2. **We only learn a chain is "async" at the end of it.** `_await_promise`
   receives the new promise *after* every upstream render in the chain has
   already run and written to the DOM. Any design must therefore either
   (a) undo those writes, or (b) buffer all DOM writes speculatively.

3. **The flush is synchronous and pre-paint.** `run()` drains the heap inside
   a microtask/rAF-message tick (`schedule.ts`). Anything we write *and revert
   within the same drain* is never painted. This makes an undo approach
   invisible to the user.

4. **Hold/replay primitives already exist.** The pending-await machinery
   already defers renders targeting a pending branch
   (`BranchScope[PendingRenders]`, replayed in `_await_promise`'s resolve
   path), defers effects under an active `AwaitCounter`
   (`queue.ts` → `handlePendingTry` → `PendingEffects`), dedupes replayed
   effects (`awaitCounter.m` + the `fnScopes` map in `control-flow.ts`), and
   parks live DOM off-screen (`tempDetachBranch` / `DetachedAwait`). We reuse
   all of these patterns.

5. **Reads are plain property accesses.** `scope[valueAccessor]` cannot be
   intercepted per-reader, so "the UI shows old values" is only consistent if
   the *scope values themselves* are old during the transition. This decides
   the rollback semantics below.

## Chosen approach: provenance tracking + same-flush rollback + replay-on-resolve

High level: let the write propagate eagerly (so the promise is created with
the *new* values and async work starts immediately). Track which root writes
each render was caused by. When an `<await>` receives a new promise during the
flush, its provenance roots become **entangled**. At the end of the same drain
— before paint — restore the entangled roots to their previous values and
re-run their downstream chains, repainting the old UI. The new values are
parked in a **Transition** record. When the promise fulfills, re-apply the new
values and re-run, committing for real.

Because entangled scope values are physically old during the transition,
unrelated updates that flow through *shared* downstream computeds still render
consistently (new-unrelated + old-entangled) without any special casing. This
is the main payoff of value rollback over DOM-write buffering.

### Semantics (matches React transitions)

- During a transition, event handlers and computeds read the *old* values
  (the new value only lives in the transition record). `count++` twice during
  one in-flight transition yields the same "stale read" behavior as React's
  non-updater `setState` — document this; an updater-form escape hatch can
  come later.
- A new write reaching the same `<await>` supersedes: the existing
  `thisPromise === scope[promiseAccessor]` guard already ignores stale
  resolutions. The transition's `prev` for a root is kept from the *first*
  write (roll back to the truly-visible value), `next` is last-write-wins.
- Unrelated writes commit immediately, always.
- A placeholder (`<try @placeholder>`) is only used when the await has no
  committed content yet (initial render / resume). Updates to an await with
  live content become transitions. (Optional later: a `timeout` after which
  we fall back to the placeholder.)

## Runtime changes

### 1. Provenance on `PendingRender` (`queue.ts`)

- New `PendingRenderProp.Roots: Opt<WriteRecord>` where

  ```ts
  type WriteRecord = {
    scope: Scope;
    signal: SignalFn;      // the let's downstream render fn
    accessor: Accessor;    // value accessor
    prev: unknown;         // captured at first write
    next: unknown;         // last write wins
    transition?: Transition; // set once entangled
  };
  ```

- Module-level `currentRender` set inside `runRender`. `queueRender` called
  while `rendering` unions `currentRender[Roots]` into the queued render —
  including the dedupe early-return path (a render re-queued from a second
  root must merge root sets). Use the existing `Opt`/`push`/`toArray` helpers
  from `common/opt.ts` since the single-root case dominates.
- All of this is installed via a self-modifying `_enable_transition()` (same
  pattern as `_enable_catch`) referenced by `_await_promise`, so apps without
  awaits pay nothing.

### 2. Capture writes (`signals.ts`)

In `_let`'s non-`rendering` branch (and `_let_change`): before assigning,
create/refresh the `WriteRecord` (capture `prev` only if the accessor isn't
already recorded this flush or in an active transition) and attach it as the
root of the queued render. Writes made *during* rendering (re-entrant sync
writes) inherit `currentRender`'s roots naturally.

### 3. Thunked promise expression (translator, small but critical)

Today the compiled call is
`_await_promise_signal($scope, resolveAfter($scope.clickCount))` — the user's
expression (often a `fetch`) executes at the call site. Rollback and commit
both re-run that call site, which would fire spurious fetches.

Change `core/await.ts` (the `signal.build` / `addValue` wiring around
`translator/core/await.ts:199-220`) to pass a thunk:
`_await_promise_signal($scope, () => resolveAfter($scope.clickCount))`.
`_await_promise` evaluates the thunk only when it actually wants a fresh
promise — and *skips evaluation entirely* during the rollback and commit
drains (module flag `replaying`). This is the mechanism that guarantees the
async work runs exactly once per real write. It also incidentally enables
future retry/refresh features.

(Note: the compiler statically knows `valueExpr.extra.referencedBindings` for
every `<await>` — see "Future optimization" below.)

### 4. Transition creation in `_await_promise` (`control-flow.ts`)

When called during `rendering` with a new promise and the await branch already
has committed content:

- Walk `currentRender[Roots]`; for each `WriteRecord` not yet entangled, mark
  it and attach it to a `Transition`:

  ```ts
  type Transition = {
    roots: Set<WriteRecord>;
    i: number;                 // outstanding entangled awaits (AwaitCounter pattern)
    effects: unknown[];        // held forward-pass effects (for dedupe on commit)
  };
  ```

  If a root already belongs to a live transition, merge (union roots, keep
  that transition). Multiple awaits reached from one flush share one
  transition; `i` counts them; commit fires when `--i === 0` ("no other
  dependencies entangled").
- Register the transition on the await scope
  (`AccessorPrefix.Transition + nodeAccessor`) for supersede/resolve/destroy
  lookup.
- **Do not** show the placeholder and **do not** schedule the rAF
  `tempDetachBranch` — the old content stays live. Keep
  `awaitBranch[PendingRenders] ||= []` so updates targeting the *inside* of
  the await branch are held and replayed on resolve (existing behavior).
- No provenance roots (e.g. initial `queueAsyncRender` flushes, resume) →
  existing placeholder/detach behavior, unchanged.

### 5. Rollback phase in `run()` (`queue.ts`)

After `runRenders()` drains, if any `WriteRecord` became entangled this flush:

1. `runId++` (so the dedupe-slot `Gen` check doesn't swallow the re-queues).
2. Set `replaying = 1`; for each newly entangled root: `scope[accessor] = prev`
   and `queueRender(scope, signal, id)`.
3. Drain again. Downstream `_const`/`_closure` guards see the value change and
   repaint the old UI; `_await_promise` thunks are skipped, so no promise is
   touched. This all happens before the browser paints (constraint 3), so the
   intermediate new-UI DOM state is never visible.
4. Effects partition (below), then run effects once.

### 6. Effects (`queue.ts`)

Forward-pass effects queued by entangled renders reference rolled-back DOM and
must not run now. In `runRender`, when the render has roots, record
`[startIndex, roots]` markers into a side array as effects are appended (only
range bookkeeping — no per-effect allocation). At partition time, move effect
ranges whose roots are entangled into `transition.effects`; rollback-pass
effects run normally (they re-wire the restored old UI). On commit, replay
`transition.effects` deduped against the commit flush's own effects using the
same `fnScopes` map technique as `_await_promise`'s `awaitCounter.m` handling
(`control-flow.ts:188-205`).

### 7. Commit / supersede / errors

- **Fulfill** (in the existing `promise.then` handler): if `--t.i` is 0,
  inside the `queueAsyncRender` callback: for each root
  `scope[accessor] = next`, queue its signal, set `replaying = 1` so await
  thunks don't re-fire; the await itself is driven directly via the existing
  `resolveAwait(...)` with the fulfilled data + `PendingRenders` replay.
  Then release held effects (deduped) and clear the transition.
  If the commit rerun reaches a *different* await (a waterfall), its thunk is
  not skipped (different node, no transition entry) — a new transition chains
  and the UI keeps holding. That's the desired cascading behavior.
- **Supersede**: a later flush whose chain hits the same await joins the
  transition (step 4), replaces `scope[promiseAccessor]`, and the stale
  fulfillment is ignored by the existing identity check.
- **Reject**: commit the entangled values first (state must be consistent with
  the promise that failed), then the existing `renderCatch` path.
- **Await branch destroyed mid-transition** (unrelated update removes the
  subtree): commit immediately — apply `next` values and re-run; there is
  nothing left to wait for. Hook via the branch abort signal
  (`abort-signal.ts` / `destroyBranch`), same as `subscribeToScopeSet`
  cleanup.

### 8. Entangled branch swaps (`<if>` / `<for>` on the entangled path)

Phase 1: accept that rollback re-runs `setConditionalRenderer` / the loop
reconciler, so a branch toggled by an entangled value is destroyed and
recreated twice (forward → rollback, and again on commit), losing internal
`<let>` state. Correct, just not stateful.

Phase 2: when the swap is driven by an entangled render, park the outgoing
branch with `tempDetachBranch` (the `DetachedAwait` pattern) instead of
destroying it; rollback re-inserts it (state intact), commit destroys it. Same
for keyed loop branches.

## What does NOT change

- HTML/SSR runtime and streaming: untouched. Resumed pending awaits
  (`resume.ts` `render.p` → `AwaitCounter`) keep current behavior — a resumed
  boundary has no committed client content to hold.
- Initial client render of an `<await>`: placeholder/detach behavior as today.
- `caughtError`, `placeholderShown` flows.

## Known caveats to document

- Stale reads during a transition (React parity; see Semantics).
- Rolling back a controlled `<input>` value same-flush is DOM-invisible for
  paint but can clobber selection/cursor if the input is focused
  (`controllable.ts`) — detect and skip rollback writes when the live value
  already matches, which the `_attr` value guards mostly give us for free.
- MutationObservers will see the write+rollback churn.
- `_or`-joined signals must merge provenance like everything else (they go
  through `queueRender`, so this falls out of step 1, but needs a fixture).

## Future optimization: static entanglement

The translator already knows each await's `referencedBindings` transitively.
Once the runtime model works, the compiler can pre-mark signals that feed
awaits, letting `_let` route a write's downstream DOM writes into the held set
*up front* (no forward render + rollback double-run) for the statically
analyzable cases — falling back to the runtime provenance mechanism across
dynamic tags and runtime closure subscriptions. Not needed for correctness.

## Implementation phases

1. **Provenance infra** (`queue.ts`): `Roots` on `PendingRender`,
   `currentRender`, merge-on-dedupe, `_enable_transition()` gating. No
   behavior change; unit-testable alone.
2. **Write capture** (`signals.ts`): `WriteRecord` in `_let`/`_let_change`.
3. **Thunked await value** (`translator/core/await.ts` +
   `_await_promise` signature): snapshot updates across await fixtures.
4. **Transition + rollback**: entangle in `_await_promise`, second drain in
   `run()`, skip placeholder/detach when content exists.
5. **Effects partition/hold/dedupe-replay.**
6. **Commit/supersede/reject/destroy paths.**
7. **Branch parking (phase 2)** for stateful entangled `<if>`/`<for>`.
8. **API surface decision** (see open questions).

## Test plan (fixtures under `src/__tests__/fixtures/`)

- `transition-basic`: `<let>` drives text + `<await>`; while pending, old text
  and old await content stay; unrelated `<let>` updates commit; on resolve,
  everything commits together.
- `transition-supersede`: second click mid-flight; only final state commits.
- `transition-multi-await`: one write feeding two awaits; commits only after
  both fulfill (counter join).
- `transition-shared-computed`: unrelated write flowing through a computed
  that also reads entangled state → paints new-unrelated/old-entangled.
- `transition-if` / `transition-for`: entangled branch swap, both phases.
- `transition-effects`: `_script`/event wiring held and deduped.
- `transition-reject`, `transition-destroy`: error and unmount mid-flight.
- `transition-placeholder-initial`: placeholder still used on first render.
- Resume variants mirroring `await-update-after-resume`.

## Open questions

1. **Opt-in vs default.** Is holding-the-old-UI the new default for client
   await updates (recommended — placeholder only when there's nothing to
   hold), or opt-in per boundary (`<try transition>`) / per write
   (`startTransition`-style batch API)?
2. **Placeholder timeout** for slow transitions?
3. **Pending-state exposure** — an equivalent of React's `isPending` (e.g. a
   tag var on `<try>` or `<await>`) so UIs can show inline spinners?
4. Phase-2 branch parking: is preserving internal state of entangled branches
   a requirement or nice-to-have?
