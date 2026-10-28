import type { TestConfig } from "../../main.test";

// patch-created-let-content-beside-registered without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "b", on: true, note: "b" }],
};
