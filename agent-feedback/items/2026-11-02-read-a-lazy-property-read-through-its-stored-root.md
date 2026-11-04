---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/finalize-references.ts › resolveReferencedBindings
---

# Read a lazy property read through its stored root

A lazy read of a property alias (`todo.id` in an event handler) marks the alias `hasLazyReads`, so it gets its own stored `_const` slot, a forward from its root's signal, and its own serialized value, even when the root is already stored and serialized for another reason. `<let/todo={ id: 1, done: false }/>` with one handler assigning `todo = { ...todo, done: !todo.done }` and another reading `todo.id` serializes both `todo` and `todo?.id` per instance and keeps `$todo_id = _const(…)` in the bundle. When the alias root is itself stored, the lazy read could resolve to `createResolvedRead(root, getPropertyPath(binding, root))` and drop the alias slot. That needs finalize to know which roots are stored: today `forceStore`/`storesValue` are decided in `signals.ts` during translate, so record the root's storage as an analyze fact first (for example from a first pass over lazy reads in `resolveReads`).

Check: compile the template above with `pnpm run compile -- -o html` and see `_scope` write both `todo` and `todo?.id`; `for-by-prefix-reorder-remove/__snapshots__/writes.debug.html` serializes `rows` beside `rows_0`…`rows_3`, which alias its entries.
