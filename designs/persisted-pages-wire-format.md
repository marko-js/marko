<!-- cspell:ignore Mnavigate Nclass -- render-id and accessor-key artifacts in captured frame examples -->

# Persisted pages: wire format

This is the protocol specification for persisted-page navigation: the request
negotiation, the newline-delimited frame stream a patch response carries, the
reserved key namespaces the frames and the live page share, and the opaque
possession token a request sends. Every grammar rule here is implemented by
`packages/runtime-tags/src/html/writer.ts` and `html/serializer.ts` (producer),
`html/persisted-token.ts` (server codec), `src/dom-persisted.ts`,
`src/dom/update.ts`, `src/dom/update-merges.ts`, and
`src/dom/update-fragment.ts` (consumer), and `@marko/run` (transport).
Vocabulary is defined in `persisted-pages-glossary.md`.

## Transport

An enhanced navigation sends the original request again with negotiation
headers:

| Header          | Value                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| `accept`        | `text/marko-patch`                                                           |
| `x-marko-route` | target route's build-stable numeric index                                    |
| `x-marko-from`  | the live page's current route index                                          |
| `x-marko-build` | build hash; both sides must be the same build                                |
| `x-marko-have`  | opaque server-issued possession token; omitted when unavailable or oversized |

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
descriptor, patch?: { fromRoute, targetRoute, have?, source? } } }`, kept off
`$global`. `descriptor` is the required target-route dictionary; `source` is
present only with a validated `have` token. Route identity selects
fresh-structure delivery without exposing an application mode.

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

| Shape                                            | Kind                |
| ------------------------------------------------ | ------------------- |
| `_=>[...]` or `(_,$)=>...` (function)            | scope fills         |
| `"registryId scopeId ..."` (string)              | effect entry        |
| `[scopeId, "accessor", prefix, html, scopeIds?]` | fragment entry      |
| `[branchId, 0, prefix, html, scopeIds?]`         | boundary-body entry |
| `["readyId", ...fills]` (string in slot 0)       | ready batch         |
| `"~=<token>"` or `"~+<prefix>.<suffix>"`         | possession metadata |

The first frame replaces possession metadata with `~=`. Later frames may use
`~+`, where `prefix` is the base-36 length of the unchanged token prefix and
`suffix` is the new tail. Metadata-only frames are valid.

### Scope fills

A fill callback receives the serialize context `_` and returns the fill array
(`writeScopesRoot` in `html/serializer.ts`; applied by `applyScopes` in
`src/dom/update.ts`):

- Slot 0 is the first scope id. Patch payloads elide the conventional root id
  `1` as an array hole (`_=>[,{...}]`); the applier defaults only an
  `undefined` first slot to `1`. Global fills still write `0` explicitly, and
  a fill whose first flushed scope is neither is written literally
  (`_=>[7,{...}]`).
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

### Fragment entries

A fragment entry delivers a diverging branch as resumable HTML
(`writeFragmentEntry` in `html/writer.ts`):

```
[anchorScopeId, "accessor", markerPrefix, html, scopeIds?]
```

- **anchor**: the scope id and node accessor of the site being swapped. For
  `<if>`/dynamic-tag sites this is the owning scope plus the site's accessor;
  for a keyed `<for>` item it is the item's own branch scope id plus the
  loop's accessor. The applier stashes the entry on the anchor's patch scope
  under the reserved `P` prefix and the compiled dispatch for that site
  consumes it.
- **markerPrefix**: the render's comment prefix (`runtimeId + renderId`, e.g.
  `"Mnavigate"`). The fragment walker binds only comments starting with it.
- **html**: the captured markup with values baked in, including resume
  markers, branch brackets, and the compressed node-marker continuation form
  (`M_* <accessor>` reuses the previous marker's scope id) that document
  resume also understands.
- **scopeIds** (optional): ids of scopes serialized during the capture, which
  the applier stamps with live identity so dom-less scopes (state and
  tag-variable wiring only, no marker reaches them) can pair and receive
  effects. The list is drained per flush, so the first entry a flush emits
  may carry the union of that flush's ids (stamping is idempotent). While a
  capture renders keyed content, ids already reachable by node markers are
  subtracted (the walker stamps those itself); non-keyed captures keep the
  full list. An empty list is omitted.

Fills for a fragment's scopes ride the ordinary fill callbacks of the same
frame, in the same patch-local id space, but hole captures and structural
patch keys are withheld: the values are baked into the markup, and the parsed
fragment's scopes ARE the live scopes once stamped. The entry is authoritative
for the site it addresses, uniformly across site kinds: it applies even when
the live renderer, branch, or keyed item already matches (an omitted or
malformed token makes the server ship fragments for sites the page in fact
holds). A matched keyed `<for>` item carrying an entry is swapped in place --
the keyed diff replaces the live branch with the fragment subtree, retiring
the old branch through the same removal path as a departing key.

A frame may carry several fragment entries: the first same-route capture rides
the main chunk chain, and additional simultaneous swaps render onto detached
chunks that each emit their own entry (`State.writeFragments`).

### Boundary-body entries

A `<try>` boundary whose placeholder shipped earlier (inside a fragment, or
because the source token proves the live page still shows its placeholder)
delivers its resolved body as a separate entry, discriminated from fragment
entries by the `0` in the accessor slot:

```
[tryBranchId, 0, markerPrefix, html, scopeIds?]
```

The applier stashes the entry on the try's patch scope under the reserved `!`
key; the compiled branch dispatch (`_update_branch`) applies it once pairing
resolves the live branch, swapping the parsed content in where the
placeholder branch sits. The entry's effects ride the same frame as an effect
entry appended after it. Application is once-only: the applied entry is
consumed (later frames' re-dispatches take the ordinary fills path), and a
new entry for a boundary that is no longer pending -- a stale duplicate, since
matched boundaries update through fills and the server sends one body per
boundary per navigation -- fails the apply rather than re-parsing markup over
the live subtree (`_update_branch`'s pending guard; pinned by
`persisted-update-stale-boundary-body`). An `<await>` that REJECTS during a
patch render has no body to deliver this way: async catch delivery is
reorder-based, so the render aborts (`tryCatch`'s patch guard in
`html/writer.ts`) and the router falls back to the full document, whose own
reorder stream renders the catch branch. Inside a fragment's markup, the placeholder branch is
bracketed with the literal `!` accessor token
(`<!--Mnavigate]4 ! 5-->`), which the fragment walker binds to the branch's
`PlaceholderBranch` slot so the swap can find it.

### Ready batches

A lazy module's resume data rides its owning frame as a keyed entry
(`writeReady`'s patch-mode branch in `html/writer.ts`): a string ready id in
slot
0 (fragment and boundary-body entries start with a number), followed by
ordinary fills and effect entries. Inside a batch, an array of strings is a
dependency marker naming other lazy modules whose batches must drain first.
The applier parks the batch until the module declares ready and fires the
module's registered load trigger; this is the data-driven equivalent of the
document's blocking `.b` channel. Batches join the frame after the fragment
and boundary-body entries whose markup carries their subtrees.

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

| Token | Debug form             | Kind         | Meaning                                                                                                                                                                                                                                   |
| ----- | ---------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `A`   | `BranchScopes:`        | prefix       | branch scope(s) at a node accessor: a scope, a branch array for loops (an explicit empty array means "now zero branches")                                                                                                                 |
| `D`   | `ConditionalRenderer:` | prefix       | outcome at a site: renderer id string (hop), branch index number (`<if>`; `-1` = no branch), `0` = removed hop                                                                                                                            |
| `M`   | `#LoopKey`             | prop         | a keyed loop item's key on its own branch scope                                                                                                                                                                                           |
| `R`   | `#Renderer`            | prop         | tag name stamped on a native-tag hop's branch scope in patches; `_update_dynamic` requires it to descend a native branch (a lazy component's register id can be a valid localName, so the discrimination is structural, never name-based) |
| `Q`   | `PatchHole:`           | prefix       | captured text-hole value consumed by the registered `_text` handler                                                                                                                                                                       |
| `R`   | `PatchHtml:`           | prefix       | captured unsafe-html hole; replaces its DOM range and is consumed on apply                                                                                                                                                                |
| `N`   | `PatchAttr:name:`      | prefix       | captured attribute/controllable value (`class`/`style`/`textContent`/controllables carve out their own helpers)                                                                                                                           |
| `T`   | `BoundarySite:`        | prefix       | `<try>` placeholder state on the parent scope; a string means the placeholder is showing, tombstoned to `0` when the body ships                                                                                                           |
| `P`   | (none)                 | client stash | fragment entry parked on its anchor's patch scope (`P<accessor>`), never serialized                                                                                                                                                       |
| `!`   | (none)                 | client stash | boundary-body entry parked on the try's patch scope, never serialized                                                                                                                                                                     |

