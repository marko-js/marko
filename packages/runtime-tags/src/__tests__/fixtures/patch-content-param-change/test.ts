import type { TestConfig } from "../../main.test";

// Content reading a root param, rendered by a child with client state.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ suffix: "a" }, { suffix: "b" }],
};
