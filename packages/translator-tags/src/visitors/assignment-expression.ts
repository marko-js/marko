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
      ) {
        if (node.type === "ObjectPattern") {
          for (const prop of node.properties) {
            handleDestructure(prop);
          }
        } else if (node.type === "ArrayPattern") {
          for (const i in node.elements) {
            if (node.elements[i] === null) continue;

            const newIdentifier = handleDestructure(node.elements[i]!);
            if (newIdentifier) {
              node.elements[i] = newIdentifier;
            }
          }
        } else if (node.type === "RestElement") {
          const newIdentifier = handleDestructure(node.argument);
          if (newIdentifier) {
            node.argument = newIdentifier;
          }
        } else if (node.type === "ObjectProperty") {
          const newIdentifier = handleDestructure(node.value);
          if (newIdentifier) {
            node.value = newIdentifier;
          }
        } else if (node.type === "Identifier") {
          const generator = getAssignmentGenerator(assignment, node.name);
          if (generator) {
            const valueId = assignment.scope.generateUidIdentifier(node.name);

            assignment.insertBefore(
              t.variableDeclaration("let", [t.variableDeclarator(valueId)]),
            );
            assignment.insertAfter(generator(assignment, valueId));
            return valueId;
          }
        }
      }
    },
  },
};
