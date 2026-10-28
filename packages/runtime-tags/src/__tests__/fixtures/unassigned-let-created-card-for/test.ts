import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-card-for without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { on: false, n: 0, w: "a", items: [] },
    { on: true, n: 1, w: "b", items: ["x", "y"] },
    { on: true, n: 0, w: "c", items: ["z"] },
  ],
};
