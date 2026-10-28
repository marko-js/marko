import type { TestConfig } from "../../main.test";

// A created child's source-less `<const>` a script reads arrives with it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
