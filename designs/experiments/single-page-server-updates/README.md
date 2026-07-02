# Single-page server-first updates — measurement harness

Reproduces the numbers in
[../../single-page-server-updates-wire-and-entries.md](../../single-page-server-updates-wire-and-entries.md).
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

## 2. Simulate persisted mode

Persisted-mode initial rendering is simulated by seeding the existing
request-time serialize-reason guard — inject one statement at the top of the
compiled page renderer:

```sh
sed 's|", input => {|", input => {\n  (0, _html2._set_serialize_reason)(1);|' \
  $E/product.marko.cjs > $E/product.persisted.marko.cjs
```

This is the experiment that showed markers, spine, branch ids, and loop keys
all emerge from the existing guard machinery with zero translator changes —
and that param-only slot values leak (the guard-split finding).

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

Caveats (also noted in the proposals doc): the harness runs the debug
runtime even for optimized compiles, and its random 6-char `renderId`
inflates every marker by ~5 bytes vs the default `_`.
