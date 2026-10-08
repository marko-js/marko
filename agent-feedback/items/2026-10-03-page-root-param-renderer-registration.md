---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/sections.ts › getRendererReason
---

# Skip registering content a document template's root params alone condition

A content section whose renderer reason is conditional only on the root template's params registers impurely (`_content` without `@__PURE__` in `visitors/program/dom.ts`), so an interactive page ships the renderer. When the template renders the document (`<html>`, `extra.page`), its root params always come from the request: no client caller can satisfy the condition, and the renderer is dead code there. Mapping a document template's own root-param reasons to "never" for registration would let tree-shaking drop it.

Check: compile `<html><body><let/n=0/><card show=input.show><em>${input.note}</em></card><button onClick() { n++ }>${n}</button></body></html>` with `tags/card/index.marko` = `<section><if=input.show><${input.content}/></if></section>` via `pnpm run compile -- -o dom template.marko`: `$card_content = _content(...)` is not pure.
