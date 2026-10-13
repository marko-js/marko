import { types as t } from "@marko/compiler";
export function toOnlyExpressionOrBlock(stmts: t.Statement[]) {
  if (stmts.length === 1 && t.isExpressionStatement(stmts[0])) {
    return stmts[0].expression;
  }

  return t.blockStatement(stmts);
}

export function toOnlyStatementOrBlock(body: t.Statement[]) {
  if (body.length === 1) {
    return body[0];
  }

  return t.blockStatement(body);
}
