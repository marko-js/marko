---
type: bug
impact: high
effort: low
site: packages/compiler/scripts/bundle.mts › pruneHelpers
---

# Keep user-reachable Babel helpers in the bundled compiler

`pruneHelpers` trims `@babel/helpers`' generated table to the four names in `USED_HELPERS` on the premise that nothing else can request one, but that premise only covers the compiler's own transforms: `getBaseBabelConfig` (`packages/compiler/src/index.js`) enables `babelrc`/`configFile` discovery for translated output, so an app's own presets run inside the bundled Babel and can request any of the other 118 helpers. A targetless `@babel/preset-env` assumes ES5 targets, its computed-properties transform requests `defineProperty`, and compilation fails with `ReferenceError: Unknown helper defineProperty` — surfacing far from Babel (e.g. as a route-loading error in apps that compile via `@marko/compiler/register`). Affected apps cannot pin around it: the Marko 5 vdom translator imports `decodeHTML` from `@marko/compiler/babel-utils`, which shipped after the prune, so no compiler version has both the full helper table and that export. Direction: stop applying `pruneHelpers` in the `dist/babel.js` (node) build, where config-file discovery makes the reachable helper set open; the full table costs ~112 KB of the prune's 458 KB saving, and the `dist/babel.web.js` prune can stay.

Check: in a scratch app with `marko@^5.39`, `@babel/preset-env`, and a `.babelrc` of `{"presets": ["@babel/preset-env"]}` (no targets), `require("@marko/compiler").compileFileSync(file, { output: "html" })` on a template whose generated module contains a computed object property throws `Unknown helper defineProperty`; `grep -c ': helper('` on the published `dist/babel.js` finds 4 entries where `@babel/helpers`' `helpers-generated.js` has 122.
