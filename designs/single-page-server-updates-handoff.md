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
   3½. [persisted-pages-cost-model.md](./persisted-pages-cost-model.md) — the
   optimization map now that the implementation is close: cost axes,
   the invariant inventory (existing + proposed), the ranked lever
   catalog, and the cross-app measurement matrix (ecommerce plus the
   docs/dashboard/feed/scale example apps).
   3¾. [persisted-pages-at-scale.md](./persisted-pages-at-scale.md) — the
   design options for the cost that grows with app size (per-template
   client JS): wire-delivered resumable fragments, the generic
   data-driven applier, render-graph dedup; recommendation
   ("server-only components are JS-free"), phasing, and the open forks.
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

The branch was **squashed to a single checkpoint commit** (2026-07-04)
right after the rebase onto `main` — the replayed intermediate commits
resolved conflicts toward the final design and were no longer individually
buildable, so the fine-grained history's value had degraded. The full
pre-squash history (including every commit hash this document cites) is
preserved on `claude/single-page-updates-status-tk3b8h-history`.

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
entry kind. `entry: "update"` with dom output runs the full dom
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

**Implemented — render-once contract** (superseding the earlier MPA-parity
treatment): `$global` and input/params (plus their derivations) are
deliberately the ONLY navigation-refreshable channels. Refs-less
non-foldable expressions (`new Date()`, impure calls, module state) are
computed at page load and persisted navigations never refresh them — no
markers, no captures, no merges — matching the client reactive model,
where nothing drives a refs-less expression and a CSR state update
wouldn't refresh it either (`persisted-update-volatile` fixture asserts
the contract; `getGlobalExprSources` in `references.ts` is the taint,
`$global` reads its only feeder). The earlier reload-parity behavior made
navigations MORE dynamic than client updates, paid spine markers and
payload captures for every refs-less hole, and split behavior from the
mixed case (`count && helper()` never refreshed) — dropping it removes
the seam: volatility inside a refs-bearing expression is undecidable, so
the contract is "if the server should refresh it, read it from `$global`
or input". Full-document fallbacks still re-render everything (uniform
divergence, previously split). The drop surfaced a real app break the
validation suite caught (search filter chips went stale): stable branch
sets — a `<for>`/`<if>` over a render-once value with request-derived
BODY content — previously participated in updates only via the volatile
taint on their upstream expression. Participation now keys off the
branch content too: `isRequestDerivedSerializeReason` widens the
`updateStructural` gates in `core/for.ts`/`core/if.ts` (state-driven
sets stay excluded), `trackGlobalReference` flags `hasGlobalReads` on
the section so direct `$global` reads feed `kBranchSerializeReason`
(the demotion equivalent of promoted-global closures), and the
request-derived part of the immediate branch reason threads to the
parent's marker so the reconcile reference node resumes
(`persisted-update-static-loop` fixture asserts the chip shape,
including a mixed statement re-invoking through the branch dispatch).
A dev-mode diagnostic for refs-less dynamic expressions in persisted
builds ("computed at page load; read
from `$global` if it should refresh") is the discoverability follow-up —
needs a severity/opt-out design so legit render-once values (footer
years) don't drown builds in warnings.

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
serialize in update renders — they are the payload), global-only
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
client content store + `x-marko-from` route-pair inclusion,
`x-marko-have` T2 pruning (CSS/asset delivery is covered by the module
graph — see the watch list).

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

**Implemented** (`marko-js/run` branch, `fix: tree-shakeable route-table
template imports`) + **bundle-size analysis correction**: the client route
table's `loadTemplate` loaders import template modules for side effects
only (registration), but a plain dynamic import retained every wrapper's
exports — and a wrapper's `$template` getter interpolates its layout's
template export, so the whole document-shell string rode into the shared
eager chunk. The loaders now use `import(...).then(() => 0)` (namespace
provably unused), which rolldown/rollup tree-shake: the shell and all
wrapper/layout template+walks strings drop from client bundles entirely
(−1.9 kB raw on the benchmark app; scales with real shell size). All four
browser suites stay green (registration side effects still run). The
fuller sourcemap-attributed decomposition of the persisted eager cost
(~31 kB vs 8.6 kB non-persisted on `/search`; registered renderer graphs
dominate, the applier is only ~2 kB of it) and the **slim hydration
entry** design sketch — defer the registration graph to the first
navigation's lazy `?update` load — replaced the outdated
"register-all-content retains the document shell" theory in
`agent-feedback/perf.md`.

**Attempted and parked** (the slim-hydration `?persisted` split) + **landed
enablers**: the full design from `agent-feedback/perf.md` was built and
validated a long way — an `entry: "persisted"` compile (the persisted
dom module WITH registrations, statically imported by the generated
`?update` entry), the main compile reverted to non-persisted retention so
hydration bundles tree-shake the server-driven graph, `_enable_branches`
emitted at module init (the walker defers branch visits until branches
enable; the old main modules enabled them via `_if`/`_for` construction,
which the slim main tree-shakes — element refs riding retained visits must
bind at hydration), and @marko/vite `?persisted` resolution. Every suite
and all 38 app browser checks passed, dev and production. Two findings
killed it as-landed:

1. **Chunk-graph hosting beats module retention.** Retention worked (the
   benchmark's `dom.mjs` contribution fell 2351→667 B after splitting the
   spread machinery out) but the eager total stayed ~31.5 kB: a module is
   hosted in ONE chunk, so any module mixing hydration-used and
   lazily-used exports (queue with `_enable_catch`, dom-writes with the
   spread/`_attr_content` machinery, controllable with its `_script`
   variants) gets eager-hosted together with the imports its lazy exports
   need — and the runtime shipping as one flat `dom.mjs` made the whole
   thing one module. Landed enablers that survive: the runtime now ships
   as **preserved modules behind the `dom.mjs` re-export facade**,
   declares **`"sideEffects": ["**/\*.marko"]`** -- compiled templates
