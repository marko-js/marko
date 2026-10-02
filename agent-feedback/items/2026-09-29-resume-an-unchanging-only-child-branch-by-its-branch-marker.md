---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/branch-tag.ts › getBranchEndArgs
---

# Resume an unchanging only-child branch by its branch marker when the template already ships branch visiting

An `<if>` or `<for>` that is its element's only child, or whose body is one element, resumes by the encoding its `serializeStateful` guard picks: a state-fed condition writes one branch-end marker (`<!--M_}1 a 4 3 2-->`) that links the element, branch scopes and owner (so `resumeOwnerByMarkerWhenStatic` drops `_`), while an unchanging one writes a node marker plus the owner's `BranchScopes` entry and `_: _(owner)` on every branch scope. The branch marker is never larger: on whole-page SSR (min/brotli) it saves 15/6 bytes for a one-element `<if>`, 5/5 for a two-element one, and 41/9 for a three-row `<for>` (about 12 min bytes per row). The client decodes it only with `createVisitBranches` (`dom/resume.ts`), which `withBranches` (`common/helpers.ts`) keeps only alongside a branch helper, and a state-fed condition guarantees that for its own tag. Direction: use the branch marker for every such tag in a template with any state-fed `<if>`/`<for>`/`<show>`, derived in translate from its branch sections' stateful reasons, and have `resumeOwnerByMarkerWhenStatic` follow the same condition.

Check: SSR `<let/count=0/><div class=`c${count}`><if=input.show><span>${count}</span></if></div><for|x| until=count>x</for><button onClick() { count++ }>inc</button>`as a fixture with`{ show: true }`. `writes.html`ends the`<div>`with`</div><!--M_$1 #div/0-->`and carries`"BranchScopes:#div/0": _(2)`and`_: _(1)`. With `<if=count >= 0>`it writes only`<!--M_}1 #div/0 2--></div>` and neither entry.
