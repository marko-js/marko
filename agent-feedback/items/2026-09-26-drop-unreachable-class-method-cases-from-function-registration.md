---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/function.ts › analyze
---

# Drop the unreachable class method cases from function registration

A class method is never a registration root: `getFnRoot` (`util/get-root.ts`) only returns function declarations, function expressions, arrows and object methods, so the `fn !== getFnRoot(fn)` bail in `analyze` returns for every class method and none gets a `registerId`. Two branches still handle one: the accessor check in `analyze` tests `t.isObjectMethod(node) || t.isClassMethod(node)`, and `util/signals.ts` › `replaceRegisteredFunctionNode` has `ClassMethod` and `ClassPrivateMethod` cases that turn a registered method into a class property. The dead code suggests class members can be registered. Direction: test only `t.isObjectMethod(node)` in the accessor check and drop both `replaceRegisteredFunctionNode` cases.

Check: make the `ClassMethod` and `ClassPrivateMethod` cases of `replaceRegisteredFunctionNode` throw when `getRegisteredFnExpression` returns a replacement; `pnpm test` still passes in full.
