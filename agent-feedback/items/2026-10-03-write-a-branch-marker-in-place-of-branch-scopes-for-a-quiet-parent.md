---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/branch-tag.ts › getBranchEndArgs
---

# Write a branch marker in place of branch scopes when an only-child branch's parent is not resumed

An only-child `<if>`, `<for>` or `<show>` in a template that decodes branch markers writes its branch marker only when its marker slot asks for the parent element (its condition can change, or the parent has its own resumed attributes). When neither holds but its branch scopes still resume (state read inside the rows), it writes no marker, so the server serializes the parent's `BranchScopes` list and a `_` owner link on every branch scope instead, about 47 min bytes for three rows against a 19-byte `<!--M_}1 a 4 3 2-->`. Writing the marker whenever the branch scopes resume in such a template, and letting `resumeOwnerByMarkerWhenStatic` follow the same condition, drops both.

Check: SSR `<let/count=0/><ul><for|item| of=input.items><li>${count}</li></for></ul><for|x| until=count>x</for><button onClick() { count++ }>inc</button>` with `{ items: ["a", "b", "c"] }`: `writes.html` has no marker before `</ul>`, and the scope data carries `Aa: [_(2), _(3), _(4)]` plus `_: _(1)` on each row.
