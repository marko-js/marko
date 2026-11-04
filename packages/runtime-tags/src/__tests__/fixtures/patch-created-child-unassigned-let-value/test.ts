import type { TestConfig } from "../../main.test";

// A never-assigned `<let>` a flush creates seeds the value its render reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
