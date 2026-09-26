---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › analyzeAttrs
---

# Drop unread attributes of an attribute tag a known child gets as a whole

A known child that reads members of a dynamic or repeated attribute tag gets the whole `attrTag`/`attrTags` value, and both outputs build it with `translateAttrs(tag, attrTagPropTree)`, so they emit only the members the child reads. Analysis instead merges every attribute of every occurrence into the group (`analyzeDynamicAttrTagChildGroup` collects `getAllTagReferenceNodes` unfiltered), so an unread attribute still joins the group's intersection and serializes the Bindings it reads. Direction: collect an attribute tag's reference nodes by the same prop-tree test `translateAttrs` applies and pass the rest to `dropNodes`.

Check: with `tags/child.marko` `<span>${input.item.foo}</span>`, `pnpm run compile -- -o dom -d template.marko` on `<let/a=1/><let/b=1/><child><@item foo=a unused=b/><@item foo=2 unused=b/></child><button onClick() { a++; b++ }>inc</button>` emits `_or(...)` over `a` and `b` for a call that reads only `a`, and `-o html` serializes `b`.
