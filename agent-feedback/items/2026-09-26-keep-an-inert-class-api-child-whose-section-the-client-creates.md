---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › translate.exit
---

# Keep an inert class API child whose section the client creates

Optimized DOM output removes a class API tag that has a template, no serialize reason on its node, and no class hydration ("SSR already produced their DOM"). That premise fails when the client creates the tag's section, for example an `<if>` branch toggled by state: the branch renders without the class child, while debug output renders it. Gate the drop on nothing creating the section on the client (the analysis `getSectionUpstreamReason` in `util/references.ts` computes this), and decide it in analyze so setup analysis can see it too (see the item on class API tags counting setup work).

Check: an interop fixture with `components/message.marko` = `<div>${input.value}</div>`, template `<let/show=false/><button id="tags" onClick() { show = !show }>toggle</button><if=show><message value="Hello"/></if>` and steps `[{}, click #tags]`. `render.debug.md` inserts the `<div>`, `render.md` shows none, and the parity check fails.
