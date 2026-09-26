---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › rendererKey
---

# Key loop-created attribute-tag content per loop instance

Content an attribute-tag `<for>` creates has one `_content` id per Section and the same Owner in every iteration, so `rendererKey` (and `html/writer.ts` › `rendererKey`) gives every instance the same key. A dynamic tag switching between two instances (`<${tabs[i].content}/>` over `<for><@tab>`, the cheatsheet's tabs pattern) keeps the Branch and pushes the other iteration's Local closure values into it through `RendererProp.LocalClosures`. CSR therefore carries one tab's `<let>` state into the next. After resume the switch throws, because HTML wrote no marker for a Local closure whose loop sources are not client-changeable. Direction: include the loop instance (its key or index) in the renderer key on both sides so switching instances recreates the Branch, and add fixture `at-tags-for-loop-content-switch`.

Check: fixture `tags/tabs.marko` `<let/i=0/><const/tabs=[...input.tab ?? []]/><for|tab, j| of=tabs><button data-tab=j onClick() { i = j }>${tab.title}</button></for><div><${tabs[i].content}/></div>`, `template.marko` `<tabs><for|t| of=["a", "b"]><@tab title=t><let/count=0/><button class="inc" onClick() { count++ }>${t}: ${count}</button></@tab></for></tabs>`, `equivalent: false`, steps `[{}, click .inc, click [data-tab="1"]]`: `render-csr.debug.md` ends with `b: 1`, and the ssr modes throw `Cannot read properties of undefined (reading 'data')` on the tab click.
