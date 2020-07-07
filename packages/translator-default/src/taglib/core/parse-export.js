export default function(path) {
  const {
    node,
    hub: { file }
  } = path;
  const { rawValue, start } = node;
  const [exportNode] = file.parse(rawValue, start).body;
  path.replaceWith(exportNode);
}
