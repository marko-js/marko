---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › _if
---

# Narrow the `_if` ConditionalRenderer TODO to the one case that still wastes bytes

The `// TODO: Write the renderer only for stateful conditions or direct closures.` in `_if` is narrower than it reads: branch index 0 is already elided (`branchIndex || undefined`) and `core/if.ts` appends `return <i>` only to branches whose `kBranchSerializeReason` is truthy, so a conditional whose branches never serialize writes nothing. The residue is an `else`/`else-if` branch (index > 0) serialized for a reason unrelated to branch swapping (e.g. hoist-through) under a condition that can never change and with no direct closures (`_if_closure` in `dom/signals.ts`, `_if` in `dom/control-flow.ts`). Suppressing it needs another `_if` argument at every call site, which likely costs more compiled-output bytes than the rare wire bytes saved.

Check: read the `AccessorPrefix.ConditionalRenderer` write in `html/writer.ts` › `_if` against the `t.returnStatement` guard in `core/if.ts`.
