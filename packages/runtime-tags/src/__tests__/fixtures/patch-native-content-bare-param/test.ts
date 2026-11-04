import type { TestConfig } from "../../main.test";

// Content a patch creates as a native tag's leaves a bare param empty, as the
// document renders it: no tag passes the content input.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, { show: true }, { show: false }],
};
