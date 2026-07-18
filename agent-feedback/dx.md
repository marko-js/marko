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

## Emit a compile-time diagnostic when an unenclosed `>`/`>=` truncates an attribute-value expression

`packages/compiler/src/babel-plugin/parser.js:170` | 2026-07-18 | impact:med | effort:med

The htmljs-parser tokenizer treats the first unenclosed `>` in a tag/attribute-value expression as the tag close, so `<if=input.n > 0>yes</if>` compiles to `if (input.n) { _html(" 0>yes"); }` — the condition silently degrades to a truthiness check on `input.n` and ` 0>` leaks into the output as literal text. `<const/positive=input.delta >= 0>` likewise compiles to `const positive = input.delta;` plus a leaked `= 0>` text node (in a live dashboard every stat card showed the positive marker, including a `-2.3%` delta, with literal `= 0>` printed before each card). No error is raised in any mode: the parser adapter only rethrows tokenizer `onError` reports (`parser.js:141`) and faithfully emits the post-`>` remainder via `onText` (`parser.js:170`), and the truncation itself raises no `onError`. `x > y` / `x >= y` comparisons are among the most common expressions authors write in `<if>`/`<const>`/`<let>`/attribute values, so a silent wrong-logic-plus-leaked-text miscompile is a severe footgun. The ambiguity is intentional and documented (a CAUTION at website `docs/reference/language.md:212` says values cannot contain an unenclosed `>` and must be parenthesized), and the underlying token rule lives in the external `htmljs-parser` dependency (^5.12) — so rather than a grammar change, the pragmatic fix is a compiler/lint diagnostic for the tell-tale `<syntactically-complete-left-operand>` immediately followed by text beginning like a truncated operator (` 0>`, `= 0>`), which is exactly the `x > y` / `x >= y` shape.

## Surface a near-miss suggestion (or document the casing rule) for miscased event attributes

`packages/runtime-tags/src/common/helpers.ts:133` | 2026-07-18 | impact:low | effort:low

`<input onKeydown(e) {}>` fails @marko/type-check with TS2353 "Object literal may only specify known properties, and '\"onKeydown\"' does not exist in type 'Directives & Input'" — no "did you mean onKeyDown?" — while the runtime happily binds it: `isEventHandler` matches `/^on[A-Z-]/` and `getEventHandlerName` lowercases everything after "on" (`name.slice(2).toLowerCase()`), so both casings mean `keydown` at runtime. Canonicalizing the types to exact camelCase (`onKeyDown` at `packages/runtime-tags/tags-html.d.ts:5085`, plus the `on-keydown` alias) is a reasonable choice, but the bare excess-property error on a near-miss casing makes it look like event handlers are unsupported on that element rather than misspelled. Emitting a spelling suggestion for case-only near-misses in the type-check diagnostics, or documenting the exact-camelCase rule in `cheatsheet.md`, would fix the confusion cheaply.

## Warn that `<const>` values captured by reactive content must serialize — Intl formatters crash SSR

`packages/runtime-tags/src/html/serializer.ts:1651` | 2026-07-18 | impact:med | effort:low

The canonical i18n pattern — `<const/fmt=new Intl.NumberFormat(lang, { style: "currency", ... })>` reused by `${fmt.format(price)}` where `price` depends on a `<let>` — makes SSR throw `Unable to serialize "fmt" in <file>:<line>`: the formatter is captured in the resume payload and Intl instances are not serializable. Minimal repro: `<let/n=1/><const/fmt=new Intl.NumberFormat("en")/><button onClick(){n++}>${fmt.format(n)}</button>` fails SSR. The error already names the exact variable and location (excellent), but neither `packages/runtime-tags/cheatsheet.md` nor the `<const>` docs mention that values referenced from client-reactive expressions must survive serialization, and "create the formatter once and reuse it" is what every i18n guide teaches — the working pattern (a module-scope helper that constructs the formatter per call) is a dead-end discovery. Add a docs note plus a hint in `throwUnserializable`'s message (e.g. "move construction into a module-scope function").
