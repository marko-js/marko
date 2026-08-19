---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/html/inlined-runtimes.ts › WALKER_RUNTIME_CODE
---

# Emit the inline walker runtime only when the render can stream or reorder

`WALKER_RUNTIME_CODE` is a 245-byte string re-serialized into the HTML of every interactive SSR page (570 of 730 fixture `writes.html` snapshots) and never cacheable: 245 of the 417 raw bytes of a minimal one-`<let>` page, contributing ~135-150 of its 272 brotli bytes. It runs inline only because the reorder runtime hooks its `x` callback and multi-flush renders resume progressively per `M._.w()`; a render that completes in one flush with no reorders could ship a stub and let `dom/resume.ts` › `init` build the TreeWalker itself. Implementability is not the blocker — `Chunk.flushHTML` knows it is the final flush (`html/template.ts` calls it only on `FlushStatus.complete`) and `state.writeReorders` is checkable there, before `flushScript` writes the walker — the stub's shape is: `self[runtimeId]` is one latch shared by every render in the document, so a data-only stub breaks the "module executed first" path and a stub render poisons a later streaming render in the same document. A callable, setter-safe stub (`(e=>(self[e]||=l=>self[e][l]={i:e+l},self[e]))("M")("_")`, 56 B, with inline `M._.w()` becoming `M._.w?.()`) measures -197 raw / -132 brotli per response across four page shapes against +180 min / +77 brotli added once to the client bundle — roughly -55 brotli on a cold first visit, the full -132 on every repeat visit, and a pure regression on any page that does stream. Free while here: `d: doc` in the same string is dead (nothing reads `RenderData.d`; `REORDER_RUNTIME_CODE` touches only `.l/.i/.p/.j/.r/.x`), worth -4 raw bytes per page.

Check: by brotli-ing a one-`<let>` page's SSR stream with and without the walker string.
