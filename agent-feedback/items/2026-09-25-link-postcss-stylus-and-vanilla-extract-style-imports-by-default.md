---
type: bug
impact: med
effort: low
site: packages/compiler/src/config.js › hydrateIncludeImports
---

# Match PostCSS, Stylus and vanilla-extract style imports in the default `hydrateIncludeImports`

The default `hydrateIncludeImports` regexp covers only `css|less|s[ac]ss|styl` plus media and font extensions. `isClientAssetImport` in `packages/runtime-tags/src/translator/util/asset-imports.ts` uses it to decide which top-level imports a page entry links for a server-only template. `.pcss`, `.postcss`, `.stylus` and `.css.ts` (vanilla-extract) imports are all styles to Vite (`@marko/vite`'s `styleImportReg` lists them), but they miss the regexp. A server-only page that imports its stylesheet that way therefore ships no stylesheet in the build. `@marko/vite` does not pass its own `hydrateIncludeImports`, and a bundler plugin should not have to. Direction: widen the default to Vite's CSS languages (`pcss`, `postcss`, `stylus`, `sss`) and to a `.css.[cm]?[jt]s` suffix.

Check: in a `./x.tmp.mjs` at the repo root, run with `node -r ~ts`, compile a template whose lines are `import "./a.pcss";`, `import "./b.postcss";`, `import "./c.stylus";`, `import "./d.css.ts";`, `import "./f.css";` and `<div>hi</div>`. Use `compileSync(src, file, { translator: "@marko/runtime-tags/translator", output: "dom", entry: "page", linkAssets: { runtime: "x", onAsset() {} }, babelConfig: { babelrc: false, configFile: false } })`. The resulting code is only `import "./f.css";`. In a `@marko/vite` build of a server-only page that imports `./a.pcss` and `./f.css`, the only emitted stylesheet holds just `f.css`'s rules.
