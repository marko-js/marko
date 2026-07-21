# Persisted pages: render-diff store prototype

Status: working prototype, validated end-to-end (2026-07-21). The code
lives in the marko-ecommerce branch: `src/lib/patch-diff.mjs` (the diff
engine), `src/middleware/render-diff.ts` (on by default; opt out with
`RENDER_DIFF=0`), `scripts/experiments/diff-sim.mjs` (offline corpus
replay) and `scripts/experiments/diff-e2e.mjs` (real-browser equivalence
probe).

## Goal

Send O(changed) per patch with **zero app-code involvement**: the server
keeps a model of the last render it delivered to a client page and prunes
each new patch down to the delta, at prop granularity. The motivating
interaction is add-to-cart: the confirm patch should approach "just the
cart update", not re-send every hole on the page. Success is measured
proportionally against what a hand-optimized optimistic SPA would transfer
for the same interaction, not as aggregate savings.

## What the prototype does

A per-session store holds the client's page as canonicalized prop text
per scope id plus delivered shell ids. Each patch response is parsed
(frames → shells / fills / ready batches / effect entries), diffed, and
rebuilt; the client applier is completely unchanged, because a pruned
frame is just a sparse frame — the wire's idempotent-fills semantics is
what makes transparent pruning possible at all. A diff against an empty
store rebuilds byte-identically (checked for every corpus body), and any
parse surprise falls back to the full patch.

## The rules that survived (each one bought with a real failure)

1. **Alias canonicalization.** Memo aliases (`_.x=`) are assigned in
   serialization order, so `k:_.b` can be byte-identical across renders
   while naming different values. Props are compared with aliases inlined.
   Without this, the cart change itself would have been pruned from the
   confirm patch.
2. **Spine stability with structural coupling.** A scope is comparable
   only if the chain of reference props linking it from the dispatch root
   is held-identical, and a reference prop transfers stability only when
   its same-accessor structural siblings (`D·` renderer identity beside
   `A·` branch link) are also unchanged — an identical link text beside a
   changed renderer means the client will construct that branch fresh.
3. **Never prune structure.** Branch links (`A·`), boundary facts (`T·`),
   renderer identity (`D·`), branch keys (`M·`), and owner links (`_`)
   always ship. They are the skeleton later frames (ready batches, parked
   merges) pair through; pruning them by subtree analysis broke apply
   (`parentNode` of undefined) because boundary content can arrive in a
   later frame than the link. They cost ~0.3–0.5 kB per route section.
4. **Cross-fill reads pin their targets.** Fills read each other's fill
   objects at apply time (`"Nsrc:b":_.c=_(6)["Nsrc:a"]`): a pruned but
   read prop left `null` image srcs. Any prop property-accessed by a kept
   prop is kept.
5. **Effect gating.** Effect entries ship only when a targeted scope
   changed or the globals scope changed (payload effects only run on fresh
   pairs; global-refresh effects need the globals delta anyway); kept
   effects pin their scopes into the patch (as `{}` at minimum) so pairing
   reaches them. This is what takes the no-change replay to ~0.5 kB.
6. **Store advance = replace + reachability GC.** A response's scopes
   replace their held prop sets wholesale (scope ids collide across
   routes), and the store is GC'd to scopes reachable from the roots —
   without this, search → item → search falsely pruned against rows the
   client had destroyed (the client cannot hold what its structure no
   longer reaches).

The store models what the client HOLDS, so mutations do not invalidate it
— that is precisely why the mutation confirm diffs to ~the cart delta.

## Measured results

E-commerce corpus, offline replay with document-projection seeding;
verified live through the middleware with curl.

| interaction                                   | full   | pruned           | br    | kept values | kept structure |
| --------------------------------------------- | ------ | ---------------- | ----- | ----------- | -------------- |
| add-to-cart confirm (`/item/2` after POST)    | 5,227  | **1,026 (−80%)** | 401   | 171         | 518            |
| no-change replay (same URL, nothing changed)  | 5,227  | **498 (−90%)**   | 256   | 34          | 298            |
| item → item (`/item/3` from `/item/2`)        | 5,228  | 2,033 (−61%)     | 760   | 1,121       | 518            |
| pagination (`/search?page=3`)                 | 19,998 | 12,841 (−36%)    | 2,288 | 7,332       | 3,478          |
| cross-route back to `/search` after item/cart | 19,694 | 17,873 (−9%)     | 2,538 | 12,004      | 3,419          |

The cross-route row is the honest floor of any _semantic_ store: the
client destroyed those branches, so their values are genuinely not held —
that case belongs to the client traversal LRU (or byte-level compression),
not to the diff.

## Proportional view (the target metric)

"Hand floor" is the JSON an optimistic SPA's bespoke endpoint would return
for the same interaction; ratios compare raw bytes.

| interaction         | hand floor            | prototype values | prototype total | ratio                              |
| ------------------- | --------------------- | ---------------- | --------------- | ---------------------------------- |
| add-to-cart confirm | ~90 b cart JSON       | 171              | 1,026           | ~11× raw, ~3× br — vs 58× unpruned |
| item → item         | ~1.2–1.5 kB item JSON | 1,121            | 2,033           | ~1.5×                              |
| pagination          | ~7 kB page JSON       | 7,332            | 12,841          | ~1.8×                              |
| no-change           | 0 (no request)        | 34               | 498             | fixed skeleton cost                |

Value bytes are at parity with hand-written data payloads across the
board; the compiler's remaining overhead is the dispatch skeleton
(~0.5 kB/route section) plus retained effects — fixed, not O(page). That
is magnitude-parity with hand-optimized apps on every interactive case,
transparently.

