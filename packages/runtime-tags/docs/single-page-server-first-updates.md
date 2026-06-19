# Single‑Page Server‑First Updates (design)

> Status: design / RFC. Opt‑in, compiler‑configured runtime for Marko 6
> (`@marko/runtime-tags`). This document describes how to turn the existing
> multi‑page, full‑reload resume architecture into a single‑page application
> (SPA) that performs **server‑first navigations and reloads without reloading
> the document**, while reusing the resume serializer, the reactive system, the
> branch/control‑flow machinery, and the streaming writer almost entirely
> as‑is.

## 1. Goals and non‑goals

Goals (from the request, restated as design constraints):

1. **Low initial JS.** First paint stays (nearly) as cheap as today's resume.
   The SPA layer is opt‑in and adds only a small navigation controller on top of
   code the page already ships.
2. **Low bytes over the wire per navigation.** A navigation sends the *smallest*
   representation the client can turn back into a correct DOM + reactive tree,
   preferring serialized **state** over rendered **HTML**, and sending **nothing**
   for regions that did not change.
3. **Incremental JS/HTML.** Reuse already‑loaded runtime and component chunks;
   fetch only route‑specific chunks the client lacks, keyed by build hash so they
   cache forever.
4. **Stateless.** Servers keep **no** per‑client session state. Everything the
   server needs to produce an optimal update is carried *in the request*
   (build hash, structural signature, target URL) and compared against build‑time
   constants.
5. **Leverage cross‑template analysis.** The compiler already knows static
   template HTML, walk codes, the section tree, serialize‑reasons, and stable
   template/registry IDs. Use that whole‑program knowledge to decide, **per
   section**, what travels as HTML, what travels as pure state, and what need not
   travel at all.
6. **Always‑correct fallback.** On any uncertainty — build hash mismatch,
   incompatible structure, server‑only invariant, or error — fall back to a normal
   full‑document navigation (`location.assign`).

Non‑goals: a routing/data layer (this integrates with one, e.g. `@marko/run`, but
does not define routes); client‑only SPAs (this is *server‑first*); changing the
initial‑load resume wire format.

## 2. The existing machinery we build on

This design is deliberately *additive*. The load‑bearing primitives already exist:

| Concern | Today | File(s) |
| --- | --- | --- |
| Serialize scope state + effects | `Serializer.stringifyScopes`, scope‑fill `[id,{props},Δ,{props}]`, effect token strings `"regId scopeId …"`, `_(id)` refs, deferred mutations `$.x.f(v)` | `src/html/serializer.ts`, `src/html/writer.ts` |
| Resume a server render | `init(runtimeId)` → `serializeContext`, `applyScopes`, `getScope`, `processResumes`, comment‑marker walk | `src/dom/resume.ts`, `src/html/inlined-runtimes.ts` |
| Reactive updates | signals `(scope,value)=>void`, min‑heap queue keyed `scopeId*1000+signalKey`, microtask `schedule()` | `src/dom/signals.ts`, `src/dom/queue.ts` |
| Materialize fresh content | `_content`/`_template` clone cache, `walk` codes, `createBranch`, `mount()` | `src/dom/renderer.ts`, `src/dom/walker.ts`, `src/dom/template.ts` |
| Swap/splice a subtree | conditional renderer / branch swap, keyed list reconcile (LIS), `removeAndDestroyBranch` + abort lifecycle, branch `StartNode`/`EndNode` | `src/dom/control-flow.ts`, `src/dom/scope.ts` |
| Branch resume markers, gated by statefulness | `ResumeSymbol.BranchStart`/`BranchEnd`, `writeBranch*` with a `serializeBranch` flag (`0` = no resume) | `src/html/writer.ts`, `src/common/types.ts` |
| Per‑section "ship to browser?" decision | `serializeReason` / `kStatefulReason` / `kBranchSerializeReason`; only stateful control flow emits a DOM `_if`/`_for` + branch markers | `src/translator/core/if.ts`, `core/for.ts`, `util/serialize-reasons.ts` |
| Stream after first byte; gate on readiness | `Chunk`/`Boundary`/`State`, reorder runtime (`<t>`), `ready(readyId)` | `src/html/writer.ts`, `src/dom/load.ts` |
| Stable identity across server & client builds | `getTemplateId`, `getResumeRegisterId` (`templateId_sectionId_binding/type`), content `Hash` | `packages/compiler/src/babel-utils/tags.js`, `src/translator/util/signals.ts` |

**Two key observations.**

