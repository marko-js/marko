# Persisted pages: cost model and release gates

Persisted pages are justified only if they preserve Marko's first-load
advantage. Smooth subsequent navigation does not compensate for turning an MPA
into an eagerly shipped SPA.

Earlier prototype measurements covered different modes and benchmark apps that
have since been removed. They are not a baseline for this implementation. New
numbers must be generated from reproducible production builds and reviewed next
to the non-persisted build of the same app.

## Dated first-load evidence

On 2026-07-13, production builds of the same `marko-ecommerce` item route
reported 10.0 kB raw / 5.0 kB gzip with `persisted: false` and 21.4 kB raw /
9.9 kB gzip with `persisted: true`. The persisted build keeps the generated
route trie, navigation engine (1.1 kB gzip), update applier (3.1 kB gzip), and
route persisted modules out of the initial graph. Moving the route trie behind
the first eligible navigation removed 1.4 kB raw / 0.4 kB gzip from every
initial route without adding a sequential load: it fetches in parallel with the
navigation engine. Browser inspection also confirms that server-only divergent
panel markup is absent from all client JavaScript.

On 2026-07-15, after the review-readiness runtime and compiler phases (module
split, epoch gates, predicate unification, rename pass, matrix fixtures), the
same production comparison reports 10.0 kB raw / 5.0 kB gzip with
`MARKO_PERSISTED=0` and 19.6 kB raw / 9.2 kB gzip with the persisted default:
the persisted item route shrank by 1.8 kB raw / 0.7 kB gzip against the
2026-07-13 measurement with no change to the non-persisted baseline. The other
routes moved the same way (cart 18.7/8.6, search 19.3/9.1, swap 21.4/9.9
persisted versus 9.2/4.5, 9.8/4.9, 9.3/4.6 non-persisted).

These application totals predate the unified `?persisted` entry and opaque
possession token. They remain evidence that the phase boundary can keep route
navigation code lazy, but they are not a current release baseline. The
production applications must be rebuilt before ratcheting a first-load or
first-navigation budget.

The dated result is useful phase-separation evidence, not an acceptable
first-load result. The largest eager regression was the shared Marko resume
chunk (about 7.5 kB gzip in the persisted build versus 4.1 kB in the ordinary
build): update-only consumers of the published multi-entry runtime caused
additional shared symbols to be retained in the eager chunk. The current graph
must be remeasured before treating that attribution as unresolved or fixed.

## Patch wire attribution baseline

Run `npm run measure:wire` from `marko`. The command runs the optimized SSR
fixture harness for real update renders and captures the newline-delimited frames
before snapshot beautification; it does not infer payloads from source or regex
the JavaScript. Babel parses each controlled frame expression, then assigns
disjoint UTF-8 byte spans to frame/runtime syntax, scope fills and metadata,
ordinary values, node/branch markers or references, effects/registry entries,
fragment HTML/metadata, and lazy/async framing. The raw sum includes one newline
per frame and must equal the payload byte length. Gzip and Brotli category values
are proportional planning allocations of each payload's independently measured
compressed total. They are not expected savings or marginal recompression
results. The `x-marko-have` value is measured as raw header-value bytes only;
HTTP header compression, framing, and fixed negotiation headers are excluded.

Measured 2026-07-13 on the optimized runtime-tags fixtures (11 payloads, 12
frames):

| Case                                           | Payloads / frames |      Raw |     Gzip |   Brotli | `x-marko-have` raw |
| ---------------------------------------------- | ----------------: | -------: | -------: | -------: | -----------------: |
| Same-route sparse value/attribute update       |             1 / 1 |       84 |       91 |       88 |                  0 |
| Cross-route fragment hop                       |             2 / 2 |      814 |      488 |      437 |                107 |
| Cross-route fragment hop, same-route follow-up |             1 / 1 |      493 |      322 |      279 |                 72 |
| Async multi-frame update                       |             2 / 3 |      370 |      301 |      269 |                 14 |
| Keyed loop same/add/remove/reorder             |             3 / 3 |      919 |      612 |      553 |                269 |
| Conditional branch divergence                  |             2 / 2 |      354 |      327 |      284 |                 28 |
| **Total**                                      |       **11 / 12** | **3034** | **2141** | **1910** |                  — |

