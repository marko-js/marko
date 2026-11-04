import type { TestConfig } from "../../main.test";

// A dynamic tag's variable in a branch a patch creates, then updates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, which: true, a: "a" },
    { show: true, which: true, a: "b" },
    { show: true, which: false, a: "c" },
    { show: false, which: false, a: "d" },
    { show: true, which: false, a: "e" },
  ],
};
