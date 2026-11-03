import type { TestConfig } from "../../main.test";

// Controllables in a branch: the page writes their values only where a
// client render of the branch reads them.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, value: "SECRET_v1", flag: true },
    { show: true, value: "SHOWN_v2", flag: false },
    { show: false, value: "SECRET_v3", flag: true },
  ],
};
