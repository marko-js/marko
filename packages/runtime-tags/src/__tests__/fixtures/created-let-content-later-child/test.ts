import type { TestConfig } from "../../main.test";

// patch-created-let-content-later-child without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "b" }],
};
