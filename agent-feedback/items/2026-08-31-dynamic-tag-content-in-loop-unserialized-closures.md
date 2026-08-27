---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › analyze
---

# Closures inside dynamic-tag content rendered directly in a `<for>` body are not serialized

When attribute-tag content is rendered by a bare `<${content}/>` in a `<for>` body (no wrapping `<if>`), a closure inside that content over unrelated outer state is never serialized, so an item added client-side after resume renders the closure value as empty. Wrapping the dynamic tag in `<if=content>` serializes correctly. Repro: `template.marko` with `<let/count=5/><let/n=1/><button onClick() { n++ }>add</button><sections><for|i| from=1 to=n><@section>${count}</@section></for></sections>` and `tags/sections.marko` of `<for|{ content }| of=input.section><div><${content}/></div></for>` — after hydrate, clicking renders `<div/>` where CSR renders `<div>5</div>`, and SSR writes neither `count` nor a content registration. Present on `main` (pre-dates the branch-closure serialization work); likely the direct dynamic-tag-content path skips the downstream reason chain that the `<if>` closure shape flows through.

Check: add the two files above as a fixture with `steps: [{}, click]` and `equivalent: false`; `render-ssr.md` and `render-csr.md` diverge on the appended item's text.
