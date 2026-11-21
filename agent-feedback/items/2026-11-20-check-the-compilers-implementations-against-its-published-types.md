---
type: bug
impact: med
effort: med
site: packages/compiler/types.test.d.ts › TaglibImplementationTests
---

# Check the compiler's implementations against its published types

`types.test.d.ts` checks only `src/taglib` against `index.d.ts` › `taglib`, so the hand-written `babel-utils.d.ts`, `index.d.ts`, `config.d.ts` and `register.d.ts` drift from `src` unchecked. Known drift: `getTagDef` returns `null` for no definition (declared `undefined`); `getLoc` and `getLocRange` return `undefined` for a non-numeric position, `importDefault` and `importStar` without a name hint, `getArgOrSequence` with no arguments, and `normalizeTemplateString` with nothing to join (each declared non-optional); `register()` takes no argument (declared required); and the published `BabelFile.markoOpts` is `Required<Config>`, though `entry`, `linkAssets`, `applyFixes`, `optimizeKnownTemplates` and `getTemplateId` are unset by default. Correct the declarations, then add `[typeof impl] extends [typeof published]` checks for each entry, as for the taglib.

Check: add `Expect<[typeof import("./src/babel-utils")] extends [typeof import("./babel-utils")] ? true : false>` to `types.test.d.ts` and run `pnpm run build`.
