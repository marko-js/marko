---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › analyzeRecursiveTags
---

# Stop recursive tag calls from dropping content whose references already merged

A recursive call (a template calling itself, or a `<define>` calling itself) that passes content the callee never renders fails to compile with `Cannot drop a merged reference` when that content holds control flow (`<if>`, `<for>`). `analyzeRecursiveTags` runs at program exit, after the content's tags were analyzed and merged their references, so `analyzeAttrs` › `dropContent` › `untrackExpr` hits the invariant that a merged reference is never dropped. A non-recursive call drops the same content before its body is analyzed, so it never meets a merged reference. Either the merge waits for the recursive callee's verdict on its content, or that verdict reaches the content before its tags analyze.

Check: compile `<define/Tree|{ depth, x }|><div><if=depth><Tree depth=depth - 1><if=x>text</if></Tree></if></div></define><Tree depth=2 x/>` with `pnpm run compile -- -o dom -d <file>`; it throws `Cannot drop a merged reference`. Swapping the inner `<if>` for `<span>${x}</span>` compiles.
