import { parseStatements } from "@marko/babel-utils";

export default function (path) {
  const {
    node,
    hub: { file }
  } = path;
  const {
    rawValue,
    name: { start, end }
  } = node;
  const [exportNode] = parseStatements(file, rawValue, start, end);
  path.replaceWith(exportNode);
}
