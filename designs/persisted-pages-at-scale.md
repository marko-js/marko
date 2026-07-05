# Persisted pages at real-app scale — design options

Companion to [persisted-pages-cost-model.md](./persisted-pages-cost-model.md)
(the measurements this responds to) and
[single-page-server-updates-handoff.md](./single-page-server-updates-handoff.md)
(the implementation record). This document designs the options for the
one cost the cost model shows growing with app size — per-template
client JS — and ends with a recommendation, phasing, and the forks that
need a decision.

## The problem, measured

Persisted mode ships, for **every** component, a `?persisted`
render-graph module (template strings, walks, setup, value signals,
registrations) and `?update` merge code — so any component can serve as
fresh-construction material for cross-route swaps/fresh branches and as
merge dispatch for matched content. Measured on the `scale` example (80
design-system components):

- Per-template code is **60% of the persisted build** at 80 components
  (runtime 28%); the small apps sit at 21–35%. Real apps live far past
  the ~30–50-component crossover.
- Marginal cost ~224–420 B raw per small component, proportional to
  source size. The coverage is the problem, not the unit cost: plain
  builds ship **zero** bytes for static and content components; persisted
  ships all of them. Total-JS factor ×9.3 at 80 components, growing
  with N.
- All of it is lazy (first-navigation chunks per route), so it surfaces
  as first-navigation weight, cache footprint, and CDN artifact size —
  not initial load.

Secondary at-scale cost: four translates per template (html, dom,
`?persisted`, `?update`) off one shared analyze.

## What the client actually needs, by component role

The option space falls out of decomposing what the per-template JS is
_for_. In a persisted navigation a component's scopes are in exactly one
of three situations:

1. **Matched** (same-route navigation, or matched levels of a
   cross-route one): the DOM exists, the signal graph is live. Needed:
   place captured holes (a class hole → set class on its element, a
   text hole → set text data), dispatch branch lists, invoke state-mixing signals.
   Template strings/walks/setup are NOT needed.
2. **Fresh** (cross-route swap target, branch created by the patch):
   needed: static parts + walks + setup + fills — construction material.
   This is the bulk of the render graph.
3. **Interactive at rest** (independent of navigation): handlers and
   state signals — the plain-hydration slice every build ships anyway.

Two observations turn this into leverage:

- **Fresh construction re-implements SSR client-side.** The registered
  render graphs exist so the _client_ can do what the server already
  does better and cheaper: render the subtree. Marko's most
  battle-tested path — streamed resumable HTML + the resume walker — is
  exactly "construction material," and the server can produce it for any
  subtree on demand. The per-component JS is a parallel implementation
  of that path, shipped ahead of time, just in case.
- **Matched application is almost data-driven already.** Patch keys are
  typed (`N<attr>:<accessor>` hole captures, `A<accessor>` branch lists,
  `D<accessor>` outcomes, `M` keys, seeds, effects). Per-template merge
  code earns its bytes only where a value must go through a _signal_
  (state-mixing statements, `_let` seeds with downstream derivations).
  For a component with no client state and no handlers, hole placement
  is a uniform interpreter loop over the patch — no per-template code
  required.

Define the compile-time classification this implies: a template is
**server-only** when it has no client state (`<let>`, bound
controllables), no event handlers/effects, no state-mixing statements,
and no `client import` side effects — decidable per template from
existing analysis (it is the same information the reason system already
tracks). Composition does not break the class: a server-only parent may
compose interactive children — inside a rendered fragment the children
hydrate exactly as they do on first load (their effects ride the payload
as entries; their JS is the hydration slice the route already ships).
In a design system, server-only is the large majority (the `scale`
corpus: 64 of 80; its per-component JS is ~70% of the component total).

## Options

### A. Wire-delivered resumable fragments (construction as HTML)

When the applier needs to _create_ — the cross-route content-hop swap,
a fresh branch — the patch stream carries a **fragment frame**: the
server renders the divergent subtree as resumable HTML (markers, spine,
and serialized scopes, exactly like a scoped initial render), and the
client inserts it at the anchor and resumes it (walker + effect
entries — both existing machinery; the reorder runtime already does
insert-and-resume for out-of-order streaming, and update frames already
have the CSP story). Consequences:

- Server-only components need **no `?persisted` graph at all** — their
  construction material is HTML produced on demand.
- The module-state duality seam is bypassed for them (nothing
  re-registers; resume wires the main copies, the only copies).
- Watch-list limitations die: "pages whose setup calls server-only
  imports cannot client-construct" (fragments never client-construct),
  and "navigate before the live page's awaits resolve" (fresh-create
  the boundary from a fragment). Awaited content inside a fresh subtree
  streams as more frames — the machinery initial renders already use.
- The stateless-server property is untouched: a fragment render is a
  function of the request, like everything else.

The honest trade-off: **repeat navigations**. Today the target route's
graphs are cached JS — a second visit to a route constructs from cache
and the patch stays fills-only. Fragments re-send the subtree's HTML
every time, like an MPA. The measured surprise (experiments below):
for content-heavy targets the fragment is _smaller than today's patch_
— resumable HTML gzips better than the serializer-array format, which
spells every value against dense keys (`/search`: subtree 3663 gz vs
patch 3907 gz; docs 1610 vs 1897; feed post 506 vs 626). Only
markup-heavy/value-light pages invert (`scale` about: 1044 vs 718),
and those are exactly the case for the **cacheable skeleton**
refinement: split the fragment into the route-pair's static shell —
same for every user, a GET-cacheable resource keyed by build hash +
route pair — plus the per-request fills that already ride the patch.
Note what the skeleton _is_: the compiled template's static parts,
i.e. the same artifact `?persisted` graphs carry today — the fork is
purely about delivery (JS chunk today / per-navigation wire /
cacheable resource), not about compiling something new.

#### Granularity and ephemeral state — why a fragment is not a diff

