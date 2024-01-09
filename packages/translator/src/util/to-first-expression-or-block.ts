import { types as t } from "@marko/compiler";
export default function toFirstExpressionOrBlock(
  body: t.BlockStatement | t.MarkoTagBody,
) {
  const nodes = body.body;
  if (nodes.length === 1 && t.isExpressionStatement(nodes[0])) {
    return nodes[0].expression;
  }

  if (t.isBlockStatement(body)) {
    return body;
  }

  return t.blockStatement(nodes);
}
