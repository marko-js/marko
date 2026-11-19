---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/solve-reasons.ts › computeBindingReaders
---

# Answer `bindingReaders` without recursing once per derived value

`computeBindingReaders` reaches each next value through `forEachStep` › `readersOf` › `bindingReaders`, so one ask at a derive chain's head nests a memo computation per link, and content (or a function) handed through about 700 derived values overflows the compile's stack. No real template comes near it (fixtures stay under 10 nested memo computations), so the impact is low. A depth cap inside `createCyclicMemo` is the wrong layer: it adds unwinding and restarts to every memo for a fact only the readers graph has. Direction: answer the readers fact iteratively, finding strongly connected groups while walking and answering each group once in dependency order, which also retires the provisional-answer bookkeeping `createCyclicMemo` carries for this one cyclic fact.

Check: a tag with `<const/v0=input.content/>`, then `<const/vN=v(N-1) || null/>` for N = 1…900 and `<${v900}/>`, used as `<chain><em>${count}</em></chain>` beside a `<let/count=0/>` button; `pnpm run compile -- -o dom -d template.marko` throws `RangeError: Maximum call stack size exceeded` from `computeBindingReaders`.
