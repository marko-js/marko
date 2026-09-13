import type { TestConfig } from "../../main.test";

// A rest grain nested under a named property still maps its feeders
// through both hops: patches reach the deep read.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "l1" }, { label: "l2" }],
};
