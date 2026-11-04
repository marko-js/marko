import type { TestConfig } from "../../main.test";

// A <define> through a const reads the content it is handed in its own client code,
// on a page with none that links its module: the patch names it by its shell.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, { show: false }, { show: true }],
};
