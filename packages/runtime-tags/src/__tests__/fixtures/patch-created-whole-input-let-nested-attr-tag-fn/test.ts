import type { TestConfig } from "../../main.test";

// A function in an attribute tag under control flow in another attribute tag
// registers by both tags' names.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, on: true, label: "a" },
    { show: true, on: true, label: "b" },
  ],
};
