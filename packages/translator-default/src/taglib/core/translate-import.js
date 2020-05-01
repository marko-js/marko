export function enter(path) {
  const { node, hub } = path;
  const { source } = node;
  const { lookup } = hub;

  if (source.value[0] === "<") {
    const tagName = source.value.slice(1, -1);
    const tagDef = lookup.getTag(tagName);
    const requirePath = hub.resolveRelativePath(
      tagDef.renderer || tagDef.template
    );
    source.value = requirePath;
  }
}
