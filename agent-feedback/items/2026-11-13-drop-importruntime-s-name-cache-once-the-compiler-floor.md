---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/runtime.ts › importRuntime
---

# Drop importRuntime's name cache once the compiler floor caches importNamed

`importRuntime` keeps its own per-output `name → local` map (`getRuntimeImports`) so it skips `importNamed`'s per-call NodePath rebuild and specifier scan. `importNamed` (`packages/compiler/src/babel-utils/imports.js` › `getImport`) now keeps a `name → local` map per import declaration, so both caches answer the same question. The runtime-tags `@marko/compiler` range (`^5.43.0`) still admits compilers that scan, so the cache stays until that range's floor is a release with the cached `importNamed`; then delete `getRuntimeImports` and call `importNamed` directly.

Check: `packages/runtime-tags/package.json` › `@marko/compiler` range against the first compiler release whose `importNamed` reads `named.get(name)`; then compare a dom compile of a many-helper template with and without `getRuntimeImports` on `pnpm run build` output.
