---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/translate-attrs.ts › getRegisteredLocals
---

# Drop a registered body's locals from a patch entry where the flush writes what reads them

A patch's dynamic tag entry for registered content carries the content's
locals (`getRegisteredLocals`, read by `renderDynamicTag` through
`registered.locals`) even where the same flush writes every read of them as
holes into the created content. In `patch-dynamic-tag-loop-content-locals`,
`<for|t| of=input.items><@tab><b>${t}</b></@tab></for>` handed to a child
that renders `<${tab.content}/>`, each created tab's entry is
`["^^^^…_1*content", 0, 0, 0, { t: "b" }]` while its scope takes
`PatchText:#text/0: "b"`, the content's only read of `t`. A local stays where
client code in the created content reads it (a join, an effect, a child it
passes it to), so the gate needs the fact that every read of the local is a
hole the flush writes, shared with the hole writers.

Check: `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-loop-content-locals/__snapshots__/patches.debug.js` has `{ t: "b" }` in the `PatchDynamicTag:#text/0` entry beside `"PatchText:#text/0": "b"`.
