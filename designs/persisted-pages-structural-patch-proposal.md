# Persisted pages: structural-patch proposal (evaluation)

> **Status: landed (2026-07-21).** This document is the historical evaluation
> that selected the shipped design. The end state described in its closing
> sections is now implemented: every section constructs from static shells,
> constructed branches adopt their patch scopes, boundaries and load-tag
> children construct from their own sections' shells, and the possession
> token, route descriptor, and replacement machinery are deleted. Current
> behavior is documented in `persisted-pages-architecture.md` and
> `persisted-pages-wire-format.md`.

An evaluation of a proposed re-architecture: deliver divergent content through
the existing client renderer machinery (template / walks / hole-filling setup)
instead of server-captured HTML replacements, express structure as ordinary
patch-scope facts the client reconciles locally, and reconsider the
possession (`have`) / anchor machinery in that light. Status: the
shell delivery evaluated here has landed on this branch (see
"Recommendation"); the analysis below is kept as the record of how the
decision was reached.

## The proposal, restated

1. **Structure rides scope data.** An `<if>` sends its current branch index; a
   keyed `<for>` sends its keys; a dynamic tag sends its renderer id. The
   client compares against its live structure and infers replace / move /
   remove / keep — the server never needs to know what the client holds to
   decide what to render.
2. **Divergent content ships renderer-shaped.** Instead of captured HTML, a
   fresh branch arrives as the group the client runtime already consumes —
   template, walks, and a setup whose job is hole-filling from serialized
   values.
3. **Renderers ship unconditionally at first**, with a later optimization
   where the server tracks which renderer ids a client already has (possibly
   session-stored) and skips re-sending static template/walks.

## What the current design pays for possession

The measured record on this branch is the strongest argument for revisiting:

- `html/persisted-token.ts` is 1,007 lines of codec (ordinals, VLQ, interning,
  graduated prefix claims), plus a separate design document for denser claim
  encodings that still concludes the ~4 KiB header budget caps claims at
  roughly 800 keyed items.
- The scaling measurements show the cliff: at 1,000 keyed items the token
  overflows, matched items degrade to replacements, and a navigation that
  changed 30% of values ships 163 raw bytes _per item_ with ~390 ms of client
  apply; at 5,000 items, ~6 s. Graduated claims soften but do not remove this.
- The writer carries a capture mode (chunk `replacement` flags, anchors,
  marker scope-id sets, detached capture forks), the client carries a bespoke
  markup walker (`dom/update-replacement.ts`, 314 lines), and the possession
  echo is a distributed-consistency surface: three of the gnarliest recorded
  issues (`agent-feedback`: echo disagreement shipping avoidable replacements,
  replacement-walked `ClosestBranch` mislinking, boundary-body effects dropped
  at adoption) live exactly here.

The root cause is structural: **the server decides at render time what the
client holds**, so client knowledge must round-trip through a size-capped
header, and every miss is punished with an authoritative replacement.

## The key inversion: let the client decide

Moving the match/construct decision client-side dissolves the possession
problem rather than compressing it:

- Matched structure needs no proof. The client already knows its branch
  indices, keys, and renderer ids; the patch's structural facts (which the
  scope data already carries — `ConditionalRenderer:` indices, loop keys,
  renderer ids) are sufficient input for a local reconcile. `_update_if` and
  `_update_for_keyed` already implement exactly this comparison for the
  matched path.
- Fresh structure needs construction inputs, not proof of absence. The server
  serializes what a fresh branch would need and the existing generation gate
  (`_update_seed`, `AccessorProp.Gen`) already makes seeds no-ops on scopes
  the client turns out to have.
- The `x-marko-have` header, the descriptor export, the token codec, the
  `~=`/`~+` metadata frames, and run's token storage all become deletable, and
  with them the header-budget ceiling and the echo-mismatch failure class.

This is the strongest part of the proposal and it is largely independent of
how divergent content is delivered.

## Renderer-shaped delivery: use the graph the client already loads

The proposal's second half has a stronger form than shipping template/walks on
the wire. The `?persisted` entry is _defined_ as "the deferred client render
graph plus the compiled patch merges" — after the first enhanced navigation
the client has registered renderers for the target route's sections. Three
delivery options, strongest first:

1. **Construct from registered renderers + serialized holes (recommended).**
   A fresh branch is built by the ordinary branch machinery (the same path CSR
   and keyed reconcile use), reading serialized values for anything the
   optimized DOM build cannot compute. No templates on the wire at all; the
   "which renderers does the client have" question is answered by module
   loading (HTTP-cached, deduplicated by the bundler), not by server
   bookkeeping. The lazy/parked machinery for not-yet-loaded modules already
   exists (`_update_load`, parked batches, escape-anchor loaders).
