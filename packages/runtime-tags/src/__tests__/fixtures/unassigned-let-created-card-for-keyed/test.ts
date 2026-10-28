import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-card-for-keyed without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ on: true, items: [1, 2], w: "b" }],
};
