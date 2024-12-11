import { types as t } from "@marko/compiler";
export default function toFirstExpressionOrBlock(stmts: t.Statement[]) {
  if (stmts.length === 1 && t.isExpressionStatement(stmts[0])) {
    const { expression } = stmts[0];
    switch (expression.type) {
      case "ObjectExpression":
      case "AssignmentExpression":
        return t.parenthesizedExpression(expression);
      default:
        return expression;
    }
  }

  return t.blockStatement(stmts);
}
