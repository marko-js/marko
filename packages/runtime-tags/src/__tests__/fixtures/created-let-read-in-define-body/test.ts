import type { TestConfig } from "../../main.test";

// patch-created-let-read-in-define-body without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "a" }],
};
