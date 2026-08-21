---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/import-declaration.ts › analyze
---

`import-declaration.ts` reads `importDecl.hub.file` in three places (analyze
and the html translate exit), while the runtime-tags AGENTS.md states the
translator has "zero `hub.file` uses" and mandates `getFile()` from
`@marko/compiler/babel-utils`. Replace the three reads with `getFile()`
(already imported in the module).

Check: `grep -n "hub" packages/runtime-tags/src/translator/visitors/import-declaration.ts`.
