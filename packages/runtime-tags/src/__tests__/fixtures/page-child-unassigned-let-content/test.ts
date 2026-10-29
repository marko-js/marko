import type { TestConfig } from "../../main.test";

// patch-page-child-unassigned-let-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }],
};
