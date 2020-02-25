export default function(path) {
  const { node, hub } = path;
  const { rawValue, start } = node;
  const [exportNode] = hub.parse(rawValue, start).body;
  path.replaceWith(exportNode);
}
