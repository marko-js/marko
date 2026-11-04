import type { TestConfig } from "../../main.test";
// A call passing its child one of two functions: the child's script re-runs as
// the choice or what the chosen one captures changes, and not on the same input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    { title: "a", upper: true },
    { title: "b", upper: true },
    { title: "b", upper: true },
  ],
};