1. Marko's resume payload is *already a patch*: "given this server DOM, here is the
   state + effects to make it live." A navigation is the same problem at a higher
   level. We reuse the same serializer and the same `applyScopes`/branch‑swap.

2. **The compiler already classifies every control flow as reactive or
   server‑only**, and only reactive control flow ships a client signal + branch
   markers. A reactive `<if>` whose condition is `kStatefulReason` compiles to a
   DOM `_if` that reconciles itself; a non‑stateful `<if>` compiles to **pure HTML
   with no markers and no client code**. That existing classification is exactly
   the axis the request asks us to split on — "if it's bundled for the browser,
   make those paths run; otherwise send minimal scope/HTML."

## 3. Core model: reactive scopes *replay*, server‑only branches *splice* — at any level

A page is one tree of scopes containing two kinds of mutable regions, which the
compiler **already** distinguishes. On navigation we update each in the cheapest
way, **wherever it sits in the tree** — there is no privileged single outlet.

### 3.1 Reactive regions → transmit **state**, replay on the client

Any scope/value/control‑flow the compiler shipped to the browser (it is
`kStateful`/interactive) is updated by sending **only new state**. The client
feeds the values into the *existing* signals and the compiled DOM paths run:

* a reactive `<text>`/`<attr>` → the `_let`/derived signal sets the new value;
* a reactive `<if>` whose condition depends on the route → the `_if` signal runs,
  creates/destroys branches using its **bundled** renderers (clone + walk);
* a reactive `<for>` → the `_for` signal runs keyed reconciliation (LIS) using its
  bundled renderer.

The reactive queue computes the minimal DOM mutation. Because signals already skip
when `value === current` (`src/dom/signals.ts`), the server can transmit reactive
state **without diffing** — the client's equality checks make it an effective diff,
which is what keeps the **server stateless**. Cost over the wire: the changed
values only; **no HTML, no component JS**.

> Interactivity propagation guarantees this composes downward: if a reactive `<if>`
> can *recreate* a branch on the client, the compiler has already bundled the
> renderers for everything structurally inside that branch (including nested
> `<for>`/`<if>`). So "a reactive control flow that needs to recreate server‑only
> content" cannot occur — the server‑only case below only arises in regions the
> client never structurally recreates during the page's lifetime.

### 3.2 Server‑only regions → transmit **HTML**, splice via a *passive branch*

Server‑only control flow (a non‑stateful `<if>`/`<for>`, or any subtree whose
structure the client has no code to reproduce) cannot be replayed from state. On
navigation its structure may change anyway (different route, different data). We
make each such boundary an addressable **passive branch** and splice it.

A *passive branch* is a normal Marko **branch scope** — it has `StartNode`/
`EndNode`, parent linkage, and participates in `removeAndDestroyBranch` + the abort
lifecycle — **but it has no client `_if`/`_for` signal.** Its structure is decided
by the *server* (via a navigation patch), not by a client signal. Concretely, in
SPA mode the compiler emits branch resume markers for these boundaries
(`serializeBranch = 1`, the same `ResumeSymbol.BranchStart`/`BranchEnd` already
used for stateful branches) even though no signal is shipped.

This means **reactive branches and server‑only branches are the same runtime
object** (`BranchScope`); they differ only in *who decides the structure* and *what
is transmitted*:

| | decided by | transmitted as | applied by |
| --- | --- | --- | --- |
| reactive branch | client signal | state | `_if`/`_for` (existing) |
| passive branch | server | HTML + resume payload | navigation splice (new) |

Splicing a passive branch reuses existing code end‑to‑end:
`removeAndDestroyBranch(old)` (fires `onDestroy`/aborts, removes DOM between
`StartNode`/`EndNode`) → insert the new HTML fragment → `walk` + `applyScopes` +
resume effects to bring up any **reactive islands inside** the fragment → link the
new branch to its parent. That is the initial‑resume path applied to a fragment.

### 3.3 The general picture

```
 document
 ├─ layout (mostly reactive + invariant server‑only → usually unchanged)
 │   ├─ <nav>            reactive: active link  → STATE patch (or no‑op)
 │   └─ server‑only <if> "logged in?"  invariant → not marked, not sent
 └─ page content (the changed subtree)
     ├─ reactive <for> comments         → STATE patch (keyed reconcile runs)
     ├─ server‑only <for> search‑results (route‑varying) → HTML splice (passive branch)
     │     └─ reactive <button> per row  → resumed inside the spliced fragment
     └─ server‑only <if> "has banner?"   (route‑varying) → HTML splice (passive branch)
```

