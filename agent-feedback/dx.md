# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## Fix the broken default translator in `npm run compile`

`scripts/inspect-compiled-output.ts:22` | 2026-07-02 | impact:med | effort:low

The `-t`/`--translator` option defaults to the string `"tags"`, so the fallback at `scripts/inspect-compiled-output.ts:41` (`args.values.translator || "@marko/runtime-tags/translator"`) never fires, and every invocation without an explicit `-t` dies with `Cannot find module 'tags'`. Either default the option to `""` or map shorthand values (`tags` → `@marko/runtime-tags/translator`, `class` → `marko/translator`). The root `AGENTS.md` documents the `-t ""` workaround; update it when fixing.
