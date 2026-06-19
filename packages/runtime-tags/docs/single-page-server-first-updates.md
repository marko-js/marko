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

1. **Low initial JS.** The first paint must stay (nearly) as cheap as today's
   resume. The SPA layer is opt‑in and adds only a small navigation controller
   on top of code the page already ships.
2. **Low bytes over the wire per navigation.** A navigation should send the
   *smallest* representation that the client can turn back into a correct DOM +
   reactive tree, preferring serialized **state** over rendered **HTML**, and
   sending **nothing** for the parts of the page that do not change.
3. **Incremental JS/HTML for reloads & navigations.** Reuse already‑loaded
   runtime and component chunks; fetch only route‑specific chunks the client
   does not have yet, keyed by build hash so they cache forever.
4. **Stateless.** Servers keep **no** per‑client session state. Everything the
   server needs to produce an optimal update is carried *in the request* by the
   client (build hash, current shell signature, target URL). Servers compare
   that context against build‑time constants.
5. **Leverage cross‑template analysis.** The compiler already knows the static
   template HTML, walk codes, section tree, serialize‑reasons, and stable
   template/registry IDs. Use that whole‑program knowledge to decide, per
   subtree, what must travel as HTML, what can travel as pure state, and what
   need not travel at all.
6. **Always‑correct fallback.** On any uncertainty — build hash mismatch,
   unknown/incompatible shell, server‑only invariant, or error — fall back to a
   normal full‑document navigation (`location.assign`). Correctness dominates
   optimization.

Non‑goals: a routing/data layer (this integrates with one, e.g. `@marko/run`,
but does not define routes); client‑only SPAs (this is *server‑first*); changing
the initial‑load resume wire format.

## 2. The existing machinery we build on

This design is deliberately *additive*. The load‑bearing primitives already
exist:

| Concern | Today | File(s) |
| --- | --- | --- |
| Serialize scope state + effects into a payload | `Serializer.stringifyScopes`, scope‑fill arrays `[id,{props},Δ,{props}]`, effect token strings `"regId scopeId …"`, `_(id)` scope refs, deferred mutations `$.x.f(v)` | `src/html/serializer.ts`, `src/html/writer.ts` |
| Resume a server render on the client | `init(runtimeId)` → `serializeContext`, `applyScopes`, `getScope`, `processResumes`, comment‑marker walk | `src/dom/resume.ts`, `src/html/inlined-runtimes.ts` |
| Reactive updates | signals `(scope,value)=>void`, min‑heap queue keyed `scopeId*1000+signalKey`, microtask `schedule()` | `src/dom/signals.ts`, `src/dom/queue.ts`, `src/dom/schedule.ts` |
| Materialize fresh content on the client | `_content`/`_template` clone cache, `walk` codes, `createBranch`, `mount()` | `src/dom/renderer.ts`, `src/dom/walker.ts`, `src/dom/template.ts` |
| Swap a subtree | conditional renderer / branch swap, keyed list reconcile (LIS), `removeAndDestroyBranch` + abort lifecycle | `src/dom/control-flow.ts`, `src/dom/scope.ts` |
| Stream content after first byte; gate on readiness | `Chunk`/`Boundary`/`State`, reorder runtime (`<t>` placeholders), `ready(readyId)` lazy gating | `src/html/writer.ts`, `src/dom/resume.ts`, `src/dom/load.ts` |
| Stable identity across server & client builds | `getTemplateId`, `getResumeRegisterId` (`templateId_sectionId_binding/type`), content `Hash` | `packages/compiler/src/babel-utils/tags.js`, `src/translator/util/signals.ts` |
| Asset/head management & lazy chunks | `withPageAssets`, deferred asset triggers, `_load_template`/`ready` | `src/html/assets.ts`, `src/dom/load.ts` |
| Opt‑in compiler features | `output`, `optimize`, `optimizeKnownTemplates`, `runtimeId`, `entry: "page"|"load"` | `packages/compiler/src/config.js`, `src/translator/util/entry-builder.ts` |

