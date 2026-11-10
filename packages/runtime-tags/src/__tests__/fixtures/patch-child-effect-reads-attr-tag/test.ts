import type { TestConfig } from "../../main.test";

// A child's script reading an attribute tag its call builds re-runs by what the tag
// is built from, which the call records for the child's entries.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
