# Implementation plan — Outlet Extraction & State/Discriminant Tier

Companion to [`single-page-server-first-updates.md`](./single-page-server-first-updates.md).
The HTML tier (controller, server handler, runtime resume, glue) is implemented and
proven end‑to‑end. This plan covers the two remaining RFC features:

- **Feature 1 — Compiler‑level outlet extraction**: render _just_ the route subtree of a
  page as an embedded, resumable fragment, so navigations preserve shell continuity
  automatically (no app restructuring).
- **Feature 2 — State + discriminant tier (`updates` chunk)**: ship logic‑stripped CSR
  renderers so navigations send serialized **state + structural decisions** instead of
  HTML.

**Ordering.** Feature 1 is the foundation (it makes shell‑preserving navigation
turnkey and produces the embedded outlet fragment Feature 2 optimizes). Feature 2
depends on Feature 1's boundary identity and lifecycle. Land 1 first.

**Conventions to honor throughout** (`AGENTS.md`): `_name` runtime APIs, accessor enums
in `common/accessor*.ts` (debug/prod swap), `MARKO_DEBUG` gating, `createSectionState`,
`callRuntime`, `translateByTarget`, top‑down file structure.

---

## Feature 1 — Compiler‑level outlet extraction

### 1.1 Goal & constraints

Given a page template, identify a **route‑outlet boundary**. The compiler must be able to
render the outlet subtree two ways:

1. **Inline** — as part of the full page (initial load), unchanged from today.
2. **Standalone embedded** — a self‑describing, ready‑gated fragment (`writeWaitReady`,
   `RendererProp.Embed`, `readyId = boundaryId`) for navigations.

**Closability constraint.** A subtree can only be rendered standalone if its inputs are
fully supplied by the route (not closures over live shell state). The compiler must
detect outlets that close over shell bindings and either (a) lift those values into the
nav input, or (b) mark the route non‑optimizable → the client falls back to full reload.
v1: detect and fall back; lifting is a later enhancement.

### 1.2 Outlet marker + config

- **Config** (`packages/compiler/src/config.js`): add `serverUpdates?: boolean` (already
  referenced in the RFC). Thread through `markoOpts`. ✅ **Landed & verified** — the option
  is accepted by the compiler and reaches `markoOpts`.
- **Core tag** `<update-outlet>` — new file
  `packages/runtime-tags/src/translator/core/update-outlet.ts`, modeled on
  [`core/try.ts`](../src/translator/core/try.ts) (the simplest branch‑rendering core tag).
  Its body is the route content. Marks the body section as a navigation boundary.
  Register it in `core/index.ts` (`"<update-outlet>": …`) and add a `tags/update-outlet.d.marko`.
  (Alternative: integrate with a router that designates the boundary; the core tag is the
  router‑agnostic primitive and what `@marko/run` would target.)

> **Validated findings.**
>
> 1. A transparent passthrough (unwrap the body via `replaceWithMultiple`) **fails**: the
>    analyze phase compiles the body as its own _content section_, so unwrapping diverges
>    HTML (transparent) vs DOM (keeps the section) → hydration mismatch (`run is not a
function`). An outlet body is inherently a separate renderable branch.
> 2. A tag must be recognized as producing **`ContentType.Dynamic`** in
>    `util/sections.ts` `getContentType` (the `for`/`if`/`await`/`try` switch) — otherwise
>    the parent never reserves the branch start/end marker nodes and the branch renders
>    empty on a cold client mount. **`"update-outlet"` is added to that switch.**
>
> **✅ v1 landed.** `<update-outlet>` renders its body as a resumable, replaceable branch by
> **reusing `<try>`'s proven analyze/translate** (`core/update-outlet.ts` re-exports `TryTag`
> with its own `types`/autocomplete) plus the `getContentType` registration above. Verified
> across html/dom/ssr/csr (fixture `update-outlet-basic`): the body hydrates and is
> interactive in both SSR and CSR (`count: 0 → 1` on click). It currently inherits `<try>`'s
> catch/placeholder support and `_enable_catch` cost.
>
> **Follow-up (optimization, not blocking):** replace the `<try>` reuse with a lean `_outlet`
> runtime primitive (a single always-rendered resumable branch — `<try>` without
> catch/placeholder) on both `src/html/` and `src/dom/`, and a dedicated tag. A from-scratch
> attempt is viable but must reserve the branch start/end markers exactly as `_try` does
> (the node-count parity that `getContentType` + the writer markers provide).

