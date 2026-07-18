# Persisted pages: scaling measurements

Measured 2026-07-16 with `node -r ~ts scripts/measure-persisted-scaling.ts`
(optimized persisted builds of a synthetic keyed-list route driven through the
fixture harness: streamed document render, jsdom resume, patch render of a
mutated input — order rotated, 10% of keys replaced, 20% of values touched —
and frame apply through the generated `?persisted` entry; medians of 5 runs,
4-core container).

| keyed items | doc render ms | patch render ms | patch raw bytes | patch gzip | token chars | client apply ms |
| ----------: | ------------: | --------------: | --------------: | ---------: | ----------: | --------------: |
|         100 |           2.3 |             3.2 |           7,586 |      1,673 |         500 |            12.1 |
|       1,000 |          13.5 |            38.9 |         162,324 |     19,494 |       **2** |           390.4 |
|       5,000 |          40.7 |           621.9 |         837,956 |     96,026 |       **2** |         5,825.0 |

## Reading the curve

- **Floor is healthy.** The ordinary document render scales linearly
  (2.3 → 13.5 → 40.7 ms for 100 → 1,000 → 5,000 items), and the small-page
  patch path is cheap (3.2 ms server, 12 ms apply, 7.6 kB raw at 100 items).
- **The possession token collapses between 100 and 1,000 items.** At 100 items
  the token is 500 chars; at 1,000+ the codec's item/byte budgets
  (`html/persisted-token.ts`) drop to an effectively empty claim (2 chars).
  Losing possession converts every matched keyed item into a fragment, so the
  patch degrades to worst-case exactly at the scale where sparseness matters
  most: ~163 raw bytes per item shipped for a navigation that changed ~30% of
  values and 10% of keys.
- **Server patch render goes superlinear on the all-fragment path**: 10× items
  cost 12× (3.2 → 38.9 ms) but the next 5× costs 16× (38.9 → 621.9 ms).
- **Client apply is the ceiling breaker**: 12 → 390 → 5,825 ms. Parsing and
  stamping thousands of fragment entries plus the keyed diff dominates; a
  5,000-item route pays ~6 s of main-thread work per navigation once
  possession is lost.

## Graduated claims (implemented)

`encodePersistedPossession` now claims the longest document-order prefix of
sites that fits the budget (a 64-entry sample estimates bytes per entry, then
a short back-off finds the fit) instead of dropping the whole claim. Re-measured:
1,000 items now send a 3,812-char token and 109 kB raw / 18.2 kB gzip
(was 2 chars and 162 kB / 19.5 kB); 5,000 items claim the same budgeted
prefix (783 kB raw — the ~4 KiB budget caps claims at roughly 800 keyed
items, so very large lists still ship mostly fragments). Document render pays
the extra bounded encode passes only when over budget (13.5 -> 22 ms at
1,000 items).

## Denser keyed claims (design)

The remaining ceiling after graduated prefixes is claim density: a keyed
item's presence entry costs ~4-6 token chars as a raw string key, so the
4 KiB budget caps claims near 800 items. Three candidate encodings were
considered for the presence-group value sets in `html/persisted-token.ts`.

**Integer and sequential key ranges.** Numeric loop keys already have four
competing set encodings (full VLQ list, sorted delta list, ranges, bitset)
and a 5,000-key ascending sequence collapses to one range (~10 chars). Two
blockers kept this from mattering at scale: `MAX_ITEMS` capped both the
encoder's entry intake and the decoder's expansion at 4,096, and the
candidate builders were not overflow-tolerant — the full-list form is built
first, and at thousands of keys it throws `tokenTooLong` before the range
form is ever tried, failing the whole group. Both are fixed: candidates that
overflow are skipped rather than failing the group, and `MAX_ITEMS` is now
16,384.

**Shared-prefix delta runs.** The common string-id shapes (`k123`,
`sku-42`, `item_9`) decompose into a stem plus a trailing canonical decimal
suffix. A new string-set form `D` encodes `vlq(stemCount)`, then per stem the
interned/raw stem string followed by an ordinary number set of its suffixes,
then `vlq(residualCount)` and the sorted residual strings that do not
decompose (no trailing digits, leading zeros, or unsafe magnitudes — a value
joins a stem group only when `stem + String(suffix)` reproduces it exactly).
The existing `Q` form (sorted full strings) remains; the encoder emits
whichever form is shorter, preferring `Q` on ties. `k0`…`k4999` becomes one
stem and one range: ~20 chars for the whole claim.

**Hashed summaries — rejected.** A digest of the key set cannot answer the
server's per-key membership question (`possessed[siteKey]`), and any
probabilistic structure that could (e.g. Bloom filters) admits false
positives, which would claim keys the page may not hold and violate the
conservative posture. Not pursued.

Re-measured with both forms implemented: the 1,000- and 5,000-item tokens
drop from 3,812 chars (budget-capped prefix) to 18-19 chars (full claim), so
every matched key receives sparse fills and only genuinely new keys ship as
fragments. 5,000 items: 783 → 391 kB raw, 96 → 67 kB gzip; the document
render also stops paying the over-budget back-off passes (1,000 items:
22 → 12 ms).

### Canonicality and trust posture

