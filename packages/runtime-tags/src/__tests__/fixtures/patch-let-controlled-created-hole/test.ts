import type { TestConfig } from "../../main.test";

// A controlled `<let>` read in a branch a patch creates follows its controller:
// the server's value, with no client init.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
  ],
};
