import { types as t } from "@marko/compiler";
import { isOutputDOM } from "../util/marko-config";
import { getAssignmentGenerator } from "../util/replace-assignments";

export default {
  translate: {
    exit(assignment: t.NodePath<t.AssignmentExpression>) {
      if (isOutputDOM()) {
        if (
          assignment.node.left.type === "ObjectPattern" ||
          assignment.node.left.type === "ArrayPattern"
        ) {
          handleDestructure(assignment.node.left);
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

      function handleDestructure(
        node: t.LVal | t.ObjectProperty | t.ObjectProperty["value"],
        replace?: (value: t.Identifier) => void,
      ) {
        switch (node.type) {
          case "ObjectPattern":
            for (const prop of node.properties) {
              handleDestructure(prop);
            }
            break;
          case "ArrayPattern":
            for (const i in node.elements) {
              if (node.elements[i] === null) continue;

              handleDestructure(
                node.elements[i]!,
                (id) => (node.elements[i] = id),
              );
            }
            break;
          case "RestElement":
            handleDestructure(node.argument, (id) => (node.argument = id));
            break;
          case "ObjectProperty":
            handleDestructure(node.value, (id) => (node.value = id));
            break;
          case "Identifier":
            {
              const generator = getAssignmentGenerator(assignment, node.name);
              if (generator) {
                const valueId = assignment.scope.generateUidIdentifier(
                  node.name,
                );

                assignment.insertBefore(
                  t.variableDeclaration("let", [t.variableDeclarator(valueId)]),
                );
                replace?.(valueId);
                assignment.insertAfter(generator(assignment, valueId));
              }
            }
            break;
        }
      }
    },
  },
};