Every accepted token must satisfy `encode(decode(token)) === token`
byte-for-byte, so both new behaviors stay pure functions of the entry set:
candidate selection picks the shortest available form with a deterministic
tie order, stems and residuals are sorted, and suffix sets reuse the
already-canonical number-set writer. A decoded `D` group re-encodes through
the same candidate race, so a token that used `D` where `Q` is shorter (or
vice versa) fails the equality check and conservatively claims nothing, as do
crafted duplicates (stem `k1` + suffix `2` colliding with stem `k` + suffix
`12` trips the existing duplicate-key rejection). Malformed and oversized
tokens keep failing closed via the existing guards (`TCHAR`, byte budgets,
`items()` accounting, `fail()`).

Raising `MAX_ITEMS` to 16,384 is a constant, not a posture change: the cap
still bounds decoder expansion (worst case ~2 MB of transient possession
entries from a hostile ~30-char range token, versus ~0.5 MB before), decode
still happens at most once per patch request that already pays a full render,
and everything above the cap still degrades to the graduated prefix claim.

## Superlinear pipeline stages (profiled and fixed)

CPU profiles (`node:inspector` around each stage at 5,000 items) found two
quadratic interactions, one per side:

- **Server patch render** spent ~70% of its time in `takeFragmentScopeIds`
  (`html/writer.ts`), which filtered every fragment scope id with a
  `String.prototype.includes` scan over a comma-joined string of every marker
  scope id in the flush — O(ids × markers) once thousands of items shipped as
  fragments. `fragmentMarkerScopeIds` is now a `Set<number>`; the patch render
  is linear again (3.8 → 28 → 118 ms for 100/1k/5k, measured post-claims where
  ~10% of items are fragments).
- **Client apply** spent ~67% under `_for_keyed`'s placement loop, which
  issues one `insertBefore` per out-of-place branch. Batching runs of
  branches into a `DocumentFragment` cut the 5,000-item all-fragment apply
  ~3.5x (8,097 → 2,330 ms) in the harness, but the entire win traced to
  jsdom's O(position) mutation accounting (below) — real engines insert in
  O(1). Reverted 2026-07-17; placement stays per-insert, and batching should
  only re-land behind a real-browser benchmark that shows a win.

The apply's remaining 1k → 5k superlinearity is a harness artifact, not a
runtime algorithm: jsdom recomputes a child's index (an O(preceding-siblings)
sibling walk with cache invalidation on every mutation, for live-range
bookkeeping) on **every** node detach and removal, so the per-branch detaches
of a full reorder and per-node removals of replaced branches cost
O(position) each there while real DOM engines do them in O(1). Post-fix
profiles show ~72% of the 5k apply inside jsdom's `SymbolTree.index`; the
runtime issues one DOM call per moved node, which cannot be reduced without
changing observable semantics (detaching in-place survivors breaks focus and
iframe state). Fragment `innerHTML` parsing (~23% pre-claims) is real linear
work proportional to fragment bytes and shrinks with claim density.

## Frames dimension (measured)

The multi-`<await>` sweep runs with `AWAIT_COUNTS = [1, 10, 25]` (the earlier
harness failure was an invalid scratch template — `<await(input.p)|v|>`
instead of `<await|v|=input.p>`; builds outside fixture directories work).
Each await resolves in its own flush, so a navigation applies one frame per
boundary: 2/11/26 frames measured. Per-frame apply cost does **not** grow at
realistic scales — first frames run ~0.9 ms (structure fills), subsequent
frames ~0.2-0.3 ms flat between 10 and 25 accumulated frames.

`dom/update.ts` does re-run the compiled merge over the accumulated patch
table every frame, and pushing the sweep to 100/400 awaits exposes the
expected slope: late frames cost ~0.7-0.9 ms versus ~0.4-0.5 ms early at 400
awaits, ≈1.5 µs per accumulated frame's scopes — O(frames² × scopes) total
but with a constant that keeps 25-frame navigations under 6 ms end to end. A
dirty-set (only scopes touched this frame drive dispatch) cannot currently be
proven safe: fills do name the scope ids they touch, but compiled dispatch is
top-down closures with no per-scope entry points and patch scopes carry owner
links only when serialization needed them, so skipping an "untouched" subtree
cannot be shown to preserve parent→child structural dispatch (fragment
stashes, pending boundary bodies, post-`run()` branch pairing) without either
compiler-emitted per-section merge registrations or guaranteed parent links
on every fill — both wire-format changes. Recorded in agent-feedback/perf.md
with the numbers; revisit only if real routes show deep frame counts.

## Follow-ups

1. ~~A denser loop-key claim encoding~~ — implemented ("Denser keyed claims").
2. ~~Profile the all-fragment apply path~~ — profiled and fixed ("Superlinear
   pipeline stages").
3. ~~Frames-dimension sweep~~ — measured ("Frames dimension").

Current medians (same protocol, 2026-07-16, post-fixes; the client-apply
column predates the 2026-07-17 batching revert and is jsdom-specific):

| keyed items | doc render ms | patch render ms | patch raw bytes | patch gzip | token chars | client apply ms |
| ----------: | ------------: | --------------: | --------------: | ---------: | ----------: | --------------: |
|         100 |           2.5 |             3.8 |           7,118 |      1,486 |          18 |            13.7 |
|       1,000 |          11.8 |            28.5 |          74,600 |     13,910 |          18 |           159.7 |
|       5,000 |          73.0 |           117.8 |         391,300 |     67,144 |          19 |         2,330.4 |

The benchmark intentionally lives beside `measure-persisted-wire.ts` and reuses
its philosophy: measure real optimized builds end to end, never inferred costs.
