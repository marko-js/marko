# Single-page server-first updates

Status: design proposal (no implementation yet)

A compiler-configured, opt-in runtime that makes reloads and navigations work
without reloading the page: the client fetches the target URL, the server
re-renders it statelessly, and instead of a full HTML document it streams a
minimal _update payload_ that the client applies to the already-resumed page.
Client state is preserved, server-only code stays on the server, and the
existing resume machinery, serializer, and reactive graph do almost all of the
work.

Goals, in priority order:

1. **Low initial JS** — the initial page must not load meaningfully more
   JavaScript than today. A small initial _HTML_ regression (resume markers) is
   acceptable; new client code loads lazily.
2. **Low bytes over the wire per navigation** — send request-derived values and
   the occasional rendered fragment, never static HTML, never data the client
   already owns.
3. **Small incremental bundles** — per-template update chunks that are shared
   and cached across navigations.
4. **Statelessness** — the server holds no per-client session. Clients may send
   hints (build hash, previous URL, structural fingerprints) that the server
   uses to prune payloads, but every response is derivable from the request
   alone.
5. **Always-correct fallback** — build hash mismatch, non-capable route, error,
   or cross-origin redirect falls back to a normal full page load.

---

## The core model

The single most important design decision: **a navigation is modeled as "the
root template received new `input` and a new `$global`"** — the exact semantics
that already exist for a parent component re-providing input to a child on the
client.

This framing buys a lot:

- **State preservation is already defined.** `_let` only writes a slot during
  render when the scope was created in the current pass
  (`dom/signals.ts:37-49`, the `Gen === runId` guard). A parent re-providing
  input to an existing scope does not clobber `<let>` values today; an update
  applied on navigation inherits exactly those semantics. No new rules to
  invent, document, or test from scratch.
- **The update application path is the existing signal graph.** The DOM output
  already compiles a complete "apply new input" chain per template — e.g. in
  `__tests__/fixtures/for-keyed-selector-input`, the compiled
  `$input → $input_rows → _for_of` chain performs a keyed loop reconcile, and
  `$input_selected → _for_selector → _or` re-runs the input∩state intersection.
  Applying a server update means calling these functions with server-supplied
  values while `rendering` is falsy; `_let`/`_const` dirty-check, `_or`
  (`dom/signals.ts:96-119`) queues the intersection, and the render heap
  (`dom/queue.ts:29-70`) batches everything parent-before-child. Fine-grained
  DOM updates fall out for free.
- **Dirty-checking bounds DOM churn.** Even when the wire payload is
  conservative (more values than strictly changed), unchanged values no-op at
  the signal layer. Wire-size optimization and DOM-work optimization decouple.

What does _not_ exist today, and is what this design adds:

1. Server-only dynamic holes (param-only text/attrs, in serialize-reason terms
   `isReasonDynamic` — `translator/util/serialize-reasons.ts:150-154`) have no
   client signal, no resume marker, and often no resumable scope at all
   (`_content` instead of `_content_resume`,
   `translator/util/sections.ts:325-350`). They are invisible to the client.
2. There is no way to address an existing client render from a _second_ server
   render: scope ids are per-render sequential, and the serializer's identity
   table (`html/serializer.ts:291-303`) lives for one render.
3. There is no client navigation runtime, no patch content negotiation, and no
   build identity at runtime (`@marko/vite` even sets
   `writeVersionComment: false`).
4. `$global` reads compile to a plain member access
   (`translator/visitors/referenced-identifier.ts:53-65`) — non-reactive, which
   breaks the model for URL/params-derived rendering (`@marko/run` exposes both
   via `$global`).

Each of these gets a section below.

---

## Update classification (compile time)

The analyze phase already computes everything needed to classify every dynamic
hole and every section. Per binding, `Sources`
(`translator/util/references.ts:88-91`) distinguishes `state` (client-owned)
from `param` (request-derived). Per section and per prop, serialize reasons
record _why_ something serializes. The update system adds one classification
pass on top (no new analysis primitives):

