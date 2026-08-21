---
type: bug
impact: med
effort: low
site: packages/compiler/index.d.ts › CompileResult
---

# Admit `null` in `CompileResult`, and declare the taglib objects that actually come back

`CompileResult` declares `ast`, `code` and `map` as non-nullable, and all three are `null` under the defaults the docs describe: `ast` and `map` are null unless `ast: true`/`sourceMaps` is set (both default false) and `code` is null under the documented `code: false`. So `res.code.length` and `res.map.toString()` pass `tsc --strict` and throw, with no overload to narrow on the flag that caused it. `babel-utils.d.ts` leans the same way: `TagDefinition.html`, `deprecated` and `openTagOnly` are required but absent from a real definition (`buildLookup(".").getTag("if").html` is `undefined`, so the natural `def.html === false` custom-tag test never fires), `getAttribute("div", "onclick")` is missing the required `filePath`, `defaultValue`, `deprecated` and `autocomplete` while carrying an undeclared `setFlag`, and `parseTypeArgs`/`parseTypeParams` are exported from `babel-utils.js` with no declarations at all. Every one of these lies in the direction that makes a consumer crash; a `tsd`-style type test over one compile and one lookup would pin them.

Check: `compileFileSync(f, { output: "html" })` returns `{ ast: null, map: null }` and `{ code: false }` returns `code: null` against non-nullable declarations, and `taglib.buildLookup(".", "@marko/runtime-tags/translator").getTag("if")` has no `html`, `deprecated` or `openTagOnly` key; expect the declarations to admit those shapes.
