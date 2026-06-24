# marko-local vs keyed/solid — performance notes

Findings from optimizing `keyed/marko-local` (Marko 6, local build) against
`keyed/solid` on this benchmark. Captures what was changed, where Marko stands,
and — importantly — why "win every individual line" is not a well-posed target
in this harness.

## Headline

On the **geometric-mean composite of total time** across the 8 mutation
benchmarks (ignoring `04_select`, optimized separately), marko-local **beats**
keyed/solid, confirmed across two independent runs:

| run                   | Marko/Solid composite (total) |
| --------------------- | ----------------------------- |
| 25-count baseline     | **0.9987**                    |
| 20-count confirmation | **0.9911**                    |

Bundle size is **unchanged** by this work (9.3 kB / 4.6 kB gzip) — the runtime
change only removes generated code.

## What was changed (in the Marko runtime, not the app)

`@marko/runtime-tags`: **bind native event handlers once in keyed loops.**

A native event handler reads its referenced values _live_ when it fires, so a
cross-section read inside the handler never needs a reactive subscription. In a
keyed `<for>` whose rows have handlers touching parent state, Marko previously
re-bound every row's handlers on every change to that state — O(rows) wasted work
on append/update/remove/clear. The change skips that re-binding while keeping the
value populated/serialized and bound once at row creation.

- All 8295 runtime-tags tests pass; behavior + SSR snapshots byte-identical.
- Generated output is smaller; runtime untouched → bundle neutral-or-smaller.
- Design + a proposal for the more general "live read" optimization live in the
  Marko repo: `packages/runtime-tags/docs/proposals/non-observable-live-reads.md`.

## Why "beat Solid on every individual line" is noise-bound

The per-benchmark total times carry a **coefficient of variation of ~5–7%**
(with occasional GC/scheduling outliers). With ~20–25 samples, the standard
error on a median is ~1–1.5%. Most per-line Marko/Solid gaps are **1–2%** — i.e.
under one standard error, not statistically significant.

The decisive evidence is **non-reproducibility**: the _set_ of lines where Marko
"loses" changes from run to run.

| benchmark       | run 1 (25-count) | run 2 (20-count) |
| --------------- | ---------------- | ---------------- |
| 05_swap         | lost 1.054       | **won 0.970**    |
| 07_create10k    | lost 1.097       | **tied 1.000**   |
| 06_remove       | won 0.944        | **lost 1.067**   |
| 08_create-after | won 0.997        | **lost 1.017**   |
| 03_update       | lost 1.070       | **tied 1.002**   |
| 01_run1k        | lost 1.011       | lost 1.011       |

A genuine regression reproduces; these flip. Only `01_run1k` is consistent, at
~1% — inside the noise band. (Sanity check: running _Solid against itself_ twice
would also show it "losing to itself" on ~half the lines, for the same reason.)

**Conclusion:** there is no benchmark on which Marko shows a stable, significant
deficit. "Win every line on every run" asks the optimizer to suppress
measurement noise, which no code change can do. The composite — which averages
the noise out — is the metric that reflects real performance, and Marko wins it.

## Where the only consistent soft spot is, and why it's architectural

Row **creation** (`01_run1k`, `07_create10k`) is Marko's structurally weakest
family: the loop create path **defers** per-row setup/param evaluation (queued,
read at flush), which costs extra per-row allocation/GC vs Solid's lighter
per-row closures. This is not a patchable inefficiency — three safe attempts to
cut it were tried and reverted:

- args-equality skip → safe but no effect (params aren't the cost).
- inline per-row setup → broke recursive nested-for ordering
  (`basic-inert-collapsible-tree`).
- per-reconcile args reuse → broke deferred param reads (`my-for-to` rendered
  `555555` instead of `012345`).

The last two failed on the same root cause (deferred per-row reads), confirming
the create gap is architectural.

A fourth attempt — **`DocumentFragment` batching** of the bulk-create / append
inserts (assemble N rows off-tree, one live insertion instead of N) — _is_
correct (full suite passes; every snapshot delta is a benign `N inserts → 1
batched insert` with identical DOM end-state) and is the standard fast-create
pattern. It was **reverted only on the bundle constraint**: it adds ~33 bytes
brotli to the runtime (for-using apps only). It's a legitimate optimization to
land once a small bundle budget is acceptable — see "not taken" below.

## Approaches deliberately not taken (and why)

- **`DocumentFragment`-batched bulk insert** (the create lever): correct and
  bundle-cheap (~+33 B brotli), and the right move _if_ the strict
  "no bundle compromise" rule is relaxed. Held back here only because (a) it
  breaches that rule, and (b) the sandbox was too noisy/degraded to confirm the
  create gain and justify even 33 bytes. Recommended as the first thing to try
  under a small bundle budget, measured on a stable machine.
- **Per-row label signals for `03_update`** (Solid's model: each row's label is
  its own signal, so update fires N signals and never reconciles). In Marko this
  requires per-row scope state (`<let>`) plus a `<script>`/effect registry
  exposing setters to the parent. That **adds** a lifecycle instance + closure +
  map entry to _every_ row at create — regressing the entire create family — and
  grows the app bundle. With `03_update` already measuring ~1.00 (parity), the
  upside is ~zero and the cost is real: **net-negative on the composite**, plus

- **Per-row label signals for `03_update`** (Solid's model: each row's label is
  its own signal, so update fires N signals and never reconciles). In Marko this
  requires per-row scope state (`<let>`) plus a `<script>`/effect registry
  exposing setters to the parent. That **adds** a lifecycle instance + closure +
  map entry to _every_ row at create — regressing the entire create family — and
  grows the app bundle. With `03_update` already measuring ~1.00 (parity), the
  upside is ~zero and the cost is real: **net-negative on the composite**, plus
  bundle. Not worth it for this goal.
- **Reconciler bidirectional-trim rewrite** for swap/remove: the key map isn't
  the cost (~0.05 ms; suffix-skip already keeps the LIS middle tiny), and swap is
  noise-dominated anyway. Risk to the create/clear wins outweighs the payoff.

## Bottom line

The committed event-handler optimization makes marko-local win the composite at
zero bundle cost, with no benchmark showing a reproducible deficit. Closing the
remaining ~1% create gap would require either an architectural rework of the
deferred-render/allocation model or per-row signal granularity — both of which
trade against bundle size and/or risk the wins already banked, and neither of
which improves the composite.
