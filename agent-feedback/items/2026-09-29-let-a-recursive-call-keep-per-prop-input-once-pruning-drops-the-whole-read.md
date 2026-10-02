---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/binding-prop-tree.ts › getBindingPropTree
---

# Let a recursive call keep per-prop input once pruning drops the only whole read

A known tag's call site takes its callee's input tree when the call site analyzes. A `<define>` called from outside its own body is fully analyzed by then, so an alias nothing reads (an unread `<const/all=input/>`) is left out of its tree. A template rendering itself, or a `<define>` calling itself, is called from inside its own unfinished body, so such an alias still makes the tree take the input whole: the call passes one object and every prop updates through an intersection, although pruning later drops the alias. Direction: take the tree of a call made from inside its callee once pruning settles, linking each value to its param; reading unsettled pruning during analysis is not an option.

Check: compile to dom `<define/Tree|input|><if=input.depth><Tree depth=input.depth - 1 label=input.label/></if><const/all=input/><span>${input.label}</span></define><let/depth=1/><Tree depth=depth label="x"/>`: the inner call passes `{ depth, label }` through `_or`, and deleting the unread `<const/all=input/>` gives it per-prop calls.
