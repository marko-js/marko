---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/import-declaration.ts › analyze
---

# Drop an unlinked `load` import attribute outside analyze

Without `linkAssets`, `import-declaration` › `analyze` falls back to an eager import by calling `loadAttrPath.remove()`. That reshapes the AST in the phase whose result is cached and cloned for each output, which package AGENTS.md › Translator rules out (reshaping belongs in pre-analyze). `util/tag-import.ts` › `getImportFacts` makes the same "no `linkAssets` means eager" decision a second time by leaving `extra.loadImport` unset. Decide it in one place, `getImportFacts`, and drop the attribute where the import is written: translate's plain tag-import path (`node.source.value = tagImport`) can clear the `load` attribute, as the HTML load path already clears `node.attributes`. Otherwise, move the removal into pre-analyze.

Check: `grep -n "linkAssets" packages/runtime-tags/src/translator/visitors/import-declaration.ts packages/runtime-tags/src/translator/util/tag-import.ts` shows the analyze-time `loadAttrPath.remove()` and the second check in `getImportFacts`.
