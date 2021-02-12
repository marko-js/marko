export default function(path) {
  // Tracks parser positions for use in the translator.
  const { node } = path;
  const extra = (node.extra = node.extra || {});
  extra.nameStart = node.name.start;
}
