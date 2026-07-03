# Single-page server-first updates — handoff

Everything needed to pick this work up cold. Read in this order:

1. [single-page-server-updates.md](./single-page-server-updates.md) — the
   design: goals, core model, wire protocol, compiler/runtime/integration
   architecture, tradeoffs, phasing. Kept current with every decision.
2. [single-page-server-updates-wire-and-entries.md](./single-page-server-updates-wire-and-entries.md)
   — the measured experiments behind the wire-format (A1) and persisted-entry
   (B2) decisions, the end-to-end prototype write-up, and the confirmed
   update-render writer gap list (G1–G5).
3. [single-page-server-updates-review.md](./single-page-server-updates-review.md)
   — shape review after real-app validation: goals as invariants,
   alternatives, target API boundaries (the feature ships with @marko/run),
   and the prioritized gap list.
4. [experiments/single-page-server-updates/README.md](./experiments/single-page-server-updates/README.md)
   — the runnable harness: compile/render scripts and payload/entry size
   measurements. (The end-to-end lifecycle now lives in the
   `persisted-update-navigate` fixture under
   `packages/runtime-tags/src/__tests__/fixtures/`.)

Branch: `claude/single-page-server-updates-bimocl` (this repo; sibling
branches of the same name exist on `marko-js/vite` — carrying the
`persisted` plugin-option plumb — and on `marko-js/run`,
`DylanPiercey/marko-ecommerce`, and `DylanPiercey/marko-idle`; the
ecommerce branch carries the linked prototype app, see
"Example-app prototyping workspace" below. Work started on
`claude/single-page-server-updates-ipucp6`, which this branch continues.)

## What the feature is

A compiler-configured, opt-in system where navigations fetch the target URL
and a **stateless** server streams a minimal update payload instead of a full
document. The client applies it to the already-resumed page through the
existing signal graph: client state is preserved, server-only code stays on
the server. Model: **a navigation is "the root template received new `input`
and a new `$global`"** — the semantics that already exist for a parent
re-providing input to a child. Fallback to a full reload is always available
(build-hash mismatch, non-capable route, stream error).

## Current state

**Implemented** (commit `ca126523`, `feat: add persisted compile option…`):

- `persisted` compile option (`packages/compiler/src/config.js`,
  `config.d.ts`) + `$global.persisted` render flag
  (`packages/runtime-tags/src/common/types.ts`). Two-level opt-in; omitting
  the render flag serves a byte-identical non-persisted document (crawler
  opt-out).
- The serialize-reason **bit lattice**
  (`packages/runtime-tags/src/html/writer.ts`, `SerializeReasonFlags`):
  bit 1 = stateful parent ⇒ markers + values (today's behavior); bit 2 =
  persisted ⇒ markers/spine only. `_serialize_if` projects bit 1,
  `_serialize_guard` passes bits through so cross-template reason
  propagation preserves persisted-ness. `State` seeds reason `2` from
  `$global.persisted`.
- The translator **spine/value gate split**
  (`translator/util/signals.ts` `writeHTMLResumeStatements`, helper
  `getExprGuardSerialized` in `translator/util/serialize-guard.ts`): scope
  writes, owner links, structural bookkeeping, and closure subscriptions
  gate guard-class (any bit); binding values stay if-class (stateful bit)
  with the same-reason hoisting shortcut disabled under the flag —
  eliminating the param-only value leak found in the experiments.

**Verified**: full suite 8279 passing; non-flag renders byte-identical
(modulo random `renderId`); persisted renders emit every hole marker, branch
marks, and the spine with zero param-only values; client bundle sizes
untouched; the e2e prototype passes against the real flag. Changeset:
`.changeset/persisted-serialize-guards.md`.

**Implemented** (`feat: add update-render writer mode…`): the G1–G5
update-render writer mode. `$global.persisted = "update"` renders a patch
payload: `State.update` seeds serialize-reason `3` (request-derived values
serialize — they are the payload; `_persisted_reason()` returns `3` so
cross-template/global propagation carries values too); the translator wraps
request-derived (state-free-reasoned) hole expressions in persisted builds
with the pass-through `_hole_value` helper, which in update mode writes the
computed value under the hole's accessor (dynamic attrs keyed
`UpdateAttr:<name>:<elAccessor>` — per attr so multi-attr elements don't
collide; the prefix lives translator-side, see `getUpdateAttrPrefix`, so no
enum bytes ship to clients) (G1); `_if` always writes the conditional
outcome, `-1` = no branch (G2); loops write branch lists (empty included),
loop keys (even positional), and owner refs as scope props (G3/G4); and
`_script` effects are suppressed in update mode (G5). State-driven structure
(no persisted bit in the branch guard) is excluded — the server never pairs
into client-state-driven structure. Verified: e2e derives its patch from a
real page-B update render (both branch directions); non-persisted compiles
and initial/non-flag renders byte-identical; full suite passing.

