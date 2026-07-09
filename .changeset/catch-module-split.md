---
"@marko/runtime-tags": patch
---

The `<try>` catch/pending machinery (`_enable_catch`, `renderCatch`)
moved from `dom/control-flow` into its own `dom/catch` module, and
`setConditionalRenderer` into `dom/scope` where its dependencies live.
A page whose hydration only enables catch semantics (any `<await>`/
`<try>` page under persisted slim hydration) still pulls branch
construction — `renderCatch` must be able to swap in a newly rendered
catch block — but no longer drags `dom/control-flow`'s loop,
dynamic-tag, and spread imports along with it.
