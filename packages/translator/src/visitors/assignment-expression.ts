import { types as t } from "@marko/compiler";
import { isOutputDOM } from "../util/marko-config";
import { getReplacement } from "../util/replace-assignments";

export default {
  translate: {
    exit(assignment: t.NodePath<t.AssignmentExpression>) {
      if (isOutputDOM()) {
        const value =
          assignment.node.operator === "="
            ? assignment.node.right
            : t.binaryExpression(
                assignment.node.operator.slice(
                  0,
                  -1,
                ) as t.BinaryExpression["operator"],
                assignment.node.left as t.Identifier,
                assignment.node.right,
              );
        const replacement = getReplacement(assignment, value);

        if (replacement) {
          assignment.replaceWith(replacement);
        }
      }
    },
  },
};