| Class               | Criteria                                                                                                                                                                                                               | Initial page cost                               | Navigation behavior                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| **static**          | no referenced bindings                                                                                                                                                                                                 | none (in the template string)                   | untouched                                                                      |
| **client**          | `Sources.state` only                                                                                                                                                                                                   | unchanged from today                            | untouched — client owns it                                                     |
| **value-update**    | `param` in sources; values (computed server-side) are serializable and the enclosing structure can be paired                                                                                                           | resume marker + spine serialization (no values) | server sends slot/hole values; placement signals + existing signals apply them |
| **fragment-update** | structure-driving values cannot serialize (e.g. an unkeyed collection of non-serializable items), interop boundaries (class components), a size-heuristic beyond which HTML beats values + tables, or explicit opt-out | branch markers (mostly already present)         | server streams rendered HTML + nested resume data; client swaps the branch     |

Notes on the value/fragment boundary:

- Mixed expressions (input ∩ state) are already serialized and already have an
  `_or` intersection client-side — they are value-update by construction, with
  **zero** new initial cost. This is the case the original proposal identified;
  it needs only the pairing + trigger mechanism, not new codegen.
- Derived values pose a tradeoff: ship the derivation code once (cached JS,
  smaller per-navigation wire) vs. serialize the derived value every
  navigation (zero code, more wire). The default is the latter — the persisted
  entry is **placement-only** (see the compiler section): the server already
  computed everything during the update render, values arrive computed, and
  derivation code (which may reference server-only imports) never ships. The
  serializer's string dedup and back-references keep repeated values cheap.
  Shipping a hot, pure derivation instead is an available optimization, not
  the default.
- Fragment-update granularity destroys nested client state when it swaps. The
  compiler knows, per section, whether stateful bindings live under a
  fragment-class section — this should surface as a diagnostic ("this `<let>`
  will reset on navigation because <reason>"), making the tradeoff visible to
  app authors instead of silent.
- Cross-template analysis already flows child section metadata into parents
  (`loadFileForTag` usage in `visitors/tag/custom-tag.ts:79-101`, content-shape
  reads in `sections.ts:303-317`, `downstreamBinding` propagation). The same
  channel carries the update class: a parent avoids markers around a child that
  is fully static, and a fragment-class child makes the enclosing hole
  fragment-class without widening it further than necessary.

---

## The wire protocol

### Request

Navigation issues a same-origin `fetch` of the target URL:

```
GET /products/42
Accept: text/marko-patch, text/html
X-Marko-Update: <build-hash> <render-id>
X-Marko-From: /products/7        (optional hint, tier 2)
```

Cookies/auth flow as normal — an update response is subject to exactly the
same request-time logic as a page render (stateless requirement).

### Response

A capable server responds `Content-Type: text/marko-patch` with a **framed
stream**. Each frame is one of:

- `meta` — build hash, resolved URL (post-redirect), status, document title
  handling. Always first. On build-hash mismatch the server instead serves
  normal HTML and the client falls back.
- `assets` — asset ids for the target route (the same ids
  `withPageAssets`/`linkAssets` flush today, `html/assets.ts:113-137`). The
  client resolves them against the client-side manifest: CSS to add, update
  chunks and hydrate entries to import.
- `resume` — a JS-source segment in the **exact existing inline-script resume
  format** (`M._.r.push(fill, "registryId scopeId …")`), executed by injecting
  a nonce-carrying `<script>` element. Contains scope fills (values) and effect
  strings (which registered update signals to run against which scopes).
- `html` — a rendered fragment plus its target address, the fetch-stream
  analog of today's out-of-order `<t hidden M=id>` reorder chunks
  (`html/writer.ts:1385-1479`). Nested resume data for the fragment arrives as
  ordinary `resume` frames, exactly like `<await>` content does today.
- `end` — terminal frame; anything else (connection drop, parse error) aborts
  into fallback.

Framing is length-prefixed (script payloads can contain any bytes), produced
naturally by the writer since `Chunk` already separates `html`, `scripts`, and
`effects` (`html/writer.ts:1112-1247`) — no server-side parsing, just a
different flush target.

Why JS-source frames instead of a JSON format: the serializer's full power
(cycles, cross-flush references, registered ids, `Date`/`Map`/streams/promises,
XSS-safe quoting — `html/serializer.ts`) is already battle-tested and its
output _is_ JS source. A JSON mode would be a second serializer plus a client
interpreter, all new surface. Script-element injection reuses the page's CSP
posture (inline scripts already must be allowed for resume; the nonce is
readable via the `script.nonce` IDL attribute and copied onto injected
scripts). No `eval`/`new Function` needed.

Streaming semantics mirror SSR: async boundaries (`<await>`, lazy content)
settle into later frames. During a navigation the UI keeps showing **current
values until their replacement arrives** (stale-while-streaming) rather than
flashing placeholders — placeholder HTML only appears inside swapped-in
fragments, where there is no previous content to keep.

### Scope pairing (the identity problem)

The update render assigns fresh, patch-local scope ids (its own counter). The
client cannot resolve those against its live tree by number, and a stateless
server cannot know the client's numbering. (Nor can pairing be left implicit
in id _order_: `_scope_id()` increments a shared counter at render-execution
time (`html/writer.ts:249-251`), and `<await>` bodies execute in
promise-resolution order, so id assignment order is not structurally
deterministic under async.)

