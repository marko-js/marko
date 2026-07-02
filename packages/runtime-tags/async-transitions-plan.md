# Async Transitions — Design Plan

Goal: when a state write kicks off async work (a new promise flowing into an
`<await>`), keep the currently rendered UI in place — no placeholder, no
detach — while still committing unrelated updates immediately. Anything
observable (DOM mutations, effects) derived from entangled state is queued and
applied only once the promise fulfills and no other entangled work is
outstanding.

This is the client-side analogue of React's `useTransition`, built on Marko's
existing signal/queue machinery.

## Model: eager compute, deferred observable commit

State propagation runs exactly as it does today — eagerly, once, with the
latest values. `<let>` writes mutate scopes immediately, downstream signals
recompute immediately, control flow reconciles immediately (new branch scopes
are created and set up, loop diffs are computed). **No signal work is ever
re-executed or rolled back.** What changes is that the *observable tail* of
that work — DOM node swaps, attribute/text writes, effects — is recorded into
a commit log instead of applied directly, and the log is partitioned at the
end of the flush:

- Entries whose provenance is **entangled** with a pending `<await>` are moved
  into that transition's hold buffer.
- Everything else applies immediately, in order.

Scope state is therefore always latest (event handlers, computeds, and new
promise expressions all see current values — `count++` twice mid-flight yields
2), while the DOM and effects for entangled regions stay frozen at the last
committed state until the promise resolves.

### Why a commit log is required

Entanglement is discovered at the *end* of a chain: `_await_promise` receives
the new promise only after every upstream render already ran. Since signal
functions interleave computation with DOM writes (`_text`, `_attr`, branch
swaps are called inline from render fns), the only way to "un-apply" without
re-running signals is to not have applied yet. So while a flush is draining,
observable operations are logged rather than performed; the flush ends
(pre-paint, `schedule.ts` guarantees this) with a single pass that applies the
non-entangled portion. For apps with no in-flight transition and no await hit
during the flush, the entire log applies — the common case is one extra array
iteration.

## Entanglement rules

**Definition.** A *unit* is a (scope, stable signal fn) pair — the granularity
at which renders execute and at which reads happen. A *root* is a `<let>`
write that initiated propagation this flush.

1. **Discovery.** Every queued render carries its provenance roots (see
   Provenance below). When `_await_promise` receives a new promise during a
   flush, the current render's roots become entangled in a `Transition`.
   Everything *fanned out from those roots* — not just the path to the await —
   is entangled, because it read the new values.
2. **Partition.** At flush end, log entries recorded by units whose roots are
   entangled move to the transition's hold buffer. Each held unit is also
   marked persistently for the life of the transition.
3. **Spread by read.** While a transition is live, a unit is entangled if it
   is already marked **or** any of its current provenance roots is entangled.
   The marked-unit check is what implements "anything that reads from an
   entangled value must be entangled": any unit subscribed to an entangled
   value necessarily ran during the entangling flush (that's how
   subscriptions fire) and got marked, so a later re-run triggered by an
   *unrelated* root through the same unit is still held — it would otherwise
   paint the new entangled value it reads.
4. **Last-run-wins.** The hold buffer is keyed by unit. When an entangled unit
   re-runs (a newer write, or an unrelated trigger), its newly logged entries
   *replace* its held entries. Values are eager, so the latest run always
   reflects the latest state; on commit, each unit applies exactly once.
