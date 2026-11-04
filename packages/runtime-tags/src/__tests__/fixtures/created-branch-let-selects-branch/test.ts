import type { TestConfig } from "../../main.test";

// The plain twin of patch-created-branch-let-selects-branch: the client renders
// each input.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, open: true, label: "a" },
    { show: true, open: true, label: "b" },
    { show: true, open: true, label: "c" },
    { show: false, open: false, label: "d" },
    { show: true, open: false, label: "e" },
  ],
};
