# Single‑Page Server‑First Updates (design)

> Status: design / RFC. Opt‑in, compiler‑configured runtime for Marko 6
> (`@marko/runtime-tags`). It turns the existing multi‑page, full‑reload resume
> architecture into a single‑page app that performs **server‑first navigations and
> reloads without reloading the document**, reusing the resume serializer, the
> reactive system, the branch/control‑flow machinery, and the streaming writer
> almost entirely as‑is.

## 1. Goals and the governing principle

1. **Low initial JS.** First paint stays as cheap as today's resume; the SPA layer is
   opt‑in and its heavier parts (the navigation controller and any "updates" code) are
   *lazy* and kept out of the base bundle's critical path (§11).
2. **Low bytes over the wire per navigation.** Prefer **state + structural decisions**
   over HTML where it pays off; send **nothing** for unchanged regions.
3. **Incremental JS/HTML.** Reuse loaded runtime/components; stream changes; load extra
   route code lazily and cache by build hash.
4. **Stateless.** The server keeps no per‑client state; the client carries what's needed
   in the request and the server compares against build‑time constants.
5. **Leverage cross‑template analysis** to pick optimization points per section.
6. **Always‑correct fallback** to a full document navigation on any uncertainty.

**Governing principle — never ship server‑only logic.** The client bundle never
contains control‑flow/business logic the compiler classified as server‑only. The
client only ever (a) *renders* compiled templates and (b) *adopts* server output. It
receives the *decision* (which branch / which keys) and *final hole values*, never the
logic that produced them.

**Non‑goals / deferred:** a routing/data layer (this integrates with one); client‑only
SPAs; **edge/CDN caching of navigation payloads** (considered, intentionally out of
scope here).

## 2. Performance priorities (the lens for everything below)

On modern connections **round‑trip latency and main‑thread work dominate raw byte
count**, so this design optimizes those first and treats byte‑shaving as secondary.
In priority order:

1. **Hide the round trip — prefetch on intent.** Fetch the navigation payload (and warm
   any route‑specific code) on hover/`touchstart`/viewport *before* the click. This is
   the largest perceived‑latency win and is independent of payload size (§8).
2. **Don't block on slow data — stream the response + partially render.** Flush fast
   regions immediately and stream slow ones; render only the *changed* subtree on the
   server (§5). Pages paint at the speed of their fastest region, and server TTFB/CPU
   drop.
3. **Protect the cheap path — minimize main‑thread cost and base‑bundle weight.** The
   durable win of state‑only updates is *avoiding HTML parsing* and doing minimal keyed
   DOM mutation; and the SPA layer must not leak into initial JS, or it regresses every
   first paint (§11, §14).
4. **Shave bytes adaptively, not universally.** Compressed HTML streaming is the
   default for server‑only regions; the heavier "updates chunk" optimization is applied
   **only where cross‑template analysis projects a real win** (§6).

## 3. The machinery we build on (all additive)

| Concern | Today | File(s) |
| --- | --- | --- |
| Serialize scope state + effects | `Serializer.stringifyScopes`, scope‑fill `[id,{props},Δ,{props}]`, effect tokens, `_(id)` refs | `src/html/serializer.ts`, `src/html/writer.ts` |
| Resume from self‑describing HTML | `init` → walk reads embedded markers (`*`,`[`,`]` + tokens); `applyScopes`/`processResumes` fill holes | `src/dom/resume.ts` |
| Render compiled templates | `_content`/`_template` clone cache + `walk` codes attach bindings | `src/dom/renderer.ts`, `src/dom/walker.ts` |
| Compare‑then‑swap‑or‑update control flow | `_if` (`newBranch !== scope[branchAccessor]` → swap else holes), `_for` keyed LIS, `_content_resume` pick‑by‑id | `src/dom/control-flow.ts`, `src/dom/dynamic-tag.ts` |
| Reactive updates | signals `(scope,value)=>void`, min‑heap queue, **skip when `value===current`** | `src/dom/signals.ts`, `src/dom/queue.ts` |
| Splice lifecycle | branch `StartNode`/`EndNode`, `createBranch`, `removeAndDestroyBranch` + aborts | `src/dom/control-flow.ts`, `src/dom/scope.ts` |
| **Stream + reorder + readiness** | `Chunk`/`Boundary`/`State`, `<t>` reorder, `ready(readyId)` | `src/html/writer.ts`, `src/dom/load.ts` |
| Per‑section "ship to browser?" | `serializeReason`/`kStatefulReason` | `src/translator/core/if.ts`, `util/serialize-reasons.ts` |
| Code‑split entries | `entry:"page"|"load"`, `init`/`initEmbedded`, `ready` | `src/translator/util/entry-builder.ts` |
| Stable identity across builds | `getTemplateId`, `getResumeRegisterId`, content `Hash` | `babel-utils/tags.js`, `util/signals.ts` |

