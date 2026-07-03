# Single-page server-first updates — handoff

Everything needed to pick this work up cold. Read in this order:

1. [single-page-server-updates.md](./single-page-server-updates.md) — the
   design: goals, core model, wire protocol, compiler/runtime/integration
   architecture, tradeoffs, phasing. Kept current with every decision.
2. [single-page-server-updates-wire-and-entries.md](./single-page-server-updates-wire-and-entries.md)
   — the measured experiments behind the wire-format (A1) and persisted-entry
   (B2) decisions, the end-to-end prototype write-up, and the confirmed
   update-render writer gap list (G1–G5).
3. [experiments/single-page-server-updates/README.md](./experiments/single-page-server-updates/README.md)
   — the runnable harness: compile/render scripts, payload/entry size
   measurements, and the e2e prototype.

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
`UpdateAttr:<name>:<elAccessor>`, a new `AccessorPrefix` entry — per attr so
multi-attr elements don't collide) (G1); `_if` always writes the conditional
outcome, `-1` = no branch (G2); loops write branch lists (empty included),
loop keys (even positional), and owner refs as scope props (G3/G4); and
`_script` effects are suppressed in update mode (G5). State-driven structure
(no persisted bit in the branch guard) is excluded — the server never pairs
into client-state-driven structure. Verified: e2e derives its patch from a
real page-B update render (both branch directions); non-persisted compiles
and initial/non-flag renders byte-identical; full suite passing.

**Prototyped** (validated in `experiments/`, not yet real code): the A1
update payload applied through B2 merge functions; control-flow merges as
`_if`/`_for_of` instances; wire-delivered branch `template`/`walks` pairs
with an idempotent client store; the effects-not-replayed rule (double-bind
detector); sparse merge semantics.

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
  reachable in the current e2e; audit and switch to bitwise OR (`|`) at
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
2. **Persisted entry codegen** — the `?update` virtual module/entry kind
   (dispatch point `translator/visitors/program/index.ts`), emitting the B2
   merge functions the prototype hand-writes
   (`experiments/.../entries/*.update.js` are the codegen spec), signal-graph
   partition (interactive-reachable stays in main; persisted entry imports
   shared signals), registrations via
   `getResumeRegisterId(section, …, "update")`. _Acceptance: e2e imports
   generated entries._
3. **Client update runtime** — real `dom/update` module: frame parser,
   patch-aware serialize context, entry-effect dispatch, ready-channel
   gating, `$global` merge, `_wire_if`/`_wire_for` + content store
   (prototype: `experiments/.../update-runtime.js`). _Acceptance: e2e uses
   the real runtime; then a fixture-harness `Navigate` step
   (`src/__tests__/main.test.ts`) replaces the standalone e2e._
4. **Integration** — build hash + `?update` chunks + manifest in
   `@marko/vite`; wrapper-over-shell, patch content negotiation, client
   router in `@marko/run`; `$global` promotion in the translator.

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
E=designs/experiments/single-page-server-updates
PERSISTED=1 node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
OUTPUT=dom  node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
node -r '~ts' $E/e2e.js      # end-to-end prototype (expect 4 PASS lines)
PERSISTED=1 TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js  # persisted render
TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js              # non-flag render
```

## Gotchas for the next contributor

- Harness commands must run **from the repo root**: the `~ts` register hook
  scopes to the working directory (running from elsewhere silently falls
  back to Node's native loader and fails on extensionless imports).
- Renders embed a random `renderId`; normalize it before diffing outputs.
- The harness runs the **debug runtime even for optimized compiles** (props
  like `#LoopKey` print debug names where prod emits `M`), and its marker
  byte counts are ~5 B/marker larger than production (default renderId `_`).
- The e2e patch fill is hand-authored against **debug accessor names**; it
  breaks by design if the example templates change shape — recompile and
  update the fill (each prop is annotated with its writer gap).
- Generated harness artifacts (`*.cjs`, `*.min.js`, `out.*`) are gitignored
  and rebuilt by the README commands; `designs/experiments` is excluded from
  eslint/prettier/cspell like fixtures.
- The full mocha suite runs with `bail`; a single failure stops everything.
- cspell checks all `.md`/`.ts`/`.js` — add genuinely new words to
  `cspell.json` (several for this project already are).
