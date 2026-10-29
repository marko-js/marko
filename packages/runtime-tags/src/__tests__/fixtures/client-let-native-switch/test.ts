import type { TestConfig } from "../../main.test";

// patch-client-let-native-switch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
    { tag: "i", label: "c" },
  ],
};
