import type { TestConfig } from "../../main.test";

// Constant controls render no value: a patch creating them writes no control
// entry, and their setup sets them.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, note: "a" },
    { show: true, note: "b" },
  ],
};
