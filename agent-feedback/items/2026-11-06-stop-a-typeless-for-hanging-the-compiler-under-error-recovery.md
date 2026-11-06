---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/assert.ts › assertForType
---

# Stop a `<for>` with no `of`/`in`/`to`/`until` hanging the compiler under error recovery

Without `errorRecovery`, `<for|x|><div/></for>` fails with `assertForType`'s compile error. With `errorRecovery: true` and a `dom` or `html` output, the same template never finishes compiling: the analyze diagnostic is recorded and the loop is in translate, which runs anyway. The language server compiles only to `migrate`, so it is unaffected; any tool compiling a template to `dom`/`html` with the public `errorRecovery` option hangs instead of getting the diagnostic. Translate should not run once analyze reported errors (see the item on core tag crashes under error recovery), which also ends this hang.

Check: in the repo, a `check.tmp.mjs` calling `compileFileSync(file, { output: "dom", errorRecovery: true, translator: "@marko/runtime-tags/translator" })` on a file containing `<for|x|><div/></for>`, run with `timeout 20 node -r ~ts check.tmp.mjs`, is killed by the timeout; with `errorRecovery: false` it throws the compile error at once.
