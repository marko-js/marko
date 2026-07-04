# Single-page server-first updates — handoff

Everything needed to pick this work up cold. Read in this order:

1. [single-page-server-updates.md](./single-page-server-updates.md) — the
   design: goals, core model, wire protocol, compiler/runtime/integration
   architecture, tradeoffs, phasing. Kept current with every decision.
2. [single-page-server-updates-wire-and-entries.md](./single-page-server-updates-wire-and-entries.md)
   — the measured experiments behind the wire-format (A1) and persisted-entry
   (B2) decisions, the end-to-end prototype write-up, and the confirmed
   update-render writer gap list (G1–G5).
3. [single-page-server-updates-review.md](./single-page-server-updates-review.md)
   — shape review after real-app validation: goals as invariants,
   alternatives, target API boundaries (the feature ships with @marko/run),
   and the prioritized gap list.
4. [experiments/single-page-server-updates/README.md](./experiments/single-page-server-updates/README.md)
   — the runnable harness: compile/render scripts and payload/entry size
   measurements. (The end-to-end lifecycle now lives in the
   `persisted-update-navigate` fixture under
   `packages/runtime-tags/src/__tests__/fixtures/`.)

Branch: `claude/single-page-updates-status-tk3b8h` (this repo; sibling
branches of the same name exist on `marko-js/vite` — carrying the
`persisted` plugin-option plumb and `?update` entry kind — on
`marko-js/run` — carrying the run-owned integration: option, update
negotiation, client router — and on `DylanPiercey/marko-ecommerce`, which
carries the linked prototype app, see "Example-app prototyping workspace"
below. Work started on `claude/single-page-server-updates-ipucp6`,
continued on `claude/single-page-server-updates-bimocl` (marko/vite only;
same commits as this branch up to the run integration), which this branch
continues.)

## What the feature is

A compiler-configured, opt-in system where navigations fetch the target URL
and a **stateless** server streams a minimal update payload instead of a full
document. The client applies it to the already-resumed page through the
existing signal graph: client state is preserved, server-only code stays on
the server. Model: **a navigation is "the root template received new `input`
and a new `$global`"** — the semantics that already exist for a parent
re-providing input to a child. Fallback to a full reload is always available
(build-hash mismatch, non-capable route, stream error).

## Current state

**Implemented** (commit `ca126523`, `feat: add persisted compile option…`):

- `persisted` compile option (`packages/compiler/src/config.js`,
  `config.d.ts`) + `$global.persisted` render flag
  (`packages/runtime-tags/src/common/types.ts`). Two-level opt-in; omitting
  the render flag serves a byte-identical non-persisted document (crawler
  opt-out).
- The serialize-reason **bit lattice**
  (`packages/runtime-tags/src/html/writer.ts`, `SerializeReasonFlags`):
  bit 1 = stateful parent ⇒ markers + values (today's behavior); bit 2 =
  persisted ⇒ markers/spine only. `_serialize_if` projects bit 1,
  `_serialize_guard` passes bits through so cross-template reason
  propagation preserves persisted-ness. `State` seeds reason `2` from
  `$global.persisted`.
- The translator **spine/value gate split**
  (`translator/util/signals.ts` `writeHTMLResumeStatements`, helper
  `getExprGuardSerialized` in `translator/util/serialize-guard.ts`): scope
  writes, owner links, structural bookkeeping, and closure subscriptions
  gate guard-class (any bit); binding values stay if-class (stateful bit)
  with the same-reason hoisting shortcut disabled under the flag —
  eliminating the param-only value leak found in the experiments.

**Verified**: full suite 8279 passing; non-flag renders byte-identical
(modulo random `renderId`); persisted renders emit every hole marker, branch
marks, and the spine with zero param-only values; client bundle sizes
untouched; the e2e prototype passes against the real flag. Changeset:
`.changeset/persisted-serialize-guards.md`.

**Implemented** (`feat: add update-render writer mode…`): the G1–G5
update-render writer mode. `$global.persisted = "update"` renders a patch
payload: `State.update` seeds serialize-reason `3` (request-derived values
serialize — they are the payload; `_persisted_reason()` returns `3` so
cross-template/global propagation carries values too); the translator wraps
request-derived (state-free-reasoned) hole expressions in persisted builds
with the pass-through `_hole_value` helper, which in update mode writes the
computed value under the hole's accessor (dynamic attrs keyed
`UpdateAttr:<name>:<elAccessor>` — per attr so multi-attr elements don't
collide; the prefix lives translator-side, see `getUpdateAttrPrefix`, so no
enum bytes ship to clients) (G1); `_if` always writes the conditional
outcome, `-1` = no branch (G2); loops write branch lists (empty included),
loop keys (even positional), and owner refs as scope props (G3/G4); and
`_script` effects are suppressed in update mode (G5). State-driven structure
(no persisted bit in the branch guard) is excluded — the server never pairs
into client-state-driven structure. Verified: e2e derives its patch from a
real page-B update render (both branch directions); non-persisted compiles
and initial/non-flag renders byte-identical; full suite passing.

