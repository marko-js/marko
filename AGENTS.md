# Marko Monorepo

Marko compiles `.marko` templates into optimized server (streaming HTML) and client (fine-grained DOM) JavaScript. pnpm workspaces; Node >= 22.18 (native TS type stripping + module.registerHooks). Primary development happens in `packages/runtime-tags`.

## Packages

- [`packages/compiler`](packages/compiler/AGENTS.md) — `@marko/compiler`. Translator-agnostic: parses `.marko` into a (patched) Babel AST, then hands off to a translator for codegen.
- [`packages/runtime-tags`](packages/runtime-tags/AGENTS.md) — `marko@6` / `@marko/runtime-tags`. The Marko 6 runtime **and** its translator. **Primary development.**
- [`packages/runtime-class`](packages/runtime-class/AGENTS.md) — `marko@5` / `@marko/runtime-class`. Marko 5, in maintenance; its translator wraps the class-API translator with runtime-tags' interop layer.

A "translator" is the Babel-plugin half of a runtime package; the compiler loads it as `<pkg>/translator`. "Marko 6" is the runtime-tags version — the compiler stays 5.x.

## Commands

All from repo root. Tests and tooling run directly from TS source (native Node type stripping plus the `~ts` resolve hook for extensionless imports; package `exports` point at `src/` until publish), so no build step is needed to iterate.

```sh
pnpm test -- --grep "runtime-tags/translator <fixture> "  # scoped test run; bail: stops at first failure
pnpm exec mocha <file.test.ts>                            # one file; `pnpm test -- <file>` still unions with the suite glob
pnpm run test:parallel                                    # whole suite fanned across CPU cores (~3x faster than a serial pnpm test)
pnpm run test:update -- --grep "..."                      # regenerate snapshots (review the diff!)
pnpm run compile -- -o dom -d foo.marko                   # compiled output -> foo.marko.js (-o html for SSR; omit -d for optimized)
pnpm run build                                            # all packages -> dist/ + .d.ts
pnpm run build:sizes                                      # bundle-size table; diffs vs .sizes.json
pnpm run lint                                             # oxlint + oxfmt check
pnpm run format                                           # oxlint --fix + oxfmt write
pnpm run change                                           # add a changeset (required for user-facing changes)
```

`pnpm run compile` is the fastest way to inspect what the translator generates. (Pass `-t class` for the Marko 5 translator; `-t` also accepts a full translator module id.)

`pnpm run change` prompts, so write `.changeset/<name>.md` directly. Name a workspace package — `@marko/compiler`, `@marko/runtime-tags` or `marko` (`packages/runtime-class`) — then check it with `pnpm exec changeset status`; a wrong name passes review and breaks the release on `main`.

## Repo invariants

- **Dependencies are patched.** `patches/` (applied by pnpm patchedDependencies on install) adds Marko AST node types to `@babel/types`/`traverse`/`generator`, and makes mocha print the `require()` error it otherwise drops when its `import()` fallback rescues a spec. Import Babel only via `@marko/compiler/internal/babel` and helpers via `@marko/compiler/babel-utils`, never `@babel/*` directly. Bumping any patched dependency requires regenerating its patch.
- **Bundle size is a feature.** The pre-commit hook runs lint-staged, a full build, and `build:sizes`, staging `.sizes.json`/`.sizes/` — that diff is the size impact of the change. Commits are slow by design. Lint rules whose fix rewrites runtime code into larger output stay off in `.oxlintrc.json` (`unicorn/prefer-string-starts-ends-with`, `unicorn/no-new-array`); enabling one means checking `build:sizes` first.
- **Snapshots and sizes are generated.** Never hand-edit _or delete_ `__snapshots__/**`, fixture `sizes.json`, or `.sizes*`; regenerate with `pnpm run test:update` (which also prunes stale snapshots) and the commit hook.
- **CI** (`.github/workflows/ci.yml`): build + lint on Node 26; tests on Node 22/24/26 (`MARKO_DEBUG=1`, zcov coverage). Releases go out via changesets on push to `main`.

## Conventions

Organize files top-down (progressive disclosure): public API/exports first, then orchestration, helpers, and low-level detail last — use function-declaration hoisting.

Comments are a last resort and never exceed two lines: prefer self-describing code, and when one is needed it captures intent — never what the code was or what was removed.

Marko language reference: <https://markojs.com/llms.txt> lists every docs page; append `.md` to any docs URL for markdown.

## Agent feedback

Anything actionable but out of scope for the current task (suspected bug, cleanup, perf or size win, tooling friction, confusing code) must be filed in [`agent-feedback/`](agent-feedback/README.md) before finishing. Never drop it silently. Never fix it inside an unrelated diff.
