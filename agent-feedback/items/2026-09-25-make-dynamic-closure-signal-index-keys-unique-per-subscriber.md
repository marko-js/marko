---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › getPrefixedScopeAccessor
---

# Make dynamic closure signal-index keys unique within a subscriber scope

In optimized builds a dynamic Closure stores which of its subscriber Signals applies to a scope at `scope[ClosureSignalIndex + closureId]` (the `ClosureSignalIndex` case of `getPrefixedScopeAccessor`, and `dom/signals.ts › _closure_get`), but closure accessor ids are numbered per owner Section ("Closure accessor ids trail the id space" in `finalizeReferences`). A subscriber section that reads dynamic Closures from two different owners can get the same id for both, so one `_closure_get` overwrites the other's index and `_closure` later runs another subscriber section's Signal against this scope, writing the value into the wrong node. Debug builds key the index by binding name, so the two builds render differently, and the site comment ("keys off the closure id") implies a uniqueness that does not hold. Direction: key the index by something unique among the dynamic Closures one subscriber section reads (for example an accessor reserved in the subscriber section per Closure it reads), in both the translator and `_closure_get`.

Check: fixture with `tags/wrap.marko` = `<div><${input.content}/></div>` and `template.marko` = `<let/x=1/>` `<button.x onClick() { x++ }>${x}</button>` `<p>${x}</p>` `<wrap><let/y=1/><button.y onClick() { y++ }/><em>${x}</em><wrap><i>${x}</i><b>${y}</b></wrap><wrap><s>${y}</s></wrap></wrap>`, `equivalent: false`, steps `[{}, (d) => d.querySelector("button.y")!.click()]`: `dom.bundle.js` passes `5` as the accessor to both `$wrap_content2__x` and `$wrap_content2__y`, `render-ssr.md` (optimized) shows `<i>2</i><b>1</b>` while `render-ssr.debug.md` shows `<i>1</i><b>2</b>`, and the run fails its debug/optimize parity check.
