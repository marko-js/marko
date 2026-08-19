---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/known-tag.ts › analyzeAttrs
---

# Propagate invoke-only inputs into same-program `<define>` tags

`analyzeAttrs` sets `attrExtra.invokeOnly` only when `getRootSection(templateExportAttr.binding.section) !== getProgram().node.extra.section`, so a local `<define>` never gets the treatment an equivalent cross-file tag does — same-program prop trees are mid-analysis with incomplete reads. `<define/Btn|input|><button onClick=input.onClick>x</button></define>` with `<let/count=0/><Btn onClick=() => count++ />${count}` therefore folds `$Btn_content__input_onClick(...)` into the `$count` signal body, re-pushing the handler and re-running its `_on` script on every state update; the identical `tags/btn.marko` version hoists it into `$setup` alone. A conservative post-analysis fixed point would let local handlers read persisted slots lazily, dropping the intersection, input update, closure propagation and owner state.

Check: compile both shapes with `node -r ~ts scripts/inspect-compiled-output.mts -o dom -d` and diff the `$count` bodies.
