import type { TestConfig } from "../../main.test";

// patch-loop-join-effect-runs-once without patches: the client renders the
// changed row's script once.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ items: ["p", "q"] }, { items: ["r", "q"] }],
};
