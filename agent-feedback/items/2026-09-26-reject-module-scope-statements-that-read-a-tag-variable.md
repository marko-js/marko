---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › trackReferencesForBinding
---

# Reject module-scope statements that read a tag variable or `input`

A tag variable and `input` are render-time values, yet a module-scope statement that reads one compiles untouched and fails only at run time: `static const x = count;` (and `server`/`client` statements or `export const x = count;`) emits `const x = count;` above the render function, which throws `ReferenceError: count is not defined` on import, and `export function f() { return count }` throws the same when called. `export { input }` passes through the same way. Only an export specifier naming a tag variable is rejected today (`visitors/export-declaration.ts`). Direction: report a code frame error with the tag-variables docs link when a reference to a render-time binding sits in a static scriptlet or an export declaration, and add an `error_compiler` fixture.

Check: `pnpm run compile -- -o html -d /abs/x.marko` on `<let/count=0>\nstatic const x = count;\n<div>${x}</div>` emits `const x = count;` at module scope; the same holds for `export const x = count;`, and `export { input };` emits `export { input };`.
