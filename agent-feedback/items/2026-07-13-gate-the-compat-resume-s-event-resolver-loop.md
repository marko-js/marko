---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/dom/compat.ts › compat.init
---

# Gate the compat resume's event-resolver loop and the process-wide patches

The `SET_SCOPE_REGISTER_ID` resume runs `classEventResolver` over every enumerable key of every compat boundary scope (`$global`, `m5c`, `#Id`, `#StartNode`, …), and `tags-compat/runtime-dom.js` installs that resolver unconditionally, so apps with no bridged Class→Tags events pay the loop anyway. Two related always-on costs: the same file patches `Component.prototype.___setCustomEvents` for every Class component, and `htmlCompat.onFlush` wraps `Chunk.prototype.flushHTML` process-wide, so once class-compat is loaded every pure Marko 6 flush runs an extra `chunk.render` plus a `writersByGlobal.get` miss. Gate the resolver loop on a "has bridged events" flag and scope both patches to interop renders.

Check: `rg -n "classEventResolver" packages/runtime-tags/src/dom/compat.ts` still shows the ungated `for…in`.
