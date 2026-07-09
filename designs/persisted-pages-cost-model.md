# Persisted pages — cost model, invariants, and levers

Companion to [persisted-pages-architecture.md](persisted-pages-architecture.md).
That document records what landed and why; this one is the optimization
map now that the implementation is close: every axis where persisted mode
costs something, the invariants those costs rest on (or that new levers
could add), and the levers ranked by measured yield across **real app
shapes**, not just the ecommerce benchmark.

Method: five benchmark apps in the `marko-ecommerce` repo, chosen to
bracket real-world MPA types rather than flatter one page shape —

| app         | shape                             | dominant navigation           |
| ----------- | --------------------------------- | ----------------------------- |
| `ecommerce` | mixed retail (grids, forms, cart) | mixed same-/cross-route + PRG |
| `docs`      | hole-sparse content site          | cross-route into content      |
| `dashboard` | hole-dense tables + KPI tiles     | same-route filter changes     |
| `feed`      | keyed list growth, per-item state | same-route grow/filter        |
| `scale`     | design-system app, 80 components  | cross-route between subsets   |

The first four bracket page _shapes_; `scale` isolates the **component-
count axis** — small demos overweight fixed runtime costs, so every
JS conclusion below is split into fixed vs per-template parts
(`scripts/measure/js-attribution.mjs`, sourcemap-attributed).

Each measures the same matrix (`scripts/measure/` there): document
overhead (persisted vs plain render of the same build), update payload vs
document, client JS (eager per page + total, persisted build vs
non-persisted build), plus a Playwright smoke asserting the navigation
model actually holds (no reload, client state survives, awaits stream).

## Cost axes

Persisted mode spends in six places. Everything below is per axis:
anatomy, what is already landed against it, and what is left.

### A. Initial document bytes

Every page view pays this, including visitors who never navigate; it is
the axis crawlers and CDNs see. Anatomy (ecommerce `/search`, the
hole-dense worst case, level-9 gzip):

