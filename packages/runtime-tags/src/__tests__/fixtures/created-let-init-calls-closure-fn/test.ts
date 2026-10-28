import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-closure-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, inner: true, v: "a", w: "1" }],
};
