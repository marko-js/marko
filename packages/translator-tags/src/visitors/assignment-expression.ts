import { types as t } from "@marko/compiler";
import { isOutputDOM } from "../util/marko-config";
import { getSection } from "../util/sections";
import { currentProgramPath } from "./program";

export default {
  translate: {
    exit(assignment: t.NodePath<t.AssignmentExpression>) {
      if (isOutputDOM()) {
        handleDestructure(assignment, assignment.node.left);
      }
    },
  },
};

function handleDestructure(
  assignment: t.NodePath<t.AssignmentExpression>,
  node: t.Node,
) {
  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        handleDestructure(assignment, prop);
      }
      break;
    case "ArrayPattern":
      for (const i in node.elements) {
        if (node.elements[i] === null) continue;

        handleDestructure(assignment, node.elements[i]!);
      }
      break;
    case "RestElement":
      handleDestructure(assignment, node.argument);
      break;
    case "ObjectProperty":
      handleDestructure(assignment, node.value);
      break;
    case "Identifier": {
      const source = node.extra?.source;
      if (source) {
        const section = getSection(assignment);
        (currentProgramPath.node.extra.assignments ??= []).push([
          section,
          assignment,
        ]);
      }
      break;
    }
  }
}
