---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › analyze
---

# Retain only event and change handlers for a dynamic tag whose templates are not all known

`analyze` sets `tagExtra.retained = true` whenever a dynamic tag has any input, so every function attribute registers for resume, though only event handlers (`on*`), change handlers (`*Change`) and spreads (which may carry them) need to for idiomatic code. Direction: once a dynamic tag's attributes derive its known templates' input (see the item on linking those attributes), retain only handler and spread attributes for the part of the name that is unresolved, and let a known template's own reads decide the rest. A Class API child, a template still analyzing (an import cycle, a self-render) cannot be consulted and keeps the whole input.

Check: `<let/x=1/><${input.alt || Reader} fn() { console.log(x) } onPick() { x++ } valueChange(v) { x = v }/>`, with `Reader` reading only `input.onPick`; `pnpm run compile -- -o dom -d template.marko` registers `$fn` (`_resumed.… = $fn`) beside the two handlers.
