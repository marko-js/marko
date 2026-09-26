---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › normalizeTag
---

# Insert the implied `<tbody>` before building a table's walks

The client template and its walk string follow the authored tree, but `dom/parse-html.ts › parseHTML`, like the page parser, wraps a `<tr>` written directly in `<table>` in a `<tbody>`. The walk from `<table>` into its first child then claims the `<tbody>` instead of the `<tr>`: `<table><tr><td>${input.x}</td></tr></table>` throws on a debug client render, and an optimized build binds the wrong node, so `<table><tr class=input.x>` mounts with the class on `<tbody>`. Direction: in pre-analyze, wrap runs of `<tr>` directly inside `<table>` in `<tbody>` (and `<col>` in `<colgroup>`) so both outputs and the walks match the parsed tree; `<tr>` produced by control flow or a custom tag directly in `<table>` needs the same wrapper or a compile error.

Check: fixture `<table><tr><td>${input.x}</td></tr></table>` with `steps: [{ x: "a" }]`: debug csr throws `Cannot read properties of undefined (reading 'data')` in `_text`. `pnpm run compile -- -o dom` on `<table><tr class=input.x><td>cell</td></tr></table>` emits template `<table><tr><td>cell</td></tr></table>` with walks `next(1), get, out(1)`; a `node -r ~ts` script at the repo root that puts a jsdom `window`/`document` on `globalThis`, sets `globalThis.MARKO_DEBUG = false`, then imports that output and calls `.mount({ x: "a" }, document.body)` leaves `<table><tbody class="a">` in the body.
