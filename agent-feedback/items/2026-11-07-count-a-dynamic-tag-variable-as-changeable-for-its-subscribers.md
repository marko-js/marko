---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/signals.ts › isChangeableDynamicClosure
---

# Count a dynamic tag's variable as changeable for its subscribers

`isChangeableDynamicClosure` counts a dynamic closure as changeable only if one of its state sources has a resumable assignment. A dynamic tag's variable (`<${input.show ? Counter : null}/count/>`) has no assignment and no `derivedFrom`, so it is its own state source, yet its child's `<return>` changes it on the client. Its subscribers get no subscribe id, so one that resumes after its owner joins the owner's set by a queued call and misses a change made before it arrived. Read by a nested lazy tag's content in `<for>` rows, the inner ready channel's first flush also writes a later row's set before the outer channel writes that row's scope: the debug render throws "Unable to serialize a value shared between independently lazy loaded content" and optimize drops that row's update. Count a state source with no `derivedFrom` as written on the client there; the html (`_subscribe`) and the dom (`_closure_get`) share the predicate, so both change together.

Check: `tags/counter.marko` holding `<let/n=0/>`, `<script>n = 5</script>` and `<return=n/>`, rendered by `template.marko` as `<${input.show ? Counter : null}/count/>` followed by `<try><await|v|=resolveAfter(0, 1)><p>${count}</p></await><@placeholder>loading</@placeholder></try>`, with `equivalent: false` and steps `[{ show: true }, () => new Promise((r) => setTimeout(r, 50)), flush]`: `render-ssr.md` ends at `<p>0</p>`, where `render-csr.debug.md` shows `<p>5</p>`.
