# Single‑Page Server‑First Updates (design)

> Status: design / RFC. Opt‑in, compiler‑configured runtime for Marko 6
> (`@marko/runtime-tags`). This document describes how to turn the existing
> multi‑page, full‑reload resume architecture into a single‑page application
> (SPA) that performs **server‑first navigations and reloads without reloading
> the document**, while reusing the resume serializer, the reactive system, the
> branch/control‑flow machinery, and the streaming writer almost entirely
> as‑is.

## 1. Goals and the governing principle

Goals (from the request):

1. **Low initial JS.** First paint stays (nearly) as cheap as today's resume.
2. **Low bytes over the wire per navigation.** Send the *smallest* representation
   the client can turn back into a correct DOM + reactive tree; send **nothing**
   for unchanged regions.
3. **Incremental JS/HTML.** Reuse already‑loaded runtime and component chunks;
   stream HTML/state for changes; fetch only route chunks the client lacks, keyed
   by build hash so they cache forever.
4. **Stateless.** Servers keep **no** per‑client session state; the client carries
   what's needed in the request, compared against build‑time constants.
5. **Leverage cross‑template analysis** to choose optimization points per section.
6. **Always‑correct fallback** to a full document navigation on any uncertainty.

### The governing principle: never ship server‑only logic

> **The client bundle never contains control‑flow/business logic that the
> compiler classified as server‑only.** That logic is tree‑shaken out. The client
> is only ever two things: (a) a *renderer* of **bundled reactive templates**, and
> (b) an *adopter* of **HTML the server sends**. It never evaluates a server‑only
> `if` condition or `for` iteration — it only ever receives their *output* as HTML.

Everything below follows from this principle. The client cannot synthesize
server‑only structure, so any navigation that changes server‑only structure must
receive HTML (or fall back to reload). Conversely, anything bundled for the browser
can be updated by sending **state only** and letting the bundled paths run.

## 2. The existing machinery we build on

This design is deliberately *additive*. The load‑bearing primitives already exist:

| Concern | Today | File(s) |
| --- | --- | --- |
| Serialize scope state + effects | `Serializer.stringifyScopes`, scope‑fill `[id,{props},Δ,{props}]`, effect tokens `"regId scopeId …"`, `_(id)` refs | `src/html/serializer.ts`, `src/html/writer.ts` |
| **Resume from self‑describing HTML** | `init` → walk reads **embedded comment markers** (`ResumeSymbol.Node`=`*`, `BranchStart`=`[`, `BranchEnd`=`]` + scope/accessor tokens) to find holes; `applyScopes`/`processResumes` fill them | `src/dom/resume.ts`, `src/common/types.ts` |
| **Render bundled templates** (clone + walk) | `_content`/`_template` clone cache + `walk` codes attach reactive bindings to a freshly‑cloned template | `src/dom/renderer.ts`, `src/dom/walker.ts`, `src/dom/template.ts` |
| Reactive updates | signals `(scope,value)=>void`, min‑heap queue, microtask `schedule()`; signals **skip when `value===current`** | `src/dom/signals.ts`, `src/dom/queue.ts` |
| Splice a subtree | branch scope `StartNode`/`EndNode`, `createBranch`, `removeAndDestroyBranch` + abort lifecycle, keyed reconcile (LIS) | `src/dom/control-flow.ts`, `src/dom/scope.ts` |
| Branch markers gated by statefulness | `writeBranch*` with a `serializeBranch` flag; today only **stateful** control flow emits markers | `src/html/writer.ts`, `src/translator/core/if.ts`,`core/for.ts` |
| Stream after first byte; gate on readiness | `Chunk`/`Boundary`/`State`, reorder runtime (`<t>`), `ready(readyId)` | `src/html/writer.ts`, `src/dom/load.ts` |
| Stable identity across builds | `getTemplateId`, `getResumeRegisterId`, content `Hash` | `packages/compiler/src/babel-utils/tags.js`, `src/translator/util/signals.ts` |

