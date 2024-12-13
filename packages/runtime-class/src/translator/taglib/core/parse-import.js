import { parseStatements } from "@marko/compiler/babel-utils";

export default function (path) {
  const {
    node,
    hub: { file },
  } = path;
  const {
    rawValue,
    name: { start, end },
  } = node;
  const [importNode] = parseStatements(file, rawValue, start, end);
  path.replaceWith(importNode);
}
