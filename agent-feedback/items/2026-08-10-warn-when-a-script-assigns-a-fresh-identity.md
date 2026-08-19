---
type: dx
impact: high
effort: med
site: packages/runtime-tags/src/translator/core/script.ts › default export
---

# Warn when a `<script>` assigns a fresh identity to a binding it also reads

A `<script>` re-runs when any binding it references changes, and an assignment like `items = items.filter(...)` inside that same script produces a new array identity on every run — so the script re-triggers itself forever. In a real app the loop sat inside a data loader (`openIds = openIds.filter(id => list.some(...))` after a fetch), yielding an unbounded three-requests-per-cycle fetch loop that only surfaced as the browser's `ERR_INSUFFICIENT_RESOURCES`, far from the cause; the fix was guarding the assignment behind a length comparison to preserve identity. The hazard is statically visible: the script's body both reads a binding and unconditionally assigns it an expression guaranteed to be a fresh object identity (array/object literal, `.filter`/`.map`/`.concat`/spread). Warn on that shape, pointing at identity-preserving guards or `<const>`.

Check: mount `<let/items=[[]]>` with `<script>items = items.filter(Boolean); console.count("run")</script>` in jsdom — the counter never stops.
