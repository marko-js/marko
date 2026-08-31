---
type: dx
impact: med
effort: low
site: package.json › engines
---

# Pin a node version file so pnpm/hook shims pick a supported node

`engines.node` requires >= 22.18 (native `module.registerHooks`), but nothing pins a version for tool managers: there is no `.node-version` / `.nvmrc` / `mise.toml`. On a machine whose `pnpm` is a mise shim and whose default `node` is older (e.g. a system 22.14), `pnpm run …`, `pnpm test`, and the husky pre-commit hook all die inside the compiler `prepare` step with `TypeError: registerHooks is not a function`, even when a supported node is exported on `PATH`, because the shim resolves node from its own config. A `.node-version` (or `[tools] node` in `mise.toml`) matching `engines` makes every shim agree with the repo, and `engine-strict=true` in `.npmrc` would fail fast with a readable message instead of a stack trace from `scripts/types`.

Check: with `node -v` reporting 22.14 as the default, run `pnpm run build` — it fails in `@marko/compiler build-babel-types` with `registerHooks is not a function`.
