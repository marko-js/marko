# Persisted pages — architecture

The present-tense reference for what persisted pages is and how it works
today. Start with [the brief](./persisted-pages-brief.md) for the pitch;
come here for the mechanism. [`persisted-pages-roadmap.md`](./persisted-pages-roadmap.md)
tracks everything still open; [`persisted-pages-cost-model.md`](./persisted-pages-cost-model.md)
holds the byte/JS measurements this doc doesn't repeat.

## What the feature is

Persisted pages are a compiler-configured, opt-in mode where a navigation
fetches the target URL and a **stateless** server streams back a minimal
update payload instead of a full document. The client applies it to the
already-resumed page through the existing signal graph: client state is
preserved, server-only code stays on the server. The governing model: **a
navigation is "the root template received new `input` and a new `$global`"**
— the same semantics that already exist for a parent re-providing input to a
child. A full-page reload is always available as a fallback (build-hash
mismatch, non-capable route, stream error).

The feature ships as `marko({ persisted: true })` in a
[@marko/run](https://github.com/marko-js/run) app; `@marko/compiler` and
`@marko/vite` carry the plumbing, but only `@marko/run` assembles it into
something an app author turns on.

## Invariants

Every design choice in this document is judged against these four; they are
the product definition, not aspirations. (This is the "goals restated as
invariants" framing from the original shape review.)

1. **Initial render stays optimal.** First-visit perf, HTML bytes, and JS
   bytes must not regress for apps that don't opt in, and must regress as
   little as possible for apps that do. Non-persisted builds are
   byte-identical to a build with the flag entirely absent; persisted builds
   pay only serialization bytes on the wire, and only when the render flag
   is set.
2. **Navigations beat full page loads on bytes.** An update response ships
   roughly "the values that changed + structural outcomes," never a second
   copy of the document.
3. **SPA-like continuity.** Ephemeral client state (`<let>`, form inputs,
   scroll, media playback) survives; effects don't replay; DOM identity is
   preserved for kept content.
4. **User code stays on the server.** The same code that stays server-only
   in an MPA (data access, business logic, template render expressions)
   stays server-only under persisted pages. The client gets _placement_
   code, not _computation_ code.

Goal 4 is structural: compiled merge functions contain no user expressions,
only `live[k] = patch[k]`, `_text`/`_attr` placement, signal invocations, and
child dispatch — there is no path for a render expression to leak
client-side. Goal 3 falls out of reusing the signal graph (`Gen === runId`
scoping, dirty-checked writes) instead of a separate diff layer: matched
scopes are never patched by anything but declared merges, so kept elements,
`<let>` state, and unbound event listeners are untouched by construction.
Goal 1 is the axis with a real, managed cost — see the spine below and
`persisted-pages-cost-model.md`.

## Compile-time surface

One boolean-ish compiler option and one entry axis:

- **`persisted?: boolean | "fragments"`** (`packages/compiler/config.d.ts`).
  Consistent across a build. Plain `true` compiles the historical
  always-registered shape (every component's render graph is available for
  fills-path client construction). `"fragments"` commits the build to
  `@marko/run`'s router contract — cross-route divergence and same-route
  dynamic-tag swaps always arrive as fragment frames (below), so
  `?persisted` entries stop registering content renderers and dynamic-tag
  replay signals, and server-only construction material tree-shakes out of
  navigation chunks entirely. A dynamic-tag renderer change with no
  fragment entry fails the apply loudly into the full-navigation fallback
  instead of silently keeping a stale branch.
- **`entry?: "page" | "load" | "update" | "persisted"`** (same file), one
  axis alongside `output: "html" | "dom"`. All entry kinds share one
  template's cached analysis.
  - `entry: "update"` (dom, requires `persisted`) — the compiled merge
    program: per-section `(patch, live)` functions that place an update
    render's payload into live scopes. What `x.marko?update` resolves to.
  - `entry: "persisted"` (dom, requires `persisted`) — the template's full
    render graph (renderers, walks, signals) registered under ids the
    update applier resolves at apply time, loaded lazily with the first
    persisted navigation. What `x.marko?persisted` resolves to (statically
    imported by that template's own `?update` entry).

Translator gates live in `packages/runtime-tags/src/translator/util/marko-config.ts`:
`isPersisted()` (the flag is set at all), `isPersistedFragments()` (`"fragments"`
mode specifically), `isUpdateEntryBuild()` / `isPersistedEntryBuild()` (which
entry is compiling right now). Four translates share one analyze per
template (html, dom, `?update`, `?persisted`) — the update-generic
classification (below) deletes the last two for most components.

## The initial-render spine

The governing invariant for axis-1 cost: **initial value serialization under
the flag is byte-identical to today's non-persisted output.** A slot's value
serializes on the initial render if and only if some client-side code reads
it — the existing serialize-reasons rule, unchanged. What the flag adds is
only _structure_:

- A resume marker for every hole a persisted update could touch, so the node
  binds into its scope at resume (generic node binding, no per-template JS).
- The **spine**: the owning scope and its owner chain, with structural
  bookkeeping (owner links, branch bookkeeping, keys) but no values.

This is implemented as a small serialize-reason **bit lattice**
(`SerializeReasonFlags`, `packages/runtime-tags/src/html/writer.ts`): bit 1 =
stateful parent ⇒ markers _and_ values (today's non-persisted behavior); bit
2 = persisted ⇒ markers/spine only. `_serialize_if` projects bit 1 (so
param-only slot values never leak into a persisted initial render);
`_serialize_guard` passes bits through so cross-template reason propagation
preserves persisted-ness. `State` seeds reason `2` from the render mode; an
update render additionally seeds reason `3` (bit 1 | bit 2), because
request-derived values _are_ the payload in that mode — see below.

The translator's spine/value split
(`writeHTMLResumeStatements` in `translator/util/signals.ts`, the guard
helper `getExprGuardSerialized` in `translator/util/serialize-guard.ts`)
gates scope writes, owner links, structural bookkeeping, and closure
subscriptions guard-class (any bit), while binding values stay if-class
(stateful bit only), with the same-reason hoisting shortcut disabled under
the flag. Attribute holes on elements that already have a bound node need no
new marker — one element binding serves every attribute hole on it. A
same-scope **continuation form** trims the dominant marker cost: consecutive
markers that share a scope id emit `<!--M_* b-->` (id omitted) instead of
repeating the id, resetting on every branch boundary and async interleave;
measured to cut a hole-dense page's overhead roughly in half (see
`persisted-pages-cost-model.md` for current numbers — this doc doesn't
duplicate the measurement matrix).

`$global` reads follow their own promotion rule, not a binding: under the
flag, `trackGlobalReference` marks a syntactic `readsGlobal` flag on the
owning expression at analyze time, and `getGlobalExprSources` turns it into
a request-derived `global` taint merged with any tracked reference sources.
Mixed `state ∩ $global` expressions re-run client-side after the update's
`serializedGlobals` partial merges onto the live `$global` object
(`addUpdateGlobalsStatement` records the re-invocation sites: attrs,
class/style, placeholders, content/text-content). Pure-`$global` holes still
carry their own `_hole_value` capture (a byte optimization opportunity, not
a correctness one — see the roadmap).

## Update-render writer mode

`render(input, { persisted: { update: true, … } })` is a full, normal render
of the target page with a writer mode flag — not a special path. It emits
what an MPA reload would have shown, minus the parts the client already
has:

- **Computed hole values ride as scope props.** Expressions that would
  inline straight into the HTML string additionally `writeScope` their
  value under the hole's own accessor when it's request-derived
  (`_hole_value` pass-through helper). Text placeholders key by
  `UpdateHole:<accessor>` (`"Q"` optimized); dynamic attrs key by
  `UpdateAttr:<name>:<elementAccessor>` (`"N"` optimized) — per-attribute,
  so multi-attribute elements don't collide. Unsafe-html holes get their own
  `UpdateHtml:<accessor>` / `"R"` namespace. These prefixes are chosen so
  they can never collide with the ordinary node-accessor namespace the
  walker also reads on the same scope object (`translator/util/get-accessor-char.ts`).
- **Conditional outcomes always write.** `_if` normally elides
  `ConditionalRenderer` for "no branch"; update mode writes the branch index
  explicitly, with `-1` meaning no branch — absence must mean "unchanged,"
  never "cleared."
- **Branch lists and loop keys always write** as scope props (`BranchScopes:`
  arrays, `#LoopKey`, even for positional loops) — HTML end-markers carry
  these on a document render, but there is no HTML in an update render.
- **Setup effects are suppressed for matched scopes** (`_script` → nothing;
  see "Effects" below); fresh subtrees still get theirs.
- **State-only values are dropped.** Source-classified value gates decide
  this at compile time, not by writer-mode filtering: state-sourced values
  compile to `_state_reason() && v` (serializes for ordinary resume, never
  in updates); request-derived state-free values compile to
  `(guard || _update_reason()) && v` (serializes additionally in updates —
  they're the payload); pure-global values never serialize a raw value
  (holes carry them instead). Both helpers return `undefined` when inactive,
  so gated props drop out of the payload entirely rather than serializing as
  `undefined`.
- **All static HTML is suppressed** except inside an active fragment capture
  (below) — no walker bootstrap, no walk calls, no reorder templates.

Merge semantics are **sparse**: an absent key means unchanged. This isn't
just a size choice — a scope's update-render props are genuinely incomplete
across different renders of the same template (reason-guarded emission,
tier-2-style pruning, multi-frame re-dispatch all produce different key
sets), so dense/unconditional statements can't distinguish "unchanged" from
"became undefined." Presence checks are hoisted into per-kind runtime
helpers so the byte cost of sparse semantics is neutral-to-negative versus
dense code.

### Effects

Update responses carry **no effect strings for matched scopes.** A matched
scope's effects (event binding, lifecycle, `_script` bodies) already ran at
mount; the only way an update can change what they observe is through
merged values, and the compiled graph already attaches each effect
downstream of its referenced bindings' value signals — writing a slot and
invoking its signal re-runs dependent effects through the ordinary path.
Effects therefore run only in two situations: mount inside freshly created
subtrees (branch/fragment construction queues setup exactly as client-side
rendering does), and dependency-driven re-runs through the signal graph. The
server-side counterpart is the effect suppression above; payload effect
entries (`"registryId scopeId"` strings, the same shape `_resume` uses) ride
the frame only for scopes actually created during that apply — the applier
dispatches an effect entry only when `Gen >= applyGen` for its scope, which
is also the mechanism that makes state seeding (below) hostile-patch-safe.

## Scope pairing and the client applier

The update render assigns fresh, patch-local scope ids from its own
counter — a stateless server cannot know the client's live numbering, so
**pairing knowledge is compiled, not transmitted.** A patch payload in the
existing resume-fill format is already a self-describing scope tree (owner
refs, branch arrays, loop keys); applying an update is a **top-down tree
merge** of the patch scope tree onto the live scope tree:

- The root pairs by convention at patch scope 1.
- Control-flow merges are not new machinery — the conditional merge is a
  real `_if` signal instance driven by the patch's branch-index outcome, and
  the keyed-loop merge is a real `_for_of` instance whose params signal is
  the section's own merge function. Keyed matching, clone-and-walk creation
  for fresh branches, and move/remove diffing are the production
  reconciler, unmodified.
- A per-navigation `patchId → Scope` map backs a patch-aware serialize
  context, so `_(id)` scope references inside values keep resolving, and
  later frames of the same navigation reuse the map.
- **The server never pairs into client-state-driven structure.** State-
  sourced branches and state slots are excluded from update serialization;
  server-computed values read inside client-driven branches propagate
  through the existing closure fan-out from the owning scope above the
  branch.

`packages/runtime-tags/src/dom/update.ts` is the client runtime. Key exports:

| function                                             | role                                                                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applyUpdate`                                        | patch-aware serialize context + `$global` merge + root pairing + compiled-dispatch entry point for one patch                                                                                |
| `createUpdate`                                       | per-navigation streaming applier — one call per response frame against a shared patch context, re-dispatching the root merge each time so sparse presence checks pick up newly arrived keys |
| `_update_scope`                                      | the **generic interpreter**: applies typed patch keys (hole placements, attrs, controllables) against a live scope with no per-template code                                                |
| `_update_for` / `_update_branch` / `_update_dynamic` | control-flow merge drivers — real `_for_of`/`_if`/dynamic-tag replay, params/outcome supplied by the patch                                                                                  |
| `_update_pair`                                       | pairs a patch scope to a live scope for sections that register effects, without running a full merge                                                                                        |
| `_update_content`                                    | registry lookup for a content-section merge, dispatched by content id (dynamic-tag/layout hops)                                                                                             |
| `_update_child`                                      | descends into an update-generic child through its typed `UpdateChild:` link, recursively, with no compiled dispatch line in the parent                                                      |
| `_update_seed`                                       | seeds a `<let>`'s initial value into scopes created during this apply only (`Gen >= applyGen` — matched scopes' live state is never overwritten)                                            |
| `_update_signal`                                     | invokes a registered value/`$global`-mixed-statement signal by resume-registry id                                                                                                           |
| `applyFragment` / `walkFragment`                     | parse a fragment frame's HTML detached and bind DOM refs onto the patch scopes (a sync-only port of the resume walker)                                                                      |
| `applyBoundaryBody`                                  | swaps a resolved `<await>`/`<try>` body in where its placeholder branch sits (the two-frame async model, below)                                                                             |
| `_have`                                              | walks the resumed scope tree to build the possession echo (below)                                                                                                                           |

Loop pairing keys by the `by=` value (or position); conditionals by branch
index; custom tags by child-scope accessor; dynamic tags by registered
renderer id. A patch child with no live counterpart is fresh — constructed
client-side through the ordinary branch machinery (in `persisted: true`
builds) or delivered as a fragment (in `"fragments"` builds, and always for
content a fragments-mode build cannot client-construct). A live child with
no patch counterpart is destroyed through the existing branch-destroy path.
`MARKO_DEBUG`-build pairing assertions (serializing each scope's
template/section id so a misapplied merge fails loudly instead of silently
mis-merging) are designed but not confirmed landed in the current code —
see the roadmap.

## The generic applier and update-generic classification

The single biggest per-app-scale lever, already landed. Two related ideas:

**`_update_scope` is a shared interpreter, not per-template code.** Patch
keys are typed (`N<name>:<accessor>` attr holes, `Q<accessor>` text holes,
`R<accessor>` html holes, `A<accessor>` branch lists, `D<accessor>` outcomes,
`S<accessor>` generic-child links, `M` loop keys, controllable holes) —
uniform enough that one interpreter loop, given a patch object and a live
scope, applies every hole/attr/controllable write with no compiled
dispatch. Compiled `?update` merge functions remain only where a value must
invoke a **signal** (state-mixing statements, `<let>` seeds with downstream
derivations) — for a template with no client state and no handlers, this
shrinks to nothing.

**Update-generic classification deletes the `?update` module entirely** for
templates that qualify. A template proves at analyze exit (after
`finalizeReferences`, so serialize reasons and pruning are final) that its
whole update module would reduce to `_resume(id, _update_scope)`: single
section (no control-flow/content-body structure), not `isInteractive`
(no event handlers, `<script>`/`<lifecycle>`, registered functions), no
change handlers, no dynamic tags, no known tag that itself needs a compiled
dispatch line, and no serialized non-DOM binding (seed/value merge lines).
Parents read the child's `domExports.updateGeneric` flag from its analyzed
program extra and dispatch the child's patch scope through `_update_scope`
directly — the child's `?update` module is never imported, so it never
builds, and the classification is **transitive**: a server-only composition
several levels deep drops its `?update` module at every level, because a
parent whose own merges are all generic can itself flag `updateGeneric` (its
child link serializes under the typed `UpdateChild:` key instead of
compiling a dispatch line). Drift safety: a child's flag is resolved once at
the parent's analyze (a mid-analysis circular reference reads as
non-generic, so cycles classify stably instead of racing), and both the
`?update` and dom translate exits tripwire (throw) if what they emit
disagrees with what was proven — the `?update` module errors if compiled
merge code appears where none was promised, and the dom compile errors if
the render graph has effects or `$global` re-runs that classification didn't
account for.

Net effect: server-only components ship zero per-navigation merge code,
scaling the persisted-JS cost with interactive component count instead of
total component count. See `persisted-pages-cost-model.md` for the measured
scale numbers.

## Fragment frames

The mechanism that lets a component with no client-side render graph still
serve as **construction** material for a cross-route swap or a same-route
dynamic-tag change: instead of shipping a `?persisted` render graph ahead of
time so the client can build the subtree, the server renders the divergent
subtree as resumable HTML — markers, spine, and serialized scopes, exactly
like a scoped initial render — and the client inserts and resumes it.

**Mechanics.** `$chunk.fragment` (a `Chunk` property, inherited by forks)
flags that a chunk is inside an active fragment capture; while set, the
update-mode serialization gates for that chunk flip back to writing markup
(`_fragment` in `html/writer.ts` restores `writeHTML`, and hole
captures/structural fills that would normally go to scope props bake into
the markup instead). Capture is assembled as a **chunk property**, not a
render-time splice: `consume` merges accumulated html across a chunk's
forks, and `flushScript` diverts it onto the frame as a
`[anchorScopeId, accessor, markerPrefix, html, scopeIds?]` entry keyed by
`state.fragmentAnchor` — reserved accessor prefix `"P"` carries the entry on
the anchor's own patch scope. Scope _data_ (state seeds, child links, loop
keys, event wiring) still rides the ordinary fills in the same patch id
space; only construction material (the markup) moves to HTML.

Client-side, `applyFragment`/`walkFragment` parse the markup detached and
bind DOM refs onto the **patch scopes**, which are stamped and join the live
scope tree directly — for a fragment subtree, the patch scope _is_ the live
scope (stamping self-pairs them so payload effects pass the ordinary
`Gen >= applyGen` gate). The fragment is inserted at the hop's anchor
marker, the old branch is destroyed, and branch bookkeeping
(`setParentBranch`, orphan-bracket adoption, `ClosestBranch`) is updated.
Two invariants fell out of building this:

- **A fragment apply is a resume, not a merge.** Patch key namespaces
  (`UpdateHole:`/`UpdateAttr:`/etc.) are disjoint from the walker's plain
  node-accessor namespace specifically so a fragment's hop-level merge
  dispatch can **self-apply idempotently** into fragment scopes — later
  frames (seeds, async content) dispatch through the same merge path into
  walker-built scopes with no special-casing.
- **Branch boundaries are runtime-owned, not markup-owned.** A fragment's
  content gets empty text nodes inserted at both ends by the applier rather
  than relying on the markup's own edge nodes, because a fragment's edge
  node can be a marker comment the runtime later consumes and replaces —
  a single-node `<if>` toggling on, for example, replaces its own marker.

**Async boundaries inside fragments** use a two-frame model mirroring a
streamed document: frame 1 (the fragment) ships a pending `<try>`'s
placeholder inline, bracketed with the reserved `"!"` accessor token the
walker binds to `PlaceholderBranch`, while the awaited body stays detached
server-side; frame 2 (the body), when the promise resolves, rides the
existing reorder channel as a boundary-body entry
(`[tryBranchId, 0, prefix, html]`) that `applyBoundaryBody` swaps in where
the placeholder sits, destroying the placeholder. v1 limits (each throws
into the router's full-navigation fallback): a bare `<await>` inside a
fragment, catch-only async boundaries, and more than one pending await per
placeholder body.

**Native-tag hop branches fragment and fill like component branches.** A
`<${...}/>` hop resolving to a plain tag name routes through the same
possession/fragment decision (the echo already carries the tag-name
renderer value), with one shape difference: the native branch's end
bracket stays out of the captured markup — its parent-scope token is the
anchor scope, which the walker would wrongly stamp — and only the
element ref ships, as a node marker bound onto the stamped branch scope
(`applyFragment` binds the branch itself, as for component branches).
On the fill side, tag-name renderer ids register no merge and the native
wrapper creates its content hop at runtime, so `_update_dynamic` descends
generically when no merge is registered: typed captures via the
interpreter, nested hops recursed through their renderer-id-keyed links
(`persisted-update-possession-native` fixture).

**`load=` lazy children inside fragments carry the document contract
over.** A lazy child renders through `withLoadAssets`' ready-channel chunk
(`writeWaitReady`), which inherits the capture flags, so its markup bakes
into the fragment and shows before its module loads, exactly as in a
document. Its resume data rides the same frame as a keyed entry
(`["<readyId>", ...fills]` — `writeReady`'s update branch): the applier
drains it inline when the module is already ready (data before the merge
dispatch, effects through the frame's pairing-gated path after the walk
binds node refs) and parks it until `ready()` otherwise — the data-driven
mirror of the document's blocking `.b` channel, deps markers included. The
load trigger is data too: the `?update` entry registers the child's
trigger-gated setup-module loader under its asset/ready id (`_load_ready`),
the applier fires it when a batch parks, and the loader declares `ready`
after resolving the same modules the document's injected asset script
would (`persisted-update-fragment-lazy` fixture).

**Multiple simultaneous fragment captures in one navigation are
unconditional** — not a v1 limitation. Two (or more) dynamic-tag hops
diverging in the same update each get their own fragment entry: the first
capture rides the main chunk chain, and every further simultaneous capture
renders onto its own detached chunk (its own `Chunk.fragmentAnchor`),
collected and flushed as its own wire entry, mirroring the boundary-body/
reorder channel. The one v1 limit: only the first capture may contain async
content; a later simultaneous capture with an unresolved boundary aborts
into the full-navigation fallback like any other unrecoverable divergence
(`persisted-update-possession-multiswap` fixture).

**A possession miss nested inside an already-capturing fragment renders
inline into the enclosing capture** rather than taking its own detached
fragment. If it took its own fragment, its branch brackets would land in
the enclosing fragment's markup but its body would render onto a separate
detached chunk whose entry could never apply (fragment subtree scopes are
shared patch/live objects, so the applier's mismatch guard reads
already-equal) — the enclosing fragment would resume with the inner hop's
brackets empty. Rendering the nested hop's content directly into the
enclosing capture avoids the problem structurally
(`persisted-update-possession-in-fragment` fixture).

## Possession echo (`x-marko-have`)

Fragment-first (`persisted: "fragments"`) builds no longer register the
client-construction graphs a same-route dynamic-tag swap used to rely on —
so the applier needs to know, before it renders the update, which hops the
client can keep as-is versus which ones diverged. The **possession echo** is
the cheap sufficient primitive: the client enumerates which dynamic-tag
hops it holds and which renderer each currently shows; the server ships a
fragment for any hop whose target renderer differs from what the client
echoed, instead of failing the apply.

- **Client** (`_have` in `dom/update.ts`): walks the resumed scope tree for
  string-valued `ConditionalRenderer:` keys (a `<${…}/>` hop stores a
  renderer-id string there; `<if>`/loop branches store a numeric branch
  index there instead, so control flow is excluded from the walk for free).
  For each hop, reads the site id the html runtime stashed alongside it and
  returns a `{ siteId: rendererId }` map, JSON-encoded (empty string when
  the page holds no hops — the common case, so the header is typically
  omitted).
- **Key is a build-stable compiler register id, not a runtime scope id.**
  This was a real correctness bug, not a size choice: runtime scope ids
  drift between the document render and an update render (the update elides
  matched scopes and omits the shell), so a raw `scopeId + accessor` key
  would silently miss on exactly the pages where the shell doesn't
  re-render. The shipped key is `getUpdateDynamicRegisterId` (filename +
  section + accessor — a compile constant identical in both renders),
  stashed on the hop scope under reserved prefix `HOP_SITE_PREFIX` ("Z",
  deliberately not an `AccessorPrefix` enum member so it can't leak into
  client bundles) and read back off the live tree by `_have`.
- **Loop instances of one site share a site id**, disambiguated by
  appending the iteration's loop key (`siteId + " " + loopKey`, read off the
  branch scope's `LoopKey`). Positional loops expose no loop key, so their
  iterations still collide on the bare site id — `_have`'s walk keeps only
  the last-walked iteration's renderer per site in that case. This is not a
  silent correctness gap: `_update_dynamic`'s `live[rendererKey] !==
rendererId` guard rejects a misfired fragment per-instance, and a real
  change with no fragment shipped throws ("update diverged") into the same
  full-navigation fallback as any other unrecoverable divergence.
- **Server**: `PersistedRenderMode.possessed` (`common/types.ts`) carries the
  decoded echo into the render; `_dynamic_tag` (`html/dynamic-tag.ts`)
  fragments a hop whose target renderer differs from what's echoed. Decoding
  is defensive — a malformed echo degrades to a full navigation, never a
  corrupt apply.
- **Known gap**: the possession check is wired only into the
  renderer-object branch of `_dynamic_tag`, not the native-tag branch (a
  `<${...}/>` hop resolving to a plain tag name). See the roadmap.

Content digests (a `x-marko-have`-adjacent T2 optimization: skip re-sending
values for a possessed-and-unchanged branch) are a separate, still-open
optimization layered on top — see the roadmap.

## Wire format

The response is a stream of **newline-delimited JS-source frames**: each
flush emits its resumes as a bare `[...]` array literal on its own line,
with no `<script>` wrapper, no asset flush, and no trailer (the doc-mode
`flushHTML` path that wraps output in a nonce-carrying `<script>` element is
skipped entirely for update renders — `packages/runtime-tags/src/html/writer.ts`,
`flushScript`/`flushHTML`). There is no separate JSON envelope or opcode
table — the update payload reuses the production serializer verbatim
(cycles, backrefs, registered ids, `Date`/`Map`/streams/promises, XSS-safe
quoting), so its "format" is whatever the resume-fill format already is,
plus the typed key prefixes above and an optional fragments array. How the
client turns a line of text back into an executed frame (script-element
injection under CSP, `new Function`, or otherwise) is the router's concern,
not this layer's — `@marko/run` owns that. Route/protocol-level framing
(content negotiation, headers such as `x-marko-route`/`x-marko-build`/
`x-marko-have`, the `text/marko-patch`-shaped content type) is owned by
`@marko/run`, a separate repository — this doc describes the payload shape
runtime-tags produces and consumes, not the transport headers around it.

### Same-route update (annotated, from a real captured payload)

<!-- cspell:disable — verbatim wire capture (minified accessor keys) -->

```js
[
  (_) => [
    0,
    // scope 0: serialized globals -- the client already knows the URL,
    // but buildHash/params ride every frame for the mismatch check
    {
      params: {},
      url: new URL("http://localhost/?tag=dev"),
      buildHash: "gKb7nf-KNhQ",
    },
    { a: _(2) }, // wrapper scope: child link
    {
      "Nclass:a": ["tags__chip", { "tags__chip--active": !1 }], // attr hole capture
      Ab: [_(5), _(6), _(7)], // branch list -- chip-row reconcile
      Dd: 0,
      Ad: _(41),
    }, // conditional outcome + branch link
    {
      "Nclass:a": ["tags__chip", { "tags__chip--active": !0 }],
      "Nhref:a": "/?tag=dev",
      b: "dev",
      _: _(4),
      M: 0,
    }, // one branch scope
    // ...
  ],
  "c0 6", // effect entries: run against scopes created during THIS apply only
];
```

<!-- cspell:enable -->

### Fragment frame (a cross-route content-hop swap)

<!-- cspell:disable — verbatim wire capture (minified accessor keys) -->

```js
[
  (_, $) => [/* fills for matched scopes, same shape as above */],
  "", // no effects for matched scopes
  [
    [
      2,
      "c",
      "<!--M_[-->",
      "<a class=backlink href=/>...</a><article>...</article>...<script>/* nested resume + effects for the fragment's own scopes */</script>",
    ],
  ],
];
```

<!-- cspell:enable -->

The html string is byte-for-byte what the served document's equivalent
subtree would contain — values baked in, markers and branch brackets in
place (so a later async boundary body streams into it exactly as it would
into a real document), its own nested resume data and effect entries at the
end. The client needs zero render-graph JS for this subtree.

## State seeding

Cross-route navigations (and same-route swaps that construct fresh content)
need more than placement values: a fresh subtree may contain `<let>` state
seeded from `$global`/input. `PersistedRenderMode.seed` makes
`_state_reason()` live for that render, so state values serialize like any
other request-derived value (v1 serializes state broadly in seed-mode
renders; matched-scope waste from this is small and measured in
`persisted-pages-cost-model.md`). `_update_seed` gates delivery to scopes
created during the current apply (`Gen >= applyGen`) — matched scopes' live
state is never touched, which is the same hostile-patch posture the rest of
the merge model relies on: a payload can only ever affect DOM the apply
itself is creating.

## Gotchas for the next contributor

- Harness commands must run **from the repo root**: the `~ts` register hook
  scopes to the working directory.
- Renders embed a random `renderId`; normalize it before diffing outputs.
- The harness runs the **debug runtime even for optimized compiles** (props
  like `#LoopKey` print debug names where production emits `M`), and its
  marker byte counts are a few bytes larger than production per marker.
- **Optimized register ids are assigned live, per translate pass, not at
  analyze time** (`getResumeRegisterId` in `translator/util/signals.ts`) —
  every compile of a persisted template (html, dom, `?update`, `?persisted`)
  must share one `optimizeKnownTemplates` array (or `getTemplateId` option)
  or the update entry's registry lookups won't match the dom module's
  registrations. This is also a live correctness risk under concurrent
  builds — see the roadmap's register-id-determinism entry.
- Generated harness artifacts (`*.cjs`, `*.min.js`, `out.*`) under
  `designs/experiments/` are gitignored and rebuilt by that directory's
  README commands; the directory is excluded from eslint/prettier/cspell
  like fixtures.
- The full mocha suite runs with `bail`; a single failure stops everything.
- `$global.persisted` is **not** the real API — the render mode moved to
  `render()`'s second argument (`RenderOptions.persisted`, a
  `PersistedRenderMode` object with `update`/`seed`/`fragment`/`possessed`
  fields) so it can't collide with request data. The compiler option
  (`persisted: true | "fragments"`) is separate and build-wide. Only the
  fixture test harness's ergonomic `$global` flags (`persistedModeFrom`)
  translate into the real option for readability in fixtures.
- cspell checks all `.md`/`.ts`/`.js`/`.marko` files — add genuinely new
  words to `cspell.json`.

## How to validate everything

```sh
npm ci                       # installs + patches babel (required)
npm test                     # full suite
npm test -- --grep "persisted"    # persisted fixtures incl. the navigation
                                  # lifecycle (persisted-update-navigate)
E=designs/experiments/single-page-server-updates
PERSISTED=1 node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
PERSISTED=1 TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js  # persisted render
TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js              # non-flag render
```

The `persisted-update-navigate` fixture covers the full navigation
lifecycle (resume, client interaction, real update render, patch
application through generated `?update` entries and the real `applyUpdate`
runtime, keyed reconcile, client-state survival against a hostile payload,
no-effect-replay, reverse navigation) in both debug and optimize, with
committed snapshots. `designs/experiments/single-page-server-updates/` is a
standalone measurement harness (compile/render scripts, hand-authored wire
and persisted-entry variants for comparison) — see its own README for the
full command set; it reproduces the numbers this doc and the cost-model doc
cite from the pre-squash design record where noted as measured rather than
verified against current code.

## Backport map (mainline-first extraction)

The plan for extracting this branch's non-persisted-specific improvements
to `main` first, so a future persisted-pages review is only the feature
itself. The branch was squashed to one checkpoint commit; extraction is by
change, not cherry-pick.

**A. Pure mainline improvements (backport first, in this order):**

1. **Runtime packaging** — preserved dist modules behind the `dom.mjs`
   facade, `package.json` `"sideEffects": ["**/*.marko"]`, and a bundle-size
   classifier that understands the preserved layout. This is where the
   measured non-persisted wins live (163 fixtures shrank at the time of
   measurement) and is the prerequisite for hosting granularity to exist at
   the package boundary at all. Honest costs: small min regressions on some
   pages, and lazy-tag fixtures' `sizes.json` showing an accounting
   redistribution (a previously separate, uncounted chunk now counts
   inline).
2. **Runtime module splits** (each benefits any code-split or lazy-tag app;
   validated behavior-neutral): `dom/spread.ts` extracted from `dom/dom.ts`;
   the catch split (`dom/catch.ts` for `_enable_catch`/`renderCatch`/
   `handlePendingTry`, `setConditionalRenderer` moved to `dom/scope.ts`);
   the controllable per-kind split (`dom/controllable/` hosting
   `input-value` / `input-checked` / `select` / `open` / `shared`).
3. **Compiler/translator hardening** (behavior-neutral on `main` by
   construction): `$signal` abort-ids allocated via `createSectionState`
   instead of a section-keyed module `WeakMap` (translate-phase state must
   not live on cached-analysis objects); `addReadToExpression` resolving
   the canonical merge-target extra so reads recorded after a
   `mergeReferences` cannot split an expression's references.
4. Mainline-relevant `agent-feedback/` entries and cspell additions riding
   the above.

**B. Persisted-specific (the feature review proper):** the serialize
spine/value gates and `_persisted_reason` family, `$global` promotion, the
update-render writer mode, `entry: "update"`/`"persisted"` kinds and their
codegen, `dom/update.ts` and its generic applier, controllable capture/merge,
the `?persisted` module-state single-instance seam
(`isPersistedEntryBuild` paths, scriptlet export/import, `_enable_branches`
emission, `getChildImportPath`), fragment frames, possession echo, the
persisted owner-skip gate in `core/if.ts`/`core/for.ts`, the `persisted-*`
fixtures and harness entry kinds, and the config surface.

**Gray zone, resolved toward B:** anything gated on `isPersisted()` even
when the mechanism looks general — it cannot change `main`'s output, so
backporting it early buys nothing and splits review context.

**Follow-up landed upstream** (mainline vite-owned side-effect policy):
`@marko/vite` ships this on `main` (released in 6.1.1,
`marko-js/vite@84f4f177` "tree-shake server-only imports from client
builds") as a config-level `treeshake.moduleSideEffects` function rather
than per-import `resolveId` overrides: in client builds every module
defaults to side-effect-free — Marko is the only source of side effects —
except a template's explicit bare `import "x"` ids (collected from the
compiled AST and resolved up front), `.marko` files, styles, and Vite
assets; externals and any user-supplied `moduleSideEffects` are deferred
to. This supersedes the earlier branch-local `resolveId` implementation
(dropped when the vite branch rebased onto upstream), and it is what makes
the backport changeset's guidance — "library packages need no `sideEffects`
declaration of their own in Marko apps" — literally true on mainline.

## Decision log

Settled decisions, compact. Where the doc that originally recorded the
rationale has since been folded into this one, "here" points at the section
above rather than a separate document.

| Decision                                                                                                 | Rationale (one line)                                                                                                                                                                                                                                       | Where                                           |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Navigation = new `input` + `$global` to the root                                                         | Reuses existing "parent re-renders child" semantics for state preservation and DOM update, no new rules to invent                                                                                                                                          | "What the feature is"                           |
| Wire format: existing resume-fill format, patch-space ids (not nested-positional or a value-only stream) | ~25–50 B/nav smaller alternatives don't buy back a second serializer mode or a broken `_(id)` reference model; pruning closes most of the gap inside the existing shape                                                                                    | "Wire format"                                   |
| Scope pairing: compiled top-down tree merge, not wire-transmitted addresses or id-order                  | Id order isn't deterministic under async (`<await>` bodies resolve out of order); addresses would be per-navigation cost for build-static information                                                                                                      | "Scope pairing"                                 |
| Persisted entries: compiled merge functions (not opcode tables + interpreter)                            | Control-flow merges collapsed into real `_if`/`_for_of` signal instances, removing most of what an interpreter would have amortized; matches how the rest of the runtime is built                                                                          | "Scope pairing and the client applier"          |
| Placement-only: no server compute ships; derived values arrive computed                                  | Server-only imports (data access, ranking code) never reach the client; the serializer's dedup keeps repeated values cheap                                                                                                                                 | "What the feature is"                           |
| Sparse merge semantics (absence = unchanged)                                                             | A scope's update props are genuinely incomplete across renders (guards, pruning, multi-frame re-dispatch); dense codegen can't distinguish "unchanged" from "cleared"                                                                                      | "Update-render writer mode"                     |
| Effects never replay for matched scopes; mount only in fresh subtrees                                    | The compiled graph already attaches effects downstream of value signals — merging a value re-runs dependents through the ordinary path                                                                                                                     | "Effects"                                       |
| `$global` reads promoted to reactive bindings, not treated as request data outside the reactive graph    | Required for `@marko/run`, where `url`/`params` arrive via `$global`; makes "serialized global = request input" the actual model                                                                                                                           | "The initial-render spine"                      |
| Fragment frames over wire-delivered `template`/`walks` pairs for the cross-route/possession-miss case    | A fragment reuses the battle-tested SSR+resume path directly instead of a parallel client-construction implementation; deletes the `?persisted` graph requirement for server-only components entirely                                                      | "Fragment frames"                               |
| Possession-echo key: compiler register id, not runtime scope id                                          | Runtime scope ids drift between document and update renders (elided matched scopes, omitted shell); a scope-id key silently missed on exactly the pages that most need the echo                                                                            | "Possession echo"                               |
| Fork 1 (cacheable skeletons): no separate skeleton-resource mechanism                                    | The factorized template/walks artifact already has a delivery mechanism and immutable cache — the lazy route chunk. Fragments plus update-generic classification deliver the same win without a new endpoint, hint protocol, or marker-id canonicalization | "Fragment frames", `persisted-pages-roadmap.md` |
| `persisted: "fragments"` build mode gates always-registered content dispatch, not just fragment emission | Registering every content section for fills-path construction was the actual retainer keeping server-only render graphs alive; dropping it (not just adding fragments) is what let update-generic classification pay off                                   | "Compile-time surface"                          |
