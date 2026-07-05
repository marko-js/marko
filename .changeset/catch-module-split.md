---
"@marko/runtime-tags": patch
---

The `<try>` catch/pending machinery (`_enable_catch`, `renderCatch`)
moved from `dom/control-flow` into its own `dom/catch` module, and
`setConditionalRenderer` into `dom/scope` where its dependencies live.
A page whose hydration only enables catch semantics (any `<await>`/
`<try>` page under persisted slim hydration) no longer pulls branch
construction, loop, and spread machinery eagerly.