## End-to-end validation

`diff-e2e.mjs` drives the same real-Chromium journey (document entry, two
add-to-carts, item hop, search, cart, history back) against a pruned and
an untouched server: all DOM checkpoints equivalent, cart badges equal,
and fallback parity (pruning introduced no new apply failures). Caveats:
the item→item hop originally crashed or staled nondeterministically on
the unmodified feature — found by this experiment and since fixed across
the boundary and stable-loop layers (see the roadmap's resolved
correctness sweep); the hop checkpoint's sync-detail scoping predates the
fix and is now merely conservative.

## Landed since (2026-07-21)

The middleware now runs production-shaped storage: entries are keyed by a
per-response render id echoed through a cookie (stale/unknown id — another
tab, an eviction, an interleaved document load — is a miss and today's
full patch; documents expire the id so patches never prune against a page
the client left), and live packed+zstd at rest (~4 kB search-page entries,
sub-ms inflate) in an LRU with a 30-minute TTL. Verified at the wire: seed
→ id echo → 5,198 → 528 byte no-change replay. In-browser, id echo via
cookie is best-effort on mutation-POST follow chains (a late cookie commit
downgrades the next patch to a seed — never a wrong prune); the production
transport is a request header set by run's client router, which removes
that artifact. The diff now runs frame-by-frame as the response streams
(enabling it by default surfaced that whole-response buffering broke
progressive delivery of async boundaries — the streaming validators
caught it): decisions use only what has streamed so far, and when a later
frame needs a prop already pruned from an emitted frame (an alias
definition, a cross-fill read target, a spine link, an effect's scope), a
small synthetic repair fills frame re-asserts it just before the frame
that needs it — fills are idempotent assignments, so repairs are always
semantically safe, and late-proven spine stability only costs pruning
ratio, never correctness. Corpus replay stays within a few percent of the
buffered results (no-change replay 531 vs 498 bytes; mutation confirm
1,047 vs 1,026) with every empty-store roundtrip byte-identical.

## What a production version changes

Each item below is deferred because landing it now means churning core
review for an opt-in layer; each is recorded with its exact seam so the
post-merge change is mechanical.

- **Capture in the writer, not a text parser.** The serializer already
  computes per-scope parent/accessor identity (the `Reference` class in
  `packages/runtime-tags/src/html/serializer.ts`) and every prop's emitted
  span (`writeScopesRoot`'s per-flush walk); capturing the tree at write
  time deletes the entire wire-scanner half of the prototype while keeping
  the middleware's frame-by-frame streaming shape. Document renders
  capture their projection directly (the prototype
  self-fetches a patch render to seed, valid because patches are
  measured-deterministic, but wasteful).
- **A render-id echo instead of cookie keying.** Responses name the
  render; the client echoes the id it holds (multi-tab safe, and a miss —
  absent store entry, unknown id — is exactly today's full patch). Run
  already centralizes the patch header exchange in
  `packages/run/src/runtime/persisted-protocol.ts` (`persistedHeaders`,
  `createPatchRequestHeaders`), so this is one added response header, one
  echoed request header, and clearing the held id on document navigation —
  which also removes the cookie-timing seed-downgrade artifact below. This
  is the same client-asserts-holdings channel as the shells-held echo and
  the same content-addressed LRU interface as the response-byte store, so
  the storage commitment is shared across all three layers.
- **Verification canary.** Every Nth patch (always in dev) renders full
  and marks what would have been pruned; the client compares against live
  values and a mismatch reports and invalidates the entry. The structural
  always-ship rule plus exact-byte compare already removed the failure
  classes hit during prototyping; the canary guards the ones not yet met.
- **Floor refinements.** The no-change skeleton (~0.5 kB) can approach
  zero once boundary links can be proven prunable when their entire
  subtree is (needs the writer's section knowledge, not wire heuristics),
  and `{}` placeholder scopes for effect targets could collapse into a
  compact effect-scope list entry.

## Session-store footprint and cost (measured)

`scripts/experiments/store-bench.mjs` (marko-ecommerce), one held page per
active session:

| page                             | logical tree | packed+zstd at rest | 8-byte hashes | naive JS Maps (heap) | diff ms/patch |
| -------------------------------- | ------------ | ------------------- | ------------- | -------------------- | ------------- |
| search (25 products, 1294 props) | 26.3 kB      | **4.2 kB**          | 13.9 kB       | 152 kB               | 6.8           |
| item detail (206 props)          | 3.7 kB       | **1.3 kB**          | 2.2 kB        | 20.8 kB              | 1.3           |
| cart                             | 0.5 kB       | **0.5 kB**          | 0.3 kB        | 4.3 kB               | 0.3           |

Live JS Maps cost ~6x their logical bytes, so entries must be packed at
rest: with zstd-3 packing (sub-ms inflate per hit) a search-heavy fleet
runs ~4 kB/session — ~420 MB per 100k active sessions, ~4.2 GB per
million; item/cart-heavy traffic is 3x smaller. The prototype's parse +
diff + rebuild costs 1-7 ms per patch against renders that cost 2-70 ms —
a writer-integrated version skips the parse half (the dominant cost) and
the hash representation drops entries to ~2 kB where the equality-only
compare plus canary verification is acceptable.

## Verdict

The transparent render-diff store works, needs no client or app changes,
and lands within small constant factors of hand-optimized payloads for
same-page interactions — with the stateless full patch as the automatic
miss path. Its natural production shape shares one store interface with
the response-byte/CDT layer, leaving compression to cover what semantics
cannot (cross-route revisits) and the traversal LRU to cover history.
