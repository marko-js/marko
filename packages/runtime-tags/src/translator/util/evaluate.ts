import type { types as t } from "@marko/compiler";
import { computeNode } from "@marko/compiler/babel-utils";

import { skip, traverseContains } from "./traverse";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    confident?: boolean;
    computed?: unknown;
    nullable?: boolean;
    /** Evaluating it has no side effects, so an unread value can go. */
    pure?: boolean;
  }
}

export default function evaluate<T extends t.Expression>(value: T) {
  let { extra } = value;

  if (!extra) {
    extra = value.extra = {};
  }

  if (extra.confident === undefined) {
    const computed = computeNode(value);
    if (computed) {
      extra.computed = computed.value;
      extra.confident = true;
      extra.nullable = computed.value == null;
      extra.pure = true;
    } else {
      extra.computed = undefined;
      extra.confident = false;
      extra.nullable = isNullableExpr(value);
      extra.pure = !traverseContains(value, isImpure);
    }
  }

  return extra as T["extra"] & {
    confident: boolean;
    nullable: boolean;
    computed: unknown;
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
