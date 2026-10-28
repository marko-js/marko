import type { TestConfig } from "../../main.test";

// patch-created-let-content-document-load without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "b" }],
};
