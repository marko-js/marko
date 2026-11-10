---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › moveDefaultsToConstTags
---

# Give a destructured name with a default its property's change handler

A destructured name writes through its property's change handler (`<input value:=value/>` passes `valueChange`, and `count++` calls `input.countChange`). A default changes only the value read, yet it breaks both, because `moveDefaultsToConstTags` renames the property to a generated alias and declares the name on a new `<const>`. `buildChangeHandlerAttr` then throws the generic "Unable to bind to value.", since its Babel binding still names the original tag, whose pattern no longer holds the name, and an assignment hits the new `<const>`'s "count is readonly and cannot be mutated.". Give the lowered name its source property's change handler, so `:=` and assignment resolve it as they do without a default, or, if the maintainer decides this is deliberate, reject both with a message that names the default.

Check: `pnpm run compile -- -o dom` on `<const/{ value = "", valueChange }=input/><input value:=value/>` throws "Unable to bind to value.", and on `<const/{ count = 0 }=input/><button onClick() { count++ }>${count}</button>` throws "count is readonly and cannot be mutated."; both compile once the `= …` default is removed.
