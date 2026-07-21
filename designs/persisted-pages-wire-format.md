<!-- cspell:ignore Mnavigate Nclass -- render-id and accessor-key artifacts in captured frame examples -->

# Persisted pages: wire format

This is the protocol specification for persisted-page navigation: the request
negotiation, the newline-delimited frame stream a patch response carries, and
the reserved key namespaces the frames and the live page share. Every grammar
rule here is implemented by `packages/runtime-tags/src/html/writer.ts` and
`html/serializer.ts` (producer), `html/renderer-shells.ts` (server shell
registry), `src/dom-persisted.ts`, `src/dom/update.ts`, and
`src/dom/update-merges.ts` (consumer), and `@marko/run` (transport).
Vocabulary is defined in `persisted-pages-glossary.md`.

## Transport

An enhanced navigation sends the original request again with negotiation
headers:

| Header          | Value                                         |
| --------------- | --------------------------------------------- |
| `accept`        | `text/marko-patch`                            |
| `x-marko-route` | target route's build-stable numeric index     |
| `x-marko-from`  | the live page's current route index           |
| `x-marko-build` | build hash; both sides must be the same build |

The server accepts patch mode only when the matched route index and build hash
equal the header values (`matchesPatchRequest`). Outcomes by method
(`initializePersisted` in run's `runtime/internal.ts`):

- **Matched GET/HEAD/POST**: the handler runs normally and `context.render`
  produces a patch response: a newline-delimited frame stream with
  `content-type: text/javascript;charset=UTF-8`, `cache-control: no-store`,
  `vary: accept`, and an echoed `x-marko-build: <build id>` response header.
  A patch varies by live-page state (the token) and must never enter a shared
  document cache.
- **Mismatched GET/HEAD**: rejected before any handler runs with an empty
  `409` response carrying `cache-control: no-store` and `vary: accept`. The
  client performs the original document navigation.
- **Mismatched POST**: never rejected. A mutation must always reach its
  handler; the handler runs and the response renders as an ordinary document,
  which the client recognizes as non-patch content and falls back on. The
  mutation is applied exactly once either way.

A matched POST patches its **direct** response: the validation-error case,
where the server re-renders the same page and the patch preserves the user's
live form state. A PRG redirect never renders in patch mode at the POST URL;
the followed GET renegotiates at its final URL before any update is accepted.

The client discriminates on `content-type`, not status
(`isPatchResponse`): validation responses may be non-2xx patches, and any
non-patch body (including the 409) takes the fallback. Before executing any
frame the client also verifies the echoed `x-marko-build` response header
equals its own build id; a mismatched or absent echo takes the same fallback
without the body ever executing. The echo complements the `content-type`
check: a response that merely looks like a patch (a stale deploy, a misrouted
or rewritten body) cannot satisfy both. `@marko/run` implements both sides.
Because persisted builds serve two representations of every page URL,
document responses also carry `vary: accept`; a handler-supplied
`ResponseInit` keeps its status and headers but the framework-owned
`content-type`/`vary` pair is reapplied (`applyPersistedResponseHeaders`).

Server-side, request facts ride `render()` options as `{ persisted: {
patch?: { fromRoute, targetRoute } } }`, kept off `$global`. The server
renders the target statelessly either way; the client decides per anchor
whether the fills merge into matched structure or construct fresh branches.

## Frame grammar

A patch response body is a stream of **frames**, one per line. Each frame is a
bare JavaScript array expression produced by the serializer (the same fill
grammar a document render assigns to `<runtimeId>.<renderId>.r`, without the
runtime prefix). The serializer escapes newlines inside string values, so the
newline is an unambiguous frame delimiter; the router splits on it and applies
each frame atomically, so completed frames update the page while later async
work is still pending (`navigate` in run's `persisted-navigation.ts`).

The applier (`patch` in `src/dom-persisted.ts`) executes each line
through a nonce-bearing script element and collects the resulting array's
elements. A frame element is one of:

| Shape                                      | Kind         |
| ------------------------------------------ | ------------ |
| `_=>[...]` or `(_,$)=>...` (function)      | scope fills  |
| `"registryId scopeId ..."` (string)        | effect entry |
| `[0, "id", template, walks]`               | shell        |
| `["readyId", ...fills]` (string in slot 0) | ready batch  |

Array entries discriminate structurally: a string in slot 0 is a ready batch
and a literal `0` in slot 0 with a string id in slot 1 is a shell.

### Scope fills

A fill callback receives the serialize context `_` and returns the fill array
(`writeScopesRoot` in `html/serializer.ts`; applied by `applyScopes` in
`src/dom/update.ts`):

- Slot 0 is the first scope id, always written literally (`_=>[1,{...}]`,
  `_=>[0,{...}]` for a global-first fill).
- Each object element is a sparse partial for the current slot's scope, after
  which the slot advances by one. Scope `0` partials merge onto the live
  `$global`; every other partial extends that patch-local scope. Absent keys
  mean unchanged.
- Each number element is a signed delta added to the current slot id, skipping
  scopes with nothing to say (`...},1,{...}` skips one id).
- Inside partials, `_(id)` references a patch scope, `_(id, "registryId")`
  invokes a registered factory bound to that scope, `_._` accesses the resume
  registry directly, and `_.a=`/`_.a` bind and reuse repeated values within
  the frame. `$` is `undefined` (the `(_,$)=>` callback form is emitted only
  when a payload writes it). When a payload has trailing expressions (deferred
  assignments or gated mutations), the fill is applied through the context
  (`_( [...], 0)`) and the expression ends in `,0` so an arbitrary trailing
  value can never be misread as a fill.
- A registry id referenced by a fill may be intentionally unregistered:
  persisted builds ship no divergent-content renderers, yet a matched scope's
  spine still serializes renderer values by registry id. The applier resolves
  those to `undefined` instead of failing.

Patch scope ids are a patch-local id space. The compiled merge pairs patch
scopes to live scopes top-down; scope ids are never document scope ids.

### Effect entries

An effect entry is a space-separated token run sharing the grammar of document
resume effects (`collectEffects` in `src/dom/update.ts`, `writeEffect` in
`html/writer.ts`): a token containing a non-digit selects a registered effect
by registry id, and each following numeric token is a patch-local scope id it
applies to. One entry may carry several registry runs
(`"c1 4 d0 5 a4 3 b0 2 a0 1"`), and one frame may carry several entry strings.
The applier runs an effect only for scopes whose live pair was created during
this apply; matched live scopes already ran their effects at mount and never
replay (except registered `$global`-refreshing effects, which re-run on every
apply).

### Shells

A shell delivers a section's values-free client template and
walks so the client can build a diverging branch itself (`emitShellFrame` in
`html/writer.ts`):

```
[0, "id", template, walks]
```

The shell carries no setup and no user expressions; values arrive as the
ordinary fills and seeds of the same patch. The server computes shells at
compile time through an internal re-entrant compile (`entry: "renderers"`,
data-only) whose result each persisted template's HTML module embeds as
`_renderer_shells({ [id]: [template, walks] })`, accumulating in the
server-side `serverRenderers` registry. Each constructible section is keyed by
its "update" register id and by its "content" register id (for the root
section, the template id), so a dynamic hop's dispatched renderer id resolves
to the same shell.

A section rendering statically inlined child templates embeds a _composed_
source: an array of parts alternating literal strings with single-element
`[childTemplateId]` references, mirroring how the DOM build splices child
`$template`/`$walks` exports into the parent at bundle time. Composed sources
resolve lazily against `serverRenderers` on first emission (a child's HTML
module always registers before its importers' maps run), and the resolution
memoizes; wire frames always carry fully resolved strings. An unresolvable
reference — a self-recursive template, or a template expression the compiler
cannot reduce to static parts — leaves the section shell-less, and the
omission propagates transitively through the registry with no extra
bookkeeping. A shell-less anchor cannot construct: the server refuses to
deliver a request-derived `<if>`/keyed-loop divergence as a patch (the
navigation completes as a document load), and a shell-less dynamic hop lets
the client decide — matched targets merge plainly, diverged ones load their
module or fall back to a document navigation. Boundaries (`<try>`/`<await>`
bodies and placeholders) and lazy children construct from their own sections'
shells, so every ordinary section participates.

A shell is emitted at most once per patch response per section
(`State.sentShells` dedups server-side). The applier registers each entry
into a client-side `shells` map before merges dispatch; compiled
dispatch then constructs diverged branches from it (`createBranch` with a
setup-less renderer), pairs the patch scope, and runs the target's registered
merge as a hole-filling setup.

### Boundary pending facts and settle frames

A `<try>` with an `@placeholder` whose body is still pending at flush time
writes a pending fact on the parent scope: `BoundaryAnchor:<accessor> = ""`
(the same stash a pending document render serializes for resume). The client
shows the placeholder — a real setup render of the placeholder's
page-registered content renderer against the live owner scope — while the try
body constructs detached from its own shell.

Each pending `<await>` inside the body delivers its resolved branch as a later
frame in resolution order: ordinary fills that link `BranchScopes:<accessor>`
on the (retained) patch scopes, which the re-dispatched compiled merge
constructs from the body section's shell. The last settling segment tombstones
the pending fact (`BoundaryAnchor:<accessor> = 0` rides its frame), and the
dispatch swaps the placeholder out for the completed body. Frames are
idempotent: a replayed settle frame re-dispatches into already-live branches
and no-ops (pinned by `persisted-update-replayed-settle-frame`).

An `<await>` that REJECTS during a patch render has no body to deliver this
way: async catch delivery is reorder-based, so the render aborts and the
router falls back to the full document, whose own reorder stream renders the
catch branch.

### Ready batches

A lazy module's resume data rides its owning frame as a keyed entry
(`writeReady`'s patch-mode branch in `html/writer.ts`): a string ready id in
slot 0, followed by ordinary fills and effect entries. Inside a batch, an array of strings is a
dependency marker naming other lazy modules whose batches must drain first.
The applier parks the batch until the module declares ready and fires the
module's registered load trigger; this is the data-driven equivalent of the
document's blocking `.b` channel. A lazy child's DOM constructs immediately
from its root section's shell; the batch delivers its behavior. When parked
work replays, batch data fills land first, then parked dispatch constructs
and pairs branches, then the replayed effect entries run — effects resolve
patch scopes to their paired live branches.

A module whose load fails (deploy skew: the chunk no longer exists) can never
declare ready, so its parked work would stall silently. This failure is
post-apply, so it cannot reach the transport as a frame-apply throw; instead
each route's exported `patch(fail?)` factory accepts a failure sink that the
newest navigation owns, and `_load_ready` reports the load rejection through
it (in debug builds wrapped with a message naming the stalled update). Run
must treat the notification like a frame application error and replace the
document; with no sink registered the rejection is rethrown rather than
swallowed. Pinned by `persisted-update-lazy-load-failure`.

### Reorder chunks and the navigation epoch

Patch responses never contain reorder chunks; pending async work arrives as
later frames (in resolution order), and boundary bodies use the entries above.
Reorder chunks (`<t hidden ...>` plus swap scripts) belong to the initial
document stream. On persisted pages the inlined reorder runtime
(`PERSISTED_REORDER_RUNTIME_CODE`) captures the render's navigation epoch when
it installs and compares it before the final swap; applying a patch advances
the epoch (`bumpNavEpoch` in `src/dom/resume.ts`), so a still-streaming
pre-navigation chunk no-ops instead of landing old content in the patched
page.

## Reserved keys

Scope keys longer than one character carry typed prefixes; bare single-char
props stay unambiguous because the applier checks key length before prefix
(see `common/accessor.ts` for the reservation contract). Debug builds spell
the long names; optimized builds use the single characters.

| Token | Debug form             | Kind   | Meaning                                                                                                                                                                                                                                               |
| ----- | ---------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `A`   | `BranchScopes:`        | prefix | branch scope(s) at a node accessor: a scope, a branch array for loops (an explicit empty array means "now zero branches")                                                                                                                             |
| `C`   | `#BranchAccessor`      | prop   | a branch's owning node accessor; on a native hop's patch branch scope it is present only when the element is contentless, letting `_update_dynamic` rebuild it in place on tag-name divergence (content-bearing changes fall back to a document load) |
| `D`   | `ConditionalRenderer:` | prefix | outcome at a anchor: renderer id string (hop), branch index number (`<if>`; `-1` = no branch), `0` = removed hop                                                                                                                                      |
| `M`   | `#LoopKey`             | prop   | a keyed loop item's key on its own branch scope                                                                                                                                                                                                       |
| `R`   | `#Renderer`            | prop   | tag name stamped on a native-tag hop's branch scope in patches; `_update_dynamic` requires it to descend a native branch (a lazy component's register id can be a valid localName, so the discrimination is structural, never name-based)             |
| `Q`   | `PatchHole:`           | prefix | captured text-hole value consumed by the registered `_text` handler                                                                                                                                                                                   |
| `R`   | `PatchHtml:`           | prefix | captured unsafe-html hole; replaces its DOM range and is consumed on apply                                                                                                                                                                            |
| `N`   | `PatchAttr:name:`      | prefix | captured attribute/controllable value (`class`/`style`/`textContent`/controllables carve out their own helpers)                                                                                                                                       |
| `T`   | `BoundaryAnchor:`      | prefix | `<try>` placeholder state on the parent scope; a string means the placeholder is showing, tombstoned to `0` when the body settles                                                                                                                     |

`T` and the patch family are `AccessorPrefix`/`AccessorProp` enum members;
the enums inline at build time, so unused members never reach non-persisted
client bundles. The `!` character also appears in content-merge register ids
(`UPDATE_MERGE_SUFFIX`) and a pending placeholder's branch-end marker in
document markup. Each lives in a different lookup, so they do not collide.

## Trust boundary

Frames are same-origin application output encoded by Marko's serializer, not
user data. Run transports and splits the stream but does not interpret fills.
The applier executes each frame through a script element carrying the
document's nonce (read from the first `script[nonce]` in the page), the same
CSP-compatible path document resumes use; a page whose policy blocks inline
script without that nonce blocks frames identically.

What the client validates:

- **Routing**: only same-origin, matcher-matched navigations are fetched, and
  the request pins the route index and build hash the server must re-verify.
- **MIME**: a response without the patch content type is never executed; it
  takes the document fallback.
- **Frame execution**: each nonempty line is trusted Marko output. Evaluation
  or application errors reach the document fallback; metadata-only frames are
  valid.
- **Live-state races**: frames are idempotent, so a replayed settle frame
  no-ops (`persisted-update-replayed-settle-frame`). A failed apply is
  terminal because earlier frame mutations are not rolled back; fallback
  replaces the document.
- **Epoch**: starting a navigation aborts the prior fetch and advances the
  navigation epoch, so frames and reorder chunks from a superseded navigation
  are ignored.

What the client trusts: fill structure and values, shells
(template and walks strings), effect registry ids, and `$global` partials.
These are compiler/serializer output, like a document resume payload; the
protocol boundary is route, build, MIME, and origin, not internal payload
validation.

## Examples

Real frames captured from the optimized fixture harness, abridged. Register
ids (`a2`, `a8`), accessors (`c`, `h`), and scope ids are build-local.

### Cross-route hop, constructed

`persisted-update-construct-hop`, navigating dashboard back to home. The home
body constructs from its shell; the response is one frame:

```
[[0,"a2","<p class=home>welcome home</p>","b"],
 _=>[1,{c:_(2)},{Dc:"a2",Ac:_(3)}],
 "b2 2 a8 1"]
```

- The shell registers renderer `a2` with its values-free
  template and walks (`"b"`), once for this patch.
- The fill opens at scope 1, whose partial links child scope 2. Scope 2
  records the hop outcome (`ConditionalRenderer:c` = renderer `a2`) and the
  branch link to scope 3. The client compares `a2` with its live renderer:
  matched, it applies the registered merge; diverged, it constructs the
  branch from the shell (adopting scope 3 as the branch's identity) and runs
  the target's merge as a hole-filling setup.
- The effect entry lists registry/scope pairs for every effect anchor the
  render passed (`b2` on scope 2, `a8` on scope 1); the applier replays one
  only when its live pair was created during this apply, or when it is a
  registered `$global`-refreshing effect on a matched scope.

### Cross-route hop, composed shell

`persisted-update-construct-hop`, navigating home to the dashboard. The
dashboard body renders child templates and a keyed loop; its shell is a
composed source resolved through the server registry, so the whole subtree
still constructs:

```
[[0,"a6","<h2 class=greeting> </h2><button class=bump>tally <!></button><button class=widget><!> clicked <!></button><ul class=metrics></ul><!><!>","D l0& Db%l/ D%c%l& b%c"],
 [0,"a4","<li><!>: <!></li>"," D%c%l"],
 _=>[0,{seed:5,step:2},{c:_(2)},{Dc:"a6",Ac:_(3)},
     {Qa:"hello ada",Ag:[_(6),_(7)],Dh:-1,l:0,b:_(4),f:_(5)},
     {a:0,U:_(4,"c0")},{Qb:"pro",g:0},
     {"Nclass:a":"focus",Qb:"views",Qc:10,M:"views",_:_(3)},
     {"Nclass:a":!1,Qb:"clicks",Qc:3,M:"clicks",_:_(3)}],
 "c2 4 d1 5 a7 3 b2 2 a8 1"]
```

- The dashboard shell (`a6`) carries the statically inlined children's
  markup spliced into the parent template, exactly as the DOM build does at
  bundle time; the keyed body (`a4`) ships its own shell for the loop's
  items.
- Scope 3 carries the state seed (`l:0` and friends — a fresh branch seeds
  its `<let>` values), hole captures (`Qa`), the explicit branch list
  `Ag` = scopes 6–7, and the `<if>` outcome `Dh:-1`. Constructing the
  branch adopts these fill scopes; the walk binds nodes straight onto them
  and nested dispatches construct recursively.

### Same-route divergence, two constructions in one frame

`persisted-update-construct-hop`, same dashboard route with a new list key and
a newly-true `<if>`. No knowledge of what the client holds is needed: matched
keys merge locally and fresh structure constructs:

```
[[0,"a6",…],[0,"a4","<li><!>: <!></li>"," D%c%l"],
 [0,"a5","<p class=admin>admin tools enabled</p>","b"],
 _=>[0,{seed:5,step:2},{c:_(2)},{Dc:"a6",Ac:_(3)},
     {Qa:"hello grace",Ag:[_(6),_(7),_(8)],Dh:0,Ah:_(9),l:0,b:_(4),f:_(5)},
     {a:0,U:_(4,"c0")},{Qb:"free",g:0},
     {"Nclass:a":!1,Qb:"views",Qc:70,M:"views",_:_(3)},
     {"Nclass:a":"focus",Qb:"clicks",Qc:21,M:"clicks",_:_(3)},
     {"Nclass:a":!1,Qb:"sales",Qc:7,M:"sales",_:_(3)}],
 "c2 4 d1 5 a7 3 b2 2 a8 1"]
```

- Every item ships the same sparse fills, matched or fresh. The client
  matches `views`/`clicks` locally and merges them; the fresh `sales` key
  (scope 8) is constructed from the `a4` shell in the keyed reconciler's
  create callback, and branch scope 9 constructs from `a5` when the live
  `<if>` diverges.

### Pending boundary, three frames

`persisted-update-construct-two-awaits`, cross-route into a page whose `<try>`
body holds two pending `<await>`s. Frame 1 constructs the hop, try body, and
pending fact; frames 2–3 settle each await in resolution order:

```
[[0,"a9","<!><!><!>","b%c"],[0,"a8","<!><!><!><!>","b%b%c"],
 [0,"a4","<p class=report> </p>","D l"],[0,"a5","<p class=summary> </p>","D l"],
 _=>[1,{Dc:"a9",Ac:_(2)},{Ta:"",Aa:_(3)},{C:"a"}]]
[_=>[3,{Aa:_(4)},{Qa:"report for sales"}],"a10 1"]
[_=>[2,{Ta:0},{Ab:_(5)},1,{Qa:"summary of sales"}]]
```

- Frame 1 ships four shells (hop content `a9`, try body `a8`, and each
  await's body) plus fills: the hop outcome, the pending fact `Ta:""`
  (`BoundaryAnchor:a`), the try branch link (scope 3, whose `C` fact is the
  boundary's accessor), and nothing else. The client constructs the hop and
  the try body (detached), and shows the placeholder built from its
  page-registered content renderer.
- Frame 2 links the first await's branch (scope 4) and fills its hole; the
  re-dispatched merge constructs it from `a4` inside the detached body.
- Frame 3 links the second await's branch and carries the tombstone
  `Ta:0` — the last settling segment — so the dispatch dismisses the
  placeholder and inserts the completed body.