2. **Ship template/walks/holes as wire payloads with id-based dedup.** This is
   the literal proposal. It works — frames are already trusted, nonce-gated
   JavaScript, so a renderer payload is expressible — but it recreates the
   "what does the client have" problem at the renderer level (the sorted-id
   tracking, and sessions later), duplicates what module loading provides for
   free, and gives up statelessness exactly where the current design fought
   to keep it. Useful only for renderers that can never be in the client
   graph, and those cannot be made interactive anyway (their handlers live in
   the missing module) — the existing loud document fallback remains the
   right answer for them.
3. **Status quo:** captured resumable HTML. Compact for one-shot delivery,
   but re-ships static markup on every navigation, needs the capture
   fork/walker machinery, and couples divergence to possession.

Option 1 turns "replacement" from a wire format into a client operation, and
the serialize-reason machinery is the natural home for its one new
obligation.

## Refinement: static availability tiers

Blanket option 1 is unsafe, for two reasons that survive scrutiny:

1. **Bundling is disclosure, not just bytes.** Widening the client graph to
   every patch-reachable section would ship gated markup (an `<if=isAdmin>`
   panel) to every visitor. The compiler cannot distinguish
   authorization-gated structure from public request-derived structure — both
   are server reads — so no analysis can widen retention safely. The only
   zero-config-safe rule is: **the patch may construct client-side only what
   the ordinary optimized DOM build already ships.**
2. **Setup is user code.** A server-only section's DOM-compiled setup embeds
   compiled user expressions. Reviving it for patch construction would bundle
   server-only expressions — exactly the invariant persisted pages must never
   break. Serializing values does not fix this: the expression text itself is
   the leak.

The static criterion is therefore per-section and compile-time: a section is
**patch-constructible** iff the ordinary build registers it (`_resume`) _and_
retains its shell (template, walks, setup) — the same sections
whose setup and markup are already public for resume reasons, so tier A adds
zero disclosure and zero new bundling. Everything else is server-delivered:

- **Tier A — constructible**: fresh branches build client-side from the
  already-registered renderer, seeded by construction-complete fills. No
  templates on the wire, no possession claims for these anchors.
- **Tier B — server-delivered**: sections the client build excludes (gated,
  server-only, or simply never client-recreatable). These keep resumable
  server markup — today's replacement machinery, with a shrunken scope.
  Interactive tier-B content still binds through its registered setup on
  resume, exactly as replacements do today; fully static tier-B content needs
  no client code at all.

Two consequences make this split attractive rather than a compromise:

- **The structural inversion is tier-independent.** Client-side reconcile by
  branch index / key / renderer id fixes the measured keyed cliff even when
  items are tier B: matched keys never degrade (the client matches them
  locally, no claim required), and only genuinely new keys pay server markup —
  cost proportional to actual change, not to token budget.
- **Possession collapses instead of being deleted outright.** With per-key
  and per-branch claims gone, the only residual "what does the client have"
  question is tier-B renderer reuse across navigations. That claim space is a
  handful of section ids per route — a sorted renderer-id list (the original
  proposal's storage) fits trivially in a header, and the 1,007-line codec,
  ordinals, and density designs become unnecessary. Whether even that echo is
  worth carrying (versus always re-sending tier-B markup) is a measurement
  question, not an architecture question.

One gray zone remains: request-derived structure that is interactive but not
client-recreatable today (its setup ships, its template may not). Under the
conservative rule it stays tier B. If measurement shows its fresh-branch
markup cost matters, the safe widening mechanism is an explicit author
opt-in — never compiler inference, since sensitivity is invisible to
analysis.

## What it costs

- **The `persisted-slim-main` invariant inverts for markup.** Today the
  optimized client graph provably excludes divergent static text ("/search?page=",
  "No results" are pinned absent); replacements exist so that markup crosses
  only as wire HTML. Under option 1 that static text ships once in the lazy,
  cacheable `?persisted` entry as template strings instead of repeatedly in
  patches. First-load is untouched (the entry stays lazy), but
  first-_navigation_ payload grows by the route's divergent templates, repaid
  on every later navigation and every keyed-list item. The `validate:sizes`
  ratchet and `measure:wire` must arbitrate with real numbers; the wire
  attribution baseline says replacement HTML is 22.8% of today's measured
  patch bytes and markers/references another 27.7% — the categories this
  change attacks.
- **Server-only _values_ stay serialized — and the compiler must prove it.**
  The invariant "no revived tree-shaken user code" survives at the value
  level: a fresh branch's server-computed values must reach the client as
  fills/seeds ("construction-complete" serialization). This is an extension
  of the existing serialize-reason and fresh-branch seed analysis
  (`_state_reason`/`freshBranchDepth`), and it _replaces_ possession-anchor
  analysis and capture wiring rather than adding on top. It is the one place
  the compiler gets deeper; everything else gets shallower.
- **Seed bytes without possession knowledge.** The server cannot know which
  branches are fresh for this client, so request-derived branches carry their
  construction values on every patch. For most shapes this is what sparse
  fills already send; truly server-computed _state seeds_ are the overhead,
  bounded per structurally-live branch and no-op'd by the generation gate
  when matched. The degenerate case is far better than today's (a wasted seed
  is bytes; a lost claim today is a full replacement).