### 1.3 Compile‑time analysis (`analyze` phase)

In `core/update-outlet.ts` `analyze(tag)`:

- `const body = tag.get("body"); const section = getSectionForBody(body)` — mark it:
  `setSectionAsBoundary(section)` via a new `createSectionState` flag in
  [`util/sections.ts`](../src/translator/util/sections.ts).
- **Boundary id**: `getResumeRegisterId(section, …, "outlet")`
  ([`util/signals.ts`](../src/translator/util/signals.ts)) → stable `templateId_sectionId/outlet`.
  Stamp into `file.metadata.marko` so the server module can advertise it.
- **Closability**: inspect `section.referencedClosures` /
  `section.referencedHoists` ([`util/references.ts`](../src/translator/util/references.ts)).
  Any binding whose `section` is an ancestor of the boundary and is **not** the boundary's
  own `params`/`input` ⇒ not closable. Record `boundary.optimizable = !hasShellClosures`.
- **Branch**: force the boundary to serialize as a branch (`serializeBranch = 1`, the
  `ResumeSymbol.BranchStart/BranchEnd` markers from [`html/writer.ts`](../src/html/writer.ts))
  so the client can locate, destroy, and replace it — even when the content is otherwise
  static/server‑only.

### 1.4 HTML output — dual rendering (`translate.html`)

In `visitors/program/html.ts` + `core/update-outlet.ts`:

- Inline render: emit the body as a content renderer inside a branch (as control‑flow
  bodies already do), so the initial page contains the outlet with its branch markers and
  a serialized **boundary scope** carrying `boundaryId`.
- **Standalone entry**: emit, on the page's server module, a registry of outlet renderers,
  e.g. `export const __navigation__ = { [boundaryId]: (input) => writeWaitReady(boundaryId, outletRenderer, input) }`.
  This reuses [`writeWaitReady`](../src/html/writer.ts) so the standalone render is exactly
  a ready‑gated embedded fragment with `readyId = boundaryId`.
- Gate all of the above behind `markoOpts.serverUpdates` + `entry === "page"` so non‑SPA
  builds are unaffected (zero output delta when the flag is off).

### 1.5 DOM output + runtime — outlet boundary tracking & swap

The client must locate the live outlet branch and replace it.

- **DOM output** (`visitors/program/dom.ts` / `core/update-outlet.ts`): emit the outlet as
  a resumable branch and **register the branch scope by `boundaryId`** during resume.
- **Runtime — `resume.ts`**: add a boundary registry. When the resume walk encounters the
  outlet's `BranchStart/BranchEnd` markers (see `createVisitBranches` in
  [`resume.ts`](../src/dom/resume.ts)), record `boundaries[boundaryId] = branchScope`.
  Export a getter `getBoundary(boundaryId)`.
- **Runtime — new `_replace_outlet(boundaryId, fragmentParentNode)`** (in `dom/navigate`'s
  runtime binding or a small `dom/outlet.ts`):
  1. `const branch = getBoundary(boundaryId)`; capture `StartNode`/`EndNode`
     (`AccessorProp.StartNode/EndNode`, [`common/types.ts`](../src/common/types.ts)).
  2. Insert the new fragment nodes before `StartNode`.
  3. `removeAndDestroyBranch(branch)` ([`dom/scope.ts`](../src/dom/scope.ts)) — fires
     `onDestroy`/abort cleanup on the old outlet, removes its nodes.
  4. `initEmbedded(boundaryId, runtimeId)` → resumes the inserted fragment; register the
     new branch under `boundaryId`, `setParentBranch` to the shell.
  5. `run()`.

