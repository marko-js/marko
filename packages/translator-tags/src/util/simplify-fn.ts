import { types as t } from "@marko/compiler";

/**
 * Given any arbitrary function type will normalize method like functions into expressions.
 */
export function simplifyFunction(
  fn: t.Function,
): t.FunctionDeclaration | t.FunctionExpression | t.ArrowFunctionExpression {
  switch (fn.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return fn;
    default:
      return t.functionExpression(
        null,
        fn.params as t.FunctionDeclaration["params"],
        fn.body,
        fn.async,
        fn.generator,
      );
  }
}
