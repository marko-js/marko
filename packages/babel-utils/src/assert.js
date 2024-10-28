export function assertAllowedAttributes(path, allowed) {
  let i = 0;
  for (const attr of path.node.attributes) {
    if (attr.type === "MarkoSpreadAttribute") {
      throw path.hub.buildError(
        attr,
        `Tag does not support spread attributes.`,
      );
    } else if (!allowed.includes(attr.name)) {
      throw path.hub.buildError(
        attr,
        `Tag does not support the \`${attr.name}\` attribute.`,
      );
    }

    i++;
  }
}

export function assertNoAttributes(path) {
  const { attributes } = path.node;
  if (attributes.length) {
    const start = attributes[0].loc.start;
    const end = attributes[attributes.length - 1].loc.end;
    throw path.hub.buildError(
      { loc: { start, end } },
      "Tag does not support attributes.",
    );
  }
}

export function assertNoParams(path) {
  const { params } = path.node.body;
  if (params.length) {
    const start = params[0].loc.start;
    const end = params[params.length - 1].loc.end;
    throw path.hub.buildError(
      { loc: { start, end } },
      "Tag does not support parameters.",
    );
  }
}

export function assertNoAttributeTags(path) {
  if (path.node.attributeTags.length) {
    throw path.hub.buildError(
      path.node.attributeTags[0],
      "Tag not support nested attribute tags.",
    );
  }
}

export function assertNoArgs(path) {
  const args = path.node.arguments;
  if (args && args.length) {
    const start = args[0].loc.start;
    const end = args[args.length - 1].loc.end;
    throw path.hub.buildError(
      { loc: { start, end } },
      "Tag does not support arguments.",
    );
  }
}

export function assertNoVar(path) {
  if (path.node.var) {
    throw path.hub.buildError(
      path.node.var,
      "Tag does not support a variable.",
    );
  }
}

export function assertAttributesOrArgs(path) {
  const { node } = path;
  const args = node.arguments;
  if (args && args.length && (node.attributes.length > 0 || node.body.length)) {
    const start = args[0].loc.start;
    const end = args[args.length - 1].loc.end;
    throw path.hub.buildError(
      { loc: { start, end } },
      "Tag does not support arguments when attributes or body present.",
    );
  }
}

export function assertAttributesOrSingleArg(path) {
  assertAttributesOrArgs(path);
  const args = path.node.arguments;
  if (args && args.length > 1) {
    const start = args[1].loc.start;
    const end = args[args.length - 1].loc.end;
    throw path.hub.buildError(
      { loc: { start, end } },
      "Tag does not support multiple arguments.",
    );
  }
}
