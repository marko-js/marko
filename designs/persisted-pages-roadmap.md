# Persisted pages — roadmap

Everything still open, in one place. [`persisted-pages-architecture.md`](./persisted-pages-architecture.md)
describes what's already built; this document tracks what isn't, organized
by theme with a recommended order at the top. Items are carried forward
from the implementation record only where a check against current code (or
a newer doc) couldn't confirm they'd already landed — several watch-list
entries from earlier drafts of this work turned out to be resolved and are
folded into the architecture doc's decision log instead of repeated here.

## Recommended next

Ordered by expected yield versus effort, per the measured cost model
(`persisted-pages-cost-model.md`) and the at-scale design record:

1. **`x-marko-have` T2 content digests** — the only lever against
   matched-content overlap (a keyed loop that mostly survived a navigation
   still re-ships every branch subtree); design-ready, decision pending.
2. **Resume-script spine suppression** — the dominant residual initial-
   document cost (owner refs, loop keys, captures); blocked on two
   prerequisite fixes already recorded in `agent-feedback/perf.md`.
3. **Async placeholder recede** — the structural half is **built**
   (2026-07-09): `<@placeholder by=>` recedes a matched boundary to its
   placeholder when the authored identity changes and the new body is
   still pending at first flush; fast bodies swap in the same frame
   (keyed-remount, no placeholder paint). Pinned by
   `persisted-update-recede`; design + prior-art survey in
   [`persisted-pages-recede.md`](./persisted-pages-recede.md). Still open
   there: the client-side anti-flash hold, and the deferred-by-decision
   `aria-busy` signal layer.
4. **C2 render-graph dedup** for interactive components — the remaining
   lever once server-only components are already JS-free; bounded win,
   no wire changes.

Everything else below is lower-priority or blocked on one of these.

## Correctness

