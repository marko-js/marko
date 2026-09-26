---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/core/let.ts › analyze
---

# Add `<let valueChange>`'s serialize reason before the reason fixed point

`analyze` adds the FORCED `TagVariableChange` prop reason from an `onFinalizeReferences` callback, which runs after `finalizeReferences` has already merged prop reasons into each section reason (`finalizeSerializeReason`) and left the fixed point. `writeHTMLResumeStatements` gates the section's whole `_scope(...)` write on that section reason, so when it is otherwise param-only and the parent passes a constant, the change handler is never serialized: after resume, an assignment updates the `<let>` locally and never calls `valueChange`, while CSR calls it. Direction: add the reason from a hook that runs once assignments settle but before the reason loop, keep `onFinalizeReferences` callbacks read-only, and say so in a comment at `onFinalizeReferences`.

Check: a fixture with `tags/ctl.marko` = `<let/count=0 valueChange=input.countChange/><if=input.show><button onClick() { count = 5 }>${count}</button></if>`, template `<let/total=0/><ctl show=true countChange(v) { total = v * 10 }/><span>${total}</span>`, `equivalent: false` and steps `[{}, click]`: `render-ssr.md` ends with the button at 5 and the span at 0, `render-csr.debug.md` with the button at 0 and the span at 50. `html.bundle.debug.js` writes `"TagVariableChange:count"` inside `$si__input_show && _scope(...)`.
