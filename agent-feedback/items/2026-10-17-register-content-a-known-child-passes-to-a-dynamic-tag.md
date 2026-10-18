---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/sections.ts › getRendererReason
---

# Register content a known child passes on to a dynamic tag

Content a known child hands to a dynamic tag's input (`fwd.marko`: `<${input.as} content=input.content/>`) gets no renderer reason, so its html is `_content` (unregistered; `_content_elide` in a patch build) and an optimized page cannot render it again once the renderer's own client state changes. The dynamic tag's renderer is invisible to the analysis, so passing content into its input is a read that may render the content anywhere, as a dynamic tag body's registration already assumes. This is main's resume analysis (main's html emits the same unregistered `_content`), so it lands on main first. Once it does, a patch build also needs `consumerMayWithhold` (`translator/util/patch/refresh.ts`) to let the runtime decide (`_content_withheld`) for such content, as it does for a dynamic tag's body: a known consumer's read through a `TagNameType.DynamicTag` tag that is not `nameOnly` hands the content on.

Check: `<fwd as=Card><em>${input.note}</em></fwd>` with `tags/fwd.marko` `<${input.as} content=input.content/>` and `tags/card.marko` `<let/open=true><button#toggle onClick() { open = !open }>toggle</button><if=open><${input.content}/></if>`, steps `[{ note: "a" }, toggle, toggle]` without patches: the optimize render leaves `<main><button id="toggle">toggle</button></main>` where debug shows `<em>a</em>`.
