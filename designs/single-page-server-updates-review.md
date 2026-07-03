# Single-page server-first updates — shape review

A critical review of the implemented shape (slices 1–3 plus the vite/run
prototype), written after validating against the marko-ecommerce app. Reads
alongside [the design doc](./single-page-server-updates.md) and
[the handoff](./single-page-server-updates-handoff.md).

## The goals, restated as invariants

Every design choice below is judged against these; they are the product
definition, not aspirations:

1. **Initial render stays optimal** — first-visit perf, HTML bytes, and JS
   bytes must not regress for apps that don't opt in, and must regress as
   little as possible for apps that do. (Today: non-persisted builds are
   byte-identical; persisted builds pay only serialization bytes on the
   wire, and only when the render flag is set.)
2. **Navigations beat full page loads on bytes** — an update response should
   ship roughly "the values that changed + structural outcomes", not a
   second copy of the document.
3. **SPA-like continuity** — ephemeral client state (`<let>`, form inputs,
   scroll, media playback) survives; effects don't replay; DOM identity is
   preserved for kept content.
4. **User code stays on the server** — the same code that stays server-only
   in an MPA (data access, business logic, template render expressions)
   stays server-only under persisted pages. The client gets _placement_
   code, not _computation_ code.

## What the current shape is

- Compile: `persisted: true` (server + dom) adds a request-gated
  serialize-reason bit; markers/spine serialize when `$global.persisted` is
  set, values only where state already required them. `persisted: "update"`
  (dom) compiles the template's **update entry**: per-section merge
  functions over the same accessors.
- Serve: a navigation request re-renders the target with
  `$global.persisted = "update"`; the fill it emits _is_ the patch (existing
  resume format, patch-local scope ids).
- Client: a lazy `?update` chunk (the compiled merges) + `applyUpdate`
  (patch-aware serialize context, `$global` merge, top-down tree merge,
  queue flush). Shared signals/branch content come from the already-loaded
  main modules through the resume registry — the update chunk carries **no
  markup strings and no expressions**, only placement statements.

## Judgement against the goals

**Goal 4 (server-only user code) is the load-bearing win and the shape
delivers it structurally.** Merge functions are compiled from the template
but contain no user expressions — only `live[k] = patch[k]`, `_text`,
`_attr`, signal invocations, and child dispatch. There is no way for a
render expression to leak client-side through this pipeline, which is the
property alternatives struggle with (see below).

**Goal 3 works and is the strongest validated result.** The fixture and
browser runs show: kept-element identity through keyed reconcile, `<let>`
state surviving hostile payloads (merges only read compiled prop lists),
no effect replay (exactly-once event binding), fresh branches cloned from
already-loaded content. This falls out of reusing the signal graph rather
than reinventing a diff layer.

**Goal 2 is delivered end-to-end (dev-validated).** Update responses
suppress all static HTML and emit a **newline-delimited stream of serializer
frames** (bare JS fill arrays, one per flush). Measured on the ecommerce app
(dev, uncompressed runtime): item page 18.2 KB document → 6.4 KB update
(3.8 KB → 1.35 KB gzip); cart 2.6 KB → 0.7 KB; the hole-dense search page
92 KB → 42 KB (pre-filter). The state-only prop filter has since landed
(source-classified value gates: state-sourced values never serialize in
update renders), removing matched-scope state defaults from payloads;
effect strings still ride along inert on some paths (unidentified
`writeEffect` caller beyond `_script` — measure-first follow-up).

**Goal 1 has a real, measured cost to manage: the persisted spine.** The
opt-in initial render pays for markers + spine + (new in slice 4 debugging)
always-serialized child-scope links. Measured on the ecommerce app before
this turn: +11% raw / +16% gzip on a typical page, +22%/+50% on a
deliberately hole-dense page (60 cards × 5 holes). The planned levers —
cross-template marker suppression, fragment-class regions (subtrees that
swap as HTML instead of merging), and tier-2 hint pruning — exist in the
design but none are implemented. This is the second-highest-value remaining
item, and it is also the honest "con" of the whole approach: **you pay on
every first visit for the ability to update cheaply later.** Apps where
navigation is rare should not enable it; the API should make that a
per-route choice (see boundaries).

## The update chunk is (already) a separate lazy chunk

Worth stating explicitly since it is a core requirement: the `?update`
module is its own chunk, imported dynamically on first navigation — never
part of the page's initial JS. Its content scales with the template's
_reactive structure_, not its markup (ecommerce item route: wrapper 3 lines;
page entry ~1.6 KB pre-min, sharing all markup/signals with the main
modules via the registry). The intended steady state for a navigation is:

    response = [fills] (+ [effects for fresh subtrees]) (+ [assets frame])
    client   = update chunk (cached after first nav) + the same minimal
               init the MPA already shipped

i.e. the update path _reuses_ the MPA's initialization story — the resume
runtime, the registry, the walks — and adds only the applier + merges.

## Alternatives considered (and why the shape holds)

