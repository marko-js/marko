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

A translator module exports: `translate` (required visitor), `taglibs` (required, `[[id, props]]`), optional `transform` / `analyze` visitors, `tagDiscoveryDirs`, `optionalTaglibs`, `preferAPI` (`"tags"` | `"class"`), `getRuntimeEntryFiles(output, optimize)`, and optionally `cheatsheet` (a module-relative path to an LLM syntax reference; `tryLoadTranslator` resolves it to a cwd-relative path and `util/agent-fix-guide.js` points coding agents at it on compile errors). Loading is resolved from `config.translator` or auto-detected from the app's dependencies (`util/try-load-translator.js`, default logic in `config.js`).

## Notes

- `output: "source"` / `"migrate"` re-print `.marko` source (tooling/codemods) — no translator codegen.
- Bumping any `@babel/*` version requires regenerating the corresponding patch in root `patches/` (pnpm patchedDependencies); the custom AST types and generated `dist/types.d.ts` (`pnpm --filter @marko/compiler run build-babel-types`) depend on them.
- Adding a core tag in a translator shows up in taglib-lookup expectations here and in `packages/runtime-class/test/taglib-lookup/`.
- `util/agent-fix-guide.js` — when a terminal coding agent is detected (env markers) and the loaded translator declares a `cheatsheet`, thrown compile errors get a one-line pointer to it (relative to `cwd`) appended at the `compile[Sync]` boundary. No-op for humans, for runtimes without a cheat sheet, and for inline translator objects (so error snapshots, which compile with an inline translator object, are unaffected).
