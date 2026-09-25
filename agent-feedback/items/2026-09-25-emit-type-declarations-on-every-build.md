---
type: dx
impact: low
effort: low
site: packages/runtime-tags/scripts/bundle.mts
---

# Emit type declarations on every `pnpm run build`

`bundle.mts` removes `packages/runtime-tags/dist` before bundling, but `tsc -b tsconfig.build.json` keeps its build info in the root `dist/`, so a second `pnpm run build` finds the project up to date and emits no `.d.ts`: the package is left without `dist/dom.d.ts` and the rest, and a local `pnpm pack` of it (to try a fix in an app) ships untyped. Direction: clear the matching `dist/tsconfig.*.tsbuildinfo` where the bundle clears its output, or keep that build info inside the package's `dist`.

Check: run `pnpm run build` twice; `ls packages/runtime-tags/dist/*.d.ts` then finds nothing, and `npx tsc -b tsconfig.build.json --verbose` reports the project up to date.
