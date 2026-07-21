# Persisted pages: content-addressed state store (proposal)

> **Status: superseded (2026-07-21).** The possession token and replacement
> delivery this proposal aimed to replace were deleted when construction
> reached every section (see `persisted-pages-architecture.md`); the server
> no longer tracks what the client holds at all. The document is retained as
> the recorded evaluation of a server-state alternative. Measured against a
> layered (optional, miss = today's patch) reformulation in
> `persisted-pages-optional-layers.md`: a response-byte store behind
> Compression Dictionary Transport beat this design's semantic pruning on
> every captured flow; this design's remaining case is CDT-less browsers
> and constant-size requests on very large pages.

Status: proposal. If adopted this REPLACES the opaque possession token
(`x-marko-have`, `html/persisted-token.ts`, the route descriptor layer, and
the possession sections of `persisted-pages-wire-format.md`) rather than
layering on top of it. Since this was written, shell delivery
landed and reduced the token to a fallback tier (claims only for pending
`<try>` boundaries and no-shell anchors); structure is otherwise
client-decided, so what remains for this proposal to replace is the value
side plus that fallback. The trade it makes explicit: patches stop requiring
a stateless server (product constraint 7) in exchange for value-level deltas,
a constant-size request header at any page size, and a substantially smaller
protocol surface.

## Motivation

The wire never prunes values: every request-derived hole re-serializes on
every patch — under shell delivery constructible branches ship
their fills and seeds unconditionally, since the server does not know which
branches the client holds. Measured same-route payloads are dominated by
unchanged values (search route ~61 kB raw for a few changed rows; the 5k
keyed benchmark ships 391 kB with full possession because all item values
ride along). Separately, the fallback token's size ceiling forced real
machinery — graduated prefix claims, range and stem-suffix codecs, canonical
re-encode — all of which exists only because the client must describe its
no-shell state inside a ~4 KiB header.

## Design

**State.** After each applied frame, the client's page state is summarized
as a hash tree, addressed by a single content hash:

- Anchors are build-static ordinals into the compiled route (no strings).
- Scalar holes: one 64-bit value hash each.
- Keyed loops: per item, a key hash plus one rollup hash of the item's
  serialized values (item granularity: a changed item re-sends its few
  holes; storage stays ~16 bytes/item).
- Dense arrays, varint-packed. Typical page ≈ 1.5–3 kB; capped (over-cap
  loops degrade to replacement delivery, as over-budget claims do today).

**Request.** The client sends only `x-marko-state: <16–22 char hash>` (plus
the existing route/build headers). Constant size at any page size.

**Server.** The store maps hash → state tree. Hit: render the target route
as today, but as each hole/item serializes, compare its fresh hash against
the stored tree and suppress unchanged values. Constructible structure stays
client-decided through wire shells; for no-shell anchors the residual
structure question falls out of the same compare (renderer hash differs at an
anchor → replacement; key present both sides → fills), so no separate
possession vocabulary crosses the wire.
Miss: respond `x-marko-state-miss`; the client re-sends its full tree once
(it always holds it locally — the DOM it summarizes is already in memory)
and the exchange proceeds as a hit. No store, store timeout, or eviction
therefore costs one round trip, not a document load; the document fallback
remains the terminal rung as today.

**Frames.** Each frame ends with the cumulative state hash for the state it
produces (replacing `~=`/`~+` token metadata). The client advances its
stored hash only per applied frame, so aborted mid-stream navigations leave
the client holding the hash of the exact hybrid it kept — the same
per-accepted-frame discipline the token has now. History entries record
their hash beside the existing scroll state, so traversal negotiates
against the state being returned to.

**Verification.** Hash-diffing fails silent where the token fails safe: a
divergent baseline wrongly prunes a value and the page is quietly stale.
Every N navigations (or on any apply anomaly) the client echoes a checksum
of its applied tree; a mismatch invalidates the entry and forces a
full-value patch. This loop is a required part of the design, not
hardening.

## Storage: content-addressed LRU

Entries are immutable (a hash's content never changes — there is no
invalidation problem) and misses are safe, so the store is a pure cache and
eviction is policy-free in the correctness sense:

- Fleet math: active sessions × history cap × entry size, not users ×
  pages. 1M active sessions × 8 entries × 2.5 kB ≈ 20 GB; retention under
  churn ≈ memory / (entry size × unique write rate) ≈ 15–20 minutes at
  those numbers — above typical navigation gaps.
- Content addressing dedupes automatically and concentrates heat correctly:
  shared anonymous baselines are touched constantly and never evict;
  long-tail personalized states churn first.
- Policy: LFU-admitted LRU (TinyLFU) so crawler/hostile one-hit writes
  cannot flush residents; size-weighted eviction with a per-entry cap; a
  1–4 h TTL backstop for data residency (privacy, not correctness); a
  per-session write rate cap. In Redis this is `maxmemory` +
  `maxmemory-policy allkeys-lfu`; in-process it is an off-the-shelf
  weighted cache behind the same get/set interface.
- Dedup caveat: globally keyed entries create a cross-session pruning
  oracle (absence of a value in a diff reveals another session rendered the
  same value). Key entries by HMAC(server key, session, content hash), or
  dedupe only the anonymous baseline.

## Example exchanges

Illustrative grammar; fills/replacements are unchanged from the shipped wire
format — only negotiation and pruning differ.

Same-route navigation, hit (one price changed out of ~200 holes):

```
GET /search?page=2
accept: text/marko-patch
x-marko-route: 3            x-marko-from: 3
x-marko-build: mE284d_aRKg  x-marko-state: Kf3xPq9dLmA2
```

```
_=>[,{Nb2:19.99}],"=Xw4Rt8nQz1c"
```

versus today, where the frame carries every request-derived hole on the
page. The trailing `=<hash>` names the new state; the client stores its
tree under it after apply.

Cold store, miss then recover (replaces the document-load penalty):

```
-> GET /item/3            x-marko-state: Kf3xPq9dLmA2
<- 409  x-marko-state-miss: 1
-> GET /item/3            x-marko-state-tree: <2.5 kB packed tree>
<- 200  <ordinary delta patch as above>
```

Cross-route with a divergent branch: identical to today — matched anchors
arrive as (now value-pruned) fills, the divergent anchor as a replacement entry;
only the negotiation that decided this changed.

## Pros

- Wire converges to O(change): the measured 61 kB search patch becomes
  single-digit kB; the 5k keyed case drops ~3–4×; apply time shrinks with
  it (fills not sent are fills not executed).
- Constant request header at any page size; the entire claim-density
  problem (ranges, stems, graduated prefixes, 4 KiB cliff) disappears.
- Smaller trust surface: nothing client-supplied is decoded, only looked
  up; a forged hash can only miss. No canonicality machinery.
- The Option C controllable rule becomes structural: unchanged values never
  arrive, so user edits survive by construction.
- Storage economics are a config line (LFU cache), with client-backed
  recovery removing the capacity cliff.

## Cons

- Patches require server-side state; statelessness demotes from guarantee
  to optimization. Serverless needs a shared cache to hit (misses still
  work via resend, at +1 RTT).
- Fail-silent risk class (wrong prune → stale UI) requiring the
  verification loop; the token design's failures were over-send only.
- New moving parts: store interface and adapters, miss/resend exchange,
  per-frame hash capture, checksum loop.
- Store lookup joins the hot path (raced with the handler's data fetch,
  timeout-as-miss).
- Diffing adds ~5–15% to patch render CPU (hashing while serializing).

## Is it simpler than what ships today?

As a replacement, yes — with one condition. Deleted outright:
`html/persisted-token.ts` (~1 kLOC codec + canonicality + its tests), the
route descriptor layer (`buildPersistedDescriptor`, the page-facade export,
run's `have`/`source` selection and validation), the claim-density
machinery, and the `~=`/`~+` metadata grammar. Added: a get/set store
interface, hash capture in the writer (replacing, not augmenting, the
possession-map capture), the miss/resend exchange, and the verification
loop — individually boring pieces. The compiled possession-anchor identity
(analyze-owned anchor ordinals, loop keys) survives as the server-internal
join key for the diff, but stops being wire-encoded, ordinal-stable across
builds, or adversarial. The condition: the miss path must be
resend-or-document, not a token-pruned stateless patch — keeping a token
tier keeps everything this deletes. Client applier, merges, replacements,
epochs, and all of `@marko/run`'s interception/fallback are untouched.

Net: fewer lines, and — more valuable — a smaller permanent review surface
for every future protocol change, bought with an ops dependency the token
never had. Sequencing: ship v1 as-is; land this as the v2 protocol rev and
delete the token tier in the same change.

## Open questions

- Verification cadence and cost (every navigation? sampled? piggybacked on
  the next request?).
- Tree resend transport for very large states (header vs body; compression).
- Multi-tab: states are per-tab; the store is shared — per-entry caps need
  a tab dimension or none at all (content addressing makes tabs converge).
- Whether the descriptor deletion breaks any planned feature that wanted a
  client-readable anchor vocabulary (none known today).
