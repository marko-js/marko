---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › computeBindingSerialization
---

# Leave `content` out of a value only spread onto native tags that have their own body

A native tag with its own body (or a later `content=`) ignores the `content` of a value it spreads, yet a value written for another reason, such as a spread in a branch the client re-creates, is written whole, so its `content` renderer registers and serializes with it. `<if=show><div ...input.item>Body</div></if>` registers the caller's attribute tag body just as `<if=show><div ...input.item/></if>` does, though only the second can render it. When every read of the value is such a spread or a property read other than `content`, write it without `content` and skip that head in `computeBindingSerialization`, as its effect-read check already does.

Check: `pnpm run compile -- -o html -d template.marko` on `<let/count=0><child><@item class="a">One ${count}</@item></child><button onClick() { count++ }/>` with `tags/child.marko` `<let/show=true/><button onClick() { show = !show }/><if=show><div ...input.item>Body</div></if>` emits `_content_resume(`.