rely on top-level registration side effects, so `.marko` files are
explicitly excluded; the runtime itself is import-side-effect-free
(verified: no runnable templates ship in the package, the Marko 5
compat file the translator bare-imports lives in the runtime-class
package, and all runtime-internal imports carry bindings). This alone
shrank a plain
non-persisted fixture page bundle 16.1→2.7 kB min — module bodies were
retained as potential side effects), and three **file splits by
phase** (spread/`\_attr_content`machinery out of`dom/dom.ts`into`dom/spread.ts`; `\_enable_catch`out of the queue into control-flow
behind`enableCatchPending`wrap hooks;`\_script_update`/`\_updating`out of the applier file into the queue). The remaining follow-up is
finishing the phase partition (controllable`\_script`vs`\_default`
   variants, control-flow's construction API) — mechanical now that the
   packaging supports it.
2. **Module-state duality is the real design constraint.** The register
   module duplicates the template's module scope, and duplicated _code_
   is benign but duplicated _state_ is not: `persisted-update-fresh-page`
   caught resume-wired subscribers living in the MAIN module's
   `client const subsByKey` while post-navigation registry resolutions
   (the register copy overwrites shared ids) invoked the REGISTER copy's
   `valueChange` — notifying the register copy's empty set. The app's
   suites happened to stay copy-consistent (fresh subtrees wire and
   notify through the same copy), so only the fixture's
   resume-then-navigate-then-interact ordering exposed it. The next
   attempt must make module-scope client state single-instance: the main
   module exports its module-scope declarations and the persisted entry build
   imports them (plus suppresses re-registration of main-registered ids —
   effect fns, change handlers — so registry resolutions always hit the
   main copies whose state resume wired). Until then, `?update` entries
   do not import a persisted entry and the main persisted compile keeps
   its registrations.

**API shape note** (2026-07-04): the artifact kinds moved onto the
compiler's `entry` axis alongside `page`/`load` — `persisted` is a pure
boolean feature flag and the two per-template artifacts compile with
`entry: "update"` (the `?update` merge program) and `entry: "persisted"`
(the `?persisted` render-graph module, formerly "register"). Prose here
uses the current names; commit messages on the history branch predate
the rename.

**Implemented** (attempt 2, `feat: slim hydration via ?register entries`):
the parked split above is **landed**, with both attempt-1 findings solved:

- **Single-instance module state.** Module-scope client statements
  (`MarkoScriptlet`, `static`/`client`) stay one-instance across the
  main/register pair: the main persisted dom compile exports each
  scriptlet's outer bindings, and the persisted entry compile replaces the
  scriptlet with an import of those bindings from the main module —
  side-effect-only statements are skipped entirely (the main module ran
  them at hydration). Persisted entry builds also never re-register
  main-registered ids: `writeRegisteredFns` keeps the function
  declarations (setups reference them) but skips the `_resume` calls, and
  effects compile through `_script_shared` (the `_script_update`
  skip-queueing-while-applying wrapper without the registration), so
  payload effect entries and change-handler resolutions keep hitting the
  copies resume wired. `persisted-update-fresh-page` (the fixture that
  caught the duality) passes with the split active, and a dedicated app
  probe validates the killer ordering — resume, navigate (register
  modules load), then a matched-page interaction whose
  `valueChange`→`subsByKey` notification must reach the resume-wired
  subscriber — in both production and dev.
- **Correction (stale-tarball artifact):** an earlier revision here
  claimed the split's total-JS cost deduped to ~free — that measurement
  ran against a stale installed tarball whose translator lacked the
  gates (the relink's npm cache kept an old same-version tarball; the
  packed dist must be verified after every relink, eg
  `grep -c isPersistedEntryBuild node_modules/marko/dist/translator/index.js`).
  With the split genuinely active the persisted entry modules cost **+7.3 kB
  raw total app JS** (51.4 vs 44.1 all-routes) — the render-graph
  duplication is real and intentional; the state seam fixes
  _correctness_, not bytes. All 38 browser checks plus the duality
  probes were re-validated against the real split build (production and
  dev). Mechanics unchanged from attempt 1:
  `entry: "persisted"` compiles the full persisted dom module (with
  registrations), the generated `?update` entry statically imports it, the
  main compile keeps only non-persisted registration reasons, slim mains
  emit `_enable_branches()` at module init (retained branch visits must
  process at hydration), and @marko/vite resolves `?persisted` mirroring
  `?update`. Suite 8371 passing with rendered output byte-identical; all
  38 app browser checks green.
- **The eager win landed** (`fix: register builds import child templates
via ?register`, naming since updated). The retainer was named by elimination: a fixture
  reproducing the app's suspect shapes (owner-chain href closures,
  page-level `_if_closure` over promoted `$global`) tree-shook its whole
  graph from main, so the retention had to be a real cross-module
  reference — and an unminified app build (`build.minify: false`) showed
  it plainly: the eager page chunk ended in
  `export { $walks, $setup, $template }`, imported by the **lazy**
  register/update chunk. Persisted entry builds imported child template
  render graphs (template, walks, setup, value setters) from the child's
  _main_ module; since a module is hosted in one chunk, the lazy chunk's
  use of those exports pinned every child's otherwise tree-shakeable
  graph into the eager chunks — and run's route wrapper makes every page
  a child tag, so it bit every route. Fix: `getChildImportPath`
  (`visitors/tag/custom-tag.ts`, also used by dynamic tags) points child
  `.marko` imports at `?persisted` in persisted entry builds, keeping circular
  self-references local; @marko/vite and the fixture harness already
  resolve arbitrary `?persisted` importees. Result: page mains are now
  fully slim in the real build (/search main region = one
  `enableBranches()` call, 7.7 kB → 698 B unminified), eager /search
  **21.2 kB raw / 9.7 kB gz** (was 31.5/13.5; non-persisted baseline
  8.6/4.5), /cart 15.9/7.3, /item 28.4/13.1 — and the two runtime-hosting
  follow-ups landed after the checkpoint brought /search to **19.1 raw /
  9.1 gz** and /item to **19.8 / 9.5** (catch machinery split into
  `dom/catch.ts`; controllable helpers split per kind). The
  `persisted-update-layout` fixture's eager client JS fell 96%. All 38
  browser checks + duality probe re-validated (production and dev);
  suite 8377 passing with non-persisted output untouched. Remaining
  eager gap is runtime hosting, not graphs: the controllable kind/phase
  split (qty input pulls the whole 11 kB event+controllable chunk) and
  `_enable_catch` living in `dom/control-flow.ts` (an `<await>`/`<try>`
  page eagerly drags the 20.6 kB control-flow+for+spread chunk for that
  one call) — both recorded in `agent-feedback/perf.md`.

**Implemented** (`fix: per-translate abort-signal ids` + shared compiler
caches): the `?update` entry compiles now share the whole build's compiler
`cache` (in @marko/vite and the fixture harness) instead of creating fresh
ones per entry kind. The cache stores the parse/migrate/analyze result and
every compile translates a clone, so one cache is designed to serve all
output/entry kinds of a file — analysis is identical across the persisted
modes (all truthy; the mode distinctions are translate-phase). The fresh
caches were papering over a real state leak the sharing exposed:
`$signal` abort-ids were allocated during translate into a module-level
WeakMap keyed by SECTION (a cached-analysis object that outlives
compiles), so a second dom-mode translate of the same cached file drifted
the ids (`$signal($scope, 0)` → `1`) — fixed by moving the allocation to
`createSectionState` (keyed off the current program, per-translate by
construction). Rule of thumb honored: analyze-phase state belongs on
cached objects (module WeakMaps keyed by section/binding), translate-phase
state belongs in `createSectionState`/`createProgramState`; an audit of
the other section/binding-keyed module maps found only analyze-phase
writes and idempotent pure memos.

