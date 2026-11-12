import type { TestConfig } from "../../main.test";

// Two tries whose `@catch` reads a child's tag variable, one caught by the document and one
// by a patch, in a template without client work and no caller: neither wires the variable.
export const config: TestConfig = {
  patches: true,
  steps: [
    { early: true, label: "a", count: 1 },
    { early: true, late: true, label: "a", count: 1 },
  ],
};