`T` and the `PatchHole`/`PatchHtml`/`PatchAttr` family are deliberately not
`AccessorPrefix` enum members so they stay out of non-persisted client
bundles. The `!` character also appears in the server-only decoded possession
map, content-merge register ids (`UPDATE_MERGE_SUFFIX`), and a fragment's
placeholder branch-end marker. Each lives in a different lookup, so they do
not collide.

## Possession token

`x-marko-have` is an opaque server-issued token describing the server-owned
structure the live page should hold. The client never derives it from the DOM
or decodes it. An initial document stores the token on its render runtime; each
accepted patch frame replaces or advances it through its metadata element.
The router forwards the current value on the next navigation.

The server entry for each route exports a descriptor tuple of stable site ids
and renderer ids. Run supplies the live route’s descriptor as `source` and the
rendered route’s descriptor as `target`. `html/persisted-token.ts` decodes the
source token to the writer’s private `PersistedPossession` map and encodes the
target facts with the target descriptor.

The token grammar is direct RFC `tchar`, canonical, and capped at 4096 bytes.
It uses base-32 VLQ values over the base64url alphabet, descriptor ordinals for
known sites and renderers, typed raw-string escapes, grouped presence facts,
delta/range/bitset numeric key sets, stem-plus-decimal-suffix string key sets
(`k0`…`k4999` claims as one stem and one range), and token-local string
interning when the dictionary makes the complete token shorter. Every set form
competes by encoded length with a deterministic tie order, so decoding stays
canonical. Common one-site renderer and pending-boundary facts use
two-character scalar forms. `PA` is the canonical explicit empty replacement.