**Key observation.** Marko's resume payload is *already a patch*: "given this
server‑rendered DOM, here is the serialized scope state + the effects needed to
make it live." A navigation is the same problem one level up: "given the
currently‑live page, here is the minimal state + DOM delta to become the next
page." We reuse the same serializer, the same `applyScopes`, the same branch
swap. The new code is mostly *plumbing and policy*, not new rendering.

## 3. Core model: shell stays, outlet swaps

A page is one tree of scopes. We split it into two reactive regions:

```
 ┌─────────────────────── document / shell ───────────────────────┐
 │  <html><head>… persistent layout (nav, sidebar, chrome) …       │
 │                                                                 │
 │     ┌──────────── route outlet (control‑flow branch) ───────┐   │
 │     │   page content for the current URL                    │   │
 │     └───────────────────────────────────────────────────────┘   │
 └─────────────────────────────────────────────────────────────────┘
```

* **Shell** = the stable prefix of layout templates from the document root down
  to the route **outlet**. It *stays mounted* across navigations.
* **Outlet** = a compiler‑marked control‑flow boundary (a branch) whose content
  is the route‑specific subtree.

Navigation is then expressed entirely in terms of primitives Marko already has:

1. **Shell reacts locally.** The current route is modeled as a reactive input
   (a top‑level `let`/context value seeded from `$global`). On navigation the
   client sets the new route value; the shell's derived signals recompute
   through the existing queue — active‑link highlight, breadcrumbs, etc. update
   with **zero server bytes** and no server involvement. This is the single most
   important consequence of "leverage the reactive system": the server never has
   to know, or re‑send, anything about the shell's interactive state, which is
   also what keeps the server **stateless** (it never needs the client's
   existing scope IDs).
2. **Outlet swaps from a server payload.** The new page subtree is genuinely new
   data the client does not have, so it comes from the server — but as the
   *smallest* representation possible (§5), applied through the existing
   branch‑swap path (`setConditionalRenderer` → `createBranch` →
   `removeAndDestroyBranch`), so lifecycle, aborts, and cleanup all run exactly
   as they do for a normal `<if>`/`<for>` change today.

If the target URL lives under a **different** shell (e.g. a different top‑level
layout), the divergence point moves *up*: the server emits the branch swap at
the highest shared layout. If nothing is shared (different document root), it is
a full reload.

## 4. The stateless request/response contract

Because the server keeps no session, the client carries just enough context for
the server to compute an optimal update against build‑time constants.

### Request (navigation / reload)

```
GET /target/url
X-Marko-Nav: 1
X-Marko-Build: <buildHash>          # client's loaded build
X-Marko-Shell: <shellSignature>     # root→outlet templateId chain currently mounted
```

* `shellSignature` is the ordered list of `templateId`s from the document root
  to the mounted outlet (stable per build, tiny — a few opaque IDs). It lets the
  server find the **highest shared layout** without rendering the old page and
  without remembering anything.
* The same endpoint serves both full documents (no `X-Marko-Nav`) and navigation
  updates (with it), so URLs stay canonical and shareable, and crawlers / no‑JS
  clients get full HTML.

### Response

Either a **reload directive** or a **navigation update**.

* **Reload directive** (`X-Marko-Reload: 1`, empty/short body): emitted whenever
  the server cannot guarantee an optimal, correct update — build hash mismatch
  (client is running an old deploy), `shellSignature` not a compatible prefix of
  the target's shell, or the route opts out / contains server‑only invariants.
  The client responds with `location.assign(url)`.
* **Navigation update**: a small framed stream (see §6) describing where to
  splice, the new outlet branch, scope state, effects, head/asset changes, and
  title.

The contract is intentionally **request‑carried, build‑hash‑gated**: it is the
optimal middle ground between a truly stateless server (which cannot know what
the client has) and small payloads (which require knowing what the client has).
The build manifest already tells the server which component chunks are in the
*base* bundle vs code‑split, so the server knows what the client can reconstruct
locally without the client enumerating every loaded module. Pushing further
(client lists every chunk) shrinks payloads marginally while inflating every
request — not worth it.

## 5. Per‑subtree payload strategy (where the bytes savings come from)

