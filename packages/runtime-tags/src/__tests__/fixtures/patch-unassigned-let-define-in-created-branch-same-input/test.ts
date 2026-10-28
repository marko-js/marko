import type { TestConfig } from "../../main.test";

// An unassigned `<let>` declared in a branch a patch creates and read by a `<define>`
// body called there, its input unchanged.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "a" },
    { show: false, v: "a" },
    { show: true, v: "a" },
  ],
};
