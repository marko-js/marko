import type { TestConfig } from "../../main.test";

// patch-created-let-content-beside-resident-template without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ which: false, label: "b", show: true }],
};
