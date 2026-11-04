import type { TestConfig } from "../../main.test";

// The same, rendered by a caller passing client state for the label: the
// client builds the function, so the flush seeds the value it captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
