import type { TestConfig } from "../../main.test";

// A static loop and a static unescaped hole in a created branch.
export const config: TestConfig = {
  patches: true,
  steps: [{}, { show: "yes" }],
};
