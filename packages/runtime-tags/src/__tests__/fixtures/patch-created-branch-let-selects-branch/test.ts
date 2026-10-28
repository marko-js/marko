import type { TestConfig } from "../../main.test";

// A `<let>` nothing assigns selects a branch in a branch a patch creates: the
// patch writes the inner branch, and an input read there fills by the outer's groups.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, open: true, label: "a" },
    { show: true, open: true, label: "b" },
    { show: true, open: true, label: "c" },
    { show: false, open: false, label: "d" },
    { show: true, open: false, label: "e" },
  ],
};
