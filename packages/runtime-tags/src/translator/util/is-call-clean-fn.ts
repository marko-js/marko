import { types as t } from "@marko/compiler";

// A literal function expression with no bare-identifier callees inside:
// calling it runs only locally created code (nothing aliased in).
export function isCallCleanFn(value: t.Node) {
  if (!t.isFunction(value)) return false;
  let opaqueCall = false;
  t.traverseFast(value, (n) => {
    opaqueCall ||=
      ((t.isCallExpression(n) ||
        t.isOptionalCallExpression(n) ||
        t.isNewExpression(n)) &&
        t.isIdentifier(n.callee)) ||
      (t.isTaggedTemplateExpression(n) && t.isIdentifier(n.tag));
  });
  return !opaqueCall;
}