For each subtree in the new outlet content, the server chooses the cheapest
representation the client can correctly apply. This is driven by **cross‑template
analysis** the compiler already performs (serialize‑reasons + which templates
land in the base bundle):

1. **Nothing** — the subtree is part of the shell and unchanged. Not sent. (Most
   of the page on a typical navigation.)
2. **State‑only mount** *(cheapest content)* — the client already has the
   template's JS (it is in the base bundle or already loaded). The server sends
   `templateId + serialized scopes` only; the client clones the static template
   HTML locally, runs `walk`, and applies state via the existing
   `_content`/`createBranch` path. **No HTML, no JS over the wire — only the
   changed values.** This is the headline win: navigating to a page whose
   components are already loaded costs only its data.
3. **Lazy mount** — the client lacks the template JS (code‑split route). Reuse
   the existing `ready(readyId)` gating: the payload's scopes are gated on a
   `readyId`; the client fetches the route chunk (URL from the build manifest,
   build‑hash‑stamped so it is immutable‑cacheable), then applies exactly as
   state‑only. Optionally the server also inlines an **HTML fragment** for first
   paint so the user sees content before the chunk's JS arrives (paint‑vs‑bytes
   tradeoff, §8).
4. **HTML fragment** — content the client *cannot* reconstruct from template +
   state: server‑only `<await>` data, content derived from server‑only inputs,
   or anything `serialize-reasons` marks as not reconstructible. Sent as rendered
   HTML + its resume payload, exactly like today's initial resume for that
   fragment. Streams in via the existing reorder/`ready` mechanism.
5. **Full reload** — see §4.

The compiler annotates each section with a `reconstructible` bit (an extension of
the existing `SerializeReason` analysis in
`src/translator/util/serialize-reasons.ts`): "client can rebuild this from
template + serialized state" vs "must arrive as HTML." The server walks the new
outlet's section tree and picks 2/3/4 per node, defaulting to the cheapest legal
option, with a size‑estimate heuristic to prefer an HTML fragment when state +
client‑clone would actually be larger or slower (e.g. large static content).

## 6. Wire format

To maximize reuse, the navigation update is the **same serialized payload shape**
the streaming serializer already emits — only the delivery and apply path differ
(fetch + controlled apply instead of inline `<script>` execution). It is a
newline‑framed stream so async/lazy parts can arrive out of order, mirroring the
HTML reorder protocol:

```
# frame 0 — header (always first)
{ "v": "<buildHash>", "url": "/target", "title": "…", "base": <scopeIdHint?> }

# splice — where the new outlet branch attaches, by compile‑time accessor
{ "splice": { "shell": <divergenceTemplateId>, "outlet": <nodeAccessor>, "key": <routeKey> } }

# scope state for the new branch (offset‑rebased on apply — see §7)
_=>[1,{…},2,{…}]                       # scope‑fill, identical to Serializer output

# effects to run (attach signals/events) — identical token‑string format
"regId 1 regId 2"

# optional HTML fragment(s) for non‑reconstructible / lazy subtrees
{ "html": "<…>", "at": <markerId> }

# optional lazy gate — reuse readyId machinery for code‑split route chunks
{ "ready": "<readyId>", "chunk": "/assets/route.<buildHash>.js" }

# head/asset deltas (new CSS for the route, build‑hash‑stamped, idempotent)
{ "assets": ["/assets/route.<buildHash>.css"] }
```

The body is consumed by the navigation controller (§7), which feeds the
scope‑fill / effect frames straight into the **existing** `applyScopes` /
resume‑effect routines from `resume.ts`. We are not inventing a second
deserializer — we are calling the one the resume path already uses, with a scope
offset applied.

## 7. Client apply path (the only genuinely new runtime code)

A small, **opt‑in** module — imported only when the page entry enables SPA mode —
adds the navigation controller. It is the "slight initial‑JS regression" the
request anticipates; everything it calls already ships.

Responsibilities:

1. **Intercept** in‑app `<a>` clicks and `popstate`; push/replace history;
   manage scroll/focus restoration.
2. **Fetch** the target with the §4 headers. Optionally prefetch on hover/idle
   using the existing load‑trigger primitives (`src/dom/load.ts`); payloads are
   build‑hash‑keyed and cacheable, so prefetch is free to repeat.
