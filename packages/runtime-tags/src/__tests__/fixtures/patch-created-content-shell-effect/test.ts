import type { TestConfig } from "../../main.test";

// Content a patch creates from its shell with nothing to write still mounts
// its shell's effect once its entry applies.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