The resolution: **pairing knowledge is compiled, not transmitted.** A patch
payload in the existing fill format is already a self-describing scope
_tree_ — an owner's fill carries its structural props (`BranchScopes` arrays
of patch-scope references, `ConditionalRenderer` branch indices, loop keys,
owner refs), as the `for-keyed-selector-input` fixture payload shows:

```js
_ => [1, { "BranchScopes:#ul/1": [_(2), _(3), _(4)], input_selected: 2, … },
      { row_id: 1, _: _(1) }, …]
```

Applying an update is therefore a **top-down tree merge** of the patch scope
tree onto the live scope tree, directed by compiled per-section tables in each
template's persisted entry (see the compiler section):

- The root pairs by convention (`meta` frame / fixed hop from the render
  root). For each paired `(patchScope, liveScope)`, the section's compiled
  table classifies every prop: **slot** (write onto the live scope + queue the
  registered downstream signals — intersections, closures), **placement**
  (invoke a placement signal against the live scope's bound node), or
  **structural** (pair child scopes and recurse with the child section's
  table — crossing into child templates through the persisted entry's imports,
  or the registry for dynamic tags).
- Child pairing identity: loops by the `by` key (`AccessorProp.LoopKey`) — the
  same key the client reconciler uses (`dom/control-flow.ts:811-828`);
  conditionals by branch index (`ConditionalRenderer` prefix); custom tags by
  child-scope accessor; dynamic tags by registered renderer id.
- A patch child with no live counterpart is fresh (new loop item / flipped
  branch): value-class sections are created client-side through the existing
  branch machinery (template clone + walk) and then merged into; fragment-class
  sections arrive as `html` frames. A live child with no patch counterpart is
  destroyed (existing branch-destroy path). Unmatched-by-template pairs swap.
- A per-navigation `patchId → Scope` map (patch ids resolve to _live_ scopes
  once paired, or freshly allocated ids in the `1e6+` space, `dom/scope.ts:6`)
  backs the serialize context, so `_(id)` scope references inside values and
  `"registryId scopeId"` effect strings resolve unchanged. Later frames of the
  same navigation reuse the map, so cross-frame references keep working.
- The **server never pairs into client-state-driven structure.** State-sourced
  branches, and the state slots themselves, are excluded from update
  serialization (see below). Server-computed values _read inside_ client-driven
  branches live on the owning scope above the branch and propagate through the
  existing closure fan-out (`_if_closure`/`_for_closure`/`_closure`,
  `dom/signals.ts:121-299`) — so the merge only ever descends structure the
  server's own render produced, which the client spine mirrors.

This keeps the serializer, the fill format, and the flush/gate machinery
entirely untouched — the update payload _is_ a resume payload; only the
consumer differs. The corresponding requirement on the **initial** render is
the **spine**: every section on a path from the root to an updatable hole must
serialize (address-only — owner links, branch bookkeeping, keys, node
bindings; no values), so the merge has live scopes to land on. Subtrees with
no updatable content are compile-time absent from the tables and stay fully
elided — "serialize everything" is not required.

In `MARKO_DEBUG` builds, update renders additionally serialize each scope's
template/section id so the merge can assert pairing correctness instead of
silently mis-merging.

Alternatives rejected: server-emitted address tuples per scope (per-navigation
wire cost for information that is static per build — compiled tables are paid
once and cached); client sends its scope-id table so the server emits real ids
(large requests, cache-hostile, turns a hint into a protocol requirement);
implicit id-order pairing (unsound under async, above).

### What gets serialized in an update render

The serialize-reason guards are already request-time-evaluable
(`_serialize_if`/`_serialize_guard` + writer state,
`html/writer.ts:263-285`; guard construction in
`translator/util/serialize-guard.ts`). Update mode sets writer state so:

- **state-only-reasoned props are dropped** — the server's `<let>` values are
  defaults, not truth; sending them would clobber client state;
- **param-reasoned props are kept** — this is the payload;
- mixed-reason props are kept (client dirty-check makes over-sending safe);
- **computed values for pure server-only holes are written as scope props** —
  expressions that today inline straight into the HTML string additionally
  write their computed value under the hole's accessor, guarded to update mode
  (in the initial render those holes cost only a marker, never a value);
- static HTML output is suppressed entirely except inside fragment capture.

The update render is a full, normal render of the target page (`render()` →
`State`/`Chunk`/`Boundary` as today) with a mode flag on the writer. Server CPU
is roughly one page render — unavoidable for stateless correctness and the
same cost as the full reload it replaces. Suppressed regions still _compute_
their HTML in v1 (wasted string building); a later optimization can gate
pure-static writes in the translator at the cost of server code size — deferred
until profiling justifies it.

### Payload tiers (statelessness vs. bytes)

- **Tier 0 — full reload.** Always available; triggered by hash mismatch,
  non-patch response, stream error, cross-origin redirect.
- **Tier 1 — stateless update (default).** No client hints beyond build hash.
  Server sends all param-derived values for matched sections + fragments for
  all fragment-class server-driven structure it rendered. Fully cacheable per
  URL (`Vary: Accept, X-Marko-Update` only) — CDN-friendly, which matters more
  than minimal bytes for hot routes.
- **Tier 2 — hint-pruned update.** Client adds `X-Marko-From` (previous URL),
  and optionally compact structural fingerprints (current branch indices /
  loop-key digests for server-driven control flow, enumerable generically from
  the live scope tree — no per-template code). The server prunes: sections of
  shared layouts whose param sources are provably identical between the two
  URLs (route params equal — the router can prove this cheaply from compiler
  metadata without rendering the old page), fragments whose branch identity
  matches the fingerprint. Pruning trades shared-cache granularity for bytes —
  appropriate for personalized/`private` responses; per-route policy, default
  on only when the response is already uncacheable.

Tier 2 is where "template structure and cross-template analysis inform
optimization" pays off hardest: the compiler emits, per template, which param
sources each section's serialized output depends on; the router intersects that
with "which inputs changed between these two URLs" and skips whole subtrees at
serialization time. No double render, no server state.

---

## Compiler changes

### The flag

A translator option (working name `serverUpdates: true`), configured by the
bundler plugin like `optimize`/`output` — it must be consistent across every
template in a build (it changes resume-marker emission), and consistent between
server and client builds. `@marko/vite` already funnels all translator config
through one `baseConfig` and gates features on
`compiler.getRuntimeVersion(translator)` — same pattern here.

### HTML output additions (initial page cost)

For value-update holes that today serialize nothing:

- Emit the resume marker comment (`<!--M_*n accessor-->`) so the node binds
  into a scope at resume — node binding is generic (`dom/resume.ts:388-410`),
  needing **no per-template JS** on the initial load.
- Emit the owning scope (and its owner chain) with _addresses but not values_ —
  the DOM already displays the value; the update supplies the next one. This is
  a new "address-only" serialization treatment alongside the existing
  value-guarded one, and it is what keeps the initial resume payload from
  growing beyond bookkeeping.
- Sections that were plain `_content` become `_content_resume` when they
  contain any updatable hole.

This is the accepted initial-HTML regression: roughly one comment (~12–20
bytes pre-gzip) per param-only dynamic hole plus scope bookkeeping, only under
the flag, only where holes exist, further trimmed by cross-template analysis
(no markers around fully-static children; no value-level markers inside
fragment-class regions, since the whole region swaps). Attribute holes on
elements that already have a bound node need no new marker at all.

Initial JS is untouched: no new code runs at resume time beyond binding a few
more visits.

### The parallel update entry (incremental JS)

This is the "new parallel compiler entry" idea, sharpened by one principle:
**the persisted entry never executes server compute — it only places values
and triggers existing signals.** The server has already computed everything
during its update render; the client's job is placement. Per template, the
persisted entry — a parallel virtual module, `template.marko?update`, built as
its own code-split chunk — contains:

- **Per-section merge tables**: which props are slots, placement targets, or
  structural (the compiled walk that directs the tree merge in the pairing
  section). This is the scope-tree analog of the `walks` bytecode — structure
  knowledge encoded at compile time so it never rides the wire.
- **Placement signals** for pure server-only holes — the same shape the DOM
  output already generates (`(scope, value) => _text(scope[node], value)`),
  emitted here instead of the main module so initial bundles never see them.
- **References to existing signals** for everything with a client-side life:
  intersections (`_or`), closure fan-outs, loop reconcilers — imported from
  the main DOM module where they already exist (an `_or` used by the
  interactive chain stays in main; the persisted entry references it). Slot
  writes trigger these; no code is duplicated.
- **Registrations** with the existing registry scheme:
  `_resume(getResumeRegisterId(section, …, "update"), …)` — the same
  deterministic ids the serializer emits (`translator/util/signals.ts:904-930`),
  so update frames resolve through `registeredValues` with zero new lookup
  machinery — plus static imports of child templates' persisted entries
  (registry lookups at dynamic-tag boundaries), preserving per-template
  splitting across the composition graph.

Placement-only resolves the derivation tradeoff from the classification
section by default: derived values arrive computed (the server already did the
work), so derivation code — which may reference server-only imports and can be
arbitrarily heavy — never ships. The serializer's string dedup and value
back-references keep repeated derived values cheap on the wire. Where a
derivation is hot, pure, and its inputs are much smaller than its outputs, the
compiler may still elect to ship it into the persisted entry as an
optimization — but that is the exception, not the default.

For templates with no interactive chain at all (never loaded client-side
today), the persisted entry is the _only_ client artifact — loaded only when a
navigation actually needs it. Persisted entries are ordinary hashed,
immutable chunks: layouts and shared components resolve to the **same chunk
across routes**, so incremental JS across a session converges to the union of
visited templates, each fetched once. Per-route `modulepreload` lists in the
manifest hide latency.

The compiler already has the complete reactivity graph (that is what
`finalizeReferences` + the signal writer compute); the merge tables and
placement partition are a new consumer of existing analysis, not new analysis.
Codegen-wise this is a new `entry`/virtual-module kind alongside
`hydrate`/`load` (`translator/visitors/program/index.ts:106-226` is the
existing dispatch point), not a third full `output` — the HTML and DOM outputs
keep their roles, which avoids duplicating the per-tag translate layer.

### `$global` reads become updatable

Under the flag, member reads of `$global` **on serialized-global keys** are
promoted to param-like bindings on the reading section: they join the reactive
graph, get accessors, get placement/trigger entries in the persisted entry,
and their sections join the serialized spine. Non-serialized global reads stay
non-reactive (their values
cannot cross the wire anyway — unchanged behavior, documented).

This is required, not optional, for `@marko/run`, where `url`/`params` arrive
via `$global` (`serializedGlobals: { params: true, url: true }` is already the
default there). It also fixes the conceptual model: a serialized global _is_
request input. Updates deliver new globals as scope 0 fills — the existing
convention (`html/writer.ts:1546-1594`, `_(0)` client-side) — merged onto the
live `$global` object so identity-holding scopes observe new values.

Cost: only reads of serialized globals gain signals; apps not using the flag
are unaffected.

---

## Client runtime

A new lazy module (working name `@marko/runtime-tags/dom/update`, wrapped by
the router for link interception) containing:

1. **Stream applier** — frame parser (length-prefixed, `TextDecoder`), script
   injection for `resume` frames, and the merge driver: pairs the patch scope
   tree onto the live tree using the persisted entries' compiled tables, backed
   by a patch-aware variant of `serializeContext` (`dom/resume.ts:173-181`)
   that resolves patch-local ids through the per-navigation map. Fills and
   effect strings are otherwise consumed by the existing machinery; renders
   queue through the normal heap and flush in batches per frame (no tearing
   within a frame).
2. **Fragment applier** — the one genuinely new runtime primitive:
   `resumeFragment(html, targetAddress)`. Structurally it is the native
   lazy-load lifecycle with a different fulfillment source: `_load_template` /
   `insertLoaded` (`dom/load.ts:33-144`) already model a branch that exists
   before its content does — pending branch + await counter, values queued via
   `_load_signal` until the content arrives, then insert. A **stream-fulfilled
   template handle** implements the same `Renderer` surface, but fulfillment
   _adopts_ the server-rendered fragment (parse via `parseHTML`
   (`dom/parse-html.ts`), bind its resume markers with fragment-scoped visit
   processing) instead of cloning a local template string. The final swap goes
   through the existing branch machinery (`setConditionalRenderer` /
   `insertBranchBefore` + branch destroy, `dom/control-flow.ts:688-738`), and
   `<try placeholder>` composes for slow-navigation loading UI at the swap
   point. The out-of-order reorder runtime and `initEmbedded`
   (`dom/resume.ts:81-98`) are the other existing precedents this unifies
   behind a fetch-driven entry point.
3. **Loader** — resolves `assets` frames against the client manifest;
   `import()`s update chunks and hydrate entries; defers dependent `resume`
   frames through the existing ready-channel gating (`render.b`,
   `ready(readyId)`, deps markers) rather than a new synchronization scheme.
4. **Navigation shell** — link/`popstate` interception, `history.pushState`,
   scroll restoration, focus management, optional
   `document.startViewTransition` wrapping, hover/viewport prefetch (updates
   are stateless GETs — prefetching is safe and cheap), and the fallback path
   (`location.assign` on any protocol failure).

None of this loads on initial render. Estimated cost when it does load:
low-single-digit kB min+gzip for 1–3, with 4 living in the router package.

---

## @marko/run integration

### The shell template

Today's codegen nests layouts statically per route (`renderRouteTemplate`), so
two routes sharing every layout still produce different root templates — the
worst case for matching. Worse, static custom tags compile to inlined setup
with **no runtime-swappable identity**: only dynamic tags and `<if>` branches
have a branch the runtime can replace (`ConditionalRenderer` +
`setConditionalRenderer`). So wherever two routes may diverge, the composition
point must be dynamic. That motivates a shared shell that composes the chain
dynamically:

```marko
// conceptually
<${input.chain[0]} ...input.inputs[0]>
  <shell-rest chain=input.chain.slice(1) inputs=…/>
</>
```

Navigation becomes, literally, an input update to the shell:

- Same layout at position N → dynamic-tag renderer matches → value-update its
  subtree (existing `_dynamic_tag` semantics).
- Different page/layout → renderer differs → fragment swap at exactly the
  divergence point, server-rendered (the page's new subtree streams as `html`
  frames — the client never needs page-render code).

The routing problem reduces to dynamic-tag semantics the runtime already has.
Cost: the shell itself pays dynamic-tag overhead (branch markers per chain
level, slightly less static optimization _in the shell only_); layouts and
pages internally keep full static optimization.

### Cross-route code splitting and the lazy-load machinery

A pure "one shell entry for the whole app" would break today's per-route
splitting, so the shell is **not** the entry. Each route keeps a thin generated
wrapper template that statically imports its layouts + page and renders the
shared shell with the chain as input. This preserves, unchanged:

- per-route **server** entries (each route's server chunk imports only its
  templates);
- per-route **hydrate** entries and the `linkAssets` keying that hangs off the
  server-entry template — the wrapper still plays that role;
- bundler-level chunk sharing: layouts used by many routes land in shared
  client chunks automatically, so navigating to a new route fetches only that
  route's hydrate chunk (plus not-yet-cached update chunks), with shared-layout
  code already warm.

Wrappers differ per route only in import specifiers — the generated code is
otherwise identical, so accessor numbering is identical, and the applier can
hop from any route's wrapper scope to the shell scope by a fixed accessor
(root-matching convention).

Loading the _new_ page's client code on navigation reuses the native lazy-load
feature's machinery directly rather than inventing a parallel path:

1. Every route's client entry already has a **ready id** and the
   `entry: "load"` compile mode already produces the exact shim needed
   (`import` + `ready(id)`, `translator/visitors/program/index.ts:106-226`).
   The `assets` frame lists entry ids; the loader `import()`s them; each module
   announces itself via `ready()`.
2. Update-stream fills that reference the new page's registrations are written
   by the server into **blocking ready channels** (`render.b[readyId]`) or
   behind **deps markers** (`dom/resume.ts:317-336`) — the server knows the
   template→entry mapping at compile time (`linkAssets.onAsset`). The client
   drains channels to a fixed point in `render.m` exactly as it does for lazy
   streamed content today; module-first and data-first arrival orders both
   already work.
3. Because gating applies to _resume data_, not markup, **fragment HTML
   inserts and displays before the new page's JS arrives** — the same
   progressive behavior as initial SSR streaming, for free.
4. `import … with { load: … }` inside layouts and pages keeps working, including
   inside swapped-in fragments: the fragment carries the lazy placeholders, and
   their triggers (`_load_visible_trigger` etc.) and ready channels operate
   after insertion. (Needs an explicit fixture.)

One wire nuance: the shell's `chain` slot values are renderer references. If a
fill carrying a live registered reference (`_(scopeId, "registryId")`) executed
before the page module loaded, the lookup would miss — so either that fill
rides the entry's ready channel (option 1 above), or chain entries serialize as
plain id strings used purely as identity tokens, with the live renderer
resolved lazily. The second keeps the shell's own fill free of gating; decide during
implementation.

### Endpoint & manifest

- The generated `fetch`/`invoke` branches on `Accept: text/marko-patch` +
  build-hash header before `context.render`, choosing the update-mode render
  against the same matched route — a sibling of the existing single-flight
  `ctx.fetch(ctx.url)` re-render path. Non-capable or mismatched → normal HTML.
- The route manifest shipped to the client gains: patch capability per route,
  update-chunk preload lists, and the build hash. The client router never
  attempts an update fetch against a route known non-capable (avoids the
  double-request fallback in the common case; the runtime fallback still
  covers redirects/errors/staleness).
- Tier-2 pruning hooks live here: the router knows both URLs' params and the
  per-template dependency metadata, so it computes the "provably unchanged"
  source set that the writer consults when skipping subtrees.

### @marko/vite

- Emit a **build hash** (single digest over the client build) into the client
  manifest, a runtime global, and server chunks alongside `__MARKO_MANIFEST__`;
  today no build identity exists at runtime anywhere.
- Compile `?update` virtual modules in the client build (a new
  `InternalFileKind` beside `clientEntry`/`loadEntry`), emit them as split
  chunks, and record them in the manifest keyed by the same entry ids the
  server flushes in `assets` frames.
- Plumb the `serverUpdates` translator option through `baseConfig`, gated on
  runtime version like `linkAssets`.

---

## Fallback & failure semantics

Full reload (tier 0) whenever:

- build hash in `meta` (or response headers) ≠ client's hash — deployments
  invalidate all in-flight assumptions (accessors and register ids are
  build-scoped by design; no cross-build compatibility is attempted, which is
  what keeps ids cheap);
- response is not `text/marko-patch` (route not capable, middleware redirect to
  HTML, error page);
- the stream errors or ends without `end` — a half-applied update is repaired
  by the reload (value application is idempotent and the reload re-renders
  server-side, so no corruption survives);
- redirect resolves cross-origin (same-origin redirects just continue against
  `response.url`).

Because updates are strictly an optimization over an always-working MPA, every
failure mode degrades to today's behavior, never to a broken page.

---

## Tradeoffs considered

- **Initial HTML vs. update granularity.** Markers + address-only scopes for
  param-only holes are the tax. Mitigations: flag is opt-in; values are never
  serialized initially; cross-template analysis suppresses markers where a
  region is static or will fragment-swap; a per-region opt-out attribute forces
  fragment class where value-tracking is a bad deal (huge mostly-static
  regions). Budget: aim for < 2% HTML growth on marker-heavy pages, measured by
  the existing size tooling.
- **Wire size vs. cacheability.** Tier 1 is deliberately conservative so
  responses cache per-URL at CDNs; tier 2 hints break shared caching and are
  reserved for responses that are private anyway. This resolves the "clients
  and servers may exchange data" requirement without making hints
  load-bearing.
- **Wire size vs. incremental JS.** Shipping derivation code (once, cached)
  usually beats re-serializing derived values every navigation, but not for
  rarely-visited templates or huge derivations; the compiler's default
  (client-executable → code, else value) plus the serialize-reason cost model
  handles the split, with room for a size-based heuristic later.
- **Update-chunk granularity.** Per-template chunks maximize cross-route cache
  reuse at the cost of request count; per-route bundles invert that. Default
  per-template + route-level `modulepreload`; bundler config can re-group —
  the protocol doesn't care.
- **Value vs. fragment application.** Value updates preserve nested client
  state and cost markers; fragments cost zero markers but destroy nested state
  and ship HTML. The compiler chooses per section by whether the section's code
  can ship to the client, authors can force fragment, and diagnostics make
  state-loss visible.
- **Server CPU.** An update render is a full re-render with suppressed HTML
  flushing — same order of cost as the reload it replaces. Skipping static
  string building in update mode is possible in the translator later but costs
  server code size; deferred.
- **Whole-body morphing instead of all of this** (Turbo/htmx/idiomorph-style,
  or Marko 5's morphdom heritage): no compiler leverage, ships full HTML every
  navigation, can't distinguish client-owned state from server content without
  heuristics, but needs no markers and no per-template chunks. Rejected as the
  primary mechanism; it also isn't needed as an intermediate fallback since
  tier 0 is always available.
- **Stateful server render sessions** (LiveView-style): trivially minimal
  payloads, but violates the statelessness requirement (sticky sessions,
  memory, reconnect complexity). Rejected.
- **Classic SPA data-endpoints** (ship page render code, fetch JSON): violates
  low-initial-JS and server-only-code goals. Rejected — though the update-chunk
  machinery is deliberately shaped so that a template whose inputs are fully
  serializable degenerates into exactly this when that's what the app wants.
- **RSC-comparison note:** the flight-payload role is played here by scope
  fills + fragments keyed by resume ids. Marko's advantages: static HTML is
  already on the client (never re-sent), the reactive graph gives value-level
  application without VDOM reconciliation, and the payload addresses compiled
  signal entry points rather than a component tree.

---

## Phasing

1. **Spike — wire format + state preservation.** Writer update mode emitting
   `resume` frames for a same-template re-render; client applier with id
   mapping; manual `applyUpdate(stream)` API. Extend the fixture harness
   (`__tests__/main.test.ts` + `utils/bundle.ts`) with a `Navigate(input)`
   step: render an update stream server-side, pipe it into the resumed page,
   snapshot the frames and the mutation log. Success = mutation log shows only
   the intended fine-grained updates and `<let>` state survives.
2. **Compiler flag.** Marker emission + address-only serialization for
   param-only holes; `?update` virtual modules with signal-graph partitioning;
   registered update ids; `$global` serialized-key reactivity; size budgets
   enforced via fixture `sizes.json`.
3. **Fragments + assets.** `resumeFragment`, `html`/`assets` frames, dynamic-tag
   divergence swap, build hash in `@marko/vite`, ready-channel gating for
   not-yet-loaded update chunks.
4. **@marko/run.** Shell template, patch content negotiation in generated
   `fetch`, client router (interception, history, prefetch, view transitions),
   manifest capability + preload lists.
5. **Pruning + polish.** Tier-2 hints (`X-Marko-From`, fingerprints),
   router-computed unchanged-source pruning, diagnostics for state-loss and
   marker-cost hotspots, per-region opt-outs.

Phases 1–3 land entirely in `runtime-tags` behind the flag and are testable
with the existing fixture infrastructure; 4–5 are integration work.

---

## Open questions

- **Naming**: translator option (`serverUpdates`?), content type
  (`text/marko-patch`?), header names, the `?update` suffix.
- **Root scope matching**: fixed convention (root program scope is the first
  address) vs. an explicit root address in `meta` — needs a decision when the
  writer work starts.
- **Loops without `by`**: positional matching is order-fragile; probably fine
  for tier 1 (values re-sent per index), but worth a diagnostic nudging `by`
  under the flag.
- **Concurrent navigations**: latest-wins with `AbortController` seems obviously
  right, but interaction with an in-flight streamed update mid-application
  needs care (abort between frames only).
- **Islands adjacency**: the update-chunk partition (interactive chain vs.
  input chain) is very close to a partial-hydration split; worth keeping the
  partition mechanism general enough to reuse, without expanding this
  project's scope.
- **Forms/actions**: POST → update-stream response should compose with the
  single-flight mutation pattern in `@marko/run`; not designed in detail here.
