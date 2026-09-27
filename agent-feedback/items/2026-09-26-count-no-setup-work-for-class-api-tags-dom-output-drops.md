---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › finalizeReferences
---

# Count no setup work for class API tags that DOM output drops

A class API tag's merged expression with no resolved references forces its section's setup through the `addSetupStatement(expr.section)` fallback in `finalizeReferences`. DOM output then removes the tag in two cases: when it has no tags template (`dynamic-tag.ts › translate.enter`), and in optimized builds when it is inert (`translate.exit`). A `<define>` body whose only setup work is such a tag builds `_child_setup(() => 0)`, and every call site calls it. A root holding one reports a non-empty setup, so parent templates call an empty `$setup`. The no-template case is already known in `dynamic-tag.ts › analyze`, which skips the tag's structure by the same check, so it can record a fact on the expression for that fallback to read. The optimized inert case first needs the drop decided in analyze.

Check: `pnpm run compile -- -t class -o dom` on a template `<define/Foo><message/></define><Foo/>` with `components/message.marko` = `<div>${input.value}</div>` emits `_child_setup(() => 0)` and calls `$Foo_content__setup._` from `$setup`.
