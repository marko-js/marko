---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/branch-tag.ts › isSingleNodeBranch
---

# Anchor resumed text placeholder rows without branch start markers

A `<for>`/`<if>` body that is only `${}` resumes as a range, so every row writes a `BranchStart` comment (`<!--M_[2-->`) on top of the `Node`/`EmptyText` marker `html/writer.ts` › `markText` already writes after its text. When the placeholder always resumes (no `shouldResume === 0` guard), each row's text ends at that marker and the row before ends at its own, so resume could adopt `marker.previousSibling` (or the text `EmptyText` inserts) as the row. The first row has no such boundary: `translator/visitors/placeholder.ts` › `analyzeSiblingText` stops at the `MarkoTagBody` edge and returns `SiblingText.None`, so without the start marker `hello<for|x| of=list>${x}</for>` writes `helloa<!--M_$…-->` and the row would adopt the merged `helloa`. The direction therefore also needs a `<!>` separator (the `shouldResume === 2` path) before the first row whenever text can precede the branch, plus a translator bit for "always writes a text marker" and a `dom/resume.ts` › `createVisitBranches` path that stops on text; weigh that separator and the client bytes against the per-row wire bytes.

Check: `packages/runtime-tags/src/__tests__/fixtures/for-by/__snapshots__/writes.html` writes `<!--M_[-->first<!--M_$2 a--><!--M_[2-->second<!--M_$3 a-->…` per loop, and its `sizes.json` html size includes those starts. `fixtures/for-tag-placeholder-body-remove/__snapshots__/writes.html` writes `hello<!--M_[-->a<!--M_$4 a-->` with no `<!>`, and its `html.bundle.debug.js` calls `_text_resume($scope2_id, "#text/0", x)` with no separator argument.
