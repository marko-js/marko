import type { TestConfig } from "../../main.test";

// A function in an array element of a created child's `<let>` that its render
// calls registers, by the element's index in the seed's path.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
