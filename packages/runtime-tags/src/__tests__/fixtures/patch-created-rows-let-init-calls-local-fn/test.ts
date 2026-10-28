import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-local-fn in rows a flush creates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    { show: true, v: "a", w: "3" },
  ],
};
