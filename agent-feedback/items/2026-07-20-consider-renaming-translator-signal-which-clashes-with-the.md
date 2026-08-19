---
type: unclear
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › getSignal
---

# Consider renaming translator "signal", which clashes with the ecosystem meaning

A `Signal` here is a compiled setup/update program keyed by setup, a binding, or an intersection — not a reactive value container, which is what contributors arriving from other frameworks assume. A rename ("update unit", "effect program") churns runtime helper names, every `callRuntime` site and every snapshot, so it can only ride a major refactor. Until then the `packages/runtime-tags/CONTEXT.md` Signal entry ("_Avoid_: observable, reactive value") is the mitigation.

Check: read that entry.
