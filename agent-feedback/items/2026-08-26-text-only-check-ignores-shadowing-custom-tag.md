---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/util/is-non-html-text.ts › isTextOnlyNativeTag
---

# Gate the text-only check on the tag actually being native

`isTextOnlyNativeTag` decides from `tagDef.html` alone, but a custom tag whose name shadows a native element (`tags/title.marko`, `script`, `style`, `textarea`) keeps that flag on its def. `isNonHTMLText` then tells the text and placeholder visitors to skip the body, so `<title>hello ${name}</title>` compiles to a custom-tag call with no content at all. The same class of bug was fixed for the only-child marker in `is-only-child-in-parent.ts`; apply the same gate here (`analyzeTagNameType(tag) === TagNameType.NativeTag`) before reading the def, keeping the null-def guard for `<${"span"}/>`-style names. Guard fixture: `tags/title.marko` rendering `<${input.content}/>` plus a `<let>` toggled through the shadowed `<title>` body across SSR+resume and CSR.

Check: with `tags/title.marko` beside it, `pnpm run compile -- -o dom -d template.marko` on `<title>hello ${input.name}</title>` emits `_title_input_text($scope["#childScope/0"])` with no content argument and no `_text` for the placeholder.
