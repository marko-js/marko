import type { types as t } from "@marko/compiler";

const assignmentGeneratorMaps = new WeakMap<
  t.Node,
  Record<string, (assignment: t.NodePath, value: t.Expression) => t.Expression>
>();

export function getAssignmentGenerator(
  assignment: t.NodePath,
  identifier: string,
) {
  return assignmentGeneratorMaps.get(assignment.node)?.[identifier];
}

export function registerAssignmentGenerator(
  binding: t.Binding,
  map: (assignment: t.NodePath, value: t.Expression) => t.Expression,
): void {
  for (const assignment of binding.constantViolations) {
    let generatorMap = assignmentGeneratorMaps.get(assignment.node);
    if (!generatorMap) {
      generatorMap = {};
      assignmentGeneratorMaps.set(assignment.node, generatorMap);
    }
    generatorMap[binding.identifier.name] = map;
  }
}