The old "shell stays, outlet swaps" idea is just the **common case** of this model:
one persistent reactive layout + one large passive (or reactive) branch for page
content. The general model additionally handles a route‑varying server‑only `<if>`
three levels deep, independently, by addressing its passive‑branch marker.

## 4. Which server‑only boundaries are even patchable (cross‑template analysis)

Marking *every* server‑only control flow as a passive branch would add markers
(bytes) to the initial HTML for regions that never change. The compiler avoids this
using analysis it already has — does the boundary's condition/items derive from
**navigation‑varying** input (route params, page data) or from **build‑invariant**
data?

* **Invariant server‑only control flow** (condition/items derive only from
  constants / build‑time data, identical on every page) → **not** marked, **never**
  patched. It is part of the reusable static shell.
* **Navigation‑varying server‑only control flow** (derives from route/page input) →
  emit a passive‑branch marker; eligible for HTML splice on navigation.

This is the request's "template structure and cross‑template analysis inform
optimization points": the dependency tracking in `util/references.ts` /
`serialize-reasons.ts` already knows whether a binding flows from page input, so the
compiler can tag each server‑only boundary `navVarying` vs `invariant` and only pay
marker cost where it can actually save a reload.

## 5. Per‑section transport classification (the unifying rule)

Putting §3–4 together, the compiler tags each section with how it travels on a
navigation. This is a pure function of compile‑time facts:

| Section kind | Travels as | Client applies via | Cost |
| --- | --- | --- | --- |
| Reactive value/attr/text | state | existing signal | changed values |
| Reactive `<if>`/`<for>` | state | existing `_if`/`_for` (paths run) | changed values |
| Server‑only, navigation‑varying | HTML + resume payload | passive‑branch splice | fragment HTML |
| Server‑only, invariant | — (skipped) | — | 0 |
| Not‑yet‑loaded route chunk | state (+ optional first‑paint HTML) | `ready(readyId)` then mount | chunk once + state |
| Anything unrepresentable / mismatch | — | full reload | reload |

The classification composes recursively, and the cases nest cleanly because each
patch targets a distinct, stably‑addressed marker:

* **server‑only branch containing reactive islands** → HTML splice carries the
  fragment + the islands' resume payload; the client splices then resumes the
  islands (offset‑rebased, §7).
* **reactive branch containing server‑only navigation‑varying sub‑branches** → the
  outer reactive `_if` runs from its state patch; the inner passive branches are
  patched by their own HTML‑splice frames. The two are independent markers and do
  not interfere.

## 6. The stateless request/response contract

The client carries just enough context for the server to compute an optimal update
against build‑time constants — no server memory.

### Request

```
GET /target/url
X-Marko-Nav: 1
X-Marko-Build: <buildHash>      # client's loaded build
X-Marko-View: <viewSignature>   # see below
```

`viewSignature` is a compact descriptor of what the client currently has mounted,
so the server can skip re‑sending unchanged regions **without remembering
anything**:

* the ordered list of mounted **persistent template IDs** (layout chain), and
* a bounded set of **content hashes** for the client's *persistent* passive
  branches (layout‑level server‑only regions) keyed by their stable boundary ID.

The server renders the target and, for each persistent passive branch, compares its
freshly computed content hash to the client's; **matching ⇒ skip**, differing ⇒ emit
an HTML‑splice frame. Reactive state is always emitted for the changed subtree and
filtered by client equality (§3.1). We hash only *persistent* (layout‑level)
boundaries so the request stays small; passive branches **inside the changed page
subtree** are sent wholesale because they changed anyway. This is the optimal middle
ground between a truly stateless server (can't know what the client holds) and small
payloads (need to know what the client holds): a tiny, bounded request context plus
build‑time knowledge of base‑vs‑code‑split chunks.

### Response

* **Reload directive** (`X-Marko-Reload: 1`): build hash mismatch (stale deploy),
  `viewSignature` incompatible with the target's structure, or a route opting out.
  Client does `location.assign(url)`.
* **Navigation update**: a framed stream of per‑boundary patches (§7).

## 7. Wire format — a stream of per‑boundary patches

To maximize reuse, payloads use the **same serialized shapes** the streaming
serializer already emits; only delivery (fetch + controlled apply) and addressing
(per boundary) differ. Newline‑framed so async/lazy parts arrive out of order,
mirroring the HTML reorder protocol.

```
# header (always first)
{ "v":"<buildHash>", "url":"/target", "title":"…" }

# STATE patch — reactive scopes; identical to Serializer output, offset‑rebased on apply
_=>[1,{…},2,{…}]                         # scope‑fill
"regId 1 regId 2"                        # effects (attach/run signals)

# HTML SPLICE patch — replace a passive branch addressed by its stable boundary id
{ "splice": "<boundaryId>", "html": "<…fragment…>", "resume": <payloadRef?> }

# LAZY gate — code‑split route chunk; reuse readyId machinery
{ "ready":"<readyId>", "chunk":"/assets/route.<buildHash>.js" }

# head/asset deltas — build‑hash‑stamped, idempotent
{ "assets":["/assets/route.<buildHash>.css"] }
```

`boundaryId` is the passive branch's compile‑time address (templateId + section +
accessor) — the same family of stable IDs as `getResumeRegisterId`. The STATE and
effect frames are fed straight into the **existing** `applyScopes` / resume‑effect
routines; we are not adding a second deserializer.

