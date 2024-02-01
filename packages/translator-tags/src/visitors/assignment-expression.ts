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
          handleDestructure(assignment, assignment.node.left);
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

function handleDestructure(
  assignment: t.NodePath,
  node: t.LVal | t.ObjectProperty | t.ObjectProperty["value"],
  ctx?: {
    statement: t.NodePath;
    end: t.NodePath;
  },
  replace?: (value: t.Identifier) => void,
) {
  if (!ctx) {
    ctx = {
      statement: assignment.getStatementParent()!,
      end: assignment.getStatementParent()!,
    };
  }

  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        handleDestructure(assignment, prop, ctx);
      }
      break;
    case "ArrayPattern":
      for (const i in node.elements) {
        if (node.elements[i] === null) continue;

        handleDestructure(
          assignment,
          node.elements[i]!,
          ctx,
          (id) => (node.elements[i] = id),
        );
      }
      break;
    case "RestElement":
      handleDestructure(
        assignment,
        node.argument,
        ctx,
        (id) => (node.argument = id),
      );
      break;
    case "ObjectProperty":
      handleDestructure(assignment, node.value, ctx, (id) => (node.value = id));
      break;
    case "Identifier":
      {
        const generator = getAssignmentGenerator(assignment, node.name);
        if (generator) {
          const valueId = ctx.statement.scope.generateUidIdentifier(node.name);

          ctx.statement.insertBefore(
            t.variableDeclaration("let", [t.variableDeclarator(valueId)]),
          );
          replace?.(valueId);
          [ctx.end] = ctx.end.insertAfter(
            t.expressionStatement(generator(ctx.statement, valueId)),
          );
        }
      }
      break;
  }
}
