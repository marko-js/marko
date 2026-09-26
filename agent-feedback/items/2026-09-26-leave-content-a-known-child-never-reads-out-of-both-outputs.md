---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › analyzeAttrs
---

# Leave content a known child never reads out of both outputs

When a known child never reads `input.content`, its tag's body is still analyzed as live content: the reads in it keep their bindings, closures and parent inputs alive, so the DOM output keeps the body's Closure signals and the HTML output writes `ClosureScopes` for them. Direction: set `Section.dropped` on the tag's body section when `analyzeAttrs` finds `content` unread (and in `analyzeParams` when the child reads no input or no attributes), so `finalizeReferences` drops its reads and assignments, and keep the body from translating in `visitors/tag/custom-tag.ts` and the `<define>` branch of `visitors/tag/dynamic-tag.ts`. Setting the flag alone leaves the DOM writing the section's setup signal with reads of undeclared identifiers.

Check: with `tags/child.marko` `<span>${input.a}</span>`, `pnpm run compile -- -o dom -d template.marko` on `<const/x=input.foo * 2/><child a=1>${x}</child>` keeps `$child_content__x`, `$x__closure` and an exported `$input_foo`, and `-o html` writes `"ClosureScopes:x"`.
