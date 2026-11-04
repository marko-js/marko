import type { TestConfig } from "../../main.test";

// A `<let>` only a `<define>` body's branch on a constant param reads is never
// written, yet a scope a patch creates still takes its fill: the client reads it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
