---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Keep a wide template's server output flat and linear

In the html output, each closure a section reads adds a `_subscribe(...)` that `addWriteScopeBuilder` wraps around the previous one, around the section's `_scope` write, and each takes `markerGuard` (`getWriteGuardForAny` over `getNodeReasons`), a left-nested `||` chain with one operand per node reason (`write-guard.ts` › `orGuard`). Content reading N closures (a page rendering many components into one layout's content) so nests about N deep and repeats an N-operand guard N times: Babel's traversal of the result overflows the stack at 2,000 reads, and the output grows quadratically. The subscriptions could follow the `_scope` write as one sequence (`_subscribe` taking the scope id), a guard over many groups or reasons could be or-ed as a balanced tree, and a compound marker guard read more than once could be computed once into a const.

Check: `compiler.compileSync` (as `translator-api.test.ts` does, `output: "html"`) on `<define/Layout|input|><${input.content}/></define><Layout>`, then `<p>${input.aN}</p>` for N = 0…1999, then `</Layout>` throws `RangeError: Maximum call stack size exceeded`; with 250, 500 and 1,000 reads it emits 1.42, 5.47 and 21.4 MB of code. `pnpm run compile -- -o html` on three reads shows the nested `_subscribe` calls each passing `($wg__input_a) || ($wg__input_a2) || ($wg__input_a3)`.