3. **Guard**: if `X-Marko-Reload` or `header.v !== __MARKO_BUILD__`, abort to
   `location.assign(url)`. (Stale client never applies mismatched state — this is
   the correctness backbone.)
4. **Rebase scope IDs.** The payload numbers its scopes from a local base; the
   controller allocates a fresh, non‑colliding range in the client's own scope
   space (client scopes already start at `1e6`, see `createScope`/`nextScopeId`)
   and resolves payload id `i → base + i`. This is a tiny extension to
   `serializeContext`/`applyScopes`: an additive offset plus a target parent
   branch. The new branch links to the **existing** outlet's parent (an existing
   client scope), supplied literally by the `splice` frame — so cross‑references
   into the live shell are by real id, internal references are offset‑rebased,
   and nothing collides. The server stays stateless because it never needs to
   know the client's current high‑water mark.
5. **Apply**: feed scope‑fill frames to `applyScopes`, push effect frames through
   the resume‑effect path, mount any HTML fragments at their markers, and **swap
   the outlet branch** through the existing control‑flow swap so the old branch's
   abort controllers / `onDestroy` run and the new branch's `onMount`/effects run
   in the normal order. Lazy frames gate through `ready(readyId)` unchanged.
6. **Finalize**: ensure new `assets` are present (idempotent, build‑hash‑stamped),
   set `document.title`, and update the route signal so the **shell** reacts
   locally (§3.1).
7. **Fallback** on any thrown error mid‑apply: `location.assign(url)`.

Estimated incremental client cost: history/link interception + fetch + frame
parsing + offset rebase + outlet swap + guard ≈ **~1–2 KB** min+gz, because the
heavy lifting (clone, walk, signals, branch swap, resume effects, lazy gating) is
reused verbatim.

## 8. Tradeoffs and the chosen middle grounds

* **State‑only vs HTML fragment.** State‑only minimizes bytes and offloads paint
  to the client, but costs client CPU and requires the template JS present. HTML
  fragments are larger but need no template eval and paint without the chunk.
  *Chosen:* default to state‑only for templates already in the bundle; HTML
  fragment for not‑yet‑loaded or server‑only content; a server‑side size/throughput
  heuristic overrides toward HTML when state + client‑clone would be larger or
  slower. Code‑split routes may inline a first‑paint HTML fragment *and* a lazy
  state gate (paint now, hydrate when the chunk lands).
* **Diff granularity.** Whole‑outlet replacement is simple and already captures
  the dominant win (shell is free via reactivity; only the page subtree travels).
  Deep section‑level diffing of nested shared components could shave more bytes
  but needs the client to echo more state to the server and adds real complexity.
  *Chosen:* outlet‑branch replacement now; deep diffing is a later, measurement‑
  gated optimization. The reactive shell already removes the biggest redundancy.
* **Statelessness vs minimal bytes.** A stateless server cannot know exactly what
  the client holds. *Chosen middle ground:* a tiny request context (build hash +
  shell signature + URL) plus build‑time knowledge of base vs code‑split chunks
  yields near‑optimal payloads with zero server memory and negligible request
  overhead.
* **Initial load vs navigation speed.** The SPA controller is the only added
  initial JS, and it is opt‑in per page entry. *Chosen:* accept the small,
  bounded first‑load regression to make every subsequent navigation cheap; do not
  regress the resume format or the base bundle.
* **Eager vs lazy route chunks.** Lazy keeps initial JS low but adds a first‑nav
  fetch; the `ready` gate + optional inline HTML hides the latency. Prefetch on
  hover/idle removes it in the common case.

## 9. Build‑hash & correctness invariants

* **One build hash, checked every navigation.** `templateId`s and registry IDs
  (`getResumeRegisterId`) are only stable *within* a build; the serialized scope
  format and the client's loaded template JS must match the server's payload.
  Build‑hash gating (request header vs server constant, re‑verified in the
  response header before apply) guarantees a stale client never applies
  mismatched state — it reloads instead.
