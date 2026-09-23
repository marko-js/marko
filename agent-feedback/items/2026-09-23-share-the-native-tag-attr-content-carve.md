---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › canHaveAttrContent
---

# Decide a native tag's attribute content in one place

Analyze (the patch spread block linking `patch-dynamic-tag`) and translate (the spread write choosing `_attrs_content`) each compute `canHaveAttrContent` from their own spelling of the same four facts: no children, not text-only, not open-only, no static `content=`. If one gains a clause the other lacks, a patch page links the wrong runtime feature for the element. Compute it once (a helper taking the tag, or a flag recorded at analyze) and read it in both.

Check: `grep -n "canHaveAttrContent" packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` lists both definitions.
