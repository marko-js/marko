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
## `npm run compile -o hydrate` cannot be used standalone

`scripts/inspect-compiled-output.ts:31` | 2026-07-02 | impact:low | effort:low

Compiling with `-o hydrate` throws `the "resolveVirtualDependency" option
must be supplied when output is "hydrate"`, so the fastest way to inspect
what a hydrate entry generates is unavailable outside a bundler context.
Either have the inspect script pass a stub `resolveVirtualDependency` (e.g.
inline the virtual code as a comment), or document the limitation next to
the `-t ""` workaround in `AGENTS.md`.

## `npm run lint` is red on a clean checkout (cspell)

`cspell.json` | 2026-07-03 | impact:med | effort:low

<!-- cspell:disable -->

`npm run lint` fails on HEAD before any local changes: cspell reports ~27
unknown words across ~9 untouched files (`commandfor` in
`packages/runtime-class/tags-html.d.ts`, `jridgewell`, `snapdir`,
`unrenderable`, `controllables`, `whib`/`cqwhib` regex fragments in
`style-interpolation.ts`, `vmin`/`vmax`, etc.). Because the lint script is
`eslint && prettier && cspell`, a red baseline masks new spelling mistakes
and forces every contributor to diff cspell output by hand. Either add the
words to `cspell.json`, inline-disable the regex-heavy lines, or exclude
generated/vendored type files.

<!-- cspell:enable -->

## `_var_resume` register ids can collide for same-named bindings

`writeSignals` derives the `_var_resume` id from the referenced bindings'
_names_ (`getResumeRegisterId(section, signal.referencedBindings, "var")`).
Names are not unique per section for dom bindings (`#text`, `#div`, …), so
two registered signals over same-named bindings in one section would silently
overwrite each other in the client registry. Today's registered signals
(dynamic-tag tag vars) use user-named bindings so it likely never bites, but
the update-entry work had to add `Signal.registerId` to opt out for
conditional signals — the default derivation is a latent trap worth an id
scheme keyed on accessor rather than name.

## App validation suites silently run against stale servers

The marko-ecommerce validation runner (`npm run validate`) targets whatever
answers on `:41800` and has no way to tell whether that server predates the
build under test. A long-lived server from an earlier work session produced
a confusing failure signature after a rebuild — chunk-hash 404s, navigations
falling back to full reloads (`marker=undefined`), and history-count
mismatches — that looked exactly like a regression in the change being
validated. Worth a freshness guard in `all.mjs`: compare the server's
`x-marko-build` (already exposed for update negotiation) or the dist mtime
against the running process start, and refuse to run — or at least warn —
on mismatch.

## `test:parallel` snapshot failures are nondeterministic across shards

`npm run test:parallel` intermittently reports a handful of "unexpectedly
failing" fixture snapshots (translator `optimize`/`html`/`dom`/`ssr` output,
e.g. `persisted-update-generic-child`, `persisted-update-fragment`,
`persisted-update-dynamic-content`) while the aggregate still prints
"0 failing". The failing set changes run to run, and every flagged fixture
passes when run alone (`npm test -- --grep "<fixture> "`). The diffs are
register-id shifts (`_script_update("a0"…)` vs `("a2"…)`, etc.). This is
**not** cross-fixture id-counter leakage (an earlier guess here was wrong) --
traced to a genuine intra-fixture race between the concurrently-started
`domBuilt`/`htmlBuilt` rolldown builds in
`packages/runtime-tags/src/__tests__/utils/bundle.ts`, which share one
register-id map and race to claim ids by first-encounter order; CPU
contention from `test:parallel`'s sibling worker processes perturbs which
build's compile reaches a given signal first. Full mechanism, evidence, and
a real-build risk assessment (this is not purely a test artifact) are in
`agent-feedback/bugs.md` ("Optimized register-id allocation races when
html/dom compiles run concurrently"). This makes `test:parallel` unreliable
as a pass/fail gate and masks real regressions (a genuine failure looks like
just more flakiness); it cost a full stash-and-rerun against the committed
baseline to confirm a suspected regression was actually this pre-existing
noise.

## run repo: `post-get-single-flight` fixture crashes under a full Chromium

(marko-js/run repo, `packages/run/src/__tests__/fixtures/post-get-single-flight`.)
Running run's browser suite with a system browser via the harness's
`CHROMIUM_EXECUTABLE_PATH` escape hatch (e.g. in containers where the pinned
playwright headless-shell revision can't be downloaded) deterministically
fails this fixture in both dev and preview, while playwright's
chromium-headless-shell passes it. Cause: a full Chromium requests
`/favicon.ico`; the fixture's `$id` route matches it (`id="favicon.ico"`),
the page's `<await(db.get($global.params.id))>` body dereferences
`thing.name` on the undefined lookup mid-stream (headers already sent), and
the unhandled error event kills the whole dev/preview server process, so the
real test steps then fail on a dead server. The headless shell never fetches
favicons, which is the only reason the fixture passes there. Two cheap
hardenings, either sufficient: give the fixture's db a safe fallback (or
guard the render), or scope the route so favicon requests 404 instead of
matching `$id`. Cost several hours of false bisecting during the
persisted-pages review (the failure looked exactly like a branch
regression); also worth noting the harness leaves fixture preview servers
(`node .../dist/index.mjs`) running when the mocha process is killed
mid-suite, which compounds diagnosis with port noise on subsequent runs.

## `test:parallel` aggregate line under-counts failures

`scripts/test-parallel.js` | 2026-07-09 | impact:med | effort:low

The final `N passing, 0 failing across 4 workers` line sums mocha's
`passing`/`failing` counts, but snapshot mismatches surface as
"`unexpectedly failing`" in each worker's SUMMARY block, which the
aggregate does not count -- a run can print `0 failing` while a worker
reported `1 unexpectedly failing` a few hundred lines up (the exit code IS
non-zero, so CI catches it; an agent reading the tail line does not). This
masked a stale babel-generator `@__PURE__` snapshot on the packaging
backport branch until its CI run failed, and briefly hid two contention
flakes on the persisted branch. Fix: fold `unexpectedly failing` into the
aggregate (and the exit summary), or print a loud per-worker failure recap
above the total.