* **Stable IDs server↔client within a build** (already true): same `templateId`,
  same registry IDs, same walk codes in both `html` and `dom` outputs.
* **Non‑colliding scope IDs** via the apply‑time offset (§7).
* **Lifecycle correctness**: outlet swap routes through the existing
  branch‑destroy/abort path, so `onDestroy`/`AbortController`s fire on the old
  branch and `onMount`/effects fire on the new one — identical to a control‑flow
  change today.
* **Stateless server**: every decision is a pure function of (request context,
  build constants, target render). No cross‑request memory.

## 10. Compiler / runtime surface (implementation sketch)

Opt‑in config (additive):

* `packages/compiler/src/config.js` / translator: a `serverUpdates` (a.k.a.
  `singlePage`) boolean. When enabled for `entry: "page"` templates, the page
  emits SPA metadata and imports the navigation controller.

Translator (`src/translator/`):

* **Outlet boundary** — recognize the route‑content boundary (a core
  `<router-outlet>`‑style tag, or integration with the run framework's page
  nesting) and emit it as a keyed control‑flow branch.
* **Shell signature** — record the root→outlet `templateId` chain in
  `file.metadata.marko` and expose it on the server renderer for advertise/compare.
* **`reconstructible` analysis** — extend `serialize-reasons.ts` so each section
  is tagged state‑only‑reconstructible vs HTML‑required.
* **Navigation render entry** — per page, a server function that renders *only*
  the outlet subtree and serializes it as a branch payload (reusing the
  serializer) instead of a full document.

HTML runtime (`src/html/`):

* `renderNavigation(template, input, { shellSignature, buildHash })` → builds a
  **NavigationUpdate** via `State` + `Serializer.stringifyScopes`, streaming
  async/lazy parts through `Boundary`/`Chunk`/reorder/`ready`; emits a reload
  directive on hash/shell mismatch.

DOM runtime (`src/dom/`):

* **Navigation controller** module (opt‑in import): §7.
* Small extensions to `resume.ts` `serializeContext`/`applyScopes` to accept a
  scope‑id **offset** and a **target parent branch** for navigation payloads.
* Reuse `ready(readyId)`, `createBranch`, conditional swap, resume‑effects,
  asset ensuring — unchanged.

## 11. Forms, actions, head, and history (brief)

* **Server‑first actions**: a `<form>` submit POSTs and the server replies with
  the same NavigationUpdate format, so mutations and navigations share one path.
* **Head/title**: title in the header frame; new route CSS/JS as build‑hash‑stamped
  asset frames applied idempotently (existing assets stay); reuse `assets.ts`
  deferred‑asset handling.
* **History/scroll/focus**: standard SPA controller duties; restore scroll on
  `popstate`, move focus to the new outlet for a11y.

## 12. End‑to‑end example

Navigating `/inbox` → `/inbox/42` under a shared mail layout, route component
already in the base bundle:

1. Controller intercepts the click, pushes history, fetches `/inbox/42` with
   `X-Marko-Nav`, `X-Marko-Build: h7`, `X-Marko-Shell: [doc,mailLayout]`.
2. Server renders `/inbox/42`; its shell chain `[doc,mailLayout]` matches → emits
   a NavigationUpdate splicing at `mailLayout`'s outlet:
   * `{ v:"h7", url:"/inbox/42", title:"Message 42" }`
   * `{ splice:{ outlet:<acc>, key:"message" } }`
   * `_=>[1,{subject:"…",body:"…"}]` (state‑only — the `Message` template JS is
     already loaded; **no HTML sent**)
   * `"reg_msg 1"` (effects)
3. Client: build hash matches → rebases scope 1 → `1e6+n`, swaps the outlet branch
   (old list‑view branch destroyed, abort controllers fire), clones the `Message`
   template locally, applies state, runs effects, sets the title, and updates the
   route signal so the layout's "back to inbox" / active states react locally.
4. Bytes over the wire: roughly the subject + body strings + a couple of IDs.
   No runtime JS, no component JS, no shell HTML.

If instead `h7 !== server build` (a deploy happened), the server returns
`X-Marko-Reload: 1` and the client does a normal full navigation — always correct.