**The unifying observation.** `walk` already serves both faces of rendering: it
walks **freshly‑cloned bundled templates** (client render) *and* **server HTML via
embedded markers** (resume). A "hole" — a position where a reactive value or a
nested island lives — is the attach point in both. So the same machinery can render
a bundled template into a hole *or* resume a server‑sent fragment into the DOM. The
only thing missing is to (1) mark **all** control flow so every region is
self‑describing and addressable, and (2) deliver HTML+state incrementally over a
fetch instead of only in the initial document.

## 3. Templates are `HTML + walks + holes`; the source is the bundle *or* the wire

A Marko renderer is essentially `(templateHTML, walkCodes, setup, params)`:

* For **reactive** content, all of these live in the **JS bundle**. The client can
  produce the HTML itself (clone the bundled string) and fill holes from state.
* For **server‑only** content, the *generating logic* is tree‑shaken — the client
  has **no template string** for it. But a *specific render's* output is just: an
  **HTML string** (self‑describing via markers) + the **hole state**. The server
  streams that; the client adopts the HTML and walks it.

Either way the client uses the **same** clone/walk/resume code. The difference is
purely *where the HTML comes from* — and we never send the logic, only its output.

```
                         ┌────────────── a region/branch ──────────────┐
 reactive (bundled)      │ HTML+walks in JS bundle → client CLONES it,  │  state only
                         │ fills holes from sent state (paths run)      │  over the wire
                         ├──────────────────────────────────────────────┤
 server‑only (wire)      │ HTML streamed from server (logic tree‑shaken)│  HTML + hole
                         │ → client ADOPTS + WALKS it, fills holes       │  state over wire
                         └──────────────────────────────────────────────┘
```

## 4. All control flow serializes markers

In SPA mode the compiler emits resume/branch markers for **every** control‑flow
boundary, including server‑only `<if>`/`<for>` that emit none today
(`serializeBranch = 1` everywhere). This buys two things directly:

1. **Self‑describing HTML.** Any HTML the server streams for a region carries the
   embedded markers the resume walker already knows how to read, so the client can
   walk it and find its holes with **zero extra walk‑code payload** — the markers
   are the structure description.
2. **Addressability.** Every boundary has a stable ID (reuse the
   `getResumeRegisterId` scheme), so a navigation can say "replace region X" and the
   surrounding resume walk knows where X starts/ends.

Cost: extra comment markers in the *initial* HTML for server‑only regions (a handful
of bytes per boundary). This is HTML, not JS, so it does not regress goal #1 (low
initial JS); it is a small, bounded HTML cost that the request explicitly accepts
("it's fine to incrementally send html"). *Optional optimization:* a boundary that
the compiler proves **invariant across navigations** (condition/items derive only
from build‑constant data) and that contains no holes can elide its marker, since it
will never be patched — this stays correct because it is never addressed.

## 5. Holes: the per‑island state‑vs‑HTML choice

Within a server‑only region's streamed HTML, each **hole** (a reactive island, or a
nested boundary) is delivered in whichever form is cheaper — this is the knob that
keeps bytes minimal:

* **Empty hole** → the server streams a placeholder marker and the island's **state
  only**; the client *renders* the **bundled reactive template** into the hole
  (clone + walk + mount). Chosen when the island is fully client‑renderable and its
  bundled HTML would otherwise be duplicated in the payload. *Smallest bytes.*
* **Filled hole** → the server streams the island's **rendered HTML**; the client
  *resumes* it in place (walk the inserted DOM). Chosen when the island isn't
  client‑renderable, or when its HTML is small/streaming‑friendly. *No client render
  cost; no bundled template needed.*

This subsumes the whole spectrum with one concept:

| Region shape | = | Delivered as |
| --- | --- | --- |
| Fully reactive region | all holes empty, no static HTML | **state only** (client renders everything) |
| Static server‑only region | no holes | **solid HTML** |
| Mixed server‑only region | HTML scaffold + holes (each empty or filled) | **HTML + per‑hole state/HTML** |

Note the top row: a fully reactive `<if>`/`<for>` is just "one big empty hole" — the
client clones the bundled branch/row templates and the bundled `_if`/`_for` paths
run from the sent state. **No HTML over the wire for reactive control flow**, exactly
as the request wants ("if it's bundled for the browser, make those paths run").

The choice is driven by cross‑template analysis the compiler already has
(`serialize-reasons.ts` / `references.ts` know whether an island is fully
client‑renderable and whether a value flows from navigation‑varying input), with a
server‑side size heuristic to break ties.

