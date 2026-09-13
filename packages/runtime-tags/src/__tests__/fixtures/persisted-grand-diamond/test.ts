import type { TestConfig } from "../../main.test";

// A diamond-shaped tree (one template reached through two paths) is not
// a cycle: the memo resolves, and the fill reaches both leaves.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, { note: "n2" }],
};
