---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/references.ts › getRegisterReasonForExtra
---

# Decide an attribute function's registration by its path

Content sections ask their child binding at the attribute path (`section.downstream.properties`), but a function in an attribute asks the whole value (`readSerialization(extra, undefined)` lands at `true`), so any serialized sibling property registers it. `<@item format(v) {…} label="L"/>` passed to a child that renders `${input.item.format(1)}` and reads `input.item.label` in a click handler ships `format` to the client (`_resumed.a0 = $format`), though the scope writes only `input_item_label`. Asking at the attribute's path (`[...attrTagNames, name]`, or the attribute name on a known tag) would reuse the loop, forwarding, and native spread path rules for functions.

Check: `template.marko` `<child><@item format(v) { return "$" + v } label="L"/></child>` with `tags/child.marko` `<span>${input.item.format(1)}</span><button onClick() { console.log(input.item.label) }>x</button>`: `pnpm run compile -- -o html -d template.marko` wraps `format` in `_resume(`; without the button it does not.
