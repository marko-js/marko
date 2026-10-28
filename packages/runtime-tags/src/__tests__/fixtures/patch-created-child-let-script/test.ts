import type { TestConfig } from "../../main.test";

// A created child's unassigned `<let>` a script reads arrives with it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
