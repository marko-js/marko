import type { TestConfig } from "../../main.test";

// A function in an array element of a created child's `<let>` that no render
// reads stays unregistered: the seed carries only the rendered `label`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
