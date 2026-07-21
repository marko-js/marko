import { types as t } from "@marko/compiler";
export function toFirstExpressionOrBlock(stmts: t.Statement[]) {
  if (stmts.length === 1 && t.isExpressionStatement(stmts[0])) {
    return stmts[0].expression;
  }

  return t.blockStatement(stmts);
}
