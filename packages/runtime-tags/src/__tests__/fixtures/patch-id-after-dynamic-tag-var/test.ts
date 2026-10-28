import type { TestConfig } from "../../main.test";

// An id after a dynamic tag with a tag variable keeps its address.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true }, { show: false }, { show: true }],
};
