import type { TestConfig } from "../../main.test";

// Content reading a root param, rendered in a child's stateful `<if>`.
export const config: TestConfig = {
  patches: true,
  steps: [{ suffix: "a" }, { suffix: "b" }],
};
