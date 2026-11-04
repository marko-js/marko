import type { TestConfig } from "../../main.test";
// A child's script reading an object literal its call passes re-runs by what the
// literal is built from, which the call records for the child's entries.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
