# Persisted pages: glossary

The blessed vocabulary for persisted pages. Wire grammar lives in
`persisted-pages-wire-format.md`; the system shape lives in
`persisted-pages-architecture.md`.

## patch

The payload for one enhanced navigation: a newline-delimited frame stream
produced by a stateless render of the target route and applied to the live
page. It is not a document diff.

Private render options carry an optional patch `{ fromRoute, targetRoute }`.
They live in `common/types.ts` and `html/writer.ts`.

## frame

One newline-delimited JavaScript array expression in a patch. It can contain
scope fills, effect entries, shells, and ready batches. Each accepted frame
applies atomically; later frames extend the same patch-local scope space, and
re-applied frames are idempotent.

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

## adoption

The one scope-identity rule: a constructed branch binds INTO its patch scope.
`createBranch` passes the patch scope as the new branch scope's identity, and
while a construction's walk runs, `BeginChild` adopts the patch child scope
already linked at each accessor (`constructingBranch` in `dom/scope.ts`,
consumed by `dom/walker.ts`). Fills, serialized closures, and effects
therefore resolve against one object — there is no patch-to-live transfer
step, matching how document resume binds scopes directly.

## shell

A section's values-free client template and walks — no setup, no user
expressions. Computed at compile time by an internal re-entrant compile
(`entry: "renderers"`, data-only); each persisted template's HTML module
embeds `_renderer_shells({ [id]: [template, walks] })`, accumulating in the
server-side `serverRenderers` registry. A shell is keyed by its section's
"update" register id and its "content" register id (for the root section, the
template id), so dynamic-hop renderer ids resolve to the same shell.

On the wire a shell rides a `[0, id, template, walks]` frame entry, emitted
at most once per patch response per section. The applier registers it into
the client's `shells` map before merges dispatch.

## construction

Client-side building of a diverging branch from its registered shell: the
compiled dispatch calls `createBranch` with a setup-less renderer, pairs the
patch scope, and runs the target's registered merge as a hole-filling setup.
The client decides per anchor — the server never needs to know whether the
live branch matches. Diverged dynamic hops, `<if>` branches, fresh keyed
`<for>` items (the keyed reconciler's create callback), and missing stable
`<for>` tail branches all construct; contentless native hops rebuild their
element from typed captures.

## pending fact

A `<try>` boundary's placeholder state on the wire and in the live page:
`BoundaryAnchor:<accessor>` on the parent scope is a string while the
placeholder shows and tombstones to `0` when the last pending segment of the
body settles. Documents resume against it; patches construct the placeholder
from its page-registered content renderer when the fact arrives, and the
settle frame's tombstone swaps in the completed body.

## anchor

A build-stable structural location that can diverge: a dynamic-tag hop, a
request-derived `<if>`, a request-derived keyed `<for>` occurrence, or a
pending `<try>` boundary. Anchor ids come from the compiler’s existing analysis
and resume-id contract (`getUpdateAnchorRegisterId` / `getResumeRegisterId`).

Runtime scope ids are not anchor ids. Scope ids can drift between document and
patch renders; anchor ids remain stable across the independently compiled HTML
and persisted outputs.

## hop

A dynamic-tag anchor specifically (`<${dynamic}/>`), including layout-content
handoffs. It is the point at which a subtree renderer is chosen and a common
cross-route divergence boundary. Other structural locations are anchors, not
hops.

## spine

The addressable resume material an initial persisted document carries so a
future patch can find the live page: node markers, scope identity,
owner/branch links, and structural anchor data. Spine and serialized value are
separate compiler decisions.

The gates live in `html/writer.ts` (`_serialize_guard`, `_persisted_reason`,
and `_el_resume`) and the corresponding translator analysis.

## seed

First-render state for a branch the client creates during an apply. A seed can
depend on server-only expressions, so it is the branch’s authoritative initial
value. `_update_seed` applies it only to scopes created by the current apply;
matched scopes retain live client state.

Constructed branches clone values-free markup, so persisted builds serialize
every `<let>` under the state-seed guard (`_state_reason()`), including values
ordinary resume recovers from the DOM such as controllable input values.
Fresh plainly-rendered branches always seed regardless of route.

## branch

Marko’s existing unit of structural life: a scope with start/end nodes, owner,
and parent-branch links (`BranchScope`). Constructed branches are ordinary
branches; persisted pages do not introduce a second branch model.

## scope fill

A serializer callback such as `_=>[...]` containing sparse partial scopes in
the patch-local id space. Slot zero is the first scope id, always written
literally; numbers advance it by deltas, objects extend the current scope, and
scope `0` carries `$global` partials.

The grammar is written by `html/serializer.ts` and consumed by
`dom/update.ts`.

## hole

A request-derived expression value captured by a patch render. Text holes use
`PatchHole:` (`Q` optimized), unsafe HTML uses `PatchHtml:` (`R`), and
attributes and controllables use `PatchAttr:` (`N`). Their discovered handlers
register with `_update_scopes`, keeping unused handler kinds tree-shakable.

## epoch

The navigation counter that fences async output. Starting an update advances
the epoch; persisted reorder code captures it and drops older document-stream
swaps after a navigation wins. Parked applier state is likewise scoped to one
navigation.

## renderer id

The registry id identifying compiled content across independently bundled
entries. Dynamic-tag anchors serialize it, shells key by it, and update merges
dispatch by it. Native branches use their tag name as the renderer value.

Renderer and anchor ids are reserved through the normal output-neutral compiler
analysis contract, then reused by HTML and persisted translation. No separate
register-id scan is part of persisted compilation.

## Naming conventions

- **Patch** is the render mode and wire payload (`PersistedPatch`,
  `_patch_reason`, patch response).
- **Update** is the compiled merge program and `_update_*` runtime family.
- **Persisted entry** means the unified `?persisted` virtual entry.
- **Construction** is client-side branch building from a wire shell;
  **adoption** is the constructed branch binding into its patch scope.
- **Typed patch keys** are `PatchHole:`, `PatchAttr:`, and `PatchHtml:` in
  debug output, with optimized `Q`, `N`, and `R` prefixes.
- **Fresh branches** seed under `State.freshBranchDepth`, tracked while a
  patch renders structure the client will construct.
