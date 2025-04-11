import type { types as t } from "@marko/compiler";
import { computeNode } from "@marko/compiler/babel-utils";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    confident?: boolean;
    computed?: unknown;
    nullable?: boolean;
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
    } else {
      extra.computed = undefined;
      extra.confident = false;
      extra.nullable = isNullableExpr(value);
    }
  }

  return extra as T["extra"] & {
    confident: boolean;
    nullable: boolean;
    computed: unknown;
  };
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
          return (
            isNullableExpr(expr.right) ||
            isNullableExpr(expr.left as t.Expression)
          );
        case "&&=":
          return (
            isNullableExpr(expr.left as t.Expression) &&
            isNullableExpr(expr.right)
          );
        default:
          return true;
      }
    case "AwaitExpression":
      return isNullableExpr(expr.argument);
    case "ConditionalExpression":
      return isNullableExpr(expr.consequent) && isNullableExpr(expr.alternate);
    case "LogicalExpression":
      switch (expr.operator) {
        case "||":
        case "??":
          return isNullableExpr(expr.right) || isNullableExpr(expr.left);
        case "&&":
          return isNullableExpr(expr.left) && isNullableExpr(expr.right);
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
