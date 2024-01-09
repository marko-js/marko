import { types as t } from "@marko/compiler";
export default function toFirstStatementOrBlock(
  body: t.BlockStatement | t.MarkoTagBody,
) {
  const nodes = body.body;

  if (nodes.length === 1) {
    return nodes[0];
  }

  if (t.isBlockStatement(body)) {
    return body;
  }

  return t.blockStatement(nodes);
}
