import type { TestConfig } from "../../main.test";

// A child's script reading a rest copy of its input re-runs by what the input its
// call builds is built from.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