Response attribution is: node/branch markers or references 840 raw (27.7%,
549 gzip allocation), fragment HTML 691 (22.8%, 483), frame/runtime syntax 551
(18.2%, 411), ordinary values 343 (11.3%, 256), scope fills/ids/metadata 320
(10.5%, 237), effect/registry entries 111 (3.7%, 77), fragment metadata 178
(5.9%, 128), and lazy/async framing 0 (0.0%, 0). The largest request-side echo
is the keyed-loop case: 269 raw header-value bytes over three navigations.

### Accepted serializer/frame-shape optimization

The accepted change uses the existing scope-fill delta grammar. Update renders
always allocate patch scope `1` as their first non-global scope, so the
serializer emits that root as an array hole (`_=>[,{...}]`) instead of the
literal `1`; global fills still use `0`, and later sparse/delta slots retain
their existing meaning. The update applier defaults only an `undefined` first
slot to `1`, so the document/resume grammar is unchanged.

The representative token inventory was 12 `_=>` fill wrappers, 10 repeated
`"a0 1"` effect entries, 41 `M<renderId>` marker-prefix occurrences, and four
`new Set([_(2)])` values. Eight patch-root `1` tokens were removable in the
11-payload measurement. A shared callback was rejected because only one frame
had multiple fills; same-frame marker-prefix interning saved raw bytes but
increased Brotli, and lowering string deduplication from 12 to 7/8 increased
gzip despite a small Brotli win.

| Case                                           | Baseline raw / gzip / Brotli | Optimized raw / gzip / Brotli |
| ---------------------------------------------- | ---------------------------: | ----------------------------: |
| Cross-route fragment hop                       |              814 / 488 / 437 |               813 / 487 / 433 |
| Cross-route fragment hop, same-route follow-up |              493 / 322 / 279 |               493 / 322 / 279 |
| Async multi-frame update                       |              370 / 301 / 269 |               368 / 299 / 277 |
| Keyed loop same/add/remove/reorder             |              919 / 612 / 553 |               916 / 610 / 549 |
| Conditional branch divergence                  |              354 / 327 / 284 |               352 / 325 / 273 |
| Same-route sparse value/attribute update       |                 84 / 91 / 88 |                  84 / 91 / 88 |
| **Total**                                      |       **3034 / 2141 / 1910** |        **3026 / 2134 / 1899** |

The update runtime grew by 16 minified bytes and -1 to +18 Brotli bytes across
the persisted fixtures (the representative fragment fixture is +16 / +7). The
response saves 8 raw, 7 gzip, and 11 Brotli bytes over the measured 11 payloads,
amortizing the lazy update-runtime cost in roughly two raw or compressed
navigations in the worst measured case. No initial page runtime or ordinary
non-persisted output changes.

### Scope-list inventory and second optimization

The measured frames contain these concrete repeated opportunities:

- 12 `_=>` scope-fill wrappers, 10 repeated `"a0 1"` effect entries, 41
  `M<renderId>` marker-prefix occurrences, and four `new Set([_(2)])` values.
- Fragment entries pay 178 raw bytes of metadata. Their anchors/accessors repeat
  across same-route and keyed entries, while scope-id lists contain marker-owned
  ids that the fragment walker already stamps. Scope fills contribute 312 raw
  bytes after the root-id change (320 before it); consecutive ids use the existing
  implicit-slot convention and non-consecutive ids need their explicit deltas.
- Rejected candidates were marker-prefix interning, accessor/anchor defaults,
  scope-id delta codecs, callback grouping, and omission of branch links: each
  either increased Brotli or required a per-frame parser/codec. Empty scope-id
  lists are already omitted, and `0`/empty tuple values remain ordinary values.

The accepted second change is narrower: while a fragment capture renders keyed
content, the writer records node-marker scope ids in a compact per-capture
string and omits those ids from the trailing scope-id list. The walker stamps
marker-reachable scopes itself; only dom-less ids remain on the wire. Non-keyed
captures retain the old list exactly, preserving ordinary fragment behavior.
The applier and fragment scope stamping model are unchanged.

Measured 2026-07-14 against the 3026 / 2134 / 1899 baseline:

