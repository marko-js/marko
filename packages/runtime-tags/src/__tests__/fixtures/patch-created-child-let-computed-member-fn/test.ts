import type { TestConfig } from "../../main.test";

// A function under a computed key reaches a created child's `<let>` that
// seeds only a member: the function registers.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