## 6. Applying an update: replay reactive, splice server‑only — at any level

A navigation update is a set of per‑boundary patches applied in tree order. Each
boundary is either reactive or server‑only, and they nest freely:

* **Reactive boundary → replay from state.** Feed the boundary's scope state into
  the existing signals; `_if`/`_for`/`_let` run and reconcile (clone bundled
  templates for new branches/rows, keyed LIS, equality‑skip unchanged values). The
  reactive queue computes the minimal DOM mutation, and because signals skip when
  `value===current`, the server transmits state **without diffing** — client
  equality makes it an effective diff, which is what keeps the server **stateless**.

* **Server‑only boundary → splice HTML‑with‑holes.** The boundary is a **branch
  scope** (`StartNode`/`EndNode`, parent linkage, `removeAndDestroyBranch` +
  aborts) with **no client signal** — its structure is decided by the server. Apply
  = `removeAndDestroyBranch(old)` → insert the streamed HTML scaffold → for each
  hole, *render* (empty) or *resume* (filled) the island → relink to parent. This is
  the initial‑resume path applied to a streamed fragment, reusing existing code.

Because every boundary is independently addressed (§4) and the client never needs
server‑only logic (§1), the cases compose cleanly:

* server‑only `<for>` of cards, each card a reactive `<button>` → stream the cards'
  HTML scaffold with an **empty hole** per button; client adopts the scaffold and
  renders the bundled button island into each hole from sent state. (Server‑only
  structure as HTML; reactive behavior as state — never the `for` logic.)
* reactive `<if>` whose branch contains a server‑only `<for>` → the outer `_if`
  replays from state; the inner server‑only `<for>` is its own splice patch on its
  own marker. Independent, non‑interfering.

The old "shell stays, outlet swaps" idea is just the common case: one persistent
reactive layout (state patches / no‑ops) plus one large server‑only or reactive page
boundary. The general model additionally patches a route‑varying server‑only `<if>`
three levels deep, on its own marker.

## 7. The stateless request/response contract

The client carries just enough context for the server to compute an optimal update
against build‑time constants — no server memory.

### Request

```
GET /target/url
X-Marko-Nav: 1
X-Marko-Build: <buildHash>      # client's loaded build
X-Marko-View: <viewSignature>   # mounted layout templateIds + content hashes of
                                #   persistent (layout‑level) server‑only boundaries
```

The server renders the target and, for each *persistent* server‑only boundary,
compares its freshly computed content hash to the client's; **matching ⇒ skip**.
Reactive state is always emitted for the changed subtree and filtered by client
equality (§6). We hash only persistent layout‑level boundaries so the request stays
small; boundaries **inside the changed page subtree** are streamed wholesale because
they changed anyway. This is the optimal middle ground between a truly stateless
server (can't know what the client holds) and minimal payloads (need to know what the
client holds).

### Response

* **Reload directive** (`X-Marko-Reload: 1`): build hash mismatch, incompatible
  view signature, or a route opting out → client `location.assign(url)`.
* **Navigation update**: a framed, streamable set of per‑boundary patches (§8).

## 8. Wire format — a stream of per‑boundary patches

Same serialized shapes the streaming serializer already emits; only delivery (fetch
+ controlled apply) and addressing (per boundary) differ. Newline‑framed so async
parts arrive out of order, mirroring the HTML reorder protocol.

```
# header (always first)
{ "v":"<buildHash>", "url":"/target", "title":"…" }

# STATE patch — reactive scopes (incl. empty holes); identical to Serializer output,
# offset‑rebased on apply (§9). Reactive control flow needs only this.
_=>[1,{…},2,{…}]
"regId 1 regId 2"

# SPLICE patch — server‑only boundary: stream self‑describing HTML (embedded markers),
# plus state for its filled/empty holes (filled holes' HTML is inside the fragment).
{ "splice":"<boundaryId>", "html":"<…markers…>", "holes":<stateRef?> }

# LAZY gate — code‑split route chunk; reuse readyId machinery
{ "ready":"<readyId>", "chunk":"/assets/route.<buildHash>.js" }

# head/asset deltas — build‑hash‑stamped, idempotent
{ "assets":["/assets/route.<buildHash>.css"] }
```

