import type { TestConfig } from "../../main.test";

// patch-created-let-content-through-child-let without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "b" }],
};
