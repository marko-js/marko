---
type: dx
impact: med
effort: low
site: website/docs/explanation/streaming.md › @placeholder / out-of-order
---

# Document out-of-order `<try>`/`@placeholder` HTML shape for SSR debugging

When `<try>` has `@placeholder` around `<await>`, a single `curl` of the response shows the placeholder still inside `<main>` even after the promise has resolved — the real branch is appended as out-of-order markers (`<t hidden M_=…>…</t>` + small runtime scripts) later in the body. Agents debugging "SSR didn't render X" often stop at the placeholder in `<main>` and miss that the streamed branch (or a `@catch` error string) is further down. The same shape is also the whole no-JS story: only the runtime scripts move a `<t hidden>` block into place, so with JavaScript disabled the visitor keeps the skeleton and never sees the content. Dropping `@placeholder` puts the resolved branch back inline (in-order) and is currently the only switch, so a skeleton and a no-JS render are mutually exclusive per boundary.

Direction: in the streaming doc (or cheatsheet SSR section), show a minimal response sketch: placeholder in-tree → later hidden replacement fragment; note that `@catch` errors surface the same way (`<p>…is not a function</p>` inside a hidden `t`), and state the no-JS trade-off at the point where `@placeholder` is introduced.

Check: stream a page with slow `<await>` + placeholder; `curl -N` and observe placeholder first, then hidden content blocks before `</body>`. Remove `@placeholder` and the same page streams `<p>REAL:…</p>` inside `<main>`; a `newContext({javaScriptEnabled:false})` load of the page variant with `@placeholder` shows the skeleton forever.
