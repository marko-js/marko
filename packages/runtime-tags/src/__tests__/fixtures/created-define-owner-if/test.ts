import type { TestConfig } from "../../main.test";

// patch-created-define-owner-if without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ on: true, n: 1, w: "b" }],
};
