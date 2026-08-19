---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/writer.ts › markNode
---

# Fold an element's resume marker into its addressed last-child marker

`<button onClick>${label}</button>` — the shape of most interactive leaf elements — compiles to two adjacent `_el_resume` calls emitting `<!--M_*2 b--></button><!--M_*2 a-->` (26 bytes), where `a` is exactly `b`'s `parentNode`. One comment can carry both accessors (`<!--M_*2 b a--></button>`, 15 bytes): the marker's `previousSibling` gives the child and its `parentNode` gives the element, and `dom/resume.ts` already uses that parent-addressing trick for `ResumeSymbol.BranchEndOnlyChildInParent`, so the decode is `if (nextToken()) visitScope[lastToken] = visit.parentNode` appended to the `ResumeSymbol.Node` branch — `visit.parentNode` rather than `prev.parentNode`, which keeps it correct when the placeholder is empty and a fresh `Text` is inserted. Applied to the real SSR stream this measures -11.8 min / -1.4 brotli per occurrence (40 such buttons: 3059/580 → 2587/523) and stacks with the delta-scope-id encoding above (-772 min / -397 brotli combined on a 40-card page); across all 730 fixture `writes.html`, 177 of 1598 `Node` markers (11.1%, in 140 fixtures) match the foldable pattern. `markNode` is the single emission point and `native-tag.ts` knows statically whether the element's last child is a marked placeholder, so the pairing is a compile-time decision — but only when the child marker is the element's last child, both markers carry the same scope and the same serialize guard (`getSerializeGuard`), and the element's marker would immediately follow the end tag; exclude the deferred html/body trailer path in `markNode` and elements whose end tag is elided.

Check: TODO
