import { types as t } from "@marko/compiler";
export function toFirstExpressionOrBlock(stmts: t.Statement[]) {
  if (stmts.length === 1 && t.isExpressionStatement(stmts[0])) {
    return toParenthesizedExpressionIfNeeded(stmts[0].expression);
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
