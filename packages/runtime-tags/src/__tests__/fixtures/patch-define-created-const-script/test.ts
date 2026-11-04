import type { TestConfig } from "../../main.test";

// A created `<define>` body's source-less `<const>` a script reads arrives
// with it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
