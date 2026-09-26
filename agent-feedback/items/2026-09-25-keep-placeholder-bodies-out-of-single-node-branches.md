---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/util/branch-tag.ts › isSingleNodeBranch
---

# Keep placeholder bodies out of single-node branches

`isSingleNodeBranch` rejects only a `ContentType.Text` start, so a `<for>`/`<if>` body that is a lone `${}` or `$!{}` (which `translator/util/sections.ts` › `getContentInfo` marks `singleChild`) resumes as one node per Branch: `dom/resume.ts` › `createVisitBranches` adopts one `previousSibling` per branch id. The HTML writer does not write exactly one node for such a body: an unresumed `${""}` writes nothing, a text value merges with the text before it, and `$!{}` writes any number of nodes. After resume, removing or hiding the Branch removes a sibling element or the neighbour's text, or only the last node of the raw HTML. Direction: accept only `ContentType.Tag` and `ContentType.Comment` start types so these bodies get range markers, and add fixtures that start visible and then remove the Branch.

Check: fixture `<let/list=[1, 2, 3]/><const/empty=""/><div><span>S</span><for|x| of=list>${empty}</for></div><button onClick() { list = list.slice(1) }>drop</button>` with `equivalent: false` and steps `[{}, click]`: `render-ssr.debug.md` logs `REMOVE: div > span`. With `<div>hello<for|x| of=list>${x}</for></div>` and `list=["a", "b"]` the same click logs `UPDATE: div::text "helloa" => "b"`. `<div><span>before</span><if=show>$!{input.html}</if><span>after</span></div>` with `{ html: "<b>1</b><i>2</i>" }` and a click setting `show = false` logs only `REMOVE: div > b + i`, leaving `<b>1</b>`.
