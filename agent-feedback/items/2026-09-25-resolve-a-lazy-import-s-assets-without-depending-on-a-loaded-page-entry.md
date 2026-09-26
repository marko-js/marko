---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/assets.ts › withLoadAssets
---

# Resolve a lazy import's assets without depending on a loaded page entry

`withLoadAssets` flushes through the module-level `assetFlush`, which only `withPageAssets` assigns, when some page-entry module is evaluated. A template with an `import … with { load }` rendered on its own (for example a partial that `@marko/vite` does not treat as a page entry, rendered with `template.render()` from JS) throws `TypeError: assetFlush is not a function` in a fresh server process, yet renders once any page entry has loaded, borrowing that entry's resolver. So the same render fails or succeeds depending on module load order, with an error that names no cause. Direction: have the translator pass the `linkAssets.runtime` `flush` to `withLoadAssets` as it already does for page entries, or at least throw a MARKO_DEBUG error in `assets.ts › flush` saying the lazy import needs a page entry.

Check: `node -r ~ts` a script in the repo root that imports `_template`, `_html` and `withLoadAssets` from `./packages/runtime-tags/src/html.ts`, builds `lazy = withLoadAssets(_template("child", () => _html("<p>child</p>")), "child", [{ type: "idle" }])` and `partial = _template("partial", () => lazy({}), 1)`, and calls `String(partial.render({}))`: it throws `TypeError: assetFlush is not a function`. Calling `withPageAssets(_template("page", () => {}, 1), () => "", "page")` first makes the same render succeed.
