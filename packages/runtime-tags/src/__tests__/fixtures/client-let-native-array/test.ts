import type { TestConfig } from "../../main.test";

// patch-client-let-native-array without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
  ],
};
