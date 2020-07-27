import { normalizeTemplateString } from "@marko/babel-utils";

export const visitor = {
  ExpressionStatement(path) {
    let curPath = path;
    const quasis = [""];
    const expressions = [];
    const removals = [];

    do {
      const content = getOutContent(curPath);
      if (!content) break;
      if (curPath !== path) removals.push(curPath);
      quasis.push("");
      expressions.push(content);
    } while ((curPath = curPath.getNextSibling()));

    removals.forEach(removal => removal.remove());

    if (expressions.length > 1) {
      path
        .get("expression.arguments.0")
        .replaceWith(normalizeTemplateString(quasis, ...expressions));
    }
  },
  ImportDeclaration: {
    exit(path) {
      const {
        node,
        hub: { file }
      } = path;
      const { source } = node;

      if (source.value[0] === "<") {
        const tagName = source.value.slice(1, -1);
        const tagDef = file._lookup.getTag(tagName);
        const tagEntry = tagDef && (tagDef.renderer || tagDef.template);
        const relativePath = tagEntry && file.resolveRelativePath(tagEntry);

        if (!relativePath) {
          throw path
            .get("source")
            .buildCodeFrameError(
              `Unable to find entry point for custom tag <${tagName}>.`
            );
        }

        source.value = relativePath;
      }

      if (
        source.value.endsWith(".marko") &&
        !file.metadata.marko.tags.includes(source.value)
      ) {
        file.metadata.marko.tags.push(source.value);
      }
    }
  }
};

function getOutContent(path) {
  if (path.isExpressionStatement()) {
    return getOutContent(path.get("expression"));
  }

  return (
    path.isCallExpression() &&
    path.get("callee").isMemberExpression() &&
    path.get("callee.object.name").node === "out" &&
    path.get("callee.property.name").node === "w" &&
    path.get("arguments.0").node
  );
}
