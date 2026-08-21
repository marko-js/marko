---
type: bug
impact: med
effort: low
site: packages/runtime-class/docs/compiler.md
---

# Repair `compiler.md`, the only compiler-API doc, and give it the Marko 6 options

`@marko/compiler` ships no README, so this file — reached only through the package's `homepage` field — is the whole prose surface for the compile API, and a reader cannot work around what is wrong with it. Its one worked example, the `@marko/webpack/loader` `resolveVirtualDependency` recipe that build-tool authors are told to copy, is not valid JavaScript: it uses `{ code, map } = …` as a statement twice, so the block throws `SyntaxError: Unexpected token '='` before it runs. It points at `@marko/compiler/taglib` for `excludeDir`/`excludePackage`, which is not in the package's exports map (those live on the main export's `taglib` namespace) and resolves to `MODULE_NOT_FOUND`. Its `CompileResult` omits `ast`, the field the documented `ast: true` workflow depends on, and calls `meta` "nothing terribly useful, probably going to get deprecated" while `index.d.ts` types it as `MarkoMeta`. And its option sections cover `hydrate`, `hydrateInit`, `hydrateIncludeImports`, `writeVersionComment` and `ignoreUnrecognizedTags` — all marked deprecated or inert under Marko 6 in `config.d.ts` — while `entry` and `linkAssets` appear nowhere, even though `entry` is unusable without `linkAssets` (`program/index.ts` throws ``The "entry" option requires the `linkAssets` compiler option to be configured``) and nothing states the shape `linkAssets` must have.

Check: extract the fenced `js` block under "Example based on `@marko/webpack/loader`" and run `node --check` on it — `SyntaxError: Unexpected token '='`; `node -e "require.resolve('@marko/compiler/taglib')"` — `MODULE_NOT_FOUND`; `grep -c 'linkAssets' packages/runtime-class/docs/compiler.md` — `0`. Expect the example to parse, the taglib pointer to match the exports map, `ast` in the documented `CompileResult`, and sections for `entry`/`linkAssets`.
