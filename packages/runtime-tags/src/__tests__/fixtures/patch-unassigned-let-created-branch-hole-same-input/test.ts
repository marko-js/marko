import type { TestConfig } from "../../main.test";

// An unassigned `<let>` read in a branch a patch creates, with its input unchanged: a
// fresh render shows the client's value, which only the created init renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "a" },
    { show: false, v: "a" },
    { show: true, v: "a" },
  ],
};
