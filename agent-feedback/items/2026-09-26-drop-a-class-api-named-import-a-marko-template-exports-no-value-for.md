---
type: dx
impact: low
effort: low
site: packages/runtime-class/src/translator/index.js › analyze.ImportDeclaration
---

# Drop a Class API named import a `.marko` template exports no value for

`stripTypes` keeps unmarked type imports (`onlyRemoveTypeImports: true`), so a Class API template that writes `import { Input as PriceInput } from "<price-field>"` for a type keeps the specifier in its output, and the build fails at the bundler with a missing export. Direction: in the class translator's `ImportDeclaration`, warn toward `import type` on an unreferenced specifier the child program exports no value for, reusing the runtime-tags export resolution (`packages/runtime-tags/src/translator/visitors/function.ts` › `resolveExport`), and drop the specifier in translate.

Check: with `components/price-field.marko` = `export interface Input { price: number }` and `<div>${input.price}</div>`, run `pnpm run compile -- -t class -o html -d x.marko` on a sibling `x.marko` of `import { Input as PriceInput } from "<price-field>";`, `export interface Input extends PriceInput {}`, `class { onCreate() {} }` and `<price-field ...input/>`. The output keeps `import { Input as PriceInput } from "./components/price-field.marko";` with no diagnostic.
