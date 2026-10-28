import type { TestConfig } from "../../main.test";

// A branch a patch creates holds an unassigned `<let>` (assigned only by a handler
// nothing registers) joined with changing input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "b", w: "2" },
    { show: true, v: "b", w: "3" },
  ],
};
