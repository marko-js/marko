export default function (path) {
  const { node } = path;
  path.replaceWithMultiple(node.body);
}
