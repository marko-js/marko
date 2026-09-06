---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/patch.ts › applyPatch
---

A patch frame is evaluated as `new Function("return " + frame)`, so a frame
must be exactly one expression — but the server assembles chunk scripts with
`concatScripts` (`;`-joined, `src/html/writer.ts`). Any second `;`-segment
in a patch flush (e.g. a script a helper emits through `writeScript` while
`writesPatches` is set) becomes unreachable dead code after the `return`
and is silently dropped. `PatchState.flushChunk`
(`src/html/patch.ts`) now sequences the ready-record call with `,`, but
nothing asserts the remaining `scripts` is a single expression. Add a
MARKO_DEBUG assertion (server-side, e.g. reject `;` in a patch frame) or
route every patch-mode script through comma sequencing.

Check: make any patch-mode code path emit two `concatScripts` segments in
one flush and observe the second segment never executes client-side.
