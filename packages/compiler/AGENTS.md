# `@marko/compiler`

Translator-agnostic compiler: parses `.marko` into a Babel AST (custom node types like `MarkoTag`, `MarkoAttribute` — added to Babel by the root `patches/`), runs migrate/transform passes, then hands the AST to a **translator** (`@marko/runtime-tags/translator` or `marko/translator`) for codegen. Stays at v5.x; language changes belong in the translators, not here.

## Map

- `src/index.js` — public API: `compile[File][Sync](src, filename, config)` → `{ code, map, meta, ast }`, `configure`, `taglib`, `types`.
- `src/config.js` — config defaults. Key options: `output` (`"html"` | `"dom"` | `"source"` | `"migrate"`), `optimize`, `translator`, `modules` (`"esm"`/`"cjs"`), `optimizeKnownTemplates`, `errorRecovery`, `cache`, `fileSystem`.
- `src/babel-plugin/` — pipeline core. Stages: `parse → migrate → transform → analyze` (cached per template) then `translate` on a clone. Each stage merges visitors from taglibs + the translator.
- `src/taglib/` — tag registry/discovery: built-in HTML/SVG/MathML JSON taglibs, `marko.json` / `marko-tag.json` discovery walking up from the template, `buildLookup`.
- `src/babel-utils/` — the helper API for translator authors (`assert*`, `diagnostic*`, `import*`, `parse*`, `getTagDef`, `isNativeTag`, `resolveTagImport`, ...). Exported as `@marko/compiler/babel-utils`.
- `internal/babel/index.ts` — the single controlled Babel entry, re-exported as `@marko/compiler/internal/babel`. All Babel access (here and in translators) goes through it, never `@babel/*` directly.

## Translator contract

A translator module exports: `translate` (required visitor), `taglibs` (required, `[[id, props]]`), optional `transform` / `analyze` visitors, `tagDiscoveryDirs`, `optionalTaglibs`, `preferAPI` (`"tags"` | `"class"`), and `getRuntimeEntryFiles(output, optimize)`. Loading is resolved from `config.translator` or auto-detected from the app's dependencies (`util/try-load-translator.js`, default logic in `config.js`).

## Notes

- `output: "source"` / `"migrate"` re-print `.marko` source (tooling/codemods) — no translator codegen.
- Bumping any `@babel/*` version requires regenerating the corresponding patch in root `patches/` (patch-package); the custom AST types and generated `dist/types.d.ts` (`npm run build-babel-types -w @marko/compiler`) depend on them.
- Adding a core tag in a translator shows up in taglib-lookup expectations here and in `packages/runtime-class/test/taglib-lookup/`.