The decoded server shape retains nested site paths and typed `string | number`
loop keys. It distinguishes value comparisons (renderer or branch outcome)
from existence facts (live keyed items and pending boundaries). Those details
do not cross the client contract; they are free to change with the codec and
descriptor version embodied by one build.

Missing, malformed, noncanonical, or oversized tokens are ignored. With no
usable source facts, sites are unproven and the server chooses authoritative
fragment delivery. The navigation remains correct, but may send more markup
and replace client state inside those branches.

## Trust boundary

Frames are same-origin application output encoded by Marko's serializer, not
user data. Run transports and splits the stream but does not interpret fills.
It does retain the opaque possession metadata returned by each accepted frame.
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
- **Live-state races**: a boundary body arriving after its boundary settled is
  rejected (`persisted-update-stale-boundary-body`). A failed apply is terminal
  because earlier frame mutations are not rolled back; fallback replaces the
  document.
- **Epoch**: starting a navigation aborts the prior fetch and advances the
  navigation epoch, so frames and reorder chunks from a superseded navigation
  are ignored.

What the client trusts: fill structure and values, fragment HTML, effect
registry ids, and `$global` partials. These are compiler/serializer output, like
a document resume payload; the protocol boundary is route, build, MIME, origin,
and the untrusted `x-marko-have` token, not internal payload validation.

## Examples

Real frames captured from the optimized fixture harness, abridged. Register
ids (`a2`, `b1`), accessors (`c`, `g`), and scope ids are build-local.
Possession metadata elements are omitted from these examples.

### Cross-route hop

`persisted-update-fragment`, navigating dashboard back to home. The opaque
source token proves that hop site `b1` holds the dashboard renderer `a7`; the
target renderer is `a2`, so the hop diverges and the response is one frame:

```
[_=>[,{c:_(2)},{Dc:"a2",Ac:_(3)}],
 [2,"c","Mnavigate","<p class=home>welcome home</p>"],
 "b0 2 a0 1"]
```

- The fill elides the root id (`[,{...}]` means scope 1), whose partial links
  child scope 2. Scope 2 records the hop outcome (`ConditionalRenderer:c` =
  renderer `a2`) and the branch link to scope 3.
