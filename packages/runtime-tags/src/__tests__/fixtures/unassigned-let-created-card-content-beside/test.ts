import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-card-content-beside without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ on: true, n: 1, w: "b" }],
};
