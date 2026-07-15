# Persisted pages: glossary

The blessed vocabulary for the persisted-pages feature. Each term gets one
definition, the files that implement it, and any remaining drift between the
term and the code's naming. The conventions the code follows are summarized
in the "Naming conventions" section at the end. Wire-level grammar lives in
`persisted-pages-wire-format.md`; the system shape in
`persisted-pages-architecture.md`.

## patch

The wire payload of one navigation: the frames on the wire, plus the private
request facts the server renders it from
(`{ fromRoute, targetRoute, possessed? }`). A patch is produced by a
stateless render of the target route and applied to the live page; it is not
a diff of documents.

- Lives in: `common/types.ts` (`PersistedPatch`, carried by
  `RenderOptions.persisted`), `html/writer.ts` (`State.patch` holds the
  facts; truthy reads select patch mode), `dom-persisted.ts` (`createPatch`),
  run's `runtime/internal.ts` (fact plumbing, `patchResponseInit`) and
  `runtime/persisted-protocol.ts` (`text/marko-patch`, patch response
  headers).
- Drift: none. A _patch render_ produces a _patch_ (`State.patch`,
  `_patch_reason`, "patch render"/"patch response" comment language);
  _update_ is reserved for the compiled merge programs that apply one. Run
  re-declares the fact shape locally (`PersistedRender`/`PersistedPatch` in
  `runtime/internal.ts`, named after the marko types they mirror) because it
  does not depend on marko's types package.

## frame

One newline-delimited serializer expression in a patch: a bare JavaScript
array of scope fills, effect entries, fragment entries, boundary-body
entries, and ready batches. Each frame applies atomically (one signal batch,
one scheduler flush); later frames arrive in async resolution order and
extend the same patch-local scope space.

- Lives in: `html/writer.ts` (`concatFrames`, `flushScript`/`flushHTML`
  patch-mode paths), `dom-persisted.ts` (frame execution), run's
  `runtime/persisted-navigation.ts` (line splitting).
- Drift: none; "frame" is used consistently.

## update

The compiled merge programs that apply a patch: the `?update` virtual entry
(default export = the template's root merge, named exports `createPatch` and
`have`) and the `_update_*` runtime family that the compiled merges dispatch
through (`_update_if`, `_update_for`/`_update_for_keyed`, `_update_dynamic`,
`_update_branch`, `_update_load`, `_update_scope`, `_update_seed`,
`_update_pair`, ...). Merges are sparse: every statement is guarded by a
patch-key presence check, and an absent key means unchanged.

- Lives in: `translator/visitors/program/update.ts` (entry emission),
  `translator/util/update-merges.ts` (per-section merge recording and the
  participation predicates), `dom/update.ts` (`createUpdate`),
  `dom/update-merges.ts` (runtime family), `dom-persisted.ts` (re-exports).
- Drift: none. Render-mode symbols no longer share the name (see **patch**),
  and the typed patch-key prefixes are `Patch*`-spelled (`PatchHole:` etc.,
  see **hole**); "update" names only the merge programs, their `_update_*`
  runtime family, and the `?update` entry.

## fragment

Structurally divergent content delivered as resumable HTML inside a patch: a
fragment entry carries captured markup (values baked in, resume markers and
branch brackets included) plus the anchor identifying exactly the branch it
replaces. The applier parses it with a template element, walks its markers
binding DOM refs onto the patch scopes (which become the live scopes), and
swaps it in at the verified anchor. Fragments keep construction on the
server; a persisted client never builds divergent content from a renderer
graph.

- Lives in: `html/writer.ts` (`_fragment`, `Chunk.fragment` capture,
  `writeFragmentEntry`, `State.writeFragments`), `dom/update.ts` (entry
  stash), `dom/update-merges.ts` (dispatch), `dom/update-fragment.ts`
  (`applyFragment`,
  `createFragmentBranch`, `walkFragment`).
- Drift: none; comments describe a fragment as delivering _the diverging
  branch at a site_ (`<if>` branches, keyed `<for>` items, dynamic-tag hops,
  and native-tag branches alike).

## possession / echo

What the live page holds per site, sent as the `x-marko-have` request header
(the "possession echo"): value-compare entries for hop/`<if>` sites (site
path to renderer id or branch index) and existence-only `!`-prefixed entries
for still-pending `<try>` boundaries and live keyed-loop items. The server
compares the echo against the render it is producing and ships fragments (or
boundary bodies) only where the page provably diverges. The echo is a lossy
hint: omission degrades to authoritative fragments or the document fallback,
never to a wrong page.

- Lives in: `dom/update-fragment.ts` (`_have`, `getPossessionSiteKey`),
  `common/helpers.ts` (`encodePossessionSite`/`encodePossessionValue`),
  `common/types.ts` (`PersistedPatch.possessed`), consumed in
  `html/writer.ts` (`State.possessed`, `_if`, `forBranches`, `_try`) and
  `html/dynamic-tag.ts`; run's `persisted-protocol.ts`
  (`encodeHave`/`decodePossessed`).
