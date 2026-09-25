---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/references.ts › getDownstreamPath
---

# Land paths through object and array literals

A literal is opaque to path questions, so a value placed in one takes the whole value: `<button ...{ ...input.item, class: "x" }/>` and `<const/items=[...input.item]/>` feeding `<for of=items>` register the body. An object literal lands a spread operand's paths unchanged and `key: x` at `["key", …]`; an array literal lands `x` at its index and a spread operand's items at indices (an attribute tag is its own first item). `[...input.item]` is the usual way to get `.length` or `.map` over attribute tags. This needs a per-expression landing table that `getDownstreamPath` composes with the read. Extend `NodeExtra.spreadFrom` (the bindings an expression holds as is) rather than adding a parallel field, and give any new term a `CONTEXT.md` entry first.

Check: `template.marko` `<let/count=0><child><@item onClick() { count++ }>One ${count}</@item></child>` with `tags/child.marko` `<button ...{ ...input.item, class: "x" }/>` or `<const/items=[...input.item]/><for|item| of=items><button ...item/></for>`: `pnpm run compile -- -o html -d template.marko` emits `_content_resume(` for the body.
