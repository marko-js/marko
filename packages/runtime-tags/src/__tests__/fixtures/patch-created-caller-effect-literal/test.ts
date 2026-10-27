import type { TestConfig } from "../../main.test";

// A created child's effect reads an input its caller passes as a literal: no
// entry re-runs it, so the scope's setup envelope mounts it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
