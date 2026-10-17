import type { TestConfig } from "../../main.test";

// A branch a patch creates mounts every child's effects before its own: a
// composed child (inner first), a define body, a row, a nested branch, content
// and a dynamic tag's body (from its registered renderer, after its own child),
// each after the rows its own entry creates.
export const config: TestConfig = {
  patches: true,
  steps: [{}, { show: true, items: ["a"], nested: true }],
};
