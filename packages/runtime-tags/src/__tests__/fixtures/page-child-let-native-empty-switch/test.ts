import type { TestConfig } from "../../main.test";

// patch-page-child-let-native-empty-switch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "b", label: "a" },
    { tag: "", label: "b" },
  ],
};