- **Async-correctness audit results (2026-07-08).** The audit matrix from
  the async/CSR-SSR-mix review, each cell resolved to a fixture:
  - _CSR state change mid-stream, including into state that feeds the
    pending region_: verified + fixture (`persisted-update-csr-race`,
    using the harness's new `navigate(input, betweenFrames)` hook). A
    click between frames renders immediately, the late boundary-body
    frame doesn't clobber it, and a mixed client-state/request-derived
    hole deterministically re-renders with the client value after the
    frame's merge (the merge re-invokes the hole's compute against live
    state; it never writes a stale captured value).
  - _Navigate while the live page's awaits are pending_: **resolved**,
    pinned by `persisted-update-navigate-pending-await` (a same-render
    resolution) and `persisted-update-pending-await-streamed` (the
    update's own await is also still pending at its first flush, so the
    body arrives on a later frame, with a `betweenFrames` click pinning
    that client state above the boundary survives). Two halves:
    - The document reorder runtime carries a navigation epoch (`dom/resume`'s
      `bumpNavEpoch`, captured by the inline `REORDER_RUNTIME_CODE` at its
      own per-render init) and no-ops a placeholder swap once a persisted
      apply has advanced it, so a late pre-navigation reorder chunk can no
      longer land stale data in the post-navigation page.
    - A matched `<try>` boundary whose placeholder genuinely shipped in the
      document stashes a build-stable site id on its parent scope
      (`BOUNDARY_SITE_PREFIX`, `html/writer.ts`'s `flushPlaceholder`
      call site inside `tryPlaceholder`); the possession echo (`_have` in
      dom/update.ts) echoes it back as a `"!"`-prefixed flat-map entry
      alongside the existing dynamic-tag hop entries. An update render
      whose matched try's site is echoed pending captures its body as
      markup instead of ordinary fills (`tryBoundaryBody` in
      html/writer.ts, reusing the fragment-capture gates and the existing
      reorder channel a fragment's pending boundary body already rides)
      and ships it as a boundary-body entry stashed on the try's own patch
      scope; the compiled branch dispatch (`_update_branch` in
      dom/update.ts) applies it once top-down pairing resolves the live
      branch, consuming the stash so a later re-dispatch never double-
      applies. `applyBoundaryBody`'s guard was adapted for this shape: a
      matched boundary has no dedicated `PlaceholderBranch` object (only a
      fragment-created one does), so it replaces the try's own Start/EndNode
      range wholesale and **adopts** the live branch as the entry's patch
      id (`activeUpdate.adopt`) before the markup walk, so node refs and
      the body's branch wiring bind onto the live scope graph — the
      fragment-subtree model applied to a matched boundary; without the
      adoption the next navigation's fills dispatch into stale
      placeholder-era links and sparse-skip (pinned by the streamed
      fixture's third, post-resolution navigation).
    - The stash reflects **liveness, not history** — the review of the
      first implementation caught every resolved streamed await echoing
      "pending" forever, which wholesale-replaced resolved bodies (and
      their client state) on every navigation. Three tombstones keep it
      honest: the body's HEAD-segment completion writes `0` over the stash
      in the same serializer drain as the flush that carries the client-
      side placeholder swap (`Chunk.boundarySite`, shared ref inherited by
      forks; out-of-order later-segment completions skip via `!b.async`);
      a body whose only asyncness is a nested boundary tombstones in
      `flushPlaceholder`'s inline branch (safe post-drain — the pending
      inner boundary guarantees the later flush); and an update-delivered
      body clears the live stash in `_update_branch` so the next
      navigation returns to ordinary fills. A fully-sync body never
      stashes (`tryPlaceholder`'s early return). `persisted-update-await`'s
      fine-grained keyed reconcile is the regression pin.
    - Dynamic-tag possession is now compile-time scoped to
      `persisted: "fragments"` builds (`isPersistedFragments()` gates the
      site-id emission): possession fragments replace construction graphs
      only those builds drop, plain builds keep the registered replay and
      compile no site id. The `main.test.ts` harness echoes the full
      `_have` output for every persisted build, unfiltered, exactly like
      `@marko/run` (see `agent-feedback/bugs.md`, "A dynamic-tag
      possession echo can force a fragment take in a non-fragment-first
      build" — resolved).
    - Known narrow edge (recorded, not built): the matched-path body swap
      removes the placeholder-era DOM without destroying its scopes — a
      placeholder whose content held client-side effects (an interval
      spinner component) would leak them. Placeholder content is
      overwhelmingly static; revisit alongside the recede design, which
      needs a placeholder-reset op with the same teardown question.
  - _Concurrent navigations / abort between frames_: verified + fixture
    (`persisted-update-abort-between-frames`, using the harness's new
    `navigate(..., abortAfterFrame)` knob). Every frame is
    self-consistent on its own; a truncated stream leaves a coherent
    placeholder page, a superseding navigation destroys the pending
    boundary cleanly, and a full-stream retry shows no residue. The
    previously "unconfirmed against a fixture" abort-between-frames rule
    is now confirmed.
  - _`queueAsyncRender` during applies_: verified + fixture
    (`persisted-update-lazy-load` for the `load=` intersection; deferred
    renders are microtasks, so they strictly follow the synchronous apply
    window and only ever observe fully-applied frames; renders against
    scopes a later frame destroys are gated by `skipDestroyedRenders`).
    The adjacent real bug the same fixture originally pinned red-shaped —
    lazy children never receiving persisted update merges — is **resolved**
    (`_update_load` in dom/update.ts: the child's `?update` merge rides its
    lazy chunks and registers under a compile-constant cross-template id;
    a patch that arrives while the module is still loading parks and
    replays through the shared `flushReadyUpdates` slot when `ready()` or
    `insertLoaded` fires; the fixture now pins park-then-replay AND
    post-load fine-grained dispatch — see agent-feedback/bugs.md for the
    full mechanism and the one remaining `_load_template` edge). Two
    wire-level bugs at this intersection were found and **fixed** in
    `html/writer.ts`: document asset loader scripts leaked into update
    frame streams (`writeScript` now suppressed under `state.update`) and
    multiple script pieces per flush were `;`-joined onto one unparseable
    line (`concatFrames` now newline-joins frames).
  - _v1 async fragment limits_: all four verified as loud aborts +
    fixtures (`persisted-update-fragment-bare-await`,
    `persisted-update-fragment-catch-only`,
    `persisted-update-fragment-two-awaits`,
    `persisted-update-possession-multiswap-async`). The two-awaits pin
    also surfaced and **fixed** an abort-path bug in `html/template.ts`:
    an abort raised during `consume()` (all the flush-time guards) let
    the outer flush continue into `flushHTML` against the reset state —
    an uncaught exception in debug, a junk frame line in production.
  - _Effects ordering across boundary-body attachment_: covered-already
    (`persisted-update-fragment-await`; `createUpdate` applies boundary
    bodies before dispatching merges and running payload effects, and the
    `Gen >= applyGen` gate skips entries whose scopes weren't created by
    the apply; `applyBoundaryBody` no-ops for destroyed/superseded
    boundaries via its `!tryBranch[Gen]`/placeholder check).
  - _Update-delivered closures skip renders during applies_:
    covered-already (`persisted-update-fragment-await`'s server-only-fed
    widget label survives the late body attach; the `!_updating` guards
    are at `translator/util/signals.ts` closure builds and compute
    invocations and `translator/visitors/program/dom.ts` branch-created
    closure renders).
- **Native-tag dynamic-tag hop never takes the possession-fragment path** —
  **resolved** (2026-07-08); `persisted-update-possession-native` pins both
  swap directions as fragment applies AND the matched-native fill (the
  fixture flushed out a second latent gap: nothing dispatched fills into a
  native branch's runtime-created content, so a matched native dynamic
  tag's content was permanently stale — `_update_dynamic` now descends
  generically when no merge is registered). Full mechanism in
  `agent-feedback/bugs.md` ("Dynamic-tag hop swapping to/from a native tag
  never takes the possession-fragment path").
- **Fragment capture drops a `load=` lazy child's server-rendered HTML** —
  **resolved** (2026-07-08); `persisted-update-fragment-lazy` now pins the
  full contract green: markup baked into the fragment (`writeWaitReady`
  keeps capturing under fragment capture), resume data delivered as a
  keyed frame entry drained inline when the module is ready and parked
  until `ready()` otherwise (the document `.b` channel's data-driven
  mirror), and the load trigger registered by the `?update` entry under
  the child's asset/ready id (`_load_ready`) and fired on batch arrival.
  Full mechanism in `agent-feedback/bugs.md` ("Fragment capture drops a
  `load=` lazy child's server-rendered HTML"). The `_load_template`
  (bodiless dynamic-tag lazy template) shape remains outside both the
  merge and trigger paths — see the lazy-merge bugs.md entry.
- **Optimized register-id allocation is not deterministic under concurrent
  builds.** Tracked in `agent-feedback/bugs.md` ("Optimized register-id
  allocation races when html/dom compiles run concurrently") — reference
  that entry rather than duplicating it here. The in-tree half is fixed:
  the test harness now orders every dom-side compile after the html
  build's compiles (`bundle.ts`'s `html-compiles-first` gate), so
  `test:parallel` id-shift flakes are gone and snapshots are
  order-stable. The compiler-level guarantee for external integrators
  remains open — the analyze-stage pre-registration fix is blocked on
  moving update-merge recording from translate to analyze (a tight key
  enumeration needs those records; a loose superset would inflate id
  wire bytes). Until then the contract is documented order: share one
  `optimizeKnownTemplates` config AND compile a template's entry kinds
  in a fixed sequence.
- **Reason-propagation OR can drop the stateful bit.** Where the translator
  combines multiple dynamic guards with logical OR (`getSerializeGuardForAny`,
  child-reason arguments), `a || b` returns the first truthy operand and can
  drop the stateful bit when reason variables with different bits mix in
  one render. Not known to be reachable in current fixture coverage; audit
  and switch to bitwise OR (`|`) at propagation sites if a real shape hits
  it.
- **`serializedLookup` conservative classification.** Entries registered via
  `setBindingSerializedValue`/`setSectionSerializedValue` are all gated
  spine-class under the persisted flag. Most are structural (closure sets,
  indexes, child scope refs); an audit for value-like entries that would
  serialize initially without need is still open.
- **`MARKO_DEBUG` pairing assertions are designed but not confirmed
  landed.** The original wire-protocol design called for update renders to
  additionally serialize each scope's template/section id in debug builds
  so a misapplied merge fails loudly instead of silently mis-merging; no
  corresponding code was found in `dom/update.ts` during this doc's
  accuracy pass. Worth either implementing or striking from the design
  record.
- **Merge coverage for attribute tags and hoists/getters is unaudited.**
  Dynamic tags, `<await>`/`<try>` boundaries, tag variables, and the common
  controllable attrs all have confirmed update-merge emission (see
  `persisted-pages-architecture.md`); attribute tags and hoisted
  getter-style bindings were flagged as needing their own emission shape in
  the original wire-format proposal and no fixture confirming coverage was
  found. Needs a fixture per shape before calling this closed.
- **Fork 4 (matched-scope DOM identity guarantee)** — "a fragment is never
  used where a scope matched; only creation sites ever get one" is true by
  construction in the current mechanism (fragments only ever fire at
  renderer-mismatch/fresh-branch sites), but was never written down as a
  hard invariant with sign-off. The async placeholder recede design (below)
  needs an explicit carve-out here: a recede resets a _matched_ boundary to
  its placeholder, destroying server-derived async body DOM while leaving
  interactive client state above the boundary untouched — worth stating
  precisely before more machinery leans on either side of the rule.
- **Controllable update coverage gaps.** Tracked in `agent-feedback/bugs.md`
  ("Controllable update coverage: `checkedValue`, spread controllables,
  selection re-sync") — reference that entry rather than duplicating it
  here. Covers `checkedValue` pairing, controllables reached through
  spreads, post-merge selection re-sync, and mixed state/`$global` values in
  spreads/controllables not re-invoking on navigation.

## Wire size

- **`x-marko-have` T2 digests + tombstones.** The only lever against
  matched-content overlap (feed's load-more re-ships the matched rows it
  already sent; dashboard filter toggles show the same pattern). Design is
  decision-ready, not blocked on new research:
  - **Canonicalization**: a keyed branch's serialized bytes contain
    patch-local scope ids and backref-dependent string encoding, so a
    digest needs either a per-branch sub-serialization with normalized ids
    (a second serialize pass, CPU cost) or a structural value hash over
    pre-serialization scope data (cheaper; needs stable hashing of
    registered-function ids).
  - **Protocol**: server digests each keyed branch as it serializes and
    ships the digest with the branch (~10 B); client records
    loop-accessor → key → digest from applied patches and echoes them
    (bounded, same-route only) in `x-marko-have`; a digest match gets a
    tombstone (`{M:key, S:1}`) instead of the branch subtree.
  - **Cache-policy fork**: echoed digests fragment cache keys per client, so
    this is per-route policy, default-on only for responses that are
    already uncacheable.
  - Pair with a server-CPU probe before shipping — the extra serialize/hash
    pass is unmeasured against real render cost.
  - Note this is a distinct question from the possession echo
    (`persisted-pages-architecture.md`), which already ships and answers a
    binary "does the client have the right renderer" question; digests are
    a pure dedup optimization for matched, unchanged _content_.
- **Resume-script spine suppression** (the initial-document A2 residual:
  owner refs, loop keys, `_hole_value` captures, scope writes — now the
  dominant residual on hole-dense pages once marker bytes were addressed by
  the continuation encoding). Two prerequisite fixes are recorded in
  `agent-feedback/perf.md` and should be read before starting this: branch
  machinery can be tree-shaken out of resume bundles while closures into
  the content still fire, and reordered/out-of-order content pushes scope
  data a flush earlier than its markers can link an owner from. Likely
  needs an explicit "enable" in the resume payload or deferred subscription
  linking. Matters most for loop-heavy pages (dashboard, feed); least for
  hole-sparse content sites.
- **Positional-key elision for `by`-less loops.** Independently shippable
  slice of the spine-suppression work: both sides of a positional loop
  already know position, so the key list is implied and needn't ride the
  wire.
- **Pure-`$global` hole captures still carry `_hole_value`, not the globals
  partial.** A deliberate residual from the `$global` demotion — the
  globals partial already carries every serialized global on every update,
  so a pure-global hole's separate capture is redundant. Byte optimization
  only, not correctness; small and easy once someone has a reason to chase
  the last few percent.
- **Update-generic child links serialize twice.** Tracked in
  `agent-feedback/perf.md` ("Update-generic child links serialize twice in
  update payloads") — reference that entry rather than duplicating it
  here. Needs an update-vs-resume serialize-reason split that doesn't exist
  today.
- **Closure subscription sets ride payloads they can never fire in.**
  Tracked in `agent-feedback/perf.md` ("Closure subscription sets ride
  persisted payloads/documents they can never fire in") — reference that
  entry rather than duplicating it here.
- **URL-input-deps pruning** (cheap, no cacheability cost): compiler-emitted
  param-source deps intersected with changed URL inputs would let the
  router skip provably-unchanged sections (shared-layout chrome on
  same-route navigations). Low yield on content-heavy pages, decent on
  chrome-heavy apps; unblocked whenever someone wants it.
- **Document `<head>` follow-ups.** `<title>` and attribute holes
  (`<meta>`/`<link>`) already have capture/merge coverage. Still open:
  `<link rel=preload>`-style document hints never re-emit on navigations,
  and dynamic `content=` attrs backed by unserializable renderer values
  have no update path at all — both narrow, low-traffic gaps.
- **Loop branch content for server-only templates (at-scale fork 2).**
  Undecided: keep today's small per-loop registered `[template, walks,
setup]` arrays (preserves same-route keyed additions without a fragment),
  or fragment-ize loop content immediately and accept the coupling to the
  possession-echo mechanism for keyed additions. Blocks finishing the C2/C3
  reduction for loop-heavy server-only components.

## JS size

- **C2 render-graph dedup for interactive components.** The `?persisted`
  module still duplicates template-local functions the main module also
  carries for any component that keeps client JS. Extend the single-
  instance module-state pattern (already used for scriptlet bindings) to
  shared render-graph pieces generally: the persisted entry imports the
  main module's declarations instead of re-declaring. Bounded win (roughly
  30–50% of an interactive component's persisted-only cost, per the
  at-scale measurements), no wire changes, and composes with the fragment
  and classification work that already shipped.
- **Finish the runtime eager/lazy phase partition (C1).** Status is genuinely
  unclear as of this doc: three concrete splits (child-import retention,
  controllable per-kind modules, catch-machinery hosting) were resolved per
  `agent-feedback/perf.md`, which measurably closed most of the eager-JS
  gap on the apps measured at the time — but that measurement predates the
  fragment-frame and update-generic classification work, which changed how
  much persisted-only JS exists at all. Re-measure before investing further
  here; it may already be adequately addressed as a side effect of the
  later work.
- **Discoverability diagnostic for the render-once contract.** `$global`
  and input/param derivations are the only navigation-refreshable
  channels; a refs-less dynamic expression computed at page load never
  refreshes on navigation, which is correct but surprising without a
  warning. Needs a severity/opt-out design so legitimate render-once values
  (a footer copyright year) don't drown builds in warnings — designed but
  not built.
- **`server import` bundling diagnostic.** Tracked in
  `agent-feedback/perf.md` ("Persisted compute guards make previously-
  unused imports bundle client-side") — reference that entry rather than
  duplicating it here.

## DX / async & authoring model

- **Async placeholder / pending-state recede on same-route navigation** —
  the structural layer is **built** (2026-07-09): `<@placeholder by=>`
  keys a boundary's content by an authored identity (name shared with
  `<for by=>`/`<let by=>`); an identity-changed navigation recedes the
  matched boundary to its placeholder while the new body streams, or
  swaps the body in the same frame when it resolved by first flush
  (keyed-remount, no placeholder paint — the flash suppression). Pinned
  by `persisted-update-recede`. Design, the prior-art survey behind the
  policy (keep-stale is the unanimous industry default; resets are
  identity-shaped and opt-in), mechanism notes, and what remains — the
  client-side anti-flash hold, the deferred `aria-busy` signal layer,
  possible future compiler-derived identity — all live in
  [`persisted-pages-recede.md`](./persisted-pages-recede.md). The fork-4
  carve-out above still applies (the receded body shares the matched-path
  teardown edge).

- **Navigation API adoption.** The router's hand-rolled click/submit/
  popstate interception could become a single `navigation.intercept()`
  point once the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API)
  has adequate support; it composes natively with View Transitions, which
  `persisted-pages-optimistic-transitions.md` already leans on. A small
  router upgrade worth taking when support allows, not a blocker for
  anything else here.

- **Small open decisions carried forward without new analysis** (none
  blocking, none prioritized): the root-pairing convention beyond "patch
  scope 1 by convention" for unusual root shapes; concurrent-navigation
  abort semantics between streamed frames (today's rule is "abort between
  frames only," confirmed by the `persisted-update-abort-between-frames`
  fixture -- see the audit entry under Correctness); a `by`-less loop diagnostic
  nudging authors toward keyed loops under the persisted flag; a formal
  confirmation that entry-effect ordering (server completion order, lazy
  owner resolution for child-before-owner arrival) has no case needing
  stronger ordering; whether a pair-store should persist across a session;
  and the policy question of when hint-pruning (tier 2) should turn on by
  default.

## Not roadmap-owned (tracked elsewhere)

- Optimistic updates, View Transitions, and keyed-`<let>` state survival
  across navigation: full design in
  [`persisted-pages-optimistic-transitions.md`](./persisted-pages-optimistic-transitions.md),
  with its own open questions (notably a real correctness gap where a
  superseded mutation's response is dropped unread, open question 5 there).
- The "no idiom for resetting per-navigation client state" gap noted in the
  cost model is what [`let-by.md`](./let-by.md) exists to close.
- Cross-template shared state without a `$global`/module-registry
  workaround is what [`context.md`](./context.md) exists to close. Its
  branch implementation has been evaluated against persisted pages (local
  merge, 2026-07-09): see the "Evaluation against the `<context>` branch"
  section there for the four integration fixes it needs and the two
  context-independent fixes that landed here (serializer signed slot
  deltas; cross-route capture skipping echo-proven matched hops --
  `persisted-update-fragment-shared-hop`).
