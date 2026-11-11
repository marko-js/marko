---
type: cleanup
impact: low
effort: low
site: packages/runtime-class/translator/index.d.ts
---

# Align `marko/translator`'s declarations with what it exports

`translator/index.d.ts` declares `internalEntryBuilder`, which `src/translator.js` (the interop translator `marko/translator` loads) does not export, and leaves out the `version`, `preferAPI` and `tagDiscoveryDirs` it does export. A TypeScript consumer reading those fields from `marko/translator` gets a type error for real exports and no error for a missing one. Declare exactly the exports of `src/translator.js`.

Check: compare `export const` names in `packages/runtime-class/translator/index.d.ts` with the names destructured from `createInteropTranslator(classAPI)` in `packages/runtime-class/src/translator.js`.