5. **Join / merge.** One flush entangling several awaits produces one
   transition with a counter (`i`/`c`, the existing `AwaitCounter` pattern);
   commit fires when the last one fulfills ("no other dependencies
   entangled"). If a unit or root already held by transition T1 becomes
   entangled under T2, merge T1 into T2 (union roots/units/buffers, sum
   counters). Module-level `activeTransitions` list; length is almost always
   0 or 1.
6. **End.** On commit, apply the hold buffer, clear marks belonging to this
   transition, leave other transitions' marks alone.

### Entangled-values registry

Unit marks cover units that already exist, but three consumers need to ask
"is this *value* entangled?" for values they are about to read: fresh
branches setting up closures, `$pending()`, and `$eager()` (below). Roots give
us the source `<let>`s, but derived values (`_const`, params) written
downstream must be queryable too.

Value writes during rendering flow through helpers (`_const`, the
`rendering` path of `_let`, params/closure setters), so while transitions
are enabled each unit's written `(scope, accessor)` pairs are appended to
the flush log alongside its ops. At partition time, values written by
entangled units are registered as entangled for the transition (cleared on
commit). `isEntangled(scope, accessor)` consults the active transitions'
registries — the list is almost always length 0 or 1.

### Fresh branches that render entangled values

A branch mounted mid-transition by *unrelated* control flow would otherwise
render latest values next to frozen siblings. Instead: when closure setup /
`subscribeToScopeSet` in a new branch resolves an owner `(scope, accessor)`
that `isEntangled(...)`, the branch's mounting unit — the parent's
structural slot op — joins the transition. The branch stays offscreen
(already built, already set up; its ops sit harmlessly in the hold buffer)
and inserts at commit. Reads wrapped in `$eager()` are excused from this
check, so a branch can opt into mounting immediately with torn values.

## Provenance (`queue.ts`)

- `PendingRenderProp.Roots: Opt<WriteRecord>`, where a `WriteRecord` is
  `{scope, accessor, transition?}` — no `prev` value needed since nothing
  rolls back.
- `_let` / `_let_change` (non-`rendering` path) create/reuse the flush's
  `WriteRecord` and attach it to the queued render.
- `runRender` exposes the executing render; `queueRender` called while
  `rendering` unions the current render's roots into the queued render —
  including the dedupe early-return path (a render re-queued from a second
  root must merge root sets). Use the existing `Opt`/`push`/`toArray` helpers
  since the single-root case dominates.
- **Unit identity.** Slot-keyed renders (`signalKey >= 0`) already have a
  stable key (`scopeId * 1e3 + signalKey`). Closure fan-outs
  (`_closure`, `_for_closure`, `_for_selector`, `_if_closure`) queue fresh
  wrapper fns with `signalKey -1`, but each holds its stable underlying fn as
  `._`; they additionally iterate child scopes. These helpers set the
  *current unit* to `(childScope, fn)` around each child invocation so ops are
  attributed per child scope with a stable identity across re-runs.

## The commit log

Installed by a self-modifying `_enable_transition()` (same pattern as
`_enable_catch`), invoked from the `_await_promise` factory — apps without
awaits pay nothing. Interception uses the codebase's existing
mutable-exported-binding convention (`_dynamic_tag`, `runEffects`,
`runRender` are already reassigned this way); internal callers must route
through the mutable chokepoints.

Two op flavors:

### 1. Value ops — append-ordered, replayable triples

Flat `(fn, target, ...args)` array per unit (same shape as `pendingEffects`).
Chokepoints in `dom.ts` / `controllable.ts`:

- `setAttribute` (covers `_attr`, `_attr_class`, `_attr_style`, spreads)
- `_attr_class_item`, `_attr_style_item`
- `_text`, `_text_content`
- controllable value/checked/open writers
- `_lifecycle` (constructor/`onMount`/`onUpdate` are user-observable side
  effects; the whole call is logged as an op)

Applying the log runs the original implementations. Duplicate writes to the
same node across log entries are harmless — later entries win by order.

### 2. Structural slot ops — keyed by (scope, nodeAccessor), target-state based

Branch swaps can't be logged as raw DOM mutations (insert/remove aren't
idempotent and interleave badly across re-runs). Instead each structural
helper splits into an **eager phase** (scope bookkeeping, branch creation —
`createBranch` already builds offscreen, `setupBranch` runs and its writes log
against detached nodes harmlessly) and a **DOM phase** that records *target
state* into a slot:

- `setConditionalRenderer` (`_if`, `_dynamic_tag`, `_attr_content`, `_try`):
  eager: create + set up the new branch, update
  `scope[BranchScopes + accessor]`. Slot record: `{visible, pending}`. A
  superseding re-run destroys the never-inserted `pending` branch (safe:
  offscreen) and replaces it. Commit: insert `pending`, remove + destroy
  `visible`. **Destroy of the visible branch is deferred**, which is what
  keeps the old UI live: its scopes stay subscribed, so unrelated values
  rendering inside it keep updating on screen, while entangled values inside
  it are held by rule 3.
