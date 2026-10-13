import type { TestConfig } from "../../main.test";

// Content reading a root param, rendered with client-state args.
export const config: TestConfig = {
  patches: true,
  steps: [{ suffix: "a" }, { suffix: "b" }],
};