- The fragment entry anchors at scope 2, accessor `c`; the markup carries no
  markers (static content) and no trailing scope-id list (nothing serialized
  during the capture; the applier stamps the anchor's branch scope itself).
- The effect entry lists registry/scope pairs for every effect site the
  render passed (`b0` on scope 2, `a0` on scope 1); the applier replays one
  only when its live pair was created during this apply, or when it is a
  registered `$global`-refreshing effect on a matched scope.

### Same-route divergence, two fragments in one frame

`persisted-update-fragment`, same dashboard route with a new list key and a
newly-true `<if>`. The source token proves items `views`/`clicks` live;
`sales` is new, and if site `a6` previously showed `-1`:

```
[_=>[0,{seed:5,step:2},{c:_(2)},{Dc:"a7",Ac:_(3)},
     {Qa:"hello grace",Ag:[_(6),_(7),_(8)],Dh:0,Ah:_(9),b:_(4),f:_(5)},
     1,{Qb:"free"},
     {"Nclass:a":!1,Qb:"views",Qc:70,M:"views",_:_(3)},
     {"Nclass:a":"focus",Qb:"clicks",Qc:21,M:"clicks",_:_(3)},
     {M:"sales",_:_(3)}],
 [8,"g","Mnavigate","<li>sales<!--Mnavigate*8 b-->: <!>7<!--Mnavigate* c--></li><!--Mnavigate* a-->",[9]],
 "c1 4 d0 5 a4 3 b0 2 a0 1",
 [3,"h","Mnavigate","<p class=admin>admin tools enabled</p>"]]
```

- The fill starts at scope 0 (globals), scope 3 carries hole captures
  (`PatchHole:a`), the explicit branch list `BranchScopes:g` = scopes 6-8,
  and the `<if>` outcome flip (`ConditionalRenderer:h` = 0 with branch scope
  9). The bare `1` is a delta skipping scope 4's slot.
- Matched items (scopes 6, 7) are plain sparse merges: hole and attr captures
  only. The new `sales` item (scope 8) carries no captures; its content is
  the keyed fragment entry anchored at its own branch scope 8 under the
  loop's accessor `g`. The second marker in its markup uses the continuation
  form (`Mnavigate* c` reuses scope 8).
- The trailing `[9]` on the first entry is the flush's dom-less id union: 9
  is the second capture's branch scope (keyed captures subtract
  marker-reachable ids like 8).
- The second fragment entry (a detached additional capture) swaps the `<if>`
  at scope 3, accessor `h`, independently.

### Pending boundary, two frames

`persisted-update-fragment-await`, cross-route into a page whose `<try>` body
awaits. Frame 1 ships the fragment with the placeholder inside; frame 2
follows when the body resolves:

```
[_=>[,{c:_(2)},{Dc:"a4",Ac:_(3)},{g:new Set},{_:_(3),C:"b",Q:_(3,"a8")}],
 [2,"c","Mnavigate","<h2 class=greeting>hello ada<!--Mnavigate*3 a--></h2><!--Mnavigate[--><!--Mnavigate[--><p class=loading>crunching numbers…</p><!--Mnavigate]4 ! 5--><!--Mnavigate]3 b 4--><p class=footer>…</p>",[4,3]],
 "b0 2 a0 1"]
[_=>[7,{_:_(4),a:_(8)},{g:0},{M:0}],
 [4,0,"Mnavigate","<!--Mnavigate[--><button class=widget>pro<!--Mnavigate*8 b--> clicked <!>0<!--Mnavigate* c--></button><!--Mnavigate* a-->…<!--Mnavigate]4 a 7-->",[7]],
 "a7 7 c0 8"]
```

- Frame 1's markup brackets the placeholder as the try branch's `!` accessor
  (`Mnavigate]4 ! 5`): branch 4 is the try, 5 the placeholder branch the
  walker binds to `PlaceholderBranch`. The trailing `[4,3]` stamps the
  fragment's serialized scopes (non-keyed capture, full list).
- Frame 2's fill opens at scope 7 (no root hole: the root is not in this
  fill) and extends the shared patch id space. The boundary-body entry
  (`[4,0,...]`, `0` discriminating it from fragment entries) swaps the parsed
  body in over branch 4's placeholder; its effect entry runs against the
  scopes the entry created.
