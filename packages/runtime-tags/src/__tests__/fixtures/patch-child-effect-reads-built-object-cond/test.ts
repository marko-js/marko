import type { TestConfig } from "../../main.test";
// A child's script reading an object its call builds under a condition re-runs by
// what the object is built from, which the call records.
export const config: TestConfig = {
  patches: true,
  steps: [
    { flag: true, title: "a" },
    { flag: true, title: "b" },
    { flag: true, title: "b" },
  ],
};
