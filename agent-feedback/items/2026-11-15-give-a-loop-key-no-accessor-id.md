---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/finalize-references.ts › allocateIds
---

# Give a loop key no accessor id

A `<for>` key is stored at the `LoopKey` accessor (`core/for.ts` sets its `scopeAccessor`), but a key a child section reads joins its section's `bindings`, and `allocateIds` gives it `binding.id = nextId++` like any other binding. Nothing reads that id: the client reads the key at `LoopKey` (`getScopeAccessor` returns `scopeAccessor` for a constant), so every later binding in the row takes the next accessor for nothing. Skip the id for a binding stored at its own accessor, while still assigning, in order, the intersections `anchors` ties to it (the key can be the last member of an intersection with an owner's binding). That brings `for-key-const-alias-takes-no-slot`'s row `<let>` back from accessor id 4 to 3.

Check: `pnpm run compile -- -o dom` on `<let/show=true/><for|item, key| of=["a", "b"]><let/count=0/><button onClick() { count++ }>${count}</button><if=show>${key}</if></for>` prints `_let(4, ...)`, and no output reads accessor `d` (id 3).