| Case                                           | Baseline raw / gzip / Brotli | Optimized raw / gzip / Brotli |
| ---------------------------------------------- | ---------------------------: | ----------------------------: |
| Cross-route fragment hop                       |              813 / 487 / 433 |               805 / 481 / 441 |
| Cross-route fragment hop, same-route follow-up |              493 / 322 / 279 |               491 / 321 / 280 |
| Async multi-frame update                       |              368 / 299 / 277 |               368 / 299 / 277 |
| Keyed loop same/add/remove/reorder             |              916 / 610 / 549 |               902 / 601 / 530 |
| Conditional branch divergence                  |              352 / 325 / 273 |               352 / 325 / 273 |
| Same-route sparse value/attribute update       |                 84 / 91 / 88 |                  84 / 91 / 88 |
| **Total**                                      |       **3026 / 2134 / 1899** |        **3002 / 2118 / 1889** |

The second change saves 24 raw, 16 gzip, and 10 Brotli bytes over 11 payloads.
The production update runtime is unchanged (8590 min / 3378 Brotli in the
representative fragment fixture), so the break-even is immediate.

### Current measurement

Re-measured 2026-07-16 with the unified `?persisted` entry, server-calculated
opaque token, and route descriptors: 11 payloads / 12 frames total **3072 raw /
2239 gzip / 2003 Brotli**.

| Case                                           | Payloads / frames |      Raw |     Gzip |   Brotli | `x-marko-have` raw |
| ---------------------------------------------- | ----------------: | -------: | -------: | -------: | -----------------: |
| Cross-route fragment hop                       |             2 / 2 |      821 |      500 |      467 |                 52 |
| Cross-route fragment hop, same-route follow-up |             1 / 1 |      506 |      343 |      310 |                 44 |
| Async multi-frame update                       |             2 / 3 |      389 |      313 |      277 |                  4 |
| Keyed loop same/add/remove/reorder             |             3 / 3 |      915 |      656 |      584 |                110 |
| Conditional branch divergence                  |             2 / 2 |      350 |      329 |      280 |                  4 |
| Same-route sparse value/attribute update       |             1 / 1 |       91 |       98 |       85 |                  2 |
| **Total**                                      |       **11 / 12** | **3072** | **2239** | **2003** |                  — |

Raw attribution is node/branch markers or references 840 (27.3%), fragment
HTML 691 (22.5%), frame/runtime syntax 509 (16.6%), effect/registry entries 377
(12.3%), ordinary values 239 (7.8%), scope fills/ids/metadata 238 (7.7%),
fragment metadata 178 (5.8%), and lazy/async framing 0. These totals include
the token replacement/delta entries emitted in accepted frames.

The 2026-07-15 pre-token result was 3002 / 2118 / 1889. The current response is
70 raw / 121 gzip / 114 Brotli larger, while the largest measured request token
fell from 269 to 110 raw bytes over the keyed-loop sequence. This is a
whole-worktree comparison, not a marginal token-codec result: the unified entry,
merge registrations, and serializer output changed together. The response and
request sides must therefore remain separately attributed.

### Opaque possession cost

The browser now reads one token stored on the current render. It no longer
ships a route possession schema, allocates collector sets/stacks/maps, or walks
the live scope tree before navigation. A controlled generated-entry comparison
removed 1.31–1.33 kB minified and 439–443 Brotli bytes from representative
navigate, nested-loop, and async multi-swap entries; the persisted fixture
corpus averaged about 500 Brotli bytes removed once dead dependencies were
included. This is lazy first-navigation JavaScript, not initial-page savings.
It establishes a real browser-byte and per-navigation allocation improvement;
the production application rebuild remains the gate because these entry
measurements and the aggregate wire corpus are not identical cohorts and should
not be subtracted as if they were.

The server page facade exports a route descriptor, Run selects source and
target descriptors in its server router, and Marko encodes a direct printable
token from the final render state. Captured codec measurements compare the old
flat JSON header with the descriptor-driven token now implemented:

| Shape               | Flat JSON | Direct token |
| ------------------- | --------: | -----------: |
| Scalar swap         |        32 |            2 |
| Nested string loops |        43 |           25 |
| Keyed dynamic loop  |        56 |            6 |
| Ecommerce search    |      1256 |           13 |
| Ecommerce item      |       127 |            6 |
| Unicode keys        |        72 |           35 |

These are header-value bytes for captured shapes, not end-to-end response
savings. The real sparse ecommerce filter token is about 65 characters rather
than the dense search shape's 13. Run retains the 4 KiB cap, and malformed,
non-canonical, unknown-route, or out-of-range tokens conservatively claim no
possession. Descriptor-table bytes live in the server route graph and are not
included in the browser or wire totals above.

