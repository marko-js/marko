# Single-page server-first updates — measurement harness

Reproduces numbers cited in
[../../persisted-pages-architecture.md](../../persisted-pages-architecture.md)
and [../../persisted-pages-cost-model.md](../../persisted-pages-cost-model.md).
Everything here is scratch tooling: it runs against the repo's source runtime
via the `~ts` register hook and writes generated artifacts (`*.marko.cjs`,
`out.*.html`, `entries/*.min.js`) next to the sources — those are not
committed. This directory is excluded from lint (eslint, prettier, cspell).

All commands run from the repo root. `E=designs/experiments/single-page-server-updates`.

## 1. Compile the example (CJS server output, debug + optimized)

```sh
node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
OPT=1 node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
# (rename between runs — both write <file>.marko.cjs)
```

## 2. Persisted mode

Persisted mode is now a real compile option + render flag (this harness
validated the earlier sed-injection simulation, which is retired):

```sh
PERSISTED=1 node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
PERSISTED=1 TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js
```

`PERSISTED=1` sets `persisted: true` at compile time and `$global.persisted`
at render time. The render emits markers, spine, branch ids, and loop keys —
and, via the guard-split lattice, no param-only slot values (the leak the
sed experiment exposed is fixed; `input_product_sale_percent` no longer
serializes initially while `expanded`/`input_product_featured` still do).
Without `PERSISTED=1` at render time the output is byte-identical to a
non-persisted build (modulo the random `renderId`).

## 3. Render and measure

```sh
export PRODUCT='{"name":"Trailhead 40L Pack","slug":"trailhead-40","featured":true,"sale":{"percent":20}}'
export RELATED='[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39},{"id":13,"name":"Dry Sack","price":14.25}]'
TEMPLATE=product.marko.cjs node -r '~ts' $E/render.js            # today
TEMPLATE=product.persisted.marko.cjs node -r '~ts' $E/render.js  # persisted
```

Sizes were taken as raw/gzip of the full output and of the output with the
fixed walker-runtime bootstrap stripped (it is identical in both modes).

## 4. Payload and entry measurements

- `payloads.js` — the hand-authored navigation payloads (wire-format
  proposals A1/A2/A3, plus tier-2 pruned A1 and B3 effect strings); run
  `node $E/payloads.js` for raw/gzip sizes.
- `entries/` — the hand-authored persisted-entry variants (B1 opcode tables,
  B2 compiled merge functions, B3 effect-driven sections) for both templates,
  written against the real compiled accessors. Measured with
  `npx esbuild <file> --minify --format=esm` + gzip.

## 5. End-to-end lifecycle coverage

The standalone e2e prototype that used to live here (`e2e.js`) is retired:
the `persisted-update-navigate` fixture
(`packages/runtime-tags/src/__tests__/fixtures/persisted-update-navigate/`)
now covers the full navigation lifecycle — resume, client interaction, real
update render (`$global.persisted = "update"`), patch application through the
**generated** `?update` entries and the real `applyUpdate` runtime, keyed
reconcile with element identity, client-state survival against a hostile
payload, no-effect-replay, and reverse navigation with fresh branch
creation — in both debug and optimize, with committed snapshots
(`__snapshots__/render-ssr.md`). Run it with:

```sh
npm test -- --grep "persisted-update-navigate"
```

The hand-authored `entries/*.update.js` remain as the spec the `?update`
codegen was written against.
