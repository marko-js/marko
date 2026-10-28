import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-local-fn where a handler assigns the `<let>`: a
// flush creating its scope still seeds it, so names no init for the join.
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
