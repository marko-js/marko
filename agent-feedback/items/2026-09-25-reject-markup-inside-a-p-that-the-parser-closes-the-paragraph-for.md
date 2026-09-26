---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › analyze
---

# Reject markup inside `<p>` that the parser closes the paragraph for

The HTML parser closes an open `<p>` at a block start tag (`<div>`, `<ul>`, `<table>`, headings, …), so `<p><div>…</div></p>` parses as `<p></p><div>…</div><p></p>`, while walks and branch markers assume the authored nesting. A client render binds the wrong nodes: `<div><p><div>block</div></p><b>${input.x}</b></div>` writes `x` over "block" and leaves `<b>` empty. After resume, an `<if>` inside such a `<p>` has its markers under different parents: as an only child its marker resolves to the enclosing element, and the first toggle clears all of it; as a range, `dom/resume.ts › createVisitBranches` runs `parent.prepend(startVisit)`, moving the start marker to the start of `<body>`, so the toggle removes every earlier sibling. Direction: raise a compile error (a warning when nothing inside binds) for p-closing elements inside `<p>`, and likewise for the other implied end tags (`<a>` in `<a>`, `<li>` directly in `<li>`, a heading in a heading); fixtures for both marker kinds.

Check: fixture `<let/x=true>` + `<h1>title</h1>` + `<p><if=x><div>a</div><div>b</div></if><span>s</span></p>` + `<button onClick() { x = !x }>toggle</button>` with `skip_csr: true` and steps `[{}, click]`: the click logs `REMOVE: h1`, `REMOVE: p` and the two divs. With `<p><if=x><div>block</div></if></p>` instead, the click logs `REMOVE: h1, p, div, p, button`. Fixture `<div><p><div>block</div></p><b>${input.x}</b></div>` with `equivalent: false` and `steps: [{ x: "a" }]`: `render-csr.debug.md` shows `<div>a</div>` and an empty `<b>`.
