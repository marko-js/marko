# Marko Monorepo

Marko compiles `.marko` templates into optimized server (streaming HTML) and client (fine-grained DOM) JavaScript. npm workspaces; Node >= 22. Primary development happens in `packages/runtime-tags`.

## Packages

- [`packages/compiler`](packages/compiler/AGENTS.md) — `@marko/compiler`. Translator-agnostic: parses `.marko` into a (patched) Babel AST, then hands off to a translator for codegen.
- [`packages/runtime-tags`](packages/runtime-tags/AGENTS.md) — `marko@6` / `@marko/runtime-tags`. The Marko 6 runtime **and** its translator. **Primary development.**
- [`packages/runtime-class`](packages/runtime-class/AGENTS.md) — `marko@5` / `@marko/runtime-class`. Marko 5, in maintenance; its translator wraps the class-API translator with runtime-tags' interop layer.

A "translator" is the Babel-plugin half of a runtime package; the compiler loads it as `<pkg>/translator`. "Marko 6" is the runtime-tags version — the compiler stays 5.x.

## Commands

All from repo root. Tests and tooling run directly from TS source (`~ts` Babel register hook; package `exports` point at `src/` until publish), so no build step is needed to iterate.

```sh
npm test -- --grep "runtime-tags/translator <fixture> "  # scoped test run; bail: stops at first failure
npm run test:update -- --grep "..."                      # regenerate snapshots (review the diff!)
npm run compile -- -t "" -o dom -d foo.marko             # compiled output -> foo.marko.js (-o html for SSR; omit -d for optimized)
npm run build                                            # all packages -> dist/ + .d.ts
npm run build:sizes                                      # bundle-size table; diffs vs .sizes.json
npm run lint                                             # eslint + prettier check + cspell
npm run format                                           # eslint --fix + prettier --write
npm run change                                           # add a changeset (required for user-facing changes)
```

`npm run compile` is the fastest way to inspect what the translator generates. (`-t ""` works around a broken default for that flag — see `agent-feedback/dx.md`.)

## Repo invariants

- **Babel is patched.** `patches/` (applied by patch-package on install) adds Marko AST node types to `@babel/types`/`traverse`/`generator`. Import Babel only via `@marko/compiler/internal/babel` and helpers via `@marko/compiler/babel-utils`, never `@babel/*` directly. Bumping a `@babel/*` version requires regenerating its patch.
- **Bundle size is a feature.** The pre-commit hook runs lint-staged, a full build, and `build:sizes`, staging `.sizes.json`/`.sizes/` — that diff is the size impact of the change. Commits are slow by design.
- **Snapshots and sizes are generated.** Never hand-edit `__snapshots__/**`, fixture `sizes.json`, or `.sizes*`; regenerate with `npm run test:update` and the commit hook.
- **CI** (`.github/workflows/ci.yml`): build + lint on Node 26; tests on Node 22/24/26 (`MARKO_DEBUG=1`, c8 coverage). Releases go out via changesets on push to `main`.
- `cspell` checks all `.md`/`.ts`/`.js`/`.marko` files — add genuinely new terms to `cspell.json`.

## Conventions

Organize files top-down (progressive disclosure): public API/exports first, then orchestration, helpers, and low-level detail last — use function-declaration hoisting.

Marko language reference: <https://markojs.com/llms.txt> lists every docs page; append `.md` to any docs URL for markdown.

## Agent feedback

Anything actionable but out of scope for the current task — a suspected bug, cleanup, a perf/size win, tooling friction, or code that was confusing — must be recorded in [`agent-feedback/`](agent-feedback/README.md) before finishing. Don't silently drop it, and don't fix it inside an unrelated diff.
