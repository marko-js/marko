import type { TestConfig } from "../../main.test";

// An effect reads a content local where the child renders that content in its
// `<if>`: each patch re-runs it with the new value, created again or not.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, prefix: "a" },
    { show: true, prefix: "b" },
    { show: false, prefix: "c" },
    { show: true, prefix: "d" },
    { show: true, prefix: "e" },
  ],
};
