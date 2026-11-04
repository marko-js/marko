import type { TestConfig } from "../../main.test";

// A created recursive tag passes its function down to each child's `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
