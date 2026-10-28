import type { TestConfig } from "../../main.test";

// The plain twin of patch-catch-created-nested-effects.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { msg: "a", show: true, items: [1], v: 1 },
    { fail: true, msg: "b", show: true, items: [1], v: 1 },
    { fail: true, msg: "c", show: true, items: [1, 2], v: 2 },
    { msg: "d", show: true, items: [1], v: 3 },
  ],
};