A fragment never targets existing DOM; it is only ever the construction
source at a site where the applier is already creating brand-new DOM
(renderer-id mismatch at the content hop, a keyed row whose key is not
in the live list, a newly taken conditional branch). The application
model is unchanged:

- **Matched scopes never see fragments.** Same-route navigations apply
  exactly as today: fine-grained `_attr`/text-data mutations,
  controllable `_default` replays (typed text survives), keyed
  reconcile moving live elements. Focus, scroll, selection, playback,
  and client state are preserved because no element is replaced —
  option B changes the executor of these operations (shared interpreter
  vs per-template functions), not the operations.
- **Creation sites have no ephemeral state by definition** — today's
  path already discards the outgoing branch and builds a fresh subtree
  from registered clones. The fragment replaces where the new DOM comes
  from, not whether it is new. The swap boundary is also unchanged (the
  same `<${input.content}/>` branch), so matched layout chrome above it
  survives as it does today.
- **There is no morph step** (fork 4's hard rule): reconciling
  finalized HTML into live DOM would lose IDL-vs-attribute state, focus
  identity, and playback — that failure mode is confined to rejected
  option D. For keyed lists the branch list still arrives as data;
  matched keys keep live DOM + fills, and only missing keys consume a
  fragment as their creation step.
- **Fine-grained application resumes immediately after construction**: an
  inserted fragment is resumed (walker refs, effect entries, gated
  seeds) into ordinary scopes, so the next navigation finds them
  matched and applies ordinary fills. A fragment is a construction
  event, not an update mode.

### B. Generic data-driven hole application (kill signal-free merge JS)

A single runtime interpreter applies typed patch keys against a live
scope: attr holes through the existing `_attr*` helpers, text holes,
controllable `_default` replays, branch-list reconcile dispatch by
registered content id, child descent through `#childScope` links.
Per-template `?update` merge functions remain only where signals must be
invoked (state-mixing statements, seeds with derivations) — for
server-only templates they disappear entirely; for interactive ones they
shrink to the signal calls. This is independent of A (it pays off even
if fragments never land) and shares its classification. Cost: the
interpreter is shared runtime (+ some size there), and merge-time
presence checks become key-space-driven instead of compiled — the
optimize-mode accessor encoding already makes keys self-describing.

Refinement (from the server-template POC — prior art below): for
server-only regions the payload does not even need keys. Request-derived
update values are always-complete per participating region (no
sparseness inside a region), and the live DOM's marker sites enumerate
the region's holes in document order — so the region's values can ship
as a flat array the interpreter consumes positionally while walking
marker sites. The DOM is the schema; nothing is compiled client-side.
Measured on the feed same-route patch, key tokens are **24% of raw
bytes** (1196 of 4980), plus owner refs (132 B) and positional loop
keys (78 B) that a region-ordered encoding also implies. Signal-invoked
values (state-mixing) keep the keyed form — they need identity, not
position.

### C. Render-graph dedup for interactive components

The `?persisted` module duplicates template-local functions the main
module also carries (+7.3 kB raw on ecommerce). For components that keep
JS (interactive), extend the single-instance module-state pattern to
shared render-graph pieces: the persisted entry imports the main
module's declarations instead of re-declaring (the state seam
constrains registration, not code sharing — the postmortem's rule is
"duplicated code is benign, duplicated state is not", and this removes
the benign duplication too). Bounded win (~30–50% of interactive
components' persisted cost), no wire changes, complements A+B.

### Considered and rejected

- **On-demand graph fetching** (per-component `?persisted` chunks,
  dynamic import on registry miss): keeps the O(components) JS term,
  adds mid-apply request waterfalls and a manifest; strictly dominated
  by A for server-only components and unnecessary for interactive ones
  (their graphs ride the route chunk they already need).
- **Server-driven DOM patch instructions** (morph-style): abandons the
  matched-scope model that makes client state preservation and the
  no-replay/hostile-patch guarantees compositional; rejected on
  architecture, not bytes.
- **Denser compiled-artifact encoding** (bytecode-ish graphs): the
  artifacts are stereotyped and already gzip well; coefficient work
  with real interpreter complexity, superseded by A removing the term
  for the class where it dominates.

## Recommendation: "server-only components are JS-free"

Adopt that sentence as the north-star invariant (I-e), reached by
A + B + C in that order of importance:

| component class     | construction     | matched updates          | client JS                  |
| ------------------- | ---------------- | ------------------------ | -------------------------- |
| server-only (~most) | fragment (A)     | generic applier (B)      | **none**                   |
| interactive         | graph (as today) | merge fns (signals only) | hydration + deduped C2 (C) |

The asymptote changes from `fixed + N × ~0.3 kB` to
`fixed + N_interactive × (hydration + small)` — the same shape a
non-persisted build has, which is the strongest statement available:
at scale, persisted mode's JS converges on what hydration already
costs, and navigation content rides the wire like the MPA it replaces.

## Phasing (each slice testable on the existing matrix)

1. **Fragment frames for the cross-route hop.** The highest-volume
   fresh construction, and the server _knows_ it is fresh — the
   `x-marko-from`/route-pair mismatch identifies the divergent subtree
   deterministically, no client-state knowledge needed. Un-suppress
   HTML for that subtree in the update render, frame it, applier
   inserts + resumes at the hop anchor. Acceptance: cross-route suites
   green with the target route's `?persisted` module not loaded;
   `scale`'s about-page graphs dropped from the build for the swap
   path.

   **Mechanism landed** (`persisted-update-fragment` fixture):
   `$global.persistedFragment` on an update render captures the first
   content hop's branch as resumable HTML (`_fragment` in html/writer
   restores the chunk's `writeHTML` for the branch render and flips the
   update-mode serialization gates via `state.inFragment`, so hole
   captures and structural branch fills are suppressed while markers and
   values bake into the markup) and emits it on the frame as a
   `[anchorScopeId, accessor, markerPrefix, html]` entry; scope data
   still rides the ordinary fills in the same patch id space. The
   applier (dom/update `applyFragment`/`walkFragment`, a sync-only port
   of the resume walker) parses the markup detached, binds DOM refs onto
   the patch scopes — which are stamped and join the live tree directly
   (patch scope IS live scope for fragment subtrees) — inserts at the
   hop's anchor marker, and swaps the branch bookkeeping. Applying a
   fragment is a resume, not a merge: the hop's merge dispatch is
   consumed with the entry (patch/live sharing one object would
   otherwise collide walker-bound node refs with hole-value keys), and
   the subtree's effects run through the existing `Gen >= applyGen`
   gate via self-pairing. Branch boundaries get runtime-owned empty
   text nodes at both ends (fragment edge nodes can be marker
   comments the runtime later consumes). Still open for this phase:
   run-router integration (set the flag from the route-pair mismatch),
   async boundaries inside fragments (debug-throws today), unifying
   `walkFragment` with the resume walker, and the acceptance criterion
   itself — the update render still _executes_ the branch server-side
   and the client still loads the target route's modules; not shipping
   the `?persisted` graph for the swap path is phase 3's payoff.

   **Follow-up landed: uniform dispatch.** Text/html hole patch keys
   moved into their own namespace (`UpdateHole:<accessor>`, "Q"
   optimized — mirroring `UpdateAttr:`), which removes the only
   collision between patch keys and walker-bound node refs on the
   shared scope objects. The hop's merge dispatch is therefore no
   longer consumed after a fragment applies: merges self-apply
   idempotently into fragment subtrees (seeds re-invoke signals with
   the values the fills already placed; branch/child links reference
   the walker-built scopes themselves), and later frames dispatch
   through the same path into fragment scopes — the prerequisite for
   async content.

   **Async boundaries inside fragments — landed** (the two-frame
   model, mirroring what a streamed document does; fixture
   `persisted-update-fragment-await`):
   - _Frame 1 (the fragment):_ `<try>` around a pending await ships
     its **placeholder** in the fragment markup, bracketed with the
     reserved `"!"` accessor token the walker binds to the try
     branch's `PlaceholderBranch` prop. The try's own brackets and
     scope props (`PlaceholderContent`/`CatchContent`/
     `BranchAccessor`) ride as today; the body stays detached
     server-side. Capture became a **chunk property** assembled by the
     ordinary flush machinery instead of a render-time splice: in an
     update render nothing else writes html, so fragment-flagged
     chunks (forks inherit the flag) accumulate exactly the fragment's
     markup, `consume` merges it across forks, `flushPlaceholder`
     renders pending placeholders inline at flush time, and
     `flushScript` emits accumulated html as the entry.
   - _Frame 2 (the body):_ when the boundary body completes,
     `endAsync` registers it through the existing reorder channel (its
     reorder id is the try branch id) and the update branch of the
     reorder flush emits its accumulated markup as a **boundary-body
     entry** (`[tryBranchId, 0, prefix, html]`) with the body's
     effects on the same frame; the applier walks it and swaps it in
     where the placeholder branch sits (destroying the placeholder) —
     the update-mode equivalent of the reorder runtime's placeholder
     swap. Nested placeholder boundaries recurse through the same
     machinery.
   - The alternative — bodies as fills-constructed subtrees (today's
     fresh-await machinery) — was rejected for fragments: it needs the
     try to be _client_-constructed (`_try` signal + `_await_content`
     detached branches), i.e. exactly the per-template render graphs
     fragments exist to stop shipping.
   - Found and fixed along the way: **update-delivered closures now
     skip their render while a patch applies** (`_closure_get` renders
     are `_updating()`-guarded; subscription registration unchanged).
     The pending-closure effect for late boundary bodies re-renders
     the closure at attach time — right for streamed documents (the
     outer value may have moved since the body's markup flushed),
     wrong during applies, where the closure's rendered holes are the
     payload and the owner value may be server-only (it blanked a
     child input fed from a `server import` compute). This closes the
     same latent hole in the fills-based fresh-await path.
   - v1 limits (all error the render, feeding the router's
     full-navigation fallback): a bare await inside a fragment (would
     hold the whole frame), catch-only async boundaries (the
     reorder-based catch machinery has no update story), and more
     than one pending await per placeholder body (a second segment
     needs reorder-marker anchors in the entry markup).

   **Run integration landed + measured** (cross-route updates set
   `persistedFragment` alongside `persistedSeed`; ecommerce validation
   44/44 + CSP 8/8, example smokes 33/33). Three integration gaps the
   real app caught, all fixed with fixture coverage: positional-loop
   self-dispatch (walker branches carry no keys; reconciling them
   against themselves rebuilt every branch from the template — the
   applier now skips lists that are already live), dom-less scopes
   (state + tag-variable wiring only — markers can never reach them,
   so entries now carry the serialized scope ids and the applier
   stamps them), and tag-variable wiring (update renders skip it
   because fresh fills-branches wire their own; fragment subtrees are
   resumes and get the document-style serialized wiring).

   **The honest v1 wire numbers** (real cross-route patches, gz):
   feed `/`→`/post/1` 1016 vs 626 fills; ecommerce →`/search` 6010 vs
   3907; →`/item/2` 1964 (async: placeholder frame + three
   boundary-body frames, tag-variable wiring included); →`/cart` 337.
   The fragment-sim predictions (fragment SMALLER than patch) assumed
   markup _replaces_ the fills; v1 ships markup _plus_ the fills that
   survive. The wire win, like the JS win, is deferred to phases 2/3.

   **Fill pruning, first slice — landed, modest.** Fragment mode now
   narrows seed serialization (`_state_reason`) to where fresh
   construction actually happens: fragment chunks and fills-path
   structural branch renders (`State.freshBranchDepth` around
   update-mode loop items, conditional branches, await bodies, and
   replay hops). Matched scopes' seeds and resume-only wiring — dead
   bytes the client discarded — no longer ride. Measured effect on
   these apps: single-digit bytes (their matched shells carry almost
   no state). The real byte attribution of a v1 fragment, from
   staring at the payloads: (1) the markup itself, (2) **resume
   markers** (the persisted-document treatment — one comment per
   hole/branch site; these are not waste, they are what makes the
   fragment fine-grained-updatable later, but they are the largest
   prunable-looking block), (3) structural fills for the matched
   region, (4) fragment-subtree state + wiring (needed). The
   remaining levers were re-ranked when fork 1 resolved (see the
   forks section): the primary path is phases 2/3 — construction
   from the already-cached template/walks with the surrounding code
   deleted — with fragments as the cold-path transport; marker
   slimming and x-marko-have value dedup stay as secondary wire
   levers for the cases that remain fragment-shaped.

2. **Generic applier for signal-free keys** + stop emitting merge code
   the interpreter covers. Acceptance: server-only templates emit no
   `?update` module; payload application byte-identical behavior on the
   suites.

   **First slice landed** (`_update_scope` in dom/update): hole
   placements — text holes, unsafe-html holes (split to their own
   `UpdateHtml:`/"R" key namespace), attr holes, and controllables —
   now apply through one shared interpreter dispatching on the typed
   patch keys, with controllable semantics recovered from the live
   element (their names always route through the controllable
   carve-out on their tags). Compiled update entries keep only
   structural dispatch and signal-backed values. Measured: templates
   bucket −5–10% raw across the five apps (scale 32.1 → 30.0 kB);
   ecommerce 44/44 + smokes green; the only behavioral delta is hole
   mutation order within a frame (patch-key order instead of template
   order — one atomic apply either way). The remaining per-template
   update-entry bytes are the merge-function shells, child/branch
   dispatch chains, and seed/value-signal lines — deleted next by the
   classification slice (server-only sections emit no merge function
   at all; dispatch falls back to the interpreter).

   **Second slice landed** (merge-less sections): when a section's
   whole merge reduced to the single generic call, the wrapper
   function is gone — `_update_content` registrations and the
   template's update default export reference the imported
   `_update_scope` interpreter directly. Zero behavioral snapshot
   churn (154 persisted tests byte-stable modulo the deleted
   wrappers); scale templates bucket 30.0 → 29.6 kB raw, totals
   53.8 → 53.4 kB; ecommerce 44/44 + feed smoke 9/9. This is the
   interim form of classification for the leaf case: the module
   still exists but contains no per-template merge code.

   **Third slice landed** (update-generic classification): the
   cross-template metadata question resolved on the `setupEmpty`
   precedent — a template proves at analyze exit (after
   `finalizeReferences`, so serialize reasons and pruning are final)
   that its whole `?update` module would be
   `_resume(id, _update_scope)`: single section (rules out every
   control-flow/content body), no `isInteractive` (event handlers,
   `<script>`/`<lifecycle>`, registered functions), no change
   handlers or dynamic tags (two new analyze footprints — a
   `valueChange=input.setX` reference and a bodiless `<${x}/>` were
   otherwise invisible in analyze data), no known tags, and no
   serialized non-dom bindings
   (seed/value merge lines). Parents read `domExports.updateGeneric`
   from the child's analyzed program extra and dispatch its patch
   scope through `_update_scope` directly — the child's `?update`
   module is never imported, so it never builds. Because merges are
   recorded at translate while the proof is analyze-time, BOTH
   translations tripwire on drift: the `?update` exit throws if
   compiled merge code appears, and the dom exit (which always
   compiles) throws if the render graph has effects or `$global`
   re-runs. Registry safety: dynamic renderer ids are content-section
   ids registered by their _defining_ template's `?update`, and a
   single-section template has no content sections — nothing a
   dropped module was supposed to register. The child's `?persisted`
   graph still arrives through the parent's `?persisted` chain.
   Measured: scale templates 29.6 → 27.8 kB raw, totals 53.4 → 51.6
   (gz 20.6 → 19.8) — the largest phase-2 slice so far; ecommerce
   unchanged (its three tags are all stateful/interactive — the win
   scales with server-only leaf count); suite 8492/0 with
   non-persisted output untouched; ecommerce 44/44 + scale 6/6 +
   feed 9/9. Fixture `persisted-update-generic-child` pins both
   directions (generic leaves incl. an `open` controllable hole;
   a disqualified stateful sibling keeps its import). What remains
   in classification: server-only templates WITH structure (their
   structural dispatch lines and branch-content registrations still
   compile), and then the `?persisted` setup/signal drop for
   server-only components — the measured 75% prize — which needs the
   same proof extended to "nothing client-side ever invokes this
   template's registered graph". **Re-scoped by fork 1's resolution**: this phase is where
   the "cacheable skeleton" actually lives — the measured 75–86% of
   per-template JS that is code around the templates becomes
   deletable, and the retained template/walks (14–25%, ~1 kB gz for
   the whole scale corpus) ARE the factorized skeleton, already
   delivered and immutable-cached as route chunks. Fresh construction
   for server-only content then instantiates template/walks driven by
   the patch's structure (branch lists) and fills — the CSR machinery
   minus per-template setup — instead of fragments; fragments remain
   the cold-path and deep-server-only transport.

   **Fourth slice landed** (transitive classification): the
   child-dispatch line was the last thing keeping a server-only
   _composition_ from classifying — a parent whose merges were all
   generic still compiled a module to hold
   `_update_scope(patch[acc], live[acc])` per child. Update renders now
   serialize an update-generic child's scope link under a typed patch
   key (`UpdateChild:<accessor>`, "S" optimized; `_update_child` in
   html/writer, gated exactly like hole captures: update renders only,
   suppressed in fragment subtrees) and the interpreter descends
   through it recursively — so the parent compiles no dispatch line and
   can itself flag `updateGeneric`. Server-only trees drop their
   `?update` modules at every level, not just leaves. The
   classification predicate relaxed from "no known tags" to "no known
   tag needing a compiled line" (non-generic child, tag variable, lazy
   `load=` child — the last had no merge line to begin with, so its
   live child scope may not exist and descent must never fire). Drift
   safety: the child's flag is resolved ONCE at the parent's analyze
   (custom-tag analyze already reads sibling `domExports` flags there;
   a mid-analysis circular child reads as non-generic on every pass,
   and cycles stably classify non-generic in any entry order) and
   stored on the tag extra — the html serialization, the update-merge
   record, and the classifier all read the stored value, so they
   cannot disagree; the slice-3 tripwires still guard the translate
   side. Document resume keeps the plain-accessor link (the live side
   of descent reads it), which means update payloads carry the link
   twice for generic children (~6 B/child raw) — an update-vs-resume
   reason split would remove it; recorded as a wire follow-up. A bonus
   from the fold: non-generic templates' loop/branch body sections
   whose only lines were generic-child dispatch now collapse to the
   bare interpreter through the slice-2 rule (the navigate fixture's
   loop-content wrapper disappeared). Measured: scale templates 26.0 kB
   raw (from 27.8; phase-2 running total 32.1 → 26.0, −19%), totals
   51.6 → 49.8 raw / 19.8 → 19.1 gz; the js-attribution listing now
   shows almost no update-entry rows — what remains is `?persisted`
   graphs, i.e. exactly the 75% prize. Suite 8499/0 with non-persisted
   output untouched; ecommerce 44/44 (its tags all interactive —
   unchanged, honestly); scale 6/6, feed/docs/dashboard 9/9 each.
   Fixture `persisted-update-generic-tree` pins both directions: a
   two-level server-only composition (badge holes apply through
   recursive descent with neither module built) and a composition with
   a stateful grandchild that keeps compiled dispatch and its client
   state across navigations. What remains in classification: templates
   with _structural_ merges (loops/conditionals need registered signals
   and branch content the patch cannot name yet), then the `?persisted`
   setup/signal drop.

