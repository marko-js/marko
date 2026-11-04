import type { TestConfig } from "../../main.test";

// patch-let-row-attr-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }],
};