- `loop` (`_for_*`): eager: build `newScopes`, run params, update
  `scope[scopesAccessor]`. Slot record keeps `visibleScopes` (what the DOM
  shows) from the first entangled run; re-runs only replace the latest
  target list. Commit: run the existing diff/LIS DOM phase from
  `visibleScopes` → latest, destroy branches that are in neither.
- `_html`: eager: `parseHTML` + scope accessor updates; DOM phase (the
  `insertChildNodes`/`removeChildNodes` pair) deferred via slot.
- `_await_promise`'s own branch resolution (`resolveAwait`) participates the
  same way when nested transitions interact.

On commit, apply structural slots first, then value ops, then effects —
though slot semantics make this largely order-insensitive (value ops on nodes
inside a pending branch work offscreen; ops on nodes inside a
soon-to-be-removed branch are wasted but harmless).

### Effects

`queueEffect` calls from entangled units go to the unit's hold bucket
(replaced on re-run like ops). On commit they replay deduped against the
commit flush's own effects using the same `fnScopes` map technique as the
existing `awaitCounter.m` handling (`control-flow.ts:188-205`). Event wiring
(`_attrs_script` → `_on`) rides along since it is already effect-based.

## `_await_promise` changes (`control-flow.ts`)

When called during `rendering` with a new promise, provenance roots present,
and an already-committed await branch:

- Entangle roots into a transition (create/merge), `t.i++` for this await,
  register the transition on the await scope
  (`AccessorPrefix.Transition + nodeAccessor`).
- **Skip** the placeholder path and the rAF `tempDetachBranch` — old content
  stays live and interactive.
- The `awaitBranch[PendingRenders]` mechanism is not needed for transition
  updates: entangled updates inside the branch are held by unit marks,
  unrelated ones should keep applying (an improvement over today's
  hold-everything).
- The promise expression evaluated once, eagerly, with latest values — since
  nothing re-runs, there are no spurious fetches. (The earlier rollback
  design needed a thunked promise argument; the core mechanism no longer
  requires compiler changes — only the `$eager()`/`$pending()` helpers do.)
- **Supersede aborts:** when a newer promise replaces a pending one, fire an
  abort for the superseded work (via the existing `abort-signal.ts`
  machinery / a per-await `AbortController` exposed as `$signal` inside the
  promise expression) so users can cancel stale fetches instead of letting
  them race to a no-op.

No committed content (initial render, resume) → existing placeholder/detach
behavior, unchanged.

### Lifecycle

