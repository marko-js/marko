---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/dom/renderer.ts › _content
---

# Let the compiler pick `_content`'s clone strategy

`_content` decides at runtime between three shapes the compiler already knows — no template (walk a fresh `Text`), template with empty walks (clone, no walk), and template with walks (clone and walk) — and its `clone` closure hard-references `walk`, `parseHTML` and `cloneCache` in all three, so `dom/walker.ts` and `dom/parse-html.ts` are retained even when every branch body is static. For `<if=(x>1)>yes</if>` the translator already emits `_if(2, "yes")` with the walks argument omitted, yet ablating the walker interpreter from that bundle measures -674 min / -270 brotli, parse-html + cloneCache + createCloneableHTML -426/-152, and both -1073/-417 (6647/3010 → 5574/2593). Emitting a distinct walk-free constructor (and a plain `new Text(str)` form for a branch whose static content is a single text literal) removes those references per call site, so the modules drop only when _every_ client-created branch in the app qualifies — be honest about reach, since a corpus scan of `_if(...)` calls in the fixture snapshots shows most branch bodies do carry a non-empty walks string. Two pieces are unconditional wins worth taking regardless: pre-trimming the trailing exit codes at compile time removes `walks.replace(/[^\0-1]+$/, "")` from `_content` (-26 min / -11 brotli plus one regex execution per branch renderer at module init), and a text-literal branch skips an `innerHTML` parse on first construction.

Check: TODO