**Implemented** (`feat: add persisted update-entry codegen…`): the `?update`
entry kind. `persisted: "update"` with dom output runs the full dom
translation (identical sections/accessors/register ids to the main module)
but the program exit (`translator/visitors/program/update.ts`) emits
compiled merge functions instead of the template: per-section
`(patch, live) => { … }` with presence-checked (sparse) statements — plain
scope stores for request-derived values, value-signal calls where a
downstream statement mixes client state (`bindingNeedsUpdateSignal` walks
the signal graph), `_text`/`_attr` hole placements, conditional replay +
branch-content dispatch, keyed-loop reconcile, and child-template dispatch
via `<tag>.marko?update` default imports. Sharing is via the resume
registry, not module exports or a wire `templates` frame: persisted dom
builds `_var_resume`-register the needed value signals and `_if` signals
(`Signal.registerId` disambiguates conditionals whose `#text` node-binding
names repeat) and `_resume`-register each request-derived loop's hoisted
`[template, walks, setup]` content (strings shared with the loop signal, not
duplicated); the new `dom/update.ts` runtime (`_update_signal`,
`_update_for`) resolves them lazily by id. Fresh `_if`/`_for_of` branches
clone the registry-shared content and fill from patched scope values.
Verified: e2e imports the generated entries (hand-authored
`entries/*.update.js` remain as the spec they replaced), including reverse
navigation (fresh conditional branch creation); no `templates` frame needed.

**Implemented** (slice 3, core): `applyUpdate` in `dom/update.ts` — the
real merge driver: patch-aware serialize context (patch-local scope ids,
plain-object patch scopes, `_(id, registryId)` refs resolved through the
resume registry, scope-0 partials merged onto the live `$global`), root
pairing at patch scope 1 by convention, compiled-merge dispatch, synchronous
queue flush. And the fixture-harness `navigate()` step: persisted fixtures
bundle their generated `?update` entry (snapshotted, sizes tracked as its
own chunk); an ssr `navigate(input)` step renders a real update payload
server-side, extracts its fills, pairs the live root through the page's own
effect machinery, and applies it in the live jsdom document — csr mode
treats the same step as a plain input update (the semantics the patch
reproduces). The `persisted-update-navigate` fixture snapshots the whole
lifecycle; the standalone experiments e2e and `update-runtime.js` prototype
are deleted.

