import type { TestConfig } from "../../main.test";

// patch-client-let-native-void without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "input", label: "a" },
    { tag: "br", label: "b" },
  ],
};
