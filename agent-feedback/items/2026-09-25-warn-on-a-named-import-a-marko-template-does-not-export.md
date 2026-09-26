---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/import-declaration.ts › analyze
---

# Warn when a named import from a `.marko` template names no value export

`stripTypes` runs with `onlyRemoveTypeImports: true`, because a tag-name use leaves an import looking unused before analyze. So `import { Input as PriceInput } from "<price-field>"` keeps its specifier in both outputs, although a template's compiled module exports no `Input`. Nothing reports the mistake: the editor and `mtc` treat the name as a type, the compile is clean, and the first error comes from the bundler's missing-export check. `packages/runtime-class/docs/typescript.md` teaches this same form. Direction: in analyze, check each non-type specifier whose source resolves to a `.marko` file against the value exports of the child program, which `trackImportedRegisteredFns` already loads through `loadFileForImport` (follow `export … from`). On a miss, warn and point to `import type`; also dropping the specifier in translate would keep the build green.

Check: with `tags/price-field.marko` = `export interface Input { price: number }` and `<div>${input.price}</div>`, run `pnpm run compile -- -o dom -d x.marko` (and `-o html`) on a sibling `x.marko` of `import { Input as PriceInput } from "<price-field>";`, `export interface Input extends PriceInput {}` and `<price-field ...input/>`. Both outputs keep `import { Input as PriceInput } from "./tags/price-field.marko";` with no diagnostic. The child's html output exports only `default`.
