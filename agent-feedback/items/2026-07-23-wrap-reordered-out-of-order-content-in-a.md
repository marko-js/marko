---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushScript
---

# Wrap reordered out-of-order content in a parser-context-legal container

A reorder flush appends `<t hidden {commentPrefix}={reorderId}>reorderHTML</t>`, and the inline reorder runtime splices it in via `runtime.l[id].replaceWith(...container.childNodes)`. `<t>` puts the parser in "in body", so a table-internal payload is destroyed before the runtime sees it: `<tr>`/`<td>` start tags are ignored, only their text survives, and bare text nodes land in the `<tbody>`. That silently breaks the canonical async-table pattern (`<try>` with a skeleton-row `@placeholder` plus an `<await>` streaming the real rows), and the wrapper is foster-parented out whenever a flush lands while the table is still open. The wrapper also parses foreign content as html: under `<svg>`, a reordered `<rect>` is moved in with the XHTML `namespaceURI` and never renders, so the scaffolding must reopen `<svg>`/`<math>` too. Track the reorder site's static ancestor chain in the translator and emit matching scaffolding (`<table hidden><tbody>…</tbody></table>`), extracting from that depth as React's Fizz writer does. "Give a hidden `<show>` a wrapper legal in table/select insertion contexts" covers this file's other `<t hidden>` emit site and proposes `<template>` instead, so pick the container once for both writers and reuse its `translator/util/insertion-context.ts` › `discardsWrapperChildren`, which already enumerates the offending insertion modes.

Check: add that fixture and run `pnpm test -- --grep "runtime-tags/translator try-await-table-rows "` — `render.md` shows the row reduced to a stray text node. A fixture with `<svg><try><await|v|=resolveAfter("red", 1)><rect width="1" height="1" fill=v/></await><@placeholder><circle r="1"/></@placeholder></try></svg>` and `steps: [{}, flush, wait, flush, read]` (`flush`/`wait` from `utils/resolve`), where `read` asserts `document.querySelector("rect").namespaceURI` is the SVG namespace, fails with `http://www.w3.org/1999/xhtml`.
