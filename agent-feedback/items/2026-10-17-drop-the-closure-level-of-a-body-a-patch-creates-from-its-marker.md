---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › getContentClosureValues
---

# Drop the closure level of a body a patch creates from its marker shell

A dynamic tag entry carries its renderer's closure levels (`registered.locals` in `writeDynamicTagEntry`) even where the renderer is content the patch creates from its markupless shell (`patches/registered-content`): that renderer runs the shell's setup in place of its own, so no `_closure_get` reads the level, and the flush fills the body's holes itself. `patch-dynamic-tag-native-body-swap` sends `fa: ["^^b0", 0, 0, 0, { e: "d" }]` for the body `outer` renders in patched structure, beside the hole fill `ta: "d"`. A patch render's levels could leave out closures no setup id of the shell reads, where the body is created from a marker; a full shell's inits may read them.

Check: `patch-dynamic-tag-native-body-swap/__snapshots__/patches.js`, the last flush's `{ e: "d" }`.
