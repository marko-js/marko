import type { types as t } from "@marko/compiler";
import { computeNode } from "@marko/compiler/babel-utils";

import { skip, traverseContains } from "./traverse";

interface Evaluated {
  confident: boolean;
  computed: unknown;
  nullable: boolean;
  /** Evaluating it has no side effects. */
  pure: boolean;
}

const kEvaluated = Symbol("evaluated");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kEvaluated]?: Evaluated;
  }
}

// What the expression computes to at compile time, computed on first use.
export default function evaluate(value: t.Expression): Evaluated {
  return ((value.extra ??= {})[kEvaluated] ??= computeEvaluated(value));
}

function computeEvaluated(value: t.Expression): Evaluated {
  const computed = computeNode(value);
  return computed
    ? {
        confident: true,
        computed: computed.value,
        nullable: computed.value == null,
        pure: true,
      }
    : {
        confident: false,
        computed: undefined,
        nullable: isNullableExpr(value),
        pure: !traverseContains(value, isImpure),
      };
}

// Marko expressions treat reads (member access included) as pure, so only
// what runs other code or writes counts; a function or method body does not
// run where it is declared.
function isImpure(node: t.Node) {
  switch (node.type) {
    case "ArrowFunctionExpression":
    case "ClassPrivateMethod":
    case "ClassPrivateProperty":
    case "FunctionExpression":
      return skip;
    case "ClassMethod":
    case "ObjectMethod":
      // A computed key runs where the member is declared; the body does not.
      return (node.computed && traverseContains(node.key, isImpure)) || skip;
    case "ClassAccessorProperty":
    case "ClassProperty":
      // Only a static field's value runs where the class is declared.
      return node.static
        ? undefined
        : (node.computed && traverseContains(node.key, isImpure)) || skip;
    case "CallExpression":
      // An immediately invoked function is as pure as what its body runs.
      return node.callee.type === "ArrowFunctionExpression" ||
        node.callee.type === "FunctionExpression"
        ? traverseContains(node.arguments, isImpure) ||
            traverseContains(node.callee.params, isImpure) ||
            traverseContains(node.callee.body, isImpure) ||
            skip
        : true;
    case "AssignmentExpression":
    case "NewExpression":
    case "OptionalCallExpression":
    case "TaggedTemplateExpression":
    case "ThrowStatement":
    case "UpdateExpression":
      return true;
    case "UnaryExpression":
      return node.operator === "delete";
  }
}

function isNullableExpr(expr: t.Expression): boolean {
  switch (expr.type) {
    case "ArrayExpression":
    case "ArrowFunctionExpression":
    case "BigIntLiteral":
    case "BinaryExpression":
    case "BooleanLiteral":
    case "ClassExpression":
    case "FunctionExpression":
    case "NewExpression":
    case "NumericLiteral":
    case "ObjectExpression":
    case "RegExpLiteral":
    case "StringLiteral":
    case "TemplateLiteral":
    case "UpdateExpression":
      return false;
    case "AssignmentExpression":
      switch (expr.operator) {
        case "=":
          return isNullableExpr(expr.right);
        case "*=":
        case "/=":
        case "%=":
        case "+=":
        case "-=":
        case "<<=":
        case ">>=":
        case ">>>=":
        case "&=":
        case "^=":
        case "|=":
        case "**=":
          return false;
        case "||=":
        case "??=":
          // The left operand can only be the result when it is truthy
          // (`||=`) or non-nullish (`??=`), so only the right can be nullish.
          return isNullableExpr(expr.right);
        case "&&=":
          return (
            isNullableExpr(expr.left as t.Expression) ||
            isNullableExpr(expr.right)
          );
        default:
          return true;
      }
    case "AwaitExpression":
      return isNullableExpr(expr.argument);
    case "ConditionalExpression":
      return isNullableExpr(expr.consequent) || isNullableExpr(expr.alternate);
    case "LogicalExpression":
      switch (expr.operator) {
        case "||":
        case "??":
          // The left operand can only be the result when it is truthy (`||`)
          // or non-nullish (`??`), so only the right can be nullish.
          return isNullableExpr(expr.right);
        case "&&":
          return isNullableExpr(expr.left) || isNullableExpr(expr.right);
        default:
          return true;
      }
    case "ParenthesizedExpression":
      return isNullableExpr(expr.expression);
    case "SequenceExpression":
      return isNullableExpr(expr.expressions[expr.expressions.length - 1]);
    case "UnaryExpression":
      return expr.operator === "void";
    default:
      return true;
  }
}
