import { types as t } from "@marko/compiler";

export default function replaceAssignments(
  binding: t.Binding,
  map: (value: t.Expression) => t.Expression
): void {
  for (const assignment of binding.constantViolations) {
    let value: t.Expression | undefined;
    if (assignment.isUpdateExpression()) {
      value = t.binaryExpression(
        assignment.node.operator === "++" ? "+" : "-",
        binding.identifier,
        t.numericLiteral(1)
      );
    } else if (assignment.isAssignmentExpression()) {
      value =
        assignment.node.operator === "="
          ? assignment.node.right
          : t.binaryExpression(
              assignment.node.operator.slice(
                0,
                -1
              ) as t.BinaryExpression["operator"],
              binding.identifier,
              assignment.node.right
            );
    }

    if (value) {
      assignment.parentPath!.replaceWith(map(value));
    }
  }
}
