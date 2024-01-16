import { types as t } from "@marko/compiler";
import { isOutputDOM } from "../util/marko-config";
import { getReplacement } from "../util/replace-assignments";

export default {
  translate: {
    exit(assignment: t.NodePath<t.UpdateExpression>) {
      if (isOutputDOM()) {
        const value = t.binaryExpression(
          assignment.node.operator === "++" ? "+" : "-",
          assignment.node.argument,
          t.numericLiteral(1),
        );
        const replacement = getReplacement(assignment, value);

        if (replacement) {
          assignment.replaceWith(
            assignment.node.prefix ||
              assignment.parentPath.isExpressionStatement()
              ? replacement
              : t.sequenceExpression([replacement, assignment.node.argument]),
          );
        }
      }
    },
  },
};
