---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/write-guard.ts › getCallsBit
---

# Settle a recursive define's group bits through calls that mix or swap its groups

A recursive call whose group slot reason holds more than the group's own params (`<Rec a=(a || input.x)/>`, or `<Swap a=b b=a/>` between two groups) still asks the body group bit through `getWriteBit`, re-entering `getBodyGroupBit`'s cyclic memo, whose cycle answer is `undefined` (dynamic). So the body keeps `_write_guard`s and a runtime `_set_scope_reason` mask where the least fixpoint is a constant. Answering the cycle with a bottom in one pass is unsound: with `<Rec a=0/>` outside, it folds `a`'s group to `0` and drops `${a}`'s `_text_mark`, though the recursive render's `a || input.x` changes with `input.x`. The exact fix reruns a key that re-asked itself until its answer holds: `cyclic-memo.ts › createCyclicMemo` answering a re-ask with the key's latest result, from a `-1` bottom that `getCallsBit` joins as one constant while calls agree. Every existing fixture compiles the same with it.

Check: `pnpm run compile -- -o html` on `<let/n=1/><define/Rec|{ a, depth }|><span>${a}</span><if=depth><Rec a=(a || input.x) depth=(depth - 1)/></if></define><Rec a=n depth=2/><button onClick() { n++ }/>`: the recursive call's `_set_scope_reason` still ORs `$wg__a` and `$wg__a__OR__depth` with `$wg__input_x`, though every render of `Rec` writes `a` (its group bit is `1`), so the mask could be the constant `10` the outer call passes.
