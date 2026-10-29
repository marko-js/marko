import type { TestConfig } from "../../main.test";

// patch-page-child-let-native-read without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "b", label: "a", more: false },
    { tag: "b", label: "b", more: true },
    { tag: "i", label: "c", more: true },
  ],
};
