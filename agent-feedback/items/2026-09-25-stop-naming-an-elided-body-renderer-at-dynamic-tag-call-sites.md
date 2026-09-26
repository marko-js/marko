---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › translate.exit
---

# Stop naming an elided body renderer at dynamic tag call sites

The DOM `translate.exit` passes `t.identifier(bodySection.name)` to `_dynamic_tag` whenever the tag has a body, but `visitors/program/dom.ts` skips declaring a body renderer that `isSectionRendererElided` reports as unread (`util/translate-attrs.ts` checks the same predicate before naming one). When no candidate template reads `input.content`, the DOM module references an undeclared identifier and throws a ReferenceError at load, so nothing on the page runs client-side. Direction: route every body renderer reference through one helper that returns `undefined` when `isSectionRendererElided(bodySection)`, and use it here and in `translate-attrs.ts`.

Check: write `a.marko` = `<div>A ${input.x}</div>`, `b.marko` = `<span>B ${input.x}</span>` and a template with the lines `import A from "./a.marko";`, `import B from "./b.marko";`, `<let/useB=false/>`, `<${useB ? B : A} x=1>Hello</>`, `<button onClick() { useB = !useB }/>`; `pnpm run compile -- -o dom -d` on it emits `_dynamic_tag("#text/0", $useBBA_content)` and never declares `$useBBA_content`.
