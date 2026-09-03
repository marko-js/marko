---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › flushPlaceholder
---

# A stateful placeholder's branch link is serialized twice

`flushPlaceholder` (`packages/runtime-tags/src/html/writer.ts`) writes
`PlaceholderBranch` on the try's branch scope as a scope reference, and also
ends the placeholder branch with a mark whose accessor is
`AccessorProp.PlaceholderBranch + branchId` on the owner. The walker stores the
latter under `owner[BranchScopes + "#PlaceholderBranch<id>"]`, which nothing on
the client reads; `control-flow.ts` and `placeholder.feat.ts` read the
serialized `tryBranch[PlaceholderBranch]`.

The walker could set `getScope(id)[PlaceholderBranch] = branch` when the end
mark's accessor carries that prefix, and the server could drop the scope write.
Saves a scope reference per stateful placeholder per response; costs a prefix
check in the walker. Stateful placeholders are rare, so this was left out of
the branch-link work in #4093.

Check: `try-placeholder-stateful-*` fixtures' `writes.debug.html` carry both the
`#PlaceholderBranch` scope prop and the `#PlaceholderBranch<id>` end mark.
