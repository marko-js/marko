---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/evaluate.ts › computeEvaluated
---

# Fold reads of a constant primitive `<const>` into their use sites

`computeEvaluated` asks `computeNode` alone, which never looks through an identifier to the `<const>` binding it reads, so a `<const>` whose value is a compile-time primitive still gets a `_const` signal, a scope slot, a resume value when client code reads it, and a setup-time `_text`/`_attr` write instead of joining the static template. `computeNode` (`packages/compiler/src/babel-utils/compute.js`) recurses through the expression itself and returns nothing for a non-global identifier, so let it resolve an identifier through a lookup `computeEvaluated` supplies, where a read of a confident primitive `<const>` (string, finite number, boolean, `null`, `undefined`) is itself confident, so static text, attribute folding and chains like `step + 3` fold through the one existing system, then drop the tag and binding once every read folds. Fold alias chains (`<const/b=a/>`) through their root, emit `void 0` for `undefined`, keep hoisted reads and member reads of a nullish const (which must still throw) unfolded, and confirm `.sizes` does not grow. Closed PR #3243 tried this by writing `extra.confident` per reference, which `evaluate` no longer reads; its fixture shapes are reusable.

Check: `pnpm run compile -- -o dom -d` on `<let/count=0/><const/step=2/><const/total=step + 3/><button onClick() { count += step }>+${step}</button><div data-total=total>${count} / ${total}</div>` emits `_const("step", …)`, `$total($scope, $scope.step + 3)`, and `<!>` placeholders for both; expect `+2`, `data-total="5"` and `5` in `$template` and no `step`/`total` signals.
