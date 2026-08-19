---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/dom/resume.ts › createVisitBranches
---

# Specialize single-node vs range branch reconstruction behind separate enables

`createVisitBranches` is one function serving two disjoint reconstruction strategies: the single-node half does the `previousSibling`/`visits.indexOf` scan, `Owner ??=`, `StartNode = EndNode = node` and the `endedBranches.reverse()` write; the range half does `branchScopesStack`/`branchStarts`, the `parent.prepend` reparent and the `insertBefore(new Text())` end marker. Splitting it into two nested functions each gated by its own module-level flag — the same shape that already lets rolldown DCE the whole closure when `branchesEnabled` is never set — measures 6112/2796 → 5709/2622 for a single-node-only `<if>`, 7088/3281 → 6685/3133 for a single-node `<for>`, and 6124/2803 → 5950/2721 for a range-only `<if>`; across the 730 fixture `writes.html`, 64 use only single-node branch symbols and 107 only range ones, so most branch-using pages drop one half. A page that genuinely needs both regresses (+294 min / +53 brotli for the duplicated dispatch), so this is only worth doing because the common case is a single kind. The blocker is that the DOM-side constructors never receive the discriminator the HTML side already has — HTML emits `_if(cb, scopeId, "#text/1", 1, 1, 1, 0, 1)` for a single-child body versus `_if(cb, scopeId, "#text/1")` for a two-child one, while DOM emits `_if("#text/1", "<div>a</div>")` either way — but `branchBody.content.singleChild` is set by `getContentInfo` (`translator/util/sections.ts`) during the shared analyze pass, so both sides must derive the bit from that one source or a DOM/HTML disagreement silently corrupts resume.

Check: TODO
