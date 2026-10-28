import type { TestConfig } from "../../main.test";

// patch-created-let-content-beside-marked-bind without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "b", title: "b" }],
};
