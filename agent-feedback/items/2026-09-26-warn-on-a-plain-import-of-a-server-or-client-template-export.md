---
type: dx
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/function.ts › resolveExport
---

# Warn on a plain import of a `server` or `client` template export

A template's `server export const a` exists only in its html output and `client export const b` only in its dom output, but `resolveExport` counts both as present for either output because analysis is shared. So `import { a, b } from "<srv>"` in another template keeps both specifiers in both outputs: the dom module imports `a` and the html module imports `b`, which the child's matching output does not export, and the build fails at the bundler with a missing export. Direction: have `resolveExport` report the `target` of the `MarkoScriptlet` an export sits in, and in `analyzeImportSpecifiers` (`visitors/import-declaration.ts`) warn toward `server import`/`client import` on a plain import of such a name, dropping the specifier in translate from the output that lacks it.

Check: with `tags/srv.marko` = `server export const a = 1;`, `client export const b = 2;` and `<div/>`, run `pnpm run compile -- -o dom -d x.marko` (and `-o html`) on a sibling `x.marko` of `import { a, b } from "<srv>";` and `<srv/>`. Both outputs keep `import { a, b } from "./tags/srv.marko";`, while `tags/srv.marko` exports only `b` under `-o dom` and only `a` under `-o html`.
