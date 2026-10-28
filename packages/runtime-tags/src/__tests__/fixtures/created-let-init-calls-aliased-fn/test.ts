import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-aliased-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "a", w: "1" }],
};
