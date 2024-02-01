import { types as t } from "@marko/compiler";
import { isOutputDOM } from "../util/marko-config";
import { getAssignmentGenerator } from "../util/replace-assignments";

export default {
  translate: {
    exit(assignment: t.NodePath<t.UpdateExpression>) {
      if (isOutputDOM()) {
        const generator = getAssignmentGenerator(
          assignment,
          (assignment.node.argument as t.Identifier).name,
        );

        if (generator) {
          const replacement = generator(
            assignment,
            t.binaryExpression(
              assignment.node.operator === "++" ? "+" : "-",
              assignment.node.argument,
              t.numericLiteral(1),
            ),
          );
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
