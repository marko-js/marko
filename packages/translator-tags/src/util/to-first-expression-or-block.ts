import { types as t } from "@marko/compiler";
export function toFirstExpressionOrBlock(stmts: t.Statement[]) {
  if (stmts.length === 1 && t.isExpressionStatement(stmts[0])) {
    const { expression } = stmts[0];
    switch (expression.type) {
      case "ObjectExpression":
      case "AssignmentExpression":
        return toParenthesizedExpressionIfNeeded(expression);
      default:
        return expression;
    }
  }

  return t.blockStatement(stmts);
}

export function toParenthesizedExpressionIfNeeded(expr: t.Expression) {
  switch (expr.type) {
    case "ObjectExpression":
    case "AssignmentExpression":
      return t.parenthesizedExpression(expr);
    default:
      return expr;
  }
}
