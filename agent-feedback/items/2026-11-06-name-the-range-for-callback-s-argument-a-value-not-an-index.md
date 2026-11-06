---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/common/for.ts › forTo
---

# Name the range `<for>` callback's argument a value, not an index

`forTo` and `forUntil` type their callback `cb: (index: number) => void`, but it receives `start + i * delta`, the range value, which is also what the `<for to>` docs and the compile errors call `num`. Rename the parameter so the signature says what it passes.

Check: read `forTo`/`forUntil` in `packages/runtime-tags/src/common/for.ts`: the callback is called with `start + i * delta`, not `i`.
