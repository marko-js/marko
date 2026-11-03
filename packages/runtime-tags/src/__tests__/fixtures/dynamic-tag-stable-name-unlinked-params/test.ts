import type { TestConfig } from "../../main.test";

// The plain twin of patch-dynamic-tag-stable-name-unlinked-params: the client renders
// each input.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, { show: false }, { show: true }],
};
