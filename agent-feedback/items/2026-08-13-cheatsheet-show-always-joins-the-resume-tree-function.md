---
type: unclear
impact: med
effort: low
site: docs / tags cheatsheet › <show> / <const>
---

# Cheatsheet: `<show>` always joins the resume tree; function consts must not

`<show>` always renders its body (hidden → `<t hidden>`) so the branch can resume without shipping the body's template; `<if>` mounts and destroys. Agents treating `<show>` as a free "display:none" for heavy client-only panes (diff, tabs) discover only after SSR that derived function-valued `<const>`s were serialized as holes and throw `is not a function` on first open. Cheatsheet should state: use `<if>` when the subtree should not exist until needed; use `<show>` only when keep-alive + resume of already-rendered DOM is required; never store a function in a `<const>` that SSRs — call pure helpers inside an expression that produces a serializable result (`items.filter(makeFilter(q))`) or keep the helper call inside handlers/lifecycle.

Check: an agent following only the cheatsheet picks `<if>` for a first-paint-closed review pane and does not leave `const/match=makeFilter(...)` on a shown/hidden SSR branch.
