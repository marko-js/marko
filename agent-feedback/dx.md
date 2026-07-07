# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## Fix the broken default translator in `npm run compile`

`scripts/inspect-compiled-output.ts:22` | 2026-07-02 | impact:med | effort:low

The `-t`/`--translator` option defaults to the string `"tags"`, so the fallback at `scripts/inspect-compiled-output.ts:41` (`args.values.translator || "@marko/runtime-tags/translator"`) never fires, and every invocation without an explicit `-t` dies with `Cannot find module 'tags'`. Either default the option to `""` or map shorthand values (`tags` → `@marko/runtime-tags/translator`, `class` → `marko/translator`). The root `AGENTS.md` documents the `-t ""` workaround; update it when fixing.

## `c8` coverage crashes generating lcov when the wrapped process loads `~ts`

`scripts/test-parallel.js:10` | 2026-07-02 | impact:med | effort:med

`c8 node -r ~ts <script>` (i.e. any c8-wrapped process that loads `scripts/babel-register.js` via `-r ~ts`) throws `TypeError: Cons is not a constructor` at `istanbul-reports/index.js:22` during c8's report step while constructing the `lcov` reporter — no `coverage/lcov.info` is written and the process exits 1. Coverage collection itself succeeds (the text-summary reporter prints correct numbers); only lcov report generation dies. This is why `scripts/test-parallel.js` is deliberately plain CommonJS (its spawned mocha workers still load `~ts` via `.mocharc.parallel.json`, which does _not_ trigger the bug — only `-r ~ts` on the c8-monitored process does). Worth root-causing, since it silently blocks lcov/codecov for any future `node -r ~ts` script someone wraps in `c8`; likely a c8@11 ↔ @babel/register require-hook interaction.

## Migrate to Babel 8 and chai 6 as dedicated efforts (deferred from the deps upgrade)

`patches/@babel+types+7.29.7.patch:1` | 2026-07-07 | impact:med | effort:high

The dependency upgrade took everything to latest except two majors that are true migrations, not refreshes. **Babel 8** (`@babel/*` held at 7.29.7): the compiler ships four hand-authored patches against Babel 7's compiled `lib/` (`patches/@babel+{types,traverse,generator,helper-compilation-targets}+7.29.7.patch`, the types one 79 KB, injecting Marko AST node types) plus `packages/compiler` code that reaches Babel-7 internals via `@marko/compiler/internal/babel`; Babel 8 restructures those modules so the patches won't apply and the codegen needs porting. **chai 6** (held at 4.5.0): chai 5+ is ESM-only (`"type":"module"`), but there are 379 CommonJS `require("chai")` call sites (all under `packages/runtime-class/test/**` and `packages/runtime-tags/src/__tests__`), so adopting it means converting every test fixture to ESM or dynamic import. Each should be its own PR with focused testing.

## `npm audit` reports 3 dev-only advisories; gate on `npm run audit` instead

`package.json:9` | 2026-07-07 | impact:low | effort:low

Bare `npm audit` shows 3 advisories (`serialize-javascript` high, `js-yaml`/mocha moderate, `diff` low), all transitively under `mocha` and `@changesets/cli` — dev tooling that never ships. They can't be resolved by version bumps: the fixes live in higher majors than mocha's ranges allow (`serialize-javascript ^6`→fix in 7.x, `diff ^7`→8.x, `js-yaml ^4`→5.x), mocha 11.7.6 is the newest stable, and the latest `@changesets/parse` still pins `js-yaml ^4.1.1`. Rather than pin them via `overrides`, the repo audits production deps only: **`npm run audit`** (`npm audit --omit=dev`) is the gate and returns 0 — that's what consumers of the published packages actually receive. Revisit and drop the distinction once mocha/changesets update their transitive deps upstream.

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
failing" fixture snapshots (translator `optimize`/`html` output, e.g.
`persisted-update-generic-child`, `persisted-update-fragment`) while the
aggregate still prints "0 failing". The failing set changes run to run, and
every flagged fixture passes when run alone (`npm test -- --grep "<fixture> "`).
The diffs are content-id shifts — `_content("a0"…)` expected vs `_content("a5"…)`
actual — so the ids a fixture compiles with depend on how many templates its
worker compiled first, and `scripts/test-parallel.js` shards fixtures
round-robin (`MARKO_TEST_SLOTS`), so the id counter state at a given fixture is
not stable across runs. Snapshots are generated under one scheduling and
checked under another. This makes `test:parallel` unreliable as a pass/fail
gate and masks real regressions (a genuine failure looks like just more
flakiness); it cost a full stash-and-rerun against the committed baseline to
confirm a suspected regression was actually this pre-existing noise. Worth
resetting the content-id counter per fixture compile (or seeding it from the
fixture identity) so ids are scheduling-independent.
