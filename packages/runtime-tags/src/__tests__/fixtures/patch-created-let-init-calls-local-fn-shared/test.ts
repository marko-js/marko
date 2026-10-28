import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-local-fn where a hole reads the same call: the
// flush writes that hole, so the join has no client work in its scope.
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
