import { types as t } from "@marko/compiler";
export default function toFirstStatementOrBlock(
  body: t.BlockStatement | t.Statement[],
) {
  if (Array.isArray(body)) {
    if (body.length === 1) {
      return body[0];
    }

    return t.blockStatement(body);
  }

  return body;
}
