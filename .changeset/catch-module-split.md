---
"@marko/runtime-tags": patch
---

The `<try>` catch/pending machinery (`_enable_catch`, `renderCatch`)
moved from `dom/control-flow` into its own `dom/catch` module, and
`setConditionalRenderer` into `dom/scope` where its dependencies live.
A bundle whose eager graph only enables catch semantics no longer
pulls branch construction, loop, and spread machinery along with it.
