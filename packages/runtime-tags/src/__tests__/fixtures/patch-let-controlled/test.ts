import type { TestConfig } from "../../main.test";

// A controlled `<let>` nothing assigns, read with changing input: a patch writes
// the value it follows.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
  ],
};
