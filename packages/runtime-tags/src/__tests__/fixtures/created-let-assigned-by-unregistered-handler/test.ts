import type { TestConfig } from "../../main.test";

// patch-created-let-assigned-by-unregistered-handler without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "b", w: "2" },
    { show: true, v: "b", w: "3" },
  ],
};