- **Controller** ([`dom/navigate.ts`](../src/dom/navigate.ts)): extend `target` to accept
  `{ outlet: boundaryId }` (alongside `Element | string`). `applyServerUpdate` routes an
  outlet target through `_replace_outlet` instead of `innerHTML` swap. `ServerUpdate` gains
  an optional `outlet?: boundaryId`; when present the client uses outlet‑swap mode.

This is the piece that delivers **automatic shell continuity**: only the outlet branch is
destroyed/recreated; the shell scopes are untouched.

### 1.6 Server integration

- [`html/navigation.ts`](../src/html/navigation.ts): `handleNavigation` learns the page's
  `__navigation__` registry. New overload `handleNavigation(pageModule, { route, input, headers, build, url })`:
  pick the outlet renderer for the route, render it (standalone embedded → fragment +
  `readyId = boundaryId`), return `{ kind: "update", update: { …, html, readyId, outlet: boundaryId } }`.
  If the route's outlet is non‑optimizable (1.3) ⇒ `{ kind: "reload" }`.
- `renderNavigationUpdate` keeps working for the explicit (app‑structured) case; the new
  path just auto‑selects the outlet renderer.

### 1.7 Tests

- **Translator fixtures** (`src/__tests__/fixtures/update-outlet-*`): snapshot `html`/`dom`
  output with `serverUpdates` on — verify branch markers, boundary id, the `__navigation__`
  registry, and that the flag‑off build is byte‑identical to today.
- **Closability**: a fixture whose outlet closes over shell state ⇒ analysis marks
  non‑optimizable (compiler diagnostic or metadata assertion).
- **e2e** (extend `spa-navigate-e2e.test.ts`): a page with `<update-outlet>` + a persistent
  shell island; navigate; assert the **shell island keeps its live state** (true continuity)
  while the outlet swaps and resumes — the property the current full‑body e2e cannot show.

### 1.8 Risks & mitigations

| Risk                                                      | Mitigation                                                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Outlet closes over shell scope → broken standalone render | Closability analysis (1.3) → fall back to reload; never emit an unsound standalone renderer                   |
| Scope‑id collisions between shell and injected outlet     | Embedded render uses its own renderId; client scopes already `1e6+`; resume keys per‑renderId (`scopeLookup`) |
| Marker cost in initial HTML                               | Only emit boundary markers for the (few) outlets, gated by the flag                                           |
| Nested/multiple outlets                                   | v1: single top‑level outlet per page; design the registry keyed by `boundaryId` so multiple is additive later |

### 1.9 Milestones

1. Config flag + `<update-outlet>` tag scaffold + taglib registration (no behavior).
2. `analyze`: boundary marking, id, closability metadata.
3. HTML dual rendering + `__navigation__` registry (+ snapshot fixtures).
4. Runtime boundary registry + `_replace_outlet` + controller outlet‑target mode.
5. `handleNavigation` auto‑outlet + e2e (shell continuity).
6. Diagnostics + docs.

---

## Feature 2 — State + discriminant tier (`updates` chunk)

### 2.1 Goal & model

For opted‑in routes/components, ship a parallel **`updates` bundle**: the CSR render tree
for server‑only components with **server logic tree‑shaken out** (templates + walk codes +
hole _assignment_ + control‑flow reconciliation **driven by a serialized discriminant**).
Then a warm navigation sends only serialized scope **state** + **discriminants** (branch
index / `<for>` keys / dynamic template id) — no HTML — and the client reconciles via the
existing `_if`/`_for`/`_content_resume`.

### 2.2 `updates` compilation target

