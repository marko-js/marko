---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/html/inlined-runtimes.debug.ts › REORDER_RUNTIME_CODE
---

# Queue pending `onNextSibling` callbacks in the inline reorder runtime

`runtime.x` keeps a single `nextSibling`/`onNextSibling` pair. A `<t hidden>` swap callback pending on that element's next sibling is silently dropped if, while walking the `<t>`'s children, a placeholder-end comment (`!id`) hits the `runtime.l[id] && placeholders[id]` branch and reassigns the pair — the outer swap then never fires and hydration freezes. Current server flush ordering appears to keep this unreachable, so this is robustness, not a live bug: fire the pending callback before reassigning (or queue), weighed against inline-runtime bytes.

Check: read `REORDER_RUNTIME_CODE` and confirm both the `op == "!"` and `<t>` branches assign `nextSibling`/`onNextSibling` without first draining a pending one.