### Ranked next byte opportunities

These are measurement-backed priorities, not optimizations implemented by this
change. Raw bytes are the planning allocation; actual compressed savings
require implementing a candidate and recompressing the resulting payload.

1. **Node/branch markers and references** — present in all fragment-heavy and
   fills frames; 840 raw bytes.
2. **Fragment HTML (especially repeated resume markers)** — concentrated in the
   two cross-route fragment payloads; 691 raw bytes.
3. **Frame syntax plus fragment metadata** — paid on every frame (687 raw bytes
   combined). Compacting repeated wrappers, anchors, and scope-id lists is the
   protocol-level target.
4. **Effect/registry entries** — 377 raw bytes, up from 111 in the 2026-07-15
   measurement. Attribute the retained registrations before changing the wire
   grammar.
5. **Possession token** — 110 raw header-value bytes over three keyed-loop
   requests. This is request overhead, not response payload; the descriptor
   codec has already removed the client tree scanner and most repeated text.

## Required comparisons

Every measurement records `persisted: false` and `persisted: true` for identical
source and routes:

- compressed initial document bytes, including resume markers;
- compressed eager JavaScript and the initial module graph;
- compressed first-navigation lazy JavaScript, separated into router, update
  runtime, route `?persisted` entry, and app code;
- total JavaScript across several routes, to catch accidental retention of
  server render graphs;
- compressed update bytes versus the equivalent document;
- parse/apply time and allocations per streamed frame;
- server render time and time to first useful frame.

The matrix needs at least a static page, a small interactive page, a
request-hole-dense page, a keyed/reordered list, a streamed async route, and a
cross-route structural swap. Synthetic scale cases are useful only after the
focused cases identify what a byte belongs to.

## Hard gates

1. **Zero opt-out cost.** Non-persisted compiler output, server HTML, and client
   bundle snapshots remain unchanged. No persisted virtual entry is reachable.
2. **Phase separation.** The initial persisted page graph excludes
   `marko/dom-persisted`, compiled update merges, and alternate-route modules.
   No user expression, import, module statement, or renderer that an ordinary
   optimized DOM build tree-shakes may reappear in any persisted DOM or
   navigation chunk; its result must arrive only as a patch value or resumable
   fragment.
   Tests inspect the graph and explicit user-code sentinels, not only minified
   size.
3. **Serialization discipline.** A fixture proves each excluded class:
   client state, resume-only wiring, client-derived values, and unchanged sparse
   keys. Structural fragments contain only the newly appearing branch.
4. **Server isolation.** A page importing a deliberately large server-only
   dependency does not add it to any browser navigation chunk.
5. **Streaming behavior.** The first complete frame applies before a delayed
   frame resolves, without flushing effects or reorder work across frame or
   navigation boundaries.
6. **Progressive behavior.** The same link and form matrix succeeds with
   JavaScript disabled and after forced protocol fallback.
7. **A reviewed first-load budget.** Before release, representative applications
   establish and ratchet explicit gzip and execution budgets. A change that
   exceeds a ratchet needs attribution and approval, not a regenerated snapshot.
8. **A reviewed first-navigation budget.** The unified `?persisted` entry carries
   both DOM registrations and compiled merges. Representative routes must
   ratchet that lazy chunk separately from the initial page and explain retained
   child modules or render-graph code.

## Interpreting costs

Initial document spine is the feature's unavoidable pressure point: more live
structure must be addressable even when its current values are omitted. Compiler
work should first suppress markers for structure that can neither receive a
patch nor anchor a divergent fragment.

Initial JavaScript should contain only resume plus the small navigation shell.
The navigation engine and update applier are paid on first enhanced navigation.
Each target's unified `?persisted` module should remain lazy, and server-rendered
fragments should prevent the client graph from growing with alternative page
construction paths. Because that entry also carries DOM registrations, its
retained render graph needs a separate budget rather than being hidden inside a
first-load total.

Update payload size is secondary to correctness but should normally beat a
document because matched markup, client-owned state, and client-derived values
are absent. A fragment-heavy transition can approach HTML-over-the-wire size;
that is preferable to shipping its construction code on first load.

Snapshots are regression evidence, not a performance argument by themselves.
Reports must attribute changed bytes to named modules or marker classes so the
review can distinguish protocol necessity from accidental retention.
