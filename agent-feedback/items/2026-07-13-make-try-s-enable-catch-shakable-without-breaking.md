---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/core/try.ts › translate.dom.exit
---

# Make `<try>`'s `_enable_catch()` shakable without breaking resumed boundaries

Every program containing a `<try>` gets a bare top-level `_enable_catch()` (guarded by `hasEnabledCatch`), a non-pure statement that survives even when the `/*@__PURE__*/ _try` signal beside it shakes away. Gating it needs a retained capability covering descendant effects, ready work, renderers and recreation — not just `_try`. The naive form, calling `_enable_catch()` from the `_try` constructor in `dom/control-flow.ts`, is unsound: a boundary rebuilt from the resume payload never runs that constructor, so a resumed lazy/async effect that throws finds `_enable_catch`'s `runEffects`/`runRender` wrappers (`dom/queue.ts`) uninstalled — the reason already recorded above `pureDOMFunctions` in `translator/util/runtime.ts`. "Couple dynamic-tag resume registration to the retained signal" above is that same emitted shape on the blessed side of that comment, a separate fix but with the same resume-only hazard to clear.

Check: a program whose `_try` signal is unreferenced drops `_enable_catch` from its dom bundle while `try-effects-async` still catches.
