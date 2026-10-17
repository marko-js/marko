import type { TestConfig } from "../../main.test";

// A dynamic tag passes its args after the new body's setup writes the shell.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, color: "red" },
    { show: true, color: "red" },
    { show: true, color: "blue" },
  ],
};