- **Fulfill:** existing `thisPromise === scope[promiseAccessor]` identity
  check ignores superseded promises. On the winning fulfillment,
  `queueAsyncRender` a commit: mark the transition committing, run
  `resolveAwait` + params with the data (their downstream applies directly —
  the committing transition's units no longer hold), apply the hold buffer
  (slots, ops), replay held effects deduped, `--t.i === 0` gates all of this
  when several awaits joined; clear marks.
- **Supersede:** newer entangled write → new promise, replaced hold entries,
  same transition continues; the stale fulfillment is a no-op.
- **Reject:** state is already latest (eager), so first apply the hold buffer
  (UI becomes consistent with the state that produced the failing promise),
  then the existing `renderCatch` path swaps in the catch boundary.
- **Await region removed by an unrelated update**, or the await's own slot's
  pending target no longer contains it (an entangled `<if>` removed its own
  await): nothing left to wait for — commit the transition immediately. Hook
  branch teardown via the abort-signal machinery, but note deferred destroys:
  the check is against pending targets, not just live branches.

## User-facing API: `$eager()` and `$pending()`

Two `$`-prefixed compiler-known identifiers (the `$signal`/`$global`
convention) give users control over entanglement:

- `$eager(() => expr)` — evaluate the thunk against current (eager) state and
  render its result immediately, *without* entangling the containing
  expression. This is the deliberate-tearing escape hatch: the canonical use
  is a search input whose `query` drives an `<await>` — the results list
  freezes during the transition while `value=$eager(() => query)` keeps the
  input reflecting every keystroke.
- `$pending(() => expr)` — reactive boolean: `true` while any value read in
  the thunk is entangled in a live transition. Enables inline pending UI
  (`<if=$pending(() => results)>` spinner overlays,
  `style={opacity: $pending(() => list) ? 0.5 : 1}`) without freezing the
  indicator itself. The argument is required — there is no zero-arg
  "anything nearby" form; pending-ness is always scoped to explicit reads
  (compile error otherwise).

### Why they are compiler-known, not plain runtime functions

Reads are plain property accesses, so a runtime-only wrapper cannot learn
*which* values a thunk read, and by the time an outer helper like `_text`
records its op, a reads-flag set during the thunk has already been cleared.
The compiler, however, statically knows every thunk's
`extra.referencedBindings` (the same analysis every signal uses). Handling
mirrors `$signal` in `visitors/referenced-identifier.ts`: recognize the
identifier, keep normal subscription wiring, but

1. force the containing expression into a **dedicated signal unit** (the
   same isolation the translator already performs for `<await>` promise
   expressions), and
2. emit the referenced bindings' accessors as metadata on that unit.

### Runtime semantics

- An `$eager()` unit still subscribes and re-runs normally (tearing means
  *showing* latest, so it must update immediately). At partition time its
  entangled provenance roots and read values are checked against the excused
  bindings: if fully covered, its ops apply now and the unit is never
  marked; if it mixes eager and non-eager entangled reads, it holds (debug
  warning in `MARKO_DEBUG`).
- A `$pending()` unit is *inherently* eager (a frozen spinner is useless).
  Its value is `isEntangled(...)` over the bound values via the registry.
  Reactivity needs transitions to be observable state changes: when roots or
  registry values become entangled (discovery happens mid-drain, so
  re-queued units run in the same flush) and again at commit, the transition
  queues renders for subscribed `$pending()` units — the same
  `subscribeToScopeSet` fan-out closures already use.
- `$eager()` reads also excuse the fresh-branch deferral check, per above.

## Controlled inputs: eager by default

Controllable writes (`controllable.ts`) bypass the hold and apply
immediately, without needing `$eager()`:

- For user input, the DOM element is the *source* of the value — the browser
  already displays the keystroke natively; holding the write-back only risks
  DOM and state disagreeing (e.g. formatting corrections applying a
  transition later).
- For programmatic writes (a clear button setting `query = ""`), applying
  eagerly gives the standard deferred-value UX: the input clears instantly
  while the dependent list stays frozen.

Rationale: two-way binding means the element co-owns the state; state a user
is directly manipulating is inherently "latest". The change handlers
themselves already see eager values like all handlers. (Alternative — hold
controllable writes like any op — rejected: it fights native input behavior
and makes `$eager()` mandatory boilerplate on every bound input near an
await.)

## What does NOT change

- HTML/SSR runtime, streaming, serialization: untouched.
- Resumed pending awaits (`resume.ts` `render.p` → `AwaitCounter`): current
  behavior — a resumed boundary has no committed client content to hold.
- Initial client render of `<await>` (placeholder/detach), `caughtError`
  flows, the render heap and its ordering.
- Generated code for templates that don't use `$eager()`/`$pending()`.
  (Optional later: statically pre-marking signals that feed awaits using
  `valueExpr.extra.referencedBindings` to skip provenance bookkeeping in
  analyzable cases — a pure optimization.)

## Caveats to document / audit

- **UI lags state** during a transition (the inverse of React's stale-read
  model): handlers read newer values than what's on screen. This is the
  explicit contract ("the latest value will eventually be used"), and
  `$eager()` / controllable eagerness are the pressure valves where the lag
  is unacceptable.
- **Mixed eager/entangled units** hold (with a debug warning) — users should
  isolate torn reads into their own expressions/elements.
- **DOM read-backs during render** (e.g. `_attrs` iterating live
  `el.attributes` to remove stale ones, controllable reads) see pre-commit
  DOM while writes are deferred. Audit each read-back site; `_attrs`' removal
  loop must be logged as part of the unit's ops rather than executed eagerly.
- **Memory:** pending offscreen branches and held ops live as long as the
  transition; superseded pending branches are destroyed eagerly to bound
  this.
- The `sizes.json` budget tests will need updating; keep the log fast-path
  allocation-light (flat arrays, index ranges per unit).

## Implementation phases

1. **Provenance infra** (`queue.ts`): `Roots` on `PendingRender`, current
   render/unit tracking, merge-on-dedupe, `_enable_transition()` gating.
   No behavior change; unit-testable alone.
2. **Commit log for value ops**: mutable-binding chokepoints in
   `dom.ts`/`controllable.ts`, flush-end apply. With no entanglement this is
   a behavior-preserving refactor (all existing fixtures must pass with
   transitions force-enabled).
3. **Transition creation + partition**: entangle in `_await_promise`, hold
   buffer, unit marks, spread-by-read, join/merge counters.
4. **Structural slot ops**: eager/DOM phase split for
   `setConditionalRenderer`, `loop`, `_html`; deferred destroys; superseded
   pending-branch cleanup.
5. **Effects hold + dedupe-replay; `_lifecycle` logging.**
6. **Entangled-values registry + fresh-branch deferral; controllable
   eager-bypass.**
7. **Lifecycle edges**: supersede (+ abort wiring), reject,
   removal-mid-transition, merge of concurrent transitions.
8. **`$eager()` / `$pending()`**: translator intrinsics
   (`visitors/referenced-identifier.ts` + dedicated-unit isolation in
   `util/signals.ts`), runtime counterparts, `$pending()` re-render
   notifications.

## Test plan (fixtures under `src/__tests__/fixtures/`)

- `transition-basic`: `<let>` drives text + `<await>`; while pending, old
  text and old await content stay; unrelated `<let>` commits immediately; on
  resolve everything applies together.
- `transition-latest-value`: two writes mid-flight → single commit with the
  latest value; handler reads observe eager state (`count++` twice → 2).
- `transition-shared-computed`: unrelated write through a computed that also
  reads entangled state → held (spread-by-read), applied on commit.
- `transition-unrelated-inside-held-branch`: unentangled `<let>` inside the
  frozen old branch keeps updating live.
- `transition-multi-await`: one write feeding two awaits; commits only after
  both fulfill.
- `transition-if` / `transition-for`: entangled branch swap and keyed loop —
  old DOM stays, deferred destroy, superseded pending branches, commit diff
  from visible scopes.
- `transition-effects`: `_script`/event wiring held, deduped on commit.
- `transition-lifecycle`: `onUpdate` deferred; `onMount` of pending branches
  fires at commit.
- `transition-reject`, `transition-remove`: catch boundary and unmount
  mid-flight.
- `transition-fresh-branch`: unrelated `<if>` mounts content reading an
  entangled value → insertion deferred to commit; with `$eager()` → mounts
  immediately with latest.
- `transition-controllable`: typing into an input bound to entangled state;
  programmatic clear applies eagerly while the results list stays frozen.
- `transition-eager`: torn read updates live; derived (`_const`) entangled
  value read via `$eager()`.
- `transition-pending`: boolean flips true at entanglement (same flush) and
  false at commit; works over derived values; indicator not frozen.
- `transition-abort`: superseded promise's abort signal fires.
- `transition-placeholder-initial`: placeholder still used on first render;
  resume variants mirroring `await-update-after-resume`.
- Log-refactor regression: full await/async fixture suite with the commit log
  force-enabled.

## Other ideas (not required for v1)

- **Debug diagnostics**: `MARKO_DEBUG` warning when a transition holds
  longer than a threshold or when a unit mixes eager and entangled reads;
  devtools hook listing active transitions with their roots.
- **Manual transitions**: a `transition(() => { ...writes })` batch API that
  entangles writes with a user-supplied promise, covering async work that
  doesn't flow through `<await>` (imperative fetches, animations via the
  View Transitions API — the commit log's single-apply point is a natural
  place to wrap `document.startViewTransition`).

## Decisions

1. **Hold-old-UI is the default** for client `<await>` updates. The
   placeholder is only used when there is nothing to hold (initial render /
   resume). No per-boundary or per-write opt-in.
2. **`$eager` and `$pending`** are `$`-prefixed compiler-known identifiers,
   following the `$signal`/`$global` pattern in
   `visitors/referenced-identifier.ts`.
3. **`$pending` requires an argument** — pending-ness is always scoped to
   the explicit reads in its thunk; calling it without one is a compile
   error.
4. **No placeholder timeout.** A transition holds until its promise settles
   (or the await region is removed); there is no time-based fallback to the
   placeholder.
