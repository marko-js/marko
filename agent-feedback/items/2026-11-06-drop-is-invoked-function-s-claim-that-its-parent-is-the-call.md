---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/is-invoked-function.ts › isInvokedFunction
---

# Drop `isInvokedFunction`'s claim that its parent is the call

The type guard narrows `expr` to `{ parent: CallExpression | OptionalCallExpression; parentPath: NodePath<CallExpression> }`, but it also returns true by walking up through `TSNonNullExpression` wrappers. For `fn!()`, `expr.parent` is the non-null expression and the call is one level higher. Separately, `parentPath` leaves out `OptionalCallExpression`, which `parent` includes. No caller reads the narrowed fields today (`util/references.ts` and `util/module-registrations.ts` use only the boolean), so the first caller to trust them would get a wrong type. Return `boolean`, or narrow only when the call is the direct parent.

Check: trace `isInvokedFunction` on the `fn` in `fn!()`: it moves to the `TSNonNullExpression` and returns `parent.callee === node`, which is true, while `expr.parent.type` is `"TSNonNullExpression"`.
