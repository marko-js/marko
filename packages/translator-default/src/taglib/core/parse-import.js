export default function(path) {
  const { node, hub } = path;
  const { rawValue, start } = node;
  const [importNode] = hub.parse(rawValue, start).body;
  path.replaceWith(importNode);
}