3. **Classification + drop `?persisted` graphs for server-only
   templates** (their loops' registered branch content moves under the
   fragment path or stays as the one retained artifact — see fork 2).
   Acceptance: `scale` persisted total approaches
   `plain + runtime + interactive`.

   **Landed — fragment-first builds (`persisted: "fragments"`).** The
   pin turned out to be exactly two registration side effects in
   `?persisted` entries, and neither is per-template work: (1) every
   non-parent-owned content section force-registered its renderer
   (`_content_resume`) so the fills-path cross-route replay could
   construct never-rendered content — one registration on a run route
   entry's layout-body section pins the entire page tree (the page's
   template/walks/setup and every composed component's exports, pulled
   by import); (2) dynamic-tag replay signals registered for the same
   swap. Everything else in a `?persisted` entry was already pure
   exports (verified: an update-generic leaf's entry is
   registration-free, and even the route entry's only other side
   effect is its seed-signal `_var_resume`). Under the new mode — set
   by @marko/run, whose router always delivers cross-route divergence
   as fragment frames — both registrations are dropped, construction
   material becomes reachable only through imports from _live_
   consumers (loop branch content for keyed additions, conditional
   replay signals for same-route branch swaps — both kept, fork 2's
   conservative option), and bundlers tree-shake the rest. Two runtime
   accommodations: the update deserializer resolves
   intentionally-dropped registrations to undefined instead of
   invoking them (matched-scope spines still serialize renderer refs
   by registry id), and `_update_dynamic` throws on a fragment-less
   renderer mismatch over a live branch (feeding the router's
   full-navigation fallback) rather than silently keeping the stale
   branch — which is also what the same-route dynamic-swap pattern
   (`<layout content=$global.tab === "a" ? A : B/>` without a route
   change) degrades to under this mode; watch-listed, phase 4's
   possession echo is the eventual fix. Plain `persisted: true` builds
   keep today's always-registered behavior (the fixture suite pins
   both modes; the fills-path fixtures stay on the compat mode).

   **Measured (production builds, all suites green: ecommerce 44/44,
   scale 6/6, feed/docs/dashboard 9/9 each):**

   | app       | templates raw     | total raw       | total gz        |
   | --------- | ----------------- | --------------- | --------------- |
   | scale     | 26.0 → **7.2** kB | 49.8 → **23.7** | 19.1 → **10.3** |
   | feed      | → 5.7 kB          | → 30.7          | → 14.9          |
   | docs      | → 6.0 kB          | → 27.5          | → 13.8          |
   | dashboard | → 9.6 kB          | → 35.2          | → 16.5          |
   | ecommerce | → 12.6 kB         | → 40.8          | → 19.9          |

   Scale — the at-scale proxy — dropped 72% of its templates bucket
   and 52% of total JS (46% gz); the marko runtime bucket also fell
   17.8 → 10.5 kB raw as branch-construction machinery tree-shook out
   of the lazy chunks. What remains is the acceptance criterion's
   floor: hydration for interactive components, their update modules,
   and loop/conditional branch content — `plain + runtime +
interactive`. Feed retains its keyed post-row content (fork 2);
   ecommerce retains the most (interactive-heavy — phase 5's C-dedup
   is its lever). The phase-1 fixture-level check also confirms the
   mechanism directly: the fragment fixtures' navigation chunks fell
   43% min / 37% brotli and their shared construction chunk
   (`event.mjs`, 9–11 kB) disappeared.

