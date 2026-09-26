---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/show.ts › assertLegalHiddenContext
---

# Reject a `<show>` reached through control flow in table and select contexts

`assertLegalHiddenContext` tests only the immediate parent from `getParentTag`, so `<tbody><for|r| of=rows><show=visible><tr>…</tr></show></for></tbody>` compiles. The HTML parser drops the `<t hidden>` wrapper that `_show_start` writes inside `<tbody>`, so SSR renders the hidden rows, CSR renders none, and after resume the first toggle does nothing and the second removes the rows. Direction: walk up through `isControlFlowTag` parents before testing `discardsWrapperChildren`, and add an error fixture next to `error-show-tag-in-table`. The wrapper itself is tracked in "Give a hidden `<show>` a wrapper legal in table/select insertion contexts".

Check: fixture `<let/visible=false/><table><tbody><for|r| of=[1, 2]><show=visible><tr><td>row ${r}</td></tr></show></for></tbody></table><button onClick() { visible = !visible }>toggle</button>` with `equivalent: false` and steps `[{}, click, click]` compiles; `render-ssr.debug.md` shows both rows on first render and no change on the first click, while `render-csr.debug.md` starts with an empty `<tbody>`.
