import type { TestConfig } from "../../main.test";

// patch-unassigned-let-in-created-branch-dynamic-tag-unregistered-assign without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "b" }],
};
