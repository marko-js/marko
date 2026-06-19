# Single‑Page Server‑First Updates (design)

> Status: design / RFC. Opt‑in, compiler‑configured runtime for Marko 6
> (`@marko/runtime-tags`). It turns the existing multi‑page, full‑reload resume
> architecture into a single‑page app that performs **server‑first navigations and
> reloads without reloading the document**, reusing the resume serializer, the
> reactive system, the branch/control‑flow machinery, and the streaming writer
> almost entirely as‑is.

## 1. Goals and the governing principle

1. **Low initial JS.** First paint stays as cheap as today's resume; the SPA layer
   is opt‑in and the new "updates" code is a *separate, lazy* bundle (§4).
2. **Low bytes over the wire per navigation.** Prefer **state + structural
   decisions** over HTML; send **nothing** for unchanged regions.
3. **Incremental JS/HTML.** Reuse loaded runtime/components; per‑route update chunks
   load lazily and cache by build hash; HTML streams only as a cold‑start fallback.
4. **Stateless.** The server keeps no per‑client state; the client carries what's
   needed in the request (build hash, view signature, warm‑chunk set) and the server
   compares against build‑time constants.
5. **Leverage cross‑template analysis** to pick optimization points per section.
6. **Always‑correct fallback** to a full document navigation on any uncertainty.

### Governing principle — never ship server‑only logic

> **The client bundle never contains control‑flow/business logic the compiler
> classified as server‑only.** The client is only ever (a) a *renderer* of compiled
> templates and (b) an *adopter* of server output. It never evaluates a server‑only
> `if` condition or `for` iteration — it only receives the *decision* (which branch /
> which keys) and the *final hole values*, and rebuilds DOM from **compiled templates
> it already has**, not from logic.

The crucial consequence (your insight): the rendering *templates* for server‑only
components **can** be bundled — just not in the primary bundle, and with the *logic*
stripped. Then the server need not re‑send HTML; it sends only the decision + values.

## 2. The machinery we build on (all additive)

| Concern | Today | File(s) |
| --- | --- | --- |
| Serialize scope state + effects | `Serializer.stringifyScopes`, scope‑fill `[id,{props},Δ,{props}]`, effect tokens, `_(id)` refs | `src/html/serializer.ts`, `src/html/writer.ts` |
| Resume from self‑describing HTML | `init` → walk reads embedded markers (`*`,`[`,`]` + tokens); `applyScopes`/`processResumes` fill holes | `src/dom/resume.ts` |
| Render compiled templates | `_content`/`_template` clone cache + `walk` codes attach bindings | `src/dom/renderer.ts`, `src/dom/walker.ts`, `src/dom/template.ts` |
| **Compare‑then‑swap‑or‑update control flow** | `_if` (`newBranch !== scope[branchAccessor]` → swap else holes), `_for` keyed LIS, `_content_resume` pick‑by‑id | `src/dom/control-flow.ts`, `src/dom/dynamic-tag.ts` |
| Reactive updates | signals `(scope,value)=>void`, min‑heap queue, **skip when `value===current`** | `src/dom/signals.ts`, `src/dom/queue.ts` |
| Splice lifecycle | branch `StartNode`/`EndNode`, `createBranch`, `removeAndDestroyBranch` + aborts | `src/dom/control-flow.ts`, `src/dom/scope.ts` |
| Per‑section "ship to browser?" | `serializeReason`/`kStatefulReason`; only stateful control flow ships a DOM signal today | `src/translator/core/if.ts`,`core/for.ts`, `util/serialize-reasons.ts` |
| Code‑split entries | `entry:"page"|"load"`, `init`/`initEmbedded`, `ready(readyId)` | `src/translator/util/entry-builder.ts`, `src/dom/load.ts` |
| Stream + reorder + readiness | `Chunk`/`Boundary`/`State`, `<t>` reorder, `ready` | `src/html/writer.ts` |
| Stable identity across builds | `getTemplateId`, `getResumeRegisterId`, content `Hash` | `babel-utils/tags.js`, `util/signals.ts` |

