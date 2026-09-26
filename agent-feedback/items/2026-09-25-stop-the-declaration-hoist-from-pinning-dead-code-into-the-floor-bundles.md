---
type: perf
impact: med
effort: low
site: packages/runtime-tags/scripts/build-plugins/decl-hoist.mts › moduleScopeVarHoistPlugin
---

# Stop the declaration hoist from pinning dead code into the floor bundles

`moduleScopeVarHoistPlugin` merges every module-scope `let`/`const` of a dist chunk into one declaration statement. After the merge an app bundler keeps functions that unused declarators reference: `_html` (in `dist/dom-*.mjs`) and `compat` (in `dist/dom.mjs`) keep `insertChildNodes` and `toInsertNode` in `.sizes/counter.ssr/runtime.js` and `.sizes/comments.ssr/runtime.js`, where nothing calls them. Re-bundling those two examples with the `scripts/sizes.mts` setup against a copy of `dist` that has each declarator in its own statement drops both functions: counter goes from 2627 to 2409 min and 1305 to 1234 brotli, comments from 2839 to 2621 min and 1385 to 1311 brotli. Fixture bundles skip the plugin, so no test sees it. Direction: hoist only declarators whose initializers reference no module-level function (or drop the plugin if `build:sizes` shows no win left), and have `sizes.mts` fail when a floor runtime contains a denylisted symbol such as `insertChildNodes`.

Check: `grep -c "function insertChildNodes\|function toInsertNode" .sizes/counter.ssr/runtime.js` prints 2, and neither function has a caller in that file other than each other. Rewriting the top-level multi-declarator statements in a copy of `packages/runtime-tags/dist/*.mjs` into one statement per declarator (for example with `parseSync` from `rolldown/utils`) and bundling `basic-counter` in hydrate mode the way `scripts/sizes.mts › bundleUserCode` does leaves both functions out of the runtime chunk.
