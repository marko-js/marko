---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/html/patches/serializer.ts › writePatchTreeNode
---

# Let a patch carry deeply nested structure the document already renders

A patch flush is one script expression, so its nested patch nodes nest literals as deep as the tree. Chromium stops parsing at about 600 nested levels and Firefox at about 500. The flush then rejects and the page loads the document, although the document renders that depth. Independently, the server's patch render overflows its stack earlier than the document render. The patch render takes five frames per nesting level (`$content` → `_if` → `writeBranch` → `withBranchId` → `withContext` in `html/patches/control-flow.ts`), against the document's two (`_if` → `$content`). In the test harness a recursive tag patches up to 700 levels and rejects from 750, while the plain document renders about 1,700. Inlining `writeBranch` into the patch `_if` and calling `withContext` directly leaves three frames and lets the server render pass 1,000 levels, but the patch still rejects from 750 in a later stage, so frame size binds as well as frame count. A known-good direction for the parse limit: write patch nodes deeper than about 200 after the tree, as assignments into their parents (`[tree, _.a.ca={…}][0]`). On a 600-level flush that costs 10,402/194 B against 10,280/103 B nested, and Chromium and Firefox then parse and link every level.

Check: a fixture whose template renders `<nest depth=input.depth/>`, where `nest.marko` is `<if=input.depth><span><nest depth=input.depth - 1/></span></if>`, patched from depth 1 to 600 parses in jsdom but not in Chromium (Playwright `page.evaluate` of the flush); patched to 800 it throws `RangeError: Maximum call stack size exceeded` in the server's patch render.
