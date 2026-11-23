---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/__tests__/utils/bundle.ts › runtimeSourceKey
---

# Key the prebuilt test runtime by its build too

`runtimeSourceKey` hashes the runtime's source files (excluding `__tests__`) and the rolldown version, so an edit to `buildRuntime` itself (its input, defines, plugins) reuses the stale `__tests__/dist/<kind>-<key>` build, and a revert of such a line passes until some runtime file changes. Hash `bundle.ts` into the key as well.

Check: in a scratch copy with a warm `__tests__/dist`, change `buildRuntime`'s `runtime` input to `path.join(srcDir, `${kind}.ts`)` and run `pnpm test -- --grep "runtime-tags/translator const-tag "`: it passes, and fails once `__tests__/dist` is removed.
