# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## Fix the broken default translator in `npm run compile`

`scripts/inspect-compiled-output.ts:22` | 2026-07-02 | impact:med | effort:low

The `-t`/`--translator` option defaults to the string `"tags"`, so the fallback at `scripts/inspect-compiled-output.ts:41` (`args.values.translator || "@marko/runtime-tags/translator"`) never fires, and every invocation without an explicit `-t` dies with `Cannot find module 'tags'`. Either default the option to `""` or map shorthand values (`tags` → `@marko/runtime-tags/translator`, `class` → `marko/translator`). The root `AGENTS.md` documents the `-t ""` workaround; update it when fixing.

## `npm test` bails on a failing runtime-class browser fixture

`packages/runtime-class/test/components-browser/fixtures/event-attach-if-else-nested-component/test.js:25` | 2026-07-02 | impact:med | effort:med

On a clean checkout of `main` (Node v22.22.2, fresh `npm install`), the full `npm test` run stops at this fixture with `AssertionError: expected 3 to equal 2` (attach count), and because `.mocharc.json` sets `bail: true` the remaining suites never run locally. The failure is deterministic across reruns here, so a full local verification pass requires scoping around it (eg `--grep "runtime-tags"`). Worth reproducing on a maintainer machine / CI Node versions to determine whether the test or the attach counting is at fault.
