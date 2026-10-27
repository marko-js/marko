import type { TestConfig } from "../../main.test";

// A function a loop's item hands a created child's `<let>` registers: the
// item holds an element of the loop's list, not the attribute's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