- **Async boundary bodies simplify but change shape.** A late-resolving body
  becomes an ordinary later frame constructing a branch; the boundary-anchor
  stash, tombstones, and the settled-boundary race check reduce to a local
  "is my placeholder still showing" test. The one-pending-segment limitation
  and the reorder-channel special case go away.
- **Trust surface narrows.** No wire HTML parsed via `<template>` on apply;
  construction consumes data through the existing fill grammar.

## Simplicity and reviewability

Deleted or reduced to existing machinery: the token codec (1,007 lines plus
its density roadmap), have negotiation on both sides, descriptor plumbing,
writer capture mode and anchors, the replacement walker, marker-conformance's
dual-walker asymmetries, the echo-mismatch semantics, and the future
session-storage track. Reused as-is: keyed reconcile, branch construction,
seeds and generation gates, serialize reasons, parked lazy updates, epochs,
controllable capture gates, frames. Added: one compiler analysis
(construction-completeness) and a construct path in `_update_if`/
`_update_dynamic` mirroring what `_for_keyed` already does.

For a reviewer, "a fresh branch is a client render seeded from the patch"
replaces "a fresh branch is server HTML walked by a second resume
implementation, gated by a token the client echoes." The first is one new
theorem on top of reviewed machinery; the second is the part of this branch
that has consumed the most review effort and produced the most recorded bugs.

## Performance expectations (to be measured, not assumed)

| Path                      | Today                                                    | Proposal                                                    |
| ------------------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| Matched sparse update     | fills only (84 B measured)                               | unchanged                                                   |
| Cross-route hop           | replacement HTML + token echo                            | fills/seeds; templates from cached module                   |
| Keyed list, large         | collapses at token budget (163 B/item, ~6 s apply at 5k) | keys + changed fills; new keys construct locally            |
| First enhanced navigation | smaller module, HTML on wire                             | larger cached module, smaller wire; net measured by ratchet |
| Server patch render       | capture forks; superlinear all-replacement path          | plain patch render, no capture mode                         |
| Request overhead          | up to 4 KiB header                                       | none                                                        |

## Discovered coupling: construction is the enabling change, not a follow-up

An implementation attempt surfaced a constraint the phased plan below
originally got backwards. On the server, fills and replacement markup are
mutually exclusive per branch: `_hole_value` suppresses fills inside
replacement capture ("replacement markup already contains its hole values"),
and the `<if>`/dynamic-tag paths choose capture _or_ fills from the
possession comparison. That exclusivity is load-bearing for client state:

- A **matched** branch must receive fills — applying baked-values markup to a
  matched branch destroys client state, the feature's core invariant.
- A **fresh** branch must receive markup or a template — fills have no DOM to
  land in.

"Client decides" requires one server output valid for _both_ client states.
Baked-values markup cannot serve the matched case; fills alone cannot serve
the fresh case; double-sending both per divergent branch is the only interim
and pays twice for every divergence. The same coupling applies to pending
`<try>` bodies (a still-showing placeholder has no DOM to fill) and, worst,
to keyed loops, where the server cannot know which keys are fresh — so
without construction, every item pays markup on every patch (the measured
cliff, made unconditional).

The resolution is the proposal's original form: fresh branches are built
from a **values-free shell** (template + walks) with values
arriving as ordinary fills — then one server output (facts + fills + shell)
serves matched and fresh clients alike, and possession has nothing left to
prove. Construction is therefore the _first_ change, not an optimization
layered on later; nothing meaningful deletes before it.

## Shell delivery (implementation spec)

As landed, item 1's interim `renderers` compile is the shipped shape, and
capture mode plus the replacement walker survive for `noConstruct` sections
rather than deleting outright.

The shell already exists: the persisted/DOM compile emits `$template` /
`$walks` per section (visible in every persisted fixture's dom bundle). The
missing capability is server access without client bundling:

1. **A virtual module, not a new bundler surface.** The shell map
   (`{ [sectionRegisterId]: [template, walks] }`, data only) should reach the
   server graph as a `resolveVirtualDependency` emission from the server page
   facade compile — the channel every integration already implements for
   style blocks — rather than a new query/entry kind bundlers must learn.
   The obstacle is _when_ the data exists: template/walks are currently
   computed only by a DOM-mode translate, and the server compile typically
   runs before any client compile, so the facade has nothing to read.
   Prerequisite: move section template/walks derivation into the shared,
   cached analysis (or a shared post-analyze pass on the cached file) so any
   output can read it — a contained translator refactor that also
   de-duplicates the DOM translate (it reads the same metas) and supplies
   exactly the retention fact tier-A detection needs later. The interim
   `entry: "renderers"` compile is the stepping stone: its emission visitor
   is delivery-agnostic and becomes the virtual-dep code generator; the
   entry kind itself is dropped once the shared pass lands.
2. **Writer**: when a patch renders a fresh-capable structural anchor, emit
   the section's shell once per patch (`[registerId, template, walks]` frame
   entry) and render the branch in ordinary fill mode (`freshBranchDepth`
   seeds already force construction-complete serialization for patch-list
   branches). Delete capture mode.
