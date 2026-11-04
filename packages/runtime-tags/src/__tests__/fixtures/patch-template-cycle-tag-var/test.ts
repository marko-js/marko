import type { TestConfig } from "../../main.test";

// A tag variable on the tag closing an import cycle (a dynamic tag), in a
// branch a patch creates: its entry fills the variable.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, n: 2 },
    { show: true, n: 2 },
    { show: true, n: 3 },
  ],
};
