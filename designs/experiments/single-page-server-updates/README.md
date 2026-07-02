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

## 5. End-to-end prototype (A1 + B2)

```sh
PERSISTED=1 node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
OUTPUT=dom node -r '~ts' $E/compile-cjs.js $E/product.marko $E/tags/price-tag.marko
node -r '~ts' $E/e2e.js
```

`e2e.js` server-renders page A in persisted mode (real `persisted` compile
option + `$global.persisted`), resumes it with the real runtime in jsdom
(inline scripts run in the DOM realm; the page ready channel drains via
`ready(pageId)`), clicks the button to diverge client state, then applies
the A1 patch for page B through the working B2 persisted entries:

- `entries/product.update.js` / `entries/price-tag.update.js` — what the
  `?update` codegen would emit. The conditional merge is an `_if` instance
  and the keyed-loop merge a `_for_of` instance whose params signal is the
  body merge function.
- `update-runtime.js` — the patch-scope constructor (A1 fill → patch scope
  tree) plus a `run()` flush.

It asserts placement, intersection re-execution against preserved state,
branch destruction, keyed reconcile with element identity preserved, fresh
item creation by clone + merge, state survival against a hostile state prop
in the payload, and prints the DOM mutation log. It also exercises two later
refinements: branch markup arrives via a wire `templates` frame (content-id
keyed store + `_wire_if`/`_wire_for` in `update-runtime.js` -- entries carry
no template/walks strings), and a post-patch click proves effects were not
replayed for matched scopes (a double-bound handler would make the toggle a
net no-op).

Caveats (also noted in the proposals doc): the harness runs the debug
runtime even for optimized compiles, and its random 6-char `renderId`
inflates every marker by ~5 bytes vs the default `_`.
