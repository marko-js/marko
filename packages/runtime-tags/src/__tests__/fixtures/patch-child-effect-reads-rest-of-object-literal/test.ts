import type { TestConfig } from "../../main.test";

// A child's script reading a rest copy of an object literal its call passes re-runs
// by what the literal is built from.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
