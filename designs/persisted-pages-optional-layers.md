# Persisted pages: optional storage layers, measured

Status: experiment results (2026-07-21). Simulations over real captured
traffic; nothing here is implemented. The stateless full patch stays the
correctness baseline throughout — every layer below is a cache whose miss
is exactly today's behavior.

## Method

Corpus captured from the marko-ecommerce production build
(`scripts/experiments/capture-corpus.mjs` in that repo): three realistic
session flows fetched through the live patch protocol (documents +
identity-encoded patch bodies, with a real non-empty cart session), plus
the synthetic keyed-list scenario from `scripts/measure-persisted-scaling.ts`
(`MARKO_WIRE_DUMP=<dir>` now dumps document, patch, and a second consecutive
patch). Layers are simulated offline by
`scripts/measure-persisted-layer-sims.ts`:

- **doc-dict** — zstd with the flow's entry document as dictionary.
  Compression Dictionary Transport where the initial HTML response declares
  `Use-As-Dictionary` for patch URLs: zero pre-download, zero server state,
  and nothing crosses a trust boundary (the dictionary is a response this
  client already received). This is the only dictionary form that survives
  the gated-markup objection: a build-wide shell dictionary would aggregate
  every gated branch's markup at one public URL and was rejected.
- **prev-dict / sess-dict** — zstd with the previous response (resp. the
  session's accumulated responses, document included, capped 256 kB) as
  dictionary. CDT's prior-response mode: the client advertises a hash of a
  response it holds; the server needs those bytes — a content-addressed LRU
  of recent response bodies. Lossless, no wire changes, no fail-silent
  class; costs server memory and Chromium-first support.
- **shells echo / tier-A** — shell entries whose id was already delivered
  this session (a shells-held request echo would elide them), and
  first-send shells whose template string already ships in the public
  client assets (tier-A: construct from the registered renderer, send no
  shell at all).
- **value prune** — fill properties byte-identical to the previous
  same-route patch: the content-addressed semantic state store
  (`persisted-pages-state-store.md`), item granularity.
- **protocol stack** — the body with echo-duplicate shells and store-held
  values physically stripped, then compressed: the full protocol-level
  optional stack end to end.

Flows: **browse** (search → item → back → item → cart → search),
**paginate** (search page 2 → 3 → back to 2 → sort flip; the
dashboard-style same-route shape), **content** (item → item → item; one
template, changing values).

## Results: e-commerce flows (patch totals per flow)

| flow     | raw     | br (baseline) | doc-dict (zstd) | byte store (sess-dict) | protocol stack (br) |
| -------- | ------- | ------------- | --------------- | ---------------------- | ------------------- |
| browse   | 51.3 kB | 9.68 kB       | 8.50 kB         | **4.26 kB**            | 5.90 kB             |
| paginate | 79.6 kB | 12.4 kB       | 11.5 kB         | **6.04 kB**            | 7.79 kB             |
| content  | 15.7 kB | 4.52 kB       | 2.97 kB         | **1.37 kB**            | 2.47 kB             |

Per-step highlights (raw → best):

- Exact back-navigation (`/search` revisited): 20,196 raw / 3,120 br →
  **20 bytes** under the byte store. Repeat navigation degenerates to
  revalidation for free — no ETag machinery needed.
- Item → item (same template, new values): 5,368 raw / 1,526 br → **~210 b**
  under the byte store; 1,374 with doc-dict alone.
- First visit to a route (no store can help): doc-dict is the only lever —
  −23 % to −44 % vs plain zstd (largest when the entry document shares the
  route's markup).
- Shells are 8.6 % (search-dominated flows) to 44.7 % (item flows) of raw
  patch bytes; the echo elides every repeat, and tier-A covers ~20–60 % of
  first sends (0.4–1.5 kB/flow here — real but the smallest lever measured).
- Value prune (semantic store): 34–42 % of same-route fill bytes.

## Results: big-list scenario

Synthetic keyed rows; between patches 20 % of prices and 10 % of ids are
touched and the list rotates.

| scenario   | patch2 raw | br      | prev-dict (byte store) | value-prunable           |
| ---------- | ---------- | ------- | ---------------------- | ------------------------ |
| keyed-100  | 6.0 kB     | 0.80 kB | **0.19 kB**            | 4.8 kB (80 % of fills)   |
| keyed-1000 | 63.3 kB    | 4.90 kB | **1.52 kB**            | 52.4 kB (83 % of fills)  |
| keyed-5000 | 333 kB     | 15.0 kB | **6.83 kB**            | 278 kB (83.5 % of fills) |

The byte store backreferences unchanged keys as well as values, so it has
no O(items) key-list floor — the semantic store does. Caveat: the
synthetic corpus is unrealistically compressible (br already reaches
0.045 bits/byte); absolute numbers understate real data, the relative
ordering matched the e-commerce flows.

## Compression cost (server CPU, zstd with dictionary)

| level | search patch (20 kB, doc+prev dict) | keyed-5000 (333 kB, prev dict) |
| ----- | ----------------------------------- | ------------------------------ |
| 3     | 2,220 b @ 1.15 ms                   | 15.4 kB @ 3.6 ms               |
| 19    | 1,655 b @ 17.9 ms                   | 7.0 kB @ 287 ms                |

Level 3 keeps ~85 % of the dictionary win at ~1 ms/patch — the ops-viable
setting. (The sims above report level 19 as the size ceiling.)

## CDN cacheability (measured, not simulated)

`/search` patch bodies are byte-identical across different `x-marko-from`
values **and** across sessions whose serialized globals match; with a
non-empty cart the only differing bytes are the serialized cart global
(`data:{cart:…}`). Anonymous patch traffic is shared-cache-ready today
(`Vary` on the marko headers); session-varying bytes are confined to one
identifiable slice, which a future split into a per-session trailer would
make cacheable for logged-in traffic too.

## Reading

1. **The response-byte store beat the protocol-level stack on every flow**
   (echo + semantic value store: −37…−45 % vs br; byte store: −51…−70 %),
   while requiring zero wire-format changes, no serializer hashing, and no
   fail-silent prune class. Both need the same storage commitment (a
   content-addressed LRU keyed by a client-advertised hash); the byte store
   stores response bodies (~5–10× larger entries) and is gated on CDT
   browser support, with plain compression as the automatic fallback.
2. **doc-dict is the no-storage floor** and the only layer that helps first
   visits: −22…−44 %, zero pre-download, no gated-markup leak (the
   dictionary is the client's own document). It composes with the byte
   store (sess-dict includes the document) and is the natural first CDT
   step: same negotiation, no server store yet.
3. **Traversal needs no bytes at all**: exact-repeat back/forward patches
   (two of eleven patch steps in these flows) can skip the network
   entirely with a client page-state LRU; the byte store independently
   collapses them to ~20 bytes if a revalidation request is preferred.
4. **Shells echo / tier-A are real but small on this app** (≤1.5 kB/flow
   echo, ≤0.6 kB tier-A on first sends) — worth doing only as part of the
   protocol stack, and the byte store subsumes both byte-wise.
5. **The semantic value store's distinctive win remains the constant-size
   request** at any page size. On these flows it never beat the byte
   store's bytes; its case is Safari/Firefox coverage (no CDT) and
   request-size ceilings on very large pages. Since measured, a working
   transparent prototype validated it end-to-end in a real browser —
   mutation confirms drop to ~1 kB (−80%), no-change replays to ~0.5 kB —
   see `persisted-pages-render-diff-prototype.md`.

Suggested sequence stays measurement-driven: CDN headers for anonymous
routes (free), doc-as-dictionary CDT (no store), traversal LRU (client
only), then the content-addressed response-byte store — reusing the same
store interface the semantic variant would need, so the protocol-level
stack stays available if CDT coverage or request-size limits demand it.
