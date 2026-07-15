# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## `c8` coverage crashes generating lcov when the wrapped process loads `~ts`

`scripts/test-parallel.js:10` | 2026-07-02 | impact:med | effort:med

`c8 node -r ~ts <script>` (i.e. any c8-wrapped process that loads `scripts/babel-register.js` via `-r ~ts`) throws `TypeError: Cons is not a constructor` at `istanbul-reports/index.js:22` during c8's report step while constructing the `lcov` reporter — no `coverage/lcov.info` is written and the process exits 1. Coverage collection itself succeeds (the text-summary reporter prints correct numbers); only lcov report generation dies. This is why `scripts/test-parallel.js` is deliberately plain CommonJS (its spawned mocha workers still load `~ts` via `.mocharc.parallel.json`, which does _not_ trigger the bug — only `-r ~ts` on the c8-monitored process does). Worth root-causing, since it silently blocks lcov/codecov for any future `node -r ~ts` script someone wraps in `c8`; likely a c8@11 ↔ @babel/register require-hook interaction.

## Migrate to Babel 8 and chai 6 as dedicated efforts (deferred from the deps upgrade)

`patches/@babel+types+7.29.7.patch:1` | 2026-07-07 | impact:med | effort:high

The dependency upgrade took everything to latest except two majors that are true migrations, not refreshes. **Babel 8** (`@babel/*` held at 7.29.7): the compiler ships four hand-authored patches against Babel 7's compiled `lib/` (`patches/@babel+{types,traverse,generator,helper-compilation-targets}+7.29.7.patch`, the types one 79 KB, injecting Marko AST node types) plus `packages/compiler` code that reaches Babel-7 internals via `@marko/compiler/internal/babel`; Babel 8 restructures those modules so the patches won't apply and the codegen needs porting. **chai 6** (held at 4.5.0): chai 5+ is ESM-only (`"type":"module"`), but there are 379 CommonJS `require("chai")` call sites (all under `packages/runtime-class/test/**` and `packages/runtime-tags/src/__tests__`), so adopting it means converting every test fixture to ESM or dynamic import. Each should be its own PR with focused testing.

## `npm audit` reports 3 dev-only advisories; gate on `npm run audit` instead

`package.json:9` | 2026-07-07 | impact:low | effort:low

Bare `npm audit` shows 3 advisories (`serialize-javascript` high, `js-yaml`/mocha moderate, `diff` low), all transitively under `mocha` and `@changesets/cli` — dev tooling that never ships. They can't be resolved by version bumps: the fixes live in higher majors than mocha's ranges allow (`serialize-javascript ^6`→fix in 7.x, `diff ^7`→8.x, `js-yaml ^4`→5.x), mocha 11.7.6 is the newest stable, and the latest `@changesets/parse` still pins `js-yaml ^4.1.1`. Rather than pin them via `overrides`, the repo audits production deps only: **`npm run audit`** (`npm audit --omit=dev`) is the gate and returns 0 — that's what consumers of the published packages actually receive. Revisit and drop the distinction once mocha/changesets update their transitive deps upstream.

## Further `test:parallel` speedups need CPU cuts, not scheduling

`scripts/test-parallel.js:1` | 2026-07-11 | impact:med | effort:high

With suite slicing in place the run is CPU-bound: ~285s of user time across
workers (~80s wall on 4 cores, workers finish within ~2s of each other), so
better packing or more workers no longer helps (6 workers on 4 cores measured
neutral). A `--cpu-prof` of a fixture worker shows the spend is flat — ~17%
node core (ESM import of per-fixture bundles, fs), ~13% `@babel/register` TS
transform, ~13% jsdom+parse5, ~6% GC, rest compiler/translator/rolldown glue —
and ~21% idle (JS thread waiting on rolldown's native threads). Reclaiming
that idle by prefetching the next fixture's `createServerRunner()` build was
considered and rejected: a concurrent build can emit console output inside
another test's `captureConsole` window (`utils/capture-console.ts` patches the
global console), corrupting `writes.html`/log snapshots. If someone wants the
~10-20% win, scope the console capture (or buffer build diagnostics) first,
then pipeline builds one fixture ahead gated on `MARKO_TEST_SLOTS`.

