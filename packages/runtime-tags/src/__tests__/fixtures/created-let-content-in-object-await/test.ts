import type { TestConfig } from "../../main.test";

// patch-created-let-content-in-object-await without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "b" }],
};
