import type { TestConfig } from "../../main.test";

// A spread's keys land in a created child's whole input as they are: the
// function beside the rendered member stays unregistered.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