On the CI (`@ci:test`) shape specifically, measured on a 4-core runner clone:
~81s tests + ~15s c8/V8 coverage collection on the workers + ~12s cold
`@babel/register` cache (fresh checkouts never hit the mtime-keyed cache, so
caching `node_modules/.cache` in CI is pointless) + ~65s single-threaded `c8
report`. The report profile: ~36% istanbul report generation, ~19% GC (fixed:
`--max-semi-space-size=128` cuts the step to ~56s), ~11% v8-to-istanbul remap
over 182MB of dumps — `--reporter=lcovonly` and `--merge-async` measured
neutral, and dropping `excludeAfterRemap`/`all` would corrupt the numbers
(runtime coverage arrives via fixture-bundle sourcemaps; see `.c8rc.json`).
Two unexplored wins: remap+report each worker's dumps in parallel processes
and merge the istanbul JSON at the end (the ~50s remap work splits cleanly
per dump); prewarm the babel cache with one serial require pass in
`scripts/test-parallel.js` before spawning workers on a cold cache (~6s net,
needs a hardcoded heavy-module list that can rot).

## No fixture discriminates cross-navigation parked-state leakage for keyed ready batches

`packages/runtime-tags/src/dom/update.ts:158` | 2026-07-14 | impact:low | effort:med

`createUpdate` now clears `pendingLoadUpdates`/`pendingDynamicUpdates`/
`parkedReadyBatches` per navigation, and `persisted-update-lazy-double-nav`
pins the two-navigations-while-loading race end to end (superseded parked
patch, fragment-delivered `<if>` applied at replay). But the clearing itself
is masked in that shape: `_update_load` already keeps only the newest patch
per live scope, and a second same-route navigation re-serializes the lazy
channel so its batch drains last either way. The scenario only the clearing
prevents -- navigation 1 parks a keyed ready batch for a fragment-stamped
subtree, navigation 2 (same route, subtree matched) does NOT re-deliver that
channel, the module then loads and nav 1's stale scope fills/effects replay
onto the live page -- needs the server to skip re-serializing a lazy
channel on the second update, which the current update serializer never does
(request-derived values ride every update). If a future serializer
optimization makes update payloads delta-sparse across navigations, add a
fixture for this before shipping it.

## Mutation-tracker jsdom workaround silently hides real text updates in snapshots

`packages/runtime-tags/src/__tests__/utils/track-mutations.ts:238` | 2026-07-14 | impact:low | effort:low

`formatMutationRecord` drops characterData records where the new value starts
with the old value and the boundary is whitespace, to filter jsdom's
duplicate records (jsdom#3261). The filter also matches REAL updates of that
shape: a fixture step changing text "draft" -> "draft edited" produces no
`## Change` entry and (because formattedMutations is empty) no html block
either, so the step looks like a no-op in `render-ssr.md` while the DOM did
update. This cost real debugging time on a new controllable fixture; the
committed `persisted-update-lazy-load` snapshot's missing label updates were
initially indistinguishable from this. Fix direction: check jsdom's issue
status (may be fixed), or only drop the record when an adjacent record shows
the same target being re-reported, or at least emit the html block even when
every mutation record was filtered.

## `npm run build:sizes` dirties `.sizes*` on a clean checkout

`.sizes/dom.js` | 2026-07-14 | impact:med | effort:low

With lockfile-installed deps (rolldown 1.1.4, linux) and zero source changes,
a fresh `node -r ~ts scripts/sizes` run rewrites `.sizes.json` (+8 min /
+2 brotli on `dom.js`) and all `.sizes/**` outputs: the minifier emits
`for (; i && a[i - 1].x > y;) (i--, f())` where the committed files have
`for (; i && a[--i].x > y;) f()`, and the shared-chunk hash flips
(`_abort-signal-B6bKz-Eo` -> `_abort-signal-GQY_bOUg`). Verified identical
drift with and without an unrelated source edit, so the committed `.sizes*`
no longer reproduce from the committed lockfile — every next commit's
pre-commit size diff will carry this unrelated noise. Fix: regenerate and
commit `.sizes*` once (confirming which toolchain/platform produced the
committed files), or pin the minifier the sizes script uses.

## `npm test <file>` appends to the default spec glob instead of scoping to the file

`.mocharc.json:1` | 2026-07-15 | impact:low | effort:low

Passing an explicit test file (`npm test -- packages/runtime-tags/src/__tests__/marker-conformance.test.ts`)
does not scope the run: mocha adds positional file args to the configured
spec (`packages/*/@(src|test)/**/*.test.@(js|ts)`), so the whole suite runs
anyway — silently, since the named file is also included. Scoping to one file
requires bypassing the config
(`npx mocha --no-config --no-package --timeout 10000 --require ~ts <file>`),
which is undocumented and easy to get wrong (the `~ts` register hook and
timeout must be repeated by hand). Either document that incantation in
CLAUDE.md next to the `--grep` guidance, or add a small `test:file` script
that forwards to mocha without the default spec.
