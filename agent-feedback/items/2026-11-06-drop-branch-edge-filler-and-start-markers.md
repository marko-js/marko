---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/util/structure.ts › separate
---

# Drop branch edge filler and start markers

A section whose first or last node is control flow pays for a stand-in node at that edge, per rendered instance: `separate` pads the client template with `<!>` (a `<for>` body opening with `<if>` compiles to `"<!><!><li> </li>…"`), resume inserts a `new Text()` before a branch's start (`dom/resume.ts` › `createVisitBranches`), and the server writes a `BranchStart` comment for every multi-node branch that resumes by marker. Let a branch range start and end at its real nodes instead, with one `fixBranchEdges` (generalizing `_html`'s one-level repair) that every insert and removal calls to keep enclosing ranges current, and let a countable body (decided by `getContentInfo` alone) drop its start comment behind an end marker that carries its node count. The unmerged persisted-pages feature keeps markers on any branch a patch can change (`translator/util/patch/structure.ts` › `patchesBranchesAt`), so send the count through the single-node slot it turns off, and have its branch patchers call the same `fixBranchEdges`. Closed PR #3712 did this with an anchored-vs-repaired split (two systems) at +191 min / +69 brotli on `comments.csr`; reuse its 4 fixtures and debug `assertBranchRange`, and weigh the client cost against a 1,000-row fixture's saving.

Check: `pnpm run compile -- -o dom` on `<let/items=["a"]/><let/show=true/><ul><for|item| of=items><if=show><li>first</li></if><li>${item}</li></for></ul>` shows `"<!><!><li> </li>…"` as the loop body template.
