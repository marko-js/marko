---
type: dx
impact: med
effort: low
site: website/docs/explanation/streaming.md › @placeholder / out-of-order
---

# Document out-of-order `<try>`/`@placeholder` HTML shape for SSR debugging

When `<try>` has `@placeholder` around `<await>`, a single `curl` of the response shows the placeholder still inside `<main>` even after the promise has resolved — the real branch is appended as out-of-order markers (`<t hidden M_=…>…</t>` + small runtime scripts) later in the body. Agents debugging "SSR didn't render X" often stop at the placeholder in `<main>` and miss that the streamed branch (or a `@catch` error string) is further down.

Direction: in the streaming doc (or cheatsheet SSR section), show a minimal response sketch: placeholder in-tree → later hidden replacement fragment; note that `@catch` errors surface the same way (`<p>…is not a function</p>` inside a hidden `t`).

Check: stream a page with slow `<await>` + placeholder; `curl -N` and observe placeholder first, then hidden content blocks before `</body>`.