`boundaryId` is the boundary's compile‑time address (same family as
`getResumeRegisterId`). STATE/hole frames feed the **existing** `applyScopes` /
resume‑effect routines; SPLICE HTML is resumed by the **existing** marker walker. No
second deserializer.

## 9. Client apply path (the only genuinely new runtime code)

A small **opt‑in** module, imported only when the page entry enables SPA mode. It is
the "slight initial‑JS regression" the request anticipates; everything it calls
already ships.

1. **Intercept** in‑app `<a>` clicks and `popstate`; manage history/scroll/focus.
2. **Fetch** the target with §7 headers; optionally prefetch on hover/idle via the
   existing load‑trigger primitives. Payloads are build‑hash‑keyed and cacheable.
3. **Guard**: if `X-Marko-Reload` or `header.v !== __MARKO_BUILD__` →
   `location.assign(url)`. A stale client never applies mismatched state.
4. **Rebase scope IDs**: payload scopes are numbered locally; allocate a fresh range
   in the client's scope space (client scopes already start at `1e6`) and resolve
   `i → base + i` — a tiny additive offset in `serializeContext`/`applyScopes`.
   Splice‑parent references are passed as real existing ids.
5. **Apply in tree order**:
   * STATE → `applyScopes` + resume effects; reactive signals run (§6).
   * SPLICE → `removeAndDestroyBranch(old)`, insert HTML, then per hole *render*
     (empty: clone bundled template + mount) or *resume* (filled: walk inserted
     DOM), relink to parent.
   * LAZY → gate through `ready(readyId)`; apply once the chunk loads.
6. **Finalize**: ensure `assets` (idempotent), set `title`, update the route signal
   so reactive layout regions react locally.
7. **Fallback** on any thrown error mid‑apply: `location.assign(url)`.

Estimated incremental client cost ≈ **~1–2 KB** min+gz: interception + fetch + frame
parse + offset rebase + STATE apply (reuses `applyScopes`) + SPLICE (reuses
`removeAndDestroyBranch` + walk/clone/resume) + guard. Heavy lifting is reused
verbatim, and **no server‑only logic is ever added to the bundle**.

## 10. Tradeoffs and chosen middle grounds

* **Universal markers vs initial HTML bytes** — marking all control flow adds comment
  markers to initial HTML. *Chosen:* accept it (it's HTML not JS, and it makes server
  HTML self‑describing + every boundary addressable); allow eliding markers only on
  provably invariant, hole‑free regions.
* **Empty vs filled holes** — empty minimizes bytes but costs a client render and
  needs the bundled template; filled needs no bundled template and no client render
  but ships HTML. *Chosen:* compiler picks per island (client‑renderable? navigation‑
  varying?), server size‑heuristic breaks ties; reactive control flow is "all empty
  holes" (state only).
* **Diff granularity vs request size** — per‑boundary content hashes give true
  server‑only diffing but grow the request. *Chosen:* hash only persistent
  layout‑level boundaries; stream page‑subtree boundaries wholesale.
* **Statelessness vs minimal bytes** — *Chosen:* tiny request context (build hash +
  view signature) + build‑time chunk knowledge ⇒ near‑optimal payloads, zero memory.
* **Initial load vs navigation speed** — *Chosen:* accept a small, bounded first‑load
  regression (opt‑in controller); never regress the resume format or base bundle.
* **Eager vs lazy route chunks** — *Chosen:* lazy + `ready` gate + optional inline
  first‑paint HTML + hover/idle prefetch.

## 11. Correctness invariants

* **No server‑only logic on the client** (§1) — the client cannot synthesize
  server‑only structure, so structural changes there always arrive as HTML or reload.
  This is the backbone that makes "send state and let paths run" safe: it is only
  ever applied to genuinely bundled paths.
* **One build hash, checked every navigation** — templateIds, registry IDs, markers,
  and the scope schema are stable only within a build; mismatch ⇒ reload.
* **Self‑describing HTML** — streamed fragments carry the same markers the resume
  walker reads, so client adoption is identical to initial resume.
