import { types as t } from "@marko/compiler";

// The class or object property holding the expression that replaces a method.
export function replaceMethodNode(
  node: t.ClassMethod | t.ClassPrivateMethod | t.ObjectMethod,
  replacement: t.Expression,
) {
  switch (node.type) {
    case "ClassMethod":
      return t.classProperty(
        node.key,
        replacement,
        undefined,
        undefined,
        node.computed,
        node.static,
      );
    case "ClassPrivateMethod":
      return t.classPrivateProperty(
        node.key,
        replacement,
        undefined,
        node.static,
      );
    case "ObjectMethod":
      return t.objectProperty(node.key, replacement, node.computed);
  }
}

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
        fn.generator,
        fn.async,
      );
  }
}
