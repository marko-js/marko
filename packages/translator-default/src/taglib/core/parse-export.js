import { parseScript } from "@marko/babel-utils";

export default function(path) {
  const {
    node,
    hub: { file }
  } = path;
  const {
    rawValue,
    name: { start }
  } = node;
  const [exportNode] = parseScript(file, rawValue, start).body;
  path.replaceWith(exportNode);
}
