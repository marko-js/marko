import type { TestConfig } from "../../main.test";

// patch-page-child-let-native-built-object without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
  ],
};
