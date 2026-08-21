---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › patchDynamicTag
---

# Make the dynamic tag compat patch independent of module evaluation order

`patchDynamicTag` reassigns the exported `let _dynamic_tag`, but generated Tags templates call `_dynamic_tag(...)` at module scope, so a template whose module evaluates before `marko/src/runtime/helpers/tags-compat/dom-*.mjs` captures the unpatched helper and silently never renders a Class API renderer or `renderBody` handed to it. Bundlers decide that order, so correctness depends on chunking; the page entry builder only works around it by linking the compat runtime first when a Class template bridges into Tags. Either have the returned signal read the patch at call time, or have the patch rewrap already-created signals.

Check: drop the `getCompatRuntimeFile()` import that `packages/runtime-tags/src/translator/interop/index.ts` › `patchTranslateProgram` prepends to a mixed page entry, then run `pnpm test -- --grep "translator-interop custom-tag-parameters-from-args"` — the `<div>Counts: …</div>` body the Class parent passes to the Tags child disappears from `render.debug.md`.
