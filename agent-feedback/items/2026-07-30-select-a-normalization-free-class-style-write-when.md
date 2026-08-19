---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › translate.dom.enter
---

# Select a normalization-free `class`/`style` write when the value is provably not an object

A dynamic whole-value `class`/`style` always compiles to `_attr_class`/`_attr_style` (the `case "class": case "style":` branch, whenever `trackDelimitedAttrValue` put the expression in `meta.dynamicItems`), dragging `toDelimitedString`'s recursive array and object walks — and for style `stringifyStyleObject` + `escapeStyleAttr` + `unsafeStyleAttrReg` — into the page even when the value can never be an object: on a page that already has one dynamic attribute (dom 2713/1354), ``class=`btn ${x}` `` costs +299/+128 and ``style=`color: ${x}` `` +417/+190, against +31/+22 for the same expression as `data-b`. `setAttribute(el, name, value || undefined)` is equivalent for every string and non-object primitive (`""`, `0`, `false`, `null` all remove the attribute on both paths), so tiny `_attr_class_str`/`_attr_style_str` helpers behind a syntactic predicate recover -238/-96 (class), -353/-151 (style) and -392/-160 (both), measured by deleting the helpers from the built entry chunk and re-minifying, and each update becomes one `setAttribute` instead of a walk. Make the predicate string-_or-falsy_ rather than strictly string — `cond && "danger"` and `cond ? "under-50" : null` are what actually occurs (13 of the 18 fixtures that emit a whole-value `_attr_class`, versus 1 using a template literal) — and keep it syntactic, since a TypeScript `string` type is not a runtime guarantee and a bare identifier can never qualify. Two gates: keep SSR on `_attr_class` (`html/attrs.ts`'s `stringAttr(name, toDelimitedString(v, …))` is already byte-identical to `stringAttr(name, v)` for strings), and do not retarget the call at `_attr`, which turns `class=""` from "remove the attribute" into ` class=""` on both halves. The win is per-page all-or-nothing: one unprovable class/style anywhere on the page, or any reactive native spread (`_attrs` references both helpers unconditionally), keeps the whole helper set.

Check: TODO