4. **Same-route fresh branches via fragments** — requires knowing what
   the client lacks. The server-template POC (prior art below) shows
   the cheap sufficient primitive: a **possession echo** — the client
   enumerates which structural sites it holds (branch index per
   conditional site, key set per keyed-loop site; all identities the
   scopes already carry), no digests needed. The server then sends
   fills for possessed sites, a fragment for missing ones, and an
   explicit empty for now-absent ones. Content digests (`x-marko-have`
   T2) become a pure dedup optimization layered on top — skipping
   value re-sends for possessed-and-unchanged branches — so this phase
   no longer waits on the digest canonicalization fork, only on the
   shared cache-policy decision (any client echo fragments cache
   keys).
5. **C2 dedup** for what remains (interactive components).

## Interactions

- **Digest/spine serializer work**: same code neighborhood; fork 2 and
  phase 4 are shared decisions. Fragments make spine suppression MORE
  valuable (fragments carry spine per navigation).
- **CSP/streaming**: fragment frames ride the existing frame executor
  and reorder-style insertion; no new trust surface.
- **Render-once/state seeding**: fragments carry serialized scopes like
  any resumable HTML; seeds keep their client-side `Gen >= applyGen`
  gate — the hostile-patch posture is unchanged.
- **Build time**: phases 2–3 delete the `?update` translate (and most
  `?persisted` translates) for server-only templates — the 4× per-
  template build cost drops toward 2× for most of a design system.

