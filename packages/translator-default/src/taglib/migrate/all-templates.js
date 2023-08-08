import { types as t } from "@marko/compiler";
import withPreviousLocation from "../../util/with-previous-location";
import { diagnosticDeprecate } from "@marko/babel-utils";
const kHadAssignment = Symbol();

export default {
  AssignmentExpression(path, state) {
    if (
      !state[kHadAssignment] &&
      path.node.left.type === "Identifier" &&
      path.node.left.name === "data"
    ) {
      state[kHadAssignment] = true;

      let root = path.parentPath;
      while (root.parentPath.type !== "Program") {
        root = root.parentPath;
      }

      root.insertBefore(
        t.markoScriptlet([
          t.variableDeclaration("var", [
            t.variableDeclarator(t.identifier("data")),
          ]),
        ])
      );
    }
  },
  ReferencedIdentifier(path, state) {
    if (
      !state[kHadAssignment] &&
      path.node.name === "data" &&
      !path.scope.hasBinding("data")
    ) {
      diagnosticDeprecate(path, {
        label: "The 'data' variable is deprecated. Use 'input' instead.",
        fix() {
          path.replaceWith(
            withPreviousLocation(t.identifier("input"), path.node)
          );
        },
      });
    }
  },
};
