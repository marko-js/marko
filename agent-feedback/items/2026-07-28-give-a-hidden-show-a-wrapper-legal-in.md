---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/html/writer.ts › _show_start
---

# Give a hidden `<show>` a wrapper legal in table/select insertion contexts

`_show_start` wraps non-displayed content in `<t hidden>`, which table/select insertion modes discard while keeping its children, so `translator/core/show.ts` › `assertLegalHiddenContext` now rejects `<show>` directly inside `<table>`/`<tbody>`/`<tr>`/`<colgroup>`/`<select>`/`<optgroup>` (predicate: `translator/util/insertion-context.ts` › `discardsWrapperChildren`). That diagnostic only stops the silent mis-render; the docs still recommend `<show>` for bulky markup, which is often a table body. No ordinary element is legal in both contexts — `<template>` is the sole candidate, but its children sit on `.content`, so the resume walker and `_show`'s `<t>`-dissolve path must reach through it first; a narrower option sets `hidden` on each statically known top-level body node. The same `<t hidden>` hazard applies to the reorder wrapper `Chunk.flushScript` writes — see "Wrap reordered out-of-order content in a parser-context-legal container" — so whichever lands first sets the container precedent for both emit sites.

Check: delete the `assertLegalHiddenContext` call and run `pnpm run test:update -- --grep "runtime-tags/translator error-show-tag-in-table "` — `render.debug.md` shows the row inside the table despite `show=false`.
