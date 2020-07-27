export default function(path) {
  const {
    node,
    hub: { file }
  } = path;
  const {
    rawValue,
    name: { start }
  } = node;
  const [importNode] = file.parse(rawValue, start).body;
  path.replaceWith(importNode);
}
