---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/translate-attrs.ts › buildContent
---

# Drop an unread dynamic tag body from the server output

When a dynamic tag's name can only be imported templates and none of them reads `input.content`, the DOM output elides the body renderer (`isSectionRendererElided`), but the HTML branch of `buildContent` still builds `_content(...)` and passes it to `_dynamic_tag` on every render. Direction: have the HTML branch of `buildContent` skip a body whose renderer `isSectionRendererElided` reports as elided, as the DOM branch and known tags do.

Check: with `tags/a.marko` = `<div>A ${input.x}</div>`, `pnpm run compile -- -o html -d` on `import A from "./tags/a.marko";` + `<let/x=1/>` + `<A x=x>Hello</A>` + `<${x ? A : A} x=x>Hello</>` + `<button onClick() { x++ }/>` passes no body to `A(...)` but passes `_content("…_2*content", ...)` to `_dynamic_tag`.