## 8. Client apply path (the only genuinely new runtime code)

A small **opt‑in** module, imported only when the page entry enables SPA mode. It is
the "slight initial‑JS regression" the request anticipates; everything it calls
already ships.

1. **Intercept** in‑app `<a>` clicks and `popstate`; manage history, scroll, focus.
2. **Fetch** the target with §6 headers. Optionally prefetch on hover/idle using the
   existing load‑trigger primitives (`src/dom/load.ts`); payloads are
   build‑hash‑keyed and cacheable.
3. **Guard**: if `X-Marko-Reload` or `header.v !== __MARKO_BUILD__`, abort to
   `location.assign(url)`. A stale client never applies mismatched state.
4. **Rebase scope IDs.** Payload scopes are numbered locally; allocate a fresh
   non‑colliding range in the client's scope space (client scopes already start at
   `1e6`, see `createScope`/`nextScopeId`) and resolve payload id `i → base + i` — a
   tiny additive offset in `serializeContext`/`applyScopes`. Cross‑references into
   the live tree (a splice's parent branch) are passed as real existing ids.
5. **Apply patches in tree order**:
   * STATE frames → `applyScopes` + resume‑effect path; reactive signals run and
     reconcile (§3.1).
   * HTML‑SPLICE frames → locate the passive branch by `boundaryId`,
     `removeAndDestroyBranch(old)`, insert fragment HTML, `walk` + resume the
     islands inside, relink to parent (§3.2).
   * LAZY frames → gate through `ready(readyId)` unchanged; apply the gated state
     once the chunk loads (optionally after painting an inline first‑paint
     fragment).
6. **Finalize**: ensure new `assets` (idempotent), set `document.title`, update the
   route signal so reactive layout regions react locally.
7. **Fallback** on any thrown error mid‑apply: `location.assign(url)`.

Estimated incremental client cost ≈ **~1–2 KB** min+gz: history/link interception +
fetch + frame parse + offset rebase + STATE apply (reuses `applyScopes`) + passive
splice (reuses `removeAndDestroyBranch` + walk/resume) + guard. The heavy lifting is
reused verbatim.

## 9. Tradeoffs and chosen middle grounds

* **State vs HTML, per section** — not a global toggle. State minimizes bytes and
  reuses bundled paths but only works for reactive sections; HTML works for
  server‑only structure but costs bytes. *Chosen:* the compiler's existing
  reactive/server‑only classification decides per section; a server‑side
  size/throughput heuristic may override a reactive section to HTML when state +
  client reconcile would be larger or slower (huge static lists).
* **Marker cost vs patchability** — marking every server‑only branch as patchable
  bloats initial HTML. *Chosen:* mark only **navigation‑varying** server‑only
  boundaries (§4); invariant ones stay marker‑free.
* **Diff granularity vs request size** — per‑boundary content hashes give true
  server‑only diffing but grow the request. *Chosen:* hash only **persistent
  layout‑level** passive branches; send page‑subtree passive branches wholesale.
* **Statelessness vs minimal bytes** — *Chosen:* tiny request context (build hash +
  view signature) + build‑time chunk knowledge ⇒ near‑optimal payloads, zero server
  memory.
* **Initial load vs navigation speed** — *Chosen:* accept a small, bounded
  first‑load regression (opt‑in controller); never regress the resume format or base
  bundle.
* **Eager vs lazy route chunks** — *Chosen:* lazy + `ready` gate + optional inline
  first‑paint HTML + hover/idle prefetch.

## 10. Build‑hash & correctness invariants

* **One build hash, checked every navigation.** `templateId`s, registry IDs, walk
  codes, and the serialized scope schema are only stable *within* a build.
  Build‑hash gating (request header vs server constant, re‑verified before apply)
  guarantees a stale client reloads rather than mis‑applying.
* **Stable IDs server↔client within a build** (already true).
* **Non‑colliding scope IDs** via the apply‑time offset (§8.4).
* **Lifecycle correctness**: passive‑branch splice routes through the existing
  branch‑destroy/abort path, so `onDestroy`/aborts fire on the old branch and
  `onMount`/effects on the new — identical to a control‑flow change today.
* **Stateless server**: every decision is a pure function of (request context, build
  constants, target render).

## 11. Compiler / runtime surface (implementation sketch)

Opt‑in config (additive): a `serverUpdates` (a.k.a. `singlePage`) flag in
`packages/compiler/src/config.js` / translator. When enabled for `entry:"page"`
templates, the page imports the navigation controller and emits SPA metadata.

Translator (`src/translator/`):

* **Passive‑branch emission**: in SPA mode, set `serializeBranch = 1` for
  navigation‑varying server‑only `<if>`/`<for>` (and unrepresentable subtrees) so
  they get `BranchStart`/`BranchEnd` markers and a resumable branch scope — *without*
  emitting a client `_if`/`_for` signal.
* **`navVarying` vs `invariant` classification** (§4): extend the dependency/
  serialize‑reason analysis to tag each server‑only boundary.
* **Boundary IDs**: assign each passive branch a stable address (reuse the
  `getResumeRegisterId` scheme) and record persistent (layout‑level) ones in
  `file.metadata.marko` for the view signature.
* **Navigation render entry**: per page, a server function that renders the target
  and emits the §7 patch stream (reusing `State`/`Serializer.stringifyScopes` and
  the reorder/`ready` writer paths), computing content hashes for persistent passive
  branches and skipping those matching the request's view signature.

HTML runtime (`src/html/`):

* `renderNavigation(template, input, { viewSignature, buildHash })` → builds the
  framed NavigationUpdate; emits a reload directive on hash/structure mismatch.

DOM runtime (`src/dom/`):

* **Navigation controller** module (opt‑in import): §8.
* Small extensions to `resume.ts` `serializeContext`/`applyScopes` for the scope‑id
  **offset** and a **target parent branch**; a `spliceBranch(boundaryId, html,
  resume)` helper composing `removeAndDestroyBranch` + insert + walk/resume.
* Reuse `ready(readyId)`, `createBranch`, branch destroy/abort, resume effects, and
  asset ensuring unchanged.

## 12. Forms, actions, head, history (brief)

* **Server‑first actions**: a `<form>` POST replies with the same patch‑stream
  format, so mutations and navigations share one path — and a mutation that changes
  a server‑only `<for>` three levels down is just an HTML‑splice patch on that
  boundary.
* **Head/title**: title in the header frame; new route CSS/JS as build‑hash‑stamped
  idempotent asset frames; reuse `assets.ts`.
* **History/scroll/focus**: standard SPA controller duties; restore scroll on
  `popstate`, move focus to the changed region for a11y.

## 13. End‑to‑end example (mixed levels)

Navigating `/search?q=a` → `/search?q=b` under a shared layout. The results list is
a **server‑only, navigation‑varying `<for>`** (rendered on the server, not bundled),
and each result row contains a reactive `<button>` (a client island). A "did you
mean" notice is a **server‑only, navigation‑varying `<if>`** at a different level.

1. Controller intercepts the click, fetches `/search?q=b` with `X-Marko-Nav`,
   `X-Marko-Build: h7`, and a `viewSignature` listing the layout chain + content
   hashes of the two persistent layout passive branches.
2. Server renders `/search?q=b`. Layout hashes match → skipped. It emits:
   * `{ v:"h7", url:"/search?q=b", title:"Search: b" }`
   * STATE patch: the reactive search‑box `<input value>` and result‑count text →
     `_=>[1,{q:"b",count:5}]`, `"reg_box 1"` (no HTML).
   * HTML SPLICE for the results `<for>` boundary: the new rows' HTML **+** the
     resume payload for the per‑row reactive buttons.
   * HTML SPLICE for the "did you mean" `<if>` boundary: its new branch HTML (now
     present where it was absent).
3. Client (build hash matches): applies the STATE patch (search box + count update
   in place via signals); splices the results `<for>` passive branch
   (`removeAndDestroyBranch` old rows → insert new rows → resume the new buttons);
   splices the `<if>` passive branch; sets the title.
4. Bytes over the wire: the rows' HTML + the buttons' tiny resume payload + a couple
   of changed values. **No runtime JS, no component JS, no layout HTML**, and the
   reactive parts updated without any HTML at all.

If `h7 !== server build`, the server returns `X-Marko-Reload: 1` and the client does
a normal full navigation — always correct.
