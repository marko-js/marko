---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushScript
---

# Wrap reordered out-of-order content in a parser-context-legal container

A reorder flush appends `<t hidden {commentPrefix}={reorderId}>reorderHTML</t>`, and the inline reorder runtime splices it in via `runtime.l[id].replaceWith(...container.childNodes)`. `<t>` puts the parser in "in body", so a table-internal payload is destroyed before the runtime sees it: `<tr>`/`<td>` start tags are ignored, only their text survives, and bare text nodes land in the `<tbody>`. That silently breaks the canonical async-table pattern (`<try>` with a skeleton-row `@placeholder` plus an `<await>` streaming the real rows), and the wrapper is foster-parented out whenever a flush lands while the table is still open. Foreign content has the reverse problem: the wrapper is written at body level, so content reordered into `<svg>`/`<math>` parses as HTML and the runtime moves XHTML elements (an XHTML `<circle>` renders nothing) into the SVG. Track the reorder site's static ancestor chain in the translator and emit matching scaffolding (`<table hidden><tbody>…</tbody></table>`, an `<svg>` or `<math>` inside the wrapper), extracting from that depth as React's Fizz writer does. "Give a hidden `<show>` a wrapper legal in table/select insertion contexts" covers this file's other `<t hidden>` emit site and proposes `<template>` instead, so pick the container once for both writers and reuse its `translator/util/insertion-context.ts` › `discardsWrapperChildren`, which already enumerates the offending insertion modes.

Check: add that fixture and run `pnpm test -- --grep "runtime-tags/translator try-await-table-rows "` — `render.md` shows the row reduced to a stray text node. For foreign content: fixture `<svg><try><@placeholder><rect/></@placeholder><await=resolveAfter(0, 1)><circle r="1"/></await></try></svg>`, `equivalent: false`, steps `[{}, flush, wait, markNs]` where `markNs` sets an `ns` attribute to each `svg *` element's `namespaceURI`: `render-ssr.debug.md` shows the `<circle>` with `ns="http://www.w3.org/1999/xhtml"`, `render-csr.debug.md` with the SVG namespace.