**Rebased onto `main`** (2026-07-04): the branch replayed cleanly over
upstream's serialize-reason bitmask re-encoding plus the bug-bash/perf
push, with one explicit reconciliation commit on top of the replay
(design collisions are resolved there, not smeared through rewritten
history):

- Threaded serialize reasons now use upstream's encoding untouched
  (`1` = everything, packed number = pure-stateful group bitmask, record
  for dynamic groups). Persisted-ness is **render-wide state, not a
  threaded value**: the root no longer seeds `serializeReason`;
  `_serialize_guard` returns the group's raw bits OR
  `_persisted_reason()` (so every reason-carrying spine site serializes
  in persisted renders, and branch guards keep the `& 2` update bit),
  while `_serialize_if` masks bit 1 so record entries carrying persisted
  bits never masquerade as stateful. Non-persisted renders hit the
  upstream code paths exactly.
- Upstream's owner-from-resume-marker optimization is gated off under
  `isPersisted()` (update payloads carry no markers to link owners
  from); a finer-grained skip for purely state-driven branches is
  recorded in `agent-feedback/perf.md`.
- Upstream's held-effects-while-async-blocked fix skips update renders:
  frames apply atomically and the applier only runs effects for scopes
  created by the same frame (`Gen >= applyGen`), so effects must ride
  the frame that creates their scopes (caught by the fresh-page
  fixture's dead add-to-cart click).
- **Non-persisted size verification** (fixture corpus dom bundles,
  HEAD vs upstream `main`; every value byte-identical to the
  pre-rebase branch, i.e. the rebase itself added nothing): 163
  fixtures shrank (−30.9 kB min total; identifier dedup + tree-shaking
  from the preserved-modules/`sideEffects` packaging), 272 grew
  slightly (+6.3 kB total, max +110 bytes single), and 35 `lazy-tag-*`
  fixtures show +48.1 kB that is chunk-accounting redistribution (a
  previously separate, uncounted shared chunk now counts inline —
  noted in the packaging changeset). Benchmark apps (user/runtime
  split, HEAD vs `main` — the split's runtime classifier had to learn
  the preserved-modules dist layout, `scripts/sizes.ts` `manualChunks`
  matched only the old single-file `dist/dom.mjs` id and silently
  collapsed the runtime bucket into `user`): **user code is
  byte-identical to `main` in every app** (counter 161, hydrate 80,
  comments 646, comments-hydrate 115 min bytes — zero drift); the
  runtime bucket carries the real cost: counter +36 min / +20 brotli,
  comments +120 / +56, hydrate variants +9 / +5..8 — the
  persisted-enabling indirection in shared runtime modules (queue
  wrapper hooks etc.) that survives tree-shaking. The full runtime
  surface (`*`) +1,740 min / +675 brotli is the persisted machinery in
  the published bundle, which tree-shakes out of non-persisted apps
  (as the user-bucket numbers prove).

**Implemented** (`fix: nested branch participation…` + the cost-model/
example-apps round, 2026-07-05): the first cross-shape evaluation pass —
[persisted-pages-cost-model.md](./persisted-pages-cost-model.md) (cost
axes, invariant inventory, ranked levers) plus three example apps in the
benchmark repo (`examples/{docs,dashboard,feed}`: hole-sparse content,
hole-dense tables, keyed-list growth) with a shared measurement runner
and Playwright smokes. Building them immediately caught three translator
bugs, all fixed with fixtures:

1. **Nested branch participation** (`util/references.ts`): non-immediate
   closures (a `$global`-derived const read two+ sections down — the docs
   sidebar's active link, the dashboard's chips in an `<else>` branch)
   compile to subscription sets, which update renders never invoke — so
   their request-derived sources never fed `kBranchSerializeReason` and
   the branches compiled without any structural participation (plain
   `forOf`, no branch lists — content went silently stale on
   navigation). Their request-derived sources now widen the branch
   reason, and participation propagates to ancestor branches (dispatch
   descends parent merge → branch list → content merge), in a separate
   children-first pass gated on `isPersisted()` so the mainline pass's
   `addSerializeExpr` order — and non-persisted output — is untouched
   by construction. Fixture: `persisted-update-nested-loops`.
2. **Structural signals guard their input during applies** (`core/for.ts`,
   `core/if.ts`): participating loops/conditionals now set the same
   `updateGuard` await computes use — the patch's branch list/outcome is
   authoritative, and a refs-less input (render-once module value, often
   behind a `server import`) invokes at fresh-branch setup with no
   upstream guard; without it the setup's undefined input reconciled
   away the branches the merge had just built (feed's chip row vanished
   on cross-route back-navigation). Pinned in
   `persisted-update-fresh-page` (tags row).

3. **Stable-set loop params are patch-delivered** (`util/references.ts`,
   follow-up round): a participating branch's params are
   patch-constructed — fresh subtrees fill from the branch list and
   captures, never by re-running the input expression — but params whose
   loop expression carries no sources (a stable/render-once set, often a
   `server import`ed nav list) classified render-once, so param-only
   holes (link labels, hrefs) never captured and fresh-constructed
   branches rendered them empty (feed's chip labels after a cross-route
   back-swap). Such params now taint request-derived with the same
   global-sources marker `$global` reads carry (markers/captures gated
   on the persisted flag, no value-signal serialization), flowed
   explicitly through aliases and downstream derived bindings (aliases
   share their root's sources object, and downstream sources resolve
   before participation is known — `addGlobalTaint`). State-driven sets
   stay excluded exactly as in the update-merge gates. Measured cost:
   only the four stable-set-loop fixtures churned — a text marker per
   branch hole in persisted documents (the continuation encoding absorbs
   most of it) and a few capture bytes per branch on matched-scope
   updates. The `persisted-update-fresh-page` tags row (param text
   through a derived const, param-only attr, `$global`-mixing class)
   pins the complete construction.

**Implemented** (`feat: fragment frames…`, 2026-07-06): **fragment
frames, phase 1 of [persisted-pages-at-scale.md](./persisted-pages-at-scale.md)**
— the spike that delivers a cross-route navigation's fresh subtree as
resumable HTML instead of client-side construction from registered
renderer graphs. `$global.persistedFragment` (with `persisted: "update"`

- seed mode — the run router would set it from the `x-marko-from`
  route-pair mismatch; that integration is not wired yet) makes the first
  content hop's branch render as a fragment: server-side, `_fragment`
  (html/writer) restores the update-mode chunk's `writeHTML` for the
  branch render and flips the serialization gates via `state.inFragment`
  (hole captures skipped, loops/conditionals fall back to the
  initial-persisted marker paths — brackets in the markup instead of
  branch fills; `_await` inside debug-throws), then emits the captured
  markup on the frame as an `Array.isArray`-discriminated
  `[anchorScopeId, accessor, markerPrefix, html]` entry (Chunk gains a
  `fragments` slot merged through append/flush beside effects). Scope
  data — state seeds, child links, loop keys, event wiring — still rides
  the ordinary fills in the same patch id space, and effect entries ride
  the frame as usual. Client-side (dom/update): the frame loop stashes the
  entry on its anchor's patch scope under reserved prefix `"P"`;
  `_update_dynamic` consumes it on renderer-id mismatch — `applyFragment`
  parses the markup detached, `walkFragment` (a sync-only port of the
  resume walker's visit processing) binds DOM refs onto the **patch
  scopes, which are stamped and join the live scope tree directly** (for
  fragment subtrees the patch scope IS the live scope; stamping
  self-pairs them so payload effects pass the `Gen >= applyGen` gate),
  then inserts at the hop's anchor marker, destroys the old branch, and
  swaps the branch bookkeeping (`setParentBranch`, orphan-bracket
  adoption, coarse `ClosestBranch` for bracket-less scopes). Two rules
  found the hard way, now load-bearing: **a fragment apply is a resume,
  not a merge** — the hop's merge dispatch is consumed with the entry,
  since patch/live sharing one object would collide walker-bound node
  refs with hole-value keys (`#text/0` is both) on this and every later
  frame's re-dispatch; and **branch boundaries must be runtime-owned** —
  the content gets empty text nodes at both ends because fragment edge
  nodes can be marker comments the runtime later consumes (a single-node
  `<if>` toggling on replaces its marker; the dangling `EndNode` sent
  `removeChildNodes` past the branch). Fixture:
  `persisted-update-fragment` (fragment in → effects run → same-route
  fine-grained fills into the walker-built scopes with ephemeral widget
  state surviving → fragment-over-fragment swap back). Follow-ups: run
  router integration, walker unification with resume.ts, and phases 2–5
  (generic applier, classification/graph dropping, possession echo,
  dedup). Changeset: `.changeset/persisted-fragment-frames.md`.

**Implemented** (same commit, 2026-07-06): **async boundaries inside
fragments — the two-frame model** (see
[persisted-pages-at-scale.md](./persisted-pages-at-scale.md) phase 1 for
the full mechanism write-up; fixture `persisted-update-fragment-await`
pins placeholder frame → body swap → same-route fills into walker-built
body scopes with ephemeral state surviving → teardown). The architecture
moved capture from a render-time html splice to a **chunk property
assembled at flush**: in an update render nothing else writes html, so
`Chunk.fragment` (inherited by forks; `_fragment` flags the capture run
and de-flags a fork at its end) makes the existing `consume` merge
assemble the fragment across forks, and `flushScript` diverts any
accumulated html into the entry keyed by `state.fragmentAnchor`. The
update-mode serialization gates moved from the `State.inFragment` counter
to `$chunk.fragment` — which is what lets async continuations (rendering
long after the capture window closed) keep fragment semantics.
`flushPlaceholder` gained an update+fragment path: render the placeholder
inline bracketed with the reserved `"!"` accessor token (walker binds it
to the try branch's `PlaceholderBranch`), leave the body detached with
its reorder id set to the try branch id; `endAsync`'s existing reorder
registration then feeds an update-mode branch of the reorder flush that
emits completed bodies as `[tryBranchId, 0, prefix, html]` boundary-body
entries plus their effects. The applier (`applyBoundaryBody`) walks the
markup and swaps it in where the placeholder branch sits. Also fixed
here: **update-delivered closures no longer re-execute during applies**
(`_closure_get` renders `_updating()`-guarded at the closure build in
`signals.ts`; subscription registration unchanged) — the pending-closure
effect for late boundary bodies otherwise re-rendered a closure whose
owner value is server-only, blanking a child input; this was a latent
bug in the fills-based fresh-await path too. v1 limits (real errors →
router fallback): bare awaits in fragments, catch-only async boundaries,
more than one pending await per placeholder body.

**Follow-up landed (same commit): uniform dispatch via `UpdateHole:`
keys.** The first rule above ("a fragment apply is a resume, not a
merge") was the symptom of a namespace collision, not a law: text/html
hole patch keys shared the node-accessor namespace, so on the shared
scope objects a merge mistook walker-bound node refs for hole values.
Hole keys now live in their own namespace
(`UpdateHole:<accessor>` debug, `"Q"` optimized — built in the
translator like `UpdateAttr:`, see `getUpdateHolePrefix`;
`_update_html` takes the key and the node accessor separately), and
the hop's merge dispatch is no longer consumed after a fragment
applies: merges self-apply idempotently into fragment subtrees (the
fragment fixture's mutation logs are byte-identical with dispatch on),
and later frames dispatch through the same path into fragment scopes —
the prerequisite for async boundary bodies. The async design (two-frame
model: placeholder bracketed as `PlaceholderBranch` in the fragment,
body as a second fragment entry swapped in by a placeholder-dismiss
apply path) is written up in
[persisted-pages-at-scale.md](./persisted-pages-at-scale.md) phase 1.

**Implemented** (`feat: run-router fragment integration`, 2026-07-06):
**cross-route navigations deliver fragments end to end.** @marko/run's
generated router sets `persistedFragment` alongside `persistedSeed` (the
`x-marko-from` route-pair mismatch), and the client router's frame filter
passes array entries through to the applier. Validated against the
ecommerce production build: 44/44 browser assertions + 8/8 under strict
CSP, all four example-app smokes green (docs/feed/dashboard 9/9 each,
scale 6/6) — including the async item page (placeholder frame + three
boundary-body frames), the state-seeded cart, POST/PRG flows, and
popstate. Three integration gaps the real app caught (fixed in marko,
each with fixture coverage): **positional-loop self-dispatch** — the
walker binds loop branch lists under the live `BranchScopes:` keys, so
the hop merge re-dispatched them as their own patch; keyless positional
branches can't self-match and the reconcile rebuilt every branch empty
from the registered template (`_update_for` now skips lists that are
already live — recognizable by a bound start node — and normalizes bare
single-branch resume-form lists); **dom-less scopes** — a tag with only
state and tag-variable wiring (the ecommerce `let-global`) renders no
markup, so no marker can reach its scope and it never got stamped (no
`$global`, effects silently skipped): fragment/boundary-body entries now
carry the ids of every scope serialized during capture
(`state.fragmentScopeIds`, recorded in `writeScope`/`writeScopePassive`)
and the applier stamps them; **tag-variable wiring** — `_var` skips its
resume-only wiring in update renders because fills-path fresh branches
wire their own via setup, but fragment subtrees are resumes with no
setup, so they now get the document-style serialized wiring
(`TagVariable` as a registered ref). The honest wire measurement and the
deferred-win framing live in the at-scale doc's phase-1 section: v1
fragments ship markup plus most fills, so cross-route patches are
currently heavier than fills-only (feed post 1025 vs 626 gz; search 6014
vs 3907); phases 2/3 (fill pruning, graph dropping) are where the bytes
come back.

**Decided** (2026-07-06, with measurement): **fork 1 (cacheable
skeletons) resolved against a skeleton-resource mechanism.** A skeleton
is the dom build's template/walks expanded per request (markers = walks
re-encoded per instance), and the factorized form is already delivered
and immutable-cached as route chunks. Measured with
`scripts/measure/template-split.mjs` (benchmark repo): construction
material (markup + walks string literals) is 14–25% of the per-template
JS bucket across ecommerce/feed/dashboard/scale (45% on the
content-heavy docs) — 75–86% is setup/signal/merge code, which is what
option B's generic applier deletes for server-only components. Scale's
entire 80-component construction dictionary gzips to ~1.1 kB. The
skeleton-resource design's hard parts (marker-id canonicalization,
structural cache keys, cold-navigation round trip) all evaporate in the
factorized formulation. Phase 2 re-scoped accordingly in the at-scale
doc; fragments settle into the cold-path/deep-server-only/content-shell
roles.

**Prototyped** (validated in `experiments/`, not yet real code): the
effects-not-replayed rule (double-bind detector). The wire-delivered
`templates` frame + `_wire_if`/`_wire_for` store prototype was superseded by
registry sharing (see above); a content store may still return in slices 3/4
for priming templates the client hasn't loaded.

## Backport map (mainline-first extraction)

The plan is to land every improvement that is not persisted-specific on
`main` FIRST, so the eventual persisted-pages review is only the feature.
The branch is squashed, so extraction is by change, not cherry-pick — this
list is the guide (pre-squash commits live on the `-history` branch).

**A. Pure mainline improvements (backport first, in this order):**

1. **Runtime packaging** — `scripts/bundle.mts` preserved dist modules
   behind the `dom.mjs` facade, `package.json`
   `"sideEffects": ["**/*.marko"]`, and the `scripts/sizes.ts` runtime
   classifier that understands the preserved layout. This is where the
   measured non-persisted wins live (163 fixtures shrank, −30.9 kB min
   corpus-wide; hydrate benchmarks −30 brotli) and it is the prerequisite
   for hosting granularity to exist at the package boundary at all.
   Honest costs: tiny min regressions on some pages (max +110 B observed),
   and the lazy-tag fixtures' sizes.json show a +48 kB _accounting_
   redistribution (a previously separate uncounted chunk now counts
   inline).
2. **Runtime module splits** (each benefits any code-split or lazy-tag
   app; validated behavior-neutral — non-persisted fixtures byte-identical):
   - `dom/spread.ts` extracted from `dom/dom.ts`;
   - the catch split: `dom/catch.ts` (`_enable_catch`, `renderCatch`,
     `handlePendingTry`), `setConditionalRenderer` moved to `dom/scope.ts`,
     and the `enableCatchPending` wrap hooks in `dom/queue.ts` — mainline's
     `<load>` entries import `_enable_catch` and currently pin the whole
     branch-construction module eagerly, the identical pathology we fixed
     for persisted mains;
   - the controllable per-kind split (`controllable-input-value` /
     `-input-checked` / `-select` / `-open` / `-shared`) — pays wherever
     chunks straddle kinds (eager text input + lazy select); ~neutral for
     single-chunk apps where plain tree-shaking already drops unused kinds.
     Extraction caveat: `dom/queue.ts` on this branch mixes the neutral
     `enableCatchPending` hooks with persisted machinery
     (`_script_update`/`_script_shared`/`_updating`) — take only the hooks.
3. **Compiler/translator hardening** (behavior-neutral on main by
   construction — zero non-persisted snapshot drift here):
   - `$signal` abort-ids allocated via `createSectionState` instead of a
     Section-keyed module WeakMap (translate-phase state must not live on
     cached-analysis objects);
   - `addReadToExpression` resolving the canonical (merge-target) extra so
     reads recorded after a `mergeReferences` cannot split an expression's
     references (today only promoted `$global` reads trigger it, but the
     merge contract is general);
   - the empty-child-setup proof check interplay fixes if any surface
     during extraction.
4. **Misc**: mainline-relevant `agent-feedback/` entries (dx/perf/bugs
   items not persisted-specific), cspell additions riding the above.

**B. Persisted-specific (the feature review proper):** the serialize
spine/value gates and `_persisted_reason` family, `$global` promotion,
the update-render writer mode (G1–G5), `entry: "update"`/`"persisted"`
kinds and their codegen, `dom/update.ts` applier, controllable
capture/merge and option-value capture, the register/slim-hydration
gates (`isPersistedEntryBuild` paths, scriptlet export seam,
`_enable_branches` emission, `getChildImportPath`), the persisted
owner-skip gate in `core/if.ts`/`core/for.ts`, the pure-global `_or`
setup-fold (global promotion only exists under persisted), the
`persisted-*` fixtures and harness entry kinds, and the config surface.

**Gray zone, resolved toward B:** anything gated on `isPersisted()` even
when the mechanism looks general — it cannot change main's output, so
backporting it early buys nothing and splits review context.

### Follow-up (mainline): vite-owned side-effect policy — **implemented**

Library authors do not declare `sideEffects` for their packages to
tree-shake well in Marko apps: `@marko/vite` owns the policy (landed on
its branch as a standalone backportable commit; the
`browser-side-effect-imports` fixture pins bare-kept/lib-init-dropped in
its build snapshot, and the app's `client-init` check covers the sticky
case end to end under the policy). Mechanism — validated empirically against
the app's bundler (rolldown-vite; plain rollup identical): a plugin
`resolveId` may return `{ id, moduleSideEffects }`, which overrides
package.json per module. The sticky case is explicit side-effect imports
from templates (`client import "./client-init"`), and it resolves because
the plugin sees each template's compiled output:

1. The transform records each compiled marko module's side-effect-only
   import sources (production client builds only — dev never
   tree-shakes; the compiled output is babel-generated so bare imports
   match a fixed shape, and a false positive only marks a module
   side-effectful). No compiler metadata was needed.
2. `resolveId` composes the policy around the existing marko resolution
   (entry queries, tag imports): for template importers, bare-imported
   sources are side-effectful (author intent, per import site —
   CSS/assets are bare imports, so they ride this), `.marko` targets keep
   their registration side effects, everything else defaults pure.
3. Non-template importers miss the map on a single lookup — JS-to-JS
   semantics (app polyfills, library-internal bare imports) keep bundler
   defaults, so the policy cannot break code outside template import
   sites.

Scoping to `.marko` importers (rather than a truly global "only marko
files have effects") is deliberate: a global policy would drop JS-to-JS
bare imports like polyfills in plain entry files. Template boundaries
are where Marko apps reach library code, so the relief lands where the
bloat is. The runtime package's own `sideEffects` declaration stays (it
serves non-vite consumers and is simply accurate). Semantics change to
document when implemented: named-but-unused imports from templates
become droppable even from packages that declared themselves
side-effectful — effects from a template must be bare imports.

## Decision log (all settled; rationale in the linked docs)

| Decision                                                                                                                                                                                                                                                                     | Where documented                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Navigation = new `input` + `$global` to the root; `<let>` state preserved by existing `Gen` semantics                                                                                                                                                                        | design doc, "The core model"                         |
| Wire format A1: the existing resume fill format, patch-space ids; A2/A3 rejected on measurement                                                                                                                                                                              | proposals doc, "A. Wire format"                      |
| Scope pairing: compiled top-down tree merge; wire addressing rejected; id-order pairing unsound under async                                                                                                                                                                  | design doc, "Scope pairing"                          |
| Persisted entries B2: compiled merge functions; B1 tables superseded once control-flow merges collapsed into existing `_if`/`_for_of` signals                                                                                                                                | proposals doc, "B." + "Hardening"                    |
| Placement-only: no server compute ships; derived values arrive computed                                                                                                                                                                                                      | design doc, "The parallel update entry"              |
| Sparse merge semantics (absence = unchanged); presence checks mirror server guards; per-kind helpers make them byte-neutral                                                                                                                                                  | proposals doc, "Sparse vs dense"                     |
| Effects never replay for matched scopes; mount effects only in fresh subtrees; dependency-driven re-runs ride the reactive graph                                                                                                                                             | proposals doc, "Effects on update"                   |
| Branch markup wire-delivered (`templates` frame), sourced from the HTML output under the flag, deduped per response, idempotent client store                                                                                                                                 | proposals doc, "Spike: wire-delivered branch markup" |
| Guard-split lattice (implemented)                                                                                                                                                                                                                                            | this doc, "Current state"                            |
| `sideEffects`: the runtime package declares its own modules pure (`**/*.marko` carve-out); the library-author burden is lifted by a planned `@marko/vite` policy instead of per-package declarations — see "Follow-up: vite-owned side-effect policy" under the backport map | this doc + the app's `client-init` check             |
| `@marko/run`: per-route wrapper templates rendering a shared dynamic-tag shell; code splitting + lazy-load machinery preserved via ready channels                                                                                                                            | design doc, "@marko/run integration"                 |
| Payload tiers: T0 reload / T1 stateless-cacheable / T2 hint-pruned; build hash gates everything                                                                                                                                                                              | design doc, "Payload tiers", "Fallback"              |

## Open questions / watch list

Consolidated from both docs, plus two items found during implementation that
live only here so far:

- **Fragment-first same-route dynamic swaps degrade to full navigation**
  (`persisted: "fragments"`, the mode @marko/run compiles with): a dynamic
  tag whose renderer changes in a same-route update (eg
  `<layout content=$global.tab === "a" ? A : B/>` driven by a query param)
  has no fragment entry and no registered renderer to construct from, so
  `_update_dynamic` fails the apply into the router's full-navigation
  fallback — loud MPA behavior, never a stale branch. Conditionals
  (`<if>`/`<for>`) over the same content stay fills-path and fine-grained;
  phase 4's possession echo (fragments for client-missing structure) is
  the eventual fix. Plain `persisted: true` builds keep the registered
  fills-path replay.
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
- `$global` demotion — **implemented** (2026-07-05; replaced the earlier
  binding promotion). `$global` is not qualitatively special except that
  its fresh values exist client-side after a navigation; with the
  render-once contract above it is the one expression-level
  navigation-refreshable channel:
  - No bindings. `trackGlobalReference` sets a canonical-extra
    `readsGlobal` flag on the owning expression (syntactic, at analyze);
    `getGlobalExprSources` turns it into the request-derived `global`
    taint, merged WITH tracked ref sources (`getSerializeSourcesForExpr`)
    so mixed state∩global expressions keep both dimensions. Markers,
    reason threading, and update-merge gates key off sources as before.
  - Update payloads always carry the `serializedGlobals` partial;
    `applyScopes` `Object.assign`s it onto the live `$global` before
    section merges dispatch (pre-existing applier order — no new
    runtime).
  - Mixed `state ∩ $global` statements re-run client-side: the emission
    sites (attrs, class/style, placeholders, content/text-content attrs)
    record them (`addUpdateGlobalsStatement`, live nodes cloned at
    program exit before `writeSignals` rewrites them); the `?persisted`
    entry registers a per-section `($scope) => () => {…}` under
    `…/update_globals`, reads finalized to scope reads
    (`finalizeRenderStatements`); the `?update` entry invokes it via
    `_update_signal` unconditionally at the end of the section's merge
    (globals are always sent — absent-means-unchanged doesn't apply).
    `persisted-global-reads`' final navigation (tag cleared while
    `count` holds client state) is the fixture guard; the chip
    active-state checks in the app validation suite are the behavioral
    guard.
  - Fallout that deleted: `stripOwnGlobalRefs`, the `_or` global pending
    exclusions, `isGlobalBinding`/global-binding paths, global closure
    shapes, per-key `$global_*` value merges in `?update` entries.
    Compiled persisted fixtures shrank (eg `-global-reads` page.mjs
    190→171 B brotli, update.js 965→892).
  - Deliberate deviations/residuals: pure-`$global` holes KEEP their
    `_hole_value` captures for now (the globals partial could replace
    them — a byte optimization, not correctness; remove later if
    profiling says so). Mixed statements inside spread attrs and
    controllable values are NOT collected for re-invocation (recorded in
    `agent-feedback/bugs.md` with the other controllable/spread gaps).
    Mixed structural conditionals stay on the reason-set alignment
    watch-list below. Markers themselves remain — they are the patch
    addresses; marker cost on the app measured +16.4%/+53.4% gzip
    (item/search) at this point in the branch — since reduced to
    +8.6%/+19.1% by the continuation encoding (see the marker-cost
    entry below); the app has no refs-less holes, so the render-once
    drop was marker-neutral here (its payload captures did shrink).
    Per-key suppression stays REJECTED (`$global` carries user-defined
    arbitrary keys; stale-hole failures are silent).

- CSS/asset delivery — **verified covered, no new machinery** (2026-07-05).
  The router awaits the `?update` entry import (and `?persisted` template
  import cross-route) before applying any frame, and the entry graph
  carries the page's CSS: the persisted dom program imports the template's
  `styleFile`, so vite delivers it as a chunk dependency — `<link>` +
  preload-await in prod builds, style injection in dev. Route-scoped CSS
  is therefore applied before swapped-in content paints, in both modes.
  Locked in by `src/routes/item/$id/item.css` in the benchmark app (exists
  solely as the regression surface) and the cross-route suite's computed-
  style check (40 checks total). "CSS/asset frames" as a wire feature is
  dropped from the plan — the module graph already sequences delivery.

- Document `<head>` sync — **audited + fixed** (2026-07-05): head attr
  holes (`<meta>`/`<link>`) already rode the attr capture/merge path
  (element location is irrelevant to the machinery), but text-only tag
  content (`<title>` via `_text_content`) had neither capture nor merge —
  titles went stale across navigations. Update renders now capture the
  whole computed text (`buildTextContentHoleValue`, reserved
  `textContent` pseudo-attr key; `recordTextContentUpdateMerge` reuses
  the attr merge shape) — `persisted-update-title` fixture (the snapshot
  harness ignores `<title>`, so it reflects the live title into a
  visible `<output>`), plus document.title assertions in the app's
  cross-route suite (42 checks). Still open: `<link rel=preload>`-style
  document hints never re-emit on navigations, and dynamic `content=`
  attrs (renderer values — unserializable) have no update path (they
  belong with the fragment `templates` frames work).

- CSP — **frame application covered** (2026-07-05). Update frames are JS
  expressions (fills include closures) — the same content SSR resume runs
  as inline scripts, which already carry `$global.cspNonce`. The run
  router probes eval once (`new Function("")`); under a CSP without
  `unsafe-eval` it executes each frame as an injected script element
  instead — trusted under `strict-dynamic`, or via the page's own nonce
  (the IDL property stays readable after browsers hide the attribute) —
  and if injection is blocked too, the first apply throws into the
  full-navigation fallback. Costs one `script-src:eval` violation report
  per session (the probe) — sites with report-uri will see it.
  Validated: `validate:csp` in the benchmark app serves everything under
  `script-src 'self' 'nonce-…'` via a `CSP=1` middleware (the run context
  IS the render's `$global`, so the nonce plumbs straight through) — 8
  checks including an exact assertion that the probe is the only
  violation. Dev servers inject HMR scripts without nonces, so the CSP
  suite is production-only.

- `x-marko-have` T2 pruning — **analyzed, design decision needed**
  (2026-07-05). Payload anatomy on the app (15.7 kB same-route `/search`
  frame): the serializer's backrefs already dedupe intra-payload strings;
  scope-0 globals and captures are small; the bulk is keyed loop branch
  subtrees (50 product cards), which overlap heavily across filter
  toggles — the real T2 win. The naive "client digests what it has" is
  a dead end (the client holds live objects, not serialized bytes).
  Recommended scheme — server-stamped branch digests, client echo: the
  server digests each keyed branch as it serializes and ships the digest
  with the branch (~10 B); the client records loop-accessor → key →
  digest from applied patches and echoes them (bounded, same-route only)
  in `x-marko-have`; on digest match the server emits a tombstone
  (`{M:key, S:1}`) instead of the branch subtree. The hard part is
  digest stability: serialized branch bytes contain patch-local scope
  ids and backref-dependent string encoding, so the digest needs a
  canonical form — either a per-branch sub-serialization with normalized
  ids (second serialize pass, CPU) or a structural value hash over the
  pre-serialization scope data (cheaper; needs stable hashing of values
  including registered ids for functions). Cache fork to decide:
  echoed digests fragment cache keys per client, so per the design doc
  this is per-route policy, default-on only for uncacheable responses.
  The complementary cheap variant (compiler-emitted param-source deps ∩
  changed URL inputs, pruning provably-unchanged layout sections) has
  low yield on content-heavy pages but no cacheability cost. Entry-side
  dead value merges for reason-less bindings are already pruned (this
  round). Decide the canonicalization approach + policy surface before
  implementing. Update (at-scale design round): the fragment-vs-fills
  decision no longer depends on this — a binary structural possession
  echo suffices (see persisted-pages-at-scale.md, prior art) — so T2
  digests are purely the matched-content dedup optimization, and only
  the cache-policy fork is shared.

- Marker cost — **measured; continuation encoding landed; remaining
  levers designed** (2026-07-05). Anatomy of the persisted initial-render
  delta on the app's worst page (`/search`, 50 hole-dense cards, was
  +54.4% gzip): node markers 201→806 were 82% of it — persisted holes
  mark densely and consecutive markers usually share a scope id, so the
  scope id was the redundancy. **Landed**: same-scope continuation form —
  `_el_resume` keeps a per-chunk run register and emits `<!--M_* b-->`
  (scope id omitted) when it matches; the resume walker mirrors the
  register per flush. Two safety constraints shaped it, both now load-
  bearing invariants: (1) _interleave bracketing_ — async/reordered
  content splits chunks (fresh register ⇒ full form) and branch markers
  bracket every structural boundary, so the writer resets its register at
  each branch-marker write and the walker resets on every non-Node visit;
  (2) _inline-lookup key space_ — the inline walker registers every
  marker comment by post-symbol payload in the same lookup the reorder
  runtime resolves anchors from, and optimized accessors are numeric, so
  a bare continuation (`M_*2`, key `2`) clobbers reorder anchor `M_!2` —
  the HierarchyRequestError only optimize builds hit. The continuation
  payload therefore leads with a space (key `" 2"`, disjoint by
  construction; +1 raw byte). Result: `/search` +54.4% → **+19.1%** gzip,
  `/item/2` +16.4% → **+8.6%**; all 44 + 8 (CSP) app checks pass; the
  walker's parsing costs ~+18 brotli on every app's shared runtime
  (persisted or not) — flagged, accepted for now. Remaining levers, in
  measured order: (a) the resume-script spine is now the dominant
  residual (+2.5 kB raw on `/search`: owner refs 32×, loop keys 60×,
  captures) — pruning it means deriving owners/keys from document
  structure, a serializer change, not a marker change; (b) full node-
  marker removal (walk-derived addressing — persisted dom output already
  compiles walks that could locate holes positionally) is now only worth
  ~−0.5 kB gzip on `/search` and requires the update applier to trust
  compiled walks against a document it didn't render — poor value now;
  (c) branch/separator noise is negligible. Recommendation: stop here on
  markers; spine suppression is the next real win and belongs with the
  serializer work (x-marko-have digests touch the same code).

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
   `?update` entry kind (`entry: "update"` + dom output), compiled merge
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
   (production update payloads, re-measured post-render-once-contract via
   `payload-probe`: item 2.4 KB vs 12.5 KB document, search 16.1 vs
   66.5 KB, cart 0.3 vs 1.3 KB — the render-once drop removed refs-less
   hole captures from payloads). **Build hash — done**: @marko/vite
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

## Maintainer-review triage (2026-07-06)

Five review items, with verdicts and what landed immediately:

1. **`_updating()` call → live-binding read** — **implemented.**
   `updating` was already an exported live `let` internally
   (`dom/queue.ts` — internal readers like `_script_shared` used it
   directly); the call wrapper existed only for compiled output.
   Compiled guards now import the binding itself
   (`export { updating as _updating }`; guards emit `if (!_updating)`),
   which rollup collapses to a bare module-variable read in bundles.
   Deliberately **not** merged with `isResuming`: that flag marks the
   one-time document-resume window and gates controllable
   pre-hydration-edit detection (`hasChanged`/`defaultChecked`
   heuristics); the update flag marks per-apply windows and gates
   compute skipping. Unifying them would run resume-only heuristics
   against branches freshly built mid-session.
2. **Production error-message bytes** — marko's dom runtime was already
   compliant: every throw/warn is `MARKO_DEBUG`-gated (directly, via
   ternary message, or via debug-only callers), so production builds
   carry no message strings. The gap was run's client router
   (`runtime/persisted.ts`), whose two protocol-failure throw messages
   shipped to production; they are now `import.meta.env.DEV`-gated (the
   pattern run's generated router already uses). The single
   `console.warn` fallback diagnostic stays in production — one string
   per app, and it is the only signal that navigations are silently
   degrading to full loads.
3. **Client route matching: inline trie instead of regexes** —
   **implemented** (run's `feat: inline trie client matcher +
route-index identity`). `writeRouterVerb` — the server's ranked
   segment-trie emitter — was generalized to take a `terminal`
   callback, so the client matcher (`renderRoutesClient`) is now the
   _same_ emitter over the page routes: client and server cannot
   disagree on ranking within a build (the 409-divergence class is
   gone, not just caught). `match(pathname)` returns the route-entry
   tuple directly; the table entry became `[index, loadTemplate,
loadUpdate]` (was `[pattern, …]`), and `patternToRegExp` /
   `matchRoute` / the pattern strings dropped out of the client bundle.
   Route identity is now `(buildHash, route.index)`: `x-marko-route` /
   `x-marko-from` carry the index (a `route.i` baked beside each server
   match object, verified alongside the build hash), and `register()`
   takes the wrapper's own index. Non-persisted router output stays
   byte-identical — the match-object `i:` is emitted only under
   `persisted`.
4. **`"key" in patch` guards / fully-known patches** — agreed, and it
   is the compiled-dispatch face of the wire-keys problem. The guards
   exist because one merge function serves every patch shape for its
   template: value-pruned same-route patches, seed-mode cross-route
   patches, and streamed frames (the root merge re-dispatches per
   frame, so early dispatches see await-body keys missing). Forcing
   every key present would trade wire bytes (the pruning levers) for
   the guards. The real fix is the keyless region-ordered payload
   (at-scale doc, option B refinement): once values arrive positionally
   per section in a declared order, presence is structural, the guard
   lines _and_ the key strings (~24% of patch bytes) die together —
   fold this item into that lever rather than a separate pass.
5. **Infrastructure riding user-visible surfaces** — per surface:
   - `$global.buildHash` (+ `serializedGlobals.buildHash`): **done with
     item 3** — moved off the user namespace onto the internal `"~run"`
     serialized-global key (the client router reads it back at register
     time and presents it as `x-marko-build`). The typed
     `Context.buildHash` field is gone; codegen writes `context["~run"]`
     / `serializedGlobals["~run"]`.
   - `marko-run:navigate`: **keep, it's a real public API** — the
     ecommerce app's `let-global` tag depends on it to re-sync client
     mirrors of `$global.data` after PRG updates, and analytics wants
     the same hook. Needs documenting, not hiding.
   - `__MARKO_RUN_PERSISTED__`: not framework infra — the ecommerce
     app hand-rolls this vite define. The improvement is for run's
     plugin to provide it officially (e.g.
     `import.meta.env.MARKO_RUN_PERSISTED` via `config().define` +
     shipped type augmentation) so apps can compile-gate
     persisted-only wiring without their own plumbing.
   - `$global.persisted` / `persistedSeed` / `persistedFragment`:
     **done — off `$global` entirely.** The render mode is a per-render
     option, not request data, so it rides `render()`'s second argument
     (`render(input, { persisted: { update, seed, fragment } })`) rather than
     `$global`. `RenderOptions` is a generic bag (future render options extend
     it without another signature change); the html template unwraps
     `options.persisted` into `RenderState`, which keeps it as the source of
     truth (a Boundary reset rethreads it) with the hot-read `update` / `seed` /
     `fragments` flags derived from it. `context.persisted` stays the
     public/middleware surface (opt-out, response-init choice); run's `render()`
     folds the post-middleware flags into the option. The test harness extracts
     the same option from fixtures' ergonomic flags (`persistedModeFrom`), so
     fixtures stay readable, `$global` carries zero framework keys, and
     snapshots are byte-identical (the mode never serializes). run types against
     the marko-5 ambient `Marko.Template` (whose `render` overloads are
     stream/callback), so it passes the option through a narrowed local
     signature. 8499 marko tests + the ecommerce browser suite pass unchanged.

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
  Chromium; payload measurements in `PROTOTYPE.md`. The repo also
  carries four additional example apps under `examples/`
  (docs/dashboard/feed — hole-sparse content, hole-dense tables,
  keyed-list growth — plus `scale`, an 80-component design-system app
  isolating the component-count axis) with a shared measurement runner
  (`scripts/measure/`, including sourcemap attribution splitting fixed
  runtime from per-template JS) producing the cost-model matrix:
  document overhead, update payloads, client JS (persisted vs
  `MARKO_PERSISTED=0` baseline builds), and per-app Playwright smokes.

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
