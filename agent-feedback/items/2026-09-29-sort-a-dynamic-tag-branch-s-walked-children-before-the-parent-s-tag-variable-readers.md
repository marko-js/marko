---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/dom/control-flow.ts › _dynamic_tag
---

# Sort a dynamic tag branch's walked children before the parent's tag variable readers

An intersection that reads a tag variable is keyed by the scope offset the walker reserves after the child (`signals.ts › _or`'s `scopeIdAccessor`), so that the child's renders sort first in `queue.ts › queueRender`. A dynamic tag creates its branch only when `_dynamic_tag` renders, so every scope the branch's clone walks gets a fresh id past the parent's offset: the branch, a static child with a tag variable, and that child's own offset. When the nested child's variable feeds the branch's `<return>`, the nested child renders after the parent's intersection in the same update, and the branch's later `_return` re-queues a keyed render that already ran. The update is dropped, so client renders show a stale value, while resume is correct because server ids follow tree order. Direction: take the render keys of the branch's whole walked subtree from the tag's position rather than creation order, so they all sort before the parent's offset; re-reserving the parent's offset after the branch is not enough, since `<for>` rows created earlier that read the intersection would then drop it the same way.

Check: fixture with `tags/counter.marko` = `<let/n=0/>` `<return={ n, inc() { n++ } }/>`, `tags/wrap.marko` = `<counter/c/>` `<return={ n: c.n, inc: c.inc }/>`, `template.marko` = `import Wrap from "./tags/wrap.marko";` `<let/a=0/>` `<let/Tag=Wrap/>` `<${Tag}/v/>` `<button onClick() { a++; v.inc() }>${a + ":" + v.n}</button>`, and `test.ts` with `equivalent: false`, steps `[{}, (document) => document.querySelector("button")!.click()]`. After the click, `render-ssr.debug.md` and `render-ssr.md` show the expected `1:1`, but `render-csr.debug.md` shows `1:0` (`UPDATE: button::text "0:0" => "1:0"`).
