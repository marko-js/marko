import type { TestConfig } from "../../main.test";

// patch-hoist-getter-script without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }],
};
