---
type: bug
impact: low
effort: med
site: packages/compiler/src/babel-plugin/index.js › parse
---

# Return valid code for parse errors under error recovery

With `errorRecovery: true`, some templates with parse errors compile to code that is not valid JavaScript (e.g. the inputs of the `error-attr-value-jsx-braces`, `error-attr-value-missing-whitespace` and `error-attr-method-invalid-params` fixtures), while analyze errors now return an empty module. Whatever consumes recovered output gets broken code alongside the diagnostics. Return an empty module, as for analyze errors, whenever recovery recorded an error.

Check: compile `packages/runtime-tags/src/__tests__/fixtures/error-attr-value-jsx-braces/template.marko` with `compileFileSync(file, { output: "dom", errorRecovery: true, translator: "@marko/runtime-tags/translator" })` and parse `code` with `@babel/parser`; it fails to parse.
