import type { TestConfig } from "../../main.test";

// patch-page-child-let-native-void-switch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "input", label: "a" },
    { tag: "input", label: "b" },
    { tag: "br", label: "c" },
  ],
};
