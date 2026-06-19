# Prototype: SPA server-first updates — validation & measurement

A self-contained, dependency-free Node benchmark that validates the core assumptions
of [`../../packages/runtime-tags/docs/single-page-server-first-updates.md`](../../packages/runtime-tags/docs/single-page-server-first-updates.md)
and measures the benefit on a realistic-ish storefront.

```sh
node prototype/spa-server-updates/bench.js
```

## What it models (faithful to the design, not the real compiler)

A storefront with a **persistent shell** (header w/ a reactive cart-count island, nav,
footer) and an **outlet** that shows either a **list** page (a server-only `<for>` of
product cards, each containing a reactive "add to cart" island) or a **detail** page (a
server-only `<if>` stock banner + a reactive island + a server-only related-products
`<for>`).

The split that matters:

- **`templates.js`** — pure, logic-free render functions with Marko-style resume
  markers. Shared by server SSR **and** client reconstruction. This *is* the
  "logic-stripped updates chunk".
- **`engine.js`** — the server-only app logic (filtering, branch decisions) plus the
  client reconcile. Logic never crosses to the client; only decisions + final hole
  values do.

Tiers measured per navigation:

| Tier | What goes over the wire |
| --- | --- |
| **A** full reload | full HTML document + resume payload (today's behavior) |
| **B** partial fragment | only the changed-subtree HTML (shell skipped) + island resume |
| **C** state + discriminant | serialized scope state only — **no outlet HTML** |
| **C+** client key-hint | C, but the client declares its current keys so reused-row holes are omitted |

State is serialized as compact JSON with short positional tuples (mirroring Marko's
single-char accessor compression). This is a **conservative upper bound** for tier C —
Marko's real wire format is tighter, so the real C/C+ wins would be larger.

## Results (gzip level 6; reproducible)

```
■ List re-sort (same items, reordered)      A=2810  B=2528(90%)  C=1076(38%)  C+=216(7.7%)
■ List filter (all → audio)                 A=1221  B= 944(77%)  C= 379(31%)  C+=134(11%)
■ List → Detail                             A= 917  B= 651(71%)  C= 307(34%)
■ Detail → Detail                           A= 918  B= 653(71%)  C= 307(33%)

Session totals (gzip, 4 navigations):
  A full reloads:      5866 B
  B partial fragments: 4776 B  (81% of full)
  C state-only:        2069 B  (35% of full)
One-time updates chunk ≈ 1916 B gzip (lazy, per-route) — amortizes after ~3 navigations.
```

All four reconstructions are verified **byte-identical** to server SSR (scope ids
normalized away). ✔

## Findings — assumptions confirmed, and one challenged

1. **✔ The central mechanism works.** The client reconstructs the *exact* target outlet
   from `(discriminant + final hole values)` using only the shared templates — never any
   server-only logic. Correctness is asserted, not assumed.
2. **✔ State-only navigations are ~⅓ the bytes of a full reload** (31–38% gzip) while
   sending no HTML — and Marko's tighter wire format would beat the JSON used here.
3. **⚠ Partial HTML fragments (tier B) are a weak win on list-heavy pages.** When the
   changed subtree *is* most of the page (a big product grid), the fragment is only
   10–30% smaller than the full document (90% in the re-sort case). This validates the
   doc's decision to treat partial-render + streaming as a latency play and to reach for
   the state tier for the byte win — fragment HTML alone is not enough.
4. **💡 New insight: stateless full-subtree state leaves big savings on the table for
   reuse/reorder-heavy navigations.** Re-sorting a 48-item list still ships all 48 rows'
   holes under tier C (1076 B), even though *nothing changed but the order*. A cheap
   client hint (the keys it currently shows) lets the server omit reused-row holes,
   collapsing the response to **216 B (7.7% of full)** for ~280 B of extra request. The
   base design's "send all changed-subtree state, equality-skip on the client" is correct
   for *DOM work* but not optimal for *wire bytes* here. **Recommendation:** add an
   optional client list/version hint for large, stable collections (folded into the
   design doc as an optional optimization).
5. **✔ The DOM-work / UX win is real and independent of bytes.** The re-sort reused all
   48 rows (0 created, 47 moved, 0 hole updates) — preserving island state, images,
   focus and scroll. A full reload destroys and recreates everything. This is the win
   prefetch-on-intent and state-replay are really buying.
6. **✔ The adaptive updates-chunk tradeoff holds.** The one-time chunk (~1.9 KB gzip,
   lazy/cached/per-route) amortizes after ~3 navigations versus the per-session saving —
   confirming it should be opt-in for navigation-heavy routes, not universal.

## Honest limitations

- A faithful *model*, not the real Marko translator; HTML markup is representative but
  hand-written. The relative comparison across tiers is the signal.
- Measures **bytes, reconstruction correctness, and apply-op counts** — not real RTT or
  main-thread time (no browser). Latency wins (prefetch, streaming) are argued, not
  measured here.
- Compression is independent per response (no cross-response shared dictionary), matching
  normal HTTP.
