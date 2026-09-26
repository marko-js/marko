---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › finalizeReferences
---

# Leave hoists from dropped content out of both outputs

A tag variable declared inside content marked `Section.dropped` (an attribute tag a known child never reads) and read from rendered code still enters `binding.hoists`, so `finalizeReferences` marks its section `hoisted`, the sections above it `isHoistThrough`, and force-serializes the binding. HTML output (`visitors/program/html.ts › translate.enter`) then declares a `<name>__subscribers` Set for a section that never renders and serializes it under `ClosureScopes`, and DOM output keeps a `_hoist` getter over that section, which always yields nothing. Direction: skip the hoist bookkeeping for a binding whose section `isSectionDropped`, and translate its hoisted reads to the empty value a hoist over a never-rendered section yields.

Check: with `tags/child.marko` `<span>${input.a}</span>`, `pnpm run compile -- -o html -d template.marko` on `<child a=1><@junk><div/el/></@junk></child><script>el().forEach(e => e)</script>` declares `$junk_content__subscribers` and writes `"ClosureScopes:1": $junk_content__subscribers` into `_scope`, and `-o dom` emits `_hoist("#div/0", "ClosureScopes:1")`.
