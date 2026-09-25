---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/export-declaration.ts › analyze
---

# Reject exporting a tag variable at compile time

A tag variable is a render-time value of its scope, so a module-scope `export { count }` for `<let/count=0>` can never resolve. The translator passes the statement through untouched: the template compiles, then fails when the module loads with "Export 'count' is not defined in module", far from the template. `analyze` should report a code frame error when a local export specifier resolves to a tag variable binding.

Check: a template with `<let/count=0>` and `export { count };`, compiled with `pnpm run compile -- -o html -d template.marko`, emits `export { count };` at module scope, and importing the output throws the error above.