## 4. Render tiers

Every node in a page falls into one tier (the reactive vs server‑only split is the
existing `kStateful` axis):

| Tier | Structure decided by | Render code | Per‑nav transport | Continuity |
| --- | --- | --- | --- | --- |
| **Reactive** | client signals | primary bundle | **state only** | fine‑grained (reconcile) |
| **Server‑only (optimized)** *(§6)* | server → serialized discriminant | lazy per‑route **`updates` chunk** (logic stripped) | **state + discriminant — no HTML** | fine‑grained (reconcile) |
| **Server‑only (HTML)** *(default / cold)* | server | none on client | **streamed HTML** for the changed subtree | page‑level only (subtree torn down) |
| Static / invariant | — | — | 0 (skipped) | n/a |

Reactive and optimized‑server‑only share **one warm apply path**: feed new serialized
scope state into the live tree; every boundary reconciles via `_if`/`_for`/
`_content_resume`, differing only in input source (live signal vs serialized decision).
The HTML tier is simple, needs no extra client JS, works cold, and is parsed by the
browser's optimized streaming parser rather than costing main‑thread JS.

**Continuity is often the deciding axis — not bytes (prototype, §17).** The reconcile
tiers preserve *within‑subtree* state: interactive islands, focus, scroll position,
in‑flight media. The HTML tier **replaces** the changed subtree, so any stateful islands
inside it reset. And on content‑heavy pages the HTML tier's byte win over a full reload is
modest (the prototype measured a re‑sorted list fragment at ~90% of the full page) — its
real value is avoiding a *document* reload, not subtree bytes. So: prefer a reconcile tier
for regions with interactive content or on common navigation paths; use the HTML tier as
the universal cold/fallback.

## 5. Stream the response + render only what changed

The navigation response is produced with the existing `Chunk`/`Boundary`/reorder
machinery:

* **Partial render.** Using the request's view signature (§9), the server renders only
  the **changed subtree**; shell/persistent regions are skipped entirely. Its dominant
  wins are server CPU/TTFB and **skipping unchanged regions outright**. Note (prototype,
  §17): for the *changed subtree itself*, streamed HTML is only modestly smaller than a
  full reload on content‑heavy pages — the per‑region byte win comes from the **state
  tier** (§6), not from HTML. Partial render is therefore primarily a *latency* and
  *skip‑unchanged* lever, not a per‑region byte lever.
* **Streaming.** Fast regions flush immediately; slow/async regions stream in via the
  existing reorder protocol, so first meaningful paint of the new content is gated by
  the *fastest* region, not the slowest data dependency.

This reuses infrastructure that already exists for initial render, so its cost‑to‑impact
ratio is excellent — and it is tier‑independent (benefits HTML‑default and updates‑chunk
regions alike).

## 6. The `updates` chunk — an *adaptive*, analysis‑gated optimization

