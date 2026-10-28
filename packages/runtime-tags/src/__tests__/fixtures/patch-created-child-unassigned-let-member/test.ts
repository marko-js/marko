import type { TestConfig } from "../../main.test";

// A never-assigned `<let>` a flush creates seeds only the members its
// renders read.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
