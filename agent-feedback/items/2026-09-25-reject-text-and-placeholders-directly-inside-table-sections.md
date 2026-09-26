---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/insertion-context.ts › discardsWrapperChildren
---

# Reject text and placeholders directly inside table sections

The page parser foster-parents non-whitespace text out of `table`/`thead`/`tbody`/`tfoot`/`tr`, but the translator accepts `${}` there and places its resume comment and walk as if the text stayed. `<tbody><tr>…</tr>${n}</tbody>` renders the text outside the table on the server and, after resume, updates never reach it (the resume comment stays in the `<tbody>` beside the `<tr>`), while a client render keeps the text inside `<tbody>` and updates it. `util/insertion-context.ts` already lists these insertion modes, but only `<show>` consults it. Direction: raise a compile error for non-whitespace text and placeholders directly inside those tags that points at wrapping them in a cell, and add an error fixture.

Check: fixture `<let/n=0>` + `<table><tbody><tr><td>a</td></tr>${n}</tbody></table>` + `<button onClick() { n++ }>inc</button>` with `equivalent: false` and steps `[{}, click]`: `render-ssr.debug.md` shows `0` outside `<table>` and no change on the click; `render-csr.debug.md` shows `0` inside `<tbody>` and `UPDATE: table > tbody::text "0" => "1"`.