**Implemented** (slice 4 groundwork, `feat: integration fixes…`): three
fixes found by real-app validation — per-attr serialize-reason groups in
persisted builds (attr hole guards previously crashed when a tag's merged
marker reason grouped differently than a single attr's sources); the
persisted **spine reason** on every custom-tag child-scope link (a
global-sourced reason, live exactly when the persisted flag is set) so
attr-less pass-through roots (run's route wrappers) can't elide their scope
and shift the patch root off scope 1; update entries re-export `applyUpdate`
and pair the live root themselves (`getUpdateRoot` in `dom/resume.ts`) so
consumers never import the runtime by path — a second runtime instance has
its own registry and silently pairs nothing.

**Implemented** (`feat: update wire format…`): the bytes goal. Mixed
(stateful ∩ request-derived) reasons keep their request bits — guards
compile to `1 | <dynamic part>` (`getMixedDynamicGuard`), branch reason
aggregation stops collapsing them, and their param groups are analyzed — so
real page shapes (`<if>/<else>` containing interactive components) emit
branch outcomes/links/holes in update mode (`persisted-update-mixed-branch`
fixture). Dynamic tags serialize under the persisted spine
(`… | _persisted_reason()` guard) and link their branch scope explicitly in
update mode; content-section merges register by content id
(`_update_content`) and dynamic-tag merges dispatch them from the patch's
serialized renderer id (`_update_dynamic`) — the layout
`<${input.content}/>` hop works (`persisted-update-layout` fixture). Update
responses suppress ALL static HTML (chunk `writeHTML` no-ops in update
mode; no walker bootstrap, no walk calls, no reorder templates — async
placeholder bodies stream in order; no trailers) and emit a
**newline-delimited stream of serializer frames**: each flush is a bare JS
array of fills on its own line (the serializer escapes newlines in values).
The applier/harness/prototype-router parse lines; per-frame streaming apply
(shared per-navigation patch map) is follow-up router work.

**Implemented** (`feat: MPA-parity for volatile expressions…`): refs-less
non-foldable expressions (`new Date()`, impure calls, module state) are
_volatile_ — they share the `$global` source treatment
(`getVolatileExprSources` in `references.ts`), so persisted navigations
refresh them exactly as a reload would, propagating through `<const>`
derivations (`persisted-update-volatile` fixture). `let` initializers stay
excluded (client state survives by definition). Compile-time-foldable
expressions stay static; refs-bearing impure expressions already refreshed
through their sources' guards. Purity beyond folding (imported formatter
calls over constants) currently pays the volatile cost — a pure annotation
or known-impure-global heuristic is the planned relief valve.

**Implemented** (`feat: render-global persisted guards + value classes…`):
the architecture simplification that follows from the "anything an MPA nav
updates, the persisted update updates" invariant. Persisted-ness/update-ness
are render-global bits, so hole captures and structural guards compile to a
flat `_persisted_reason()` call — the per-attribute serialize-reason-group
machinery (Symbol groups per attr, mixed persisted group extension) is
deleted. `State` now always seeds reason `2` for persisted renders; value
serialization is gated by compile-time source class instead of the seed:
state-sourced values compile to `_state_reason() && v` (serialize for
normal resume, never in updates — the client owns them), request-derived
state-free values to `(guard || _update_reason()) && v` (additionally
serialize in update renders — they are the payload), global/volatile-only
values are never serialized (holes carry them). Both class helpers return
`undefined` when inactive so gated props drop out of the payload entirely.
Result: update payloads no longer carry client state defaults
(`persisted-update-navigate`'s update frame lost `expanded`/derived state
values); non-persisted output stays byte-identical.

**Implemented** (`feat: browser-code reuse…`, step 2b): holes whose
referenced bindings are all live client state or patched update values with
a registered, merge-invoked signal skip both the server `_hole_value`
capture and the update entry's placement
(`isUpdateCoveredByClientSignals` in `update-merges.ts`) -- the client's
already-loaded signal chain re-renders them from patched scope values,
exactly as a CSR update would. `bindingNeedsUpdateSignal` was rewritten on
analyze data (`binding.reads`, non-effect state-mixing readers) so the html
and dom compiles agree by construction; no transitive walk is needed since
state-free derived readers are themselves patched. Value gates now classify
by the binding's own source class rather than the reader-derived reason (a
state-free binding forced by a state-mixing reader serializes unguarded and
rides updates) -- this also fixed a real staleness bug where a mixed attr
kept its pre-navigation value until the next client state change
(`persisted-update-navigate`'s spotlight class). Fixture:
`persisted-update-signal-reuse`. The broader fully-interactive fast path
(root input signal ≡ CSR update, whole-template coverage) remains future
work.

**Implemented** (`feat: drop client-resume-only wiring…`): update renders
suppress serialization that only the resume walk consumes -- controlled
input wiring (`_controllable*` scope writes), tag-variable refs and scope
offsets (`_var`), closest-branch back-references (`_resume_branch`), and
tag-variable change handlers (`getResumeOnlyExpr` wraps the let/return
emits in persisted builds). Matched scopes keep their live wiring; fresh
branches are client-constructed from registered content and wire their
own. Measured on the ecommerce app this cut update payloads ~35%: item
6.5 → 4.4 KB, search 41.2 → 26.8 KB (4.8 → 3.6 KB gzip), cart 0.65 →
0.31 KB. A first attempt gated the whole serialized-accessors channel and
broke `#childScope` spine links -- the gate belongs at the wiring emit
sites, not the shared emission loop.

**Implemented** (`marko-js/run` branch, `feat: persisted pages…`): the
run-owned integration — the feature as users see it. `marko({ persisted:
true })` on run's vite plugin (option lives in `RouterOptions`, forwarded
wholesale to @marko/vite's `persisted`); the generated router negotiates
update renders in `invoke` (`accept: text/marko-patch` + an
`x-marko-route` header carrying the client's route pattern, verified
against the matched `route.path` — mismatches 409 so route-ranking
false-positives fall back instead of pairing wrong scopes); update
responses ship `content-type: text/marko-patch` + `vary: accept`
(`RuntimeContext.render` swaps the response init off `context.persisted`);
and every generated route wrapper template registers the client router
(`src/runtime/persisted.ts`, `register(pattern, () =>
import("./<wrapper>.marko?update"))` emitted by `renderRouteTemplate`) —
link interception for URLs matching the route's own pattern
(`patternToRegExp` mirrors `$`/`$$` segment semantics), parallel
fetch+entry-load, buffered frame parse, `applyUpdate` via the entry's
re-export, pushState + scroll-to-top, popstate re-fetch, abort-superseded
navigations, and a full-navigation fallback ladder. Validated end-to-end
against the ecommerce app in Chromium — dev mode and the production build
(same-route item→item click, no reload, cart state + DOM marker survive,
back/forward re-applies without reload, cross-route stays a full
navigation, 409 backstop). The prototype glue in the ecommerce app is
deleted. Found and fixed on run main while
integrating: the context class refactor had moved `params`/`search`
getters and `fetch`/`render`/`redirect`/`back` to the prototype, which
marko's own-property `$global` spread drops — they're own enumerable
properties again (rc.10 contract; see marko `agent-feedback/unclear.md`).

**Implemented** (`feat: await/try update semantics + per-frame streaming
apply`): persisted updates cross async boundaries. `<await>`/`<try>` bodies
serialize the parent → body branch link as a scope prop in update renders
(`BranchScopes:<accessor>`, the same key the live page stores its resolved
branch under — the HTML end-marker that normally carries it is suppressed;
`_try` gains a persisted-build-only serialize-guard arg so non-persisted
output stays byte-identical), the translators register a `"branch"` update
merge (single always-body dispatch, gated `isReasonDynamic` on the body
reason like `if`), and the update entry dispatches the body merge when the
link's frame arrives. `createUpdate` in `dom/update.ts` (re-exported by
generated entries) is the per-navigation streaming applier: one call per
response frame against a shared patch context, re-dispatching the root
merge each time — sparse presence checks pick up newly arrived keys
(an await body's link rides its own frame, in resolution order) while
already-applied keys re-apply through primitives that all no-op on
unchanged input (`_let`/`_const` value-compare, `_text` data-compare, `_if`
branch-compare, keyed reconcile; unsafe-html holes go through
`_update_html`, which consumes its patch key). run's client router streams
response lines and applies per frame, committing history/scroll on the
first applied frame — MPA-parity paint for pages with slow awaits. The
fixture harness applies per frame and snapshots each intermediate state
(`persisted-update-await` covers `<try>`+`<await>` keyed-reconcile, a bare
`<await>`, reverse navigation, state survival). Found while validating: the
ecommerce app's awaited sections (recommendations/reviews) were silently
stale after persisted navigations, and buffered apply cost 1.26s on the
item page — both fixed by this slice.

**Implemented** (`feat: persisted dynamic-tag renderer swaps` + the run
branch's cross-route router): **cross-route navigation without the shared
shell**. The design's recursive dynamic shell would deopt static
composition at every chain level; instead the swap rides the
already-dynamic `<${input.content}/>` hop — two routes sharing a layout
chain compile to identical wrapper shapes (only the page import differs),
so the target route's update entry pairs with the live root and the
divergence is a content-renderer-id mismatch at the hop. Persisted dom
builds always register content sections and dynamic-tag signals; on
mismatch `_update_dynamic` resolves the registered renderer (bound to the
patch branch's owner scope — its values are the update's data; owner
reactivity into a swapped branch is inert, fine for stateless wrappers)
and replays the tag's own signal: fresh branch from static parts, filled
by the renderer's registered update merge (matched ids never replay, so
matched levels don't re-run their input phase). run generates a client
route table (patterns + lazy loaders per route for the template module and
`?update` entry); the router matches any route's links and loads the
target's code in parallel with the fetch. This also fixed a pre-existing
optimized-build bug where the layout-hop dispatch no-op'd persisted
updates entirely. Validated on the ecommerce app (dev + production):
item→cart applies as an update with layout DOM identity surviving; back
to the item page falls back cleanly. Limitations (each on the watch
list): (1) pages whose setup calls server-only imports cannot
client-construct as swap targets — the fallback ladder full-navigates;
the designed fix is wire-delivered resumable html fragments for the
divergent subtree. (2) Nested-layout client state below the hop does not
survive cross-route (content identity is per-wrapper-file); the shell —
or a compiler-level "swappable static tag" — is the deopt-free fix if
partial-chain matching proves needed. (3) The client table's linear match
can disagree with server ranking (409 → fallback covers it). (4)
Template-valued dynamic tags (`<${cond ? A : B}/>` with whole templates)
swap only if the template is registered — content-section values (define,
pass-through content) are covered; dom `_template` registration is not.

**Implemented** (`feat: fresh-branch payload effects + request-derived
compute skipping`): the first half of the wire-delivery direction agreed
after the cross-route slice. Persisted builds guard state-free
request-derived compute invocations with the runtime `_updating()` flag
(values are the patch's payload; the guard set mirrors
`forEachUpdateValueBinding`, so state-mixing computations keep firing),
and fresh-subtree wiring ships as data: update renders emit effect
entries (G5 lifted — the same `"registryId scopeId"` strings resume
uses), compiled merges pair patch scopes to live scopes (`_update_pair`,
emitted only for sections with effects), and the applier executes entries
only for scopes created during the apply (`Gen === runId`) — matched
scopes never replay, the no-double-bind rule enforced client-side.
Persisted builds compile script effects through `_script_update` (skips
setup-time queueing during applies) so payload entries are the single
wiring source for fresh subtrees. Await/try promise computes hang off dom
bindings and are deliberately outside the guard set: a fresh branch
containing an await over a server-only expression throws into the
full-navigation fallback instead of settling into a permanently-pending
placeholder. Effect entries cost ~4.5% update-payload gzip on the
hole-dense search page (697 B raw), item +144 B. Fixture:
`persisted-update-server-derived`. Remaining for the wire-delivery
direction, in order: fresh-await/try construction from registered branch
content (unblocks server-first pages with awaits as swap targets),
fragment `templates` frames + client content store + `x-marko-from`
route-pair inclusion (unblocks all server-only pages without loading
their modules), CSS/asset frames, `x-marko-have` T2 pruning.

**Implemented** (`feat: fresh server-first subtree construction`): the
second half — server-first pages (request-derived data, awaited sections)
are now viable cross-route swap targets, constructed entirely from the
patch. Five composable fixes, each found by walking the ecommerce cart→item
navigation one crash at a time (fixture `persisted-update-fresh-page`
mirrors the full shape: layout hop, `$global`-derived server-only product,
`<if>/<else>`, property closures, a stateful child, a let-global-style
`$global`-backed shared value with `<return>`+valueChange+pub-sub effect,
and three `<try>/<await>` sections including static bodies):

1. **Request-derived closure skip** (`visitors/program/dom.ts`,
   `isUpdateDeliveredClosure` in `update-merges.ts`): fresh branches
   created during an apply skip setup-time closure renders over state-free
   request-derived owner values — normal resume never serializes those raw
   values (nothing re-runs such closures client-side), so they'd
   dereference `undefined` (`product.price.toFixed(2)` was the production
   crash); the branch merge places the server-captured holes instead. The
   exception mirrors `isUpdateCoveredByClientSignals`: signal-invoked,
   serialized bindings keep firing (their raw value is guaranteed present).
2. **Boundaries always participate** (`core/await.ts`, `core/try.ts`,
   `html/writer.ts`): the `isReasonDynamic` gate is gone — await promise
   computes are always `_updating()`-guarded (`delay(DELAYS.shippingDeals)`
   references no bindings yet lives behind a `server import`), update
   renders always write the branch link (a fresh detached await with a
   _static_ body still needs the link to attach), and `_try` lost its
   guard argument (the runtime keys off `state.update` alone).
3. **Flush-fresh ordering** (`_update_flush_fresh` in `dom/update.ts`,
   emitted by the `if` merge and called by `_update_branch` /
   `_update_dynamic`): branch dispatches flush the queue before running a
   body merge into a branch created during this apply, so the fresh
   subtree's setup runs _before_ the fills. Merged values suppress
   equal-value signal invocations (`_const` memoizes) — fills-first
   silently skipped setup renders and with them client wiring the patch
   cannot deliver (`<let>` seeding from `$global`, `_return`/
   `_return_change` tag-var wiring; the let-global `cart` was undefined at
   click time). Matched branches keep fills-first semantics untouched.
4. **`_or` pending excludes promoted globals** (`util/signals.ts`,
   `dom/signals.ts`): promoted `$global` reads have no client-side value
   signal, so they never invoke fresh-render joins — a
   `valueChange(next) { $global.data[key] = next }` handler's
   `input ∩ $global` join stalled one short and never wired. The runtime
   `_or` now runs on the first invocation when emitted pending is 0;
   matched scopes (queue path) are unaffected.
5. **Apply-window effects** (`dom/update.ts`): payload effect entries
   execute for every scope with `Gen >= applyGen` — boundary flushes
   advance `runId` mid-apply, so the old `Gen === runId` check dropped
   wiring for scopes created before a same-frame flush (dead add-to-cart
   button).

Also fixed: the test bundler resolved nested child `?update` imports
against the fixture root instead of the importer (`utils/bundle.ts`).
Validated on the ecommerce production build: cart→item (a link click into
a route whose page is fully server-derived) applies as a true update —
layout DOM identity survives, recommendations/deals/reviews stream in as
frames (500/900/1200 ms), add-to-cart works on the swapped page including
the let-global header count, same-route and popstate navigations keep
updating in place. **Known limitation (drives the next slice)**: the
_reverse_ shape — pages deriving content from _client-state_ computes over
server-only data (cart's `<let/products=getProducts?.(…)>` +
`<const/entries=…>`) — cannot fresh-construct: update payloads carry no
state, so the apply now falls back cleanly to a full navigation with
correct content (before this slice it silently rendered an _empty_ cart
body; the weak old validation masked it). The fix is the planned
state-seeding work: the client tells the server what it has
(`x-marko-from`/`x-marko-have`), the server serializes state for subtrees
the client will create fresh, and the merge seeds only apply-created
scopes (matched state stays hostile-patch-proof). Remaining wire-delivery
sequence: state seeding for fresh subtrees, fragment `templates` frames +
client content store + `x-marko-from` route-pair inclusion, CSS/asset
frames, `x-marko-have` T2 pruning.

**Implemented** (`marko-js/run` branch, `feat: persisted router intercepts
GET form submissions`): same-origin GET forms are links with parameters —
the router serializes them (submitter name/value included,
`formaction`/`formmethod`/`formtarget` overrides honored, files dropped
exactly as native GET does) and routes them through the existing update
pipeline; `defaultPrevented` submissions stay with the app, POST stays
native until the PRG slice (a mutation's fallback must never replay the
request — see the review discussion: follow redirects, verify
`x-marko-route` against the final URL, fall back to `location.assign(res.url)`
after a response and native `form.submit()` before one). Validated on the
ecommerce search page: filter chips and the search box apply as updates
(no reload, negotiated patch, URL/history correct, back-over-form
popstates as an update); an app-level valibot strictness (`sort=` from the
default option) was fixed alongside. Found by this slice: chip
`class=` attrs referencing a promoted `$global` binding ∩ a loop param are
captured by update renders but the update entry emits no attr merge for
them (active-chip state goes stale) — the capture/merge predicates at
`native-tag.ts` disagree for that shape; tracked as the next marko fix.

**Implemented** (`fix: merge item-split class/style attrs in persisted
updates`): the slice-2 deferral ("item-split class/style values are
captured by the server but not merged") closed. The dom compile's
class/style item-split path (static items + keyed dynamic values, the
filter-chips shape `class=["chip", { "chip--active": expr }]`) now records
the whole-value attr merge the html compile was already capturing; the
shared gates exclude state-mixing values, so the whole-value write cannot
stomp client-owned items. Fixture `persisted-update-attr-items` pins the
shape (promoted `$global` read ∩ loop param over a server-only list);
validated on the ecommerce production build (form probe 9/9 — the active
chip moves on filter updates). The fixture's optimize ssr leg
initially crashed and exposed a pre-existing resume gap (two wrong
theories — binding-id divergence, elided-empty-scope identity — were
disproven by instrumentation along the way): the walker **dropped branch
visits** when no branch-enabling module had executed yet and no ready
data was pending, but branch modules can legitimately execute after the
walk (module ordering, lazy chunks, persisted `?update` entries — the
optimize bundle's module order put the loop construction after the
walk). Fixed in `dom/resume.ts`: branch visits are now always retained
(compacted in place) when branches are disabled, and `enableBranches()`
rewalks all current renders exactly as `ready()` does, so late-loading
branch modules reprocess them. The fixture runs all legs green.

**Implemented** (`feat: state seeding for fresh subtrees` + the run
branch's `x-marko-from`): **both cross-route directions are true updates
now** — the last fallback shape (pages deriving content from client-state
computes over server-only data, the ecommerce cart) is gone. Update
fetches send `x-marko-from` (the client's current route pattern); the
generated router stamps cross-route renders with `$global.persistedSeed`,
which makes `_state_reason()` live in that update render — state values
serialize with no translator change (v1 serializes state everywhere in
seed renders; matched-scope waste is bounded, measured +44 B on the cart
payload, +211 B on item). Persisted dom builds register `let` signals
(`_var_resume`), update entries emit `_update_seed` calls through them
(downstream derivations recompute), and the runtime gates seeds to scopes
created during the apply (`Gen >= applyGen`) — the hostile-patch
protection moved from serialization omission to the client-side gate, so
matched scopes' live state never changes. Two ordering rules replaced the
mid-merge flush (`_update_flush_fresh`, now deleted): it ran the whole
queue, so a wrapper-level flush executed a page's setup before the page's
own (child-dispatched) seeds — depth-fragile. Instead ordering is
insensitive: `_let` initializers defer to a landed seed while updating,
and `_const` re-renders equal values on fresh-during-apply scopes (the
equality-suppression problem the flush originally fixed), so fills and
seeds land at any depth before the final flush runs setup once. Fixture:
`persisted-update-fresh-page`'s Cart now mirrors the app (let from a
server-only optional call, derived entries, if/else, keyed rows, total
reduce) and swaps in correctly with seeded state. Validated on the
ecommerce production build: item→cart applies as an update with correct
rows/total (cross-route probe 8/8, browser 11/11, forms 9/9); same-route
payloads stay byte-identical. Remaining wire-delivery sequence: fragment
`templates` frames + client content store (pages whose modules aren't
loaded), CSS/asset frames, `x-marko-have` T2 pruning; then POST/PRG
forms ride the seeding.

**Implemented** (`marko-js/run` branch, `feat: persisted router intercepts
POST forms as PRG updates`): **any in-app interaction can be persisted-page
driven now** — links, GET forms, and POST forms all route through the
update pipeline with full-navigation fallback. POSTs submit via fetch with
update content negotiation (enctype honored: url-encoded default,
`multipart/form-data` as FormData, `text/plain` stays native; submitter
`formaction`/`formmethod`/`formenctype`/`formtarget` overrides; server
negotiation is method-agnostic now); the handler mutates and PRGs
(`ctx.back()`), fetch follows the redirect, and the final GET's patch
applies in place — a same-URL refresh adds no history entry, so
remove/clear cycles leave back pointing at the previous page. Two rules
keep mutations safe: they are **never aborted** (only their application is
superseded, via the per-frame signal check) and **never replayed** by the
fallback ladder (with a response in hand the final URL is followed with a
plain GET; without one the submission is handed back to the browser via
`requestSubmit` under a re-entry flag — native resubmission semantics).
Content-type (not status) decides patch acceptance, so a non-2xx
validation re-render still applies in place, keeping focus and scroll. A
`marko-run:navigate` event fires after every applied navigation; the
ecommerce `let-global` mirrors re-read `$global.data` on it, so
server-driven mutations reach client state (header cart count) with zero
app-specific router code. The cart page is now plain `method="POST"`
forms with zero client JS — validated on the production build (POST probe
10/10: in-place row removal, patched total, synced header count, no
history growth, clear-cart branch swap, clean back). `defaultPrevented`
submissions (the app's own optimistic add-to-cart) stay untouched.

**Implemented** (`feat: controllable attr update capture/merge`): the
slice-2 deferral "controllable inputs have no merge emission yet" closed —
found because the POST slice's PRG forms depend on hidden inputs, which
went silently stale on matched scopes (item→item navigation left
`value=input.id` at the previous product — add-to-cart then mutated the
wrong product) and rendered with **no value at all** in fresh subtrees
(the persisted-arrived cart's remove forms posted an empty `productId`,
failing validation into a visible no-op). Controllable attrs (`value` on
input/select/textarea, `checked`, `open`) render through controllable
helpers rather than plain attr writes, so the plain-attr capture/merge
never saw them: the html compile now wraps the helper's value argument in
the same `_hole_value` capture (mutated in place so the select/textarea
special paths inherit it), and the update entry records a `"controllable"`
merge replaying `patch[key]` through the helper's `_default` variant
against the live scope — the variant that owns default-vs-live value
semantics (typed text survives on matched scopes, hidden/button-likes
track the attribute, selects re-default their options, `open` keeps its
create-only semantics). `_attr_input_value_default` itself no longer
restores the stale attribute on value-IDL-reflecting types (hidden,
buttons, checkbox/radio — there is no user-owned live value to preserve);
+43 B brotli runtime cost. Bound (`:=`) controllables are state-sourced
and skip the shared gates as before. Fixture
`persisted-update-controllable-attrs` pins all four semantics (hidden
follows the patch, text preserves the typed value while re-defaulting,
select re-defaults, bound qty untouched with the child still interactive).
Not covered (recorded in `agent-feedback/bugs.md`): `checkedValue` (two
interdependent values — sparse per-key captures can't replay the pair),
controllables reached through spreads (`_attrs` resolves them at runtime;
capture needs to move into the html runtime), and `<option value=dynamic>`
(`_attr_option_value` has no capture). Payload cost of the new captures:
search +0.2 KB gzip (its sort select and query input now ride updates),
item unchanged.

**Prototyped** (validated in `experiments/`, not yet real code): the
effects-not-replayed rule (double-bind detector). The wire-delivered
`templates` frame + `_wire_if`/`_wire_for` store prototype was superseded by
registry sharing (see above); a content store may still return in slices 3/4
for priming templates the client hasn't loaded.

## Decision log (all settled; rationale in the linked docs)

| Decision                                                                                                                                          | Where documented                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Navigation = new `input` + `$global` to the root; `<let>` state preserved by existing `Gen` semantics                                             | design doc, "The core model"                         |
| Wire format A1: the existing resume fill format, patch-space ids; A2/A3 rejected on measurement                                                   | proposals doc, "A. Wire format"                      |
| Scope pairing: compiled top-down tree merge; wire addressing rejected; id-order pairing unsound under async                                       | design doc, "Scope pairing"                          |
| Persisted entries B2: compiled merge functions; B1 tables superseded once control-flow merges collapsed into existing `_if`/`_for_of` signals     | proposals doc, "B." + "Hardening"                    |
| Placement-only: no server compute ships; derived values arrive computed                                                                           | design doc, "The parallel update entry"              |
| Sparse merge semantics (absence = unchanged); presence checks mirror server guards; per-kind helpers make them byte-neutral                       | proposals doc, "Sparse vs dense"                     |
| Effects never replay for matched scopes; mount effects only in fresh subtrees; dependency-driven re-runs ride the reactive graph                  | proposals doc, "Effects on update"                   |
| Branch markup wire-delivered (`templates` frame), sourced from the HTML output under the flag, deduped per response, idempotent client store      | proposals doc, "Spike: wire-delivered branch markup" |
| Guard-split lattice (implemented)                                                                                                                 | this doc, "Current state"                            |
| `@marko/run`: per-route wrapper templates rendering a shared dynamic-tag shell; code splitting + lazy-load machinery preserved via ready channels | design doc, "@marko/run integration"                 |
| Payload tiers: T0 reload / T1 stateless-cacheable / T2 hint-pruned; build hash gates everything                                                   | design doc, "Payload tiers", "Fallback"              |

## Open questions / watch list

Consolidated from both docs, plus two items found during implementation that
live only here so far:

- **Reason propagation OR bit-loss** (implementation caveat): where the
  translator combines multiple dynamic guards with logical OR (e.g.
  `getSerializeGuardForAny`, child-reason arguments), `a || b` returns the
  first truthy value and can drop the stateful bit when reason vars with
  different bits mix in one render (conceivable via body-content sections
  rendered under a different reason than their template's program). Not
  reachable in current coverage; audit and switch to bitwise OR (`|`) at
  propagation sites when building the update-render slice.
- **`serializedLookup` conservative classification**: entries registered via
  `setBindingSerializedValue`/`setSectionSerializedValue` are all gated
  spine-class under the flag. Most are structural (closure sets, indexes,
  child scope refs); audit for value-like entries that would serialize
  initially without need.
- Merge shapes beyond the prototype: attr tags, hoists/getters, tag
  variables (dynamic tags, `<await>`, and controllable attrs are done —
  see "Current state"; the controllable gaps `checkedValue`/spreads/
  `<option value>` are in `agent-feedback/bugs.md`).
- `$global` promotion — **implemented** (commit `feat: promote $global reads
to param-like sources under the persisted option`). Mechanism: under the
  `persisted` option, `$global` member reads get bindings (program-section
  root + property aliases) whose `Sources` carry a new `global` flag; guard
  codegen splits it out — the param part rides the existing per-group
  `_scope_reason()` guards unchanged while a global part ORs in
  `_persisted_reason()`, a runtime read of `$global.persisted` itself, so
  cross-template reads gate with no parent threading (and parents passing
  $global-derived props thread the persisted bit to children through the
  existing reason records). Values are untouched: reads bail out of scope-slot
  rewriting (live member access on the global object), global-sourced props
  never serialize values (`getExprIfSerialized` returns undefined;
  `writeSerializedBinding` skips global bindings), and DOM statements
  referencing only same-section global bindings fold into setup. Verified:
  non-persisted builds and non-flagged renders byte-identical; fixtures
  `persisted-global-reads`(+`-opt-out`); full suite 8293 passing; ecommerce
  app emits full markers/spine (measured: `/item` 44→125 markers, +16% gzip;
  `/search` 201→802, +50% gzip on that hole-dense worst case — the number
  the marker-suppression levers must bring down).
  Remaining from the original design note: per-key granularity for
  serialized vs non-serialized globals (currently every static `$global.key`
  read promotes; non-serialized keys cost markers they can't use), and the
  DOM-side value-signal chains for global keys exist only where reads are
  cross-section (closures/intersections) — pure setup-folded holes rely on
  placement for updates, per the placement-only model.
- Root pairing convention; concurrent navigations (abort between frames);
  `by`-less loop diagnostics; effect ordering confirmation; pair-store
  session persistence; when to enable hint pruning.

## Next slices (in dependency order, each testable via the harness)

1. **Update-render writer mode** — **done** (see "Current state"): G1–G5
   land as `$global.persisted = "update"`; the e2e patch is derived from a
   real render-B payload. Deliberately deferred within this slice:
   state-only props still ride along (bytes only — merges ignore them; a
   translator-level `_state_value` filter is the fix when profiling says
   so); `template`/`walks` pair emission as `templates` frames (the e2e
   still hand-delivers the pairs; belongs with entry codegen, slice 2,
   which decides the shared content-id scheme); mixed state∩param branch
   guards compile to a static `1` and so skip structural update emission
   (needs a compile-time bit split if real apps hit it); `_await`/dynamic
   tags/`<show>` in update mode unaudited; static-HTML suppression + frame
   framing (the response is still a full document — the patch consumer only
   reads the fills; framing belongs to slices 3/4); MARKO_DEBUG pairing
   asserts (serialize section ids in update renders) not yet emitted.
2. **Persisted entry codegen** — **done** (see "Current state"): the
   `?update` entry kind (`persisted: "update"` + dom output), compiled merge
   functions, registry-shared signals/branch content, child dispatch via
   `?update` imports; the e2e imports generated entries. Deliberately
   deferred within this slice: merges cover text/html placeholders, dynamic
   attrs (whole-value class/style only — item-split class/style values are
   captured by the server but not merged), `<if>`/`<for>`, child tags, and
   scope values; `_await`, dynamic tags, `<show>`, and controllable inputs have no
   merge emission yet. The server-side branch guard (`serializeBranch & 2`)
   and the entry's structural-merge predicate
   (`isReasonDynamic(conditionRefs)`) are computed from different reason
   sets — aligned for pure request/state structure, unaudited for mixed;
   value-signal calls run synchronously mid-merge, so a mixed binding that
   also feeds request-derived structure could re-run a conditional against a
   half-applied patch (queued closures are safe; direct `_if` values are the
   edge).
3. **Client update runtime** — **core done** (see "Current state"):
   `applyUpdate` (patch-aware serialize context, `$global` merge, merge
   dispatch, queue flush) plus the fixture-harness `navigate()` step
   (`src/__tests__/utils/resolve.ts`, ssr handler in `main.test.ts`,
   `?update` bundling in `utils/bundle.ts`), which replaced the standalone
   e2e — the `persisted-update-navigate` fixture snapshots the full
   navigation lifecycle in debug and optimize. Still open for this slice:
   streamed frame parsing (updates are still full documents; the harness
   extracts `.r=[…]` fills by regex), entry-effect dispatch (update payloads
   carry no effect strings yet — fresh-subtree effects arrive with
   fragment-class content later), ready-channel gating of update chunks
   (loader work), and root pairing by `meta` frame (the harness pairs via a
   registered effect string against scope 1; the applier takes the live root
   explicitly).
4. **Integration** — **core done** (validated against marko-ecommerce in
   Chromium, dev mode AND the production build): `@marko/vite` resolves
   `x.marko?update` imports to update entries (`.update-entry.marko` kind,
   own lazy chunk, recursive child `?update` imports; persisted-gated), and
   **@marko/run owns the feature** (see "Current state"): plugin option,
   router update negotiation + route-verification backstop, wrapper-emitted
   client-router registration, `runtime/persisted.ts` (interception, apply,
   history/scroll, popstate, fallback ladder). The ecommerce app is reduced
   to `marko({ persisted: true })` plus a `PERSISTED=0` measurement
   middleware; its `npm run setup` git-links the marko/vite/run branches.
   The production pass (`vite build` + `npm start`) confirmed the
   id-consistency invariant end to end — optimized register ids match
   across the html/dom/`?update` compiles, and the wrapper's own dynamic
   `?update` import gives the entry its chunk with no manifest work
   (production update payloads: item 2.3 KB vs 12.5 KB document, search
   15.6 vs 66.5 KB, cart 0.2 vs 1.3 KB). **Build hash — done**: @marko/vite
   digests the shipped client files into the manifest (reserved `#build`
   key) and the linkAssets runtime exposes a call-time `buildId()`
   (importable via `virtual:marko-vite/link-assets`; undefined in dev,
   where run substitutes a per-process token). run's generated router
   stamps every persisted render with it (serialized as
   `$global.buildHash`), wrappers pass it to `register()`, update fetches
   present it back as `x-marko-build`, and mismatches 409 into the
   full-navigation fallback — validated by swapping the server bundle's
   hash under a live Chromium page (stale tab's next click full-navigates
   cleanly onto the new build). **Per-frame streaming apply — done** (see
   "Current state": `createUpdate` + the streaming router). **Cross-route
   navigation — done for shared-layout routes** (see "Current state": the
   content-hop swap; the generated client route table subsumed the
   manifest work — its loaders are plain dynamic imports the bundler
   chunks). **Fresh server-first subtree construction — done** (see
   "Current state": request-derived pages with awaited sections are swap
   targets, validated cart→item on the production build). Remaining in
   this slice: state seeding for fresh subtrees (pages deriving content
   from client-state computes over server-only data — the cart shape —
   currently fall back; needs `x-marko-from`/`x-marko-have` so the server
   serializes state only for subtrees the client will create fresh), and
   scroll/focus refinements (hash-fragment scroll after apply,
   `<a rel=external>` audit). The update wire's `new Function` frame eval
   also needs a CSP story (initial-render resume runs as inline scripts;
   updates eval — nonce-carrying script injection is the likely shape).
   New watch-list item from the await slice: navigating before the live
   page's own awaits resolve — the patch's body frame finds no live branch
   to pair with (sparse-skips), and the live page's still-pending promise
   later resolves with pre-navigation data; the fallback is probably
   "fresh-create the branch from registered content" (the `_if` fresh-branch
   machinery) or a forced reload when an unresolved boundary is patched.

## Example-app prototyping workspace

Sibling checkouts on the same branch name carry the integration:

- **marko-js/vite** — `persisted` plugin option plumbed into the compiler
  `baseConfig`, plus the `x.marko?update` update-entry module kind.
- **marko-js/run** — the run-owned feature surface (see "Current state"):
  `persisted` option, router update negotiation, wrapper-registered client
  router, `runtime/persisted.ts`.
- **DylanPiercey/marko-ecommerce** — linked against local `marko`,
  `@marko/compiler`, `@marko/vite`, and `@marko/run` tarballs (see its
  `PROTOTYPE.md` for regeneration steps); `vite.config.ts` enables
  `marko({ persisted: true })` and `+middleware.ts` keeps only the
  `PERSISTED=0` measurement opt-out (the run context _is_ `$global`, so
  the router-set flag is the render flag). Verified end to end in
  Chromium; payload measurements in `PROTOTYPE.md`.

## How to validate everything

```sh
npm ci                       # installs + patches babel (required)
npm test                     # full suite (~6m)
npm test -- --grep "persisted"    # persisted fixtures incl. the navigation
                                  # lifecycle (persisted-update-navigate)
E=designs/experiments/single-page-server-updates
PERSISTED=1 node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
PERSISTED=1 TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js  # persisted render
TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js              # non-flag render
```

The standalone e2e prototype (`$E/e2e.js`) is retired: the
`persisted-update-navigate` fixture covers the same lifecycle (resume,
client interaction, patch application, keyed reconcile, state survival,
no-effect-replay, reverse navigation) in both debug and optimize with
committed snapshots.

## Gotchas for the next contributor

- Harness commands must run **from the repo root**: the `~ts` register hook
  scopes to the working directory (running from elsewhere silently falls
  back to Node's native loader and fails on extensionless imports).
- Renders embed a random `renderId`; normalize it before diffing outputs.
- The harness runs the **debug runtime even for optimized compiles** (props
  like `#LoopKey` print debug names where prod emits `M`), and its marker
  byte counts are ~5 B/marker larger than production (default renderId `_`).
- Optimized register ids (`getTemplateId(opts, file, child)`) are assigned
  **sequentially in first-request order**, cached per `optimizeKnownTemplates`
  array identity — every compile of a persisted template (html, dom, and the
  `?update` entry) must share that array (or a `getTemplateId` option) or the
  update entry's registry lookups won't match the dom module's
  registrations. The fixture harness shares one config object; @marko/vite
  must do the same in slice 4.
- Generated harness artifacts (`*.cjs`, `*.min.js`, `out.*`) are gitignored
  and rebuilt by the README commands; `designs/experiments` is excluded from
  eslint/prettier/cspell like fixtures.
- The full mocha suite runs with `bail`; a single failure stops everything.
- cspell checks all `.md`/`.ts`/`.js` — add genuinely new words to
  `cspell.json` (several for this project already are).
