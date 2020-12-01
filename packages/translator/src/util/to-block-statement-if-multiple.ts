import { types as t } from "@marko/babel-types";
export default function toBlockStatementIfMultiple<T extends t.Statement[]>(
  nodes: T
) {
  if (nodes.length === 1) {
    return nodes[0];
  } else {
    return t.blockStatement(nodes);
  }
}