3. **Client**: `_update_construct` = clone template, walk to bind node
   accessors into the (adopted) patch scope, run the section's existing
   update merge as the hole-filler (`_update_scopes` handlers are generic
   accessor→helper maps, no user expressions — always bundleable), then
   effects via the existing generation gate. Fresh keyed items flow through
   `_for_keyed`'s create callback; `<if>`/dynamic through their merge
   handlers. Delete the replacement walker.
4. **Tier A second pass**: where the ordinary build already retains the
   shell (the `_resume` + retention test), skip the wire shell and use the
   registered renderer — a pure byte optimization at that point, invisible to
   the architecture.

## Recommendation (landed)

The inversion was pursued and shell delivery has landed:

1. **Shells landed.** The `renderers` entry kind exists as an
   internal, data-only re-entrant compile whose result each persisted
   template's HTML module embeds (`_renderer_shells`, accumulating in the
   server-side `serverRenderers` registry). The writer emits a section's
   shell at most once per patch response (`[0, id, template, walks]` frame
   entries) and renders constructible targets plainly. The client constructs
   on divergence: dynamic hops (including escaped/lazy targets, which
   construct after their `?persisted` entry loads and re-dispatches),
   `<if>` branches via per-branch construct ids, fresh keyed `<for>` items in
   the keyed reconciler's create callback, missing stable `<for>` tail
   branches under a freshly constructed parent, and contentless native
   rebuilds from typed captures. A diverged renderer id with no merge and no
   loader is deploy skew and surfaces through the transport's `patch(fail)`
   sink.
2. **Possession reduced to the fallback tier**, not yet deleted: claims are
   emitted only for pending `<try>` boundaries and no-shell anchors (a hop
   or `<if>` with no shell claims its renderer id or branch index; keyed
   loops with no-shell bodies claim per-item presence). A matched claim
   keeps sparse fills; a mismatch ships a replacement. Full deletion — token
   codec, descriptor export, `x-marko-have`, `~=`/`~+` metadata, run's token
   storage — is blocked on construction coverage for the `noConstruct`
   sections and remains a follow-up.
3. **Follow-ups**: try/await/child-template construction (sections directly
   containing them are `noConstruct` because construction runs no setup),
   after which possession can delete; and renderer-id echo / session dedup of
   repeat-navigation shell resends, deferred until measurement shows those
   bytes matter — statelessness holds meanwhile. The tier-A pass (reusing
   client-registered renderers instead of wire shells where the ordinary
   build retains them) stays a pure byte optimization.

The early risks resolved as expected: constructed branches reach
effects/controllable parity through the shared merge path (the controllable
change-gate fixtures pass unchanged), and `persisted-slim-main`'s sentinels
keep passing — the shell rides the server graph, never the client's.

## Unification vet: inline instance shells (rejected 2026-07-20)

A proposed final unification would have replaced replacement entries with
one-shot "instance shells": per-request rendered markup plus per-instance
walks, all data as fills, letting the possession token die immediately. It
was rejected on three meaningful downsides. First, walk codes require node
counts, and the HTML writer streams opaque markup strings — deriving
per-instance walks means threading walk segments through every branch-writing
helper and composing them at chunk-consume time under async reordering, a new
runtime subsystem replacing the marker walker, the single most proven piece
of the system, and re-opening the validated async matrix. Second, without
the token every `noConstruct` anchor must ship markup plus unsuppressed hole
fills on every navigation even when matched — a per-navigation byte
regression on real pages to save a 2–19-byte request header. Third, the
document keeps the marker walker regardless, so the "one walker" endpoint is
not reached.

The dominant path instead extends static composition: the DOM build already
splices statically inlined child `$template`/`$walks` exports into parent
templates, so the renderers entry emits the same composition as shell parts
(`[childTemplateId]` references) resolved lazily through `serverRenderers`
(landed with this note). Registry misses degrade to replacement and poison
transitively. What remained for full unification was boundary construction —
`<try>`/`<await>` state as scope facts with placeholder/body branches built
from their own shells — and load-tag construction after module load; both
were static-shell work, not instance-shell work, and landing them (2026-07-21)
deleted the possession token and replacement machinery.
