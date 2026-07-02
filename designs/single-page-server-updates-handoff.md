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

Branch: `claude/single-page-server-updates-ipucp6` (this repo; sibling
branches of the same name exist on `marko-js/vite`, `marko-js/run`, and
`marko-js/website` but carry no changes yet).

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
- `$global` promotion (serialized-global reads become param-like bindings) —
  designed, not built; required for `@marko/run` (`url`/`params`).
- Root pairing convention; concurrent navigations (abort between frames);
  `by`-less loop diagnostics; effect ordering confirmation; pair-store
  session persistence; when to enable hint pruning.

## Next slices (in dependency order, each testable via the harness)

1. **Update-render writer mode** — a writer/`State` mode for patch responses:
   drop state-only props, write computed hole values under hole accessors
   (G1), always write conditional outcomes (G2), branch lists + keys in
   fills (G3, makes G4 derivable), suppress effects for matched scopes (G5),
   emit `template`/`walks` pairs from hoisted HTML-output consts as
   `templates` frames (deduped per response, flushed before dependent
   fills). _Acceptance: the e2e patch is derived from a real render-B
   payload instead of the hand-authored fill in `e2e.js`._
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
