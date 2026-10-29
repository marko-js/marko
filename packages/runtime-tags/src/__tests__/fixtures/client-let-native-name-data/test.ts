import type { TestConfig } from "../../main.test";

// patch-client-let-native-name-data without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
  ],
};