- **A1 — node markers** (the patch addresses). Was 82% of a +54.4% gzip
  delta; the same-scope continuation encoding (landed — see
  `persisted-pages-architecture.md`'s "The initial-render spine") cut the
  page to **+19.1%** (`/item` +16.4% →
  **+8.6%**). Full node-marker removal (walk-derived addressing) is now
  worth only ~−0.5 kB gz there: poor value, requires trusting compiled
  walks against a document the applier didn't render.
- **A2 — resume-script spine**: owner refs (32× on `/search`), loop keys
  (60×), `_hole_value` captures, scope writes. Now the dominant residual
  (+2.5 kB raw on `/search`).
- **A3 — branch/separator markers**: negligible (measured).

The load-bearing observation: **document overhead must scale with
holes + branches, never with content size**. The docs app exists to pin
the floor — a hole-free landing page should measure ~0 overhead, a prose
page's overhead should track its handful of nav-link holes, not its
kilobytes of paragraphs. If the floor is not ~0, something structural is
wrong (this round's numbers below).

### B. Update payload bytes

Per navigation, usually uncacheable (but see the cache fork below).
Landed against it: state-value filtering by source class, client-signal
coverage skipping, resume-only wiring suppression (−35%), render-once
contract (no refs-less hole captures), reason-less dead-merge pruning,
suppression of all static HTML/walks/reorder machinery. Ecommerce
payloads sit at ~20–25% of the corresponding document gzip.

Remaining anatomy is genuine content plus **matched-content overlap**:
a keyed loop that mostly survived the navigation still re-ships every
branch subtree. The feed app's load-more (15 → 30 posts re-ships the
matched 15) and the dashboard's filter toggles measure this precisely —
it is the `x-marko-have` T2 case (design decision pending: digest
canonicalization + per-route cache policy, since echoed digests fragment
cache keys).

### C. Client JavaScript

Three distinct sub-axes; conflating them produced wrong conclusions
twice (see the corrections recorded in `agent-feedback/perf.md`'s
"Persisted eager client cost" entry):

- **C1 — eager (hydration) JS.** The slim `?persisted` split landed:
  `/search` eager 31.5 → **19.1 kB raw / 9.1 kB gz** vs the 8.6/4.5
  non-persisted baseline. The remaining gap is **runtime chunk hosting,
  not render graphs**: a module mixing hydration-phase and update-phase
  exports hosts eagerly with all its imports (controllable `_script` vs
  `_default` variants; `_enable_catch`'s neighbors). Finishing the phase
  partition is mechanical now that the packaging (preserved modules +
  `sideEffects`) supports it.
- **C2 — lazy JS total.** The `?persisted` render-graph modules cost
  +7.3 kB raw total app JS on ecommerce — deliberate duplication (the
  state seam fixed correctness, not bytes). Loaded on first navigation
  only. This is the axis that scales with component count — see the
  scaling section: at 80 components it is the majority of the build.
- **C3 — the shared-runtime tax on everyone.** Persisted-enabling
  indirection in the runtime costs non-persisted apps +36..120 min bytes
  (benchmark apps), and the walker's continuation parsing ~+18 brotli.
  User-code buckets stay byte-identical (verified per rebase). This axis
  has a hard invariant, below.

### D. Server CPU

An update render runs the full template (HTML writes no-op; the
serializer still runs). Seed-mode renders serialize state everywhere
(v1; matched-scope waste measured small). Digests would add a
serialization pass or a hash per keyed branch. Unmeasured so far —
acceptable while renders are cheap relative to app data work, but the
digest decision should include a renders/sec probe before/after.

### E. Navigation latency

Per-frame streaming apply gives MPA-parity paint (first frame commits
history/scroll); fetch and entry-chunk load run in parallel; CSS rides
the module graph ahead of first apply. First navigation pays the lazy
`?update`/`?persisted` chunk load once. The smoke scenarios log
click→applied timings per app. Remaining lever: predictive preload of
the update entry (hover/viewport), plain router work, unblocked.

### F. Semantics / authoring model

Costs that are contracts, not bytes:

- **Render-once**: `$global` and input/params derivations are the only
  navigation-refreshable channels. Discoverability diagnostic still
  pending (needs severity/opt-out design).
- **State survival**: same-route navigation preserves matched-scope
  client state — usually right (feed likes, form fields), sometimes
  wrong (docs "was this page helpful?" widget survives across doc
  pages). There is no idiom for "reset this state per navigation" —
  needs one (key-by-input or an explicit derivation) before users hit it.
- **The `server import` footgun**: a plain `import` referenced only from
  update-guarded computes silently bundles (ecommerce shipped a 74 kB
  catalog once). Diagnostic designed, hedged wording required
  (`agent-feedback/perf.md`).

## Invariants

The system's costs are bounded by invariants. Existing ones first — each
buys something specific, and several are now load-bearing for levers:

1. **Byte-identical non-persisted output** (hard). Every lever must pass
   the fixture-corpus byte check; this is what makes the feature
   shippable as a flag.
2. **Zero user-code drift for non-persisted apps** (C3). Runtime
   indirection may cost shared-runtime bytes, but user buckets stay
   byte-identical — proven per rebase against the benchmark apps.
3. **Id consistency across compiles**: html/dom/`?update`/`?persisted`
   compiles of a template share register/accessor ids (one
   `optimizeKnownTemplates` array; ids pre-allocated during the shared
   analyze so compile order can't permute them). Everything
   registry-shared rests on this.
4. **Interleave bracketing**: async/reordered content lives in its own
   chunk; branch markers bracket structural boundaries. Bought the
   continuation encoding; any future run-length/delta encoding of
   markers or spine leans on the same property.
5. **Disjoint inline-lookup key spaces**: every marker comment lands
   in the per-render lookup keyed by post-symbol payload; reorder
   anchors share it. New marker forms must stay disjoint by construction
   (the continuation's leading space). A pre-existing branch-start
   collision hazard is recorded in `agent-feedback/bugs.md`.
6. **Fresh-only client mutation**: patches change only scopes created
   during the apply (`Gen >= applyGen` for effects and seeds); matched
   scopes' state is never patched. This is the hostile-patch defense and
   the reason state seeding could serialize broadly.
7. **Effects never replay** on matched scopes; fresh-subtree wiring
   rides the payload as effect entries.
8. **Single-instance module state** across main/`?persisted` module
   pairs (scriptlet bindings exported/imported; no re-registration).
9. **Render-once contract** (axis F): defines what a navigation may
   refresh, which is what made hole capture/merge decidable at compile
   time.
10. **A module hosts in one chunk**: not ours, the bundler's — but it
    governs C1 entirely. Retention analysis without hosting analysis
    produced a wrong conclusion once (handoff attempt-1 postmortem).

New invariants worth **adding** (each unlocks a lever):

- **I-a. Overhead proportionality** (axis A): persisted document
  overhead is O(holes + branches). Enforce with the docs-app floor
  measurements as regression checks, so no future slice quietly attaches
  cost to static content.
- **I-b. Derivable wiring never ships** (axis A2): anything the resume
  walk can reconstruct from document structure must not ride the spine.
  Already true for pure-state branch owners (owner-from-marker skip);
  candidates: owners for persisted-spine branches (blocked on the
  tree-shaken-branch-module + reorder-timing issues recorded in
  `agent-feedback/perf.md`), and positional keys for `by`-less loops
  (both sides are positional; the key list is implied). This is the
  spine-suppression lever's contract.
- **I-c. Absent-means-unchanged, branch-granular** (axis B): sparse
  patches already mean "key absent = no change"; digests extend the same
  contract to whole keyed-branch subtrees (tombstones). The client-side
  half (record digests per loop accessor × key) must stay bounded and
  same-route-scoped.
- **I-d. Update-phase code is never eager** (axis C1): the target state
  of the phase partition — a page that never navigates loads exactly its
  non-persisted hydration graph plus the router's interception stub.
  Checkable per app in the measurement matrix (eager persisted ≈ eager
  plain + router client).

## Lever catalog (ranked)

Ordered by expected real-world yield ÷ risk, with the app shapes each
lever matters for. Measured numbers are ecommerce until the matrix
section below fills in the other apps.

1. **Resume-script spine suppression** (A2; leans on I-b). The dominant
   document residual (+2.5 kB raw on `/search`; owner refs + loop keys +
   captures). Serializer/translator work, same code the digest design
   touches — do them together. Matters most: dashboard/feed (loops),
   least: docs. Prerequisite: the two blockers in `agent-feedback/perf.md`
   (branch machinery tree-shaken out of resume bundles; reordered
   content racing its markers) need an explicit enable in the resume
   payload or deferred subscription linking.
2. **`x-marko-have` T2 digests + tombstones** (B; adds I-c). The only
   lever against matched-content overlap — the feed/dashboard payload
   shape. Decision-ready design in `persisted-pages-roadmap.md`
   (canonicalization approach + per-route cache policy are the open
   forks). Pair with a server CPU probe (D).
3. **Finish the runtime phase partition** (C1; adds I-d). Mechanical
   splits (controllable `_script`/`_default`, control-flow construction
   API out of the eager path); measured path from 9.1 gz toward the
   ~5 kB neighborhood of baseline+router. Matters everywhere; it is the
   whole persisted-JS story for docs-shaped apps, whose pages have
   almost no interactive signals of their own.
4. **URL-input-deps pruning** (B, cheap variant): compiler-emitted
   param-source deps ∩ changed URL inputs skip provably-unchanged
   sections (layout chrome on same-route navigations). No cacheability
   cost, low yield on content pages, decent on chrome-heavy apps.
5. **Preload update entries** (E): hover/viewport hints. Small, safe,
   unblocked.
6. **Pure-`$global` hole captures → globals partial** (A2/B, small):
   deliberate residual from the demotion; bytes only.
7. **Positional-key elision for `by`-less loops** (A2, part of 1):
   listed separately because it is independently shippable and
   fixture-testable.
8. ~~Full node-marker removal via walk-derived addressing~~ (A1):
   measured ceiling ~−0.5 kB gz on the worst page; requires trusting
   compiled walks against an unrendered document. **Rejected this
   round.**
9. **Render-graph dedup across main/`?persisted`** (C2): +7.3 kB raw
   lazy-total is intentional duplication; the scaling section answers
   the "does it show up in real budgets" question — at library scale it
   does, though the bigger at-scale answer is wire-delivered fragments
   (see the recommendation); the state seam constrains how far sharing
   can go (module-state duality postmortem).

## Evaluation criteria ("carefully optimized" means…)

Targets the matrix should hold per app shape — floors, not averages:

- docs-shaped: document overhead ≤ ~2% gz on content pages, ~0 on
  hole-free pages; eager JS within ~1.5 kB gz of the non-persisted
  build; update payload for a doc→doc navigation ≈ the content that
  changed.
- dashboard-shaped: document overhead bounded by A1+A2 anatomy (no
  surprises beyond the table's holes); same-route filter payload well
  under the document; smoke's click→applied under ~150 ms locally.
- feed-shaped: matched-row overlap visible and bounded (until T2 lands
  it IS the payload); like-state survives every same-route navigation.
- component-scale: per-component marginal JS stays proportional to
  component source (no per-component cliff) and fully lazy; the eager
  delta stays flat in component count.
- everywhere: non-persisted build of the same app byte-identical in
  user code; zero console errors in smokes; awaits stream in updates
  exactly as in documents.

## Measured matrix (2026-07-05)

Production builds, post ALL THREE fixes this round's evaluation caught
(nested participation, `updateGuard`, stable-param delivery — see the
handoff). Ecommerce numbers from its own suites for comparison.

**Documents** (gzip, plain → persisted render of the same build):

| page                            | gz          | Δ          | markers   |
| ------------------------------- | ----------- | ---------- | --------- |
| docs landing ("hole-free")      | 1648 → 1880 | **+14.1%** | 3 → 32    |
| docs doc page                   | 2261 → 2628 | +16.2%     | 7 → 58    |
| docs about (static file-route)  | 2467 → 2702 | +9.5%      | 3 → 32    |
| dashboard overview (50×7 table) | 3393 → 4036 | +19.0%     | 53 → 560  |
| dashboard order detail          | 1520 → 1737 | +14.3%     | 13 → 40   |
| feed (15 posts)                 | 2320 → 2582 | +11.3%     | 45 → 201  |
| feed (30 posts)                 | 3171 → 3558 | +12.2%     | 90 → 381  |
| feed post detail                | 1603 → 1788 | +11.5%     | 8 → 46    |
| ecommerce /item/2               | 2607 → 2833 | +8.7%      | 44 → 128  |
| ecommerce /search               | 5422 → 6458 | +19.1%     | 201 → 806 |

The band is bounded (+9…19% gz) and tracks holes/branches, not content
size — but the **floor is not ~0**: the docs landing has no holes of its
own yet pays +14.1%, all of it layout chrome (sidebar links, header,
title) — and ~6 points of that arrived with this round's correctness
fixes (pre-fix the landing measured +7.8%; nested nav loops now emit
participation machinery, and stable-loop param holes — every sidebar
label and href — now mark and capture, +1.3 points and 11 markers of
the total). The A-floor criterion (≤~2% on content pages) is **not
met**; what closes it is spine suppression plus layout-section pruning,
not marker work (A1 confirmed done across shapes).

**Update payloads** (gzip; share of the persisted document):

- Content-refreshing navigations: docs doc→doc 1742 (66%), dashboard
  filter change 2485 (62%), feed 1652–2424 (64–68%). The content is the
  payload — but note the asymmetry: the document is cacheable, the
  update usually is not.
- Chrome-only/light navigations: docs landing 586 (31%), about 592
  (22%), order detail 507 (29%), post detail 656 (37%) — these are
  mostly plumbing + layout captures, the URL-input-deps pruning target
  (stable-param delivery added ~+100 gz here: the sidebar's labels and
  hrefs now ride every update so fresh construction is complete —
  bytes the digest/deps levers can reclaim for matched scopes).
- **Matched-content overlap, measured**: feed load-more (15 → 30) ships
  an 8803-raw patch of which ~4920 raw (~56%) re-ships the 15 matched
  rows — the T2 digest yield ceiling for list-growth shapes.

**Client JS** (non-persisted build → persisted build):

| app       | eager gz (worst page) | total raw on disk    |
| --------- | --------------------- | -------------------- |
| docs      | 3.5 → 10.6 kB         | 6.9 → 35.6 kB (×5.2) |
| dashboard | 3.9 → 7.7 kB          | 7.9 → 39.4 kB (×5.0) |
| feed      | 3.7 → 7.7 kB          | 7.2 → 34.5 kB (×4.8) |
| ecommerce | 4.5 → 9.1 kB          | 10.1 → ~51 kB        |
| scale     | 2.4 → 6.7 kB          | 5.7 → 52.9 kB (×9.3) |

Two different costs hide in that table, and they scale differently —
see the scaling section below. The **eager** delta is dominated by
fixed runtime hosting (C1): it is flat in component count (`scale`'s 80
components pay the _smallest_ eager delta) and is the adoption story
for content-site shapes plus every app's initial load; I-d
(update-phase code never eager) is **not met yet**. The **total** delta
is dominated by per-template code and grows with the app — the ×
factor _rises_ with component count.

## Scaling with component count

Small demos overweight the fixed runtime cost; a real app has hundreds
of components, where per-template code is the JS bottleneck. The
sourcemap-attributed decomposition (persisted builds, raw bytes):

| app (templates)  | marko runtime | run client | per-template code |
| ---------------- | ------------- | ---------- | ----------------- |
| feed (~6)        | 20.7 kB (60%) | 5.5 kB     | 7.4 kB (21%)      |
| docs (~9)        | 17.3 kB (49%) | 5.2 kB     | 11.7 kB (33%)     |
| ecommerce (~10)  | 21.2 kB (47%) | 6.0 kB     | 15.6 kB (35%)     |
| scale (80 comps) | 14.9 kB (28%) | 5.0 kB     | 31.9 kB (60%)     |

At 80 components the per-template code is already the majority; the
crossover sits around ~30–50 components, and real design-system apps
live far past it. The measured scaling law:

- **Fixed part** (~20 kB raw ≈ 4–7 kB gz of runtime + router): flat in
  component count, dominates the **eager** delta everywhere (`scale`'s
  eager is 2.4 → 6.7 kB gz — the smallest delta of any app). This is
  what the C1 phase partition attacks; it amortizes on big apps exactly
  as the objection predicts.
- **Marginal part** (per component, `scale`'s corpus): static
  presentational **224 B**, request-derived content **263 B**,
  interactive **420 B** raw — roughly proportional to component source
  size, no per-component cliff. The qualitative difference from a
  non-persisted build is _coverage_, not unit cost: plain builds ship
  **zero** bytes for static and content components (only interactive
  ones hydrate, ~119 B each); persisted builds ship every component's
  render graph so it can be a swap/merge target. Hence the total-JS
  factor **grows** with component count (×5 on the small apps, ×9.3 at
  80 components, asymptotically the per-component ratio).
- **All of the marginal part is lazy** (`?persisted`/`?update` chunks,
  loaded on first navigation per route, overlapping components deduped
  by normal chunking) — so at scale the cost surfaces as
  first-navigation chunk weight and cache footprint proportional to the
  target page's component subtree, not as initial-load bytes. Documents
  and payloads (axes A/B) track page DOM, not library size (`scale`:
  +18–20% gz documents, updates 35% of doc — same band as the others).
- Secondary at scale: build time (four translates per template —
  html/dom/`?persisted`/`?update` — off one shared analyze).

The at-scale lever is therefore not the runtime: it is stopping
per-component **JS delivery** for components the client only ever needs
as swap-construction material. Fragment frames plus update-generic
classification (see `persisted-pages-architecture.md`) are exactly that:
server-only components' construction material arrives as navigation
payload for the subtree being built instead of shipping ahead-of-time as
JS for the whole library, turning O(components) JS into O(navigation)
bytes. C2 dedup (main ↔ `?persisted` graph sharing, still open — see
`persisted-pages-roadmap.md`) is the tactical complement for interactive
components, which must stay in JS.

**Behavior** (Playwright smokes): docs 9/9, dashboard 9/9, feed 9/9,
scale 6/6 (60 components hydrate, cross-route swap fresh-constructs 50
components with filled holes in ~90 ms, page-level state resets across
the swap by documented design) —
applies with no reload, client state survives (theme, row selection,
optimistic likes through keyed-list growth), awaits stream, titles
sync; click→applied ~80 ms locally. Building these apps caught three
real translator bugs on day one — nested branch participation,
structural-input clobbering during applies, and stable-set loop params
not being patch-delivered (feed's chip labels after a cross-route
back-swap); all three are fixed with fixtures — the cross-shape
coverage pays for itself.

## Recommendation (re-ranked by the matrix + the scaling model)

1. **Finish the C1 phase partition** (adds I-d) — scoped honestly by
   the scaling model: it removes the fixed eager tax (~4–7 kB gz),
   which is the whole story for content-site shapes and every app's
   initial load, and is _not_ the bottleneck for hundreds-of-components
   apps. Mechanical now.
2. **Wire-delivered fragment content** (the at-scale lever): promote
   the parked `templates`-frames + client content store direction —
   per-template JS is 60% of the build at just 80 components and grows
   from there; delivering server-only components' construction material
   as navigation payload instead of ahead-of-time JS is the only lever
   that changes the O(components) term. C2 dedup is its tactical
   complement for interactive components. **Designed** — see
   [persisted-pages-architecture.md](./persisted-pages-architecture.md)
   ("Fragment frames" and "The generic applier and update-generic
   classification" — the landed mechanisms) and
   [persisted-pages-roadmap.md](./persisted-pages-roadmap.md) (the still-open
   forks and C2 dedup).
3. **Digest + spine-suppression pair** (A2+B, one serializer
   work-package; T2 decisions gate it): spine suppression is also what
   closes the docs A-floor (+14.1% on a hole-free page is chrome spine),
   digests are worth ~55% of grow-patches on list shapes.
4. **URL-input-deps pruning** (B): the 18–31% chrome-only payloads.
5. Marker work stays parked (ceilings measured).
6. ~~Stable-param patch delivery~~ — **landed** (the third example-app
   bug): params of participating stable-set loops taint request-derived
   like `$global` reads, so param-only holes capture/merge and fresh
   construction renders complete content; a text marker per branch hole
   plus a few capture bytes per branch on matched-scope updates.

Keep the matrix runner as the regression harness for all of it: A-floor,
I-d, and the per-component marginal cost are now numbers, not
aspirations.
