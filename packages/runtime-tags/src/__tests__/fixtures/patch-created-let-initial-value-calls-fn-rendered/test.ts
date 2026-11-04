import type { TestConfig } from "../../main.test";

// patch-created-let-initial-value-calls-fn where a hole renders the same call:
// the patch writes that hole, so the intersection still runs no setup.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    { show: true, v: "a", w: "3" },
    { show: false, v: "b", w: "4" },
    { show: true, v: "b", w: "5" },
  ],
};
