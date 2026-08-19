---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › enableDynamicTagResume
---

# Couple dynamic-tag resume registration to the retained signal

`enableDynamicTagResume()` pushes a bare top-level `_resume_dynamic_tag()` whenever a dynamic tag carries a spread or event/change handler, so it is an unconditional module side effect pinning `_resume`, `dynamicTagScript`, `_attrs_script` and `_on` and keeping the module in the graph, while the `_dynamic_tag(...)` signal beside it is `/*@__PURE__*/`; `<${input.as} onClick=input.onClick/>` compiles to a module whose only non-pure statement is this call. Do not charge `dynamic-tag-spread`'s retained bytes to it: that fixture's optimized `dom.bundle.js` also keeps `_enable_controllable()` (from the neighbouring `enableDynamicTagControllables`, which pulls all of `dom/controllable.ts`) and a non-pure `_content_resume(...)`, so removing this statement alone frees almost nothing there. Any fix must survive the resume-only case: for a page whose client work is entirely resume-driven every pure chain shakes away (that same snapshot retains no `_template` and no `$setup`), yet the server still writes the `d <scopeId>` effect from `html/dynamic-tag.ts` and `dom/resume.ts` invokes whatever `registeredValues[id]` holds — so a `/*@__PURE__*/ _dynamic_tag_resume(...)` hung off the signal is the unsound naive form. Same emitted shape as "Make `<try>`'s `_enable_catch()` shakable without breaking resumed boundaries" below, but a separate fix: the `pureDOMFunctions` comment in `translator/util/runtime.ts` is the one place that line gets drawn, and it already blesses registration-only calls like this one. Establish first whether any retained resume root can carry the registration; if none can, close this out.

Check: TODO
