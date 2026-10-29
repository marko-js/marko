import type { TestConfig } from "../../main.test";

// patch-client-let-fn-closure-chain without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }],
};