For routes/components where it pays off, the compiler emits a third output (an `updates`
entry, code‑split **per page/route** with a shared `_shared` chunk, aligned with
existing `page`/`load` splitting). It is the **CSR render tree for server‑only
components with server logic tree‑shaken out**:

* **Kept:** template HTML + walk codes; hole *assignment* from final values; control‑flow
  reconciliation driven by a **serialized discriminant** instead of a condition.
* **Stripped:** conditions, derivations, lifecycle/effects, server‑only imports.
  `${formatDate(x)}` ships its final string; `$!{raw}` ships as a string hole. The chunk
  pulls in **no** server‑only code.

```js
// updates/profile.<hash>.js — logic stripped: no isAdmin check
export const profile = _template("p", /* … */ (scope) =>
  _if("a",
    ["<h1>Welcome </h1>", WALKS_A, (s) => _text(s, /*name hole*/)],  // branch 0
    ["<p>Hello </p>",     WALKS_B, (s) => _text(s, /*name hole*/)],  // branch 1
  )(scope, scope[BRANCH_ACCESSOR]),  // ← discriminant from serialized state
);
```

**It is not applied universally** (it costs total JS + a build target). The compiler opts
a route/region in when **either** criterion holds:

1. **Byte economics** — expected inbound navigations × per‑nav saving > chunk size. The
   prototype's chunk (~1.9 KB gz) amortized after **~3 navigations** (§17), so any route on
   a common navigation path qualifies — this is broader than "data‑dense apps only."
2. **Within‑subtree continuity** — the region contains **stateful interactive islands** (or
   list rows the user interacts with). Here the reconcile tier is preferred *regardless of
   bytes*, because the HTML tier would tear the subtree down and reset those islands
   (§4, §17).

Otherwise the streamed‑HTML path (§5) is the default — it needs no chunk and works cold.
Both criteria extend the existing serialize‑reason / reference analysis, which already
knows island placement and value flow.

## 7. Serializing the server's decision (optimized tier)

Optimized server‑only scopes serialize a **discriminant** — your "renderer id" —
generalized per control‑flow: `<if>` → branch index; `<for>` → item keys (+ optional
per‑item renderer id) → keyed LIS reconcile; dynamic `<${tag}>` → template id →
`_content_resume` pick‑by‑id — plus **final hole values** and child‑scope refs. On a warm
navigation the client compares the new discriminant to the live scope's current one:
**same ⇒ update holes** (changed values only, equality‑skipped); **different ⇒
`removeAndDestroyBranch(old)` + instantiate the new renderer from the chunk + fill
holes**. Identical to `_if`/`_for` today, but the discriminant is data.

## 8. Lifecycle: prefetch on intent → stream → (optionally) warm

**Initial load** (cost ≈ today): SSR HTML; reactive islands resumed via the primary
bundle; server‑only regions are static resumed DOM. No `updates` chunk loaded; no
server‑only scope state serialized initially (lean initial bytes). Minimal initial
markers only (§12).

**Prefetch on intent (highest‑impact, §2.1):** on hover/`touchstart`/viewport, the
controller (a) fetches the navigation payload and caches it briefly, and (b) warms the
route's `updates` chunk if that route is updates‑optimized. The actual click then usually
resolves against an in‑flight or completed prefetch — hiding the RTT and the chunk load.

**On navigate:**

* *Reactive + HTML‑default regions:* apply the (possibly prefetched, streamed) payload —
  state for reactive scopes, streamed HTML splice for server‑only regions.
* *Updates‑optimized region, cold (chunk not yet warm):* stream its HTML once for instant
  paint while the chunk loads lazily; when the chunk lands it resumes over that DOM and
  goes live. *Warm:* the server sends **state + discriminants only**, no HTML; the live
  updates tree reconciles.

Prefetch‑on‑intent largely collapses the cold/warm distinction in practice: by the time
the user clicks, the chunk is typically already warming.

## 9. The stateless request/response contract

### Request

