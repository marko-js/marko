import type { TestConfig } from "../../main.test";

// A created child's assigned `<let>` a script reads is seeded.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
