import type { TestConfig } from "../../main.test";

// patch-page-child-let-tag-built-object without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, { label: "c" }],
};