**Key reuse:** your "check if the renderer is the same, then apply holes, else
replace" is *exactly* what `_if`/`_for`/`_content_resume` already do. A server‑only
control flow becomes a reactive one whose **discriminant is read from serialized
state (the server's decision)** instead of a reactive expression.

## 3. Three tiers of render code

Every node in a page's render tree falls into one tier. The compiler already knows
which (reactive vs server‑only is the existing `kStateful` axis):

| Tier | Structure decided by | Render code lives in | Per‑nav wire cost |
| --- | --- | --- | --- |
| **Reactive** | client signals | **primary** bundle | state only |
| **Server‑only (warm)** | **server** → serialized discriminant | **per‑route `updates` chunk** (logic stripped) | **state + discriminant — no HTML** |
| **Server‑only (cold)** | server | not yet loaded | HTML once (then becomes warm) |
| Static / invariant | — | — (just DOM) | 0 |

The reactive and server‑only‑warm tiers share **one apply path**: feed new
serialized scope state into the live tree; every control‑flow boundary reconciles via
`_if`/`_for`/`_content_resume`. The only difference is the *input source* — a live
signal vs the serialized server decision. HTML over the wire is reduced to the
cold‑start fallback (§6).

## 4. The `updates` compilation target (the new, lazy bundle)

Alongside today's `html` and `dom` outputs, the compiler produces a third output for
an **`updates` entry**, code‑split **per page/route** (shared server‑only components
factored into a common `_shared` chunk), aligned with the existing `page`/`load`
entry splitting in `entry-builder.ts`.

An `updates` chunk is the **CSR render tree for the route's server‑only components,
with server logic removed**. Precisely:

* **Kept:** template HTML strings + walk codes; hole *assignment* from final values
  (`_text`/`_attr`/…); control‑flow reconciliation (`_if`/`_for`/`_content_resume`)
  **driven by a serialized discriminant** rather than a condition.
* **Stripped (tree‑shaken):** conditions, derivations, lifecycle/effects, and
  server‑only imports/data access. A `${formatDate(x)}` whose `formatDate` is
  server‑only ships its **final string** as a hole value; even `$!{rawHtml}` ships as
  a string hole. The chunk therefore pulls in **no** server‑only code.

So a server‑only `<if>` compiles in the `updates` chunk to nearly the same shape as a
reactive one:

```js
// updates/profile.<hash>.js  — logic stripped: no isAdmin check
export const profile = _template("p", /* … */ (scope) =>
  _if("a",
    ["<h1>Welcome </h1>", WALKS_A, (s) => _text(s, /*name hole*/)],  // branch 0
    ["<p>Hello </p>",     WALKS_B, (s) => _text(s, /*name hole*/)],  // branch 1
  )(scope, scope[BRANCH_ACCESSOR]),  // ← discriminant from serialized state
);
```

This is the answer to "the HTML always exists in client assets": the **templates are
cached client‑side** in the updates chunk; the server transmits only decisions +
values. It costs more total JS (lazy, cached, never loaded for one‑page visits) in
exchange for near‑zero per‑navigation bytes (§11).

## 5. Serializing the server's decision

Server‑only scopes are serialized (in streamed HTML, §6) with a **discriminant** —
your "renderer id" — generalized per control‑flow:

* `<if>` → **branch index**
* `<for>` → **item keys** (+ optional per‑item renderer id) → reuse keyed LIS reconcile
* dynamic `<${tag}>` → **template id** → reuse `_content_resume`'s pick‑by‑id

…plus the **final hole values** and child‑scope references. On a warm navigation the
client compares the new discriminant to the live scope's current one at each boundary:
**same ⇒ update holes in place** (changed values only, equality‑skipped); **different
⇒ `removeAndDestroyBranch(old)` + instantiate the new renderer from the updates chunk
+ fill holes**. Identical to `_if`/`_for` today, but the discriminant is data.

## 6. Lifecycle: cold first navigation → warm thereafter

Chosen strategy: **lazy‑load per‑route update chunks on first navigation, but never
block — stream HTML once for instant paint, go state‑only once warm.**

**Initial load** (cost ≈ today). SSR HTML; reactive islands resumed via the primary
bundle; server‑only regions are static resumed DOM. No `updates` chunk loaded; no
server‑only scope state serialized (keeps initial bytes lean). Only minimal boundary
markers are emitted initially — enough to address the route outlet(s) and persistent
(layout‑level) regions (§10).

**First navigation to route R (R's chunk cold):**

1. Controller fetches R with §7 headers (R is not in the warm‑chunk set) **and**
   kicks off a lazy import of `updates/R.<hash>.js`.
2. Server streams R's changed subtree as **self‑describing HTML** (embedded markers +
   serialized scopes incl. discriminants/holes) — instant paint, no waiting. Reactive
   islands inside resume via the primary bundle immediately.
3. When `updates/R.<hash>.js` finishes loading, it **resumes the just‑streamed
   server‑only DOM** (walk markers + the serialized discriminants/holes already in
   that HTML) → those regions become *live* in the updates tier. The streamed HTML
   thus does double duty: paint now + the data the chunk needs to go live.

**Subsequent navigation to R (warm):** the client declares R warm; the server sends
**state + discriminants only**; the live updates tree reconciles (swap renderers from
the chunk / update holes) and reactive islands take new state. **No HTML.**

Navigating R→S (S cold) repeats the cold path for S's subtree; shared layout regions
covered by a warm `_shared` chunk go state‑only, others are hash‑skipped (§7).

## 7. The stateless request/response contract

### Request

```
GET /target/url
X-Marko-Nav: 1
X-Marko-Build: <buildHash>      # client's loaded build
X-Marko-View: <viewSignature>   # mounted layout templateIds + content hashes of
                                #   persistent server-only regions
X-Marko-Warm: <routeChunkSet>   # update-chunk route ids the client has cached
```

`X-Marko-Warm` is what lets the **stateless** server choose, per region, between
state‑only (region's chunk is warm) and streamed HTML (cold) — the client declares
its warm set; the server never remembers it. It is bounded (routes visited this
build) and compact (route ids / a small signature). This is the request's "clients
and servers can send data to each other to facilitate optimal performance."

### Response

* **Reload directive** (`X-Marko-Reload: 1`): build hash mismatch, incompatible view
  signature, or route opt‑out → client `location.assign(url)`.
* **Navigation update**: a framed, streamable set of per‑boundary patches (§8).

## 8. Wire format — per‑boundary patches

Same serialized shapes the streaming serializer already emits; newline‑framed for
out‑of‑order/streamed parts.

```
{ "v":"<buildHash>", "url":"/target", "title":"…" }      # header (first)

# WARM server-only region & all reactive scopes: state + discriminant only — NO HTML
_=>[5,{ [branch]:1, [name]:"Bob" }]                       # discriminant + holes
"regId 7"                                                 # reactive effects

# COLD server-only region: self-describing HTML once (carries its own markers + scopes)
{ "splice":"<boundaryId>", "html":"<…markers…>" }

{ "ready":"<readyId>", "chunk":"/assets/updates/route.<hash>.js" }   # lazy gate
{ "assets":["/assets/route.<hash>.css"] }                            # head deltas
```

State/discriminant frames feed the **existing** `applyScopes`/reconcile path; cold
HTML is resumed by the **existing** marker walker. No second deserializer.

## 9. Client apply path (the new runtime code, opt‑in)

A small module imported only in SPA mode — the bounded initial‑JS cost.

1. **Intercept** `<a>` clicks / `popstate`; manage history/scroll/focus.
2. **Fetch** with §7 headers; lazily `import()` the target route's updates chunk if
   cold (non‑blocking).
3. **Guard**: `X-Marko-Reload` or `header.v !== __MARKO_BUILD__` → `location.assign`.
4. **Rebase scope IDs**: payload scopes numbered locally → allocate a fresh range in
   the client's `1e6+` space, resolve `i → base + i` (a tiny offset in
   `serializeContext`/`applyScopes`); splice parents passed as real ids.
5. **Apply in tree order:**
   * **state/discriminant** → `applyScopes` + reconcile; reactive signals and
     warm server‑only `_if`/`_for` both run (§3).
   * **cold HTML splice** → `removeAndDestroyBranch(old)` + insert self‑describing
     HTML + resume; when the route chunk arrives it attaches/goes live (§6.3).
6. **Finalize**: ensure `assets`, set `title`, update the route signal so reactive
   layout regions react locally.
7. **Fallback** on any thrown error: `location.assign(url)`.

Estimated incremental client cost ≈ **~1–2 KB** min+gz (interception, fetch, frame
parse, offset rebase); everything heavy is reused. The `updates` chunks are extra JS
but lazy, cached, and never loaded for non‑navigating visitors.

## 10. Markers: self‑describing updates, lean initial HTML

* **Streamed update HTML always carries full markers** (it must be resumable by the
  client/updates chunk) — your "all control flow serializes markers" applies here.
* **Initial document HTML keeps markers minimal** — only at route‑outlet and
  persistent‑region granularity (enough to splice the first cold update and to
  hash‑skip shared regions). Once a route's chunk is warm, the live updates tree holds
  the branch‑scope/node references directly, so deep DOM markers are unnecessary for
  the state‑only path. This preserves "low initial bytes."

## 11. Tradeoffs and chosen middle grounds

* **Total JS vs per‑nav bytes** — the `updates` tier duplicates template strings as
  cached JS to eliminate per‑navigation HTML. *Chosen:* worth it; chunks are lazy +
  per‑route + build‑hash‑cached, and cost nothing for one‑page visitors.
* **Cold first nav** — *Chosen (your answers):* don't block; **stream HTML once** for
  paint while the route chunk loads **lazily**, then state‑only when warm.
* **Granularity** — *Chosen:* **per page/route** chunk + a shared chunk; aligns with
  existing entry splitting; few requests, good incrementality.
* **Initial markers vs addressability** — *Chosen:* minimal initial markers
  (outlet/persistent), full markers only in streamed HTML (§10).
* **Statelessness vs minimal bytes** — *Chosen:* tiny client‑declared context (build
  hash + view signature + warm set) drives near‑optimal payloads with zero memory.
* **Reactive vs server‑only paths** — *Chosen:* one unified warm apply path; HTML is
  the cold fallback only.

## 12. Correctness invariants

* **No server‑only logic on the client** — the updates chunk contains templates +
  hole assignment + discriminant‑driven reconcile only; conditions/derivations/effects
  are tree‑shaken. Structural decisions always come from the server.
* **One build hash, checked every navigation** — gates templates, registry/discriminant
  ids, and the updates chunks (build‑hash in the chunk URL); mismatch ⇒ reload.
* **Self‑describing streamed HTML** — cold fragments resume identically to initial load.
* **Non‑colliding scope IDs** via the apply‑time offset (§9.4).
* **Lifecycle correctness** — swaps route through `removeAndDestroyBranch` + aborts.
* **Stateless server** — every decision is a pure function of (request context, build
  constants, target render).

## 13. Compiler / runtime surface (sketch)

Config: a `serverUpdates` flag in `packages/compiler/src/config.js`.

Translator:

* **New `updates` output/entry** (`entry-builder.ts`): emit the CSR render tree for
  server‑only components with logic stripped; control flow reads its discriminant from
  serialized state; code‑split per route + `_shared`.
* **Discriminant serialization**: extend the HTML output to serialize server‑only
  scopes with branch index / keys / template id + final hole values (only in
  navigation/streamed payloads, not in the lean initial load).
* **Boundary IDs & markers**: stable per‑boundary addresses (reuse
  `getResumeRegisterId`); minimal initial markers, full markers in streamed HTML.
* **Hole/region classification**: extend `serialize-reasons.ts`/`references.ts` for
  empty‑vs‑filled holes and navigation‑varying vs invariant regions.

HTML runtime: `renderNavigation(template, input, { viewSignature, warmSet,
buildHash })` → streams state+discriminant for warm/reactive regions and
self‑describing HTML for cold regions; reload directive on mismatch.

DOM runtime: the navigation controller (§9); `resume.ts` scope‑offset + parent‑branch
extensions; a routine for an `updates` chunk to **resume/attach** over existing
server‑only DOM. Reuse `_if`/`_for`/`_content_resume`, `ready`, `createBranch`,
destroy/abort, `mount`, asset ensuring — unchanged.

## 14. Examples

**(a) Server‑only `<if>`** — see the compiled `updates/profile` chunk in §4.
*Warm nav, admin→guest, same name:* `_=>[5,{[branch]:1}]` → client `_if` swaps to the
guest renderer from the chunk. *Warm nav, name only:* `_=>[5,{[name]:"Bob"}]` →
`_text` updates in place (~10 bytes). *No HTML either way.* *Cold first nav:* the §6
HTML stream paints, the chunk loads and goes live.

**(b) Server‑only `<for>` with a reactive island**

```marko
<for|item| of=input.results>                 <!-- list is a server-only query -->
  <li>${item.title} <like-button postId=item.id/></li>   <!-- like-button: reactive -->
</for>
```
Primary bundle: `like-button`. `updates/<route>` chunk: the `<for>` + row template,
iteration driven by **server‑provided keys**. *Warm nav:* server sends new `keys` +
changed `title` holes + each `like-button`'s state. Client `_for` keyed‑reconciles —
same‑key rows reused (update title hole), new rows cloned from the chunk with
`like-button` mounted from the primary bundle, removed rows destroyed. **Zero HTML;**
server‑only structure from the cached chunk, reactive behavior from state.

**(c) Asset layout**

```
dist/assets/
  page.<hash>.js              # primary: runtime + reactive islands (initial JS unchanged)
  updates/
    _shared.<hash>.js         # server-only components shared across routes
    search.<hash>.js          # /search server-only renderers, logic stripped
    profile.<hash>.js
```

## 15. Forms, head, history (brief)

* **Server‑first actions**: a `<form>` POST replies with the same patch‑stream; a
  mutation changing a deep server‑only `<for>` is a warm state+keys patch (or a cold
  HTML splice if its chunk isn't warm).
* **Head/title**: title in the header frame; route CSS/JS as build‑hash‑stamped
  idempotent asset frames; reuse `assets.ts`.
* **History/scroll/focus**: restore scroll on `popstate`; move focus to the changed
  region for a11y.
