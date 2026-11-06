---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › mergeInto
---

# Fix the "Cannot merged" typo in `mergeInto`'s invariant

The dropped-reference invariant in `mergeInto` throws "Cannot merged a dropped reference.". It should read "Cannot merge a dropped reference.", matching its counterpart in `untrackExpr` ("Cannot drop a merged reference"). The branch is unreachable (`v8 ignore`), so only someone reading the source sees it.

Check: `grep -rn "Cannot merged" packages/runtime-tags/src`.
