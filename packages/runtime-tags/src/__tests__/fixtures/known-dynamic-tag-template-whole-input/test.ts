import type { TestConfig } from "../../main.test";

// patch-known-dynamic-tag-template-whole-input without patches.
export const config: TestConfig = {
  steps: [{ framed: true, label: "a" }],
};