**Implemented** (`feat: add persisted update-entry codegen…`): the `?update`
entry kind. `persisted: "update"` with dom output runs the full dom
translation (identical sections/accessors/register ids to the main module)
but the program exit (`translator/visitors/program/update.ts`) emits
compiled merge functions instead of the template: per-section
`(patch, live) => { … }` with presence-checked (sparse) statements — plain
scope stores for request-derived values, value-signal calls where a
downstream statement mixes client state (`bindingNeedsUpdateSignal` walks
the signal graph), `_text`/`_attr` hole placements, conditional replay +
branch-content dispatch, keyed-loop reconcile, and child-template dispatch
via `<tag>.marko?update` default imports. Sharing is via the resume
registry, not module exports or a wire `templates` frame: persisted dom
builds `_var_resume`-register the needed value signals and `_if` signals
(`Signal.registerId` disambiguates conditionals whose `#text` node-binding
names repeat) and `_resume`-register each request-derived loop's hoisted
`[template, walks, setup]` content (strings shared with the loop signal, not
duplicated); the new `dom/update.ts` runtime (`_update_signal`,
`_update_for`) resolves them lazily by id. Fresh `_if`/`_for_of` branches
clone the registry-shared content and fill from patched scope values.
Verified: e2e imports the generated entries (hand-authored
`entries/*.update.js` remain as the spec they replaced), including reverse
navigation (fresh conditional branch creation); no `templates` frame needed.

**Implemented** (slice 3, core): `applyUpdate` in `dom/update.ts` — the
real merge driver: patch-aware serialize context (patch-local scope ids,
plain-object patch scopes, `_(id, registryId)` refs resolved through the
resume registry, scope-0 partials merged onto the live `$global`), root
pairing at patch scope 1 by convention, compiled-merge dispatch, synchronous
queue flush. And the fixture-harness `navigate()` step: persisted fixtures
bundle their generated `?update` entry (snapshotted, sizes tracked as its
own chunk); an ssr `navigate(input)` step renders a real update payload
server-side, extracts its fills, pairs the live root through the page's own
effect machinery, and applies it in the live jsdom document — csr mode
treats the same step as a plain input update (the semantics the patch
reproduces). The `persisted-update-navigate` fixture snapshots the whole
lifecycle; the standalone experiments e2e and `update-runtime.js` prototype
are deleted.

