---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › buildResumeRegisterKey
---

# Keep resume register ids unique across same-named bindings from different owner sections

`buildResumeRegisterKey` keys a register id by the key's section id plus `appendBindingKey`'s `_<name>#<binding.id>` per referenced binding, but `binding.id` is numbered per owner section. When one section reads a closure from an ancestor and a same-named binding owned elsewhere that happens to have the same id, both get one register id, so the later `_script` or `_closure_get` registration overwrites the earlier one in `_resumed`: on resume one effect runs twice and the other never runs, or one closure subscriber never subscribes. The site comment ("same-named bindings ... cannot collide") does not hold across owner sections. Direction: make `appendBindingKey` include the owner section id for a binding the key's section does not own (closure accessor ids from `references.ts › getClosureAccessorLiteral` are unique down the parent chain too, but cover only closures).

Check: fixture with `tags/wrap.marko` = `<div><${input.content}/></div>` and `template.marko` = `<let/x=1/>` `<const/z=x/>` `<button.x onClick() { x++ }>${x}</button>` `<wrap><let/x=10/><button.y onClick() { x++ }/><script>console.log("outer", z)</script><script>console.log("inner", x)</script><em>${x}</em><wrap><s>${x}</s></wrap></wrap>`, `equivalent: false`, steps `[{}]`: `dom.bundle.js` registers `_script("a2", …)` for both effects and `render-ssr.md` logs `"inner" 10` twice, never `"outer" 1`. Replacing the effects with `<try><@placeholder>loading</@placeholder><await|v|=resolveAfter(1, 1)><i>${z}</i><b>${x}</b></await></try>` (and dropping `<em>`) gives both `_closure_get` calls the `/subscribe` id `a0`, and after `after(1)` and clicking `button.x`, `render-ssr.md` keeps `<i>1</i>`.
