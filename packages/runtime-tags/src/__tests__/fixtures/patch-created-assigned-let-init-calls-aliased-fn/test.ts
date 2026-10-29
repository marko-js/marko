import type { TestConfig } from "../../main.test";

// patch-created-assigned-let-init-calls-local-fn calling the function through an
// alias: only the seeded join reads it, so a flush creating the scope writes none.
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
