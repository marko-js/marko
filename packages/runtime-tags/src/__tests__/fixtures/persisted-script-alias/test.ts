import type { TestConfig } from "../../main.test";

// A script reading an alias chain of a server value re-runs when the
// chain's root refreshes.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { value: "v1", title: "t1" },
    { value: "v2", title: "t2" },
  ],
};