```
GET /target/url
X-Marko-Nav: 1
X-Marko-Build: <buildHash>      # client's loaded build
X-Marko-View: <viewSignature>   # mounted layout templateIds + content hashes of persistent regions
X-Marko-Warm: <routeChunkSet>   # updates-chunk route ids the client has cached
```

`X-Marko-View` enables partial render + region skipping (§5); `X-Marko-Warm` lets the
stateless server choose, per optimized region, between state‑only (warm) and streamed
HTML (cold). Both are client‑declared, bounded, and compact — the server remembers
nothing.

### Response

* **Reload directive** (`X-Marko-Reload: 1`): build hash mismatch, incompatible view
  signature, or route opt‑out → client `location.assign(url)`.
* **Navigation update**: a framed, streamable set of per‑boundary patches (§10).

## 10. Wire format — per‑boundary patches

```
{ "v":"<buildHash>", "url":"/target", "title":"…" }      # header (first)

# reactive + warm optimized server-only: state (+ discriminant), no HTML
_=>[5,{ [branch]:1, [name]:"Bob" }]
"regId 7"

# default / cold server-only: self-describing streamed HTML (carries its own markers)
{ "splice":"<boundaryId>", "html":"<…markers…>" }

{ "ready":"<readyId>", "chunk":"/assets/updates/route.<hash>.js" }   # lazy gate
{ "assets":["/assets/route.<hash>.css"] }                            # head deltas
```

State/discriminant frames feed the existing `applyScopes`/reconcile path; streamed HTML
is resumed by the existing marker walker. No second deserializer. Frames stream
out‑of‑order via the existing reorder protocol (§5).

## 11. Client controller (the new code) — and keeping it off the critical path

The navigation controller is **lazily loaded** and is **not** part of the base bundle's
critical path; initial paint/resume never waits on it. Its route‑signal plumbing is kept
minimal so it does not bloat initial JS (violating this would regress *every* page's
first paint — the most likely way the whole effort goes net‑negative).

Responsibilities:

1. **Prefetch on intent** (§8) — hover/`touchstart`/viewport; cache payloads briefly;
   warm route chunks.
2. **Intercept** `<a>`/`popstate`; manage history/scroll/focus.
3. **Guard**: `X-Marko-Reload` or `header.v !== __MARKO_BUILD__` → `location.assign`.
4. **Rebase scope IDs**: allocate a fresh range in the client's `1e6+` space; resolve
   `i → base + i` (small offset in `serializeContext`/`applyScopes`); splice parents
   passed as real ids.
5. **Apply (streamed, in tree order)**: state/discriminant → `applyScopes` + reconcile;
   HTML splice → `removeAndDestroyBranch(old)` + insert self‑describing HTML + resume.
   The warm path **avoids HTML parsing entirely** — its main‑thread cost is just keyed
   reconcile + equality‑skipped hole writes.
6. **Finalize**: ensure `assets`, set `title`, update the route signal so reactive layout
   regions react locally.
7. **Fallback** on any thrown error: `location.assign(url)`.

Incremental client cost ≈ **~1–2 KB** min+gz, lazy; `updates` chunks are extra JS but
lazy, per‑route, build‑hash‑cached, and never loaded for non‑navigating visitors.

## 12. Markers: self‑describing updates, lean initial HTML

* **Streamed update HTML always carries full markers** (must be resumable).
* **Initial document HTML keeps markers minimal** — outlet/persistent‑region granularity
  only. Once a route's chunk is warm, the live updates tree holds node references
  directly, so deep DOM markers aren't needed on the state‑only path. Preserves low
  initial bytes.

## 13. Tradeoffs and chosen middle grounds

* **Latency vs bytes** — *Chosen:* attack latency first (prefetch §8, streaming §5);
  treat byte‑shaving (updates chunk) as secondary and adaptive.