* **Non‑colliding scope IDs** via the apply‑time offset (§9.4).
* **Lifecycle correctness** — server‑only splice routes through the existing
  branch‑destroy/abort path; `onDestroy`/aborts fire on old, `onMount`/effects on new.
* **Stateless server** — every decision is a pure function of (request context, build
  constants, target render).

## 12. Compiler / runtime surface (implementation sketch)

Opt‑in config (additive): a `serverUpdates` (a.k.a. `singlePage`) flag in
`packages/compiler/src/config.js` / translator. When enabled for `entry:"page"`
templates, the page imports the navigation controller and emits SPA metadata.

Translator (`src/translator/`):

* **Universal markers**: in SPA mode set `serializeBranch = 1` for *all* control flow
  (incl. server‑only `<if>`/`<for>`), with optional elision for provably
  invariant/hole‑free boundaries.
* **Boundary IDs**: stable address per boundary (reuse `getResumeRegisterId`); record
  persistent (layout‑level) ones in `file.metadata.marko` for the view signature.
* **Hole classification**: extend `serialize-reasons.ts`/`references.ts` to tag each
  island empty‑hole (client‑renderable) vs filled‑hole, and each server‑only boundary
  navigation‑varying vs invariant.
* **Navigation render entry**: per page, a server function that renders the target and
  streams the §8 patch set (reusing `State`/`Serializer`/reorder/`ready`), computing
  content hashes for persistent boundaries and skipping matches from the view
  signature.

HTML runtime (`src/html/`):

* `renderNavigation(template, input, { viewSignature, buildHash })` → builds/streams
  the framed update; emits a reload directive on mismatch.

DOM runtime (`src/dom/`):

* **Navigation controller** module (opt‑in import): §9.
* Small `resume.ts` extensions: scope‑id **offset** + **target parent branch**; a
  `spliceBoundary(boundaryId, html, holes)` helper composing `removeAndDestroyBranch`
  + insert + per‑hole render/resume.
* Reuse `ready`, `createBranch`, branch destroy/abort, resume effects, `mount`,
  asset ensuring — unchanged.

## 13. Forms, actions, head, history (brief)

* **Server‑first actions**: a `<form>` POST replies with the same patch‑stream format,
  so a mutation that changes a server‑only `<for>` three levels down is just a SPLICE
  patch on that boundary.
* **Head/title**: title in the header frame; new route CSS/JS as build‑hash‑stamped
  idempotent asset frames; reuse `assets.ts`.
* **History/scroll/focus**: standard controller duties; restore scroll on `popstate`,
  move focus to the changed region for a11y.

## 14. End‑to‑end example (holes at mixed levels)

`/search?q=a` → `/search?q=b` under a shared layout. The results list is a
**server‑only `<for>`** (logic tree‑shaken from the bundle); each row has a reactive
`<button>` island (bundled). A "did you mean" notice is a **server‑only `<if>`** at a
different level.

1. Controller fetches `/search?q=b` with `X-Marko-Nav`, `X-Marko-Build: h7`, and a
   view signature (layout chain + hashes of persistent layout boundaries).
2. Server renders `/search?q=b`; layout hashes match → skipped. It streams:
   * `{ v:"h7", url:"/search?q=b", title:"Search: b" }`
   * STATE: reactive search box + result count → `_=>[1,{q:"b",count:5}]`,
     `"reg_box 1"` (**no HTML**).
   * SPLICE for the results `<for>` boundary: the rows' **HTML scaffold** with one
     **empty hole per button**, plus each button's state. (Server‑only structure as
     HTML; button behavior as state — never the `for` logic.)
   * SPLICE for the "did you mean" `<if>` boundary: its new branch HTML (now present
     where it was absent).
3. Client (build matches): applies STATE (search box/count update in place);
   splices the `<for>` (destroys old rows → inserts scaffold → **renders the bundled
   button island into each empty hole** from state); splices the `<if>`; sets title.
4. Bytes over the wire: the rows' static HTML scaffold + tiny per‑button state + a few
   changed values. **No runtime JS, no `for`/`if` logic, no layout HTML**, and the
   reactive parts updated with no HTML at all.

If `h7 !== server build`, the server returns `X-Marko-Reload: 1` and the client does a
normal full navigation — always correct.