- **Compiler** (`config.js`, `babel-plugin/index.js`): new `output: "updates"` (peer of
  `"html"`/`"dom"`), and an `updates` entry in
  [`util/entry-builder.ts`](../src/translator/util/entry-builder.ts), code‑split **per
  route** + a shared `_shared` chunk.
- **Translator lowering** — a variant of `visitors/program/dom.ts`. Start from the dom
  output and transform:
  - **Control flow** (`core/if.ts`, `core/for.ts`, `dynamic-tag`): instead of building the
    signal input from the reactive condition/iterable, read the **serialized discriminant**
    from the scope. e.g. a server‑only `<if>` lowers to
    `_if(nodeAccessor, …branches)(scope, scope[branchAccessor])` where `branchAccessor`
    holds the server‑chosen branch index; `<for>` to a loop fed by serialized keys.
  - **Holes** (`_text`/`_attr`/…): keep the _leaf assignment_ signals (they apply values
    from scope state, filled by `applyScopes`); **drop** derivation/computed signals, the
    `_let`/`_const` compute graph, effects/lifecycle, and server‑only imports. This is the
    "logic‑stripped" core: keep "apply", remove "compute".
  - Reactive islands inside (genuinely interactive) are **not** stripped — they keep their
    primary‑bundle behavior; the updates chunk references them as child renderers.
- **Stable ids**: discriminant accessors and renderer ids reuse `getResumeRegisterId` so
  server payload and updates chunk agree within a build.

This lowering is the largest single piece — treat 2.2 as its own sub‑project with its own
fixtures before wiring serialization.

### 2.3 Discriminant + hole serialization (server)

- **HTML output / serializer** ([`html/serializer.ts`](../src/html/serializer.ts),
  [`html/writer.ts`](../src/html/writer.ts)): in `serverUpdates` mode, for server‑only
  control‑flow scopes, serialize the **discriminant** (branch index from the rendered
  branch; `<for>` keys; dynamic template id) plus **final hole values**, using the existing
  scope‑fill format (`_=>[scopeId,{…}]`). Extend `serialize-reasons.ts` so these props are
  marked serializable in nav payloads.
- Emit discriminants/holes **only in navigation/streamed payloads**, never in the lean
  initial load (preserves §10 low‑initial‑bytes).

### 2.4 Client state‑apply & reconcile

- Extend [`dom/navigate.ts`](../src/dom/navigate.ts) `ServerUpdate` with a `state?` channel
  (the serialized scope‑fill + effect tokens — same shape `resume.ts` already consumes).
- New apply path: feed `state` through the **existing** `applyScopes` /
  resume‑effect routines (`resume.ts`) with a scope‑id offset (RFC §9.4), then `run()`. The
  updates‑chunk control‑flow signals reconcile: **same discriminant ⇒ update holes**
  (equality‑skipped), **different ⇒** swap renderer (`_if`/`_content_resume`) /
  keyed‑LIS (`_for`). Reuses `control-flow.ts` unchanged.
- **Warm vs cold** (RFC §6): the live region must be in the updates tree first. Cold (chunk
  not loaded) → stream HTML once (existing path) + lazily `import()` the route's updates
  chunk; the chunk `initEmbedded`/attaches over that DOM; subsequent navs apply `state`.

### 2.5 Chunking, lifecycle, `X-Marko-Warm`

- **Manifest**: build emits a route → updates‑chunk URL map (build‑hash‑stamped, immutable).
  Extend the `linkAssets`/manifest path in [`bundle`/`assets`](../src/html/assets.ts).
- **Client** declares its warm chunk set; add `X-Marko-Warm` to `fetchUpdate`'s request
  headers and a warm‑set tracker in the navigator (which route chunks are loaded).
- **Server** (`handleNavigation`) reads `X-Marko-Warm` (helper in `common/spa.ts`) and
  chooses, per region: warm → emit `state`; cold → emit `html` (+ a `ready`/chunk frame).
- Lazy load + gate reuses `dom/load.ts` `ready(readyId)` and the existing reorder protocol.

