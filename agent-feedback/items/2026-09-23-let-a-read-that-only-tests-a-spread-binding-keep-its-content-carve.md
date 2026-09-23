---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › hasReadBeyondSpreading
---

# Let a read that only tests a spread binding keep its content carve

`hasReadBeyondSpreading` counts every read that is not a native spread, so a guard around a spread clears the binding's `noSerialize`/`noSerializeProperties`: `<if=input.item><button ...input.item/></if>` writes the slot with `content` and registers the attribute tag body for resume, though only the element renders it. A read in a test position (`<if=x>`, `<show=x>`, a ternary test, `!x`, the left of `x && …`, `x == null`) needs only truthiness or identity, which a write without `content` keeps. Recording the read kind in `addReadToExpression` (from the parent node) would let such reads keep the carve; a test of `x.content` itself still needs `content`. Guarding an optional attribute tag with `<if>` is a common shape.

Check: `template.marko` `<let/count=0><child><@item onClick() { count++ }>One ${count}</@item></child>` with `tags/child.marko` `<if=input.item><button ...input.item/></if>`: `pnpm run compile -- -o html -d template.marko` emits `_content_resume(` for the body; with `<button ...input.item/>` alone it does not.
