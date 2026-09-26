---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/html.ts › translate.enter
---

# Share one subscribers Set per content section in HTML output

`translate.enter` builds `sectionDynamicSubscribers` inside the per-section loop, so two hoisting sections that pass through the same custom tag content each declare a `<name>__subscribers` Set and each wrap that content's `_scope(...)` in a `_subscribe` call, while `setSerializedValue` keeps only the last Set for the `ClosureScopes` key. The first Set is filled on every render of the content and never written. Direction: track the subscribers identifier per content section across the whole `forEachSection` pass so each content section gets one Set.

Check: with `wrap.marko` = `<div><${input.content}/></div>`, `pnpm run compile -- -o html -d` on a template with the lines `import Wrap from "./wrap.marko";`, `<Wrap><if=input.a><div/el1/></if><if=input.b><span/el2/></if></Wrap>`, `<button onClick() { el1(); el2(); }/>` declares `$Wrap_content__subscribers` and `$Wrap_content__subscribers2`, subscribes the content scope to both, and serializes only `"ClosureScopes:1": $Wrap_content__subscribers2`.
