# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## Fix the broken default translator in `npm run compile`

`scripts/inspect-compiled-output.ts:22` | 2026-07-02 | impact:med | effort:low

The `-t`/`--translator` option defaults to the string `"tags"`, so the fallback at `scripts/inspect-compiled-output.ts:41` (`args.values.translator || "@marko/runtime-tags/translator"`) never fires, and every invocation without an explicit `-t` dies with `Cannot find module 'tags'`. Either default the option to `""` or map shorthand values (`tags` → `@marko/runtime-tags/translator`, `class` → `marko/translator`). The root `AGENTS.md` documents the `-t ""` workaround; update it when fixing.

## `c8` coverage crashes generating lcov when the wrapped process loads `~ts`

`scripts/test-parallel.js:10` | 2026-07-02 | impact:med | effort:med

`c8 node -r ~ts <script>` (i.e. any c8-wrapped process that loads `scripts/babel-register.js` via `-r ~ts`) throws `TypeError: Cons is not a constructor` at `istanbul-reports/index.js:22` during c8's report step while constructing the `lcov` reporter — no `coverage/lcov.info` is written and the process exits 1. Coverage collection itself succeeds (the text-summary reporter prints correct numbers); only lcov report generation dies. This is why `scripts/test-parallel.js` is deliberately plain CommonJS (its spawned mocha workers still load `~ts` via `.mocharc.parallel.json`, which does _not_ trigger the bug — only `-r ~ts` on the c8-monitored process does). Worth root-causing, since it silently blocks lcov/codecov for any future `node -r ~ts` script someone wraps in `c8`; likely a c8@11 ↔ @babel/register require-hook interaction.

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
