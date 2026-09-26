---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › hoistStaticPlaceholderText
---

# Keep a `<style>` placeholder's literal text inside the placeholder

`hoistStaticPlaceholderText` also runs on placeholders in a `<style>` body, moving escape-invariant leading/trailing template-literal text into the neighbouring MarkoText, which breaks the CSS custom-property substitution in two ways. ``.a { width: ${`${input.w}px`} }`` fails with the "unit written directly after it (eg `${x}px`)" error from `util/style-interpolation.ts`, although that error tells the author to move the unit into the interpolated value, which is exactly this spelling. And `core/style.ts › getStyleImportPath` with `sourceMaps` re-emits text children from `file.code` and updates only placeholders, so text moved into a MarkoText's `value` is dropped: ``.a { border: ${`1px solid ${input.c}`} }`` produces `border: 1px solid var(--…)` without source maps but `border: var(--…)` with them (`@marko/vite` compiles templates with `sourceMaps: true`), losing the width and style. Skip the move for placeholders inside `<style>`, and have `getStyleImportPath` `magicString.update` each text node from its `value` so the two builds cannot diverge; add fixtures for both.

Check: `pnpm run compile -- -o html -d` on `<style>` + newline + ``.a { width: ${`${input.w}px`} }`` + newline + `</style>` fails with the unit error. Compiling `<style>` + newline + ``.a { border: ${`1px solid ${input.c}`} }`` + newline + `</style>` through a `node -r ~ts` script calling `compileFileSync` with `output: "html"`, `translator: "@marko/runtime-tags/translator"`, a `resolveVirtualDependency(from, dep)` that logs `dep.code`, and `sourceMaps: false` vs `true` (separate processes) logs `.a { border: 1px solid var(--…) }` vs `.a { border: var(--…) }`.
