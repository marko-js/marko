---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _show
---

# Keep a `<show>`'s only-child range when its body control flow changes while hidden

When a `<show>` is the only child of an element, `_show` reads its body's range from the parent's first and last child at hide time and parks those nodes in a fragment (`dom/scope.ts › tempDetachBranch`). An `<if>` at the edge of that body still swaps its marker and branch nodes inside the fragment while hidden, so the range keeps nodes the `<if>` has replaced: showing again inserts the stale marker (the new branch never appears) or re-inserts a branch the `<if>` removed. A resumed page renders correctly; a client render does not. Direction: let the edge control flow move the range edge (as `_html` does for a branch edge), or insert the fragment's current children when showing, with a CSR fixture.

Check: fixture `<let/editing=false><let/visible=true><div><show=visible><if=editing><input/></if></show></div>` plus `.edit`/`.show` toggle buttons, `equivalent: false`, steps `[{}, clickShow, clickEdit, clickShow]`: `render-ssr.debug.md` inserts the `<input>` on the last step, `render-csr.debug.md` leaves the `<div>` empty. Steps `[{}, clickEdit, clickShow, clickShow, clickShow, clickEdit, clickShow]` end with a stale `<input>` in CSR only.
