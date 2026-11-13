---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/known-tag.ts › analyzeAttrs (knownSpread)
---

# Link no callee prop to a key the rest it spreads leaves out

A known tag spreading a rest (`<pane ...rest/>` after `<const/{ content, ...rest }=input/>`) links every prop its child reads to a property alias of the rest (`ensurePropertyAlias(knownSpread, prop)`), even `content`, which the rest leaves out and so is always undefined there. The readers fold and the content-site walk in `solve-reasons.ts` then follow `input.content` through that alias into the child: its `<${input.content}/>` counts as a deep site, and the server writes a `<!>` the content never needs. Direction: skip a prop the spread binding's `excludeProperties` holds, so the child's param derives nothing from the call for it.

Check: `content-left-out-of-rest-passed-on` with `tags/child.marko` `<const/{ content, ...rest }=input/><p><${content}/></p><pane ...rest/>` and `tags/pane.marko` `<div>x<${input.content}/></div>`: `writes.html` has `<p><!>0`, where `<p>0` is enough.