### 2.6 Adaptive gating

- Extend `serialize-reasons.ts` / `references.ts` analysis to flag regions that justify an
  updates chunk: high structural repetition (large `<for>`), high navigation frequency, or
  explicit annotation (`<update-outlet optimize>` / a tag attr). Default off → streamed
  HTML (RFC §6 economics: chunk amortizes after ~3 navigations).

### 2.7 Tests

- **Lowering fixtures**: snapshot the `updates` output for `<if>`/`<for>`/`<${dynamic}>` +
  reactive‑island cases; assert no server‑only logic/imports survive (tree‑shaken).
- **Serialization**: unit‑test discriminant + hole emission for each control‑flow kind.
- **Reconcile**: jsdom tests — same discriminant updates holes (0 re‑render); different
  swaps; `<for>` reorder reuses rows (mirrors the prototype's measured behavior).
- **e2e**: warm navigation sends state‑only (assert no HTML in payload) and the region
  reconciles to interactive; cold → HTML once then warm.
- **Bytes regression**: a checked‑in benchmark (extend `prototype/spa-server-updates`)
  asserting state‑tier payloads stay ≈⅓ of full‑reload gz.

### 2.8 Risks & mitigations

| Risk                                                                 | Mitigation                                                                                |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Lowering correctness (stripping the right things)                    | Land 2.2 standalone with extensive fixtures before serialization; diff against dom output |
| Debug/prod accessor drift between payload & chunk                    | All ids via `getResumeRegisterId`/accessor enums; build‑hash gates both ends              |
| Total‑JS regression from chunks                                      | Adaptive gating (2.6); per‑route split; never loaded for non‑navigators                   |
| Reorder/`for` reconcile sending full state (prototype finding §17.1) | Optional client key/version hint for large stable collections                             |
| Stripped derivation needed by a hole                                 | Serialize the _final_ value (server computes); the chunk only assigns                     |

### 2.9 Milestones

1. `output: "updates"` target + entry/chunk split (empty‑ish lowering).
2. Lowering: holes (apply‑only) — fixtures.
3. Lowering: control flow by discriminant (`<if>`, then `<for>`, then dynamic) — fixtures.
4. Server discriminant/hole serialization.
5. Client state‑apply + reconcile (jsdom).
6. Chunking + warm/cold + `X-Marko-Warm`.
7. Adaptive gating + bytes benchmark + e2e.

---

## Cross‑cutting

- **Build hash**: every navigation already carries/guards it; the manifest, chunks, and
  payload ids are all build‑hash‑scoped. Mismatch ⇒ reload (implemented).
- **Always‑correct fallback**: every new path (non‑optimizable outlet, cold region, apply
  error, missing chunk) degrades to the implemented full‑reload behavior.
- **Performance priorities (RFC §2)**: prefetch‑on‑intent (done) and streaming/partial
  render remain the latency levers; the state tier is the byte lever, applied adaptively.

## Sequencing & rough effort

| Phase                                         | Effort | Unlocks                                   |
| --------------------------------------------- | ------ | ----------------------------------------- |
| F1.1–1.4 (compiler outlet + HTML dual render) | M      | server can emit the outlet fragment       |
| F1.5–1.6 (runtime swap + server handler)      | M      | **turnkey shell‑preserving navigation**   |
| F1.7 (tests/e2e)                              | S      | confidence                                |
| F2.2 (`updates` lowering)                     | L      | the hard core; gate everything else on it |
| F2.3–2.5 (serialize + client reconcile)       | M      | **state‑only warm navigations**           |
| F2.6–2.7 (gating + chunks + tests)            | M      | production‑ready byte optimization        |

Recommendation: ship **Feature 1 end‑to‑end first** (it makes the already‑implemented HTML
tier turnkey with real shell continuity), then tackle **Feature 2** as a separately‑scoped
effort starting from the `updates` lowering.
