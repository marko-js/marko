---
type: unclear
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/runtime.ts › pureDOMFunctions
---

# Correct the registration examples above `pureDOMFunctions`

The comment above `pureDOMFunctions` names `_template` and `_dynamic_tag` as the pure helpers whose calls register through `_resume`, but `_dynamic_tag` (`dom/control-flow.ts`) never writes `_resumed`; the listed helpers that do are `_template` (`dom/template.ts`) and `_closure_get` (its `resumeId` branch in `dom/signals.ts`). This comment is where the translator draws the line on which registering calls may be tree-shaken, so a wrong example misleads anyone deciding whether another helper can be marked pure. Direction: list the helpers that actually assign `_resumed[...]`.

Check: `grep -n "_resumed\[" packages/runtime-tags/src/dom/control-flow.ts` finds nothing, while `grep -n "_resumed\[" packages/runtime-tags/src/dom/template.ts packages/runtime-tags/src/dom/signals.ts` shows the write at the end of `_template` and the one inside `_closure_get`.
