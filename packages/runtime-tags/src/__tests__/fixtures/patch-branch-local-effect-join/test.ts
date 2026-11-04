import type { TestConfig } from "../../main.test";

// A branch local an effect reads joins another server input in a hole the patch
// writes: the effect's write keeps the local current, as no join write does.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", y: "q", show: true },
    { x: "r", y: "s", show: true },
    { x: "t", y: "u", show: true },
  ],
};
