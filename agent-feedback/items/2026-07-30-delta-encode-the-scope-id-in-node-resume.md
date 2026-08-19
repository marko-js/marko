---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › _el_resume
---

# Delta-encode the scope id in node resume comments

`_el_resume` emits `state.mark(ResumeSymbol.Node, scopeId + " " + accessor)`, repeating the absolute scope id in every marker even though consecutive markers usually share a scope or differ by one; writing the signed decimal delta from the previously written marker is worth ~1.4 raw bytes per marker — a flat 112 raw bytes on any 80-marker page regardless of content — and needs no new tokenizer, since `nextToken()` already returns `""` for an empty field, making `getScope(prev += +nextToken())` the whole read side (+8 to +20 min / +5 to +8 brotli of client code). The compressed win depends entirely on how repetitive the surrounding markup is: on identical-repeat pages the absolute id is the only thing preventing a page-long brotli match, giving -1007 brotli (-53%) on 200 components / 1000 markers and -157 (-22%) on 40 identical cards, but a content-varied page with the same marker count buys only -124 (-2.3%), and a 600-marker 238 kB page saves 738 brotli at q11 / 1289 at q5. Quote the raw-per-marker figure rather than a percentage: node markers are 11.0% of raw bytes across the fixture corpus but the scope ids alone are 0.90%. The encoder is not a one-liner — mark order is not stream order for async or reordered chunks, so the delta base has to live on `Chunk` (the precedent is `Chunk.writeEffect`'s `lastEffect` run-length elision) with an absolute-form escape for a chunk's first marker, and branch markers must stay absolute because `render.m` can retain and reprocess them on a later `ready()` pass over a compacted `visits` array.

Check: TODO