## Measured wire economics (experiments, 2026-07-05)

All numbers from real production builds of the benchmark apps; scripts
committed in the benchmark repo (`scripts/measure/wire-capture.mjs`
drives a browser and records every response a navigation triggers;
`fragment-sim.mjs` extracts the content-hop subtree from the real
persisted document; `js-attribution.mjs` classifies built JS by source).

**What a first cross-route navigation costs today** (gzip; "repeat" =
patch only, hashed assets cache):

| navigation               | patch | + lazy JS (chunks)    | first total | repeat |
| ------------------------ | ----- | --------------------- | ----------- | ------ |
| docs: landing → doc page | 1897  | 7006 (4)              | ~8.9 kB     | 1897   |
| feed: feed → post detail | 626   | 7725 (4)              | ~8.4 kB     | 626    |
| scale: home → about      | 718   | 8989 (3, 25.7 kB raw) | ~9.7 kB     | 718    |
| ecommerce: item → search | 3907  | 8149 (4)              | ~12.1 kB    | 3907   |

The lazy JS is the target route's `?persisted` + `?update` graphs plus
the shared lazy-runtime chunks they pull — the thing options A+B mostly
delete. It dominates every first navigation, 2–12× the patch itself.

**Fragment frame simulation** (the real `<main>` subtree, markers
included, extracted from the served persisted document; lower bound =
values baked into markup replace hole captures, upper bound = subtree +
today's full patch — truth in between since captures dominate patches):

| target            | today's patch | fragment lower | fragment upper |
| ----------------- | ------------- | -------------- | -------------- |
| docs doc page     | 1897          | **1610**       | 2516           |
| feed post detail  | 626           | **506**        | 999            |
| scale about       | 718           | 1044           | 1728           |
| ecommerce /search | 3907          | **3663**       | 7423           |

So for three of four shapes the fragment costs _less per navigation
than today's patch_ while deleting the JS column entirely — repeat
navigations included. The `scale` inversion (+326 gz/navigation,
dense markup + tiny values) is the case the cacheable-skeleton
refinement targets.

**Deletable per-template JS under A+B** (raw kB; classification per the
server-only definition above):

| app       | template JS | server-only graphs (deleted) | interactive kept |
| --------- | ----------- | ---------------------------- | ---------------- |
| docs      | 11.7        | **8.2** (70%)                | 2.7              |
| feed      | 7.4         | **4.7** (64%)                | 2.0              |
| scale     | 31.8        | **24.0** (75%)               | 6.6              |
| ecommerce | 15.6        | **11.7** (75%)               | 3.0              |

Consistently 65–75% of per-template JS deletes, before C dedup on the
interactive remainder (~40% of it, by the main/persisted overlap).

**Extrapolation to a real app** (assumptions explicit: ecommerce's
measured ~1.5 kB raw graphs per non-trivial template, 20–25%
interactive share; a heavy page composing ~40 components):

| scenario, 300 templates     | today         | after A+B+C      |
| --------------------------- | ------------- | ---------------- |
| total lazy template JS      | ~450 kB raw   | ~90–110 kB raw   |
| first navigation to a heavy | ~60 kB raw JS | ~11 kB raw JS +  |
| route (~40-component page)  | + patch       | fragment ≲ patch |
| build translates / template | 4×            | ~2× (most)       |

The scaling term drops ~4–5× and, more importantly, changes class:
what remains is proportional to _interactive_ components — the same
thing hydration already costs.

## What the wire looks like (real bytes, annotated)

<!-- cspell:disable — verbatim wire captures (hashes, handles, minified ids) -->

Everything below is captured from the running feed example's production
build (abridged only where marked). This is the material to spot
optimizations in.

### Today — same-route navigation (feed, `/` → `/?tag=dev`, excerpt)

```js
[
  (_) => [
    0,
    // scope 0: serialized globals -- note the client already knows the URL
    {
      params: {},
      url: new URL("http://localhost:42300/?tag=dev"),
      buildHash: "gKb7nf-KNhQ",
    },
    { a: _(2) }, // wrapper scope: child link
    {
      "NtextContent:a": "Latest — Chatter", // <title> hole
      Dc: "NU9jT3X",
      Ac: _(3),
    }, // layout hop: renderer id + branch
    { a: _(4) }, // page wrapper
    {
      "Nclass:a": ["tags__chip", { "tags__chip--active": !1 }], // "All" chip class
      Ab: [_(5), _(6), _(7), _(8), _(9), _(10)], // chip-row branch list
      Ac: [_(11), _(13) /* …15 post rows… */], // posts branch list
      Dd: 0,
      Ad: _(41),
    }, // load-more conditional
    // one chip branch scope -- and five more shaped exactly like it:
    {
      "Nclass:a": ["tags__chip", { "tags__chip--active": !0 }],
      "Nhref:a": "/?tag=dev",
      b: "dev",
      _: _(4),
      M: 0,
    },
    // …
  ],
  "c0 6",
]; // effect entries
```

### Today — cross-route navigation (feed, `/` → `/post/1`, both frames, whole)

```js
[
  (_, $) => [
    0,
    {
      params: [{ id: 1 }, $],
      url: new URL("http://localhost:42300/post/1"),
      buildHash: "gKb7nf-KNhQ",
    },
    { a: _(2) },
    { "NtextContent:a": "Post #1 — Chatter", Dc: "PN6WCqo", Ac: _(3) }, // renderer MISMATCH -> swap
    { a: _(4) },
    { Da: 1, Aa: _(5), Bi: new Set([_(7)]) }, // page if + closure set
    { c: 4, Ad: _(7), _: _(4), b: _(6) }, // comments count, await link, child
    // the post-card child's input values, spelled one key per hole:
    {
      "Nstyle:a": "background:hsl(320,65%,42%)",
      b: "H",
      c: "Hana Kim",
      d: "hanakim",
      e: 2,
      f: "Today I learned that the feature flag we forgot to delete quietly became load-bearing. Simplicity compounds.",
      "Nhref:j": "/post/1",
      k: 4,
      l: "career",
      x: 599,
      a1: !1,
    },
    { _: _(5), C: "d", Q: _(5, "d0") },
  ],
  "c0 6",
][
  ((_) => [
    7,
    { Aa: _(8) },
    { Aa: [_(9), _(10), _(11), _(12)] }, // comments await frame (400 ms later)
    {
      "Nstyle:a": "background:hsl(290,65%,42%)",
      b: "T",
      c: "Tunde Bakare",
      d: 0,
      e: "Been there. The flag is still in prod.",
      M: 1,
      _: _(8),
    },
    // …3 more comments; note the serializer's backrefs (_.a, _.b) dedupe repeats
  ],
  "cp5xfEm 1")
];
```

Plus, invisible here but measured above: this navigation also pulled
**16.6 kB raw / 7.7 kB gz across 4 JS chunks** — the post route's
graphs — before the applier could construct anything.

### Today — the per-template merge code option B deletes (feed `/`, prettified from the build)

```js
const chipsFor = _update_for(1, "b0", (branch, args) =>
  chipMerge(args[0], branch),
);
const postsFor = _update_for(2, "b1", (branch, args) =>
  postMerge(args[0], branch),
);
register("b3", (patch, live) => {
  if ("l" in patch) live.l = patch.l; // scope stores
  if ("m" in patch) live.m = patch.m;
  if ("r" in patch) live.r = patch.r;
  if ("Nclass:a" in patch) _attr_class(live.a, patch["Nclass:a"]);
  if ("Ab" in patch) chipsFor(live, [patch.Ab, "M"]); // reconciles
  if ("Ac" in patch) postsFor(live, [patch.Ac, "M"]);
  if ("Dd" in patch) {
    /* conditional replay + branch content dispatch */
  }
});
```

Every line is mechanically derivable from the patch's typed keys — for
a template with no signals to invoke, this function is pure ceremony.
That is option B: one shared interpreter, zero per-template bytes.

### Proposed — fragment frame (option A; the real `/post/1` subtree)

Frames are already newline-delimited tuples; add a fragments slot:
`[fills, effects, fragments]` where each fragment is
`[anchorScopeRef, accessor, html]` and the html is a scoped resumable
render (markers, branch brackets, and its own serialized scopes ride
inline exactly as streamed reorder content does today):

```js
[(_,$)=>[0,
  {params:[{id:1},$],buildHash:"gKb7nf-KNhQ"},  // globals (matched-scope fills, unchanged)
  {a:_(2)},
  {"NtextContent:a":"Post #1 — Chatter",Dc:"PN6WCqo"}],
 "",                                            // effects for matched scopes
 [[2,"c",`<!--M_[--><!--M_[--><a class=backlink href="/">← Feed</a><article class=post><div class=post__avatar style=background:hsl(320,65%,42%)>H<!--M_*6 b--></div><!--M_* a--><div class=post__body><header class=post__meta><strong class=post__name>Hana Kim<!--M_* c--></strong><span class=post__handle>@<!>hanakim<!--M_* d--></span><span class=post__time>2<!--M_* e-->m</span></header><p class=post__text>Today I learned that the feature flag we forgot to delete quietly became load-bearing. Simplicity compounds.<!--M_* f--></p><footer class=post__actions><button class=post__like>♡<!--M_* h--> <!>599<!--M_* i--></button><!--M_* g--><a class=post__comments href=/post/1>💬 <!>4<!--M_* k--></a><!--M_* j--><span class=post__tag>#<!>career<!--M_* l--></span></footer></div></article><section class=comments><h2 class=comments__title>4<!--M_*5 c--> comments</h2><!--M_[--><!--M_!^7-->Loading comments…<!--M_!7--><!--M_]5 d 7--></section><!--M_]4 a 5--><!--M_]2 c 3--><script>/* scoped resume data + effect entries for scopes 3..7 */</script>`]]
```

That html string is byte-for-byte the served document's `<main>`
content — every value baked in, the await placeholder + reorder anchors
already in place so the comments frame streams into it unchanged. The
post-card's input-value block from today's patch disappears (redundant
with the markup); the client needs **zero** post-route graph JS.

### Proposed — cacheable-skeleton variant (fork 1)

> Fork 1 resolved against building this as a general mechanism (see the
> forks section — the factorized template/walks in route chunks are the
> skeleton, already cached). The sketch is kept for the one case it
> still fits: per-URL whole-page shells for content sites.

```
GET /_marko/f/gKb7nf-KNhQ/post.$~index        (immutable, CDN-cacheable)
-> the same subtree with hole sites empty -- which is exactly the
   compiled template's static parts, the artifact ?persisted ships
   today as JS strings

patch frame: [fills, effects, [[2, "c", "@post.$~index", { /* hole
fills by accessor, same typed keys as today */ }]]]
```

First visit: skeleton + fills; repeats: fills only (≈ today's patch,
minus the redundancy). This converges with today's registered content —
the decision is only _where the static parts live_: JS chunk (today),
per-navigation wire (fragment-whole), or cacheable resource (skeleton).

### Observations while staring at these (optimization hooks)

- The patch echoes `url: new URL("…")` — the client fetched that URL;
  ~40–70 B/navigation of pure redundancy.
- Owner refs (`_:_(4)`) and positional keys (`M:0…`) are spelled on
  every branch scope, yet both are implied by the containing branch
  list's identity and order.
- Sibling branch scopes repeat their key structure verbatim (six chips
  = six near-identical objects); gzip absorbs much of it, but a
  columnar encoding (keys once, values per row) would shrink raw parse
  cost and the T2 digest input.
- `Dc:"NU9jT3X"` renderer ids ride every navigation even when the
  renderer did not change (same-route); absent-means-unchanged could
  apply to them.
- Closure sets (`Bi:new Set([_(7)])`) serialize into update payloads
  that never invoke them for request-derived values (already recorded
  in `agent-feedback/perf.md`).

<!-- cspell:enable -->

## Prior art: the server-template POC

An early standalone prototype (Dylan's `server-template-poc`) is the
embryo of this whole direction — one template program driving two
writers (HTML with inline markers / values-only JSON), a client that
echoes what it structurally possesses (`x-refresh` listing populated
condition sites), and a server that answers with values for possessed
regions, an HTML fragment for newly-shown ones, and `null` for
now-hidden ones — the fills/fragment hybrid of this document in ~300
lines. Three of its choices carry forward here:

- the **possession echo** (adopted in phase 4: binary structural
  possession decides fragment-vs-fills; digests stay optional dedup);
- **keyless region-ordered value arrays** consumed by walking the live
  DOM's marker sites (adopted as the option B payload refinement; note
  the same ordering contract also deletes the compiled merge functions'
  per-line `"key" in patch` presence guards — with positional values,
  presence is structural — so the wire-bytes lever and the
  compiled-dispatch boilerplate resolve together);
- self-describing **attr-site markers on the element itself** (its
  `#id<name>` marker attributes) — noted as a variant that would let
  the interpreter apply attr holes with no scope lookup at all, at the
  cost of document bytes per dynamic attr; worth weighing inside the
  generic-applier design.

Two of its simplifications are deliberately not adopted: branch wrapper
_elements_ (`<t id=^…>`) — comment brackets keep CSS/semantics intact,
and Marko already has them — and `innerHTML` application for possessed
regions, which the matched-scope fills path supersedes. Its use of the
Navigation API for interception (vs click/submit listeners) is a small
router upgrade worth taking when support allows.

## Open questions / forks (decision needed)

1. **Fragment cacheability split** — **RESOLVED (2026-07-06): no
   skeleton-resource mechanism; fold the effort into phases 2/3.**
   The realization (raised in review): a skeleton is the dom build's
   template/walks, expanded per request — with resume markers as a
   per-instance re-encoding of what walks encode once per template.
   The factorized artifact already has a delivery mechanism and an
   immutable cache: the lazy route chunks. Measured across the five
   apps (`scripts/measure/template-split.mjs` in the benchmark repo —
   markup + walks string literals vs everything else in the client
   chunks):

   | app       | templates bucket | construction material | material share |
   | --------- | ---------------: | --------------------: | -------------: |
   | scale     |          32.1 kB |                8.0 kB |            25% |
   | ecommerce |          15.8 kB |                3.5 kB |            22% |
   | dashboard |          12.0 kB |                2.7 kB |            22% |
   | feed      |           7.5 kB |                1.1 kB |            14% |
   | docs      |          11.9 kB |                5.4 kB |            45% |

   75–86% of per-template JS is the code AROUND the templates (setup,
   signals, merges, registrations) — the part option B's generic
   applier makes deletable for server-only components. The byte floor
   (template/walks kept as the construction dictionary) is 14–25% —
   and it compresses absurdly well (scale's entire 80-component
   dictionary gzips to ~1.1 kB). The factorized route needs no new
   endpoint or hint protocol, no structural cache keys, no
   cold-navigation round trip, and no marker-id canonicalization
   (construction happens client-side in the client id space, as fills
   do today) — the entire hard part of the skeleton-resource design
   evaporates. Expanded skeletons keep three narrower roles: the
   cold-path transport when the target's slimmed chunk isn't loaded
   (exactly what v1 fragments are), structure too server-derived for
   branch lists, and per-URL whole-page shells for content sites
   (docs — the 45% outlier — where a CDN-cacheable shell plus
   personalization fills is the right shape and v1 fragments already
   beat fills). The proposed-payload sketch below is kept for that
   last case only.

2. **Loop branch content for server-only templates**: keep today's
   per-loop registered `[template, walks, setup]` arrays (small,
   preserves same-route keyed additions without fragments until phase
   4), or fragment-ize immediately and accept phase-4 coupling for
   keyed additions?
3. **Classification boundary**: is `<let>` seeded-from-server state
   enough to disqualify (proposal: yes — seeds need signals), and do
   attr-tag/content-holding templates classify by their own body only
   (proposal: yes — children classify independently)?
4. **Matched-scope DOM identity guarantee**: confirm fragments are
   NEVER used where a scope matched (holes only) — proposed as a hard
   rule; the alternative (fragment-replace matched subtrees) would
   silently drop client DOM state (focus, media playback) and is
   rejected here, but stating it as an invariant needs sign-off.
