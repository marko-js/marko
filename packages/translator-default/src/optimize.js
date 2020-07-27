import { normalizeTemplateString } from "@marko/babel-utils";
import { enter } from "./util/plugin-hooks";
import { types as t } from "@marko/babel-types";

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
    enter(path) {
      const { hub } = path;
      const importDef = hub.lookup.getTag("import");

      if (importDef && importDef.codeGeneratorModulePath) {
        const codeGenerator = require(importDef.codeGeneratorModulePath);
        enter(codeGenerator, path, t);
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
