---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/translate-var.ts › getSectionTarget
---

# Declare a rest whose section target is attribute-tag control flow

A rest destructured inside an attribute tag that sits under control flow (`<list><if=x><@item><const/{ b, ...r2 }=r1/><span ...r2/></@item></if></list>`, `r1` itself a rest from the template root) is never declared in the HTML output, yet the `@item` content reads it (`_attrs(r2, …)`) and the root scope serializes it (`r2: … && r2`), so rendering throws a ReferenceError. `translateRest` declares a rest its own section serializes before `getSectionTarget(tag, rest.section)`, which here is the `<if>`: control flow in an attribute-tag context lives in its parent's `attributeTags`, which no body rebuild places statements from, and `addDynamicAttrTagStatements` builds that `<if>`'s output from its attribute tags alone, so the declaration is dropped. Without the `<if>` the rest is declared. The target should be the nearest tag whose statements reach the section's render (here `<list>`), or the statements `addDynamicAttrTagStatements` builds should carry it.

Check: with `tags/list.marko` = `<for|item| of=input.item><${item}/></for>` and a template `<const/{ a, ...r1 }=input.o/><list><if=input.show><@item><const/{ b, ...r2 }=r1/><span ...r2>${b}</span></@item></if></list>${a}`, `pnpm run compile -- -o html -d template.marko` reads `r2` in `_attrs(r2, …)` and in the root `_scope` with no declaration of it; dropping the `<if>` declares `...r2`.