- Drift: `_have` and `getPossessionSiteKey` build the request-side echo but
  live in `dom/update-fragment.ts`, the fragment applier module. Placement,
  not naming; note for the A2/C file passes.

## site

A build-stable dynamic location that can diverge between routes: a
dynamic-tag hop, a request-derived `<if>`, a keyed request-derived `<for>`
(each item is one site occurrence), or a `<try>` placeholder boundary. Sites
are keyed by compiler-preallocated register ids
(`updateSiteKey(kind, accessor)`, kinds `if | for | dynamic | boundary`),
which survive the scope-id drift between document and patch renders; the
document render stashes them on resumed scopes (`RENDERER_SITE_PREFIX` `Z`,
`BOUNDARY_SITE_PREFIX` `T`, `FOR_SITE_PREFIX` `F`) so the echo can name them.

- Lives in: `translator/util/update-merges.ts` (`UpdateSiteKind`,
  `updateSiteKey`, `getUpdateSiteRegisterId`, the `isUpdate*Site`
  predicates), `translator/util/preallocate-register-ids.ts` (enumeration),
  stashes in `html/writer.ts`, `html/dynamic-tag.ts`,
  `dom/update-fragment.ts`.
- Drift: comments still alternate between "hop" and "dynamic tag site" for
  the same thing (for example `isUpdateDynamicTagSite`'s doc says "its hop
  scope"); the shared `Z` prefix itself is one constant name on each side
  (`RENDERER_SITE_PREFIX`, debug `RendererSite:` -- declared in
  `html/writer.ts` and imported by `html/dynamic-tag.ts`, with the dom-side
  reader's copy in `dom/update-fragment.ts`).

## hop

A dynamic-tag site specifically (`<${dynamic}/>`, including layout content
hand-offs): the place a subtree's renderer is chosen at runtime, and
therefore the natural divergence point of a cross-route navigation. "Hop" is
not blessed for `<if>`/`<for>`/boundary sites; those are sites of other
kinds.

- Lives in: `html/dynamic-tag.ts` (capture decision),
  `dom/update-merges.ts` (`_update_dynamic`).
- Drift: see **site** (comments that say "hop" where any site kind applies).

## spine

The addressable resume material an initial persisted document carries so a
future patch can address the live page: resume markers (node markers are the
patch addresses), scope identity, owner/child links, and site stashes,
independent of whether the current render serializes any value. Spine and
value are the compiler's two separate emission decisions.

- Lives in: gates in `html/writer.ts` (`_serialize_guard`,
  `_persisted_reason`, `_el_resume`'s persisted marker/continuation path);
  compiler side in `translator/util/serialize-guard.ts`,
  `translator/util/references.ts`, `translator/util/signals.ts`.
- Drift: none in code comments (they use "spine" consistently); there is no
  `spine`-named symbol, only gate functions.

## seed

First-render state serialized for branches the client will create fresh
during an apply: `let` initializers may depend on server-only expressions, so
the seed IS the initial value. Seeds apply only into scopes created during
the apply (`_update_seed` checks the apply generation); matched scopes keep
their live state, which is what makes a hostile patch unable to overwrite
client-owned values.

- Lives in: `html/writer.ts` (`_state_reason`, `State.freshBranchDepth`),
  `dom/update-merges.ts` (`_update_seed`), `dom/signals.ts` (`_let_persisted`),
  `translator/util/update-merges.ts` (`forEachUpdateSeedBinding`).
- Drift: none; "seed" is used consistently.

## branch

Marko's existing unit of structural life: a scope with start/end nodes,
owner, and parent-branch links (`BranchScope`). Persisted pages reuse it
unchanged; fragments and boundary bodies produce ordinary branches, and the
possession echo walks branch links to build loop paths.

- Lives in: `common/types.ts`, `dom/scope.ts`, everywhere.
- Drift: none.

## scope fill

One serializer fill callback in a frame (`_=>[...]`): sparse partials keyed
by patch-local scope id, with delta-encoded slots, the elided patch root
(`[,{...}]` means scope 1), and scope `0` reserved for `$global` merges. The
same grammar documents use for resume data; frames simply omit the runtime
prefix.

- Lives in: `html/serializer.ts` (`writeScopesRoot`), `dom/update.ts`
  (`applyScopes`, the patch-aware serialize context).
- Drift: none; "fills" is used consistently on both sides.

## hole

A captured expression value in a patch: text holes (`PatchHole:`),
unsafe-html holes (`PatchHtml:`), and attribute/controllable holes
(`PatchAttr:name:`), written by the patch render for the update programs (or
the generic applier `_update_scope`) to place against the live scope's bound
nodes. Withheld inside fragment captures, where values are baked into the
markup.

- Lives in: `html/writer.ts` (`_hole_value`), `dom/update-merges.ts`
  (`_update_scope`, prefix constants), translator `getPatchHolePrefix` and
  siblings.
- Drift: none.

## boundary body

A `<try>` placeholder boundary's resolved body delivered as its own wire
entry (`[branchId, 0, prefix, html, scopeIds?]`), either following a fragment
that shipped the placeholder or answering an echo that proved the live page
still shows one. Rides the writer's reorder channel server-side and the `!`
patch-scope stash client-side.

- Lives in: `html/writer.ts` (`tryBoundaryBody`, `flushPlaceholder`,
  the update reorder branch of `flushScript`), `dom/update-merges.ts`
  (`PENDING_BODY_KEY`, `_update_branch`), `dom/update-fragment.ts`
  (`applyBoundaryBody`).
- Drift: in patch renders `State.writeReorders` holds pending boundary-body
  chunks, not reorder chunks; the channel reuse is deliberate but the name
  only describes the document-mode use.

## epoch

The per-render navigation counter that fences one navigation's async output
from the next: `createUpdate` advances it (`bumpNavEpoch`) before any frame
applies, the persisted reorder runtime captures it at install and no-ops
swaps once it has advanced, and parked applier state is reset per navigation.
Only one update owns the page at a time.

- Lives in: `dom/resume.ts` (`bumpNavEpoch`, `render.n`),
  `html/inlined-runtimes.ts` (`PERSISTED_REORDER_RUNTIME_CODE`),
  `dom/update.ts` (parked-state reset, `applyGen`/`runId` gating).
- Drift: none.

## renderer id

The registry id identifying a piece of compiled content across independently
bundled entries: dynamic-tag hops serialize it
(`ConditionalRenderer:` value), the echo reports it, and update merges
dispatch content merges from it (registered under the renderer id plus the
`!` suffix, `UPDATE_MERGE_SUFFIX`). Native-tag branches use the bare tag name
as their renderer value. Register ids are preallocated during analysis so
HTML, DOM, `?update`, and `?persisted` compiles of one template agree.

- Lives in: `common/accessor.ts` (`RendererProp.Id`),
  `translator/util/preallocate-register-ids.ts`, `dom/update-merges.ts`
  (`UPDATE_MERGE_SUFFIX`, `_update_dynamic`), `dom/resume.ts` (registry).
- Drift: none.

## Naming conventions

The conventions the code follows (established by the B2 rename pass). Public
surface (`persisted: true`, header names, MIME) was never affected; debug
wire strings differ from earlier drafts only in persisted debug snapshots.

- **"patch" is the render mode and its payload.** The patch-producing render
  reads `State.patch` (the `PersistedPatch` facts object; truthiness selects
  patch mode), gates payload values with `_patch_reason`, and comments say
  "patch render" / "patch response". Run mirrors this (`patchResponseInit`,
  `applyPersistedResponseHeaders(response, patch)`), and re-declares the
  `PersistedRender`/`PersistedPatch` contract locally under the marko type
  names.
- **"update" is the compiled merge programs.** The `?update` entry, the
  `_update_*` runtime family (including html-side emitters like
  `_update_child`), the `isUpdate*` translator predicates, and
  `UPDATE_MERGE_SUFFIX` keep the name; "update" in comments refers to those
  programs, never to the render mode.
- **Typed patch keys are `Patch*`-spelled.** Debug forms `PatchHole:` /
  `PatchAttr:` / `PatchHtml:` / `PatchChild:` (optimized `Q`/`N`/`R`/`S`),
  produced by the translator's `getPatch*Prefix` helpers and consumed by
  `dom/update-merges.ts`'s prefix constants; reservations documented in
  `common/accessor.ts`.
- **One site-prefix name per contract.** The shared `Z` stash is
  `RENDERER_SITE_PREFIX` (debug `RendererSite:`), covering dynamic-tag hops
  and structural `<if>`s: declared once per side (`html/writer.ts`, imported
  by `html/dynamic-tag.ts`; dom-side copy in `dom/update-fragment.ts`),
  alongside `BOUNDARY_SITE_PREFIX` (`T`) and `FOR_SITE_PREFIX` (`F`).
- **Behavior-named flags.** Cross-route delivery is `State.freshStructure`
  (derived from `patch.fromRoute !== patch.targetRoute`; the name states what
  consumers rely on -- the target subtree is created fresh). The test
  harness's matching fixture flag is `$global.persistedCrossRoute`
  (`__tests__/utils/resolve.ts`).
- **Fragments deliver "the diverging branch at a site"**, not specifically a
  content-hop branch: `<if>` branches, keyed `<for>` items, dynamic-tag hops,
  and native-tag branches all ride fragment entries.
