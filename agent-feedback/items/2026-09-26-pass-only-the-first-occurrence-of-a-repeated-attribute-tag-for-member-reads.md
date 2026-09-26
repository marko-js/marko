---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › writeAttrsToSignals
---

# Pass only the first occurrence of a repeated attribute tag for member reads

A known child that reads only members of a repeated static attribute tag (`${input.item.foo}`, with no rest of `input.item`) gets the whole `attrTags(...)` value, which `analyzeAttrs` and `writeAttrsToSignals` build from every occurrence as one group. That child can only see the first occurrence, yet a member the first occurrence passes statically joins the group's serialize reason, and any change rebuilds the whole value. Direction: when the attribute tag's prop tree has `props` and no `rest`, recurse into the first occurrence only in both `analyzeAttrs` and `writeAttrsToSignals`, as for a non-repeated tag, and drop the later occurrences' reference nodes.

Check: with `tags/child/index.marko` `<span>${input.item.foo} ${input.item.n}</span>`, `pnpm run compile -- -o html -d template.marko` on `<let/n=1/><child><@item foo="first" n=n/><@item foo="second" n=2/></child><button onClick() { n++ }>inc</button>` emits `_set_serialize_reason(/* input.item.foo, input.item.n | input.item.foo | input.item.n */42)`, where a single `<@item foo="first" n=n/>` emits `34` without the `input.item.foo` group, and `-o dom` rebuilds `attrTags` from both occurrences in the `n` signal.
