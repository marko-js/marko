---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/dom/placeholder.feat.ts › registeredValues[PLACEHOLDER_DISMISS_REGISTER_ID]
---

# Run the placeholder dismiss off resume data instead of a registered id

The placeholder dismiss is runtime code registered under a fixed id only so
the effects channel can name it: every streamed try body ships `_f <branchId>`
(`PLACEHOLDER_DISMISS_REGISTER_ID`), and the id needs a reserved slot in
`registeredValues` that template ids must avoid (`meta.ts`). The dynamic-tag
script (`_d`) already moved to marker dispatch; `_f` cannot follow the same
route because a fully static async body flushes no markers and no resume data
at all — its reorder `<t>` plus the swap-gated `_f` effect are the flush's
only contents, and the effect's swap-gated channel (`M._.j[<reorderId>]`) is
what times the dismiss to the reorder swap. Dropping the id needs a dismissal
signal tied to the swap itself, e.g. the inline reorder runtime notifying the
resume runtime of completed reorder ids (a placeholder body's reorder id is
its try branch id).

Check: render a `<try>` with a stateful `@placeholder` and an `<await>` body
containing only static HTML — the body flush's `writes.html` carries only the
`<t hidden>` content and `M._.j[<id>] = _ => { _.push("_f <id>") }`, with no
resume markers or scope data to dispatch from.