**Implemented** (slice 4 groundwork, `feat: integration fixes…`): three
fixes found by real-app validation — per-attr serialize-reason groups in
persisted builds (attr hole guards previously crashed when a tag's merged
marker reason grouped differently than a single attr's sources); the
persisted **spine reason** on every custom-tag child-scope link (a
global-sourced reason, live exactly when the persisted flag is set) so
attr-less pass-through roots (run's route wrappers) can't elide their scope
and shift the patch root off scope 1; update entries re-export `applyUpdate`
and pair the live root themselves (`getUpdateRoot` in `dom/resume.ts`) so
consumers never import the runtime by path — a second runtime instance has
its own registry and silently pairs nothing.

**Prototyped** (validated in `experiments/`, not yet real code): the
effects-not-replayed rule (double-bind detector). The wire-delivered
`templates` frame + `_wire_if`/`_wire_for` store prototype was superseded by
registry sharing (see above); a content store may still return in slices 3/4
for priming templates the client hasn't loaded.

## Decision log (all settled; rationale in the linked docs)

| Decision                                                                                                                                          | Where documented                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Navigation = new `input` + `$global` to the root; `<let>` state preserved by existing `Gen` semantics                                             | design doc, "The core model"                         |
| Wire format A1: the existing resume fill format, patch-space ids; A2/A3 rejected on measurement                                                   | proposals doc, "A. Wire format"                      |
| Scope pairing: compiled top-down tree merge; wire addressing rejected; id-order pairing unsound under async                                       | design doc, "Scope pairing"                          |
| Persisted entries B2: compiled merge functions; B1 tables superseded once control-flow merges collapsed into existing `_if`/`_for_of` signals     | proposals doc, "B." + "Hardening"                    |
| Placement-only: no server compute ships; derived values arrive computed                                                                           | design doc, "The parallel update entry"              |
| Sparse merge semantics (absence = unchanged); presence checks mirror server guards; per-kind helpers make them byte-neutral                       | proposals doc, "Sparse vs dense"                     |
| Effects never replay for matched scopes; mount effects only in fresh subtrees; dependency-driven re-runs ride the reactive graph                  | proposals doc, "Effects on update"                   |
| Branch markup wire-delivered (`templates` frame), sourced from the HTML output under the flag, deduped per response, idempotent client store      | proposals doc, "Spike: wire-delivered branch markup" |
| Guard-split lattice (implemented)                                                                                                                 | this doc, "Current state"                            |
| `@marko/run`: per-route wrapper templates rendering a shared dynamic-tag shell; code splitting + lazy-load machinery preserved via ready channels | design doc, "@marko/run integration"                 |
| Payload tiers: T0 reload / T1 stateless-cacheable / T2 hint-pruned; build hash gates everything                                                   | design doc, "Payload tiers", "Fallback"              |

## Open questions / watch list

Consolidated from both docs, plus two items found during implementation that
live only here so far:

- **Reason propagation OR bit-loss** (implementation caveat): where the
  translator combines multiple dynamic guards with logical OR (e.g.
  `getSerializeGuardForAny`, child-reason arguments), `a || b` returns the
  first truthy value and can drop the stateful bit when reason vars with
  different bits mix in one render (conceivable via body-content sections
  rendered under a different reason than their template's program). Not
  reachable in current coverage; audit and switch to bitwise OR (`|`) at
  propagation sites when building the update-render slice.
- **`serializedLookup` conservative classification**: entries registered via
  `setBindingSerializedValue`/`setSectionSerializedValue` are all gated
  spine-class under the flag. Most are structural (closure sets, indexes,
  child scope refs); audit for value-like entries that would serialize
  initially without need.
- Merge shapes beyond the prototype: dynamic tags, attr tags, `<await>`
  mid-patch, hoists/getters, tag variables, controllable attrs.
- `$global` promotion — **implemented** (commit `feat: promote $global reads
to param-like sources under the persisted option`). Mechanism: under the
  `persisted` option, `$global` member reads get bindings (program-section
  root + property aliases) whose `Sources` carry a new `global` flag; guard
  codegen splits it out — the param part rides the existing per-group
  `_scope_reason()` guards unchanged while a global part ORs in
  `_persisted_reason()`, a runtime read of `$global.persisted` itself, so
  cross-template reads gate with no parent threading (and parents passing
  $global-derived props thread the persisted bit to children through the
  existing reason records). Values are untouched: reads bail out of scope-slot
  rewriting (live member access on the global object), global-sourced props
  never serialize values (`getExprIfSerialized` returns undefined;
  `writeSerializedBinding` skips global bindings), and DOM statements
  referencing only same-section global bindings fold into setup. Verified:
  non-persisted builds and non-flagged renders byte-identical; fixtures
  `persisted-global-reads`(+`-opt-out`); full suite 8293 passing; ecommerce
  app emits full markers/spine (measured: `/item` 44→125 markers, +16% gzip;
  `/search` 201→802, +50% gzip on that hole-dense worst case — the number
  the marker-suppression levers must bring down).
  Remaining from the original design note: per-key granularity for
  serialized vs non-serialized globals (currently every static `$global.key`
  read promotes; non-serialized keys cost markers they can't use), and the
  DOM-side value-signal chains for global keys exist only where reads are
  cross-section (closures/intersections) — pure setup-folded holes rely on
  placement for updates, per the placement-only model.
- Root pairing convention; concurrent navigations (abort between frames);
  `by`-less loop diagnostics; effect ordering confirmation; pair-store
  session persistence; when to enable hint pruning.

## Next slices (in dependency order, each testable via the harness)

1. **Update-render writer mode** — **done** (see "Current state"): G1–G5
   land as `$global.persisted = "update"`; the e2e patch is derived from a
   real render-B payload. Deliberately deferred within this slice:
   state-only props still ride along (bytes only — merges ignore them; a
   translator-level `_state_value` filter is the fix when profiling says
   so); `template`/`walks` pair emission as `templates` frames (the e2e
   still hand-delivers the pairs; belongs with entry codegen, slice 2,
   which decides the shared content-id scheme); mixed state∩param branch
   guards compile to a static `1` and so skip structural update emission
   (needs a compile-time bit split if real apps hit it); `_await`/dynamic
   tags/`<show>` in update mode unaudited; static-HTML suppression + frame
   framing (the response is still a full document — the patch consumer only
   reads the fills; framing belongs to slices 3/4); MARKO_DEBUG pairing
   asserts (serialize section ids in update renders) not yet emitted.
2. **Persisted entry codegen** — **done** (see "Current state"): the
   `?update` entry kind (`persisted: "update"` + dom output), compiled merge
   functions, registry-shared signals/branch content, child dispatch via
   `?update` imports; the e2e imports generated entries. Deliberately
   deferred within this slice: merges cover text/html placeholders, dynamic
   attrs (whole-value class/style only — item-split class/style values are
   captured by the server but not merged), `<if>`/`<for>`, child tags, and
   scope values; `_await`, dynamic tags, `<show>`, and controllable inputs have no
   merge emission yet. The server-side branch guard (`serializeBranch & 2`)
   and the entry's structural-merge predicate
   (`isReasonDynamic(conditionRefs)`) are computed from different reason
   sets — aligned for pure request/state structure, unaudited for mixed;
   value-signal calls run synchronously mid-merge, so a mixed binding that
   also feeds request-derived structure could re-run a conditional against a
   half-applied patch (queued closures are safe; direct `_if` values are the
   edge).
3. **Client update runtime** — **core done** (see "Current state"):
   `applyUpdate` (patch-aware serialize context, `$global` merge, merge
   dispatch, queue flush) plus the fixture-harness `navigate()` step
   (`src/__tests__/utils/resolve.ts`, ssr handler in `main.test.ts`,
   `?update` bundling in `utils/bundle.ts`), which replaced the standalone
   e2e — the `persisted-update-navigate` fixture snapshots the full
   navigation lifecycle in debug and optimize. Still open for this slice:
   streamed frame parsing (updates are still full documents; the harness
   extracts `.r=[…]` fills by regex), entry-effect dispatch (update payloads
   carry no effect strings yet — fresh-subtree effects arrive with
   fragment-class content later), ready-channel gating of update chunks
   (loader work), and root pairing by `meta` frame (the harness pairs via a
   registered effect string against scope 1; the applier takes the live root
   explicitly).
4. **Integration** — **in progress** (validated against marko-ecommerce in
   dev mode): `@marko/vite` resolves `x.marko?update` imports to update
   entries (`.update-entry.marko` kind, own lazy chunk, recursive child
   `?update` imports; persisted-gated); the ecommerce branch carries the
   prototype run-router glue (`src/util/persisted-nav.ts` link
   interception + fill extraction + `applyUpdate`, `+middleware.ts` update
   content negotiation via `x-marko-update`) and a self-bootstrapping
   `npm run setup` that git-links the marko/vite branches. Browser-verified:
   lazy update chunk, no reload, history/state intact. Blocking real-app
   merges (see the review doc's gap list): dynamic-tag/renderBody descent
   (layout→page hop emits no structural link in update mode) and
   branch/hole emission gaps on `<if>/<else>` + only-child + `<try>` page
   shapes. Remaining: response framing + static-HTML suppression (the bytes
   goal), build hash, run-owned client router, `?update` chunks in the
   build manifest.

## Example-app prototyping workspace

Sibling checkouts on the same branch name carry the integration prototype:

- **marko-js/vite** — `persisted` plugin option plumbed into the compiler
  `baseConfig` (the slice-4 plumb, already real).
- **DylanPiercey/marko-ecommerce** — linked against local `marko`,
  `@marko/compiler`, and `@marko/vite` tarballs (see its `PROTOTYPE.md` for
  regeneration steps); `vite.config.ts` enables the compile flag and
  `+middleware.ts` sets `$global.persisted` per request (the run context
  _is_ `$global`; `PERSISTED=0` disables). Verified end to end with
  `$global` promotion: persisted renders emit full markers/spine on every
  route (measurements in `PROTOTYPE.md`), non-flagged renders stay
  byte-identical.

## How to validate everything

```sh
npm ci                       # installs + patches babel (required)
npm test                     # full suite (~6m)
npm test -- --grep "persisted"    # persisted fixtures incl. the navigation
                                  # lifecycle (persisted-update-navigate)
E=designs/experiments/single-page-server-updates
PERSISTED=1 node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
PERSISTED=1 TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js  # persisted render
TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js              # non-flag render
```

The standalone e2e prototype (`$E/e2e.js`) is retired: the
`persisted-update-navigate` fixture covers the same lifecycle (resume,
client interaction, patch application, keyed reconcile, state survival,
no-effect-replay, reverse navigation) in both debug and optimize with
committed snapshots.

## Gotchas for the next contributor

- Harness commands must run **from the repo root**: the `~ts` register hook
  scopes to the working directory (running from elsewhere silently falls
  back to Node's native loader and fails on extensionless imports).
- Renders embed a random `renderId`; normalize it before diffing outputs.
- The harness runs the **debug runtime even for optimized compiles** (props
  like `#LoopKey` print debug names where prod emits `M`), and its marker
  byte counts are ~5 B/marker larger than production (default renderId `_`).
- Optimized register ids (`getTemplateId(opts, file, child)`) are assigned
  **sequentially in first-request order**, cached per `optimizeKnownTemplates`
  array identity — every compile of a persisted template (html, dom, and the
  `?update` entry) must share that array (or a `getTemplateId` option) or the
  update entry's registry lookups won't match the dom module's
  registrations. The fixture harness shares one config object; @marko/vite
  must do the same in slice 4.
- Generated harness artifacts (`*.cjs`, `*.min.js`, `out.*`) are gitignored
  and rebuilt by the README commands; `designs/experiments` is excluded from
  eslint/prettier/cspell like fixtures.
- The full mocha suite runs with `bail`; a single failure stops everything.
- cspell checks all `.md`/`.ts`/`.js` — add genuinely new words to
  `cspell.json` (several for this project already are).
