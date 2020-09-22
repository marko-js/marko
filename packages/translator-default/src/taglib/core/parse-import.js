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
  const [importNode] = parseScript(file, rawValue, start).body;
  path.replaceWith(importNode);
}
