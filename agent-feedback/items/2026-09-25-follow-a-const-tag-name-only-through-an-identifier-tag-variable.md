---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/tag-name-type.ts › analyzeExpressionTagName
---

# Follow a `<const>` tag name only through an identifier tag variable

`analyzeExpressionTagName` follows a `<const>`'s value whatever its tag variable pattern, so in `<const/{ length: Comp }=Child/><Comp/>` it types `Comp` as the imported `Child` template. HTML then calls `Comp({})` on a number, and DOM inlines `Child`'s template and walks while calling an undeclared `$Comp`. Direction: follow the `<const>` value only when the tag's `var` is an `Identifier`, and treat any other pattern as `TagNameType.DynamicTag`.

Check: with `tags/child.marko` `<span>child</span>`, `pnpm run compile -- -o dom -d template.marko` on `import Child from "./tags/child.marko"` + `<const/{ length: Comp }=Child/>` + `<Comp/>` emits `$Comp($scope, $pattern.length)` with no `$Comp` declared and imports `$template`/`$walks` from `./tags/child.marko`; `-o html` emits `Comp({})`.
