# Marko Monorepo

Marko compiles `.marko` templates into optimized server (streaming HTML) and client (fine-grained DOM) JavaScript. pnpm workspaces; Node >= 22.18 (native TS type stripping + module.registerHooks). Primary development happens in `packages/runtime-tags`.

## Packages

- [`packages/compiler`](packages/compiler/AGENTS.md) — `@marko/compiler`. Translator-agnostic: parses `.marko` into a (patched) Babel AST, then hands off to a translator for codegen.
- [`packages/runtime-tags`](packages/runtime-tags/AGENTS.md) — `marko@6` / `@marko/runtime-tags`. The Marko 6 runtime **and** its translator. **Primary development.**
- [`packages/runtime-class`](packages/runtime-class/AGENTS.md) — `marko@5` (private package, published only as `marko`). Marko 5, in maintenance; its translator wraps the class-API translator with runtime-tags' interop layer.

A "translator" is the Babel-plugin half of a runtime package; the compiler loads it as `<pkg>/translator`. "Marko 6" is the runtime-tags version — the compiler stays 5.x.

## Commands

All from repo root. Tests and tooling run directly from TS source (native Node type stripping plus the `~ts` resolve hook for extensionless imports; package `exports` point at `src/` until publish), so no build step is needed to iterate.

```sh
pnpm test                                                 # whole suite fanned across CPU cores (~3x faster than serial)
pnpm test -- --grep "runtime-tags/translator <fixture> "  # scoped test run
pnpm run test:serial -- --grep "..."                      # same run in one process: bail at first failure, live output, --inspect-brk
pnpm test -- <file.test.ts>                               # only the given spec files (dirs and globs work too)
pnpm run test:update -- --grep "..."                      # regenerate snapshots (review the diff!)
pnpm run compile -- -o dom -d foo.marko                   # compiled output -> foo.marko.js (-o html for SSR; omit -d for optimized)
pnpm run build                                            # all packages -> dist/ + .d.ts
pnpm run build:sizes                                      # bundle-size table; diffs vs .sizes.json
pnpm run lint                                             # oxlint + oxfmt check
pnpm run format                                           # oxlint --fix + oxfmt write
pnpm run change                                           # add a changeset (required for user-facing changes)
```

`pnpm run compile` is the fastest way to inspect what the translator generates. (Pass `-t class` for the Marko 5 translator; `-t` also accepts a full translator module id.)

`pnpm run change` prompts, so write `.changeset/<name>.md` directly, naming the package that owns the changed code: `packages/compiler` is `@marko/compiler`, `packages/runtime-tags` is `@marko/runtime-tags`, `packages/runtime-class` is `marko`. `pnpm exec changeset status` fails on a name that is no workspace package (which would break the release on `main`), but not on the wrong one: `marko` for a runtime-tags fix passes and publishes the wrong package.

## Repo invariants

- **Dependencies are patched.** `patches/` (applied by pnpm patchedDependencies on install) adds Marko AST node types to `@babel/types`/`traverse`/`generator`, and makes mocha print the `require()` error it otherwise drops when its `import()` fallback rescues a spec. The Babel patches only add Marko AST support; never patch Babel's own behavior. Import Babel only via `@marko/compiler/internal/babel` and helpers via `@marko/compiler/babel-utils`, never `@babel/*` directly. Bumping any patched dependency requires regenerating its patch.
- **Bundle size is a feature.** The pre-commit hook runs lint-staged, a full build, and `build:sizes`, staging `.sizes.json`/`.sizes/` — that diff is the size impact of the change. Commits are slow by design. The floor is `.sizes/counter.ssr` and `.sizes/comments.ssr` (a resumed page with no async, reorder, lazy, or dynamic html): code for an optional feature, even one `?.`, must fold out of them. Lint rules whose fix rewrites runtime code into larger output stay off in `.oxlintrc.json` (`unicorn/prefer-string-starts-ends-with`, `unicorn/no-new-array`); enabling one means checking `build:sizes` first.
- **Snapshots and sizes are generated.** Never hand-edit _or delete_ `__snapshots__/**`, fixture `sizes.json`, or `.sizes*`; regenerate with `pnpm run test:update` (which also prunes stale snapshots after a green run) and the commit hook.
- **CI** (`.github/workflows/ci.yml`): build + lint on Node 26; tests on Node 22/24/26 (zcov coverage). Releases go out via changesets on push to `main`.

## Conventions

Organize files top-down (progressive disclosure): public API/exports first, then orchestration, helpers, and low-level detail last — use function-declaration hoisting.

Comments are a last resort and never exceed two lines: prefer self-describing code, and when one is needed it captures intent — never what the code was or what was removed. Wording is plain and direct, with no invented shorthand.

Derive before adding. Before a new field, flag, helper, state container, parameter, test config, or module, find the existing analysis, helper, or runtime structure that already answers it and extend that. A parallel mechanism for one feature (one the rest of the code never needed) is a smell: say in the summary why nothing existing fits.

Every line needs a reason you can name. No guards, `?.`, fallbacks, casts (`as never`, `as any`), or parameters for states the design rules out; lean on the invariant (`!`, or a `MARKO_DEBUG` assert). Name checks, dependency method overrides, and machine heuristics are hacks: find the structural fix. A perf or config knob ships only with a measured win, and never restates a default.

Names come from the code. Reuse the vocabulary of neighboring code, [`CONTEXT.md`](packages/runtime-tags/CONTEXT.md), and the markojs.com docs; never coin a term the codebase does not already use.

Test through existing fixture families; add a test file only when no fixture can reach the behavior. A fix adds a fixture that fails without it.

Marko language reference: <https://markojs.com/llms.txt> lists every docs page; append `.md` to any docs URL for markdown.

## Agent feedback

Anything actionable but out of scope for the current task (suspected bug, cleanup, perf or size win, tooling friction, confusing code) must be filed in [`agent-feedback/`](agent-feedback/README.md) before finishing. Never drop it silently. Never fix it inside an unrelated diff. In scope, so fixed rather than filed: a defect in code the diff touches or exposes, and anything in the unreleased feature a branch builds (which also takes no changesets). A deliberate limitation gets a site comment, not an item.
