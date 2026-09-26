---
type: bug
impact: low
effort: low
site: packages/runtime-class/src/runtime/helpers/load-tag.js › withLoadAssets
---

# Resolve a Class API lazy import's assets without depending on a loaded page entry

The Marko 5 `load-tag.js` `flush` resolves assets through the module-level `assetFlush`, which only `withPageAssets` assigns when a page-entry module evaluates. A Class API template with an `import … with { load }` that renders before any page entry has loaded (for example from JS at module scope, or a partial rendered from a fresh process) throws `TypeError: assetFlush is not a function`, while the same render succeeds once a page entry has loaded. Direction: have `translator/util/load-import.js` › `translateLoadTag` import `flush` from `linkAssets.runtime` and pass it to `withLoadAssets`, which assigns `assetFlush` like `withPageAssets` does (runtime-tags `html/assets.ts` › `withLoadAssets` takes the same argument).

Check: a `./*.tmp.cjs` script in the repo root that requires `./packages/runtime-class/src/runtime/helpers/load-tag.js` and runs `withLoadAssets("child", { _() {} })._({}, { global: {}, write() {}, script() {} })` throws `TypeError: assetFlush is not a function`.
