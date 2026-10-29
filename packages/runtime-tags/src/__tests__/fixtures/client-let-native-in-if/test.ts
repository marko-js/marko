import type { TestConfig } from "../../main.test";

// patch-client-let-native-in-if without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "b", label: "a", more: true },
    { tag: "i", label: "b", more: true },
    { tag: "i", label: "c", more: false },
    { tag: "i", label: "d", more: true },
  ],
};
