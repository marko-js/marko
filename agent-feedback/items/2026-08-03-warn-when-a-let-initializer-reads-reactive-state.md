---
type: dx
impact: high
effort: med
site: packages/runtime-tags/src/translator/core/let.ts › analyze
---

# Warn when a `<let>` initializer reads reactive state and nothing ever assigns it

A `<let>` value is an initial value, not a formula, so using one for a derived value is silent and partially passing. `<let/a=false><let/b=false><let/openCount=(a ? 1 : 0) + (b ? 1 : 0)>` with a `${openCount}` readout renders `0` correctly on the server and then freezes: an uncontrolled `<let>` calls `setBindingDownstream(binding, false)`, so SSR emits no resume marker for the text node it feeds and the DOM signal's write lands in an undefined scope slot — no exception, `[]` diagnostics in both outputs, and any assertion matching the first render still passes. All four inputs are already in `analyze`: the tag is `<let>`, `valueChangeAttr` is absent, `tag.node.extra.referencedBindings` is non-empty, and `binding.assignmentSections` is empty — that last condition is what preserves the legitimate "seed an editable copy from a prop" pattern. Warn naming `<const>` as the fix rather than erroring, until someone rules whether an unassigned reactive-initialized `<let>` should be illegal or simply reactive.

Check: compile that template with `errorRecovery: true` for empty diagnostics, then mount it in jsdom and click both buttons — the readout stays `0`.
