import type { TestConfig } from "../../main.test";

// patch-created-let-initial-value-calls-fn where the initial value it reads is a
// constant: no client sets it, so the intersection runs no setup anywhere.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, w: "1" },
    { show: true, w: "2" },
    { show: true, w: "3" },
  ],
};
