import type { types as t } from "@marko/compiler";

const assignmentReplacer = new WeakMap<
  t.Node,
  (assignment: t.NodePath, value: t.Expression) => t.Expression
>();

export function getReplacement(assignment: t.NodePath, value: t.Expression) {
  return assignmentReplacer.get(assignment.node)?.(assignment, value);
}

export function registerAssignmentReplacer(
  binding: t.Binding,
  map: (assignment: t.NodePath, value: t.Expression) => t.Expression
): void {
  for (const assignment of binding.constantViolations) {
    assignmentReplacer.set(assignment.node, map);
  }
}
