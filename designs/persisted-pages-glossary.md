# Persisted pages: glossary

The blessed vocabulary for persisted pages. Wire grammar lives in
`persisted-pages-wire-format.md`; the system shape lives in
`persisted-pages-architecture.md`.

## patch

The payload for one enhanced navigation: a newline-delimited frame stream
produced by a stateless render of the target route and applied to the live
page. It is not a document diff.

Private render options carry the required target `descriptor` plus an optional
patch `{ fromRoute, targetRoute, have?, source? }`. `have` and `source` appear
together after request validation. They live in `common/types.ts` and
`html/writer.ts`.

## frame

One newline-delimited JavaScript array expression in a patch. It can contain
scope fills, effect entries, fragment entries, boundary-body entries, ready
batches, and one possession-metadata string. Each accepted frame applies
atomically; later frames extend the same patch-local scope space.

Frames are produced by `html/writer.ts`, executed by the `patch` consumer in
`dom-persisted.ts`, and split from the response stream by `@marko/run`.

## persisted entry

The `?persisted` virtual client entry. It combines the deferred client render
graph with the compiled patch merges and exports the `patch` factory used by
the router. Lazy children load their own `?persisted` entries, so their render
and merge registrations arrive together.

There is no separate update entry. Emission lives in
`translator/visitors/program/update.ts`; assembly lives in
`translator/visitors/program/index.ts`.

## update

The compiled merge programs that apply sparse patch data to live scopes, plus
the `_update_*` runtime handlers they dispatch through. An absent patch key
means unchanged. `translator/util/update-merges.ts` records the merge plan;
`dom/update.ts` and `dom/update-merges.ts` apply it.

“Patch” names the render mode and wire payload. “Update” names the merge
programs, predicates, and runtime handlers.

## fragment

Structurally divergent content delivered as resumable HTML. A fragment entry
carries markup, resume markers, and the anchor identifying the branch it
replaces. The applier parses and walks it, binds its patch scopes, verifies the
anchor, and swaps it into the live page.

Fragments keep divergent construction on the server. Dynamic-tag hops,
request-derived `<if>` branches, new keyed `<for>` items, and native-tag
branches use the same mechanism. See `_fragment` and `writeFragmentEntry` in
`html/writer.ts`, and `dom/update-fragment.ts`.

## possession / have token

The opaque server-issued value carried by `x-marko-have`. It represents the
server-owned structural facts the client will have after an initial document
or an accepted patch frame. The client stores, forwards, and replaces this
value without inspecting it.

The server validates and decodes the source token, compares those facts while
rendering, and emits the target token. Missing, malformed, or oversized tokens
degrade to authoritative fragments, never a guessed merge.

Initial documents assign the token to the render runtime’s `have` property.
Patch frames carry `~=<token>` for a full replacement or
`~+<base36-prefix>.<suffix>` when a shorter prefix delta is possible. The
first accepted frame must carry a full replacement.

The codec is `html/persisted-token.ts`. Its direct RFC `tchar` format uses
route descriptor ordinals, VLQ integers, grouped loop presence facts, compact
numeric key sets, and token-local string interning. `PersistedPossession` is
the server-only decoded shape between the codec and writer, not a wire format.

## descriptor

A route-local server dictionary tuple `[sites, renderers]`. The page server
entry exports it as `__marko_persisted_descriptor`; Run requires the rendered
route's descriptor and pairs a live route's `source` descriptor only with a
valid `have` token.

Descriptors let the token encode common site/renderer facts as ordinals while
remaining opaque to the browser. They are assembled from compiler analysis
metadata in `translator/visitors/program/index.ts`.

## site

A build-stable structural location that can diverge: a dynamic-tag hop, a
request-derived `<if>`, a request-derived keyed `<for>` occurrence, or a
pending `<try>` boundary. Site ids come from the compiler’s existing analysis
and resume-id contract (`getUpdateSiteRegisterId` / `getResumeRegisterId`) and
are collected into the route descriptor.

Runtime scope ids are not site ids. Scope ids can drift between document and
patch renders; site ids remain stable across the independently compiled HTML
and persisted outputs.

## hop

A dynamic-tag site specifically (`<${dynamic}/>`), including layout-content
handoffs. It is the point at which a subtree renderer is chosen and a common
cross-route divergence boundary. Other structural locations are sites, not
hops.

## spine

The addressable resume material an initial persisted document carries so a
future patch can find the live page: node markers, scope identity,
owner/branch links, and structural site data. Spine and serialized value are
separate compiler decisions.

The gates live in `html/writer.ts` (`_serialize_guard`, `_persisted_reason`,
and `_el_resume`) and the corresponding translator analysis.

## seed

First-render state for a branch the client creates during an apply. A seed can
depend on server-only expressions, so it is the branch’s authoritative initial
value. `_update_seed` applies it only to scopes created by the current apply;
matched scopes retain live client state.

## branch

Marko’s existing unit of structural life: a scope with start/end nodes, owner,
and parent-branch links (`BranchScope`). Fragments and boundary bodies create
ordinary branches; persisted pages do not introduce a second branch model.

## scope fill

A serializer callback such as `_=>[...]` containing sparse partial scopes in
the patch-local id space. Slot zero is the first scope id, numbers advance it
by deltas, objects extend the current scope, and scope `0` carries `$global`
partials. The patch root id `1` may be represented by an array hole.

The grammar is written by `html/serializer.ts` and consumed by
`dom/update.ts`.

## hole

A request-derived expression value captured by a patch render. Text holes use
`PatchHole:` (`Q` optimized), unsafe HTML uses `PatchHtml:` (`R`), and
attributes and controllables use `PatchAttr:` (`N`). Their discovered handlers
register with `_update_scopes`, keeping unused handler kinds tree-shakable.

Holes are withheld inside fragment captures because their values are already
baked into the fragment markup.

## boundary body

A pending `<try>` boundary’s resolved body delivered as
`[branchId, 0, prefix, html, scopeIds?]`. It may follow a fragment containing
the placeholder or update a placeholder proven by the source token. The `0`
accessor distinguishes it from an ordinary fragment entry.

## epoch

The navigation counter that fences async output. Starting an update advances
the epoch; persisted reorder code captures it and drops older document-stream
swaps after a navigation wins. Parked applier state is likewise scoped to one
navigation.

## renderer id

The registry id identifying compiled content across independently bundled
entries. Dynamic-tag sites serialize it, possession tokens ordinalize it with
the route descriptor, and update merges dispatch by it. Native branches use
their tag name as the renderer value.

Renderer and site ids are reserved through the normal output-neutral compiler
analysis contract, then reused by HTML and persisted translation. No separate
register-id scan is part of persisted compilation.

## Naming conventions

- **Patch** is the render mode and wire payload (`PersistedPatch`,
  `_patch_reason`, patch response).
- **Update** is the compiled merge program and `_update_*` runtime family.
- **Persisted entry** means the unified `?persisted` virtual entry.
- **Have** means the opaque possession token, never a client-side tree walk.
- **Typed patch keys** are `PatchHole:`, `PatchAttr:`, and `PatchHtml:` in
  debug output, with optimized `Q`, `N`, and `R` prefixes.
- **Fresh structure** is `State.freshStructure`, derived from differing route
  identities rather than exposed as another application mode.