- **HTML diff/morph (Turbo, htmx, DOM-morphing libraries).** Zero compiler work, ships
  today. But: byte cost is O(document) per navigation (server renders and
  sends full HTML), state preservation is heuristic (id-matching; `<let>`
  state, effect identity, and focus are best-effort), and effects replay
  unless manually guarded. Fails goals 2 and 3 in the ways that matter to
  Marko; acceptable fallback tier, not the core.
- **Ship the render code, fetch data (classic SPA / islands).** Fails goal
  4 outright — expressions and data-massaging move client-side, JS bytes
  scale with app surface.
- **RSC-style serialized trees.** Preserves goal 4, but the wire format is
  O(rendered tree), not O(changed values); client runtime is heavier; and
  reconciliation is against a serialized tree rather than the live signal
  graph, so goal 3 depends on a separate diff.
- **B1 opcode tables / B3 effect-driven merges** (measured in the proposals
  doc): smaller constant overhead per template vs compiled functions, but
  interpreter cost, worse debuggability, and no minifier leverage; B2
  compiled merges won on measurement and stay the right call.
- **Wire-delivered branch markup** (the `templates` frame spike): superseded
  by registry sharing for same-route updates (zero duplicate bytes), may
  return for cross-route priming.

## Where the APIs should live

The prototype deliberately smeared responsibilities to move fast; the
target boundaries are:

| Layer                  | Owns                                                                                                                                                                                                                                                                                                                                                                        | Public surface                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `@marko/compiler`      | `persisted: boolean \| "update"` compile option                                                                                                                                                                                                                                                                                                                             | Internal — set by tooling, not by hand                                                            |
| `marko` (runtime-tags) | Serialize-reason lattice; update writer mode (`$global.persisted`); `?update` codegen; `dom/update` (`applyUpdate`, registry helpers, root pairing)                                                                                                                                                                                                                         | **None intended for app authors.** `$global.persisted` and `applyUpdate` are the tooling contract |
| `@marko/vite`          | `x.marko?update` module kind; update chunks in the manifest; id-consistency across the html/dom/update compiles of a template (shared `optimizeKnownTemplates` / `getTemplateId`); build hash                                                                                                                                                                               | `persisted` plugin option (forwarded by run)                                                      |
| `@marko/run`           | **The feature as users see it**: route/app-level opt-in config, middleware that sets `$global.persisted` (incl. update content negotiation), the client router (link interception, fetch, chunk loading via manifest, `applyUpdate` call, history/scroll/focus, fallback-to-reload), wrapper-template generation (already the pairing root), per-route update-entry mapping | e.g. `marko({ persisted: true })` or per-route flag; everything else automatic                    |

Notes on the boundary reasoning:

- Persisted pages **ship with @marko/run**: only run knows routes, so only
  run can map a URL to "which update entry do I import", generate the
  wrapper templates that make root pairing trivial, and own the fallback
  ladder (build-hash mismatch, cross-route without a shared wrapper, any
  protocol error → `location.assign`). The ecommerce prototype hand-writes
  exactly this glue (`src/util/persisted-nav.ts`) and it reads like run
  router code because it is run router code in the wrong repo.
- The marko runtime exports (`applyUpdate` etc.) are a **tooling contract,
  not an app API** — same tier as `_resume`/`init`. Generated update
  entries re-export `applyUpdate` so consumers never import the runtime by
  path (this also guarantees a single runtime instance; a second copy has
  its own registry and silently pairs nothing — hit in practice during
  validation).
- `@marko/vite` stays mechanical: it turns compiler capability into
  modules/chunks/manifest entries and enforces the id-consistency
  invariant. It should not know about routes or negotiation.

## Validated end-to-end (ecommerce, dev mode)

Clone-and-run linking works (`npm run setup`: git-linked branch checkouts →
build → pack → install). In a real Chromium run: link click intercepted,
update chunk lazy-loaded, update response fetched (full render with
`persisted: "update"` via middleware content negotiation), fills extracted
and applied through generated entries — no page reload, history updated,
client state intact. Three compiler bugs found and fixed only because the
app exercised shapes the fixtures didn't (per-attr reason groups, spine
elision on attr-less wrapper tags, update-entry import ordering).

## Known gaps (the honest list, in priority order)

1. **Dynamic-tag / renderBody descent** — `<${input.content}/>` (every
   layout) emits no structural link in update mode, so merges cannot cross
   the layout→page hop; content-section merges also need registry dispatch
   (by renderer id) since the content's merge lives in the composing
   template's entry. Blocks real-app end-to-end updates.
2. **Branch/hole emission gaps on real page shapes** — the ecommerce item
   page (`<if>/<else>` + only-child optimizations + `<try>/<await>`
   siblings) emits the conditional outcome but not the branch scope link or
   the branch's hole values; the fixture's simpler shape works. Needs a
   writer-path audit driven by fixtures reproducing these shapes.
3. **Response framing + static-HTML suppression** — the bytes goal (above).
4. **Spine cost levers** — marker suppression / fragment regions / pruning
   for the initial-render overhead.
5. The previously documented deferred items: state-only prop filter (updates
   currently carry default state values — inert but bytes), `_await`
   semantics in update mode, mixed state∩input structure, controllable inputs,
   item-split class/style merges, `MARKO_DEBUG` pairing asserts.
