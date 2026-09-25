---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/let.ts › analyze
---

# Land a let initial value's path in the let

`<let>` links its merged tag extra (`value` and `valueChange`) to the binding, and a merged extra has no `read`, so `<let/item=input.item/><button ...item/>` takes the whole value and registers the body. The `value` operand becomes the let's value as is; recording that the binding holds that operand, as `<for>` and `<await>` params do with `Binding.paramsHold`, would land its path. A `<let>` holding content is uncommon, so the gain is small.

Check: `template.marko` `<let/count=0><child><@item onClick() { count++ }>One ${count}</@item></child>` with `tags/child.marko` `<let/item=input.item/><button ...item/>`: `pnpm run compile -- -o html -d template.marko` emits `_content_resume(` for the body.
