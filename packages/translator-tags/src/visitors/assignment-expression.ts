import { types as t } from "@marko/compiler";
import { isOutputDOM } from "../util/marko-config";
import { getAssignmentGenerator } from "../util/replace-assignments";

export default {
  translate: {
    exit(assignment: t.NodePath<t.AssignmentExpression>) {
      if (isOutputDOM()) {
        if (assignment.node.left.type === "ObjectPattern") {
          for (const prop of assignment.node.left.properties) {
            const value = t.isObjectProperty(prop)
              ? (prop.value as t.Identifier).name
              : (prop.argument as t.Identifier).name;

            const generator = getAssignmentGenerator(assignment, value);
            if (generator) {
              const valueId = assignment.scope.generateUidIdentifier(value);

              assignment.insertBefore(
                t.variableDeclaration("let", [t.variableDeclarator(valueId)]),
              );
              if (t.isObjectProperty(prop)) {
                prop.value = valueId;
              } else {
                prop.argument = valueId;
              }
              assignment.insertAfter(generator(assignment, valueId));
            }
          }
        } else {
          const generator = getAssignmentGenerator(
            assignment,
            (assignment.node.left as t.Identifier).name,
          );

          if (generator) {
            assignment.replaceWith(
              generator(
                assignment,
                assignment.node.operator === "="
                  ? assignment.node.right
                  : t.binaryExpression(
                      assignment.node.operator.slice(
                        0,
                        -1,
                      ) as t.BinaryExpression["operator"],
                      assignment.node.left as t.Identifier,
                      assignment.node.right,
                    ),
              ),
            );
          }
        }
      }
    },
  },
};
