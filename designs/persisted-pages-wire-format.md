<!-- cspell:ignore Mnavigate Nclass -- render-id and accessor-key artifacts in captured frame examples -->

# Persisted pages: wire format

This is the protocol specification for persisted-page navigation: the request
negotiation, the newline-delimited frame stream a patch response carries, the
reserved key namespaces the frames and the live page share, and the possession
echo a request sends. Every grammar rule here is implemented by
`packages/runtime-tags/src/html/writer.ts` and `html/serializer.ts` (producer),
`src/dom-persisted.ts`, `src/dom/update.ts`, `src/dom/update-merges.ts`, and
`src/dom/update-fragment.ts` (consumer), and `@marko/run`'s `runtime/persisted-protocol.ts` /
`runtime/persisted-navigation.ts` / `runtime/internal.ts` (transport).
Vocabulary is defined in `persisted-pages-glossary.md`.

## Transport

An enhanced navigation sends the original request again with negotiation
headers
(`createPatchRequestHeaders` in run's `persisted-protocol.ts`):

| Header          | Value                                                                  |
| --------------- | ---------------------------------------------------------------------- |
| `accept`        | `text/marko-patch`                                                     |
| `x-marko-route` | target route's build-stable numeric index                              |
| `x-marko-from`  | the live page's current route index                                    |
| `x-marko-build` | build hash; both sides must be the same build                          |
| `x-marko-have`  | possession echo (JSON, ASCII-escaped); omitted when empty or oversized |

The server accepts patch mode only when the matched route index and build hash
equal the header values (`matchesPatchRequest`). Outcomes by method
(`initializePersisted` in run's `runtime/internal.ts`):

- **Matched GET/HEAD/POST**: the handler runs normally and `context.render`
  produces a patch response: a newline-delimited frame stream with
  `content-type: text/javascript;charset=UTF-8`, `cache-control: no-store`,
  and `vary: accept`. A patch varies by live-page state (the echo) and must
  never enter a shared document cache.
- **Mismatched GET/HEAD**: rejected before any handler runs with an empty
  `409` response carrying `cache-control: no-store` and `vary: accept`
  (`createPatchMismatchResponse`). The client performs the original document
  navigation.
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
non-patch body (including the 409) takes the fallback. Because persisted
builds serve two representations of every page URL, document responses also
carry `vary: accept`; a handler-supplied `ResponseInit` keeps its status and
headers but the framework-owned `content-type`/`vary` pair is reapplied
(`applyPersistedResponseHeaders`).

Server-side, the negotiated request facts ride `render()`'s options argument
as `{ persisted: { patch: { fromRoute, targetRoute, possessed? } } }`, kept
off `$global` (which is the request context). The renderer derives everything
else: `fromRoute !== targetRoute` selects fresh-structure delivery; no
application-facing mode is exposed.

## Frame grammar

A patch response body is a stream of **frames**, one per line. Each frame is a
bare JavaScript array expression produced by the serializer (the same fill
grammar a document render assigns to `<runtimeId>.<renderId>.r`, without the
runtime prefix). The serializer escapes newlines inside string values, so the
newline is an unambiguous frame delimiter; the router splits on it and applies
each frame atomically, so completed frames update the page while later async
work is still pending (`navigate` in run's `persisted-navigation.ts`).

The applier (`createPatch` in `src/dom-persisted.ts`) executes each line
through a nonce-bearing script element and collects the resulting array's
elements. A frame element is one of:

| Shape                                            | Kind                |
| ------------------------------------------------ | ------------------- |
| `_=>[...]` or `(_,$)=>...` (function)            | scope fills         |
| `"registryId scopeId ..."` (string)              | effect entry        |
| `[scopeId, "accessor", prefix, html, scopeIds?]` | fragment entry      |
| `[branchId, 0, prefix, html, scopeIds?]`         | boundary-body entry |
| `["readyId", ...fills]` (string in slot 0)       | ready batch         |

Any other element shape is dropped; a frame that executes without producing at
least one usable element is a protocol failure (see the trust boundary below).

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

Two consequences of the fill grammar are defined behavior rather than
protocol failures (pinned by `persisted-update-corrupt-fills`):

- **Duplicate ids merge, last key wins.** Two partials claiming the same
  patch scope combine key-by-key with the later value winning -- the same
  extension rule that lets later frames add keys to earlier scopes, applied
  within one frame. The serializer never emits an intra-frame duplicate, but
  the applier does not distinguish the cases.
- **Unknown ids resolve to an empty patch scope.** A `_(N)` reference no
  fill populates creates a scope with nothing to say, and absent keys mean
  unchanged, so the merge no-ops. A corrupted link therefore leaves the
  page stale (its orphaned fills are never read), not wrong-merged; within a
  well-formed frame the grammar cannot distinguish a broken reference from
  an intentional sparse skip (see the trust boundary below).

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
malformed echo makes the server ship fragments for sites the page in fact
holds). A matched keyed `<for>` item carrying an entry is swapped in place --
the keyed diff replaces the live branch with the fragment subtree, retiring
the old branch through the same removal path as a departing key.

A frame may carry several fragment entries: the first same-route capture rides
the main chunk chain, and additional simultaneous swaps render onto detached
chunks that each emit their own entry (`State.writeFragments`).

### Boundary-body entries

A `<try>` boundary whose placeholder shipped earlier (inside a fragment, or
because the echo proved the live page still shows its placeholder) delivers
its resolved body as a separate entry, discriminated from fragment entries by
the `0` in the accessor slot:

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
| `Q`   | `PatchHole:`           | prefix       | captured text-hole value for the generic applier (`_text`)                                                                                                                                                                                |
| `R`   | `PatchHtml:`           | prefix       | captured unsafe-html hole; replaces its DOM range and is consumed on apply                                                                                                                                                                |
| `N`   | `PatchAttr:name:`      | prefix       | captured attribute/controllable value (`class`/`style`/`textContent`/controllables carve out their own helpers)                                                                                                                           |
| `S`   | `PatchChild:`          | prefix       | parent-to-child scope link for update-generic children (generic descent, no compiled dispatch)                                                                                                                                            |
| `Z`   | `RendererSite:`        | prefix       | build-stable site id of a dynamic-tag hop or structural `<if>`, stashed for the echo's value-compare entries                                                                                                                              |
| `T`   | `BoundarySite:`        | prefix       | `<try>` placeholder boundary site id on the parent scope; a string value means "placeholder still showing", tombstoned to `0` when the body ships                                                                                         |
| `F`   | `ForSite:`             | prefix       | keyed `<for>` item's site id on its own branch scope (empty string for ordinary keyed loops); existence-only echo entries                                                                                                                 |
| `P`   | (none)                 | client stash | fragment entry parked on its anchor's patch scope (`P<accessor>`), never serialized                                                                                                                                                       |
| `!`   | (none)                 | client stash | boundary-body entry parked on the try's patch scope, never serialized                                                                                                                                                                     |

`Z`, `T`, `F`, and the `PatchHole`/`PatchHtml`/`PatchAttr`/`PatchChild`
family are deliberately not `AccessorPrefix` enum members so they stay out of
non-persisted client bundles. The `!` character also appears in three other
disjoint namespaces: the `!` prefix on possession-echo keys (existence-only
entries), the `!` suffix on content-merge register ids
(`UPDATE_MERGE_SUFFIX`), and the `!` accessor token in a fragment's
placeholder branch-end marker. Each lives in a different lookup (scope key,
header JSON key, registry id, marker token), so they never collide.

## Possession echo

`x-marko-have` is a JSON object built by walking the live scope tree (`_have`
in `src/dom/update-fragment.ts`): for each participating site the page holds,
one entry proving what is there. Site keys are `/`-joined paths of encoded
segments (`encodePossessionSite`/`encodePossessionValue` in
`common/helpers.ts`):

```
segment  = "i" <idLength> ":" <siteId> [ "=" value ]
value    = "s" <strLength> ":" <string>   (string loop key)
         | "n" <number>                   (numeric loop key)
sitePath = segment ("/" segment)*
```

Each enclosing keyed-loop iteration contributes a segment carrying its loop
site id and key, outermost first, so a site repeated across (nested) loop
iterations stays unambiguous. Loop keys are contractually `string | number`;
`-0` collapses onto `n0` because key maps use SameValueZero. Entries come in
two conventions:

- **Value-compare** (dynamic-tag hops and structural `<if>`s): the key is the
  site path and the value is what the site shows: a renderer id string for a
  hop, a stringified branch index for an `<if>`. The server ships a fragment
  when the target differs, and descends normally when it matches.
- **Existence-only** (prefixed `!`): the value is always `"1"`. A
  `!`-prefixed boundary path means "this matched `<try>` still shows its
  placeholder", so the server delivers the body as markup. A `!`-prefixed
  loop-item path proves that exact keyed item is live, so the server ships
  fragments only for genuinely new keys.

Example (nested keyed loops, optimized ids):

```
{"!i2:a0=s1:a":"1",
 "!i2:a0=s1:a/i2:a2=s4:same":"1",
 "!i2:a0=s1:b":"1",
 "!i2:a0=s1:b/i2:a2=s4:same":"1"}
```

Outer loop site `a0` holds items keyed `"a"` and `"b"`; nested loop site `a2`
holds an item keyed `"same"` under each.

Site ids are the compiler's build-stable per-site register ids (preallocated
during analysis), not runtime scope ids, which drift between the document and
patch renders. The client reads them back off the resumed scope stashes (`Z`,
`T`, `F` above).

Fetch headers must be byte-safe, so the router escapes all non-ASCII
characters to `\uXXXX` and omits the header entirely when the escaped value
exceeds 4096 characters (`encodeHave` in run's `persisted-protocol.ts`).
Omission (or a malformed value, which the server ignores) is safe but
lossy: with no echo, every site is unproven, so a cross-route render captures
at the first hop and a same-route render ships fragments for possessed sites.
All of them apply authoritatively -- `<if>`/hop entries replace the branch,
and keyed loops swap each matched item for its fragment subtree -- so the
navigation still lands as a patch; the cost is fragment bytes and replaced
in-branch client state instead of sparse fills.

## Trust boundary

Frames are same-origin application output encoded by Marko's serializer, not
user JSON. Run transports and splits the stream but does not interpret it.
The applier executes each frame through a script element carrying the
document's nonce (read from the first `script[nonce]` in the page), the same
CSP-compatible path document resumes use; a page whose policy blocks inline
script without that nonce blocks frames identically.

What the client validates:

- **Routing**: only same-origin, matcher-matched navigations are fetched, and
  the request pins the route index and build hash the server must re-verify.
- **MIME**: a response without the patch content type is never executed; it
  takes the document fallback.
- **Frame shape**: a parse error runs nothing and reports a non-frame body; a
  frame that executes but yields no usable fills throws (a swallowed frame
  would be a half-applied navigation). Both reach the router's catch, which
  falls back to a full navigation without committing history for an unapplied
  patch.
- **Pairing integrity**: compiled merges fail loudly on structural lies: a
  renderer/branch mismatch without a fragment entry, a stable-loop count
  change, a boundary body for a boundary that already settled. Failure
  abandons the update and the router loads the target document; the applier
  never guesses from surrounding DOM. A failed apply is terminal for the page
  object as well as the navigation: fills merged before the throw are not
  rolled back, which is safe only because the fallback replaces the document.
- **Epoch**: starting a navigation aborts the prior fetch and advances the
  navigation epoch, so frames and reorder chunks from a superseded navigation
  are ignored.

What the client trusts: the values themselves. Fill values, fragment HTML,
effect registry ids (resolved only against the page's own resume registry),
and `$global` partials are trusted application output, exactly as a document
render's resume payload is. The protocol boundary is negotiation (route,
build, MIME, origin) plus structural integrity, not value inspection.
Corruption that stays inside the trusted value layer is accordingly not
detected: duplicate or unknown scope ids resolve through sparse-merge
semantics (see "Scope fills"), and a corrupted fragment scope-id list
silently strands its dom-less scopes' wiring (`stampFragmentScopes` cannot
distinguish a truncated list from a capture that serialized fewer scopes;
pinned by `persisted-update-corrupt-scope-list`, recorded in
`agent-feedback/bugs.md`).

## Examples

Real frames captured from the optimized fixture harness, abridged. Register
ids (`a2`, `b1`), accessors (`c`, `g`), and scope ids are build-local.

### Cross-route hop

`persisted-update-fragment`, navigating dashboard back to home. The request
echoed `{"i2:b1":"a7", "i2:a6":"0", "!i2:a5=s5:views":"1", ...}` (hop site
`b1` holds the dashboard renderer `a7`); the target renderer is `a2`, so the
hop diverges and the response is one frame:

```
[_=>[,{c:_(2)},{Dc:"a2",Zc:"b1",Ac:_(3)}],
 [2,"c","Mnavigate","<p class=home>welcome home</p>"],
 "b0 2 a0 1"]
```

- The fill elides the root id (`[,{...}]` means scope 1), whose partial links
  child scope 2. Scope 2 records the hop outcome: renderer `a2`
  (`ConditionalRenderer:c`), the site stash (`RendererSite:c`), and the branch
  link to scope 3.
- The fragment entry anchors at scope 2, accessor `c`; the markup carries no
  markers (static content) and no trailing scope-id list (nothing serialized
  during the capture; the applier stamps the anchor's branch scope itself).
- The effect entry lists registry/scope pairs for every effect site the
  render passed (`b0` on scope 2, `a0` on scope 1); the applier replays one
  only when its live pair was created during this apply, or when it is a
  registered `$global`-refreshing effect on a matched scope.

### Same-route divergence, two fragments in one frame

`persisted-update-fragment`, same dashboard route with a new list key and a
newly-true `<if>`. The echo proved items `views`/`clicks` live; `sales` is
new, and if site `a6` showed `-1`:

```
[_=>[0,{seed:5,step:2},{c:_(2)},{Dc:"a7",Zc:"b1",Ac:_(3)},
     {Qa:"hello grace",Ag:[_(6),_(7),_(8)],Dh:0,Ah:_(9),Zh:"a6",b:_(4),f:_(5)},
     1,{Qb:"free"},
     {"Nclass:a":!1,Qb:"views",Qc:70,M:"views",_:_(3),Fg:"a5"},
     {"Nclass:a":"focus",Qb:"clicks",Qc:21,M:"clicks",_:_(3),Fg:"a5"},
     {M:"sales",_:_(3),Fg:"a5"}],
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
[_=>[,{c:_(2)},{Dc:"a4",Zc:"b1",Ac:_(3)},{g:new Set},{_:_(3),C:"b",Q:_(3,"a8")}],
 [2,"c","Mnavigate","<h2 class=greeting>hello ada<!--Mnavigate*3 a--></h2><!--Mnavigate[--><!--Mnavigate[--><p class=loading>crunching numbers…</p><!--Mnavigate]4 ! 5--><!--Mnavigate]3 b 4--><p class=footer>…</p>",[4,3]],
 "b0 2 a0 1"]
[_=>[7,{_:_(4),a:_(8)},{g:0},{M:0,Fb:"a6"}],
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