* **Updates chunk: total JS vs per‑nav bytes** — *Chosen:* analysis‑gated (§6); HTML
  streaming is the cold/universal default. Validated economics: the chunk amortized after
  ~3 navigations (§17), so it is the right default for **common navigation paths**, not
  just data‑dense apps.
* **Continuity vs simplicity (prototype‑driven)** — *Chosen:* prefer a reconcile tier for
  regions with stateful islands even when bytes are similar. The HTML tier keeps
  *page‑level* continuity (no document reload) but tears down the changed subtree, resetting
  islands/focus inside it (§4, §17).
* **Cold first nav** — *Chosen:* don't block; stream HTML once, lazily warm the chunk;
  prefetch‑on‑intent usually hides it anyway.
* **Granularity** — *Chosen:* per page/route chunk + `_shared`.
* **Initial markers** — *Chosen:* minimal initial, full in streamed HTML.
* **SPA layer weight** — *Chosen:* lazy controller, off the base‑bundle critical path.
* **Statelessness vs bytes** — *Chosen:* tiny client‑declared context (build hash + view
  signature + warm set) drives partial render and per‑region transport with zero memory.

## 14. Correctness & performance invariants

* **No server‑only logic on the client** — optimized chunks contain templates + hole
  assignment + discriminant‑driven reconcile only.
* **SPA layer never blocks initial paint/resume** — lazy, off the critical path.
* **One build hash, checked every navigation** — gates templates, ids, and chunk URLs;
  mismatch ⇒ reload.
* **Self‑describing streamed HTML** — cold/default fragments resume identically to initial
  load.
* **Non‑colliding scope IDs** via the apply‑time offset (§11.4).
* **Lifecycle correctness** — swaps route through `removeAndDestroyBranch` + aborts.
* **Stateless server** — every decision is a pure function of (request context, build
  constants, target render).

## 15. Compiler / runtime surface (sketch)

Config: a `serverUpdates` flag in `packages/compiler/src/config.js`.

Translator:

* **Partial‑render entry**: per page, a server function that renders only the changed
  subtree and streams §10 patches (reusing `State`/`Serializer`/reorder/`ready`), skipping
  regions matched by the view signature.
* **Adaptive `updates` output/entry** (`entry-builder.ts`): emit the logic‑stripped CSR
  render tree **only for routes/components analysis opts in**; control flow reads its
  discriminant from serialized state; per‑route + `_shared` split.
* **Discriminant serialization** for optimized server‑only scopes (navigation/streamed
  payloads only, not initial load).
* **Boundary IDs & markers**: stable per‑boundary addresses (reuse `getResumeRegisterId`);
  minimal initial markers, full markers in streamed HTML.
* **Opt‑in analysis**: extend `serialize-reasons.ts`/`references.ts` to flag high‑repetition
  / high‑navigation regions for the updates chunk, and empty‑vs‑filled holes.

HTML runtime: `renderNavigation(template, input, { viewSignature, warmSet, buildHash })`
→ partial + streamed; state+discriminant for warm/reactive, self‑describing HTML for
default/cold; reload directive on mismatch.

DOM runtime: the lazy navigation controller (§11), incl. prefetch‑on‑intent; `resume.ts`
scope‑offset + parent‑branch extensions; a routine for an `updates` chunk to resume/attach
over existing server‑only DOM. Reuse `_if`/`_for`/`_content_resume`, `ready`,
`createBranch`, destroy/abort, `mount`, asset ensuring — unchanged.

## 16. Examples

**(a) Server‑only `<if>`** (updates‑optimized) — compiled chunk in §6. *Warm,
admin→guest, same name:* `_=>[5,{[branch]:1}]` → `_if` swaps renderer from the chunk.
*Warm, name only:* `_=>[5,{[name]:"Bob"}]` → `_text` in place (~10 bytes). *Cold first
nav (or non‑optimized route):* streamed HTML paints; if optimized, the chunk then goes
live.

**(b) Server‑only `<for>` + reactive island** (a strong updates‑chunk candidate — high
repetition):

