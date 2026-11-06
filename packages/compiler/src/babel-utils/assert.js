// Messages open with a bare "Tag" on purpose: the code frame they are thrown
// with already marks the tag, so naming it again is redundant.
export function assertAllowedAttributes(path, allowed) {
  for (const attr of path.node.attributes) {
    if (attr.type === "MarkoSpreadAttribute") {
      throw buildRangeError(
        path,
        attr,
        attr,
        `Tag does not support spread attributes.`,
      );
    } else if (!allowed.includes(attr.name)) {
      throw buildRangeError(
        path,
        attr,
        attr,
        `Tag does not support the \`${attr.name}\` attribute.`,
      );
    }
  }
}

export function assertNoAttributes(path) {
  const { attributes } = path.node;
  if (attributes.length) {
    throw buildRangeError(
      path,
      attributes[0],
      attributes[attributes.length - 1],
      "Tag does not support attributes.",
    );
  }
}

export function assertNoParams(path) {
  const { params } = path.node.body;
  if (params.length) {
    throw buildRangeError(
      path,
      params[0],
      params[params.length - 1],
      "Tag does not support parameters.",
    );
  }
}

export function assertNoAttributeTags(path, hint) {
  const [attrTag] = path.node.attributeTags;
  if (attrTag) {
    throw buildRangeError(
      path,
      attrTag,
      attrTag,
      `Tag does not support nested attribute tags.${hint ? ` ${hint}` : ""}`,
    );
  }
}

export function assertNoArgs(path, hint) {
  const args = path.node.arguments;
  if (args && args.length) {
    throw buildRangeError(
      path,
      args[0],
      args[args.length - 1],
      `Tag does not support arguments.${hint ? ` ${hint}` : ""}`,
    );
  }
}

export function assertNoVar(path) {
  const tagVar = path.node.var;
  if (tagVar) {
    throw buildRangeError(
      path,
      tagVar,
      tagVar,
      "Tag does not support a variable.",
    );
  }
}

export function assertAttributesOrArgs(path) {
  const { node } = path;
  const args = node.arguments;
  // A body alongside arguments is legal here (dynamic tag fallback content);
  // `assertAttributesOrSingleArg` rejects it for custom tags.
  if (args && args.length && node.attributes.length > 0) {
    throw buildRangeError(
      path,
      args[0],
      args[args.length - 1],
      "Tag does not support arguments when attributes or body present.",
    );
  }
}

export function assertAttributesOrSingleArg(path) {
  assertAttributesOrArgs(path);
  const args = path.node.arguments;
  if (
    args &&
    args.length &&
    path.node.body.body.some((child) => child.type !== "MarkoComment")
  ) {
    throw buildRangeError(
      path,
      args[0],
      args[args.length - 1],
      "Tag does not support arguments when attributes or body present.",
    );
  }
  if (args && args.length > 1) {
    throw buildRangeError(
      path,
      args[1],
      args[args.length - 1],
      "Tag does not support multiple arguments.",
    );
  }
  if (args && args[0]?.type === "SpreadElement") {
    throw buildRangeError(
      path,
      args[0],
      args[0],
      "Tag does not support spread arguments.",
    );
  }
}

// An error spanning `first` through `last`; a node a migrator or transform
// builds has no `loc`, so the error then marks the tag.
function buildRangeError(path, first, last, msg) {
  return path.hub.buildError(
    first.loc && last.loc
      ? { loc: { start: first.loc.start, end: last.loc.end } }
      : path.node,
    msg,
  );
}
