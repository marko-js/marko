export default function(path) {
  const attributes = path.get("attributes");
  const nameAttr = attributes.find(attr => attr.get("name").node === "name");

  if (!nameAttr) {
    throw path
      .get("name")
      .buildCodeFrameError('The "name" attribute is required on "macro" tags.');
  }

  if (attributes.length > 1) {
    throw attributes[attributes[0] === nameAttr ? 1 : 0].buildCodeFrameError(
      'The "macro" tag can only have a "name" attribute.'
    );
  }

  const nameAttrValue = nameAttr.get("value");

  if (!nameAttrValue.isStringLiteral()) {
    throw nameAttrValue.buildCodeFrameError(
      'The "name" attribute for "macro" tags must be a string literal.'
    );
  }

  const name = nameAttrValue.node.value;
  const { file } = path.hub;

  if (file.metadata.marko.macros[name]) {
    throw nameAttr.buildCodeFrameError(
      `A macro with the name "${name}" already exists.`
    );
  }

  file.metadata.marko.macros[name] = file.scope.generateUid(name);
}