```marko
<for|item| of=input.results>                 <!-- server-only query -->
  <li>${item.title} <like-button postId=item.id/></li>   <!-- reactive island -->
</for>
```
Primary bundle: `like-button`. `updates/<route>` chunk: the `<for>` + row template, driven
by **server‑provided keys**. *Warm nav:* server sends new `keys` + changed `title` holes +
each button's state; `_for` keyed‑reconciles (reuse same‑key rows, clone new rows from the
chunk + mount `like-button` from the primary bundle, destroy removed). **Zero HTML.**

**(c) Asset layout**

```
dist/assets/
  page.<hash>.js              # primary: runtime + reactive islands (initial JS unchanged)
  nav-controller.<hash>.js    # lazy SPA controller (not on the critical path)
  updates/
    _shared.<hash>.js         # opted-in server-only components shared across routes
    search.<hash>.js          # /search opted-in server-only renderers, logic stripped
```

## 17. Prototype validation

A dependency-free benchmark in [`prototype/spa-server-updates/`](../../../prototype/spa-server-updates/)
models a storefront (persistent shell + reactive islands + server-only `<for>`/`<if>`)
and measures the tiers across realistic navigations. Headline results (gzip):

* **The mechanism is correct.** The client reconstructs the *exact* target outlet from
  `(discriminant + final hole values)` using only the shared templates — verified
  byte-identical to server SSR. Server-only logic never crosses the wire.
* **State-only navigations ≈ ⅓ the bytes of a full reload** (31–38%), with no HTML —
  and the prototype uses plain JSON, so Marko's tighter format would do better.
* **Partial HTML fragments (tier B) are a weak win on list-heavy pages** (only 10–30%
  smaller; 90% in a re-sort), confirming that partial-render + streaming is mainly a
  *latency* play and the *byte* win comes from the state tier.
* **The DOM-work/UX win is real and byte-independent:** re-sorting a 48-item list reused
  all 48 rows (0 created, 47 moved) — preserving island state, images, focus, scroll —
  where a full reload recreates everything.
* **The adaptive updates-chunk tradeoff holds:** the one-time chunk (~1.9 KB gzip,
  lazy/per-route) amortizes after ~3 navigations.

### 17.1 Refinement surfaced by the prototype — optional list/version hint

The base design's "send all changed-subtree state, equality-skip on the client" is
optimal for *DOM work* but **not for wire bytes** on reuse/reorder-heavy navigations: a
stateless server re-sends every row's holes even when only the order changed (re-sort:
1076 B). Letting the client include a cheap **hint of the keys it currently shows** lets
the server omit holes for reused keys, collapsing the response to **216 B (7.7% of a full
reload)** for ~280 B of extra request. Recommended as an **optional optimization** for
large, stable collections (lists/tables/feeds): the client adds a compact key/version
hint to `X-Marko-View`; the server sends discriminant order + holes only for keys the
client lacks. It stays stateless (the hint is request-carried) and degrades to plain
tier C when absent.

Use it **selectively**: the hint has a request cost (the prototype's 48‑key hint was
~280 B raw, net‑positive only because the response saved more), so encode keys compactly
(id ranges / deltas) and skip it for small collections. Conceptually it extends the
view‑signature spectrum already in §9: a **content hash** per region (cheap, already sent)
detects *unchanged → skip*; adding a **key set** additionally enables *partial reuse /
reorder‑only*. Bound it to large, stable collections so the request stays small.

## 18. Forms, head, history (brief)

* **Server‑first actions**: a `<form>` POST replies with the same patch‑stream; a mutation
  changing a deep server‑only region is a warm state+keys patch (optimized) or a streamed
  HTML splice (default).
* **Head/title**: title in the header frame; route CSS/JS as build‑hash‑stamped idempotent
  asset frames; reuse `assets.ts`.
* **History/scroll/focus**: restore scroll on `popstate`; move focus to the changed region.
